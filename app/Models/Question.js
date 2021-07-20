export default class Question {
  constructor({ question, correct_answer, incorrect_answers }) {
    this.name = question,
      this.correct = correct_answer,
      // this.incorrect = incorrect_answers  Took this out because 
      this.answers = incorrect_answers

    let randIndex = Math.floor(Math.random() * 3)
    this.answers.splice(randIndex, 0, this.correct)
  }

  get Template() {
    return `
    <div class="col border m-2">Question: <span id="question">${this.name}</span>
    </div>
    <div class="col border m-2">Choices: <span id="choices"></span >
    <button type="button" class="btn btn-primary" onclick="app.questionsController.isCorrect('${this.answers[0]}')">${this.answers[0]}</button>
    <button type="button" class="btn btn-primary">${this.answers[1]}</button>
    <button type="button" class="btn btn-primary">${this.answers[2]}</button>
    <button type="button" class="btn btn-primary">${this.answers[3]}</button>
    </div >
    `
  }
}