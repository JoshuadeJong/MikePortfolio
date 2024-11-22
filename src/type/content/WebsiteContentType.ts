import Contact from "./type/Contact";
import WebsiteMeta  from "./type/WebsiteMeta";
import Testimonial from "./type/Testimonial";
import Lesson from "./type/Lesson";

type WebsiteContentType = {
    about: Array<string>;
    contact: Contact;
    lesson: Lesson;
    testimonials: Array<Testimonial>,
    website: WebsiteMeta,
}

export default WebsiteContentType;