import React, { useState, useEffect } from 'react';
import './feedStyle.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import MovieIcon from '@material-ui/icons/Movie';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import Posts from './posts';
import {db, auth} from './firebase';
import firebase from 'firebase';
import {useSelector} from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed()
{

    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

// tricky code to create a collection of posts in database
  useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map( doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
  }, [] )

    const sendPost = (e) =>
    {
        e.preventDefault();

        db.collection('posts').add(
            {
                name: user.displayName,
                description: user.email || "",
                message: input,
                photourl: "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        )

        setInput("")
    };

    return(
         <div className="feed">
             <div className="feed-input-box">
                 <div className="feed-input">
                     <CreateIcon/>
                     <form>
                         <input type="text" value={input} onChange={e=> setInput(e.target.value)} ></input>
                         <button onClick={sendPost} type="submit">Send</button>
                     </form>
                 </div>
                 <div className="feed_options">
                     <InputOptions title="photos" color="lightblue" Icon={PhotoSizeSelectActualIcon}/>
                     <InputOptions title="Videos" color="lightorange" Icon={MovieIcon} />
                     <InputOptions title="events" color="lightgray" Icon={DateRangeIcon}/>
                     <InputOptions title="write articles" color="lightgreen" Icon={ViewDayIcon}/>
                 </div>
             </div>

            <FlipMove>
            {
                posts.map(({id , data: {name, message, description, photourl} }) => (
                   <Posts
                   key={id}
                   name={name}
                   description={description}
                   message={message}
                   photourl={photourl} />
                ))
            }
            </FlipMove>

              
         </div>
    );
}

export default Feed;