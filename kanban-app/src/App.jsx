import React from 'react';
import List from './List';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from './actions';

function App() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const tasks = useSelector((state) => state.tasks);

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, listId) => {
    const id = event.dataTransfer.getData('id');
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.listId = listId;
      }
      return task;
    });

    dispatch(setTasks(newTasks));
  };

  return (
    <div className="app">
      <header className="masthead">
        <div className="logo">
          <h1>
            <i className="fab fa-trello logo-icon" aria-hidden="true"></i>Kanban
          </h1>
        </div>
      </header>

      <section className="lists-container">
        {lists.map((item, index) => {
          return (
            <div
              onDragOver={(event) => onDragOver(event)}
              onDrop={(event) => onDrop(event, item.id)}
            >
              <List
                key={index}
                listTitle={item.name}
                listItems={tasks.filter((task) => task.listId === item.id)}
              />
            </div>
          );
        })}
        <button className="add-list-btn btn">Add a list</button>
      </section>
    </div>
  );
}

export default App;
