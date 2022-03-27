import React, { useState } from 'react';
import './chat.css';
import { useInterval } from './use-interval';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {  Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';


function ChatControl() {

    const ITEM_HEIGHT = 48;
    const [messages, setMessages] = useState([]);
    const [chats, setChats] = useState([]);
    const [currChat, setCurrentChat] = useState({});
    const [username, setUserName] = useState('');
    const addMessage = title => {
      const newMessage = {
        chatId: currChat.id, // required, must be an existing chat id
        username: username, // required
        text: title // required
      }
      fetch('https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(newMessage),
      }).then((response) => response.json);
    };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    const addChat = title => {
      const chat = {
        name: title
      }
      fetch('https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(chat),
      });
   
    };


    useInterval(
      () => {
        fetch(
          `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats`
        )
          .then((response) => response.json())
          .then((data) => {
            setChats(data.Items);
          });
      },
       1000, // fast polling
     // 60000, // slow polling
    );

    
    useInterval(
  (params) => {
    const chatId = params[0];
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        setMessages(data.Items);
      });
  },
   1000, // fast polling
 // 60000, // slow polling
  currChat.id
);


    return (


        <div className="chat-container">
            <div className="header">{currChat.name}</div>
            <div className="menudropdown">
            <div className="create-chat" >
            <UserNameValue setUserName={setUserName} username={username}/>
            
            <CreateChat addChat={addChat}/>

            </div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Chats
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',

        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
        
      >
        {chats.map((chat) => (
          <MenuItem key={chat.id} selected={chat ===  ''} onClick={() => setCurrentChat(chat)}>
            {chat.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
            <div className="messages">
              <Box className="messageBox" sx={{height: "20vw", overflowY: "scroll", overflowX: "hidden", marginTop: "-10em"}}>
              
                {messages.map((message, index) => (
                    
                    <Message  
                        message={message}
                        index={index}
                        key={index}
                        username={username}
                    />
                    
                ))}
        
              </Box> 
            </div>
            
           
         
            <div className="create-message" >
                <CreateMessage addMessage={addMessage} />
               
            </div>
            
           

        </div>
    )
}

 function CreateChat(props) {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;

        props.addChat(value);
    }

    return (
      <Box  
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
      label="Add Chat"
      id="standard-size-small"
      size="small"
      variant="standard"
      onChange={e => setValue(e.target.value)}
      
      />
       <Button 
        sx={{border: "aqua", borderColor: "aqua"}}
        endIcon={<CheckIcon  sx={{color: "red", marginLeft: "-4em", marginTop: ".75em"}}/>} 
        onClick={handleSubmit}>
  
        </Button>

    </Box>

        
    )

}


function CreateMessage( props ) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        props.addMessage(value);
    }

    return (
    <div className='msgEntry'>
    <Box 
    component="form"
    sx={{
      '& > :not(style)': {marginBottom: 1, marginLeft: 1},

      display: 'flex',
      alignItems: 'flex-end'
    }}>
      <TextField
         sx={{ m: 1, width: '50ch' }}
        hiddenLabel
        id="filled-hidden-label-normal"
        variant="filled"
        type="text"
        className="input"
        value={value}
        placeholder="Enter a message"
        onChange={e => setValue(e.target.value)}
      />
           
      
 
        <Button  variant="contained" endIcon={<SendIcon />} onClick= {handleSubmit}>
            
            Send
          
        </Button>
      </Box>
      </div>
       
    );
    
}

  function UserNameValue(props){
    const handleChange = event => {
      props.setUserName(event.target.value);
    }
    return(
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField
    label="User Name"
    id="standard-size-small"
    size="small"
    variant="standard"
    onChange={handleChange}
    />
 
  </Box>
   

    )
  }


function Message(props) {
    return (
      
        <div
            className={props.message.username === props.username ? "messageUsername" : "message"}
            
        >
            {props.message.text}
         
        </div>

    )
}

export const Chat = () => {
    return <ChatControl />;
}
