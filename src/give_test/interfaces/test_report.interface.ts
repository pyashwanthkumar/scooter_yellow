
export interface QuestionI {
    question?: string

    options?: string[]

    points?: number

    correct_answer?: string

    selected_answer?: string

    feedback?: string
}

export interface ResultI{
    test_name?: string

    student_name?: string

    student_id?: number

    semester?: string

    points?: number
    
    year?: number
    
    subject?: string

    ques_ans_feed?: QuestionI[]
}