
export default function TeamCard(props){
    return(
        <div className="">
            <div className="flex justify-center ">
                <img src={props.image} height={100} width={100} className="rounded-full"></img>
            </div>
            <div>{props.name}</div>
            <div>{props.designation}</div>
        </div>
    )
}