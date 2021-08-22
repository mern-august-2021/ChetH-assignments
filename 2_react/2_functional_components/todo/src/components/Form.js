import React, { useState } from 'react';

const Form = (props) => {
    const { taskList, setTaskList } = props;

    const [task, setTask] = useState("");
    const [done, setDone] = useState(Boolean);
    const [errMsg, setErrMsg] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        if (task.length<2) {
            setErrMsg("Enter a valid task");
        }
        else {
            setTaskList([...taskList, {
                task: task,
                done: false
            }])
            setTask("");
            setDone(false);
            setErrMsg("");
        }
    }

    const deleteTask = (taskToDelete) => {
        setTaskList(taskList.filter((task) => {
            return task.task !== taskToDelete;
        }))
    }

    const handleDone = (taskDone) => {
        taskDone.done = !taskDone.done;
        setTaskList([...taskList]);
    }

    return (
        <div>
        <h3>Add a task</h3>
        {
            errMsg?
            <p>{errMsg}</p>
            :null
        }
        <form onSubmit={ submitHandler }>
            <p>
                <label htmlFor="task">Task: </label>
                <input value={ task } name="task" onChange={ (event)=> {
                    setTask(event.target.value) }} type="text" />
                    <input type="submit" value="Add task" style={{ marginLeft: "20px" }}/>
            </p>
        </form>
        
        <hr/>
        <h3>Task list:</h3>
        {
            taskList.map((task, index) => {
                let taskClass = "";
                task.done?
                    taskClass = "done"
                    :taskClass = "notDone"
                return (
                <div key={ index }>
                    <button style={{ marginRight: "10px" }} onClick={()=>deleteTask(task.task)}>Delete</button>
                    <input value={task.done} name="doesntreallymatter" onChange={(event)=>handleDone(task)} checked={task.done} type="checkbox" />
                    <span className={taskClass}>{task.task}
                    </span>
                </div>
                );
            })
        }
        </div>
    );
}

export default Form;