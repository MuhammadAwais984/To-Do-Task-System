import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
    <div className='add-task'>
      <input className='add-task-input'
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      
      <button className='add-btn' onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Add</button>
      </div>
    </>
  );
}

let nextId = 3;
