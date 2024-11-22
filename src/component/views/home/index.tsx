import React from "react";

import About from "./about";
import {Page} from "../../layout";
import Testimonials from "./testimonial";
import Lesson from "./lesson";
import Connect from "./connect";
import Listen from "./listen";


function Home() {
    return (
        <Page>
            <About/>
            <Testimonials/>
            <Lesson/>
            <Listen/>
            <Connect/>
        </Page>
    );
}

export default Home;