import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Index} from "./pages/Index";
import {TaskDetail} from "./pages/TaskDetail";
import {TaskForm} from "./pages/TaskForm";

function App() {
  return (
    <Routes>
      <Route path="tasks">
        <Route path="" element={<Index />} />
        <Route path="registration" element={<TaskForm />} />
        <Route path=":taskId" element={<TaskDetail />} />
      </Route>

      <Route path="*" element={<Navigate to="tasks" replace />} />
    </Routes>
  )
}

export default App
