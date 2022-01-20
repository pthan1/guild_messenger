import '../styles/Sidebar.css';
import Conversations from './Conversations'

const Sidebar = ({users, currentUser, setCurrentUser, userConversations, setUserConversations}) => {

  const userOptions = users.map(user => {return <option value={user.id}>{user.name}</option>})


  const conversations = () => {
    // find the other person and display their name
    console.log(userConversations)
    // const convoPartners = userConversations.map(conversation => {
    //   return conversation.user_ids.filter(id => Number(id) === currentUser);
      // return 
      // <button>{conversation.}</button>
      
    

    // console.log(partnerIds)
  }

  const handleLogin = (e) => {
    if (e.target.value) {
    const userId = Number(e.target.value)
    setCurrentUser(userId);
      //on user select, get all of that user's convos and display the other preson in that convo
      fetch(`http://localhost:3001/api/v1/conversations/${userId}`)
      .then(response => {
        if (!response.ok) {
         throw new Error(`Status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => setUserConversations(data.conversations))
      .catch(error => console.log(error))
    
    conversations(userConversations)}
  }


  return (
    <div className="sidebar">
      <select name="userOptions" id="userOptions" onChange={handleLogin}>
       <option value="">Login</option> 
            {userOptions}</select><br />

      <div className="conversations">
      {currentUser && <Conversations userConversations={userConversations} currentUser={currentUser} users={users}/>}
      </div>
    </div>
  )
}

export default Sidebar;