import React, { useState } from "react";
import "./App.css";
import { lessons, ILesson, IWord } from "./lessons/Lesson";
import ActorApi from "./api/PhoneticData.api";
import { WordText } from "./WordText";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <div className="lessons-container">
          {lessons.content.map((lesson: ILesson, indexNum: number) => {
            return (
              <div key={indexNum} className="lesson-cards-containter">
                {lesson.words.map((word: IWord, indexNum: number) => {
                  return (
                    <WordText key={`${indexNum}-word-text`} wordOrWords={word} id={indexNum} />
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
