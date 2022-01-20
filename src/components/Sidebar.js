import '../styles/Sidebar.css';

const Sidebar = ({users, currentUser, setCurrentUser, userConversations, setUserConversations}) => {

  const userOptions = users.map(user => {return <option value={user.id}>{user.name}</option>})

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
      .catch(error => console.log(error))}
  }


  return (
    <div className="sidebar">
      <select name="userOptions" id="userOptions" onChange={handleLogin}>
       <option value="">Login</option> 
            {userOptions}</select><br />
    </div>
  )
}

export default Sidebar;