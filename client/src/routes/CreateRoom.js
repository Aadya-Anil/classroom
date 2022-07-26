import React from "react";
import { v1 as uuid } from "uuid";
import { useState } from "react";
import '../routes/CreateRoom.css';
import GoogleButton from 'react-google-button'
import {useHistory} from 'react-router-dom';


const CreateRoom = (props) => {
    const [Pass,setPass] = useState("")
    const history = useHistory();

    function create() {
        console.log(Pass)
        if(Pass=='pass')
        {const id = uuid();
            props.history.push(`/room/${id}`);
        }
        else
        {
            alert("incorrect password")
        }
        
    }

    return (
        <>
        <div className="contain">
        <h1>Classroom 2.0</h1>
        
        <input type="text" placeholder="Username" className="inputbox"></input>
        <input type="password" placeholder="Password" className="inputbox" onChange={e=>{setPass(e.target.value)}}></input>
        <button onClick={create} className="submitbutton">Create room</button>
        <GoogleButton type="dark" className="submitbutton" onClick={()=>{window.location.replace('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin');}}></GoogleButton>
        </div>
        </>
    );
};

export default CreateRoom;
