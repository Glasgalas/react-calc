import './App.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';
import DragHandleIcon from '@mui/icons-material/DragHandle';

import { useState, useEffect } from 'react';

function App() {
  const [led, setLed] = useState('');
  const [first, setFirst] = useState(0);
  const [operation, setOperation] = useState('');
  const [second, setSecond] = useState('');

  const handleClick = e => {
    if (!led && e.currentTarget.value === '0') {
      setLed('');
    } else if (!led && e.currentTarget.value === '.' && !led.includes('.')) {
      setLed('0' + e.currentTarget.value);
    } else if (
      led &&
      led !== '-' &&
      e.currentTarget.value === '.' &&
      !led.includes('.')
    ) {
      setLed(led + '.');
    } else if (e.currentTarget.value !== '.' && led.length < 16) {
      setLed(led + e.currentTarget.value);
    }
  };
  const reset = () => {
    setLed('');
    setFirst(0);
    setSecond('');
    setOperation('');
  };
  const invertNum = led => {
    if (led.length !== 0) {
      setLed(led => led * -1);
    }
  };
  const operations = e => {
    setFirst(Number(led));
    setOperation(e.currentTarget.value);
    setLed('');
  };
  const del = () => {
    const res = led.toString().split('');
    res.splice(res.length - 1, 1);
    setLed(res.join(''));
  };
  const result = () => {
    setSecond(Number(led));
  };
  useEffect(() => {
    if (operation === '/') {
      setLed(first / second);
    } else if (operation === '*') {
      setLed(first * second);
    } else if (operation === '-') {
      setLed(first - second);
    } else if (operation === '+') {
      setLed(first + second);
    }
  }, [second]);

  return (
    <div className="container">
      <div className="result">
        <p>{led ? led : first}</p>
      </div>

      <Grid
        className="App"
        container
        style={{ width: '90%', margin: '0 auto' }}
      >
        <Grid item xs={3}>
          <Button className="btn AC" style={{ color: 'red' }} onClick={reset}>
            AC
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            disabled={led && led !== '-' ? false : true}
            onClick={invertNum}
          >
            +/-
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{
              color: 'white',
            }}
            onClick={del}
          >
            <BackspaceIcon />
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn Yellow"
            style={{ color: 'yellow' }}
            onClick={operations}
            value={'/'}
          >
            /
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={7}
          >
            7
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={8}
          >
            8
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={9}
          >
            9
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn Yellow"
            style={{ color: 'yellow' }}
            onClick={operations}
            value={'*'}
          >
            x
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={4}
          >
            4
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={5}
          >
            5
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={6}
          >
            6
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn Yellow"
            style={{ color: 'yellow' }}
            onClick={operations}
            value={'-'}
          >
            -
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={1}
          >
            1
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={2}
          >
            2
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={3}
          >
            3
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn Yellow"
            style={{ color: 'yellow' }}
            onClick={operations}
            value={'+'}
          >
            +
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={0}
          >
            0
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="btn"
            style={{ color: 'white' }}
            onClick={handleClick}
            value={'.'}
          >
            ,
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            style={{ color: 'green' }}
            className="btn Green"
            onClick={result}
          >
            <DragHandleIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
