import React from 'react'
import './widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FibreManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const widgets = () => {

    const NewsArticle = (heading, subtitle) => (
        <div className="article">
        <div className="article-left">
            <FibreManualRecordIcon />
        </div>
        <div className="article-right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
    );

    return (
        <div className="widgets">
            <div className="linkedin-widgets">
                <h2>Linkedin News </h2>
                <InfoIcon className="icon-changeit"/>
                
            </div>
            {NewsArticle("Avin Empire is Best", "Readers - 9456")}
            {NewsArticle("DSA is going to be launched", "Readers - 9456")}
            {NewsArticle("Java is Launched", "Readers - 9456")}
            {NewsArticle("Avin Empire is teaching web", "Readers - 9456")}
            

        </div>
    )
}

export default widgets
