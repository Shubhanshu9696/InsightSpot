import './App.css';
import { Header } from './components/Header';
import { Blog } from './components/Blog';
import { Pagination } from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
// import { AppContextProvider } from './context/AppContext';

function App() {
  const {fetchBlogPost} = useContext(AppContext);

  useEffect(()=>{fetchBlogPost()} 
  , []);
  
  return (
    <div className="App h-screen">
      <Header/>
      <div className='main-container'>
        <Blog/> 
        <Pagination/>
      </div>
    </div>
  );
}

export default App;
