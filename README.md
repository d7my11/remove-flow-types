# remove-flow-types
**Simple tool to remove all flow types from pasted code.**

Usually when you copy a code from a project with types and you try to run it in a browser console you have to manully remove all types,
well this tool does that for you.


***

## Examples:

### styled-components types:

```js
export const ModalContent: StyledComponent<ModalContentProps, *, *> = styled.div`
  min-height: ${(props: ModalContentProps) => props.minHeight || '500px'};
  padding: ${$sizes.lg};
`
```

will be converted to:

```js
export const ModalContent = styled.div`
  min-height: ${(props) => props.minHeight || '500px'};
  padding: ${$sizes.lg};
`
```

### method types:

```js
export const pickFromList = (list: Array<string>, props: Object): Object =>
  isEmpty(list) || isEmpty(props) ? {} : pickBy(props, (value: string, key: string) => list.indexOf(key) >= 0)
```

will be converted to:

```js
export const pickFromList = (list, props) =>
  isEmpty(list) || isEmpty(props) ? {} : pickBy(props, (value, key) => list.indexOf(key) >= 0)
```
