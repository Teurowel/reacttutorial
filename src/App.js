//import Button from "./Button"
//import styles from "./App.module.css"
import { useEffect, useState, memo } from "react";
//import Form1 from "./Form1"
//import Form2 from "./Form2"

//const MemorizedForm = memo(Form2)

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

  // const [showing, setShowing] = useState(false);
  // const onClick = () => setShowing((prev) => !prev);

  // const [isChecked, setIsChecked] = useState(false);
  // const onIsCheckedClicked = () => setIsChecked((prev) => !prev)

  // console.log("App rerender", {isChecked})
  // return(
  //   <div>
  //     {/* {showing ? <Form1 isChecked={isChecked}/> : <Form2 />} */}
  //     <Form1 isChecked={isChecked}/>
  //     <MemorizedForm />
  //     <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
  //     <button onClick={onIsCheckedClicked}>{isChecked? "Checked" : "Not checked"}</button>
  //   </div>
  // );

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); 
    
    if(toDo === ""){
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }

  console.log(toDos)

  return (
    <div>
      <h1>My To Dos {(toDos.length)}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      
      <hr />
      
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );   
}

export default App;
