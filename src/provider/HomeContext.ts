import React from "react";
import HomeContentType from "../type/content/home/HomeContentType";


const HomeContext = React.createContext<HomeContentType>({
    about: [],
    testimonials: [],
    lessons: [],
    connectMessage: "",
})

export default HomeContext;