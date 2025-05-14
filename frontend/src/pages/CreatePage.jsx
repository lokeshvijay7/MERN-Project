import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import  useproductstore  from '../store/product.js';

const { Title } = Typography;

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  });
  
  const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
    const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
    setIsDarkMode(bodyBgColor === 'rgb(18, 18, 18)');
    
    const observer = new MutationObserver(() => {
      const updatedBgColor = window.getComputedStyle(document.body).backgroundColor;
      setIsDarkMode(updatedBgColor === 'rgb(18, 18, 18)');
    });
    
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    
    return () => observer.disconnect();
  }, []);
  
  const handleChange = (name, value) => {
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const { createproduct } = useproductstore();
  
  const handleSubmit = () => {
     const { success, message } =createproduct(newProduct);
     console.log("Success:", success);
     console.log("Message:", message);
  };
  
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '0 20px',
    },
    formContainer: {
      backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',
      borderRadius: '8px',
      boxShadow: isDarkMode 
        ? '0 4px 12px rgba(0, 0, 0, 0.5)' 
        : '0 4px 12px rgba(0, 0, 0, 0.1)',
    }
  };

  return (
    <div style={styles.container}>
      <Card 
        style={styles.formContainer}
        bordered={false}
      >
        <Title level={2} style={{ color: isDarkMode ? '#e0e0e0' : '#333333', marginBottom: '24px', textAlign: 'center' }}>
          Create Product
        </Title>
        
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item 
            label={<span style={{ color: isDarkMode ? '#e0e0e0' : '#333333' }}>Name</span>}
          >
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => handleChange('name', e.target.value)}
              style={{ 
                backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                color: isDarkMode ? '#e0e0e0' : '#333333',
                border: isDarkMode ? '1px solid #444' : '1px solid #d9d9d9'
              }}
            />
          </Form.Item>
          
          <Form.Item 
            label={<span style={{ color: isDarkMode ? '#e0e0e0' : '#333333' }}>Price</span>}
          >
            <Input
              type="number"
              placeholder="Product Price"
              value={newProduct.price}
              onChange={(e) => handleChange('price', e.target.value)}
              style={{ 
                backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                color: isDarkMode ? '#e0e0e0' : '#333333',
                border: isDarkMode ? '1px solid #444' : '1px solid #d9d9d9'
              }}
            />
          </Form.Item>
          
          <Form.Item 
            label={<span style={{ color: isDarkMode ? '#e0e0e0' : '#333333' }}>Image</span>}
          >
            <Input
              placeholder="Product Image"
              value={newProduct.image}
              onChange={(e) => handleChange('image', e.target.value)}
              style={{ 
                backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                color: isDarkMode ? '#e0e0e0' : '#333333',
                border: isDarkMode ? '1px solid #444' : '1px solid #d9d9d9'
              }}
            />
          </Form.Item>
          
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit"
              icon={<SaveOutlined />}
              style={{
                width: '100%',
                height: '40px',
                backgroundColor: isDarkMode ? '#177ddc' : '#4a90e2',
                marginTop: '8px'
              }}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreatePage;