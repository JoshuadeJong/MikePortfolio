type LessonOption = {
    title: string,
    price: string,
    description: string,
    includes: Array<string>,
    enabled: boolean,
}

type Lesson = {
    info: Array<string>,
    options: Array<LessonOption>,
    optionsCallback: String,
}

export default Lesson;