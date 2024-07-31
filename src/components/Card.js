
export default function Card(props){
    return(
        <div className=" lg:h-[400px] bg-cover" style={{backgroundImage:`url(${props.imageURL})`}}>
            <div className="bg-white bg-opacity-35 p-5 lg:pt-[250px]">
            <div className="font-extrabold text-2xl ">{props.headline}</div>
            <div className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
            <button className="bg-black text-white border-[1px] border-black px-[15px] py-[4px] lg:text-xl mt-[10px] w-full lg:w-1/2">Shop Now</button>
            </div>
        </div>
    )
}