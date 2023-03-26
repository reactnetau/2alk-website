import React from "react";
import AppBarNav from "../../components/AppBarNav";
import SectionContainer from "../../components/common/SectionContainer";

import SectionConnectImage from '../../assets/images/headerBackgroundImage.png';
import SectionDatingImage from '../../assets/images/headerBackgroundDating.png';
import SectionSupportImage from '../../assets/images/headerBackgroundSupport.png';
import SectionContactImage  from '../../assets/images/headerBackgroundContact.png';
import Footer from "../../components/Footer";
const HomePage = () => {
    return (
        <>
            <AppBarNav />
            <SectionContainer background={SectionConnectImage} />
            <SectionContainer background={SectionDatingImage} />
            <SectionContainer background={SectionSupportImage} />
            <SectionContainer background={SectionContactImage} />
            <Footer />
        </>
    );
}

export default HomePage;