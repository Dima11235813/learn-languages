import React from "react";
import { IWord } from "./lessons/Lesson";
import { linksWrapperStyle } from "./styles/phoneticStyle";

import { PhoneticLink } from "./components/phoneticData/PhoneticLink";
import { MorphoLink } from "./components/morphoData/MorphoLink";
import { LettersLink } from "./components/lettersData/lettersLink";
import { MainWordDisplay } from "./components/mainWordData/mainWordDisplay";

export interface IWordTextProps {
  wordOrWords: IWord;
  id: number;
}

const notAllowedChars = [",", "-"];
const handleWordSection = (wordSection: string): string => {
  notAllowedChars.forEach((notAllowedChar: string) => {
    wordSection.replace(notAllowedChar, "");
  });
  return wordSection;
};
export const WordText = (props: IWordTextProps): JSX.Element => {
  const { wordOrWords, id } = props;

  let wordSections: string[] = [wordOrWords.wordText];
  //TODO make sure to remove - from single word sections
  if (wordOrWords.wordText.indexOf(" ") > -1) {
    wordSections = wordOrWords.wordText.split(" ").map(handleWordSection);
  }

  return (
    <div className="word-card">
      <MainWordDisplay wordSections={wordSections} />
      <div style={linksWrapperStyle}>
        <PhoneticLink wordSections={wordSections} />
        <MorphoLink wordSections={wordSections} />
        <LettersLink wordSections={wordSections} />
      </div>
    </div>
  );
};
