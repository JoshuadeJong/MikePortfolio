// Should the feature be on by default for development
const isDev = process.env.NODE_ENV === "development";

class FeatureFlag {
    static readonly DEV = new FeatureFlag(
        "Dev",
        isDev,
        "Enable the feature flag override page for the website."
    );
    static readonly Theme_Selector = new FeatureFlag(
        "Theme Selector",
        false,
        "A floating theme selector on all pages"
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
        "Enable the lesson performances page for the website."
    )
    static readonly Page_Frequently_Asked_Questions = new FeatureFlag(
        "Page Frequently Asked Questions",
        isDev,
        "Enable the Frequently Asked Questions page for the website."
    )

    constructor(
        readonly name: string,
        readonly defaultValue: Boolean,
        readonly description?: string
    ) {
    }

    static values(): Array<FeatureFlag> {
        return Object.values(FeatureFlag);
    }

    toString() {
        return this.name;
    }
}

export default FeatureFlag;