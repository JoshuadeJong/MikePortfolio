type LessonOption = {
    title: string,
    price: string,
    description: string,
    includes: Array<string>,
}

type Lesson = {
    options: Array<LessonOption>,
    optionsCallback: String,
}

export default Lesson;