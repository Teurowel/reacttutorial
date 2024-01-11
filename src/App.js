import Button from "./Button"
import styles from "./App.module.css"
import { useEffect, useState, memo } from "react";
import Form1 from "./Form1"
import Form2 from "./Form2"

const MemorizedForm = memo(Form2)

function App() {
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  
  // const onClick = () => setValue((prev) => prev + 1)
  // const onChange = (event) => setKeyword(event.target.value)

  // console.log("i run all time")
  
  // useEffect(() => {
  //   console.log("I run only once") //because not watching anything
  // }, []);

  // useEffect(() => {
  //     console.log("I run when 'keyword' chagnes")
  // }, [keyword]);

  // useEffect(() => {
  //   console.log("I run only 'counter' changes")
  // }, [counter])

  // return (
  //   <div>
  //     <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
  //     <h1 className={styles.title}>{counter}</h1>
  //     {/* <Button text="What"/> */}
  //     <button onClick={onClick}>click me</button>
  //   </div>
  // );

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  const [isChecked, setIsChecked] = useState(false);
  const onIsCheckedClicked = () => setIsChecked((prev) => !prev)

  console.log("App rerender", {isChecked})
  return(
    <div>
      {/* {showing ? <Form1 isChecked={isChecked}/> : <Form2 />} */}
      <Form1 isChecked={isChecked}/>
      <MemorizedForm />
      <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
      <button onClick={onIsCheckedClicked}>{isChecked? "Checked" : "Not checked"}</button>
    </div>
  );
   
}

export default App;
