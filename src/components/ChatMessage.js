import React from "react";

const ChatMessage = ({name,message}) =>{
    return <div className="flex items-center shadow-sm p-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
        />
    <span className="font-bold p-2">{name}</span>
    <span>{message}</span>
    
    </div>
}

export default ChatMessage;