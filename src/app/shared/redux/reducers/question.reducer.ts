import {
    CLOSEQUESTION1, CLOSEQUESTION2,
    CLOSEQUESTION3, CLOSEQUESTION4,
    CLOSEQUESTION5, CLOSEQUESTION6,
    CLOSEQUESTION7, OPENQUESTION1,
    OPENQUESTION2, OPENQUESTION3,
    OPENQUESTION4, OPENQUESTION5,
    OPENQUESTION6, OPENQUESTION7
} from "../types"

interface Action {
    type: string,
    payload: any
}

export interface RootQuestions {
    question1: boolean,
    question2: boolean,
    question3: boolean,
    question4: boolean,
    question5: boolean,
    question6: boolean,
    question7: boolean
}

const inititalState: RootQuestions = {
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false
}



export const questionReucer = (state = inititalState, action: Action) => {
    switch (action.type) {
        case OPENQUESTION1:
            return { ...state, question1: action.payload }
        case CLOSEQUESTION1:
            return { ...state, question1: action.payload }
        case OPENQUESTION2:
            return { ...state, question2: action.payload }
        case CLOSEQUESTION2:
            return { ...state, question2: action.payload }
        case OPENQUESTION3:
            return { ...state, question3: action.payload }
        case CLOSEQUESTION3:
            return { ...state, question3: action.payload }
        case OPENQUESTION4:
            return { ...state, question4: action.payload }
        case CLOSEQUESTION4:
            return { ...state, question4: action.payload }
        case OPENQUESTION5:
            return { ...state, question5: action.payload }
        case CLOSEQUESTION5:
            return { ...state, question5: action.payload }
        case OPENQUESTION6:
            return { ...state, question6: action.payload }
        case CLOSEQUESTION6:
            return { ...state, question6: action.payload }
        case OPENQUESTION7:
            return { ...state, question7: action.payload }
        case CLOSEQUESTION7:
            return { ...state, question7: action.payload }
        default:
            return state
    }
}