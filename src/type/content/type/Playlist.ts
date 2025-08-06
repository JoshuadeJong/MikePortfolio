type Song = {
    name: string;
    imagePath: string;
    youtube: string;
    spotify: string;
}

type Playlist = {
    title: string;
    description: string;
    youtube: string;
    spotify: string;
    songs: Array<Song>
}

export default Playlist;