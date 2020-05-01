import * as actions from '../../actionTypes';
import {firestore} from '../../firebase';

export const getAllWords = async (dispatch) => {
  try {
    const snapshot = await firestore.collection('words').get();
    const dictData = snapshot.docs.map((doc) => {
      return {...doc.data(), id: doc.id};
    });
    console.log(dictData);
    dispatch({type: actions.GET_ALL_WORDS, payload: dictData});
  } catch (e) {
    console.error('Error while fetching data');
    dispatch({type: actions.GET_ALL_WORDS, payload: []});
  }
};
