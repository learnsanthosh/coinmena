import React, { useState, useEffect, useRef, useMemo } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/components/layout';

import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );

}
export default App;

