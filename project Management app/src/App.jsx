import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
import { Tasks } from "./components/Tasks";
function App() {
  const [ProjectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });



  // const [render, setRender] = useState(true);

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const NewTask = {
        text: text,
        //  project id which this task belong.
        projectId: prevState.selectedProjectId,
        // task id
        id: Math.random(),
      };
     
      
      return {
        ...prevState,
        tasks: [ NewTask,...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {

    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function handleStartAddProject() {
    // here we are starting the addproject
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancle() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }
  const selectedProject = ProjectState.projects.find(
    (project) => project.id === ProjectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks= {ProjectState.tasks}
    />
  );

  if (ProjectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancle} />;
  } else if (ProjectState.selectedProjectId === undefined) {
    content = <NoProjectSelected OnStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onSelectProject={handleSelectProject}
        projects={ProjectState.projects}
        OnStartAddProject={handleStartAddProject}
        selectedProjectId={ProjectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
