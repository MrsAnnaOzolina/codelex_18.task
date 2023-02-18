import TodoContextProvider from './components/Context'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'


function App() {
  return (
    <TodoContextProvider>
      <main 
      // className='App'
      >
        <h1>To do List</h1>
        <AddTodo />
        <Todos 
        />
      </main>
    </TodoContextProvider>
  )
}

export default App
