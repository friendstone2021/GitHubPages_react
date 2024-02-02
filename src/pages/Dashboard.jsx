import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import Datepicker from '../components/Datepicker';
import DashboardCard from '../partials/dashboard/DashboardCard.jsx';

import siteMap from "../sitemap.json";
import {Route, Routes} from "react-router-dom";

function Dashboard() {

  return (
    <div className="grid grid-cols-12 gap-6 clear-both">
      {
        siteMap.menuGroup.map((menu) => (
            menu.pages.map((page, pageIndex) => (
                <DashboardCard key={page.title+pageIndex} title={menu.title+"-"+page.title} link={"/pages/"+page.pageLink} description={page.description}/>
            ))
        ))
      }
    </div>
  );
}

export default Dashboard;