import {useEffect, useState} from "react";
import {Task} from "./TaskDetail";
import axios, {AxiosResponse} from "axios";
import {NavLink} from "react-router-dom";

type ApiGetResponse = {
  id: number
  content: string
  updated_at: string
}[]

export const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const fetchTasks = async() => {
    const apiUrl = 'http://localhost:8000/api/tasks/'
    const response: AxiosResponse<ApiGetResponse> = await axios.get(apiUrl)
    setTasks(response.data)
  }

  useEffect(() => {
    (fetchTasks)()
  }, [])

  return (
    <>
      <h1>Tasks</h1>
      <h2>
        <NavLink to="/tasks/registration">New Task</NavLink>
      </h2>

      <h2>Task List</h2>

      {tasks.map((task) => <li key={task.id}><NavLink to={`/tasks/${task.id}`}>{task.content}</NavLink></li>)}
    </>
  )
}
