const rule = {
  required (data) {
    return data === null || data === undefined || data === ''
  },
  spaceOnly (data) {
    const result = String(data).replace(/\s|　/g, '')
    return String(data).length > 0 && result.length < 1
  },
  min (data, length) {
    return String(data).length < length
  },
  max (data, length) {
    return String(data).length > length
  },
  minValue (data, limit) {
    return data < limit
  },
  maxValue (data, limit) {
    return data > limit
  },
  isNumber (data) {
    return String(data).match(/[^0-9]/)
  }
}

const limitTempText = (dataType) => {
  let temp = '文字'
  switch (dataType) {
    case 'number':
      temp = '桁'
      break
    default:
      break
  }
  return temp
}

const errorMessage = {
  required: {
    icon: 'fa fa-exclamation-triangle',
    text: '入力必須項目'
  },
  spaceOnly: {
    icon: 'fa fa-exclamation-triangle',
    text: `改行、スペースのみ`
  },
  min (length, dataType) {
    const temp = limitTempText(dataType)
    return {
      icon: 'fa fa-exclamation-triangle',
      text: `文字数制限：${length}${temp}以上。`
    }
  },
  max (length, dataType) {
    const temp = limitTempText(dataType)
    return {
      icon: 'fa fa-exclamation-triangle',
      text: `文字数制限：${length}${temp}以内。`
    }
  },
  minValue (limit, dataType) {
    return {
      icon: 'fa fa-exclamation-triangle',
      text: `制限値：${limit}以上。`
    }
  },
  maxValue (limit, dataType) {
    return {
      icon: 'fa fa-exclamation-triangle',
      text: `制限値：${limit}以内。`
    }
  },
  isNumber: {
    icon: 'fa fa-exclamation-triangle',
    text: '半角数字のみ可'
  }
}

/*
  order フォーマット
  order = {
    value: '',
    validation: {
      rules: [],
      isError: true,
      formClass: '',
    },
    type: 'string',
    skipFirstTime: true,
    dirty: true,
  }
 */
export default (order) => {

  order.validation.errors = []
  order.validation.isError = false
  order.validation.formClass = ''

  const value = order.value // バリデーションをかける対象
  const rules = order.validation.rules
  const type = order.type

  rules.forEach(elm => {
    const ruleName = (typeof elm === 'string') ? elm : Object.keys(elm)[0]
    const ruleFunc = rule[ruleName]
    const ruleValue = elm[ruleName] || null

    if (ruleFunc(value, ruleValue)) {
      order.validation.isError = true
      const errorsOjb = (typeof elm === 'string') ? errorMessage[ruleName] : errorMessage[ruleName](ruleValue, type)
      order.validation.errors.push(errorsOjb)
    }

  })

  // バリデーション結果によってcssクラスを付与する
  order.validation.formClass = order.validation.isError ? 'has-error' : ''

  if (order.skipFirstTime) {
    if (!order.dirty && value !== '') {
      // 初回入力、dirtyを変更
      order.dirty = true
    } else if (!order.dirty && value === '') {
      // 未入力、エラーを見えないように
      order.validation.formClass = ''
      order.validation.errors = []
    }
  }

  return order
}
