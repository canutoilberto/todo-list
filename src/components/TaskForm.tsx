import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// CSS
import styles from "./TaskForm.module.css" 

//interface
import { ITask } from '../interfaces/Task'

interface IProps {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm:React.FC<IProps> = ( { btnText, taskList, setTaskList }: IProps) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000)

    const newTask: ITask = {id, title, difficulty};

    setTaskList!([...taskList, newTask])

    setTitle('')
    setDifficulty(0)

    console.log(taskList)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title'){
      setTitle(e.target.value)
    } else{
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Task: </label>
            <input type="text" name="title" placeholder="tarefa: "  onChange={handleChange} value={title}/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade: </label>
            <input type="text" name="difficulty" placeholder="nível de dificuldade" onChange={handleChange} value={difficulty}/>
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm