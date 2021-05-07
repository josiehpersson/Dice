import React from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  makeStyles
} from '@material-ui/core';
import { GET_NUMBER_ROLLS, GET_ROLL_PERCENTAGE } from '../utils/diceFunctions';

const useStyles = makeStyles({
    container: {
        backgroundColor: props => props.color,
        width: 800,
    },
    text: {
        color: props => props.invertedColor,
    }

})
const OutcomeTable = (props) => {
    const classes = useStyles(props);
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.text}>Outcome</TableCell>
            <TableCell className={classes.text}>%</TableCell>
            <TableCell className={classes.text}>{props.outcomes.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.text}>1</TableCell>
            <TableCell className={classes.text}>{GET_ROLL_PERCENTAGE(props.outcomes, 1)}</TableCell>
            <TableCell className={classes.text}>{GET_NUMBER_ROLLS(props.outcomes, 1)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.text}>2</TableCell>
            <TableCell className={classes.text}>{GET_ROLL_PERCENTAGE(props.outcomes, 2)}</TableCell>
            <TableCell className={classes.text}>{GET_NUMBER_ROLLS(props.outcomes, 2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.text}>3</TableCell>
            <TableCell className={classes.text}>{GET_ROLL_PERCENTAGE(props.outcomes, 3)}</TableCell>
            <TableCell className={classes.text}>{GET_NUMBER_ROLLS(props.outcomes, 3)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.text}>4</TableCell>
            <TableCell className={classes.text}>{GET_ROLL_PERCENTAGE(props.outcomes, 4)}</TableCell>
            <TableCell className={classes.text}>{GET_NUMBER_ROLLS(props.outcomes, 4)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.text}>5</TableCell>
            <TableCell className={classes.text}>{GET_ROLL_PERCENTAGE(props.outcomes, 5)}</TableCell>
            <TableCell className={classes.text}>{GET_NUMBER_ROLLS(props.outcomes, 5)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.text}>6</TableCell>
            <TableCell className={classes.text}>{GET_ROLL_PERCENTAGE(props.outcomes, 6)}</TableCell>
            <TableCell className={classes.text}>{GET_NUMBER_ROLLS(props.outcomes, 6)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OutcomeTable;
