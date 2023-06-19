import './App.css'
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import ShowTask from './Components/ShowTask';
import { useEffect, useState } from 'react';
import Footer from './Footer';

 function App() {
     
   const [taskList, setTaskList] = useState(
     JSON.parse(localStorage.getItem("taskList"))||[]);
  
  useEffect(()=>{
     localStorage.setItem('taskList',JSON.stringify(taskList))
  },[taskList])
        
   const [task,setTask] = useState({});



  return (
    <div className="app ">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <Footer/>
    </div>
  );

}

export default App