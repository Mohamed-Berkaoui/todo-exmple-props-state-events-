# Todo App Lab (No Code)

## Goal

Build an intermediate Todo app using React functional components and hooks. You will practice state, props, and event handling while keeping a clean component.


### 1) Set up the components

- Create the three components: TodoForm, TodoList, TodoItem.
- Give each component a single responsibility.
- Decide what props each component needs.

### 2) Lift state to App

- App should own the todos array and the active filter.
- Define the todo shape: id, text, completed.
- Choose an initial state that helps you test quickly.

### 3) Add handlers in App

Create these handler functions in App:

- addTodo
- deleteTodo
- toggleTodo
- setFilter

Think about:

- How to keep ids unique
- How to avoid mutating state directly

### 4) Wire props to children

- Pass addTodo to TodoForm.
- Pass deleteTodo and toggleTodo to TodoList and then TodoItem.
- Pass filter state and setFilter to the filter UI in App.

### 5) Implement controlled input in TodoForm

- Use local state for the input value.
- On submit, validate the text and call onAdd.
- Clear the input only after a successful add.

### 6) Render the list

- Use map to render TodoItem in TodoList.
- Add a key for each item.
- Show empty-state text when the list is empty.

### 7) Implement toggle and delete

- Toggle should flip completed for the matching id.
- Delete should remove the matching item from state.

### 8) Implement filtering

- Use the active filter to compute a filtered list.
- Use filter to show all, done, or pending.
- Render filtered todos in the list.

### 9) Show remaining count

- Count todos where completed is false.
- Display the number in the UI.

## Checkpoints

- Can you add and clear a todo?
- Does toggling affect the completed state?
- Do filters update the visible list?
- Does the remaining count update correctly?

## Stretch ideas (optional)

- Persist todos in localStorage.
- Add edit functionality for todo text.
- Add keyboard accessibility improvements.

## Constraints

- Use React hooks (useState).
- Use props to pass functions and data.
- Use map and filter (no manual loops).
- Keep components focused on one job.
