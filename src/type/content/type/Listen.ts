type Album = {
    name: string;
    imagePath: string;
    youtube: string;
    spotify: string;
}

type Youtube = {
    title: string;
    link: string;
    videoId: string;
    description: string;
}

type Listen = {
    personal: Array<Youtube>;
    favoriteAlbums: Array<Album>;
    jazzRecommendation: Array<Album>;
    bluesRecommendation: Array<Album>;
}

export default Listen;