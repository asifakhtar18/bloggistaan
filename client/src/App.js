import './App.css';
import { UserContextProvider } from './userContext';
import {Route, Routes} from 'react-router-dom';
import Layout from './layout';
import IndexPage from './pages/indexPage';
import Login from './pages/login';
import Resgister from './pages/register';
import CreatePost from './pages/createPost';
import PostPage from './pages/postPage';
import EditPost from './pages/editPost';

//const baseUrl = import.meta.env.REACT_APP_API_BASE_URL;



function App() {
  //console.log(baseUrl);
  return (
    
       <UserContextProvider>
        <Routes>
          <Route path='/' element={ <Layout /> } >
            <Route index element={ <IndexPage/> } /> 
            <Route path={'/login'} element={ <Login/> } /> 
            <Route path={'/create'} element={<CreatePost />} />
            <Route path={'/register'} element={ <Resgister/> } /> 
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/delete/:id" element={<PostPage />} />
          </Route>

        </Routes>
      </UserContextProvider>

      
  );
}

export default App;


