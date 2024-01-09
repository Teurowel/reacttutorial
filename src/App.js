import Button from "./Button"
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)
  
  console.log("i run all time")
  
  useEffect(() => {
    console.log("CALL API")
  }, []);

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      {/* <Button text="What"/> */}
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
