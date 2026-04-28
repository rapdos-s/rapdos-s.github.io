import '/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Desktop } from './Desktop';
import { Taskbar } from './Taskbar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Desktop />
    <Taskbar />
  </StrictMode>
)
