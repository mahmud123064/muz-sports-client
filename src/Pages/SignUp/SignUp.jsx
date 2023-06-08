
import { Link, useNavigate } from 'react-router-dom';
import login_img from '../../../public/login_img.jpg'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const [error, setError] = useState(" ");

    const onSubmit = data => {
        // console.log(data);
        if(data.password !== data.confirmPassword){
            setError("Password Not matched")
            return 
        }
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUser(data.name, data.photoURL)
                    .then(result => {
                        const logedUser = result.user;
                        console.log(logedUser);
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your Have Successfully Signed Up',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        
                    })
                    .catch(error => {
                        console.log(error);
                    })
                console.log(loggedUser);
              
                reset()
                navigate('/')
            })
    }

    console.log("example");



    return (
        <div className='mb-12'>
            <Helmet>
                <title> MUZ SPORTS | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">

                <div className='mt-16'>
                    <h3 className='text-center text-3xl font-semibold text-purple-800 '>Please Sign Up</h3>
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100 ms-8">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name'
                                            {...register("name", { required: true })}
                                            placeholder="Name" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email'
                                            {...register("email", { required: true })}
                                            placeholder="email" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" {...register("password",
                                            {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*)/
                                            })} name="password" placeholder="password" className="input input-bordered" />
                                        {errors.password && <span className="text-red-500">Password  is required</span>}

                                        {errors.password?.type === 'minLength' && <p role="alert">Password must have 6 characters</p>}

                                        {errors.password?.type === 'maxLength' && <p role="alert">Password must have less than 20 characters</p>}

                                        {errors.password?.type === 'pattern' && <p role="alert">Password must have one lower case one upper case, one number and one special character</p>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" name='confirmPassword'
                                            {...register("confirmPassword", { required: true })}
                                            placeholder="Confirm password" className="input input-bordered" />
                                            <p className='text-red-500' >{error}</p>
                                    </div>

                                    {/* <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="Password" {...register("confirmPassword",
                                            {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*)/
                                            })} name="password" placeholder="password" className="input input-bordered" />
                                        {errors.password && <span className="text-red-500">Password  is required</span>}

                                        {errors.password?.type === 'minLength' && <p role="alert">Password must have 6 characters</p>}

                                        {errors.password?.type === 'maxLength' && <p role="alert">Password must have less than 20 characters</p>}

                                        {errors.password?.type === 'pattern' && <p role="alert">Password must have one lower case one upper case, one number and one special character</p>}
                                    </div> */}


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="text" name='photoURL'
                                            {...register("photoURL", { required: true })}
                                            placeholder="Photo Url" className="input input-bordered" />
                                    </div>

                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                                    </div>

                                </form>
                                <p className='text-center'>Already have an Account?<span className='text-red-500 '><Link to='/login'> Please Login</Link></span></p>

                                <SocialLogin></SocialLogin>
                            </div>
                        </div>

                        <div className="text-center lg:text-left mt-8 md:w-1/2">

                            <img className='h-[700px]' src={login_img} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;