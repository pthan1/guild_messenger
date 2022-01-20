import '../styles/App.css';
import Sidebar from './Sidebar';

function App() {

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
