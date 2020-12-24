import React from 'react';
import classes from './ChatListItem.module.css';

const ChatListItem = (props) => {
    return (
        <div className={classes.listItem}>
            <div className={classes.image}>
                <img src={props.profilePic} alt={'profile'} />
            </div>
            <div className={classes.mid}>
                <h4>Deepak</h4>
                <span>online</span>
            </div>
            <span className={classes.time}>time</span>
        </div>
    );
}

export default ChatListItem;
