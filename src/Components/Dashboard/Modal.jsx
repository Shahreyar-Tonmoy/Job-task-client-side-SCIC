/* eslint-disable react/prop-types */
import { GrUpdate } from "react-icons/gr";
const Modal = ({datas}) => {

    

    const handleSubmit = e => {

        e.preventDefault()
        const form = e.target
    
        const titles = form.titles.value
        
        const descriptions = form.descriptions.value
        const deadlines = form.deadlines.value
        const priority = form.priority.value
        
    
        const products = { titles, descriptions,deadlines,priority }
        console.log(products);
    
    
        console.log(datas._id);
    
    
    }



    return (
        <div>
            <button className="btn bg-transparent btn-circle hover:bg-transparent"><GrUpdate className=" text-black text-xl" onClick={() => document.getElementById('my_modal_2').showModal()}  /></button>


            <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
        <form onSubmit={handleSubmit} className="lg:flex lg:gap-10" >
                                    <div>
                                        <div className="mb-6">
                                            <label className='text-xl  text-black'>Titles</label>
                                            <input type="text" name="titles" defaultValue={datas.data.titles} placeholder="Your Titles" className=" mt-3
                  w-full
                  rounded
                  py-3
                  px-[14px]
                   text-black text-base
                  border border-stone-400 
                  outline-none
                  bg-white 
                  focus-visible:shadow-none
                  
                  " />
                                        </div>
                                        <div className="mb-6">
                                            <label className='text-xl  text-black'>Deadlines(DD-MM-YYYY)</label>
                                            <input type="text"  id="date" data-format="DD-MM-YYYY" data-template="D MMM YYYY" name="deadlines" defaultValue={"01-01-2024"}
                                                className="mt-3
                  w-full
                  rounded
                  py-3
                  px-[14px]
                   text-black text-base
                  border border-stone-400  
                  outline-none
                  bg-white
                  focus-visible:shadow-none
                  
                  " />
                                        </div>
                                        <div className="mb-6">
                                            <label className='text-xl  text-black'>Priority</label>
                                            <select name="priority"  className="mt-3
                  w-full
                  rounded
                  py-3
                  px-[14px]
                   text-black text-base
                  border border-stone-400  
                  outline-none
                  bg-white
                  focus-visible:shadow-none
                  
                  " >
                                            <option disabled selected>Priority</option>
                                            <option>Low</option>
                                            <option>Moderate</option>
                                            <option>High</option>
                                        </select>

                                    </div>
                            </div>

                            <div>
                                <div className="mb-6">
                                    <label className='text-xl  text-black'>Descriptions</label>
                                    <textarea rows={6} name="descriptions" placeholder="Your Descriptions" className="mt-3
                  w-full
                  rounded
                  py-3
                  px-[14px]
                   text-black text-base
                  border border-stone-400 
                  resize-none
                  bg-white
                  outline-none
                  focus-visible:shadow-none
                  
                  " defaultValue={""} />
                                </div>
                                <div>



                                    <button type="submit" value="Send" className="
                  w-full
                  text-white
                  bg-[#3B82F6]
                  rounded
                  
                  p-3
                  transition
                  hover:bg-opacity-90
                  ">
                                        Create
                                    </button>
                                </div>
                            </div>
                            {/* <ToastContainer></ToastContainer> */}
                        </form>
       
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

        </div>
    );
};

export default Modal;