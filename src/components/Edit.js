import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';

function Edit() {
  const [id,setId]=useState('');
  const [empname,setEmpname]=useState('');
  const [age,setAge]=useState('');
  const [designation,setDesignation]=useState('');
  const [salary,setSalary]=useState(0);
useEffect(()=>{
  setId(localStorage.getItem('ID'))
  setEmpname(localStorage.getItem('NAME'))
  setAge(localStorage.getItem('AGE'))
  setDesignation(localStorage.getItem('DESIGNATION'))
  setSalary(localStorage.getItem('SALARY'))
},[])
console.log(id);
console.log(empname);

var index = Employee.map(item=>item.id).indexOf(id)
console.log(index);

let history=useNavigate()
const handleUpdate=(e)=>{
e.preventDefault();  //avoid refreshing
console.log(e); //event
let emp=Employee[index]
console.log(emp); //full details of employee
emp.id=id
emp.empName=empname
emp.age=age
emp.designation=designation
emp.salary=salary
console.log(emp); //updated details of employee

history('/')

}

  return (
    <div>
      <h1 className='text-light text-center m-4'>Update Employee Management System</h1>
    <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
    <Row>
      <Col>
      <img className='ms-5 ps-5' src='https://cdn-icons-png.flaticon.com/512/4974/4974985.png' />
      </Col>
      <Col>
      <Form className='me-5 border p-3'>
      <Form.Group className=" mb-3 " >
        <Form.Label>ID</Form.Label>
        <Form.Control type="id" placeholder="Enter your id"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        required />
      </Form.Group>

      <Form.Group className=" mb-3" >
        <Form.Label>NAME</Form.Label>
        <Form.Control type="name" placeholder="Enter your name"
        value={empname}
        onChange={(e)=>setEmpname(e.target.value)} 
        required />
      
      </Form.Group>


      <Form.Group className=" mb-3" >
        <Form.Label>DESIGNATION</Form.Label>
        <Form.Control type="designation" placeholder="Enter your designation"
        value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required  />
      </Form.Group>

      <Form.Group className=" mb-3" >
        <Form.Label>AGE</Form.Label>
        <Form.Control type="age" placeholder="Enter your age"
        value={age}
        onChange={(e)=>setAge(e.target.value)} 
        required />
      </Form.Group>

      <Form.Group className=" mb-3" >
        <Form.Label>SALARY</Form.Label>
        <Form.Control type="salary" placeholder="Enter your salary"
        value={salary}
        onChange={(e)=>setSalary(e.target.value)} 
        required />
      </Form.Group>
      
      <Button className='btn-success' variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
      </Col>
    </Row>
    </div>
  )
}

export default Edit