const initialState = {
  another: 'one'
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'TEST':
    return { ...state }

  default:
    return state
  }
}
