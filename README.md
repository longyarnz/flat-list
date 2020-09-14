# FlatList

Are you that type of developer that loves to write clean and sweet code for other developers to read, understand and extend without friction? Then FlatList is for you. FlatList receives an array of items and returns JSX elements computed from each item in the array, without breaking your JSX flow. It eliminates the use of array map blocks in JSX and enables seamless flow in JSX.
For example, if you want to render an array of todos, you write:

```js
function RenderTodos(props) {
  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <>
            <span>{todo.name}</span>
            <span>{todo.done}</span>
            <span>{todo.createdAt}</span>
            <span>{todo.cancelled}</span>
          </>
        );
      })}
    </div>
  );
}
```

Depending on your app, your use case may be more complex with lots of expresions making your JSX look messy. To make your code look cleaner and readable, you can write:

```js
function RenderForAdmin(props) {
  return (
    <div>
      <FlatList
        list={todos}
        listView={(todo, i) => {
          return (
            <>
              <span>{todo.name}</span>
              <span>{todo.done}</span>
              <span>{todo.createdAt}</span>
              <span>{todo.cancelled}</span>
            </>
          );
        }}
      />
    </div>
  );
}
```

## How to install

```sh
yarn add flat-list
```

OR

```sh
npm i flat-list
```

## How to use

```js
import { FlatList } from "flat-list";

function RenderIfAdmin(props) {
  const todos = fetchTodos();

  return (
    <FlatList
      list={todos}
      prepend={<h1>Todo App</h1>}
      append={<footer>End of Todos</footer>}
      listView={(todo, i) => {
        return (
          <>
            <span>{todo.name}</span>
            <span>{todo.done}</span>
            <span>{todo.createdAt}</span>
            <span>{todo.cancelled}</span>
          </>
        );
      }}
    />
  );
}
```

## Props

- **list**: An array of items to loop and render
- **listView**: A function that receives each element in array and renders the result
- **prepend**: An optional object/element/item that is added to the beginning of the result array
- **append**: An optional object/element/item that is added to the end of the result array
