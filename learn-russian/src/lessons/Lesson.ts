import { lesson_1 } from "./1"

export interface ILessons {
    content: ILesson[]
}
export interface ILesson {
    words: IWord[]
}
export interface IWord {
    wordText: string
}

export class Lessons implements ILessons {
    constructor(
        public content = [
            new Lesson()
        ]
    ) {

    }
}
export class Lesson implements ILesson{
    static getLesson1 = (): Word[] => {
        return lesson_1.map(word => new Word(word))
    }
    static getLesson2 = (): Word[] => {
        return lesson_1.map(word => new Word(word))
    }
    constructor(
        public words = [...Lesson.getLesson1(), ...Lesson.getLesson2()]
    ) {

    }
}
export class Word implements IWord{
    constructor(
        public wordText: string
    ) {

    }
}
export const lessons = new Lessons()