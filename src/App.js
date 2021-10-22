import React, {useEffect} from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import Header from './components/header'
import Sidebar from './components/sidebar/sidebsr';
import Feed from './components/FeedFolder/feed';
import { selectUser, login, logoutUser } from './features/userSlice';
import Login from './Login';
import { auth } from './components/FeedFolder/firebase';
import { useDispatch } from 'react-redux';
import Widgets from './components/widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{

      auth.onAuthStateChanged(userAuth =>{
           
            if(userAuth)
               {
                 
                  dispatch(login({
                  displayName: userAuth.displayName,
                  email: userAuth.email,
                  photoUrl: userAuth.photoUrl,
                  uid: userAuth.uid
                  }));

            }
            else{
              //user logged out
              dispatch(logoutUser());
            }
      })

  }, []);

  return (
    <div className="App">
        <Header />

      {user ? (
           <div className="inrow">
           <Sidebar />
           <Feed />
           <Widgets />
           </div>
      ) : (<Login />)}
         
    </div>
  );
}

export default App;
