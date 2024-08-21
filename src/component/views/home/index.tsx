import React from "react";

import About from "./about";
import HomeContent from "../../../content/HomeContent";
import HomeContext from "../../../provider/HomeContext";
import {Page} from "../../layout";
import Testimonials from "./testimonial";
import Lesson from "./lesson";
import Connect from "./connect";


function Home() {
    return (
        <Page>
            <HomeContext.Provider value={HomeContent}>
                <About />
                <Testimonials />
                <Lesson />
                <Connect />
            </HomeContext.Provider>
        </Page>
    );
}

export default Home;