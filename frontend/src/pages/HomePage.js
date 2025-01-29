import React from 'react';
import { Form, Input, Radio } from 'antd';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/HomePageStyles.css';

const HomePage = () => {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try{
    
    const res = await axios.post('/api/login', values);

      
      if (res.data.isAdmin) {
        navigate('/passport-analysis');
      } else {
        alert(res.data.message);
      }

      if (res.data.isClient) {
        navigate('/register');
      } else {
        alert(res.data.message);
      }
    
  } 
  catch (error) {
    console.error(error);
  }
  };

  return (
    <div className="home-page">
      <div className="indian-emblems-home">
        <img src="/images/emblem.jpg" alt="Indian Emblem 1" />
        <h1 className="heading">Welcome to Passport Analytical System</h1>
        <img src="/images/emblem.jpg" alt="Indian Emblem 2" />
      </div>

      <div className="home-content">
        <p>
          The Passport Analytical System is an advanced and comprehensive platform designed to offer deep insights and intelligence into passport-related data. This powerful system is equipped to analyze and interpret a wealth of information concerning passport issuance, user demographics, and trends. With its user-friendly interface and robust data processing capabilities, it serves as an invaluable tool for government officials, researchers, and anyone interested in passport-related statistics. From monitoring and assessing passport issuance patterns to understanding demographic variations, the Passport Analytical System is the go-to resource for those seeking a comprehensive understanding of passport-related data, fostering informed decision-making and research.
        </p>

        <Form onFinish={onFinishHandler}>
          <Form.Item label='Email' name='email' rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
            <Input type='email' />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input type='password' />
          </Form.Item>
          <Form.Item label='Role' name='role' rules={[{ required: true, message: 'Please select role' }]}>
          <Radio.Group>
            <Radio value='client'>Client</Radio>
            <Radio value='admin'>Admin</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </Form.Item>
        </Form>


      </div>
    </div>
  );
}

export default HomePage;
