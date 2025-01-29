import React, { useState } from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/Query4Styles.css';

const Query4 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);


  const handleQuerySubmit = async (values) => {
    console.log('Received values:', values);

    try {
      const response = await fetch(`/api/query4?startDate=${values.startDate.format('YYYY-MM-DD')}&endDate=${values.endDate.format('YYYY-MM-DD')}&k=${values.k}`);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="query4-container">
        <div className="query4-sub">
      <h2>Query 4: Top Kendras for Tatkal Passports</h2>
      <Form form={form} onFinish={handleQuerySubmit} initialValues={{ k: 5 }}>
        <Form.Item name="startDate" label="Enter the Start Date" >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="endDate" label="Enter the End Date" >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="k" label="Enter the number of top Kendras (K)">
          <Input type="number" style={{ width: '100%' }} />
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
                <th>Kendra</th>
                <th>Tatkal Passport Count</th>
              </tr>
            </thead>
            <tbody>
              {queryResult.map((resultItem, index) => (
                <tr key={index}>
                  <td>{resultItem._id}</td>
                  <td>{resultItem.count}</td>
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

export default Query4;
