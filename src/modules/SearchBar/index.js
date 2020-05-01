import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useStyles} from './styles';
import {setWord} from '../../services/actions/wordActions';

const SearchBar = ({data}) => {
  const classes = useStyles();
  // const [value, setValue] = React.useState(null);
  const word = useSelector((state) => state.word);
  const dispatch = useDispatch();
  return (
    <Autocomplete
      className={classes.root}
      options={data}
      getOptionLabel={(option) => option.word}
      value={word}
      onChange={(event, newValue) => {
        // setValue(newValue);
        dispatch(setWord(newValue));
        console.log(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search a word" variant="outlined" />
      )}
    />
  );
};

export default SearchBar;
