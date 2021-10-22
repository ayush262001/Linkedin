import React, {useState} from 'react'
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './components/FeedFolder/firebase';

const Register = () => {

    const dispatch = useDispatch();

    const handleLogin=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth)=>{
              dispatch(login({
                  name: userAuth.user.name,
                  email: userAuth.user.email,
                  photoUrl: userAuth.user.photoURL,
                  uid: userAuth.user.uid
              }));
        }).catch(error => alert(error));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        // dispatch(login({
        //     name: name,
        //     email: email,
        //     photoUrl: photoUrl,
        //     password: password,
        // }));

        if(!name)
        return alert("Enter the full name");

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) =>{
         
            userAuth.user.updateProfile({
                displayName: name,
                email: userAuth.user.email,
                photoURL: photoUrl,
                uid: userAuth.user.uid, 
            }).then(() =>{
                 dispatch(login({
                 name: name,
                 email: email,
                 photoUrl: photoUrl,
                 password: password,
                 }));
            });

        }).catch((error)=> alert(error));
    };


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotourl] = useState("");

    return (
        <div className="login-section">
            <form>
                <h1>Linked<span className="in">in</span></h1>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="photourl" value={photoUrl} onChange={(e) => setPhotourl(e.target.value)} />
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={e => handleLogin(e)}>Login</button>
                <p>Not a member ? <span onClick={(e) => handleSubmit(e)}>Register Now</span></p>
            </form>
        </div>
    )
}

export default Register
