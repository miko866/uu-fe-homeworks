import React, {useState} from 'react'

import Button from '@mui/material/Button';

import InfoCardComponent from '../components/InfoCardComponent';
import TimerComponent from '../components/TimerComponent';
import SimpleDialogComponent from '../components/SimpleDialogComponent';


const Counter = () => {
  const [sum, setSum] = useState(0);
  const [open, setOpen] = React.useState(false);

  const [data, setData] = useState([
    { title: 'Domáce potreby', button: true, maxValue: 10 },
    { title: 'Hračky', button: true, maxValue: 5 },
    { title: 'Parfémy', button: true, maxValue: 15 },
    { title: 'Elektro', button: true, maxValue: 8 },
  ]);

  const handleCounter = (value) => {
    setSum((current) => current + 1);
  }

    const handleClickOpen = () => {
      setOpen(true);
    };

    const onHandleClose = () => {
      setOpen(false);
    };

    const onHandleAdd = (title, maxValue) => {
      if (title && maxValue) setData(data => [...data, {title, button: true, maxValue}])
      setOpen(false);
    }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new store
      </Button>

      <InfoCardComponent title={'Celkový počet nakúpujúcich'} sum={sum} button={false} />
      <TimerComponent />

      {data.map((data, index) => (
        <InfoCardComponent
          title={data.title}
          value={data.value}
          button={data.button}
          maxValue={data.maxValue}
          key={`counter-${index}`}
          onIncrease={handleCounter}
        />
      ))}

      <SimpleDialogComponent open={open} handleClose={onHandleClose} handleAdd={onHandleAdd} />
    </>
  );
}

export default Counter;
