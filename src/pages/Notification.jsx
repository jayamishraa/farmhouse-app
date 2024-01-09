import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Bar from '../components/Bar';

function Notification() {
  const [inputVal, setInputVal] = useState('');
  const [notifications, setNotifications] = useState([
    {
      body: 'xyz'
    },
    {
      body: 'abc'
    }
  ]);

  const handlechange = () => {
    const newNotification = {
      body: inputVal
    };
    const newNotificationsArray = [...notifications, newNotification];
    setNotifications(newNotificationsArray);
    setInputVal(''); // Clear input value after adding a notification
  };

  return (
    <>
      <div className='section vertical-align'>
        <TextField 
          id="outlined-basic" 
          label="New Notification..." 
          variant="outlined" 
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          style={{width: '95vw'}}
        />
        <Button onClick={handlechange} style={{height: '60px'}}>ADD</Button>
      </div>
      <div className='section'>
        <div className='section horizontal-align'>
          {notifications.map((note, index) => (
            // <p key={index}>{note.body}</p>
            <Bar text={note.body} />
          ))}

        </div>
      </div>
    </>
  );
}

export default Notification;
