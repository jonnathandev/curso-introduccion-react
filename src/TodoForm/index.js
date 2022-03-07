import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm(){

    const {addTodo, setOpenModal} = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>

            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Ingrese la descripción de la tarea.'
            ></textarea>
            <div className='TodoForm--buttonContainer'>
                <button onClick={onCancel} type='button' className='TodoForm--button TodoForm--button--cancel'>Cancelar</button>
                <button type='submit' className='TodoForm--button TodoForm--button--add'>Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm }