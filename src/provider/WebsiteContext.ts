import React from "react";
import WebsiteContentType from "../type/content/WebsiteContentType";


const WebsiteContext = React.createContext<WebsiteContentType>({
    about: [],
    contact: {
        namePersonFull: "",
        namePersonFirst: "",
        namePersonLast: "",
        email: "",
        phone: "",
        youtube: "",
        connectActionMessage: "",
    },
    lesson: {
        options: [],
        optionsCallback: ""
    },
    testimonials: [],
    website: {
        name: "",
    },
})

export default WebsiteContext;