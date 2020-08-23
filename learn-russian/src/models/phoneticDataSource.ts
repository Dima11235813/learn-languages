export const paragraph = "paragraphs"
export interface IPageData {
    img: string[],
    div: string[],
    headings: {},
    paragraphs: string[],
    spans: string[]
}
export interface IPageAnalytics {
    countOfHiddenImages: number
}
export class PageAnalytics implements IPageAnalytics {
    constructor(
        public countOfHiddenImages = 0
    ) {

    }
}
export interface IPhoneticPageData {
    data: PageData;
    analytics: PageAnalytics
}
export class PageData implements IPageData {
    constructor(
        public img = [],
        public div = [],
        public headings = {},
        public paragraphs = [],
        public spans = []
    ) { }
}
export class PhoneticPageData implements IPhoneticPageData {
    constructor(
        public data = new PageData(),
        public analytics = new PageAnalytics()

    ) {

    }
}
