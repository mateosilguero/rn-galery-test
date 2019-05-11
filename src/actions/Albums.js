import { get_albums } from '../services/albums';
import { SET_ALBUMS, SET_IMAGES } from '../reducers/constants';

export function getAlbums() {
  return async (dispatch) => {
  	get_albums()
  		.then(albums => {
    		dispatch({ type: SET_ALBUMS, payload: albums });
    	})
    	.catch(e => console.log(e));
  }
}

export function setImages(images) {
  return async (dispatch) => {
    dispatch({ type: SET_IMAGES, payload: images });
  }
}