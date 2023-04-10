import { useState, useRef } from 'react';
import Modal from './Modal';
import styles from '@/style/TodoItem.module.scss';

function TodoItem({ todoItem, deleteTodo }) {
	const [todo, setTodo] = useState(todoItem);
	const [editing, setEditing] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const inputRef = useRef(null);

	let viewMode = {};
	let editMode = {};

	if (editing) {
		viewMode.display = 'none';
	} else {
		editMode.display = 'none';
	}

	const handleEditing = () => {
		setEditing(true);
		setShowModal(true);
	};

	const handleUpdateSubmit = () => {
		setTodo({
			...todo,
			title: inputRef.current.value,
		});
		setEditing(false);
		setShowModal(false);
		setShowMessage(true);
	};

	const handleCloseModal = () => {
		setEditing(false);
		setShowModal(false);
	};

	const handleChange = () => {
		setTodo({
			...todo,
			completed: !todo.completed,
		});
	};

	return (
		<>
			<li>
				<div style={viewMode} className={styles.item}>
					<input
						type='checkbox'
						checked={todo.completed}
						onChange={handleChange}
					/>
					<span
						style={todo.completed ? { textDecoration: 'line-through' } : null}
					>
						{todo.title}
					</span>
					<button onClick={handleEditing}>Edit</button>
					<button onClick={() => deleteTodo(todo.id)}>Delete</button>
				</div>
			</li>

			<Modal showModal={showModal} handleCloseModal={handleCloseModal}>
				<>
					<input
						ref={inputRef}
						style={editMode}
						type='text'
						defaultValue={todo.title}
					/>
					<button style={editMode} onClick={handleUpdateSubmit}>
						Update
					</button>
				</>
			</Modal>
		</>
	);
}

export default TodoItem;