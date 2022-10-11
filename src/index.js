import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './routes/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);