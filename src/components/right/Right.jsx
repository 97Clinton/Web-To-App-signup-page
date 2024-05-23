import { useState } from "react";
import "./right.scss";

function Right() {
    // const pin = "*********";
    const [show, setShow] = useState(false);
    const [psw, showPsw] = useState("");

    // function Listener(e) {
    //     const input = e.target.value;
    //     showPsw(input);

    //     // if(show === "SHOW") {
    //     //     return showPsw("");
    //     // } else {
    //     //     return showPsw(input);
    //     // }

    // }

    return (
        <div className="container">
            <div className="top">
                <div className="left-link">
                    <a href="/"><i class="fa-solid fa-angle-left"></i> Return Home</a>
                </div>
                <div className="right-link">
                    <p>Already a Member? <a href="/">LOG IN NOW</a></p>
                </div>
            </div>
            <div className="middle">
                <div className="heading">
                    <h2>BECOME AN EXCLUSIVE MEMBER</h2>
                    <p>SIGN UP AND JOIN THE PARTNERSHIP</p>
                </div>
                <div className="form">
                    <div className="user">
                        <img src="./icon-user.png" alt="" />
                        <input type="text" placeholder="Johnson Doe" id="user"/>
                    </div>
                    <div className="mail">
                        <img src="./mail.png" alt="" />
                        <input type="email" placeholder="example@email.com" />
                    </div>
                    <div className="psw">
                        <img src="./lock.png" alt="" />
                        <p><input type="text" name="" 
                            onChange={(e) =>(showPsw(e.target.value)) } placeholder="*********" 
                            value={ show ? Array(psw.length+1).join("*") : psw } /> <span 
                            onClick={() => setShow((prev)=> !prev)}
                            > {show ? "HIDE" : "SHOW"}</span>
                        </p>
                        
                    </div>
                    
                    <button type="submit">Become a Member <img src="./arrow-right.png" alt="" /></button>
                </div>
                

            </div>
            <div className="bottom">
                <div className="copy"><p>Copyright 2021 - 2022 5Starcompany. All rights Reserved</p></div>
                <div className="help"><p><img src="./shape.png" alt="" /> Need help?</p></div>
            
            </div>
        </div>
    )
}

export default Right;