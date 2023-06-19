import React from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  // task = agadi j xa tei
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      console.log("hsi");
      const date = new Date();
      const updateTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updateTask);
      setTask({})
      console.log("hait");
    } else {
      console.log("hiiiii");
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
     setTask({})
    }
  };

  console.log("HH");
  return (
    <section className="flex items-center justify-center max-sm:pl-7">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          name="task"
          value={task.name||''}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          autoComplete="off"
          maxLength={70}
          className="border pl-2 p-3 rounded-md border-gray-500 w-80"
        />
        <button
          type="submit"
          className="text-white bg-green hover:bg-blue-700 ml-5
         p-3 rounded-md font-semibold w-24 max-sm:ml-28 mt-3"
        >
         {task.id ? 'Update':'Add'}
        </button>
      </form>
    </section>
  );
};

export default AddTask;
