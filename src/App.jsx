import styles from "./App.module.css";
import { Header, Sidebar, Content } from "./components";
import AddList from "./components/AddList/AddList";

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <AddList />
        <Content />
      </div>
    </>
  );
}

export default App;
