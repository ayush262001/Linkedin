import React from 'react';
import './headerOption.css';

function HeaderOption({Avatar, Icon, Title, onClick, userImage, userFirstLetter})
{
    return(
                <div className="headerOption" onClick={onClick}>
                {Icon && <Icon className="headerOptions_icon" />}
                {Avatar && <Avatar src={userImage} className="headerOptions_icon">{userFirstLetter}</Avatar>}
                <h6 className="headerOptions_title">{Title}</h6>
                </div>
    );
}

export default HeaderOption;