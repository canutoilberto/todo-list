
type Props = {
    btnText: string
}

const TaskForm = ( {btnText }: Props) => {
  return (
    <form>
        <div>
            <label htmlFor="title">Título: </label>
            <input type="text" name="title" placeholder="tarefa: " />
        </div>
        <div>
            <label htmlFor="difficulty">Dificuldade: </label>
            <input type="text" name="difficulty" placeholder="dificuldade: " />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm