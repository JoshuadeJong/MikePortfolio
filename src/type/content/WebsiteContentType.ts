import Contact from "./type/Contact";
import WebsiteMeta from "./type/WebsiteMeta";
import Testimonial from "./type/Testimonial";
import Lesson from "./type/Lesson";
import Listen from "./type/Listen";
import About from "./type/About";

type WebsiteContentType = {
    about: About;
    contact: Contact;
    lesson: Lesson;
    testimonials: Array<Testimonial>,
    website: WebsiteMeta,
    listen: Listen,
}

export default WebsiteContentType;