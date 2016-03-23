import moment from 'moment'

// Initial Counter Dashboard State
const initialCountState = {
  count: 0,
  countEntries: []
}

// State Reducer for Counter Dashboard
export const countDashboard = (state = initialCountState, action) => {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: state.count + 1,
        countEntries: [ ...state.countEntries, { timeStamp: moment(), count: state.count + 1 } ]
      }
    default:
      return state
  }
}
