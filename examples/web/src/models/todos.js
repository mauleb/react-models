export const state = {
  0: { name: 'do stuff', complete: false },
  1: { name: 'do stuff 2', complete: false },
  2: { name: 'do stuff 3', complete: true },
  3: { name: 'do stuff 4', complete: true },
};

export const select = (state, { complete }) => {
  if (complete !== undefined) {
    return Object
      .values(state)
      .filter(t => t.complete === complete);
  }

  return Object.values(state);
};

export const actions = (state, replaceState) => ({
  clearTodos: () => replaceState({}),
  addTodo: (todo) => {
    replaceState({
      ...state,
      [Object.keys(state).length]: todo
    })
  },
  removeTodo: (id) => {
    const { [id]: removed, ...remainder } = state;
    replaceState(remainder);
  }
});