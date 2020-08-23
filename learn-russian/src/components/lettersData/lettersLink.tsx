import React from "react";
import { wordLessonItemStyle, labelStyle } from "../../styles/phoneticStyle";
import { getUrlLetters } from "../../browserUtilities/links";

export interface IPhoneticLinkProps {
  wordSections: string[];
}

export const LettersLink = (props: IPhoneticLinkProps) => {
  return (
    <div style={wordLessonItemStyle}>
      <div style={labelStyle}>{`
              Letters
              
              `}</div>
      {props.wordSections.map((wordSection: string, index: number) => {
        return (
          <React.Fragment>
            <a href={getUrlLetters(wordSection)}>{` ${wordSection}  `}</a>
          </React.Fragment>
        );
      })}
    </div>
  );
};
