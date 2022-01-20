import { useEffect, useState } from 'react';
import '../styles/App.css';
import Sidebar from './Sidebar';

function App() {
  const [users, setUsers] = useState([]);

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
      <Sidebar />
    {/* sidebar component */}
   {/* Conditional Render:
        if no user signed in, prompt a message to sign in
        //if a user is signed in, Add a welcome message
        //prompt user to choose a conversation
         */}
    {/* Right side component */}

    </div>
  );
}

export default App;
