import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../../modules/SearchBar';
import WordDisplay from '../../modules/WordDisplay';
import {getAllWords} from '../../services/actions/thunks';

const LandingPage = () => {
  const dispatch = useDispatch();
  const dictionaryWords = useSelector((state) => state.thunk.words);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllWords);
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <SearchBar data={dictionaryWords} />
      <WordDisplay />
    </div>
  );
};

export default LandingPage;
