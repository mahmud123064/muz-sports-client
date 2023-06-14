
import about_img from "../../../assets/about_us.jpg"
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="mb-12">
           

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={about_img} className="max-w-sm rounded-lg shadow-2xl h-[400px]" />
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">Welcome to MUZ SPORTS - Your Ultimate Destination for Sporting Excellence!

                            At MUZ SPORTS, we are passionate about sports and dedicated to providing you with a comprehensive platform that caters to all your sporting needs. Whether you are an avid athlete, a passionate fan, or someone looking to explore the world of sports, our website is designed to offer an immersive and informative experience.

                            As you explore our website, you will find a wide range of features and resources that make us a one-stop hub for all things sports. Let us take you on a journey through the key highlights of MUZ SPORTS:</p>
                      <Link to = '/classes'>  <button className="btn btn-primary">LEARN MORE</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;