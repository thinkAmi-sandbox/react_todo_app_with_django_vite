import {FormEvent, useState} from "react";
import axios from "axios";
import {NavLink, redirect, useNavigate} from "react-router-dom";

export const TaskForm = () => {
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const addTask = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const apiUrl = 'http://localhost:8000/api/tasks/'
      await axios.post(
        apiUrl,
        {content}
      )

      navigate('/tasks')

    } catch(error) {
      alert('error!!')
    }
  }

  return (
    <>
      <h1>New Task</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          name="task"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button type="submit">登録</button>
      </form>

      <p><NavLink to="/tasks">Back</NavLink></p>
    </>
  )
}