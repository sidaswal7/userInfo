import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./Adduser.module.css"
import Button from "../UI/Button";

const Adduser= (props)=>{

    const [user, setUser] = useState("");
    const [age, setAge] = useState("");
    const [college, setCollege] = useState("");

    const userHandler = (event)=>{
        setUser(event.target.value);
    }
    const ageHandler = (event)=>{
        setAge(event.target.value);
    }
    const collegeHandler = (event)=>{
        setCollege(event.target.value);
    }
    const addUserHandler = (event)=>{
        event.preventDefault();
        if(user.trim().length === 0 || age.trim().length === 0 || college.trim().length === 0){
            return;
        }
        if(+age < 1){
            return "Age should be greater than 0"
        }
        props.onAddUser(user,age,college);
        setAge("");
        setUser("");
        setCollege("");

    }
    return(
        <Card className = {classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Add Username: </label>
                <input type="text" id="username" value={user} placeholder="Enter the username" onChange={userHandler}/>
                <label htmlFor="age">Age (Years): </label>
                <input type="number" id="age" value={age} placeholder="Enter the age" onChange={ageHandler}/>
                <label htmlFor="college">Add College name: </label>
                <input type="text" id="college" value={college} placeholder="Enter the college name" onChange={collegeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        
    )
}

export default Adduser;