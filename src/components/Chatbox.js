import { useState } from "react";

const Chatbox = ({activeConversation, users, currentUser, setActiveConversation}) => {
  const [newMessage, setNewMessage] = useState({});
  const [textInput, setTextInput] = useState('');

  const displayMessages = () => {
    const messages = activeConversation.message_log.map(message => {
      const user = users.find(user => user.id === message.sender).name;
      return (
        <>
        <p>{user} ({message.time_sent}): {message.message}</p>
        </>
      )
    })
    return messages;
  }

  const handleChange = e => {
    e.preventDefault();
    setTextInput(e.target.value);
  }

  const clearInputs = () => {
    setNewMessage({})
    setTextInput('');
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newMessage = {
          sender: currentUser,
          message: textInput,
          time_sent: Date()
        }
console.log('hello')
    fetch(`http://localhost:3001/api/v1/conversations/${currentUser}/${activeConversation.id}`, {
				method: 'PATCH',
				body: JSON.stringify(newMessage),
				headers: {
					'Content-Type': 'application/json'
				}
			})
      .then(response => {
          if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
          }
          return response.json()
        })
        .then(data => {console.log('potatoes')
        setActiveConversation(data)}
        );

        clearInputs();
  }



  return(
    <div className="right-panel">
      {!activeConversation && <p>Choose a Conversation to Start Chatting!</p>}
      {activeConversation && <div className="message-display">
       {displayMessages()}
      <form className="search-form" onSubmit={event => handleSubmit(event)}>
      <input type="text" placeholder="Type your message here..." value={textInput} onChange={e => handleChange(e)} />
      </form>
      </div>}
     
      </div>
  )
}

export default Chatbox;