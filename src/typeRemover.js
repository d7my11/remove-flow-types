const methodArgumentHandler = (match) => {
  console.log({match})
  return match.split(',').map((arg) => arg.replace(/:.+/g, '')).join(',')
}

const rules = [
  { matcher: /(?<=\()([A-Za-z]*(?:\s)?:(?:\s)?[A-Za-z<>]*.*?)(?=\))/g, handler: methodArgumentHandler },
  { matcher: /(?<=\()(\n+)?(\s+)([A-Za-z\s\n]*(?:\s)?:(?:\s)?[A-Za-z<>,]*.*?)+(\n+)(?=\))/g, handler: methodArgumentHandler },
  { matcher: /(:[A-Za-z<>*,\s{}]*?)(?=(\s\=))/g }
]

const typeRemover = (pastedCode) => {
  let result = pastedCode

  if (pastedCode.length) {
    rules.forEach((rule) => {
      result = result.replace(rule.matcher, rule.handler || '')
    })
  }

  return result
}

module.exports = typeRemover
