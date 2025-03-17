import { Header } from './components/Header';
import { InputWrapper } from './components/InputWrapper';
import { TaskList } from './components/Task';
import { TasksProvider } from './context/inputContext';
import './global.css';

function App() {


  return (
    <>
      <TasksProvider>
      <Header src='src/assets/Logo.svg'/> 
      <InputWrapper type='text' placeholder='Adicionar mais uma tarefa'/>
       <TaskList />
      </TasksProvider>
    </>
  )
}

export default App
