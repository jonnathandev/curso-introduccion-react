import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal'

function AppUI() {
const {error,
        loading,
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />

                <TodoList>
                    {error && <p>Error cargando...</p>}
                    {loading && <p>Estamos cargando...</p>}
                    {(!loading && !searchTodos.length ) && <p>Crea tu primer TODO!</p>}
                    {
                        searchTodos.map(todo => (
                            <TodoItem key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)} />
                        ))
                    }
                </TodoList>

                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export { AppUI };