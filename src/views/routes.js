import React from 'react'

import {
  Stream as StreamView,
  Logs as LogsView,
  About as AboutView,
  Faq as FaqView
}
  from 'views';

const routes = [
  {
    path: '/stream',
    renderer: (params = {}) => <StreamView {...params} />,
  },
  {
    path: '/logs',
    renderer: (params = {}) => <LogsView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutView {...params} />,
  },
  {
    path: '/faq',
    renderer: (params = {}) => <FaqView {...params} />,
  }];
