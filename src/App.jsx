

import { useState } from "react";

import Cart from "./Components/Cart/Cart"
import Home from "./Components/Home/Home"



function App() {
  let remaining = 50000

  const [cart,setCart] = useState([]);
  const [totalCoast,setTotalCoast] = useState(0)
  let [totalRemaining,setTotalRemaining] = useState(remaining);
  

  
  const SelectBtn = cardItem =>{

    let count = cardItem.salary;
     

    const isItemInCart = cart.find((item) => item.name === cardItem.name);
   if(isItemInCart){
    
    alert("You added this once")
   }

   else{

    const newCart = [...cart,cardItem]

    cart.forEach((item)=>{
      count = count +item.salary
     })
  
     
  
     
     if(count > remaining){
      return alert("Insufficient Balance")
     }
     setTotalCoast(count);
  
     totalRemaining = remaining- count;
     setTotalRemaining(totalRemaining);
  


    setCart(newCart);
    
   }

   


    
 
  }
 


  return (
    <>
      
      <div className="flex justify-center items-center">
      <h1 className="text-5xl font-bold my-10 text-white">Avenger Film Maker</h1>
      </div>

      <div className="flex">
      <Home SelectBtn={SelectBtn}></Home>
      <Cart cart={(cart)} totalCoast={totalCoast} totalRemaining={totalRemaining}></Cart>
      </div>
      
      
      
    </>
  )
}

export default App
