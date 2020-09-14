'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @name FlatList
 * @param {array} list an array of items to loop and render
 * @param {function} listView a function that receives each element in array and renders the result
 * @param {any} prepend an optional object/element/item that is added to the beginning of the result array
 * @param {any} append an optional object/element/item that is added to the end result array
 */
function FlatList(props) {
    const { list, listView } = props;
    if (!Array.isArray(list))
        return null;
    const listItems = list.map(listView);
    props.prepend && listItems.unshift(props.prepend);
    props.append && listItems.push(props.append);
    return listItems.filter(i => i);
}

exports.FlatList = FlatList;
