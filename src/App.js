import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      {/*gnb영역S*/}
      <div className="NavBar">
        <div className="MainBar_MainBar">
          <nav className="MainBar_MainBar_nav">
            <div className="MainBar_MainBar_nav_top">
              <div className="MainBar_MainBar_nav_top_logo">
                <button type="button" className="MainBar_hamberger">
                  <img src="https://static.wanted.co.kr/images/icon-menu.png" />
                </button>
                <a href="/" className="MainBar_MainBar_logo">
                  <i className="icon-logo_new"></i>
                </a>
              </div>
              {/*<button id="gnbSignupBtn" className="xsSignUpButton" type="button">
              회원가입하기
  </button>*/}
            </div>
            <ul className="Menu_className">
              <li className="xsHomeButton xsOnly selectedNav">
                <a href="/">홈</a>
              </li>
              <li>
                <a href="/">채용</a>
              </li>
              <li>
                <a href="/">이벤트</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">직군별 연봉</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">이력서</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">커뮤니티</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">프리랜서</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">AI 합격예측</a>
              </li>
            </ul>
            <aside className="Aside_className">
              <ul>
                <li className="searchIcon">
                  <button className="searchButton" type="button">
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      xmlnsXlink="https://www.w3.org/1999/xlink"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <defs>
                        <path
                          id="qt2dsq14a"
                          d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                        ></path>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <use
                          xlinkHref="#qt2dnsq14a"
                          fill="rgb(51, 51, 51)"
                          fillRule="nonzero"
                          stroke="rgb(51, 51, 51)"
                          strokeWidth="0.3"
                        ></use>
                      </g>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="signUpButton" type="button">
                    회원가입/로그인
                  </button>
                </li>
                <li className="mdMoreVisible, leftDivision">
                  <a className="dashboardButton" href="/">
                    기업 서비스
                  </a>
                </li>
              </ul>
            </aside>
          </nav>
        </div>
      </div>
      <div className="Padding"></div>
      {/*gnb영역E*/}

      {/*캐러셀S*/}
      <main className="Main">
        <div className="TopBanner">
          <div className="slick-slider">
            <div className="slick-list">
              <ul className="container">
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1454/e504b006.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1438/015566ac.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1453/7a978579.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg" />
                </li>
                <li className="cell">
                  <img src="https://static.wanted.co.kr/images/banners/1451/725c6862.jpg" />
                </li>
              </ul>
            </div>
          </div>
          <div className="button-container">
            <button className="prev"></button>
            <button className="next"></button>
          </div>
        </div>
      </main>
      {/*캐러셀E*/}
    </>
  );
}

export default App;
