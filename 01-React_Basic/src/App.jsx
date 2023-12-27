import { useState } from 'react';
import Profile from "./profile"
import ShopingList from "./ShopingList"
function MyButton(){
  let [count,setCount] = useState(10);
  // function handleClick(){
  //   setCount(count+1)
  //   // alert('button clicked')
  // }
  function addValue(){
    setCount(count+1);
    if(count>=20){
      setCount(20);
    }
  }

  function decreaseValue(){
    setCount(count-1);
    if(count<=0){
      setCount(0);
    }
  }

  return(
    <>
      <h1>Counter Value : {count} </h1>
      <button onClick={addValue}>Add</button>
      <button onClick={decreaseValue}>Decrease</button>
      {/* <button onClick={handleClick}>click {count} times</button> */}
    </>
  )
}


function App() {
  return (
    <>
      <h1>Hey! its my first time learning react</h1>
      <MyButton/>
      <Profile/>
      <ShopingList />
    </>
  )
}

export default App
