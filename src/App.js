import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import { firebase } from '@firebase/app';
import Message from './Message';
import db from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {


  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState('');

  useEffect(()=> {
    db.collection('messagess')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message: doc.data()})))
    });
  },[])


  useEffect(() => {

    setUsername(prompt('Please Enter Your Name'));

  }, []);


  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messagess').add({
      text:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');
  }

  return (
    <div className="App">

      <img src="https://ndassistive.org/wp-content/uploads/2020/05/Messenger-logo.png" alt="logo"/>

      <h2>Welocme {username}</h2>

      <form className='app_form'>

        <FormControl className='app_formControl'>

          <InputLabel>Enter a message....</InputLabel>

          <Input className='app_input' placeholder='Enter a message....' value={input} onChange={event => setInput(event.target.value)} />

          <IconButton className='app_IconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>


        </FormControl>

      </form>

    <FlipMove>
      {
        messages.map(({id,message}) => (

          <Message key={id} username={username} message={message} />

        ))
      }
      </FlipMove>


    </div>
  );
}

export default App;
