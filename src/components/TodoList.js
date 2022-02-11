import React from "react";

const TodoList = ({ todoList, setUpdater }) => {
	const removeItem = (idx) => {
		todoList.splice(idx, 1);
		setUpdater((prevState) => !prevState);
	};

	const checkItem = (idx) => {
		todoList[idx].checked = !todoList[idx].checked;
		setUpdater((prevState) => !prevState);
	};

	const listArr = todoList.map((data, index) => {
		return (
			<div
				className={data.checked ? "todo-element__checked" : "todo-element"}
				key={index}
			>
				<div>
					<input type='checkbox' onChange={() => checkItem(index)} />
					<span className={data.checked ? "todo-data__checked" : ""}>
						{data.item}
					</span>
				</div>
				<button onClick={() => removeItem(index)}>Remove</button>
			</div>
		);
	});

	return (
		<>
			<div className='todo-container'>{listArr}</div>
		</>
	);
};

export default TodoList;
