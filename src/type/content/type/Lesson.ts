type LessonOption = {
    title: string,
    price: string,
    description: string,
    includes: Array<string>,
    note: string,
    soldOut: boolean,
}

type Lesson = {
    info: Array<string>,
    options: Array<LessonOption>,
    optionsCallback: String,
    exampleLesson?: {
        videoUrl: string,
        description: string,
    },
    recommendedListening?: Array<{
        title: string,
        artist: string,
        description: string,
        imagePath: string,
        spotifyUrl?: string,
        youtubeUrl?: string,
    }>,
}

export default Lesson;