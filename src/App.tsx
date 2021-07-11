import React,{memo} from 'react';
import { useState } from 'react';
import List from './Components/List';
interface Props{

}

 const App:React.FC<Props>=(props) => {
  const[page,setPage] = useState(1);

    return(
        <div className="bg-black absolute inset-0">

        <List pno={page} />
        <div className=" mx-16 sm:mx-0
         grid grid-cols-1 sm:grid-cols-4  items-center gap-2 bg-red">
        <button className="text-xl text-white bg-red-400 rounded-full border-8 border-white hover:bg-red-300 hover:text-black my-3 sm:col-start-2 py-2   " onClick ={()=>{setPage(page+1)}}>
          Next Page
        </button>
        <button className="sm:my-5 py-2   text-xl text-white bg-green-400  border-8 rounded-full hover:text-black border-white hover:bg-green-300" onClick ={()=>{
          if(page >1 )
          {
          setPage(page=>(page-1))}
          else
          {
            setPage(1)
          }}}>
          Previous Page
        </button>
        </div>
        </div>
    );

}
export default React.memo(App);