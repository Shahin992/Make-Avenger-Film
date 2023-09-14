/* eslint-disable react/prop-types */


const Cart = ({cart,totalCoast,totalRemaining}) => {
    console.log(cart);
    
  
    return (




        <div className='w-1/3 ml-10'>
             <h3 className=' text-3xl text-white font-semibold  mb-7'>Total Coast:{totalCoast}$</h3>

          <h3 className=' text-3xl text-white font-semibold  mb-7'>Remaining Balance:{totalRemaining}$</h3>
          <h3 className=' text-3xl text-white font-semibold  mb-7'>Your Selected list are below:</h3>
          

       
        {
          
         
          
          cart.map((cart) => (
           
            
                <div className=" bg-gray-300 p-3 mr-5">

                    
           <div className= "bg-white rounded-xl p-4  gap-y-5">
           <h3 className="text-2xl ml-7 font-semibold ">{cart.name}</h3>
           </div>
            
        </div>
                )
            )
        }
    </div>
    );
};

export default Cart;