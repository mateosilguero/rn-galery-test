import { SET_IMAGES } from './constants';

const initialState = {
  images: [],
}

export default function images(state = initialState, action = {}) {
  switch (action.type) {

    case SET_IMAGES:
      return { ...state, images : action.payload }
   
    default:
      return state;
  }
}