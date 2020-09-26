import { lesson_1 } from "./1"
import { lesson_2 } from "./2"
import { lesson_3 } from "./3"
import { lesson_4 } from "./4"

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
        return lesson_2.map(word => new Word(word))
    }
    static getLesson3 = (): Word[] => {
        return lesson_3.map(word => new Word(word))
    }
    static getLesson4 = (): Word[] => {
        return lesson_4.map(word => new Word(word))
    }
    constructor(
        public words = [
            ...Lesson.getLesson1(), 
            ...Lesson.getLesson2(),
            ...Lesson.getLesson3(), 
            ...Lesson.getLesson4()
        ]
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