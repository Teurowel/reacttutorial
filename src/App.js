//import Button from "./Button"
//import styles from "./App.module.css"
import { useEffect, useState, memo } from "react";
//import Form1 from "./Form1"
//import Form2 from "./Form2"
import CoinConverter from "./CoinConverter";
import Movie from "./components/Movie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

//const MemorizedForm = memo(Form2)

//TODO list app
// function App() {
//   // const [counter, setValue] = useState(0);
//   // const [keyword, setKeyword] = useState("");

//   // const onClick = () => setValue((prev) => prev + 1)
//   // const onChange = (event) => setKeyword(event.target.value)

//   // console.log("i run all time")

//   // useEffect(() => {
//   //   console.log("I run only once") //because not watching anything
//   // }, []);

//   // useEffect(() => {
//   //     console.log("I run when 'keyword' chagnes")
//   // }, [keyword]);

//   // useEffect(() => {
//   //   console.log("I run only 'counter' changes")
//   // }, [counter])

//   // return (
//   //   <div>
//   //     <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
//   //     <h1 className={styles.title}>{counter}</h1>
//   //     {/* <Button text="What"/> */}
//   //     <button onClick={onClick}>click me</button>
//   //   </div>
//   // );

//   // const [showing, setShowing] = useState(false);
//   // const onClick = () => setShowing((prev) => !prev);

//   // const [isChecked, setIsChecked] = useState(false);
//   // const onIsCheckedClicked = () => setIsChecked((prev) => !prev)

//   // console.log("App rerender", {isChecked})
//   // return(
//   //   <div>
//   //     {/* {showing ? <Form1 isChecked={isChecked}/> : <Form2 />} */}
//   //     <Form1 isChecked={isChecked}/>
//   //     <MemorizedForm />
//   //     <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
//   //     <button onClick={onIsCheckedClicked}>{isChecked? "Checked" : "Not checked"}</button>
//   //   </div>
//   // );

//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);

//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();

//     if(toDo === ""){
//       return;
//     }

//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//   }

//   console.log(toDos)

//   return (
//     <div>
//       <h1>My To Dos {(toDos.length)}</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
//         <button>Add To Do</button>
//       </form>

//       <hr />

//       <ul>
//         {toDos.map((item, index) => <li key={index}>{item}</li>)}
//       </ul>
//     </div>
//   );
// }

//Coin Tracker app
// function App() {
//   const [isLoading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [selectedCoinId, setSelectedCoinId] = useState("");

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setSelectedCoinId(json[0].id)

//         setLoading(false);
//       });
//       console.log("Get coin data")
//   }, [])

//   return (
//     <div>
//       <h1>The Coins! {isLoading ? "" : `(${coins.length})`}</h1>
//       {isLoading ?
//         <strong>Loading...</strong> :
//         <select value={selectedCoinId} onChange={e => setSelectedCoinId(e.target.value)}>
//           {coins.map((coin) =>
//             <option key={coin.id} value={coin.id}>
//               {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//             </option>
//           )}
//         </select>
//       }

//       {isLoading ?
//       null :
//       <CoinConverter coin={coins.find((coin) => {return coin.id === selectedCoinId})}/>
//       }

//       {/* <ul>
//         {coins.map((coin) =>
//         <li>
//           {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//         </li>)}
//       </ul> */}
//     </div>
//   );
// }

const App = () => {
  const router = createBrowserRouter([
    {
      path: `${process.env.PUBLIC_URL}/`,
      element: <Home />,
    },
    {
      path: "/movie/:id",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
