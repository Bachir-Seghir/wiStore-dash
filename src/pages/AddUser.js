import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: ${(props) => props.small && "24px"};
  margin-bottom: 10px;
`;
const AddButton = styled.button`
  width: 200px;
  background-color: teal;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 12px;
  border-radius: 6px;
  margin-top: 50px;
  grid-column: 1 / span 2;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 40%;
  & span {
    color: #aaa;
    font-weight: 500;
  }
`;
const Input = styled.input`
  margin-top: 10px;
  padding: 15px 10px;
  border: 1px solid #aaa;
  border-radius: 4px;
`;
const UpdateForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
`;
export const SelectActive = styled.select`
  padding: 15px 6px;
  margin-top: 10px;
  border: 1px solid #aaa;
  border-radius: 4px;
  max-width: 200px;
`;
const GenderInputs = styled.div`
  margin-top: 10px;
  border-radius: 4px;
  padding: 15px 6px;
`;
const LabelRadio = styled.label`
  color: #aaa;
  font-size: 16px;
  margin: 10px;
`;
const AddUser = () => {
  return (
    <Container>
      <Title>Add New User</Title>
      <UpdateForm>
        <FormLabel htmlFor="username">
          <span>Username</span>
          <Input name="username" placeholder="MentoBach" />
        </FormLabel>
        <FormLabel htmlFor="fullName">
          <span>Full Name</span>
          <Input name="fullName" placeholder="Bachir Seghir" />
        </FormLabel>
        <FormLabel htmlFor="email">
          <span>Email</span>
          <Input name="email" placeholder="Bachir@gmail.com" />
        </FormLabel>
        <FormLabel htmlFor="password">
          <span>Password</span>
          <Input name="password" placeholder="password" />
        </FormLabel>
        <FormLabel htmlFor="phone">
          <span>Phone</span>
          <Input name="phone" placeholder="+213 775 859 000" />
        </FormLabel>
        <FormLabel htmlFor="address">
          <span>Address</span>
          <Input
            name="address"
            placeholder="Yasmine 2, Bir el Djir Oran, 31000"
          />
        </FormLabel>
        <FormLabel>
          <span>Gender</span>
          <GenderInputs>
            <input type="radio" name="gender" id="male" value="male" />
            <LabelRadio for="male">Male</LabelRadio>
            <input type="radio" name="gender" id="female" value="female" />
            <LabelRadio for="female">Female</LabelRadio>
          </GenderInputs>
        </FormLabel>
        <FormLabel>
          <span>Active</span>
          <SelectActive name="active" id="active">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </SelectActive>
        </FormLabel>
        <AddButton>Create</AddButton>
      </UpdateForm>
    </Container>
  );
};

export default AddUser;
