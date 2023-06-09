import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
;
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Route';
import { HelmetProvider } from 'react-helmet-async';
import AuthProveiders from './Providers/AuthProveiders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProveiders>
 <HelmetProvider>
  <div className='max-w-screen-xl mx-auto'>
 <RouterProvider router={router}/>
 </div>
 </HelmetProvider>
 </AuthProveiders>
  </React.StrictMode>,
)
