import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1533986690673-c50390c01cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 350px;
  padding: 20px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Link = styled.a`
  font-size: 12px;
  margin: auto;
  padding: 10px 0px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 12px;
  color: #555;
  border-radius: 4px;
  width: 200px;
  font-size: 20px;
  background-color: transparent;
  outline: none;
  box-shadow: 0 4px 11px 2px rgb(0, 0, 0, 0.08);
  border: none;
  cursor: pointer;
  transition: all 250ms ease;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 250ms ease;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;
const Error = styled.span`
  font-size: 14px;
  width: 100%;
  padding: 10px 0;
  color: red;
  text-align: center;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        {error && (
          <Error>
            Authentication Failed ! <br />
            Check Your Email/Password.
          </Error>
        )}
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            Login
          </Button>

          <Link>Forgot Your Password ?</Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
