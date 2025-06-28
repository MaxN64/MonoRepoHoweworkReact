import React, { useState } from 'react';

import { Form, Input, Button, Card, Typography } from 'antd';


const { Title } = Typography;


function App() {

  const [formData, setFormData] = useState({ name: '', description: '' });

  const [submittedData, setSubmittedData] = useState(null);


  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };


  const handleSubmit = () => {

    setSubmittedData(formData);

  };


  return (

    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>

      <Title level={2}>Form Ant Design</Title>

      <Form layout="vertical">

        <Form.Item label="Name">

          <Input

            name="name"

            value={formData.name}

            onChange={handleInputChange}

            placeholder="enter name"

          />

        </Form.Item>

        <Form.Item label="Description">

          <Input

            name="description"

            value={formData.description}

            onChange={handleInputChange}

            placeholder="enter description"

          />

        </Form.Item>

        <Form.Item>

          <Button type="primary" onClick={handleSubmit}>

            Send

          </Button>

        </Form.Item>

      </Form>


      {submittedData && (

        <Card style={{ marginTop: '20px' }}>

          <Title level={4}>Sent data:</Title>

          <p><strong>Name:</strong> {submittedData.name}</p>

          <p><strong>Description:</strong> {submittedData.description}</p>

        </Card>

      )}

    </div>

  );

}


export default App;