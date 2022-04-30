import store from '../index';

export function Sharing(value) {
    return {
      type: 'Sharing',
      value
    }
  }
export function AddData(value) {
return {
    type: 'AddData',
    value
}
}

const initialState={
    sharing:0,
    data:[]
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case 'Sharing':
      return {
        ...state,
          sharing:action.value,
      }
    case 'AddData':
    return {
        ...state,
        data:state.data.concat(action.value)
    }
 
    default:
      return state
    }
}
