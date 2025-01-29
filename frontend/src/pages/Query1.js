import React, { useState } from 'react';
import { Form, Select, Button, DatePicker, } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/Query1Styles.css';

const { Option } = Select;

const Query1 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);

  const onFinish = async (values) => {

    const apiUrl = `/api/query1?startDate=${values.startDate.format('YYYY-MM-DD')}&endDate=${values.endDate.format(
      'YYYY-MM-DD'
    )}&kendra=${values.kendra}&category=${values.category}&gender=${values.gender}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <div className="query1-container">
      <div className="query1-sub">
        <h2>Query 1: Passport Numbers and Names</h2>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="startDate" label="Enter the Start Date"  >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="endDate" label="Enter the End Date"  >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="kendra" label="Select Kendra Name" >
            <Select style={{ width: '100%' }}>
              <Option value="Chennai">Chennai</Option>
              <Option value="Madurai">Madurai</Option>
              <Option value="Coimbatore">Coimbatore</Option>
              <Option value="Trichy">Trichy</Option>
              <Option value="Tirunelveli">Tirunelveli</Option>
              <Option value="New Delhi">New Delhi</Option>
              <Option value="Mumbai">Mumbai</Option>
              <Option value="Hyderabad">Hyderabad</Option>
              <Option value="Bengaluru">Bengaluru</Option>
              <Option value="Kolkata">Kolkata</Option>
            </Select>
          </Form.Item>
          <Form.Item name="category" label="Select Category" >
            <Select style={{ width: '100%' }}>
              <Option value="adult">Adult</Option>
              <Option value="kid">Kid</Option>
            </Select>
          </Form.Item>
          <Form.Item name="gender" label="Select Gender" >
            <Select style={{ width: '100%' }}>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/passport-analysis">Select a query</Link>
          </Form.Item>
        </Form>
        {queryResult.length > 0 && (
          <div className="query-result">
            <h3>Query Result:</h3>
            <table>
              <thead>
                <tr>
                  <th>Passport Number</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {queryResult.map((resultItem, index) => (
                  <tr key={index}>
                    <td>{resultItem.passportNumber}</td>
                    <td>
                      {resultItem.first_name} {resultItem.last_name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Query1;
