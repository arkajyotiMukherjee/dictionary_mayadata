import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {firestore} from '../../services/firebase';
import withStyles from '@material-ui/core/styles/withStyles';
import {styles} from './styles';

const AddWordPage = (props) => {
  const {classes} = props;
  const [word, setWord] = useState();
  const [meaning, setMeaning] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    firestore
      .collection('words')
      .add({
        word: word,
        meaning: meaning,
      })
      .then(function (docRef) {
        console.log('Word written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding word: ', error);
      });
  };

  return (
    <div className={classes.root}>
      <h2>Add a Word</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          name="word"
          onChange={(event) => setWord(event.target.value)}
          value={word}
          label="Word"
          variant="outlined"
          required
        />
        <TextField
          className={classes.input}
          name="meaning"
          value={meaning}
          onChange={(event) => setMeaning(event.target.value)}
          label="Meaning"
          variant="outlined"
          required
        />

        <div className={classes.button}>
          <Button variant="contained" color="primary" type="submit">
            Add Word
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withStyles(styles)(AddWordPage);
