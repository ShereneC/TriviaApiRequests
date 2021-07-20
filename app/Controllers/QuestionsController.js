import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


function _draw() {
  let questions = ProxyState.questions
  let template = ''
  questions.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template
}

export default class QuestionsController {
  constructor() {
    ProxyState.on('questions', _draw)
    questionsService.getAllQuestions()

  }

  // isCorrect(answer) {    STruggling with this!!!!!!
  // if(answer == ProxyState.questions.answer)
  // }
}