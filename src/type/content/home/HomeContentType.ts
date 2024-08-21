import Testimonial from "./Testimonial";
import Lesson from "./Lesson";

type HomeContentType = {
    about: Array<string>;
    testimonials: Array<Testimonial>;
    lessons: Array<Lesson>,
    connectMessage: string,
}

export default HomeContentType;