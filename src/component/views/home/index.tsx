import React from "react";

import About from "./about";
import {Page} from "../../layout";
import Testimonials from "./testimonial";
import Lesson from "./lesson";
import Connect from "./connect";


function Home() {
    return (
        <Page>
            <About />
            <Testimonials />
            <Lesson />
            <Connect />
        </Page>
    );
}

export default Home;