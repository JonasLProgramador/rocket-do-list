import React, { createContext,Dispatch,SetStateAction,useContext,useEffect,useMemo,useState } from "react";





export interface TaskType{
    id:string,
    task:string
}

export interface TasksContextType {
  tasks:TaskType[],
  setTasks:Dispatch<SetStateAction<TaskType[]>>,
  totalTasks:number
  setTotalTasks:Dispatch<SetStateAction<number>>
  doneTasksCount:number
  setDoneTasksCount:Dispatch<SetStateAction<number>>
}  



interface TasksProviderProps {
    children:React.ReactNode
}


const TaskContext = createContext<TasksContextType>({
    tasks:[],
    setTasks:() => {
        console.warn("setTasks foi chamado fora do TasksProvider");
    },
    totalTasks:0,
    setTotalTasks:() =>{
        console.warn("setTotalTasks foi chamado fora do TasksProvider");
    },
    doneTasksCount:0,
    setDoneTasksCount:() =>{
        console.warn("setDoneTasksCount foi chamado fora do TasksProvider");
    }
});



export const TasksProvider = ({children}:TasksProviderProps)=>{
   const [tasks,setTasks] = useState<TaskType[]>([])
   const [totalTasks,setTotalTasks] = useState(tasks.length);
   const [doneTasksCount,setDoneTasksCount] = useState(0)
   useEffect(()=>{
     setTotalTasks(tasks.length)
   },[tasks])
   const contextValue = useMemo(()=>({
    tasks,
    setTasks,
    totalTasks,
    setTotalTasks,
    doneTasksCount,
    setDoneTasksCount
   }),[tasks, totalTasks,doneTasksCount])
   
    return(
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
   )
}


export const useTasks = () =>{
    const context = useContext(TaskContext);
    if(!context){
      throw new Error('useTasks deve ser usado dentro de um TasksProvider')
    }
    return context
}