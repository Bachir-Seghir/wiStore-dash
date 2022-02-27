import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import AddUser from "./pages/AddUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Login from "./components/Login";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 250px) 1fr;
`;
function App() {
  const admin = useSelector((state) => state.user?.currentUser?.isAdmin);
  return (
    <Router>
      {!admin && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      )}

      {admin && (
        <>
          <Navbar />
          <Container>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home admin={admin} />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </Container>
        </>
      )}
    </Router>
  );
}

export default App;
