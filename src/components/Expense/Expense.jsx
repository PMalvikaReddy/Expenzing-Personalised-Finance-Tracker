import React from 'react'
import styled from "styled-components";
import ExpenseComponent from '../../modules/home';
import './Expense.css'

const Container = styled.div`
  // background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`;

const header = styled.div`
  background-color: blue;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;

const Expense = () => {
  return (
    <div className='expenseclass'>
       <Container>
      <header>Expense Tracker</header>
        <ExpenseComponent/>
      </Container>
 
    </div>
  )
}

export default Expense
