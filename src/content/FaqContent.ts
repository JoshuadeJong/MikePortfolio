import QA from "../type/content/type/QA";

const FaqContent: { [key: string]:  QA[] } = {
    "Lessons": [
        {
            question: "Can we do lessons at my house?",
            answer: "<p>Yes, in-home lessons are available and can be a great way to learn in a comfortable, familiar environment. I’m happy to travel to your home, provided it's within a reasonable distance. If you have any specific scheduling or setup questions, feel free to reach out!</p>"
        },
        {
            question: "Can we do lessons at your house?",
            answer: "<p>Yes, in-person lessons are available at my home studio. It’s a comfortable and focused environment equipped with everything we need for productive sessions. Let me know what days and times work best for you, and we can schedule accordingly.</p>"
        },
        {
            question: "Do you do lessons on zoom?",
            answer: "<p>At this time, I only offer in-person lessons. My approach to teaching is highly interactive and tailored to each student’s playing style, which I’ve found is most effective in a face-to-face setting. If you're local and interested in in-person lessons, I’d be happy to connect!</p>"
        },
        {
            question: "When should I start lesson? When am I ready for lessons?",
            answer: "<p>The best time to start is as soon as you’re interested. You don’t need to be “ready” in any specific way as lessons are designed to meet you where you are. Whether you're brand new to the guitar or already playing and looking to grow, starting lessons early helps build a strong foundation and sets you on a clear path toward your musical goals.</p>"
        },
        {
            question: "What genres do you teach?",
            answer: "<p>I specialize in jazz guitar, with additional experience in blues, R&B, rock, funk, and neo-soul. Unfortunately, I don’t offer lessons in classical or heavy metal, so if those are your primary interests, I recommend working with a teacher who focuses in those areas..</p>"
        },
        {
            question: "How often can I have lessons?",
            answer: "<p>I offer weekly one-hour lessons as a standard format. This consistent schedule provides the best foundation for progress and retention. If you’re looking for more frequent sessions or have specific goals in mind, feel free to reach out—I’m happy to discuss options based on your needs and availability.</p>",
        },
        {
            question: "What happens if I cancel or miss a guitar lesson?",
            answer: "<p>Cancellations made with less than 24 hours’ notice will be charged in full. This policy helps ensure fairness and consistency for all students, as time is reserved specifically for you. If you know in advance that you’ll need to reschedule, please reach out as early as possible, and I’ll do my best to accommodate.</p>"
        }
    ],
    "Gear": [
        {
            question: "What kind of guitar should I buy to start out?",
            answer: "<p>There isn’t really a right or wrong answer to this question. However, I recommend choosing a guitar that can handle a variety of musical styles, especially if you're not yet sure which genre you'll focus on.</p>" +
                "<p>If you're specifically interested in learning jazz, a hollowbody guitar can be a great choice, but it's not a requirement. You can still achieve a good jazz tone with a solid-body guitar, depending on the model and how it's set up.</p>" +
                "<p>No two guitars are exactly alike, and the most important factor is how the instrument feels in your hands. Comfort and playability should be top priorities when choosing your first guitar.</p>" +
                "<p>If possible, visit your local music store and try out several guitars. Getting a feel for different models can help you make a more confident choice. I'm always happy to assist in this process as I want all of my students to have a quality instrument that supports their learning and enjoyment.</p>"
        },
        {
            question: "What are some good, affordable options for my first guitar?",
            answer: "<p>If you're looking for a budget-friendly first guitar, there are several great options across different body styles. Your choice may depend on the kind of music you want to play and whether you prefer electric, acoustic, or semi-acoustic tones. Here are my recommendations based on body style:</p>" +
                "<b>Solid Body Electric Guitars</b>" +
                "<ul>" +
                    "<li>Fender Player Series Telecaster</li>" +
                    "<li>Fender Player Series Stratocaster</li>" +
                    "<li>Epiphone Les Paul</li>" +
                    "<li>G&L Tribute ASAT</li>" +
                "</ul>" +
                "<b>Semi-Hollow Body Guitars</b>" +
                "<ul>" +
                    "<li>Epiphone ES-335</li>" +
                    "<li>Guild Starfire</li>" +
                    "<li>Ibanez AS73</li>" +
                "</ul>" +
                "<b>Hollow Body Guitars</b>" +
                "<ul>" +
                    "<li>Epiphone Emperor Joe Pass</li>" +
                    "<li>Washburn J-6 Montgomery</li>" +
                    "<li>Oscar Schmidt OE40-N</li>" +
                    "<li>Ibanez AG95</li>" +
                "</ul>" +
                "<b>Acoustic Guitars</b>" +
                "<ul>" +
                    "<li>Eastman PCH1-GACE Acoustic-Electric</li>" +
                    "<li>Art & Lutherie</li>" +
                "</ul>",
        },
        {
            question: "Should I buy a used guitar?",
            answer: "<p>Yes! Buying a used guitar can be a great option, especially if you're looking to get more value for your money. That said, there are a few key things to check before making a purchase:" +
                "<ul>" +
                    "<li><b>Neck condition:</b> Look for signs of warping or twisting.</li>" +
                    "<li><b>Fret wear:</b> Are the frets dented or worn down?.</li>" +
                    "<li><b>Cracks or damage:</b> Inspect the body and headstock for structural cracks.</li>" +
                    "<li><b>Playability:</b> Test for issues like string buzzing or high action.</li>" +
                    "<li><b>Intonation and neck angle:</b> These affect tuning stability and how well the guitar plays up the neck.</li>" +
                    "<li><b>Bridge stability:</b> Ensure the bridge is securely attached and not lifting.</li>" +
                    "<li><b>Cosmetic condition:</b> Minor scratches are fine, but large dents or chips may affect resale value.</li>" +
                "</ul>" +
                "</p>" +
                "<p>Some issues, like poor setup or minor fret buzzing, can usually be addressed with a professional setup, which typically costs between $60 and $100. However, more serious issues like worn frets can be expensive to fix. A full fret replacement may cost anywhere from $400 to $600, so it's best to avoid guitars with this kind of wear unless you're getting a deep discount.</p>" +
                "<p>If possible, bring along someone experienced with guitars when shopping used. While some shop employees can be helpful, remember that their job is to sell you something, so it’s good to have a second unbiased opinion.</p>"
        },
        {
            question: "Should I buy a guitar online?",
            answer: "<p>One of the biggest advantages of buying online is the ability to search for the exact model you want, often at a lower price. A great place to start is Reverb, which offers a huge selection of new and used gear from trusted sellers.</p>" +
                "<p>That said, the main downside is that you don’t get to play the guitar before buying it. To protect yourself:</p>" +
                    "<ul>" +
                        "<li> Always review the seller’s return policy.</li>" +
                        "<li>Make sure there’s a clear option to return the instrument if it arrives in a condition that doesn’t match the photos or description.</li>" +
                    "</ul>" +
                "</p>" +
                "<p>Taking these steps can help ensure you’re not stuck with a guitar that isn’t what you expected.</p>"
        },
        {
            question: "Do I need an amplifier to practice electric guitar",
            answer: "<p>Yes, if you plan to play an electric guitar, you will need an amplifier for practice. There are many affordable options available that are perfect for beginners. Unless you're performing live or playing with a band, you don’t need a high-powered amp for practice at home.</p>" +
                "<p>You can often find great deals on used equipment as well. Here are a few solid options to consider:" +
                    "<ul>" +
                        "<li>Boss Katana Gen 3 (50W)</li>" +
                        "<li>Fender Hot Rod Deluxe 112</li>" +
                        "<li>Vox Pathfinder 10</li>" +
                        "<li>Peavey Vypyr X1</li>" +
                    "</ul>" +
                "</p>" +
                "<p>These amps vary in size and features, but all are reliable choices depending on your budget and space.</p>"
        },
        {
            question: "What stores or websites do you recommend I buy gear at?",
            answer: "<p>I recommend checking out Reverb for a wide selection of new and used gear as it's a great resource for finding deals. Locally, American Music and Dusty Strings are excellent shops with knowledgeable staff and quality instruments. Both offer a curated selection that's great for guitarists looking for quality instruments with the right tone and feel. </p>"
        }
    ],
    "Learning": [
        {
            question: "How do I learn the notes on the fretboard?",
            answer: "<p>This is a very common question, and the simplest answer is: learn how to read sheet music. It’s by far the most effective way to memorize the notes on the neck.</p>" +
                "<p>When you learn to read even basic sheet music, you're naturally forced to associate specific notes with specific fretboard positions. Over time, this builds a strong mental map of the fretboard. The key is to practice consistently as a little each day will make a big difference.</p>" +
                "<p>Recommended books:" +
                "<ul>" +
                    "<li>A Modern Method for Guitar, Vol 1 &#8212 William Leavitt</li>" +
                    "<li>Melodic Rhythms for Guitar &#8212 Hal Leonard</li>" +
                "</ul>",
        },
        {
            question: "How do I practice soloing?",
            answer: "<p>Before you can effectively practice soloing, you need to know your scale fingerings. This step is essential and cannot be skipped. If you don’t fully learn them, you’re only wasting your time.</p>" +
                "<p>Along with building a chord vocabulary, learning your scale fingerings will be one of the primary focuses of our early lessons. These fingerings are a fundamental part of music, whether you aim to be a lead guitarist or a rhythm player.</p>",
        },
        {
            question: "How do I learn chords quickly?",
            answer: "<p>If you're a beginner, the first step is to learn open-position chords and once you're comfortable with those, move on to barre chords, which will allow you to play in any key and expand your versatility.</p>" +
                "<p>For intermediate players who already know open and barre chords, the next step is to start learning seventh chords and other chord variations. This will deepen your musical understanding and give your playing more color and expression.</p>" +
                "<p>No matter your level, building your chord vocabulary is absolutely essential for your growth as a musician and you can never learn enough.</p>"
        },
        {
            question: "What resources do you recommend for learning guitar?",
            answer: "<p>Listening to jazz and transcribing solos directly from recordings is one of the most effective ways to develop as a jazz guitarist. However, there are also several excellent books and apps that can support your learning at every stage:</p>" +
                "<b>Apps</b>" +
                "<ul>" +
                    "<li><b>iReal Pro</b><br/>A great for practicing jazz standards and improvisation with backing tracks that can be customized.</li>" +
                    "<li><b>Transcribe! &#8212 Seventh String Software</b><br/>Makes transcribing easier by allowing you to isolate, slow down, and loop difficult phrases from solos.</li>" +
                "</ul>" +
                "<b>Beginner Books</b>" +
                "<ul>" +
                    "<li><b>Open Chords: A Beginner's Guide with 18 Timeless Rock Riffs &#8212 Hal Leonard</b><br/>Learn to play open chords with real rock songs.</li>" +
                    "<li><b>A Modern Method For Guitar, Vol 1 &#8212 William Leavitt</b><br/>A great book for learning to read music on the guitar." +
                    "<li><b>Jazz Guitar &#8212 Hal Leonard</b><br/>A well-structured introduction to jazz guitar basics, including chords, scales, and comping patterns.</li>" +
                    "<li><b>The Real Book Six Edition &#8212 Hal Leonard</b><br/>A collection of lead sheets for hundreds of jazz standards. Great for quickly learning repertoire.</li>" +
                "</ul>" +
                "<b>Intermediate Books</b>" +
                "<ul>" +
                    "<li><b>Melodic Rhythms for Guitar &#8212 William Leavitt</b><br/>Helps develop rhythmic accuracy, phrasing, and musical interpretation through melodic etudes.</li>" +
                    "<li><b>Joe Pass Guitar Chords</b><br/>Offers insight into one of jazz guitar’s greats and his unique chord voicings and harmonic ideas.</li>" +
                    "<li><b>Jazz Guitar Study 1: The Fingerboard Workbook &#8212 Barry Galbraith</b><br/> Builds fretboard knowledge and voice-leading skills.</li>" +
                    "<li><b>Jazz Guitar Study 3: Guitar Comping &#8212 Barry Galbraith</b><br/> Focuses on chordal accompaniment in various jazz styles and feels.</li>" +
                    "<li><b>How to Play Bebpop, Vol 2 &#8212 David Baker</b><br/>A great reference for jazz licks over a variety of chord progressions, helping players expand their soloing vocabulary.</li>" +
                    "<li><b>The Cellular Approach &#8212 Randy Vincent</b><br/>A modern, pattern-based method that shows how to connect licks seamlessly over chord changes, allowing you build cohesive and melodic solos.</li>" +
                    "<li><b>Walking Bass for Jazz Guitar &#8212 Martin Taylor</b><br/>An introduction to combining bass lines and shell voicings to comp for singers or other guitar players</li>" +
                "</ul>" +
                "<b>Advanced Books</b>" +
                "<ul>" +
                    "<li><b>Chord Chemistry &#8212 Ted Greene</b><br/> A deep dive into the universe of chord voicings, offering harmonic insight for advanced players.</li>" +
                    "<li><b>Modern Chord Progressions &#8212 Ted Greene</b><br/> Expands on functional and non-functional harmonic movement, ideal for crafting sophisticated progressions and arrangements.</li>" +
                "<ul>"
        }
    ]
}

export default FaqContent;