import React from "react";

export interface IPhoneticAnalysisParagraphProps {
  paragraphText: string;
}

//https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
// encode(decode) html text into html entity
var decodeHtmlEntity = function(str:string) {
  // console.log(`input to decode is ${str}`)
  return str.replace(/&#(\d+);/g, function(match, dec) {
    // console.log(`output to decode is ${dec}`)
    return String.fromCharCode(dec)
  });
};
let arrayOfUnwantedParagraphCharSeries = [
  "&laquo;",
  "&rarr;",
  "&mdash;",
  "&mdash;",
  "&mdash",
  "&raquo;",
  "&#769;",
  "&nbsp;",
  "В слове",
  ";",
  ":",
  "слогов",
  "Рекомендованные переносы"
]
var removeUnwantedCharSeries = (str:string) => {
  let resultString = str
  arrayOfUnwantedParagraphCharSeries.forEach((itemToRemove:string) => {
    resultString = resultString.replace(itemToRemove, " ")
  })
  return resultString
};

var encodeHtmlEntity = function(str: any) {
  var buf = [];
  for (var i=str.length-1;i>=0;i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return buf.join('');
};



export const PhoneticParagraph = (props: IPhoneticAnalysisParagraphProps) => {
    //Ignore paragraphs return that contain class content
  if (props.paragraphText.indexOf("class") > -1) return null;
  return <div>{removeUnwantedCharSeries(props.paragraphText)}</div>;
};
