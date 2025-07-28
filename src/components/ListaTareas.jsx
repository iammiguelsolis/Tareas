import { useReducer, useRef } from 'react';
import { initState, toDOReducer } from '../components/LogicaReducer';

export const ListaTareas = () => {
  
  const inputRef = useRef();

  const [task, dispatch] = useReducer(toDOReducer, initState);


  const handleSubmit = (e) => {
    e.preventDefault();
    const valor = inputRef.current.value.trim();
    if (valor === '') return;

    const newTodo = {
      id: new Date().getTime(),
      text: valor,
      done: false
    };

    dispatch({ type: 'add', payload: newTodo });
    inputRef.current.value = '';
  };


  return (
    <div className="bg-gray-200 p-6 min-h-screen grid place-content-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Lista de tareas Actualizado</h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            ref={inputRef}
            placeholder="Escribe una tarea"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Agregar
          </button>
        </form>

        <ul className="space-y-2">
          {task.length === 0 ? (
            <li className="text-gray-600 text-center">No hay tareas</li>
          ) : (
            task.map((tarea) => (
              <li
                key={tarea.id}
                className="grid grid-cols-[2fr_1fr_1fr] items-center gap-2 p-2 border rounded bg-gray-100"
              >
                <span
                  className={`${
                    tarea.done ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {tarea.text}
                </span>
                <button
                  onClick={() =>
                    dispatch({ type: 'remove', payload: tarea.id })
                  }
                  className="bg-red-500 text-white py-1 rounded hover:bg-red-600 cursor-pointer"
                >
                  Eliminar
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: 'completed', payload: tarea.id })
                  }
                  className={`py-1 rounded ${
                    tarea.done
                      ? 'bg-yellow-500 hover:bg-yellow-600'
                      : 'bg-green-500 hover:bg-green-600'
                  } text-white cursor-pointer px-2`}
                >
                  {tarea.done ? 'Deshacer' : 'Completar'}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};