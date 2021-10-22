import React from 'react';
import './header.css';
import HeaderOption from './headerOptions';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { auth } from './FeedFolder/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';



function Header()
{
    const user = useSelector(selectUser);
    const logoutOfApp = ()=>
    {
        auth.signOut();
    }
    return(
        <div className="headerSection">

            {/* this will have two sections left and right */}
            <div className="header_left">
                   <LinkedInIcon style={{ fontSize: 40 }}  />
                   <div className="header_search">
                       <SearchIcon />
                       <input type="text" name="search"></input>
                   </div>
            </div>

            <div className="header_right">
                      <HeaderOption Icon={HomeIcon} Title="Home" />
                      <HeaderOption Icon={GroupIcon} Title="My Networks"/>
                      <HeaderOption Icon={BusinessCenterIcon} Title="Jobs"/>
                      <HeaderOption Icon={ChatIcon} Title="Messaging"/>
                      <HeaderOption Icon={NotificationsIcon} Title="Notification"/>
                      <HeaderOption Avatar={AccountCircleIcon} Title="User" userFirstLetter={user? user.email : ""} onClick={logoutOfApp}/>
            </div>
        </div>
    );
}
export default Header;