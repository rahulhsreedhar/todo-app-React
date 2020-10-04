import React, { useState } from 'react';
import AddNewTask from './AddNewTask';
import ShowCompletedTasks from './ShowCompletedTasks';
import ShowTasks from './ShowTasks';
import './styles/ToDoAppStyles.css';
import './styles/TaskLists.css'

const ToDoList = () => {

	const [taskList, setTaskList] = useState([]);
	const [completedList, setCompletedList] = useState([]);

	const handleAddNewTask = (taskData) => {
		setTaskList([...taskList, taskData])

	}
	const handleCompleteTask = (index) => {
		const tempTaskList = JSON.parse(JSON.stringify(taskList));
		const tempCompletedList = JSON.parse(JSON.stringify(completedList));

		tempCompletedList.splice(0, 0, tempTaskList[index])
		tempTaskList.splice(index, 1);
		setTaskList(tempTaskList)
		setCompletedList(tempCompletedList)


	}
	const handleDeleteTask = (index) => {
		let tempTaskList = JSON.parse(JSON.stringify(taskList));
		tempTaskList.splice(index, 1);
		setTaskList(tempTaskList);
	}
	const handleDeleteCompletedTask = (index) => {
		let tempCompletedList = JSON.parse(JSON.stringify(completedList));
		tempCompletedList.splice(index, 1);
		setCompletedList(tempCompletedList);
	}
	const handleRecover = (index) => {
		let tempTaskList = JSON.parse(JSON.stringify(taskList));
		let tempCompletedList = JSON.parse(JSON.stringify(completedList));

		tempTaskList.splice(0, 0, tempCompletedList[index]);
		tempCompletedList.splice(index, 1);
		setTaskList(tempTaskList);
		setCompletedList(tempCompletedList);
	}
	return (
		<div className='main-body'>
			<div className="main-content">
				<h1 className="center-text">	To Do List  </h1>
				<AddNewTask handleAddNewTask={handleAddNewTask} />
				<ShowTasks
					taskList={taskList}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>
				<ShowCompletedTasks
					handleDeleteTask={handleDeleteCompletedTask}
					taskList={completedList}
					handleRecover={handleRecover}
				/>
			</div>
		</div >
	);
}

export default ToDoList;