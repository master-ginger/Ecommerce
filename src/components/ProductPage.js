import shoes from '../images/shoe.png';
import { Link } from 'react-router-dom';
import products from '../products.json';
import { useParams } from 'react-router-dom';

export default function ProductPage({}){
    const { id }=useParams();
    const pid=parseInt(id,10)
    const product=products.find((p)=>p.id === pid);

    console.log('product id from URL: ',id);
    if(!product){
        return <div>Could not find product</div>
    }
    return(
        <div>
            <div>
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
            </div>
           <div className="flex justify-center">
            <div className='lg:ml-[100px] lg:mt-[100px]'><img src={require(`../images/${product.url}`)} height={500} width={500}/></div>
            <div className="lg:ml-[100px] lg:mt-[150px] lg:w-1/3">
                <div className="lg:text-4xl font-bold">{product.title}</div>
                <div className="text-xl lg:my-3">${product.price}</div>
                <div className="lg:mb-3">{product.description}</div>
                <div className="flex">
                    <label className='text-gray-500 lg:text-xl lg:mr-2'>Qty: </label>
                    <input type="number" className="lg:w-[40px] border-2 border-black px-1 text-xl" min='1'/>
                    <button className="lg:ml-2 bg-blue-500 lg:px-4 lg:py-1 rounded-sm lg:text-xl">Add to cart</button>
                </div>
            </div>
           </div>
        </div>
    )
}

