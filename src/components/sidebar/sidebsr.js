import { Avatar } from '@material-ui/core';
import React from 'react';
import './sidebar.css';
import Back from './back.jfif';
import RecentItem from './recentItem';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
function Sidebar()
{

    const user = useSelector(selectUser);
    return(
        <div className="sidebar">
            <div className="sidebar_top">
                <img 
                src={Back}   alt=""></img>
                <Avatar className="sidebar_avatar">{user.email[0]}</Avatar>
                <h3>{user.displayName}</h3>
                <p>{user.email}</p>
                
            </div>
            <div className="sidebar_stats">
                  
                   < div className="sidebar_stat">
                         <p>Who viewed you</p>
                         <p className="sidebar_stat_number">
                             2,546
                         </p>
                   </ div>

                   < div className="sidebar_stat">
                   <p>Views on post</p>
                         <p className="sidebar_stat_number">
                             1,456
                         </p>
                   </ div>

                </div>

                <div className="sidebar_bottom">
                       <p>Recent</p>
                       <RecentItem Topic={"ReactJs"}/>
                       <RecentItem Topic={"SoftwarEngineering"}/>
                       <RecentItem Topic={"WebDeveloper"}/>
                       <RecentItem Topic={"NodeJs"}/>
                       <RecentItem Topic={"Designing"}/>
                </div>
        </div>
    );
}

export default Sidebar;