import React from "react";
import { wordLessonItemStyle, labelStyle } from "../../styles/phoneticStyle";
import { get1UrlPhonetic } from "../../browserUtilities/links";

export interface IPhoneticLinkProps {
  wordSections: string[];
}

export const PhoneticLink = (props: IPhoneticLinkProps) => {
  return (
    <div style={wordLessonItemStyle}>
      <div style={labelStyle}>{`
              Phonetic
              
              `}</div>
      <div style={labelStyle}>
        {props.wordSections.map((wordSection: string, index: number) => {
          return (
            <React.Fragment>
              <a
                key={`${index}-link`}
                href={get1UrlPhonetic(wordSection)}
              >{` ${wordSection}  `}</a>
              <span> {` `}</span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
