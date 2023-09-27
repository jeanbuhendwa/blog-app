import { Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./components/Post/Post";
import Layout from "./components/Routes/Layout";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { UserContextProvider } from "./components/UserContext";
import CreatePost from "./components/Pages/post/createPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regester" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
