const typeRemover = require('./typeRemover')

const codeTextAreaElm = document.getElementById('code')
const convertButtonElm = document.getElementById('remove-types-btn')
const resultContainerElm = document.getElementById('result-container')
const resultElm = document.getElementById('result')
const copyButtonElm = document.getElementById('copy-to-clipboard')

const htmlDecoder = (html) => {
  const parser = new DOMParser
  const dom = parser.parseFromString(html, 'text/html')

  return dom.body.textContent
}
const copyToClipboard = str => {
  const el = document.createElement('textarea')
  el.value = htmlDecoder(str)
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select();
  document.execCommand('copy')
  document.body.removeChild(el)
};

copyButtonElm.addEventListener('click', () => {
  copyToClipboard(resultElm.innerHTML)
})
convertButtonElm.addEventListener('click', (e) => {
  const pastedCode = codeTextAreaElm.value

  if (codeTextAreaElm.value.length) {
    resultContainerElm.style.display = 'block'
    resultElm.innerHTML = typeRemover(pastedCode)
  }
})
