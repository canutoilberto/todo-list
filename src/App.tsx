import { useState } from 'react';

//components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// CSS
import styles from './App.module.css'

//interface
import { ITask } from './interfaces/Task'


function App() {

  const [taskList, setTasklist] = useState<ITask[]>([])

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <div>
          <h2>O que você deseja agendar?</h2>
          <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTasklist} />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList />
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
