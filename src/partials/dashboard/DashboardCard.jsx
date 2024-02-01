import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard({title, link, description}) {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 align-middle">{title}</h2>

          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to={link}>
                본문보기
              </Link>
            </li>
          </EditMenu>
        </header>
        {/*<h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">카드 제목</h2>*/}
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1 clear-both">설명</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{description}</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[256px] xl:max-h-[256px]">
      </div>
    </div>
  );
}

export default DashboardCard;
