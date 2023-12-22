import { useQuery } from "@tanstack/react-query";

import Datas from "./datas";
import Update from "./Update/Update";
import Completed from "./Update/Completed";



const PreviousTasks = () => {

    const { isPending, error, data,refetch } = useQuery({
        queryKey: ['data'],
        queryFn: () =>
            fetch('http://localhost:5000/newTask').then(
                (res) => res.json(),
            ),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    const filter1 = data?.filter(e => e.status === "Todo")
    const filter2 = data?.filter(e => e.status === "Ongoing")
    
    const filter3 = data?.filter(e => e.status === "Completed")


    return (
        <div>

            <div className="flex gap-8">
                <div className="flex-1 w-60">
                    <h1 className="bg-red-500 rounded-lg shadow-xl text-xl text-white font-semibold text-center px-20 py-3">To Do</h1>
                    <div>
                        {
                            filter1.map(datas => <Datas key={datas._id} refetch={refetch} datas={datas}></Datas>)
                        }

                    </div>
                </div>


                <div className="flex-1 w-60">
                    <h1 className="bg-blue-600 rounded-lg text-xl shadow-xl text-white font-semibold text-center px-20 py-3">On Going</h1>
                    <div>
                        {
                            filter2.map(data => <Update key={data._id} refetch={refetch} data={data}></Update>)
                        }
                    </div>
                </div>


                <div className="flex-1 w-60">
                    <h1 className="bg-green-500 rounded-lg shadow-xl text-xl text-white font-semibold text-center px-20 py-3">Completed</h1>
                    <div>
                        {
                            filter3.map(data => <Completed key={data._id} refetch={refetch} data={data}></Completed>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PreviousTasks;