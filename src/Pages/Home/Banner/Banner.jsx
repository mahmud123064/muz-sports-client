
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";

import cricket from '../../../assets/Cricket.jpg'
import football from '../../../assets/football.jpg'
import volyball from '../../../assets/volyball.jpg'
import badminton from '../../../assets/badminton.jpg'
import basket from '../../../assets/basketball.jpg'
import hocky from '../../../assets/hocky.jpg'


const Banner = () => {
    return (
        // <div className="mb-12">
        //     <Swiper
        //         // pagination={{
        //         //     type: "progressbar",
        //         // }}
        //         navigation={true}
        //         modules={[Pagination, Navigation]}
        //         className="mySwiper"
        //     >
        //         <SwiperSlide>
        //             {/* <img src={img1} alt="" /> */}

        //             <div id="slide2" className="carousel-item relative w-full">
        //                 <img src={cricket} className="md:w-full" />
        //                 <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        //                     <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
        //                         <h5 className='text-5xl font-bold'>SYMA Mini RC Helicopters, S100 </h5>
        //                         <p>A radio-controlled helicopter (also RC helicopter) is model aircraft which is distinct from </p>

        //                     </div>
        //                 </div>
        //             </div>
        //         </SwiperSlide>

        //         <SwiperSlide>
        //             <img className="w-full" src = {football} alt="" />
        //         </SwiperSlide>

        //         <SwiperSlide>
        //         <img src = {volyball} alt="" />
        //         </SwiperSlide>

        //         <SwiperSlide>
        //         <img src = {badminton} alt="" />
        //         </SwiperSlide>

        //         <SwiperSlide>
        //         <img src = {basket} alt="" />
        //         </SwiperSlide>

        //         <SwiperSlide>
        //             <img src = {hocky} alt="" />
        //         </SwiperSlide>

        //     </Swiper>
        // </div>

        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">
                <img src={cricket} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                        <h5 className='text-4xl font-bold'>Yes to sports, no to drugs</h5>
                        <p>“Somebody gives you an opportunity, say yes to it. So what if you fail? you won’t know if you fail or succeed unless you try.” —Ann Meyers</p>
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={football} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={volyball} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={badminton} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={basket} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={hocky} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Banner;