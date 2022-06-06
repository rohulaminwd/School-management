import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BannerTop from './BannerTop';
import BusnessSummery from './BusnessSummery';
import Classes from './Classes';
import ContactUs from './ContactUs';
import Review from './Review';
import Rewords from './Rewords';
import Teachers from './Teachers';


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <BannerTop />
            <div className='px-2 md:px-8 lg:px-16 ox-hidden'>
                <Classes />
                <Rewords />
                <Teachers />
                <ContactUs />
                <Review />
                <BusnessSummery />
            </div>
            <Footer />
        </div>
    );
};

export default Home;