/* eslint-disable react/prop-types */


import { MdDelete } from "react-icons/md";

import UseAxiosPublic from "../../Hooks/UseAxiosPublic";




const Completed = ({data,refetch}) => {
  const AxiosPublic = UseAxiosPublic()

 

  const hendleDelete=()=>{
    AxiosPublic.delete(`/newTask/${data._id}`)
    .then((res)=>{
      
      if(res.data.deletedCount > 0){
        refetch()
      }
    })
    // console.log(data._id);

  }

  
    return (
        <div>
            <div  className="mt-10 flex justify-between bg-green-300 rounded-lg shadow-xl text-xl text-dark font-semibold  px-5 py-3">
            <h1 className="">{data.data.titles}</h1>
            <div className="flex gap-3">
            

            <button className="btn bg-transparent btn-circle hover:bg-transparent"><MdDelete className=" text-black text-xl" onClick={hendleDelete} /></button>
            
            
           
            
            </div>


        </div>
        
        </div>
    );
};

export default Completed;