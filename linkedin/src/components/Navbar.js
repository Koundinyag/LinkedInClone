import React from 'react';
import {useState} from 'react';
const navlink = {
    textAlign:'center',
    fontSize:12,
    minWidth: 100,
    padding:6,
    marginLeft:10,
    marginRight:10,
}

const selected = {
    textAlign:'center',
    fontSize:12,
    minWidth: 100,
    padding:6,
    marginLeft:10,
    marginRight:10,
    borderBottom: " 1.5px solid black"
}
function Navbar(props) {

    const [text,setText] = useState("");
    return (
        <div style={{
        backgroundColor:'white', 
        position:'fixed', 
        height:52, 
        width:'100%',
        top: 0
        }}>
        <div style={{ 
        display:'flex', 
        justifyContent:'center',
        alignItems:'center',
        maxWidth: 900,
        margin:'auto'
    }}>  
            <div>
            <img src="174857.png" alt="logo" height="35" />
            </div>

            <div style={{flex:1}}>
                <input placeholder="Search" style={{
                    height: 32,
                    width: 200,
                    paddingLeft: 20,
                    border:'0px',
                    borderRadius: 5,
                    backgroundColor: '#EEF3F8',
                     marginLeft:10,
                }}
                    value = {text}
                    onChange = {(e) => setText(e.target.value)}
                />
            </div>

            <div style={props.content === 'Home' ? selected : navlink} onClick={()=> props.setContent('Home')}>
                <img src="Home.png" alt="logo" height="20" />
                <br/>
                Home
            </div>
            <div style={props.content === 'My Network' ? selected : navlink} onClick={()=> props.setContent('My Network')}>
                <img src="Home.png" alt="logo" height="20" />
                <br/>
                My Network
            </div>
            <div style={props.content === 'Jobs' ? selected : navlink} onClick={()=> props.setContent('Jobs')}>
                <img src="Home.png" alt="logo" height="20" />
                <br/>
                Jobs
            </div>
            <div style={props.content === 'Messaging' ? selected : navlink} onClick={()=> props.setContent('Messaging')}>
                <img src="Home.png" alt="logo" height="20" />
                <br/>
                Messaging
            </div>
            <div style={props.content === 'Notifications' ? selected : navlink} onClick={()=> props.setContent('Notifications')}>
                <img src="Home.png" alt="logo" height="20" />
                <br/>
                Notifications
            </div>


        </div>
        </div> 
    );
}

export default Navbar;