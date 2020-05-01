import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import {useStyles} from './styles';
import {firestore} from '../../services/firebase';
import {setWord} from '../../services/actions/wordActions';
import {getAllWords} from '../../services/actions/thunks';

const WordDisplay = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dictWord = useSelector((state) => state.word);
  const {id, word, meaning} = dictWord;

  const [editMode, setEditMode] = useState(false);

  const deleteWord = () => {
    firestore
      .collection('words')
      .doc(id)
      .delete()
      .then(function () {
        console.log('Word successfully deleted!');
      })
      .catch(function (error) {
        console.error('Error removing word: ', error);
      });

    const fetchData = async () => {
      await dispatch(getAllWords);
    };
    dispatch(setWord(null));
    fetchData();
  };

  return word !== null ? (
    <div className={classes.root}>
      <div className={classes.wordOptions}>
        {editMode === false ? (
          <div className={classes.word}>{word}</div>
        ) : (
          <TextField
            className={classes.input}
            name="editWord"
            value={word}
            // onChange={(newValue) => setWord(newValue)}
            label="Edit Word"
          />
        )}
        <IconButton
          className={classes.edit}
          edge="end"
          onClick={() => setEditMode(!editMode)}
        >
          <Edit />
        </IconButton>
        <IconButton className={classes.delete} edge="end" onClick={deleteWord}>
          <Delete />
        </IconButton>
      </div>
      {editMode === false ? (
        <div className={classes.meaning}>{meaning}</div>
      ) : (
        <TextField
          className={classes.input}
          name="editMeaning"
          value={meaning}
          // onChange={(newValue) => setMeaning(newValue)}
          label="Edit Meaning"
        />
      )}
    </div>
  ) : (
    <div className={classes.empty}>Search a word</div>
  );
};

export default WordDisplay;
