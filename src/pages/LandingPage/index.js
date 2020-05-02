import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../../modules/SearchBar';
import WordDisplay from '../../modules/WordDisplay';
import {getAllWords} from '../../services/actions/thunks';
import {auth, createUserProfileDocument} from '../../services/firebase';
import {setCurrentUser} from '../../services/actions/userActions';

const LandingPage = () => {
  const dispatch = useDispatch();
  const dictionaryWords = useSelector((state) => state.thunk.words);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllWords);
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });
    return () => {
      unsubcribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <SearchBar data={dictionaryWords} />
      <WordDisplay />
    </div>
  );
};

export default LandingPage;
