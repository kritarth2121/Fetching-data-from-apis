import React, { useEffect, useState } from "react";
import axios from "axios";
interface props{
pno?:number
}
const List:React.FC<props> =({pno})=>{
    const [user,setuser]=useState<any>([]);
    useEffect(()=>
    {let c=axios.get("https://randomuser.me/api/?inc=id,email,gender,name&page=" +pno+"&results=6").then((d)=>
    {console.log(d.data.results);
    setuser(d.data.results);}
    
    ).catch((err)=>{
        console.log(err);
    });
    
    },[pno]);
    return(
        <>
                    <div className="font-bold text-white text-center text-2xl mb-10"> Current Page {pno}</div>

<table className="w-96 mx-auto">
<tr className="border-collapse border-green-400 text-2xl font-bold  w-96 text-white">
                            <td className="w-72 px-3 py-2  border-2 rounded-md border-collapse border-green-400">Serial Number</td>
                            <td className="w-72 px-3 py-2 border-2 border-collapse border-green-400">Name</td>

            <td className="border-collapse border-green-400 w-72 px-3 py-2 border-2 ">Email</td>
            <td className="border-collapse border-green-400 px-3 py-2 border-2 ">Gender</td>
        </tr>
               {user.map((u:any,index:number) => {
            return (<tr className="border-collapse border-green-400  w-96 text-white">
                            <td className="border-2 rounded-md border-collapse w-72 px-3 py-2 border-green-400">{index+1}</td>
                            <td className="w-72 px-3 py-2 border-2 border-collapse border-green-400">{u.name.title} {u.name.first} {u.name.last}</td>

            <td className="w-72 px-3 py-2 border-2 border-collapse border-green-400">{u.email}</td>
            <td className="px-3 py-2 border-2 border-collapse border-green-400">{u.gender}</td>
        </tr>)})}
        
        
            </table>          </>

    )};
List.defaultProps={
    pno:1,
};

export default React.memo(List);

