import Playlist from "./Playlist";

type Youtube = {
    title: string;
    link: string;
    videoId: string;
    description: string;
}

type Listen = {
    why: Array<String>;
    personal: Array<Youtube>;
    recommended: Array<Playlist>;
}

export default Listen;
