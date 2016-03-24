import moment from 'moment'

// Initial Color Dashboard State
const initialColorState = {
  color: '000',
  colorEntries: []
}

// State Reducer for Color Dashboard
export const colorDashboard = (state = initialColorState, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color.hex,
        colorEntries: [ ...state.colorEntries, { timeStamp: moment(), color: action.color.hex } ]
      }
    default:
      return state
  }
}
