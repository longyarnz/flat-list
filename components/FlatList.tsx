type FlatListProps<T> = {
  list: T[]
  listView: (listItem: T, index: number, thisArr: T[]) => JSX.Element
  prepend?: any
  append?: any
}

/**
 * @name FlatList
 * @param {array} list an array of items to loop and render
 * @param {function} listView a function that receives each element in array and renders the result
 * @param {any} prepend an optional object/element/item that is added to the beginning of the result array
 * @param {any} append an optional object/element/item that is added to the end result array
 */
export function FlatList<T>(props: FlatListProps<T>) {
  const { list, listView } = props
  if (!Array.isArray(list)) return null

  const listItems = list.map(listView)
  props.prepend && listItems.unshift(props.prepend)
  props.append && listItems.push(props.append)
  return listItems.filter(i => i) as unknown as JSX.Element
}