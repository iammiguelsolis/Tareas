import { useState, useEffect, useRef } from 'react';

export const ListaTareas = () => {
  const inputRef = useRef();
  const [task, setTask] = useState([]);

  const API_URL = 'https://backend-tan-three.vercel.app/api/notes';

  // Cargar tareas al iniciar
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const tareas = data.map(note => ({
          id: note._id,
          text: note.content
        }));
        setTask(tareas);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valor = inputRef.current.value.trim();
    if (valor === '') return;

    const nuevaTarea = {
      content: valor,
      important: false
    };

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaTarea)
    })
      .then(res => res.json())
      .then(data => {
        setTask([...task, { id: data._id, text: data.content }]);
        inputRef.current.value = '';
      });
  };

  const eliminarTarea = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setTask(task.filter(t => t.id !== id));
    });
  };

  return (
    <div className="bg-gray-200 p-6 min-h-screen grid place-content-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Lista de tareas</h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            ref={inputRef}
            placeholder="Escribe una tarea"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
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
                className="grid grid-cols-[3fr_1fr] items-center gap-2 p-2 border rounded bg-gray-100 scale-95 hover:scale-100 transition"
              >
                <span className="break-words whitespace-pre-wrap overflow-hidden break-all w-full">
                  {tarea.text.length > 60 ? tarea.text.slice(0, 60) + '...' : tarea.text}
                </span>

                <button
                  onClick={() => eliminarTarea(tarea.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 cursor-pointer"
                >
                  Eliminar
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};