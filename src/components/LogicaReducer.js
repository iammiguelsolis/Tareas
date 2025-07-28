export const initState = [
  { id: 1, text: 'Comprar pan', done: false },
  { id: 2, text: 'Comprar leche', done: false },
  { id: 3, text: 'Comprar carne', done: false },
  { id: 4, text: 'Comprar verduras', done: true },
];

export const toDOReducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(todo => todo.id !== action.payload);
    case 'completed':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};