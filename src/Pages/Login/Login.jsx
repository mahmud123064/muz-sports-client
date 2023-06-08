import { Link } from 'react-router-dom';
import login_img from '../../../public/login_img.jpg'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';


const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const {signIn} = useContext(AuthContext)

    const onSubmit = data => {
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }

    console.log("example");

    return (
        <div className='mb-12'>
            <Helmet>
                <title> MUZ SPORTS | login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">

                <div>
                    <h3 className='text-center text-3xl font-semibold text-purple-800'>Please Login</h3>
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100 ms-8">
                            <div className="card-body">

                                <form onSubmit={handleSubmit(onSubmit)}>

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
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Login" />
                                    </div>
                                </form>
                                <p className='text-center'>Do not have an Account?<span className='text-red-500 '><Link to='/signup'> Please Register</Link></span></p>

                                <div className="divider">OR</div>

                                <button className='btn btn-secondary'>Google</button>
                            </div>
                        </div>

                        <div className="text-center lg:text-left mt-8 md:w-1/2">

                            <img className='w-full' src={login_img} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;