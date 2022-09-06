import { createStore } from 'vuex'

const store = createStore({
  state: {
    tickAllCorrect: {
        isLocked: false,
        randomOrder: false,
        statements: [
            {
                id: 0,
                elementId: "tickAllAnswer0",
                text: "London is the capital city of England",
                correctAnswer: true,
                isSelected: false,
            },
            {
                id: 1,
                elementId: "tickAllAnswer1",
                text: "Paris is the capital city of Spain",
                correctAnswer: false,
                isSelected: false,
            },
            {
                id: 2,
                elementId: "tickAllAnswer2",
                text: "Paris is the capital city of France",
                correctAnswer: true,
                isSelected: false,
            },
            {
                id: 3,
                elementId: "tickAllAnswer3",
                text: "Cardiff is the capital city of Wales",
                correctAnswer: true,
                isSelected: false,
            },
            {
                id: 4,
                elementId: "tickAllAnswer4",
                text: "Stoke is the capital city of England",
                correctAnswer: false,
                isSelected: false,
            },
            {
                id: 5,
                elementId: "tickAllAnswer5",
                text: "Madrid is the capital city of Spain",
                correctAnswer: true,
                isSelected: false,
            },
        ],
    }
  },
  getters: {
  },
  mutations: {
        LOCK_TICK_ALL_CORRECT(state){
          state.tickAllCorrect.isLocked = true;
          console.log("tick all correct is locked is "+ state.tickAllCorrect.isLocked);
        },
        TOGGLE_TICK_ALL_CORRECT_STATEMENT(state, statement){
        const statements = state.tickAllCorrect.statements;

        for(let i = 0; i < statements.length; i++){
            const statementID = statements[i].id;
            if(statementID == statement){
                statements[i].isSelected = !statements[i].isSelected;
            }
        }

    },
  },
  actions: {
  },
  modules: {
  }
})



export default store;
