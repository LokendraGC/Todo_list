import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {

 const handleEdit =(id)=>{
        const  selectedTask = taskList.find(edit=>edit.id===id)
        setTask(selectedTask)
 }

  const handleDelete = (id) => {
    const updatedTasklist = taskList.filter(del => del.id !== id);
    setTaskList(updatedTasklist);
  };

  return (
    <section className="bg-white  mt-14 pt-14 showTask">
      <div className="head flex justify-around">
        <div className="text-2xl space-x-2 max-sm:mt-2">
          <span>Todo</span>
          <span>{taskList.length}</span>
        </div>

        <div className="">
          <button
            onClick={() => setTaskList([])}
            type="submit"
            className="  text-white bg-green hover:bg-blue-700 
         p-3 rounded-md font-semibold w-24 clearAll "
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="taskk flex w-full flex-wrap max-sm: ">
        {taskList.map((task) => (
          <div
            key={task.id}
            className="flex justify-around m-8 border border-gray-300  shadow-md p-7"
          >
            <p>
              <span>{task.name}</span> <br />
              <span className="text-gray-500 text-sm">{task.time}</span>
            </p>

            <div className="flex icon">
              <FaRegEdit
               onClick={()=>handleEdit(task.id)}
                className="fill-green hover:cursor-pointer pl-2 h-7 w-7"
              />
              <MdDelete
                onClick={() => handleDelete(task.id)}
                className="fill-red-600 hover:cursor-pointer pl-2 h-8 w-8"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowTask;
