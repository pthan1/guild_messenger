
const Chatbox = ({activeConversation}) => {


  const messages = activeConversation.message_log.map(message => {
    return (
      <>
      <p>{message.message}</p>
      <p>{message.time_sent}</p>
      </>
    )
  })


  return(
    <div className="right-panel">
      <div className="message-display">
      {messages}
      </div>
      <input type="text"></input>
    </div>
  )
}

export default Chatbox;