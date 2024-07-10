import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import sliderVideo1 from "../../../assets/vedio/slider1.mp4";
import sliderVideo2 from "../../../assets/vedio/slider2.mp4";
import sliderVideo3 from "../../../assets/vedio/slider3.mp4";



export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <div className="slider-container w-full relative">
            <Slider {...settings} className="absolute">
                <div className="relative md:min-h-screen h-full w-full">
                    <video className="h-full w-full object-cover" autoPlay muted loop>
                        <source src={sliderVideo1} type="video/mp4" />
                        Your browser does not support the video. Please Update Your Browser!
                    </video>
                    <div className="absolute md:bottom-16 bottom-5 md:p-4 px-1 pt-10 bg-opacity-40 w-full">
                        <div className="w-11/12 mx-auto px-4 py-2 bg-opacity-40 rounded">
                            <h2 className="md:text-6xl text-3xl font-bold text-gray-200">3E</h2>
                            <p className="text-gray-200 font-medium  md:text-lg text-sm">Our pinpoint is 3E because we focus on Environment <br /> Education and  Engineering.</p>
                        </div>
                    </div>
                </div>
                <div className="relative md:min-h-screen h-full w-full">
                    <video className="h-full w-full object-cover" autoPlay muted loop>
                        <source src={sliderVideo2} type="video/mp4" />
                        Your browser does not support the video. Please Update Your Browser!
                    </video>
                    <div className="absolute md:bottom-16 bottom-5 md:p-4 px-1 pt-10 bg-opacity-40 w-full">
                        <div className="w-11/12 mx-auto px-4 py-2 bg-opacity-40 rounded">
                            <h2 className="md:text-6xl text-3xl font-bold text-gray-200">3E</h2>
                            <p className="text-gray-200 font-medium  md:text-lg text-sm">Our pinpoint is 3E because we focus on Environment <br /> Education and  Engineering.</p>
                        </div>
                    </div>
                </div>
                <div className="relative md:min-h-screen h-full w-full">
                    <video className="h-full w-full object-cover" autoPlay muted loop>
                        <source src={sliderVideo3} type="video/mp4" />
                        Your browser does not support the video. Please Update Your Browser!
                    </video>
                    <div className="absolute md:bottom-16 bottom-5 md:p-4 px-1 pt-10 bg-opacity-40 w-full">
                        <div className="w-11/12 mx-auto px-4 py-2 bg-opacity-40 rounded">
                            <h2 className="md:text-6xl text-3xl font-bold text-gray-200">3E</h2>
                            <p className="text-gray-200 font-medium  md:text-lg text-sm">Our pinpoint is 3E because we focus on Environment <br /> Education and  Engineering.</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}