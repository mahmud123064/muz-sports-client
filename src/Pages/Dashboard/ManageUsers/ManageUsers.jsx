import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })


    const handleInstructor = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to make this person as Instructor!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make it'
        })

            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
                        method: "PATCH"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount) {
                                refetch()
                                Swal.fire(
                                    'Added!',
                                    'You have added successfully',
                                    'success'
                                )
                            }
                        })
                }

            })
    }


    const handleMakeAdmin = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to make this person as Admin!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make it'
        })

        .then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: "PATCH"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount) {
                            refetch()
                            Swal.fire(
                                'Added!',
                                'You have added successfully',
                                'success'
                            )
                        }
                    })
            }

        })
        // fetch(`http://localhost:5000/users/admin/${user._id}`, {
        //     method: "PATCH"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount) {
        //             refetch()
        //             Swal.fire(
        //                 'Added!',
        //                 'You have added successfully',
        //                 'success'
        //             )
        //         }
        //     })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title> MUZ SPORTS | Manage Users</title>
            </Helmet>
            <div>
                <h3 className="text-2xl font-semibold my-5">Total Users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>

                                    <td>{
                                        user.role === 'admin' ? "admin" : user.role === "instructor" ? "instructor" :

                                            <button className="btn btn-ghost btn-md bg-orange-500 text-white"><FaUserShield></FaUserShield></button>
                                    }</td>
                                    {/* <td>
                                        {
                                        user.role === 'instructor' ? "instructor" : 

                                        <button onClick={() => handleInstructor(user)} className="btn btn-ghost btn-md bg-orange-500 text-white"><FaUserShield></FaUserShield></button>
                                    }
                                    </td> */}
                                    <td >
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-secondary me-2">Make Admin</button>
                                        <button onClick={() => handleInstructor(user)} className="btn btn-primary">Make Instructor</button>
                                    </td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;