import { InputHTMLAttributes, useState } from "react";
import { Btn } from '../Button';
import style from './inputWrapper.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useTasks } from "../../context/inputContext";

type InputProps =  InputHTMLAttributes<HTMLInputElement>;


export const InputWrapper = ({...props}:InputProps) =>{
    const [task,setTask] = useState<string>('');
    const {tasks,setTasks} = useTasks();
    const [isInactive,setIsActive] = useState(true);
    
    
    const handleWithInputTask = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.currentTarget.value){
            setIsActive(false);
            setTask(event.currentTarget.value);
        }
        else{
            setIsActive(true);
        }
         
            
    }
    const handleWithCreateTask = () =>{
        return setTasks([...tasks,{id:uuidv4(), task:task}]);
    }
 
    return(
        <div className={style.inputWrapper}>
            <input 
                onChange={handleWithInputTask}
                className={style.inputTask} 
                {...props}
                />
            <Btn 
                onClick={handleWithCreateTask}
                 url="src/assets/plus.svg" 
                 textButton="Criar"
                 disabled={isInactive}
                 style={{backgroundColor: isInactive ? "#1E6F9F"  : "#4EA8DE"}}
                 />
        </div>  
    )
}