import { createStore } from 'vuex'

export default createStore({
  state: {
    tickAllCorrect: {
        isLocked: false,
        randomOrder: true,
        questions: [
            {
                id: 1,
                elementId: "tickAllAnswer1",
                text: "London is the capital city of England",
                correctAnswer: true,
                tickIsVisible: false,
            },
            {
                id: 2,
                elementId: "tickAllAnswer2",
                text: "Paris is the capital city of Spain",
                correctAnswer: false,
                tickIsVisible: false,
            },
            {
                id: 3,
                elementId: "tickAllAnswer3",
                text: "Paris is the capital city of France",
                correctAnswer: true,
                tickIsVisible: false,
            },
            {
                id: 4,
                elementId: "tickAllAnswer4",
                text: "Cardiff is the capital city of Wales",
                correctAnswer: true,
                tickIsVisible: false,
            },
            {
                id: 5,
                elementId: "tickAllAnswer5",
                text: "Stoke is the capital city of England",
                correctAnswer: false,
                tickIsVisible: false,
            },
            {
                id: 6,
                elementId: "tickAllAnswer6",
                text: "Madrid is the capital city of Spain",
                correctAnswer: true,
                tickIsVisible: false,
            },
        ],
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
