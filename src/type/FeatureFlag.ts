
// Should the feature be on by default for development
const isDev = process.env.NODE_ENV === "development";

class FeatureFlag {
    static readonly DEV = new FeatureFlag(
        "Dev",
        isDev,
        "Enable the feature flag override page for the website."
    );
    static readonly LIGHT_THEME = new FeatureFlag(
        "Light Theme",
        isDev,
        "Enable the ability to switch to a primarily white theme for the website."
    );
    static readonly Page_Contact = new FeatureFlag(
        "Page Contact",
        isDev,
        "Enable the contact page for the website."
    )
    static readonly Page_Review = new FeatureFlag(
        "Page Review",
        isDev,
        "Enable the review page for the website."
    )
    static readonly Page_Lesson = new FeatureFlag(
        "Page Lesson",
        isDev,
        "Enable the lesson page for the website."
    )
    static readonly Page_Lesson_Booking = new FeatureFlag(
        "Page Lesson Booking",
        isDev,
        "Enable the lesson booking page for the website."
    )
    static readonly Page_Lesson_Material = new FeatureFlag(
        "Page Lesson Material",
        isDev,
        "Enable the lesson material page for the website."
    )
    static readonly Page_Lesson_Listen = new FeatureFlag(
        "Page Listen",
        isDev,
        "Enable the lesson listen page for the website."
    )

    static values(): Array<FeatureFlag> {
        return Object.values(FeatureFlag);
    }

    constructor(
        readonly name: string,
        readonly defaultValue: Boolean,
        readonly description?: string
    ) {}

    toString() {
        return this.name;
    }
}

export default FeatureFlag;