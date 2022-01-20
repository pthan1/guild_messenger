
const Chatbox = ({activeConversation}) => {

  const displayMessages = () => {
    
    const messages = activeConversation.message_log.map(message => {
      const date = new Date(message.time_sent).toString();
      return (
        <>
        <p>{message.message}</p>
        <p>{date}</p>
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