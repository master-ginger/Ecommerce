import '../App.css';
import model2 from '../images/model2.jpg';
import ProductCard from './ProductCard';
import Card from './Card';
import shoe from '../images/shoe.png';
import jeans from "../images/jeans.png";
import { IoMdGlobe,IoIosLock } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";
import { Link } from 'react-router-dom';
import products from '../products.json';

export default function Homepage(){
    return(
        <div className='bg-[#79644e]'>
        <div className="relative bg-model lg:h-screen h-[400px] bg-cover">
          <div className='absolute bg-white h-full w-full opacity-30'></div>
          <div className=' relative '>
            <ul className='hidden lg:visible lg:flex justify-between px-[10px] pt-[10px] bg-slate-50 bg-opacity-60 '>
                <li className='text-3xl'>Logo</li>
                <li className='flex w-1/3 justify-between'>
                    <div>Women</div>
                    <div>Men</div>
                    <div>Accessories</div>
                </li>
                <li className='flex w-1/6 justify-around'>
                    <Link to="/about"><div>About</div></Link>
                    <div>Login</div>
                    <div>Signup</div>
                    
                </li>
                
            </ul>

            <div className='lg:pl-[150px] lg:pt-[150px] text-center lg:text-start mx-5'>
                <div className='lg:w-[600px] lg:text-7xl font-bold lg:leading-normal text-4xl lg:pt-0  pt-[100px]'>Raining Offers For Hot Summer!</div>
                <div className='lg:text-2xl font-bold text-xl'>25% Off On All Products</div>
                <div className='flex text-xl lg:justify-start justify-center'>
                    <button className='bg-black border-[1px] border-black hover:bg-transparent text-white hover:text-black transition delay-75 px-3 py-1 mt-3 mr-2'>Shop Now</button>
                    <button className='bg-transparent hover:bg-black hover:text-white border-[1px] border-black px-3 py-1 mt-3 transition delay-75'>Find More</button>
                </div>
            </div>
          </div>
        </div>

        <div className='grid gap-3 lg:grid-cols-3 grid-cols-1 mt-[50px] mx-[20px] lg:mt-[100px] lg:mx-[100px] items-center'>
            <Card headline="20% of on tank tops" imageURL={model2}/>
            <Card headline="20% of on tank tops" imageURL={model2}/>
            <Card headline="20% of on tank tops" imageURL={model2}/>
        </div>
        <div className='text-center  text-4xl mt-[50px] lg:mb-[10px] font-semibold'>Featured Products</div>
        <div className='grid gap-2 lg:grid-cols-5 grid-cols-2 lg:mx-[100px] lg:mt-[20px] p-2'>
            {products.map((product)=>(
                <Link key={product.id} to={`/productpage/${product.id}`}><ProductCard title={product.title} image={product.url} price={product.price}/></Link>
            ))}
            
        </div>
        <br/>
                <div className='flex justify-center '>
                    <div className='w-[90%] h-[500px] bg-model2 bg-cover bg-opacity-50 '>
                        <div className='bg-white w-full h-full bg-opacity-20  lg:pl-20 lg:pt-20 '>
                            <div className=' border-[2px] border-black lg:w-1/3 p-10  bg-black text-white' >
                            <div className='text-xl font-bold '>Limited Time Offer</div>
                            <div className='text-5xl font-bold '>Special Edition</div><br/>
                            <div className='lg:text-lg lg:leading-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repudiandae debitis hic dignissimos iure? Fugit ex nam</div>
                            <button className='lg:px-5 lg:py-2 lg:mt-[10px] border-[2px] border-black bg-white text-black '>Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
        <div className='grid grid-cols-2 lg:grid-cols-4 lg:mx-[100px] items-center mx-4' >
            <div className=' mr-5 text-center'>
                <div className='flex justify-center'><IoMdGlobe className='lg:text-[100px] text-[50px]'/></div>
                <div className='lg:text-2xl font-bold'>Worldwide Shipping</div>
            </div>
            <div className=' mr-5 text-center'>
            <div className='flex justify-center'><GiClothes className='lg:text-[100px] text-[50px] '/></div>
                <div className='lg:text-2xl font-bold'>Premium Clothes</div>
            </div>
            <div className=' mr-5 text-center'><br/>
            <div className='flex justify-center'><MdLocalOffer className='lg:text-[80px] text-[50px]'/></div>
                <div className='lg:text-2xl font-bold'>Best Offers</div>
            </div>
            <div className=' mr-5 text-center'>
            <div className='flex justify-center'><IoIosLock className='lg:text-[100px] text-[50px]'/></div>
                <div className='lg:text-2xl font-bold'>Secure Payments</div>
            </div>
        </div>
        <br/><br/>
    </div>
    )
}


