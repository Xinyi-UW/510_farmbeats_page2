import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// 获取根元素
const container = document.getElementById('root');

// 创建根并渲染 App 组件
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
