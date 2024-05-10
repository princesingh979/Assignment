
"use client";
import React, { useEffect, useState ,useRef} from "react";

const Page = () => {
  const lotteryItems = ["Car", "airplane", "Bike", "Iphone", "Laptop", "Ipad", "TV", "Airpod", "Samsung", "LG"];
  const [lotteryId, setLotteryId] = useState(null);
  const myIntervalRef = useRef(null);
  const [ispaused, setIsPaused]=useState(false)
  const [choose, setChoose]=useState("")
  const [computerSelected, setComputerSelected]=useState("")
 

  useEffect(() => {
    myIntervalRef.current = setInterval(() => {
      if(!ispaused){
      const randomNum = Math.ceil(Math.random() * lotteryItems.length);
      setLotteryId(randomNum -1);
   } },  lotteryItems.length, 50);
  
    return () => clearInterval(myIntervalRef.current);
  }, [ispaused]) ;

  const toggleStop = () => {
    setIsPaused(!ispaused)
   
    if(!ispaused){
      setComputerSelected(lotteryItems[lotteryId])
    }
    else{
      setComputerSelected("!ispaused")
     
    }
   
  };

  return (
    <div className="flex flex-col items-center bg-">
       <h1 className="text-center text-2xl text-emerald-950 mt-3 bg-blue-500 p-3">Lottery Game</h1>
       
      <div className="items-center mt-2">
        <input onChange={(e)=>setChoose(e.target.value)} value={choose} className="p-4"  type="text" placeholder="Choose any one item" />
         <h1 className="mt-2">your selected item : {choose}</h1>
          <h1 className="mt-2">Computer selected:{computerSelected}</h1>
        </div> 
        <div className=" text-green-600 p-2 mt-2">{choose && computerSelected &&(choose===computerSelected ? "Congratulation you win !!" :"Sorry you loose !!")}</div>
    <div className="flex  justify-center items-center mt-10 flex-wrap">
      {lotteryItems.map((item, id) => {
        return (
          <div
            key={id}
            style={{ backgroundColor: id === lotteryId ? "red" : null }}
            className="w-32 shadow-lg m-2 p-2"
          >
            {item}
          </div>
        );
      })}
      <button onClick={toggleStop} className="bg-green-700 w-32 shadow-lg m-2 p-2 hover:bg-green-900 text-white">
        {ispaused?"START": "STOP"}
      </button>
    </div>
    </div>
  );
};

export default Page;
