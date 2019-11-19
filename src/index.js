const typeRemover = require('./typeRemover')

const codeTextAreaElm = document.getElementById('code')
const convertButtonElm = document.getElementById('remove-types')
const resultElm = document.getElementById('result')

convertButtonElm.addEventListener('click', (e) => {
  const pastedCode = codeTextAreaElm.value
  resultElm.innerHTML = typeRemover(pastedCode)
})
