import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> MUZ SPORTS | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;