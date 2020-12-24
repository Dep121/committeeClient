import React, {useState,useEffect} from 'react';
import classes from './ChatList.module.css';
import profilePic from '../../assets/image_holder.jpg';
import ChatListItem from "../../components/ChatListItem/ChatListItem";

const ChatList = () => {
    const [chatList,setChatList] = useState([]);
    useEffect(()=>{
        setChatList([...new Array(10)]);
    },[])
    return (
        <div className={classes.home}>
            <div className={classes.contact}>
                {
                    chatList.map((_, i)=>(
                        <ChatListItem
                            key={i}
                            profilePic={profilePic}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default ChatList;
