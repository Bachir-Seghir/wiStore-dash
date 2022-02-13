import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import AddUser from "./pages/AddUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 250px) 1fr;
`;
function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
