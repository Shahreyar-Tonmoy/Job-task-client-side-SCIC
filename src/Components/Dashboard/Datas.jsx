/* eslint-disable react/prop-types */

import { IoCheckmarkSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import Modal from "./Modal";




const Datas = ({ datas, refetch }) => {
  const AxiosPublic = UseAxiosPublic()
  
 
  
  


  const hendleUpdate = () => {
    const status = "Ongoing"
    const Status = { status }
    console.log(Status)

    AxiosPublic.put(`/newTaskUpdate/${datas._id}`, Status)
      .then((res) => {
        if(res.data.modifiedCount > 0){
          refetch()
        }
      })
    // console.log(data._id);

  }

  const hendleDelete = () => {
    AxiosPublic.delete(`/newTask/${datas._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch()
        }
      })
    // console.log(data._id);

  }


  return (
    <div>
      <div className="mt-10 flex justify-between bg-red-300 rounded-lg shadow-xl text-xl text-dark font-semibold  px-5 py-3">
        <h1 className="">{datas.data.titles}</h1>
        <div className="flex gap-3">
          
          

          <button className="btn bg-transparent btn-circle hover:bg-transparent"><MdDelete className=" text-black text-xl" onClick={hendleDelete} /></button>

          <button className="btn bg-transparent btn-circle hover:bg-transparent"><IoCheckmarkSharp  className=" text-black text-xl" onClick={hendleUpdate} /></button>


        </div>


      </div>

      
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button> */}
      

    </div>
  );
};

export default Datas;