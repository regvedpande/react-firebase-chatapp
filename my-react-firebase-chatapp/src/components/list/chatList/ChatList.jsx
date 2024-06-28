import { useState } from "react";
import "./chatList.css";

const ChatList = () => {

    const[addMode, setAddMode] = useState(false);
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img
                src= {addMode ? "./minus.png" : "./plus.png"}
                alt=""
                className="add"
                onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
<div className="item">
    <img src="./avatar.png" alt="" />
    <div className="texts">
        <span>Ayushman Pande</span>
        <h5>Wassup! How are You</h5>
    </div>
</div>

<div className="item">
    <img src="./avatar.png" alt="" />
    <div className="texts">
        <span>Delia Russ</span>
        <h5>I Heard you like playing Video Games</h5>
    </div>
</div>

<div className="item">
    <img src="./avatar.png" alt="" />
    <div className="texts">
        <span>Sagar Vitole</span>
        <h5>Bro! Here is the latest movie Recommendation</h5>
    </div>
</div>

<div className="item">
    <img src="./avatar.png" alt="" />
    <div className="texts">
        <span>Sarvesh Sharma</span>
        <h5>React is Cool</h5>
    </div>
</div>

<div className="item">
    <img src="./avatar.png" alt="" />
    <div className="texts">
        <span>Jitu Vitole</span>
        <h5>Did you get the Job yet</h5>
    </div>
</div>

<div className="item">
    <img src="./avatar.png" alt="" />
    <div className="texts">
        <span>Ananya Singh</span>
        <h5>We can catch up later today!</h5>
    </div>
</div>

<div className="item">
    <img src="./avatar.png" alt="" />
    <div className="texts">
        <span>Rohan Mehta</span>
        <h5>Did you finish that project?</h5>
    </div>
</div>

<div className="item">
    <img src="./avatar.png" alt="" />
    <div className="texts">
        <span>Priya Kapoor</span>
        <h5>Check out this new place I found!</h5>
    </div>
</div>

<div className="item">
    <img src="./avatar.png" alt="" />
    <div className="texts">
        <span>Vikas Reddy</span>
        <h5>Are you coming to the party tonight?</h5>
    </div>
</div>


        </div>
    );
};

export default ChatList;
