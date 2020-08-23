import React from "react";

export interface IPhoneticAnalysisParagraphProps {
  paragraphText: string;
}

export const PhoneticParagraph = (props: IPhoneticAnalysisParagraphProps) => {
  return <div>{props.paragraphText}</div>;
};
