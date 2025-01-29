import React, { useState } from 'react';
import { Form, Input, Radio, message, DatePicker, Modal, Select } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/RegisterStyles.css';

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [amount, setAmount] = useState(3000); // Default amount for 'normal' passport type

  const onFinishHandler = async (values) => {
    try {
      // Send a POST request to your Node.js server to store the passport data
      const res = await axios.post('/api/register', values);

      if (res.data.success) {
        message.success('Passport Registered Successfully!');

        // Show a pop-up message to register another user
        Modal.confirm({
          title: 'Register Another User?',
          onOk() {
            // Clear form fields for new registration
            form.resetFields();
            // Reset amount to 3000 for 'normal' passport type
            setAmount(3000);
          },
          onCancel() {
            // Navigate back to the home page
            navigate('/');
          },
        });
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong while registering the passport.');
    }
  };

  const handlePassportTypeChange = (e) => {
    const passportType = e.target.value;
    const newAmount = passportType === 'normal' ? 3000 : 5000;
    setAmount(newAmount);
    form.setFieldsValue({ amount: newAmount });
  };

  return (
    <div className='register-form-container'>

      <Form layout='vertical' form={form} onFinish={onFinishHandler} className='Register-form'>
      <div className="indian-emblems">
        <img src="/images/emblem.jpg" alt="Indian Emblem 1" />
        <h1 className='register-heading'>Passport Registration</h1>
        <img src="/images/emblem.jpg" alt="Indian Emblem 2" />
      </div>

        <Form.Item label='First Name' name='first_name'  rules={[{ required: true, message: 'Please enter your first name' }]}>
          <Input type='text' />
        </Form.Item>
        <Form.Item label='Last Name' name='last_name' rules={[{ required: true, message: 'Please enter your last name' }]}>
          <Input type='text' />
        </Form.Item>
        <Form.Item label='Father Name' name='father_name' rules={[{ required: true, message: 'Please enter your father name' }]}>
          <Input type='text' />
        </Form.Item>
        <Form.Item label='Email' name='email' rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
          <Input type='email' />
        </Form.Item>
        <Form.Item label='Mobile' name='mobile' rules={[{ required: true, message: 'Please enter your mobile number' }]}>
          <Input type='text' />
        </Form.Item>
        <Form.Item label='Date of Birth' name='dob' rules={[{ required: true, message: 'Please select your date of birth' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label='Age' name='age' rules={[{ required: true, message: 'Please enter your age' }]}>
          <Input type='number' />
        </Form.Item>
        <Form.Item label='Gender' name='gender' rules={[{ required: true, message: 'Please select gender' }]}>
          <Radio.Group>
            <Radio value='Male'>Male</Radio>
            <Radio value='Female'>Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Address' name='address' rules={[{ required: true, message: 'Please enter your address' }]}>
          <Input type='text' />
        </Form.Item>
        <Form.Item label='Passport Number' name='passportNumber' rules={[{ required: true, message: 'Please enter passport number' }]}>
          <Input type='text' />
        </Form.Item>
        <Form.Item label='Issue Date' name='issue_date' rules={[{ required: true, message: 'Please select issue date' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label='Expiry Date' name='expiry_date' rules={[{ required: true, message: 'Please select expiry date' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label='Passport Type' name='passport_type' rules={[{ required: true, message: 'Please select passport type' }]}>
          <Radio.Group onChange={handlePassportTypeChange}>
            <Radio value='normal'>Normal</Radio>
            <Radio value='tatkal'>Tatkal</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Amount' name='amount' rules={[{ required: true, message: 'Please enter the passport amount' }]}>
          <Input type='number' value={amount} readOnly />
        </Form.Item>

        <Form.Item
          label='Issued Kendra'
          name='issued_kendra'
          rules={[{ required: true, message: 'Please select the issued Kendra' }]}
        >
          <Select placeholder='Select an issued Kendra'>
            <Option value='Chennai'>Chennai</Option>
            <Option value='Coimbatore'>Coimbatore</Option>
            <Option value='Madurai'>Madurai</Option>
            <Option value='Trichy'>Trichy</Option>
            <Option value='Tirunelveli'>Tirunelveli</Option>
            <Option value='New Delhi'>New Delhi</Option>
            <Option value='Mumbai'>Mumbai</Option>
            <Option value='Bangalore'>Bangalore</Option>
            <Option value='Hyderabad'>Hyderabad</Option>
            <Option value='Kolkata'>Kolkata</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <button type='submit' className='btn btn-primary'>Register</button>
        </Form.Item>
        <Form.Item className="back-to-home">
        <Link to="/">Back to Home</Link>
      </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
