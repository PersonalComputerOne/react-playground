import ShoppingList from './ShoppingList';

const data = [
  {item: "eggs", quantity: 12, completed: false},
  {item: "milks", quantity: 2, completed: true},
  {item: "breads", quantity: 1, completed: false},
  {item: "bacons", quantity: 22, completed: true},
]

function App() {
  return (
    <>
      <ShoppingList items={data}/>
    </>
  )
}

export default App
