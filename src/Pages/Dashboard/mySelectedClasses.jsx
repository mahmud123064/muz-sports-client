import { Helmet } from "react-helmet-async";
import useSelectedClass from "../../hooks/useSelectedClass";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MySelectedClasses = () => {

    const [selectedClass, refetch] = useSelectedClass();
    console.log(selectedClass);

    const total = selectedClass.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedclasses/${item._id}`, {
                    method:"DELETE"
                })

                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
        })
    }

    return (
        <div className="-mt-28 w-full ms-5">
            <Helmet>
                <title> MUZ SPORTS | My Selected Classes</title>
            </Helmet>

            <div className="font-semibold flex justify-evenly items-center mb-5 h-[60px]">
                <h2>Total Selected Classes : {selectedClass.length}</h2>
                <h2>Total Selected Classes Price : {total}</h2>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="uppercase font-bold ">
                        <tr >
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Instructor Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    {item.instructor_name}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-md bg-orange-500 text-white"><FaTrashAlt></FaTrashAlt>Delete</button>

                                    <button></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;