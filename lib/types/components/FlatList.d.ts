declare type FlatListProps<T> = {
    list: T[];
    listView: (listItem: T, index: number, thisArr: T[]) => JSX.Element;
    prepend?: any;
    append?: any;
};
/**
 * @name FlatList
 * @param {array} list an array of items to loop and render
 * @param {function} listView a function that receives each element in array and renders the result
 * @param {any} prepend an optional object that is prepended to the result array
 * @param {any} append an optional object that is appended to the result array
 */
export declare function FlatList<T>(props: FlatListProps<T>): JSX.Element;
export {};
