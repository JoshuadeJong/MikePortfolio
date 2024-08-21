import React from "react";
import WebsiteContentType from "../type/content/WebsiteContentType";

const WebsiteContext = React.createContext<WebsiteContentType>({
    nameWebsite: "",
    namePersonFull: "",
    namePersonFirst: "",
    namePersonLast: "",
    emailLesson: "",
    emailGig: "",
    youtube: "",
})

export default WebsiteContext;