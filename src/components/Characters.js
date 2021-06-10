import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPerson } from '../store/actions/action';
import {setpersonid} from '../store/actions/action';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    margin: '10dp',
    padding: '10dp'
  }
}));



function Characters({ p }) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false); //for dialog control
  const [char, setChar] = React.useState(''); 
  const dispatch = useDispatch();



  const [value, setValue] = useState("R2-D2");
  const myperson = useSelector(state => state.personReducer.person);


  const handleChange = (event) => {
    setChar(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("value", myperson)

  useEffect(() => {
    dispatch(loadPerson())
  }, [])

  useEffect(() => {

    //Get id
    let index = _.findIndex(myperson && myperson.results , (e) => {
      return e.name == value;}, 0);

  console.log("index",index);

    dispatch(setpersonid(index))

    alert(_.find(myperson && myperson.results, function(o) { return o.name === value }) && _.find(myperson && myperson.results, function(o) { return o.name === value }).films)


    // dispatch(loadMovies(f));
  }, [value])

  

  return (
    <div>

      <h2>Character</h2>

      <div>
      <Button onClick={handleClickOpen} className={classes.button}>Select Character</Button>

      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
      <DialogContent>
      <form className={classes.container}>
      <FormControl className={classes.formControl}>
        <select
        labelId="demo-dialog-select-label"
                id="demo-dialog-select"
          value={value}
          onChange={(e,i) => {
            setValue(e.currentTarget.value)
          }}
          >
          {myperson &&myperson.results &&
            myperson.results.map((tq,i) => (
              <option >{tq.name}
              
                {/* <Person
                  key={tq._id}
                  id={tq._id}
                  name={tq.name}
                >{tq.name}</Person> */}
              </option>
              
            ))
            
            }
        </select>
        </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
       <p>{value}</p>
      </div>


    </div>

  );
};

export default Characters;