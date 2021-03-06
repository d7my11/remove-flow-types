const methodArgumentHandler = (match) =>
  match.split(',').map((arg) => arg.replace(/:.+/g, '')).join(',')

const rules = [
  { matcher: /(?<=\()(\n+)?(\s+)?([A-Za-z\s\n]*(?:\s)?:(?:\s)?[A-Za-z<>,]*.*?)+(\n+)?(?=\))/g, handler: methodArgumentHandler },
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
