import React, { useState } from 'react';
import '../css/layout.css';
import $ from 'jquery';

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };
 


  return (
    <header className="header" id='headerArea'>
        <div className='headerInner'>
          <h1 className='logo'>
            <a href='/' className='logo-img'>
              <span className='sr-only'>주식회사 더함아이덴티티</span>
            </a>
          </h1>
          <div className='header-right-wrap'>
            <ul className="btn-list">
              <li className="btn-item dropdownmenu">
                <a href='#' className='btn-login-pc'>상담문의</a>
              </li>
            </ul>
            <div className={`btnPcNav menu-btn-wrap ${isToggled ? 'active' : ''}`} onClick={toggleMenu}>
              <div className='menu-btn'>
                <span className='line'></span>
              </div>
            </div>
          </div>
          {isToggled && (
            <div className="open-nav-wrap" id="gnb">
              <div className="inner-wrap">
                <ul className="menu-list-wrap dropdownmenu">
                  <li className="menu-list">
                    <a href="#">ABOUT</a>
                  </li>
                  <li className="menu-list">
                    <a href="#">BUSINESS</a>
                  </li>
                  <li className="menu-list">
                    <a href="#">PROJECT</a>
                  </li>
                  <li className="menu-list">
                    <a href="#">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
    
    </header>
    // <header id="headerArea">
    //   <div class="headerInner">
    //       <h1 class="logo"><a href="./index.html">KG케미칼로고</a></h1>
    //       <div class="topMenu">

    //         <ul class="dropdownmenu">
    //             <li><a href="./login/login_form.php">로그인</a></li>
    //             <li><a href="./member/join.html">회원가입</a></li>
    //         </ul>
      
 
    //       </div>
    //       <nav id="gnb">
    //           <h2 class="hidden">글로벌네비게이션영역</h2>
    //           <ul class="dropdownmenu">
    //             <li class="m1 menu">
    //                 <h3><a class="depth1" href="./sub1/sub1_1.html">회사소개</a></h3>
    //                 <ul>
    //                     <li><a href="./sub1/sub1_1.html">KG케미칼 소개</a></li>
    //                     <li><a href="./sub1/sub1_2.html">인사말</a></li>
    //                     <li><a href="./sub1/sub1_3.html">연혁</a></li>
    //                     <li><a href="./sub1/sub1_4.html">비전</a></li>
    //                     <li><a href="./sub1/sub1_5.html">CI소개</a></li>
    //                 </ul>
    //             </li>
    //             <li class="m2 menu">
    //                 <h3><a class="depth1" href="./sub2/sub2_1.html">사업분야</a></h3>
    //                 <ul>
    //                     <li><a href="./sub2/sub2_1.html">사업부문</a></li>
    //                     <li><a href="./sub2/sub2_2.html">R&D</a></li>
    //                 </ul>
    //             </li>
    //             <li class="m3 menu">
    //                 <h3><a class="depth1" href="./sub3/sub3_1.html">제품정보</a></h3>
    //                 <ul>
    //                     <li><a href="./sub3/sub3_1.html">비료제품</a></li>
    //                     <li><a href="./sub3/sub3_2.html">소재제품</a></li>
    //                     <li><a href="./sub3/sub3_3.html">차량요소수제품</a></li>
    //                 </ul>
    //             </li>
    //             <li class="m4 menu">
    //                 <h3>
    //                     <a class="depth1" href="./sub4/sub4_1.html">사회공헌</a>
    //                 </h3>
    //                     <ul>
    //                         <li><a href="./sub4/sub4_1.html">사회공헌철학</a></li>
    //                         <li><a href="./concert/list.php">사회공헌활동</a></li>
    //                         <li><a href="./sub4/sub4_3.html">재단</a></li>
    //                     </ul>
                    
    //             </li>
    //             <li class="m5 menu">
    //                 <h3>
    //                     <a class="depth1" href="./greet/list.php">고객지원</a></h3>
    //                     <ul>
    //                         <li><a href="./greet/list.php">공지사항</a></li>
    //                         <li><a href="./news/list.php">뉴스룸</a></li>
    //                         <li><a href="./sub5/sub5_3.html">FAQ</a></li>
    //                         <li><a href="./sub5/sub5_4.html">문의하기</a></li>
    //                     </ul>
    //             </li>
    //             <li class="m6 menu">
    //                 <h3><a class="depth1" href="./sub6/sub6_1.html">인재채용</a></h3>
    //                 <ul>
    //                     <li><a href="./sub6/sub6_1.html">채용안내</a></li>
    //                     <li><a href="./sub6/sub6_2.html">인재상</a></li>
    //                     <li><a href="./sub6/sub6_3.html">복리후생</a></li>
    //                 </ul>
    //             </li>
    //           </ul>
    //       </nav>
    //   </div>
    // </header>
  );
};

export default Header;