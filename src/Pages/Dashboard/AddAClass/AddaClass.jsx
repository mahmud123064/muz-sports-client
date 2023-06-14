import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddaClass = () => {

    const { user } = useAuth();
const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit,reset} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url,{
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price,instructor_name,available_seats} = data;
                const newItem = { name, price: parseFloat(price),instructor_name,available_seats: parseFloat(available_seats), image:imgURL }
                
                console.log(newItem);

                axiosSecure.post('/classes', newItem)
                .then(data =>{
                    console.log('after posting new classes', data.data);
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Successfully added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }
   
    console.log(img_hosting_token);
    return (
        <div className="w-full px-10 ">
            <Helmet>
                <title> MUZ SPORTS | Add a Class</title>
            </Helmet>
            <h3 className="text-3xl font-semibold text-center text-orange-500">Add A Class</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full " />

                </div>
                <div className="flex gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats</span>
                        </label>
                        <input type="number" placeholder="Available seats"
                            {...register("available_seats", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" placeholder="Price"
                            {...register("price", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full " />

                    </div>
                </div>
               
               <div className="flex gap-5" >
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" placeholder={user?.displayName}
                        {...register("instructor_name", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor email</span>
                    </label>
                    <input type="text" placeholder={user?.email}
                        className="input input-bordered w-full " />

                </div>
               </div>

                <div className="form-control w-full max-w-xs mb-12">
                    <label className="label">
                        <span className="label-text-alt font-bold">Class Image</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true, maxLength: 80 })}
                        className="file-input file-input-bordered file-input-primary w-full " />
                </div>
                <div className=" flex flex-col items-center justify-center">
                <input className="btn btn-secondary  " type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddaClass;