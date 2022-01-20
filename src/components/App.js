import { useEffect, useState } from 'react';
import '../styles/App.css';
import Sidebar from './Sidebar';
import Chatbox from './Chatbox';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [userConversations, setUserConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/users')
    .then(response => {
       if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
      }
    return response.json()
  })
  .then(data => setUsers(data.users))
  .catch(error => console.log(error))
    }, [])
  

  return (
    <div className="App">
      <Sidebar users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} userConversations={userConversations} setUserConversations={setUserConversations} setActiveConversation={setActiveConversation} />
      {!currentUser && <div>Choose a User to Log In </div>}
      {activeConversation && <Chatbox users={users} currentUser={currentUser} activeConversation={activeConversation} setActiveConversation={setActiveConversation} />}

    {/* Right side component */}

    </div>
  );
}

export default App;
