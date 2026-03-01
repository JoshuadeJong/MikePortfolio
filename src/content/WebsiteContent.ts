import WebsiteContentType from "../type/content/WebsiteContentType";
import TestimonialContent from "./TestimonialContent";
import FaqContent from "./FaqContent";
import ListenContent from "./ListenContent";

const WebsiteContent: WebsiteContentType = {
    website: {
        name: "Michael Eskenazi",
    },
    contact: {
        namePersonFull: "Michael Eskenazi",
        namePersonFirst: "Mike",
        namePersonLast: "Eskenazi",
        location: "Seattle, WA",
        email: "bluefireguitar07@gmail.com",
        phone: "206 814 9390",
        emailToken: "626c5f68-202a-4367-a8b6-5e6e1fcac9cc",
        youtube: "https://www.youtube.com/@DolphLundgrenix6909",
        connectActionMessage: "I'm currently accepting students of all levels, from beginners to advanced. Whether you're looking to learn the basic or improve your skills, I'm here to help. I’m also available for gigs and performances, feel free to reach out if you'd like to collaborate! Let's connect and make music together.",
    },
    about: {
        text: [
            "My name is Michael Eskenazi, I'm a professional guitarist working in the industry since 2012. After graduation from Ballard High School in Seattle, Washington I was offered a scholarship to New School for Jazz and Contemporary Music, and moved to New York City to pursue music.",
            "During my time in New York, I studied with and was mentored by some of the finest musicians this planet has to offer. Some of those musicians include: Bruce Edwards, Charles Tolliver, Jimmy Owens, Vic Juris, Ed Cherry and Onaje Allan Gumbs, all of whom helped shape and mold my musical outlook and style.",
            "I gained a great amount of professional musical experience while in New York City playing everywhere from churches, private parties, weddings, festivals, jazz clubs and everything in between. Playing in such a wide variety of settings has helped me to be able to fit the needs of what ever musical setting I find myself in and how to sustain myself as a musician making a living in a place with the most talented and abundant amount of musicians in the world. I was also employed as a teacher at the Brooklyn Conservatory of Music and the Fred Astaire Dance studio.",
            "I am currently residing in the Seattle area where I am an active teacher and a core member of Gary Hammons group Last Of The Tribe.",
        ],
        learnMoreText: "Learn more about me in my interview with Jazz Guitar Today!",
        learnMoreLink: "https://jazzguitartoday.com/2024/07/jgt-talks-to-seattles-michael-eskenazi/",
    },
    lesson: {
        info: [
            "Teaching is one of my greatest passions!",
            "Molding to your learning style is both valuable and effective. Too often, I see musicians focus solely on teaching the instrument in hand, rather than encompassing the overall principles of learning music. I take a holistic approach, emphasizing the fundamental elements of music such as ear training, rhythm, tone, dynamics, and harmony.",
            "Learning music is more than mastering an instrument. It instills discipline, ignites the creative mind, and develops an outlet for expression that can stay with you for a lifetime. My primary goal as a teacher is to share and nurture these lifelong benefits with every aspiring musician I meet.",
            "I work with students of all ages and levels, including children as young as five. I offer in-person lessons for local clients, either at your home or mine.",
            "I look forward to working with you and exploring the joy of creating music together. Let's start with a brief meeting, student and parent if applicable, to get to know each other and discuss your goals as a musician."
        ],
        options: [
            {
                title: "60 Minutes Lessons",
                price: "$380",
                description: "Take your playing to the next level with personalized weekly guitar lessons. Whether you're looking to refine your technique, explore new genres, or conqueror music theory, these lessons are tailored to you.",
                includes: [
                    "Four weeks of in-person lessons tailored to your environment, at your home or mine!",
                    "Learn to accompany other musicians like a professional.",
                    "Master improvising over complex chord progression and songs.",
                    "Create beautiful chord melodies of your favorite songs.",
                    "Study music theory and apply it to your playing."
                ],
                note: "Ideal for beginner to advanced players ready to push their musicianship forward.",
                soldOut: false,
            }
        ],
        optionsCallback: "Unsure if lessons are right for you? Reach out and we can figure it out!",
        exampleLesson: {
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            description: "Watch a sample lesson covering jazz chord voicings and improvisation techniques. This example demonstrates my teaching approach and how we break down complex concepts into manageable steps."
        },
        recommendedListening: [
            {
                title: "Kind of Blue",
                artist: "Miles Davis",
                description: "A masterpiece of modal jazz that every guitarist should study. Listen to how the musicians interact and create space in their solos.",
                imagePath: "../images/records/art1.jpeg",
                youtubeUrl: "https://www.youtube.com/watch?v=kbxtYqA6ypM",
                spotifyUrl: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA"
            },
            {
                title: "Undercurrent",
                artist: "Bill Evans & Jim Hall",
                description: "An intimate duo album showcasing the beautiful interplay between piano and guitar. Essential listening for understanding jazz harmony and melodic development.",
                imagePath: "../images/records/art2.jpeg",
                youtubeUrl: "https://www.youtube.com/watch?v=example",
                spotifyUrl: "https://open.spotify.com/album/4q3OFVKNhTXXHqXLqGhKqO"
            },
            {
                title: "Smokin' at the Half Note",
                artist: "Wes Montgomery",
                description: "Live recordings featuring Wes Montgomery's incredible octave technique and melodic improvisation. A must-study for any jazz guitarist.",
                imagePath: "../images/records/art3.jpeg",
                youtubeUrl: "https://www.youtube.com/watch?v=example2",
                spotifyUrl: "https://open.spotify.com/album/3qsf5wHBGqpiVXZQc9H7KJ"
            }
        ]
    },
    listen: ListenContent,
    testimonials: TestimonialContent,
    faq: FaqContent,
}

export default WebsiteContent;