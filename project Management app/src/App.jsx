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


    // here we are starting the addproject
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(prevState=>{

      const newProject = {
        ...projectData,
        id:Math.random()
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;

  if(ProjectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />
  }else if(ProjectState.selectedProjectId === undefined){
    content = <NoProjectSelected  OnStartAddProject={handleStartAddProject} />;

  }
  return (
    
    
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar projects={ProjectState.projects} OnStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
