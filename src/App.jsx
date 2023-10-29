import './App.css'
import { Header, Sidebar, Content } from './components'
import AddList from './components/AddList/AddList'

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <AddList />
      <Content />
    </>
  )
}

export default App
