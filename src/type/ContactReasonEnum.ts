class ContactReasonEnum {
    static readonly LessonRequest = new ContactReasonEnum(
        "Lesson Request",
    );
    static readonly Review = new ContactReasonEnum(
        "Review",
    )
    static readonly GigWorkRequest = new ContactReasonEnum(
        "Gig Work Request",
    )
    static readonly Other = new ContactReasonEnum(
        "Other",
    )
    static readonly Unknown = new ContactReasonEnum(
        "Unknown",
    )

    constructor(
        readonly name: string,
    ) {
    }

    static values(): Array<ContactReasonEnum> {
        return Object.values(ContactReasonEnum);
    }

    toString() {
        return this.name;
    }
}

export default ContactReasonEnum;
