import React, { useState } from "react";
import "./App.css";
import { lessons, ILesson, IWord } from "./lessons/Lesson";
import ActorApi from "./api/PhoneticData.api";
import { WordText } from "./WordText";

function App() {
  let [wordData, setWordData] = useState("");
  let [iframeUrl, setIframeUrl] = useState("");

  // const getDataForWord = (word: string) => {
  //   console.log(`Trigger client side search for phonetic data for word ${word}`)
  //   ActorApi.getPhoneticData(word)
  //     .then((result) => {
  //       console.log(result);
  //       setWordData(result);
  //     });
  // };
  // onClick={() => {
  //   getDataForWord(word.wordText);
  // }}
  const setIframeData = (newUrl: string) => {
    setIframeUrl(newUrl);
  };
  const get1Url = (url: string) => {
    return `https://vnutrislova.net/%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80/%D1%84%D0%BE%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9/${url}`;
  };
  const get2Url = (url: string) => {
    return `https://vnutrislova.net/%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80/%D1%84%D0%BE%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9/${url}`;
  };
  return (
    <div className="App">
      <header className="App-header">{wordData}</header>
      {/* Cross origin issues in iframe as well must use proxy it seems */}
      {/* <div className="App-data">
        {iframeUrl ? (
          <iframe
            src={iframeUrl}
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            allowFullScreen
          />
        ) : null}
      </div> */}
      <div className="App-body">
        <div className="lessons-container">
          {lessons.content.map((lesson: ILesson, indexNum: number) => {
            return (
              <div key={indexNum} className="lesson-card-containter">
                {lesson.words.map((word: IWord, indexNum: number) => {
                  return <WordText wordOrWords={word} id={indexNum}/>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
