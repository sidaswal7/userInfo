import { useState } from "react";
import Adduser from "./components/Users/Adduser";
import Userlist from "./components/Users/UserList";

function App() {
  const [userDetails, setUserDetails] = useState([]);

  const userDetailsHandler = (uName, uAge, uCollege)=>{
    setUserDetails((prevDetails)=>{
      return(
        [...prevDetails,{name:uName,age:uAge,college:uCollege, id:Math.random().toString()}]
      );
    })
  }
  return (
    
    <>
      <Adduser onAddUser={userDetailsHandler}/>
      <Userlist users={userDetails}/>
    </>
  )
}

export default App;
