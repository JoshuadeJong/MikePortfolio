import WebsiteContentType from "../type/content/WebsiteContentType";
import TestimonialContent from "./TestimonialContent";

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
        connectActionMessage: "I'm currently accepting students of all levels, from beginners to advanced. Whether you're looking to learn the basic or improve your skills, I'm here to help. I’m also available for gigs and performances—feel free to reach out if you'd like to collaborate! Let's connect and make music together.",
    },
    about: {
        text: [
            "My name is Michael Eskenazi, I'm a professional guitarist working in the industry since 2012. After Graduation from Ballard High School in Seattle, Washington I was offered a scholarship to New School for Jazz and Contemporary Music, and moved to New York City to pursue music.",
            "During my time in New York I studied with and was mentored by some of the finest musicians this planet has to offer. Some of those musicians include: Bruce Edwards, Charles Tolliver, Jimmy Owens, Vic Juris, Ed Cherry and Onaje Allan Gumbs, all of whom helped shape and mold my musical outlook and style.",
            "I gained a great amount of professional musical experience while in New York City playing everywhere from churches, private parties, weddings, festivals, jazz clubs and everything in between. Playing in such a wide variety of settings has helped me to be able to fit the needs of what ever musical setting I find myself in and how to sustain myself as a musician making a living in a place with the most talented and abundant amount of musicians in the world. I was also employed as a teacher at the Brooklyn Conservatory of Music and the Fred Astaire Dance studio.",
            "I am currently residing in the Seattle area where I am an active teacher and a core member of Gary Hammons group Last Of The Tribe.",
        ],
        learnMoreText: "Learn more about me in my interview with Jazz Guitar Today!",
        learnMoreLink: "https://jazzguitartoday.com/2024/07/jgt-talks-to-seattles-michael-eskenazi/",
    },
    lesson: {
        info: [
            "Teaching is one of my passions! Molding to your learning style is valuable and effective. Too often I see musicians focused on teaching the instrument in hand versus encompassing the overall principles of learning music. I incorporate a holistic approach by teaching the basic elements of music, including but not limited to: ear training, rhythm, tone, dynamics and harmony.",
            "Learning music is more than becoming familiar with an instrument. It instills discipline, ignites the creative mind and develops an outlet for expression that can stay with you for a lifetime. My primary goal as a teacher is to share and nurture these benefits with every aspiring musician I meet.",
            "I work with students of all ages and levels, including children as young as 5 years old. I offer in person for local clients, and zoom meetings for those who prefer it.",
            "I look forward to working with you and exploring the joy of creating music together. Let's start with a brief meeting to get to know you, student and parent if applicable, and learn more about your goals as a musician."
        ],
        options: [
            {
                title: "Aspiring Musician",
                price: "$200/mo",
                description: "60 minutes every other week.",
                includes: [
                    "In person lessons at your house or mine",
                    "Playing your favorite Jazz, Rock, or Blues songs",
                    "Learn Rhythm Guitar and Solo Guitar",
                    "Basic techniques, Scales & Chords"
                ],
            },
            {
                title: "Seasoned Musician",
                price: "$380/mo",
                description: "60 minutes each week over 4 weeks.",
                includes: [
                    "In person lessons at your house or mine",
                    "Learn to comp in different jam settings",
                    "Improvise over complex chord progression",
                    "Create and learn Chord Melodies",
                    "Advance techniques, Scales & Chords",
                    "Ear training & transcribing"
                ],
            },
            {
                title: "Master Class",
                price: "$120/hr",
                description: "60 minute Master Class with your band.",
                includes: [
                    "Techniques for cohesive ensemble playing and communication",
                    "Mastering phrasing and articulation as a group",
                    "Improvisation skills for soloing and accompanying within the group",
                    "Developing dynamics and group interaction",
                    "Advice for live performance, set list, and equipment"
                ]
            }
        ],
        optionsCallback: "Unsure what type of lesson is best for you? Reach out to me and we can figure it out!"
    },
    listen: {
        personal: [
            {
                title: "",
                link: "https://youtube.com/embed/evgZX5v3Vwc",
                videoId: "evgZX5v3Vwc",
                description: "Here is a video clip of me performing for the earshot jazz festival in 2019"
            },
            {
                title: "",
                link: "https://www.youtube.com/embed/l8BYIDufyjs",
                videoId: "l8BYIDufyjs",
                description: "Here is a video of me performing for a Hadley Caliman tribute concert alongside some of Seattle's finest musicians."
            },
            {
                title: "",
                link: "https://www.youtube.com/embed/HZSjO5LTLgE",
                videoId: "HZSjO5LTLgE",
                description: "Here is a video of me performing at The 2022 Lakedale Jazz Festival with Delvon Lamarr and Max Holmberg",
            }
        ],
        favoriteAlbums: [],
        jazzRecommendation: [],
        bluesRecommendation: [],
    },
    testimonials: TestimonialContent,
    faq: [
        {
            question: "What makes jazz guitar different from other types of guitar playing?",
            answer: "Jazz guitar is distinctive because of its emphasis on improvisation, complex chord progressions, and the use of extended chords (like 7ths, 9ths, 11ths, and 13ths). Unlike other genres, jazz also often incorporates modal playing and intricate rhythm patterns."
        },
        {
            question: "How can I get started with jazz guitar if I’m new to the genre?",
            answer: "Start by learning basic jazz chords (like major 7ths, minor 7ths, and dominant 7ths). Then, study common jazz progressions like the ii-V-I. You can begin with simple improvisation over these chords and work on your timing and rhythm."
        },
        {
            question: "What are the basic jazz chords and how do I learn them?",
            answer: "The most essential jazz chords include major 7ths (e.g., Cmaj7), minor 7ths (e.g., Am7), and dominant 7ths (e.g., G7). To learn them, start by practicing their finger positions and inversions, and then move to applying them in common progressions."
        },
        {
            question: "How important is improvisation in jazz guitar playing?",
            answer: "Improvisation is at the heart of jazz music. It allows you to express yourself within the harmonic structure of a song. As a jazz guitarist, developing improvisation skills is crucial to becoming fluent in the genre."
        }
    ]
}

export default WebsiteContent;