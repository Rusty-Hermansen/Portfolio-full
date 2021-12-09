import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom'
import React, { Suspense } from 'react'

const Home = React.lazy(() => import('./components/Home'))
const About = React.lazy(()=> import('./components/About'))
const Post = React.lazy(()=> import('./components/Post'))
const SinglePost = React.lazy(()=> import('./components/SinglePost'))

function App() {
  return (

    <Suspense fallback={<div className="centered">
      Loading...
    </div>}>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact></Route>
        <Route component={About} path='/about'></Route>
        <Route component={SinglePost} path='/singlepost/:id'></Route>
        <Route component={Post} path='/posts'></Route>
      </Switch>

    </Suspense>




  );
}

export default App;
