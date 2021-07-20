import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { api } from "./AxiosService.js"

class QuestionsService {

  async getAllQuestions() {
    const res = await api.get('?amount=1&category=17&difficulty=medium&type=multiple')
    console.log(res.data.results)
    let questions = res.data.results.map(q => new Question(q))
    ProxyState.questions = questions
  }

}

export const questionsService = new QuestionsService