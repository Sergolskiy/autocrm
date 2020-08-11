

const initialState = {
  main: [

  ]
}

export default function mainReducer (state = initialState, action) {
  switch (action.type) {

    default:
      return {
        ...state
      }
  }
}
