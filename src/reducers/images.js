import { SET_ALBUMS, SET_IMAGES } from './constants';

const initialState = {
	albums: [],
  images: []
}

export default function images(state = initialState, action = {}) {
  switch (action.type) {

  	case SET_ALBUMS:
      return { ...state, albums : action.payload }

    case SET_IMAGES:
      return { ...state, images : action.payload }
   
    default:
      return state;
  }
}