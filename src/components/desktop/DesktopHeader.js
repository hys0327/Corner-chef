// DesktopHeader.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DesktopHeader = () => {
  const location = useLocation();

  // console.log('pathname', location.pathname);
  return (
    <div className='header-bg'>
      <header className='desktop-header'>
        <h1>
          <Link to='/' aria-label='홈페이지로 이동'>
            <span className='img_logo' aria-hidden='true'></span>
          </Link>
        </h1>
        <nav aria-label='주요 화면 네비게이션'>
          <ul>
            <li>
              <Link
                to='/'
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                to='/cook'
                aria-current={
                  location.pathname === '/cook' ? 'page' : undefined
                }
              >
                요리
              </Link>
            </li>
            <li>
              <Link
                to='/rank'
                aria-current={
                  location.pathname === '/rank' ? 'page' : undefined
                }
              >
                랭킹
              </Link>
            </li>
            <li>
              <Link
                to='/statistics'
                aria-current={
                  location.pathname === '/statistics' ? 'page' : undefined
                }
              >
                통계
              </Link>
            </li>
          </ul>
        </nav>
        <div className='button-wrap'>
          <button aria-label='버튼'>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <button aria-label='버튼'>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <button aria-label='버튼'>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <button aria-label='버튼'>
            <span className='icon' aria-hidden='true'></span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default DesktopHeader;
