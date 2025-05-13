import React, { useState } from 'react'
import { Button, Space, Switch } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = (checked) => {
    setDarkMode(checked)
    if (checked) {
      document.body.style.backgroundColor = '#121212'
      document.body.style.color = '#e0e0e0'
    } else {
      document.body.style.backgroundColor = '#f5f5f5'
      document.body.style.color = '#333333'
    }
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 30px',
      height: '60px',
      backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
      color: darkMode ? '#e0e0e0' : '#333333',
      fontWeight: '600',
      fontSize: '20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      borderBottom: darkMode ? '1px solid #333' : '1px solid #ddd',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ marginRight: '20px', fontSize: '24px', fontWeight: '700', color: 'inherit', textDecoration: 'none' }}>
          Logo
        </Link>
      </div>
      <Space align="center">
        <Link to="/create">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{
            fontWeight: '600',
            backgroundColor: darkMode ? '#3a3a3a' : '#4a90e2',
            color: darkMode ? '#e0e0e0' : '#ffffff',
            borderRadius: '6px',
            padding: '0 18px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = darkMode ? '#505050' : '#357ABD';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = darkMode ? '#3a3a3a' : '#4a90e2';
          }}
        >
          Add
        </Button>
        </Link>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </Space>
    </div>
  )
}

export default Navbar
