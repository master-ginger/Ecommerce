import React from 'react';
import { FaStar } from "react-icons/fa";
export default function ProductCard({title,image,price}){
    const [rating,setRating]=React.useState(0)  
    
    const handleClick=(index)=>{setRating(index) }
    return(
        <div className='bg-black text-white  mt-[10px] p-4 leading-6 lg:pb-[20px] rounded-sm '>
            <div className='flex justify-center lg:h-[120px] lg:w-[200px] h-[80px]'>
                <img src={require(`../images/${image}`)}  alt='Shoe'/> 
            </div>
            <div className='text-lg font-bold'>{title}</div>
            <div className=' '>Men</div>
            <div className='flex'>
                <div className='line-through mr-2 '>${price+100}</div>
                <div className='font-bold'>${price}</div>   
            </div>
            <div className='flex mt-[10px]'>
                {[1,2,3,4,5].map((star)=>(
                    <FaStar key={star} onClick={()=>handleClick(star)} 
                    className={`${rating>=star ? 'text-yellow-300':'text-white' }`} />
                ))}    
            </div> 
        </div>
    )
}