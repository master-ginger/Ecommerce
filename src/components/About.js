import { Link } from "react-router-dom";
import team from "../images/team.jpg";
import TeamCard from "./TeamCard";
import prof from '../images/profile.jpg'
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
export default function About(){
    return(
        <div className="bg-[#a8ccff]">
            <div className="relative bg-model2 lg:h-[100%] h-[400px] bg-cover">
          <div className='absolute bg-white h-full w-full opacity-30'></div>
          <div className=' relative '>
            <ul className='hidden lg:visible lg:flex justify-between px-[10px] pt-[10px] bg-slate-50 bg-opacity-60 '>
                <Link to="/"><li className='text-3xl'>Logo</li></Link>
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
           
            <div className='text-center lg:pt-[200px] lg:pb-[200px] lg:text-6xl font-black '>
                About Us
            </div>
          </div>
        </div> 

            <div className="bg-white flex justify-between lg:py-[10px] lg:px-[10px] lg:mx-[100px] lg:mt-[30px]">
            <div className="lg:w-1/2 lg:pt-[150px] lg:mr-3">
                <div className="text-4xl font-bold overline decoration-blue-500">Who we are</div><br/>
                <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum repellat perspiciatis corporis labore dolor laudantium voluptas autem veniam architecto beatae possimus, debitis dolorum voluptatem ullam laboriosam voluptates, ab saepe?
                </div>
            </div>
            <div>
                <img src={team} height={400} width={700} alt="team"/>
            </div>
        </div><br/>

        <div className="bg-white text-center  lg:py-[30px] lg:px-[10px] lg:mx-[100px] lg:mt-[30px] ">
            <div className="text-4xl font-bold overline decoration-blue-500">Our Team</div>
            <div className="mx-[100px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dignissimos magni recusandae animi iure, at aliquid quae accusantium enim ex, aliquam ducimus sapiente, consequatur asperiores laboriosam accusamus officiis cupiditate totam.</div><br/>
            <div className="grid gap-1 lg:grid-cols-4 grid-cols-2 items-center lg:mx-[100px]">
                <TeamCard image={prof} name="Jenny Spark" designation="Founder"/>
                <TeamCard image={prof} name="Noah Spark" designation="CEO"/>
                <TeamCard image={prof} name="Brad Spark" designation="Developer"/>
                <TeamCard image={prof} name="Chandler Spark" designation="Assistant"/>
            </div><br/>
            <div className="grid gap-1 lg:grid-cols-4 grid-cols-2 items-center lg:mx-[100px]">
                <TeamCard image={prof} name="Jenny Spark" designation="Founder"/>
                <TeamCard image={prof} name="Noah Spark" designation="CEO"/>
                <TeamCard image={prof} name="Brad Spark" designation="Developer"/>
                <TeamCard image={prof} name="Chandler Spark" designation="Assistant"/>
            </div>
        </div>
        <br/>
        </div>
    )
}