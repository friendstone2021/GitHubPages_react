import React, {Suspense, useEffect, useState} from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

// Import pages
import Dashboard from './pages/Dashboard';
import Sidebar from "./partials/Sidebar.jsx";
import Header from "./partials/Header.jsx";
import WelcomeBanner from "./partials/dashboard/WelcomeBanner.jsx";
import Datepicker from "./components/Datepicker.jsx";
import Content from "./pages/Content.jsx";

function App() {

  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
      <div className="flex h-screen overflow-hidden">

        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

              {/* Welcome banner */}
              <WelcomeBanner />

              {/* Dashboard actions */}
              <div className="sm:flex sm:justify-between sm:items-center mb-8 float-right">

                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                  {/* Datepicker built with flatpickr */}
                  <Datepicker align='right'/>
                </div>

              </div>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/pages/:pageName" element={<Content />}/>
              </Routes>
            </div>
          </main>

        </div>
      </div>
  );
}

export default App;
