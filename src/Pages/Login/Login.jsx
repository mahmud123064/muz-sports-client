import { Link } from 'react-router-dom';
import login_img from '../../../public/login_img.jpg'
const Login = () => {
    return (
        <div className='mb-12'>
            <div className="hero min-h-screen bg-base-200">

                <div>
                    <h3 className='text-center text-3xl font-semibold text-purple-800'>Please Login</h3>
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100 ms-8">
                            <div className="card-body">
                                <form>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <p className='text-center'>Do not have an Account?<span className='text-red-500 '><Link to = '/signup'> Please Register</Link></span></p>

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