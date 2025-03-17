import style from './task.module.css';
import { useTasks } from '../../context/inputContext';
import { TaskType } from '../../context/inputContext';


export const TaskList = () =>{     
    const {tasks,setTasks,totalTasks,doneTasksCount,setDoneTasksCount} = useTasks()

    const handleRemoveTask = (id:string) =>{
        if(doneTasksCount >= 1){
            setDoneTasksCount(doneTasksCount - 1)
        }
  
        return setTasks(tasks.filter((task)=> task.id !== id));
    }


    const handleDoneTasks = (event:React.FormEvent<HTMLInputElement>) =>{
       
        if(event.currentTarget.checked){
           setDoneTasksCount(doneTasksCount + 1)
        }
       else{
        
        setDoneTasksCount(doneTasksCount - 1)
       }
    }
    return(
        <ul className={style.list}>
            <header className={style.header}>
            <h4>Tarefas criadas <span>{totalTasks}</span></h4>
            <h4>Concluidas <span>{doneTasksCount} de {totalTasks}</span> </h4>
            </header>
            {tasks.map((task:TaskType)=> (
                <li key={task.id} className={style.listItem}>
                    <input 
                        id={task.id} 
                        onChange={handleDoneTasks}
                        name={task.task} 
                        className={style.checkbox} 
                        type="checkbox"
                     />
                    <label htmlFor={task.id}>{task.task}</label>
                    <button 
                        className={style.delete} 
                        onClick={()=> handleRemoveTask(task.id)}  
                        type='button'></button>
                </li>
            ))}
        </ul>
        
    )
}