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