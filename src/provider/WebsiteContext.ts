import React from "react";
import WebsiteContentType from "../type/content/WebsiteContentType";


const WebsiteContext = React.createContext<WebsiteContentType>({
    about: {
        text: [],
        learnMoreText: "",
        learnMoreLink: "",
    },
    contact: {
        namePersonFull: "",
        namePersonFirst: "",
        namePersonLast: "",
        email: "",
        phone: "",
        emailToken: "",
        location: "",
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
    },
    faq: []
})

export default WebsiteContext;