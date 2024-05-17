import React from 'react';
import './log.css';
import Background from './skyline.jpg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {
    return (
      <row>
      <Container fluid>
      <Col md={0} ></Col>
      <Col md={20}>
        <form>
        <div class="bg-image"> 
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col shadow p-3 mb-5 bg-body-tertiary rounded fromtable" >
        <div class="mb-3" className='login'>
          <h4 style={{padding: "10px"}}>Wellcome</h4>
          <label for="usernam" class="form-label" style={{padding: "10px"}} >User Name</label>
          <input type="username" class="form-control" id="exampleInputusername" aria-describedby="username" />
          <label for="password" class="form-label" style={{padding: "10px"}} >Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"  />
          <br></br>
          <br></br>
          <Link to="/Transaction">
        <button type="submit" class="btn btn-secondary" >Login</button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        </div>
        </div>
        </div>
        </div>
      </form>
      </Col>
            </Container>
            </row>

    );
};

export default Login;