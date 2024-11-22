import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import EmailIcon from "@mui/icons-material/Email";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MenuBookIcon from '@mui/icons-material/MenuBook';


class View {
    static readonly Home = new View("Home", HomeIcon, "/type");
    static readonly Home_About = new View(
        "About",
        FaceIcon,
        "/type#about"
    );
    static readonly Home_Project = new View(
        "Project",
        TerminalIcon,
        "/type#projects"
    );
    static readonly Home_Lessons = new View(
        "Lessons",
        SchoolIcon,
        "/type#skills"
    );
    static readonly Home_Testimonial = new View(
        "Reviews",
        Diversity1Icon,
        "/type#Testimonials"
    );
    static readonly Home_Contact = new View(
        "Contact",
        EmailIcon,
        "/type#connect"
    );

    static readonly Lesson = new View(
        "Lesson",
        LibraryBooksIcon,
        "/lesson"
    )
    static readonly Lesson_Booking = new View(
        "Lesson Booking",
        SchoolIcon,
        "/lesson/booking"
    )
    static readonly Lesson_Material = new View(
        "Lesson Material",
        MenuBookIcon,
        "/lesson/material"
    )
    static readonly Lesson_Listen = new View(
        "Listen",
        LibraryMusicIcon,
        "/lesson/listen"
    )

    static  readonly Testimonial = new View(
        "Reviews",
        Diversity1Icon,
        "/reviews"
    )

    static readonly Contact = new View(
        "Contact",
        EmailIcon,
        "/contact"
    )

    static readonly Dev = new View("Dev", FlagIcon, "/dev");

    static values(): Array<View> {
        return Object.values(View);
    }

    static matchPath(path: string) {
        return Object.values(View).find((view) => view.path === path);
    }

    constructor(
        readonly displayName: string,
        readonly icon: OverridableComponent<SvgIconTypeMap>,
        readonly path: string
    ) {}

    getHash(): string {
        return this.path.split("#")[1];
    }

    toString(): string {
        return this.displayName;
    }
}

export default View;