import {Link , Navigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./userContext";


export default function Header() {
  const [redirect , setRedirect] = useState(false);
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch(`/profile`, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

   function logout() {
      fetch('/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    setRedirect(true);
    
  }

  if(redirect){
     <Navigate to={'/'} />
  }

  const username = userInfo?.username;

  return (
    
    <header>
      <Link to="/" className="logo">Bloggistaan</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link onClick={logout}>Logout ({username})</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}