import React from 'react';
import Stream from './views/stream'
import Logs from './views/cam-logs'
import About from './views/about'
import Faq from './views/faq'

const routes = [
  {
    path: '/stream',
    renderer: (params = {}) => <Stream {...params} />,
  },
  {
    path: '/logs',
    renderer: (params = {}) => <Logs {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <About {...params} />,
  },
  {
    path: '/faq',
    renderer: (params = {}) => <Faq {...params} />,
  }];

export default routes;