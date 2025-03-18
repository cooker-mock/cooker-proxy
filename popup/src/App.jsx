/**
 * App Component
 * 
 * @file App.jsx
 * @author Lin Zhao, <249416700>, <lizhao@algomau.ca>
 */
import { useEffect, useState } from 'react';
import { Radio, Typography, Space } from 'antd';
import './App.css';

const { Title } = Typography;

// Define App component
const App = () => {
  // Sets mode state with "mock"
  const [mode, setMode] = useState('mock');

  // Get mode from chrome.storage.sync
  useEffect(() => {
    chrome.storage.sync.get('mode', (data) => {
      if (data.mode) {
        setMode(data.mode);
      }
    });
  }, []); // Empty dependency array, ensures the effect runs only once

  // Handles mode change
  const handleModeChange = (e) => {
    // Get new mode
    const newMode = e.target.value;
    // Update mode state
    setMode(newMode);
    // Save the new mode to chrome.storage.sync
    chrome.storage.sync.set({ mode: newMode });
    // Send message to background script
    chrome.runtime.sendMessage({
      type: 'MODE_CHANGE',
      mode: newMode,
    });
  };

  // Return JSX
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
