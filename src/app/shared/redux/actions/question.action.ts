import {
    CLOSEQUESTION1, CLOSEQUESTION2,
    CLOSEQUESTION3, CLOSEQUESTION4, CLOSEQUESTION5, CLOSEQUESTION6, CLOSEQUESTION7, OPENQUESTION1,
    OPENQUESTION2, OPENQUESTION3, OPENQUESTION4, OPENQUESTION5, OPENQUESTION6, OPENQUESTION7
} from "../types"

export const openQuestion1 = (data: boolean): object => {

    if (data == true) {
        return { type: OPENQUESTION1, payload: data }
    }

    if (data == false) {
        return { type: CLOSEQUESTION1, payload: data }
    }
    return { type: CLOSEQUESTION1, payload: data }
}

export const openQuestion2 = (data: boolean): object => {

    if (data == true) {
        return { type: OPENQUESTION2, payload: data }
    }

    if (data == false) {
        return { type: CLOSEQUESTION2, payload: data }
    }
    return { type: CLOSEQUESTION2, payload: data }
}

export const openQuestion3 = (data: boolean): object => {

    if (data == true) {
        return { type: OPENQUESTION3, payload: data }
    }

    if (data == false) {
        return { type: CLOSEQUESTION3, payload: data }
    }
    return { type: CLOSEQUESTION3, payload: data }
}

export const openQuestion4 = (data: boolean): object => {

    if (data == true) {
        return { type: OPENQUESTION4, payload: data }
    }

    if (data == false) {
        return { type: CLOSEQUESTION4, payload: data }
    }
    return { type: CLOSEQUESTION4, payload: data }
}

export const openQuestion5 = (data: boolean): object => {

    if (data == true) {
        return { type: OPENQUESTION5, payload: data }
    }

    if (data == false) {
        return { type: CLOSEQUESTION5, payload: data }
    }
    return { type: CLOSEQUESTION5, payload: data }
}

export const openQuestion6 = (data: boolean): object => {

    if (data == true) {
        return { type: OPENQUESTION6, payload: data }
    }

    if (data == false) {
        return { type: CLOSEQUESTION6, payload: data }
    }
    return { type: CLOSEQUESTION6, payload: data }
}

export const openQuestion7 = (data: boolean): object => {

    if (data == true) {
        return { type: OPENQUESTION7, payload: data }
    }

    if (data == false) {
        return { type: CLOSEQUESTION7, payload: data }
    }
    return { type: CLOSEQUESTION7, payload: data }
}


