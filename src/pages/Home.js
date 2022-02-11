import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";

var todoList = [];

const Home = () => {
	const [todoItem, setTodoItem] = useState("");
	const [updater, setUpdater] = useState(true);

	const addItem = (e) => {
		e.preventDefault();
		todoList.push({ item: todoItem, checked: false });
		console.log(todoList);
		setTodoItem("");
	};

	useEffect(() => {}, [todoItem, updater]);

	return (
		<>
			<div className='home-main'>
				<div className='home-content'>
					<div className='home-content__header'>
						<h1>React To-Do List</h1>
						<form onSubmit={addItem}>
							<input
								placeholder='Enter to-do item'
								value={todoItem}
								onChange={(e) => setTodoItem(e.target.value)}
							/>
							<button type='submit'>+</button>
						</form>
					</div>
					{todoList.length === 0 ? (
						<div className='todo-container'>
							<div className='todo-element'>
								<div>
									<span>Add items above to create your to-do list!</span>
								</div>
							</div>
						</div>
					) : (
						<TodoList todoList={todoList} setUpdater={setUpdater} />
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
