
interface IProps {
    btnText: string;
}

const TaskForm:React.FC<IProps> = ( { btnText }: IProps) => {
  return (
    <form>
        <div>
            <label htmlFor="title">Título: </label>
            <input type="text" name="title" placeholder="tarefa: " />
        </div>
        <div>
            <label htmlFor="difficulty">Dificuldade: </label>
            <input type="text" name="difficulty" placeholder="nível de dificuldade" />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm