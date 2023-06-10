
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";

// import cricket from '../../../assets/Cricket.jpg'
// import football from '../../../assets/football.jpg'
// import volyball from '../../../assets/volyball.jpg'
// import badminton from '../../../assets/badminton.jpg'
// import basket from '../../../assets/basketball.jpg'
// import hocky from '../../../assets/hocky.jpg'
import './banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (

        <div className="carousel w-full mb-12">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='bg-black w-full bg-opacity-60'>
                    <div className='p-10 md:p-28 lg:p-28 md:w-1/2 mt-12'>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-green-500'>Yes to sports,</span> <span className='text-red-500'>no to drugs</span> </h1>
                        <p className='text-white mt-5'> “Somebody gives you an opportunity, say yes to it. So what if you fail? you won’t know if you fail or succeed unless you try.” <span className='text-red-400'> —Ann Meyers</span></p>
                       <Link> <button className='btn btn-secondary mt-3 border-none text-white'> View Classes</button></Link>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <div className='bg-black w-full bg-opacity-60'>
                    <div className='p-10 md:p-28 lg:p-28 md:w-1/2 mt-12'>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-green-500'>Yes to sports,</span> <span className='text-red-500'>no to drugs</span> </h1>
                        <p className='text-white mt-5'> “Somebody gives you an opportunity, say yes to it. So what if you fail? you won’t know if you fail or succeed unless you try.” <span className='text-red-400'> —Ann Meyers</span></p>
                       <Link> <button className='btn btn-secondary mt-3 border-none text-white'> View Classes</button></Link>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <div className='bg-black w-full bg-opacity-60'>
                    <div className='p-10 md:p-28 lg:p-28 md:w-1/2 mt-12'>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-green-500'>Yes to sports,</span> <span className='text-red-500'>no to drugs</span> </h1>
                        <p className='text-white mt-5'> “Somebody gives you an opportunity, say yes to it. So what if you fail? you won’t know if you fail or succeed unless you try.” <span className='text-red-400'> —Ann Meyers</span></p>
                       <Link> <button className='btn btn-secondary mt-3 border-none text-white'> View Classes</button></Link>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <div className='bg-black w-full bg-opacity-60'>
                    <div className='p-10 md:p-28 lg:p-28 md:w-1/2 mt-12'>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-green-500'>Yes to sports,</span> <span className='text-red-500'>no to drugs</span> </h1>
                        <p className='text-white mt-5'> “Somebody gives you an opportunity, say yes to it. So what if you fail? you won’t know if you fail or succeed unless you try.” <span className='text-red-400'> —Ann Meyers</span></p>
                       <Link> <button className='btn btn-secondary mt-3 border-none text-white'> View Classes</button></Link>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className='bg-black w-full bg-opacity-60'>
                    <div className='p-10 md:p-28 lg:p-28 md:w-1/2 mt-12'>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-green-500'>Yes to sports,</span> <span className='text-red-500'>no to drugs</span> </h1>
                        <p className='text-white mt-5'> “Somebody gives you an opportunity, say yes to it. So what if you fail? you won’t know if you fail or succeed unless you try.” <span className='text-red-400'> —Ann Meyers</span></p>
                       <Link> <button className='btn btn-secondary mt-3 border-none text-white'> View Classes</button></Link>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
                <div className='bg-black w-full bg-opacity-60'>
                    <div className='p-10 md:p-28 lg:p-28 md:w-1/2 mt-12'>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-green-500'>Yes to sports,</span> <span className='text-red-500'>no to drugs</span> </h1>
                        <p className='text-white mt-5'> “Somebody gives you an opportunity, say yes to it. So what if you fail? you won’t know if you fail or succeed unless you try.” <span className='text-red-400'> —Ann Meyers</span></p>
                       <Link> <button className='btn btn-secondary mt-3 border-none text-white'> View Classes</button></Link>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

          

        </div>


    );
};

export default Banner;