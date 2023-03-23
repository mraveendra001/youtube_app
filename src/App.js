import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./util/store";
 import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import WatchShorts from "./components/WatchShorts";
import ShortsContainer from "./components/ShortsContainer";
import Demo from "./components/Demo";
//import ShortsContainer from "./components/ShortsContainer";

const appRouter = createBrowserRouter([
  {
   path :'/',
  element: <Body/>,
  children:[
  {
    path : '/',
     element : <MainContainer />
   
     } , 
     {
        path : 'watch',
      element : <WatchPage /> 
   
 },
 {
  path : 'shorts',
element : <ShortsContainer/> 

},
{
  path : 'demo',
element : <Demo/> 

}
 
]
  }
 ]);

function App() {
  return (
  <Provider store={store}>
    <div>
    <Head/>
      {/* <Body/>   now instaed of body give router provider  */}
    <RouterProvider router={appRouter}/>
    </div>
  
  
    {/**
 head
 body
 Sidebar  Navbar
 mednu items
 main ontainer
 button list
 videoContainer
 VideoCard 


  */}


 </Provider>
 
    );
}

export default App;
