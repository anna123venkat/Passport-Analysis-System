import React, { useState } from 'react';
import { Form, DatePicker, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/Query2Styles.css';

const Query2 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);

  const onFinish = async (values) => {
    const { startDate, endDate } = values;

    try {
      const response = await fetch(`/api/query2?startDate=${startDate.format('YYYY-MM-DD')}&endDate=${endDate.format('YYYY-MM-DD')}`);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="query2-container">
      <div className="query2-sub">
        <h2>Query 2: Passport Issue Count by Kendra</h2>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="startDate" label="Start Date">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="endDate" label="End Date">
            <DatePicker style={{ width: '100%' }} />
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
                  <th>Passport Issue Count</th>
                </tr>
              </thead>
              <tbody>
                {queryResult.map((resultItem) => (
                  <tr key={resultItem._id}>
                    <td>{resultItem._id}</td>
                    <td>{resultItem.issueCount}</td>
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

export default Query2;
