import React, { ReactComponentElement } from "react";
import { getMorphologyUrl } from "./browserUtilities/wordTextUtils";
import { IWord } from "./lessons/Lesson";

export const wordLessonItemStyleMain = {
  width: "100vw",
  padding: "1rem",
  margin: "1rem",
  border: "1px solid black",
  display: "grid",
  alignContent: "center",
  justifyContent: "center",
};
export const wordLessonItemStyle = {
  width: "50vw",
  padding: "1rem",
  margin: "1rem",
  border: "1px solid black",
  display: "inline-flex",
};
export const wordSectionStyle = {
  display: "inline-flex",
};
export const labelStyle = {
  padding: "1rem",
  margin: "1rem",
  display: "block",
};

export interface IWordTextProps {
  wordOrWords: IWord;
  id: number;
}
const get1UrlPhonetic = (text: string) => {
  return `https://vnutrislova.net/%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80/%D1%84%D0%BE%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9/${text}`;
};
const get1UrlMorpho = (text: string) => {
  return `https://vnutrislova.net/%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80/%D0%BC%D0%BE%D1%80%D1%84%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9/${text}`;
};
const getUrlLetters = (text: string) => {
  return `https://vnutrislova.net/%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80/%D0%BF%D0%BE-%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D1%83/%D0%B2%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B1%D0%BE%D0%B9/${text}`;
};
const notAllowedChars = [",", "-"];
export const WordText = (props: IWordTextProps): JSX.Element => {
  const { wordOrWords, id } = props;
  const handleWordSection = (wordSection: string): string => {
    notAllowedChars.forEach((notAllowedChar: string) => {
      wordSection.replace(notAllowedChar, "");
    });
    return wordSection;
  };

  let wordSections: string[] = [wordOrWords.wordText];
  //TODO make sure to remove - from single word sections
  if (wordOrWords.wordText.indexOf(" ") > -1) {
    wordSections = wordOrWords.wordText.split(" ").map(handleWordSection);
  }

  return (
    <React.Fragment>
      <div style={wordLessonItemStyleMain}>
        {wordSections.map((wordSection: string, index: number) => {
          return (
            <span key={id} className="lesson-word-item-container">
              <div>{`  ${wordSection}  `}</div>
            </span>
          );
        })}
      </div>

      <div style={wordLessonItemStyle}>
        <div style={labelStyle}>{`
                Phonetic
                
                `}</div>
        {wordSections.map((wordSection: string, index: number) => {
          return (
            <React.Fragment>
              <a href={get1UrlPhonetic(wordSection)}>{` ${wordSection}  `}</a>
            </React.Fragment>
          );
        })}
      </div>
      <div style={wordLessonItemStyle}>
        <div style={labelStyle}>{`
                Morpho
                
                `}</div>
        {wordSections.map((wordSection: string, index: number) => {
          return (
            <React.Fragment>
              <a href={get1UrlMorpho(wordSection)}>{` ${wordSection}  `}</a>
            </React.Fragment>
          );
        })}
      </div>
      <div style={wordLessonItemStyle}>
        <div style={labelStyle}>{`
                Letters
                
                `}</div>
        {wordSections.map((wordSection: string, index: number) => {
          return (
            <React.Fragment>
              <a href={getUrlLetters(wordSection)}>{` ${wordSection}  `}</a>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};
