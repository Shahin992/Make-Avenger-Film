import { useEffect, useState } from "react";


const Card = ({SelectBtn}) => {
    const [actor,setActor] = useState([])

    useEffect(()=>{
        fetch('../../../../public/data.json')
        .then(res => res.json())
        .then(data => setActor(data))

    },[])


    return (
        <div>

<div className="grid grid-cols-2 gap-16 justify-center items-center text-white">
           {
                actor.map((actor) => (
    
                    <div className='text-center border-4 h-[450px]  rounded-xl '>
                        <div className="flex justify-center  items-center my-5">
                        <img className="rounded-full" src={actor.image} alt="" />
                        </div>
                    <h3 className="text-5xl font-bold">{actor.name}</h3>
                    <h3 className="text-3xl font-semibold my-5">Country: {actor.country}</h3>
                    <div className="flex justify-between mb-7">
                        <h3 className="text-2xl font-semibold pl-7">Salary: {actor.salary}$</h3>
                        <h3 className="text-2xl font-semibold pr-7">Role: {actor.role}</h3>
                    </div>
                   <div className="mb-10">
                   <button  onClick={()=>SelectBtn(actor)} className=" text-3xl bg-sky-300 rounded-xl p-2">Select</button>
    
                   </div>
    
    
                    </div>
        
                ))
            }

           </div>
               
               

        </div>
    );
};

export default Card;