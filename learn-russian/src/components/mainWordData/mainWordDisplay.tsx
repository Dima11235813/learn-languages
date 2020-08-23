import React, { useState } from "react";
import {
  wordLessonItemStyle,
  labelStyle,
  wordLessonItemStyleMain,
} from "../../styles/phoneticStyle";
import { get1UrlPhonetic } from "../../browserUtilities/links";
import PhoneticApi from "../../api/PhoneticData.api";
import {
  IPhoneticPageData,
  PhoneticPageData,
} from "../../models/phoneticDataSource";
import { PhoneticParagraph } from "../phoneticData/PhoneticAnalysisParagraph";

export interface IMainWordDisplayProps {
  wordSections: string[];
}

export const MainWordDisplay = (props: IMainWordDisplayProps) => {
  let [wordData, setWordData] = useState<IPhoneticPageData>(
    new PhoneticPageData()
  );
  const handleWordClick = (text: string) => {
    console.log(
      `Trigger client side search for phonetic data for word ${text}`
    );
    PhoneticApi.getPhoneticData(text).then((result) => {
      console.log(result);
      setWordData(result);
    });
  };
  return (
    <React.Fragment>
      <div style={wordLessonItemStyleMain}>
        {props.wordSections.map((wordSection: string, index: number) => {
          return (
            <div
              key={`${index}-${wordSection}`}
              className="lesson-word-item-container"
            >
              <span
                className="main-word-text"
                onClick={() => handleWordClick(wordSection)}
              >
                {`   ${wordSection}   `}
              </span>
            </div>
          );
        })}
        <div>
          {wordData.data.paragraphs.map((paragraphText: string) => (
            <PhoneticParagraph paragraphText={paragraphText} />
          ))}
        </div>
      </div>
      {/* <div>
          <span>
          DEBUG WORD DATA SECTION
          </span>
          <span>
          {JSON.stringify(wordData)}
          </span>
      </div> */}
    </React.Fragment>
  );
};
