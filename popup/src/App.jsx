import React, { useEffect, useState } from 'react';
import { Radio, Typography, Space } from 'antd';
import './App.css';

const { Title } = Typography;

const App = () => {
  const [mode, setMode] = useState('mock');

  useEffect(() => {
    chrome.storage.sync.get('mode', (data) => {
      if (data.mode) {
        setMode(data.mode);
      }
    });
  }, []);

  const handleModeChange = (e) => {
    const newMode = e.target.value;
    setMode(newMode);
    chrome.storage.sync.set({ mode: newMode });
    chrome.runtime.sendMessage({ type: 'MODE_CHANGE', mode: newMode });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Title level={4} style={{ margin: 0 }}>
        Cooker Proxy
      </Title>
      <Space direction="vertical" style={{ marginTop: '10px' }}>
        <Radio.Group onChange={handleModeChange} value={mode}>
          <Radio value="mock">Mock Mode</Radio>
          <Radio value="real">Real Server Mode</Radio>
        </Radio.Group>
      </Space>
    </div>
  );
};

export default App;
