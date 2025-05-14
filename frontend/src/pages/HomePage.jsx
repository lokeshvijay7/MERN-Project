import React, { useEffect } from 'react';
import { Card, Row, Col, Typography, Spin, Alert } from 'antd';
import useproductstore from '../store/product.js';

const { Title } = Typography;

const HomePage = () => {
  const { products, setProducts } = useproductstore();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  if (loading) {
    return <Spin tip="Loading products..." style={{ display: 'block', marginTop: 50 }} />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon style={{ marginTop: 50 }} />;
  }

  return (
    <div style={{ padding: '20px 40px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        Products
      </Title>
      <Row gutter={[16, 16]}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.image} style={{ height: 200, objectFit: 'cover' }} />}
              >
                <Card.Meta title={product.name} description={`$${product.price}`} />
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24} style={{ textAlign: 'center' }}>
            No products found.
          </Col>
        )}
      </Row>
    </div>
  );
};

export default HomePage;
