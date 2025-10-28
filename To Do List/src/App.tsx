import AddTask from './AddTask.tsx';
import TaskList from './Tasklist.tsx';
import { TasksProvider } from './TasksContext.tsx';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>TO DO LIST</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
