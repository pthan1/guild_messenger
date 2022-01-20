
const Chatbox = ({activeConversation, users}) => {

  const displayMessages = () => {
    
    const messages = activeConversation.message_log.map(message => {
      const date = new Date(message.time_sent).toString();
      const user = users.find(user => user.id === message.sender).name;
      return (
        <>
        <p>{user} ({date}): {message.message}</p>
        </>
      )
    })
    return messages;
  }




  return(
    <div className="right-panel">
      <div className="message-display">
      {displayMessages()}
      </div>
      <input type="text"></input>
    </div>
  )
}

export default Chatbox;