import { createStore } from 'vuex'

const store = createStore({
  state: {
    tickAllCorrect: {
        isLocked: false,
        randomOrder: true,
        questions: [
            {
                id: 0,
                elementId: "tickAllAnswer1",
                text: "London is the capital city of England",
                correctAnswer: true,
                isSelected: false,
            },
            {
                id: 1,
                elementId: "tickAllAnswer2",
                text: "Paris is the capital city of Spain",
                correctAnswer: false,
                isSelected: false,
            },
            {
                id: 2,
                elementId: "tickAllAnswer3",
                text: "Paris is the capital city of France",
                correctAnswer: true,
                isSelected: false,
            },
            {
                id: 3,
                elementId: "tickAllAnswer4",
                text: "Cardiff is the capital city of Wales",
                correctAnswer: true,
                isSelected: false,
            },
            {
                id: 4,
                elementId: "tickAllAnswer5",
                text: "Stoke is the capital city of England",
                correctAnswer: false,
                isSelected: false,
            },
            {
                id: 5,
                elementId: "tickAllAnswer6",
                text: "Madrid is the capital city of Spain",
                correctAnswer: true,
                isSelected: false,
            },
        ],
    }
  },
  getters: {
    selectedTickAllCorrectAnswers(state){
        return state.tickAllCorrect.questions.filter(answer => answer.isSelected);
    }
  },
  mutations: {
    LOCK_TICK_ALL_CORRECT(state){
        state.tickAllCorrect.isLocked = true;
        console.log("tick all correct is locked is "+ state.tickAllCorrect.isLocked);
    },
    TOGGLE_TICK_ALL_CORRECT_ANSWER(state, answer){
        console.log(typeof answer);
        console.log(state.tickAllCorrect.questions);
        console.log("toggling with "+answer);
        state.tickAllCorrect.questions[answer].isSelected = !state.tickAllCorrect.questions[answer].isSelected;
        console.log(state.tickAllCorrect.questions);
    },
  },
  actions: {
  },
  modules: {
  }
})



export default store;
