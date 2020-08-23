import React from "react";
import { wordLessonItemStyle, labelStyle } from "../../styles/phoneticStyle";
import { get1UrlPhonetic, get1UrlMorpho } from "../../browserUtilities/links";

export interface IPhoneticLinkProps {
  wordSections: string[];
}

export const MorphoLink = (props: IPhoneticLinkProps) => {
  return (
    <div style={wordLessonItemStyle}>
      <div style={labelStyle}>{`
                Morpho
                
                `}</div>
      {props.wordSections.map((wordSection: string, index: number) => {
        return (
          <React.Fragment>
            <a href={get1UrlMorpho(wordSection)}>{` ${wordSection}  `}</a>
          </React.Fragment>
        );
      })}
    </div>
  );
};
