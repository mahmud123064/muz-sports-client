import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClass from "../../hooks/useSelectedClass";

const ClassDetails = ({ classItem }) => {
    console.log(classItem);

    const { available_seats, image, instructor_name, name, price, _id } = classItem;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = useSelectedClass()

    const handleSelect = (classItem) => {
        console.log(classItem);
        if (user && user.email) {

            const classItem = { classItemId: _id, available_seats, image, instructor_name, name, price, email: user.email }

            fetch('https://muz-sports-server.vercel.app/selectedClasses', {
                method: "POST",
                headers:{
                    "content-type" : "application/json"
                },
                body:JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your have successfully added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please Login to select class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from : location } })
                }
            })
        }
    }

    return (
        <div>

            <div className="card w-96 bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Class Name: {name}</h2>
                    <p>Instructor Name : {instructor_name}</p>
                    <p>Available Seats : {available_seats}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions">
                        <button onClick={() => handleSelect(classItem)} className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;