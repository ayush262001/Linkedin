import React, {forwardRef} from 'react';
import './posts.css';
import {Avatar} from '@material-ui/core';
import InputOptions from './InputOptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Posts = forwardRef(({key, name, description, message, photourl}, ref) =>
{
    return(
         <div ref={ref} className="posts-container">
               <div className="post_header">
                     <Avatar/>
                     <div className="post_info">
                         <h2>{name}</h2>
                         <p>{description}</p>
                     </div>
               </div>
               <div className="post_body">
                     <p>{message}</p>
                     <img src={photourl}/>
               </div>
               <div className="post_buttons">
                   <InputOptions Icon={ThumbUpIcon} title="like" color="gray" />
                   <InputOptions Icon={ChatIcon} title="chat" color="gray" />
                   <InputOptions Icon={ShareIcon} title="share" color="gray" />
                   <InputOptions Icon={SendIcon} title="send" color="gray" />
               </div>
         </div>
    );
})
export default Posts;