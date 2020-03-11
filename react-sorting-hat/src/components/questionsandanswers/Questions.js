import React, { Component } from "react";
import Question from "./Question";
import Answer from './answer'

import './questions.css';

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      questions: questions,
      questionNum: 0,
      points: [0, 0, 0, 0],
      houseNames: ["Hufflepuff", "Ravenclaw", "Slytherin", "Griffindor"]
    };
  }

  nextQuestion = value => {
    this.setState(previous => {
      let points = previous.points.map((point, i) => point + value[i])
      let questionNum = previous.questionNum +1
      if (questionNum >= previous.questions.length){
        let max = previous.points.indexOf(Math.max(...previous.points))
        this.props.click(previous.houseNames[max])
        questionNum = 0
      }
      return {
        questionNum: questionNum,
        points: points,
      }
    })
  }

  render() {
    return (
      <div className="questions">
        <Question
          question={this.state.questions[this.state.questionNum].question}
        />
        {this.state.questions[this.state.questionNum].answers.map((a, i) => (
          <Answer
            answer={a.answer}
            value={a.points}
            key={i}
            click={this.nextQuestion}
          />
        ))}
      </div>
    );
  }
}

export default Questions;



const questions = [
    {
        question: "Which would you rather be?",
        answers: [
          {answer: "Envied", points: [0,1,0,1]},
          {answer: "Imitated", points: [0,1,0,0]},
          {answer: "Trusted", points: [0,1,1,0]},
          {answer: "Praised", points: [1,0,0,1]},
          {answer: "Liked", points: [0,0,1,0]},
          {answer: "Feared", points: [0,0,0,1]},
        ]
      },
      {
        question: "What is your favorite color?",
        answers: [
          {answer: "Yellow", points: [1,0,0,0]},
          {answer: "Blue", points: [0,1,0,0]},
          {answer: "Green", points: [0,0,1,0]},
          {answer: "Red", points: [0,0,0,1]}
        ]
      },
      {
        question: 'What is a word you find to be relatable?',
        answers: [
          {answer: 'Hard Working', points: [1,0,0,0]},
          {answer: 'Creative', points: [0,1,0,0]},
          {answer: 'Cunning', points: [0,0,1,0]},
          {answer: 'Brave', points: [0,0,0,1]}
        ]
      },
      {
        question: "Left or Right?",
        answers: [
          {answer: "Left", points: [0,1,0,1]},
          {answer: "Right", points: [1,0,1,0]},
        ]
      },
]
