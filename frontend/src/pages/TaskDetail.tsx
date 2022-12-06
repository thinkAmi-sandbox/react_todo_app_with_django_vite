import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

export type Task = {
  id: number
  content: string
  updated_at: string
}

type ApiGetResponse = {
  id: number
  content: string
  updated_at: string
}

export const TaskDetail = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState<Task>()

  const fetchTasks = async() => {
    const apiUrl = `http://localhost:8000/api/tasks/${taskId}/`
    const response: AxiosResponse<ApiGetResponse> = await axios.get(apiUrl)
    setTask(response.data)
  }

  useEffect(() => {
    (fetchTasks)()
  }, [])

  return (
    <>
      {!!task && (
        <>
          <h1>Task</h1>
          <p>ID: {task.id}</p>
          <p>Updated At: {new Date(task.updated_at).toLocaleString()}</p>
          <p>Content:</p>
          <div>{task.content}</div>
        </>
      )}

      <p><NavLink to="/tasks">Back</NavLink></p>
    </>
  )
}
