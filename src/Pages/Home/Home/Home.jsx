import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Textimonials from "../Testimonials/Textimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Bristo Boss | Home</title>
      </Helmet>
           <Banner></Banner>
           <Category></Category>
           <h1>add section</h1>
           <PopularMenu></PopularMenu>
           <h1>add anoder section</h1>
           <Featured></Featured>
           <Textimonials></Textimonials>
        </div>
    );
};

export default Home;