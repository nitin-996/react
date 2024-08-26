import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
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

  function handleCancle(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
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


  function handleSelectProject(id){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:id,
      }
    })
  }


  function handleDeleteProject(){
    setProjectState((prevState)=>{

      return {
        ...prevState,
        selectedProjectId:undefined,
        projects : prevState.projects.filter(
          (project)=> project.id !== prevState.selectedProjectId
        )
      }
    })
  }
const selectedProject = ProjectState.projects.find(project => project.id === ProjectState.selectedProjectId)
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;

  if(ProjectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancle} />
  }else if(ProjectState.selectedProjectId === undefined){
    content = <NoProjectSelected  OnStartAddProject={handleStartAddProject} />;

  }
  return (
    
    
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onSelectProject={handleSelectProject} projects={ProjectState.projects} OnStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
