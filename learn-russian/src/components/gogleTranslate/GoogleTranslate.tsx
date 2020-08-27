import React from "react";
import { wordLessonItemStyle, labelStyle } from "../../styles/phoneticStyle";
import { get1UrlPhonetic, get1UrlMorpho, getGoogleTranslateUrl } from "../../browserUtilities/links";

export interface IGoogleTranslateProps {
  wordSections: string[];
}

export const GoogleTranslate = (props: IGoogleTranslateProps) => {
  return (
    <div style={wordLessonItemStyle}>
      <div style={labelStyle}>{`
                gt
                
                `}</div>
      <div style={labelStyle}>
        {props.wordSections.map((wordSection: string, index: number) => {
          return (
            <React.Fragment>
              <a href={getGoogleTranslateUrl(wordSection)}>{wordSection}</a>
              <span> {` `}</span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
