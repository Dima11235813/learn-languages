import React, { useState } from "react";
import "./App.css";
import { lessons, ILesson, IWord } from "./lessons/Lesson";
import ActorApi from "./api/PhoneticData.api";

function App() {
  const wordLessonItemStyle = {
    padding: "1rem",
    margin: "1rem",
    border: "1px solid black",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
  };
  let [wordData, setWordData] = useState("");

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
  return (
    <div className="App">
      <header className="App-header">{wordData}</header>
      <div className="App-body">
        <div className="lessons-container">
          {lessons.content.map((lesson: ILesson, indexNum: number) => {
            return (
              <div key={indexNum} className="lesson-card-containter">
                {lesson.words.map((word: IWord, indexNum: number) => {
                  return (
                    <div key={indexNum} className="lesson-word-item-container">
                      <a
                        href={`https://vnutrislova.net/%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80/%D1%84%D0%BE%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9/${word.wordText}`}
                        style={wordLessonItemStyle}
                        className="word-lesson-item"
                      >
                        <div className="word-text">{word.wordText}</div>
                        <div className="word-definition"></div>
                      </a>
                    </div>
                  );
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
