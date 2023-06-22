// Footer.js
import React from 'react';
import '../css/layout.css'; // Footer 컴포넌트의 CSS 파일을 불러옵니다.
import '../css/visual.css';
import '../css/reset.css'; 



const Visual = () => {
  return (
//     <div className='visualArea'>
//     <div class="heading">
//     <h1>더함아이덴티티가 MICE 산업의</h1>
//     <div class="text-card">
//         <div class="react">설계</div>
//         <div class="restapi">시공 및 컨설팅</div>
//         <div class="python">토탈 솔루션</div>
//     </div>

//     <h2> 제공하여 브랜드 가치를 창조합니다</h2>
// </div>
// </div>
<main class="text-container">
    <svg class="text-stroke" viewBox="0 0 500 100" width="80%" height="100%">
        <text class="text" x="60" y="75">THE HAM</text>
    </svg>
    <svg class="text-stroke2" viewBox="0 0 500 100" width="80%" height="90%">
        <text class="text" x="330" y="35">IDENTITY</text>
    </svg>
</main>
  );
};

export default Visual;