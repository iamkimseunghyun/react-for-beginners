import Button from "./Button";
import styles from "./App.module.css";


function App() {
  return (
    <div>
     <h1 className={styles.title}>Welcome back!</h1>
        <Button text={"리액트 빨리 배워야 한다!"}/>
    </div>
  );
}

export default App;
