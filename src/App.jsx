import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTodo from './pages/PageTodo.jsx';
import AddTodo from './pages/AddTodo.jsx';
import EditTodo from './pages/EditTodo.jsx';
import PreviewTodo from './pages/PreviewTodo.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTodo />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="/todo/:id" element={<PreviewTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
