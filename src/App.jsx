import styles from "./App.module.css";
import { Header, Sidebar, Content } from "./components";

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
