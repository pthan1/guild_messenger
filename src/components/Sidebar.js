import '../styles/Sidebar.css';

const Sidebar = ({users}) => {

  const userOptions = users.map(user => {return <option value={user.name}>{user.name}</option>})

  return (
    <div className="sidebar">
      <select name="userOptions" id="userOptions">
       <option value="">Login</option> 
            {userOptions}</select><br />

    </div>
  )
}

export default Sidebar;