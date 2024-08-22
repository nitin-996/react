import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  
  const [ProjectState , setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[]
  });

  const [render, setRender] = useState(true)

  function handleStartAddProject(){

    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  let content;

  if(ProjectState.selectedProjectId === null){
    content = <NewProject/>
  }else if(ProjectState.selectedProjectId === undefined){
    content = <NoProjectSelected OnStartAddProject={handleStartAddProject} />;

  }
  return (
    
    
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar OnStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
