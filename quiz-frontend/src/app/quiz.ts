export interface Quiz{
    title: String,
    description: String,
    TrueFalse_Question1: Boolean,
    TrueFalse_Question2: Boolean,
    TrueFalse_Question3: Boolean,
    MultipleChoice_Question1: String,
    MultipleChoice_Multi_Question1: [{"A1": String, "A2": String, "A3": String, "A4": String}],
    ShortAnswer: {type: String, required: true}
}