import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featered from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='pt-8 my-20 text-white bg-fixed featured-item'>
            <SectionTitle heading="Featured Item" subHeading="check it out"></SectionTitle>
            <div className='items-center justify-center pt-12 pb-20 px-36 md:flex bg-slate-500 bg-opacity-60'>
                <div>
                <img src={featered} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit eum error facilis vero dolor neque veritatis accusantium vitae sequi quibusdam ipsa, veniam id animi in delectus beatae. Illum consequatur laudantium possimus totam sapiente placeat quos mollitia minima, sunt perferendis quaerat.</p>
                    <button className="mt-4 border-0 border-b-4 btn btn-outline">Order now</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;