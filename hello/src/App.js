import React, {Component } from 'react';
import './App.css';
// import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
import CounterTwo from './components/CounterTwo';

//import FRParentInput from './components/FRParentInput';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
//import RefsDemo from './components/RefsDemo';
//import ParentComp from './components/ParentComp';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
//import LifecycleA from './components/LifecycleA';
// import { Greet } from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Love from './components/Love'
// import Message from './components/Message'
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import PersonList from './components/PersonList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form';

class App extends Component {
  render()
  {
    return (
      <div className="App">
       {/* <h1 className='error'>Error</h1> */}
       {/* <h1 className= {styles.success}>Success</h1> */}
       {/* <Love name = "Bharath" relation = "hubby" /> */}
       {/* <Welcome name = "Bharath"/>*/}
       {/* <ClassClick/> */}
       {/* <EventBind/> */}
       {/* <ParentComponent/> */}
       {/* <UserGreeting/> */}
       {/* <NameList/> */}
       {/* ?<PersonList/> */}
       {/* <StyleSheet primary = {true}/> */}
       {/* <Inline/> */}
       {/* <Form/> */}
       {/* <LifecycleA/> */}
       {/* <FragmentDemo/> */}
       {/* <Table/> */}
       {/* <PureComp/> */}
       {/* <ParentComp/> */}
       {/* <RefsDemo/> */}
       {/* <FRParentInput/> */}
       {/* <ErrorBoundary><Hero heroName='Joker'/></ErrorBoundary>
       <ErrorBoundary><Hero heroName='Batman'/></ErrorBoundary> */}
       {/* <ClickCounter name = 'Bharath Raj'/> */}
       {/* <HoverCounter/> */}
       {/* <ClickCounterTwo/>
       <HoverCounterTwo/> */}
       <CounterTwo
       render= { (count, incrementCount) => (
       <ClickCounterTwo count = {count} incrementCount = {incrementCount}/>
       )}
       />
       <CounterTwo
       render= { (count, incrementCount) => (
       <HoverCounter count = {count} incrementCount = {incrementCount}/>
       )}
       />
      </div>
       );
  }
}

export default App;

