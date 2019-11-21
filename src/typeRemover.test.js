const typeRemover = require('./typeRemover')

describe('typeRemover', () => {
  it('removes types from method arguments', () => {
    const input = 'export const onlyProps = (list: Array<string>, props: Object) => isEmpty(list) ? {} : pickByKeys(list, props)'
    const actual = typeRemover(input)
    const expected = 'export const onlyProps = (list, props) => isEmpty(list) ? {} : pickByKeys(list, props)'

    expect(actual).toEqual(expected)
  })

  it('removes types from variable declaration', () => {
    const input = 'const Pagination: StyledComponent<{}, *, *> = styled.div`' +
      'width: 9px;' +
      'height: 9px;' +
      'border-radius: 100%;' +
      'margin-right: 10px;' +
      'cursor: pointer;`'

    const actual = typeRemover(input)
    const expected = 'const Pagination = styled.div`' +
      'width: 9px;' +
      'height: 9px;' +
      'border-radius: 100%;' +
      'margin-right: 10px;' +
      'cursor: pointer;`'

    expect(actual).toEqual(expected)
  })

  it('removes types from method return type', () => {
    const input = 'export const onlyProps = (list: Array<string>, props: Object): Object => isEmpty(list) ? {} : pickByKeys(list, props)'
    const actual = typeRemover(input)
    const expected = 'export const onlyProps = (list, props) => isEmpty(list) ? {} : pickByKeys(list, props)'

    expect(actual).toEqual(expected)
  })

  it('removes types from methods inside styled-components', () => {
    const input = 'export const ModalTitle: StyledComponent<ModalTitleProps, *, *> = styled.h2`' +
      'text-align: center;' +
      'font-size: ${(props: ModalTitleProps) => props.fontSize || "24px"};'

    const actual = typeRemover(input)
    const expected = 'export const ModalTitle = styled.h2`' +
      'text-align: center;' +
      'font-size: ${(props) => props.fontSize || "24px"};'

    expect(actual).toEqual(expected)
  })
})
