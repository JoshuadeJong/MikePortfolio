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
        info: [],
        options: [],
        optionsCallback: ""
    },
    testimonials: [],
    website: {
        name: "",
    },
    listen: {
        personal: [],
        favoriteAlbums: [],
        jazzRecommendation: [],
        bluesRecommendation: [],
    }
})

export default WebsiteContext;