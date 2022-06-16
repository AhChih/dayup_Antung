let header = document.getElementById("header");
let footer = document.getElementById("footer");
function render() {
  let str = "";
  let item = "";
  str += `
    <!-- header -->
    <div class="bg-white">
      <div class="header">
        <div class="container header-inner">
          <a href="../home/index.html">
            <img class="logo" src="../../image/2.HOME/logo.svg">
          </a>
          <ul>
            <!-- 768px 以下隱藏 -->
            <li class="header-list">
              <img src="../../image/2.HOME/headshot_1.png">
              <span>Hi, BEN JOMNSON</span>
            </li>
            <!-- 768px 以下顯示 -->
            <li class="hamburger-list">
            <div class="hamburger-menu">
               <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                  <span></span>
                </label>
                <ul class="menu__box">
                  <li class="headshot">
                    <img src="../../image/2.HOME/headshot_1.png">
                  </li>
                  <li>
                    <a class="menu__item" href="../schedule/schedule.html">
                      <img src="../../image/2.Home/icon-2.svg">
                      <span>廠區樣品進度管理</span>
                    </a>
                  </li>
			            <li>
                    <a class="menu__item" href="../transformer/transformer.html">
                      <img src="../../image/2.HOME/icon-2.svg">
                      <span>變壓器相關資料</span>
                    </a>
                  </li>
			            <li>
                    <a class="menu__item" href="../abnormal/abnormal.html">
                      <img src="../../image/2.HOME/icon-3.svg">
                      <span>異常處理建議清單</span>
                    </a>
                  </li>
			            <li>
                    <a class="menu__item" href="../cloud/cloud.html">
                      <img src="../../image/2.HOME/icon-4.svg">
                      <span>雲端報告觀看</span>
                    </a>
                  </li>
			            <li>
                    <a class="menu__item" href="#">
                      <img src="../../image/2.HOME/icon-5.svg">
                      <span>線上偵測器</span>
                    </a>
                  </li>
                  <li>
                  <a class="logout ipad-none" href="#">Sign out</a>
                </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
     </div>

     <!-- 頂部選單 -->
     <ul class="menu-box container">
       <li>
        <ul class="menu">
          <li>
            <a class="menu-list" href="../schedule/schedule.html">
             <img src="../../image/2.Home/icon-2.svg">
             <span>廠區樣品進度管理</span>
            </a>
          </li>
          <li>
           <a class="menu-list" href="../transformer/transformer.html">
             <img src="../../image/2.HOME/icon-2.svg">
             <span>變壓器相關資料</span>
           </a>
           </li>
           <li>
             <a class="menu-list" href="../abnormal/abnormal.html">
               <img src="../../image/2.HOME/icon-3.svg">
               <span>異常處理建議清單</span>
             </a>
           </li>
           <li>
             <a class="menu-list" href="../cloud/cloud.html">
               <img src="../../image/2.HOME/icon-4.svg">
               <span>雲端報告觀看</span>
             </a>
           </li>
           <li>
             <a href="#" class="menu-list">
               <img src="../../image/2.HOME/icon-5.svg">
               <span>線上偵測器</span>
             </a>
           </li>
        </ul>
       </li>
       <li>
        <label class="search">
            <input type="input" placeholder="Search...">
        </label>
       </li>
      </ul>
    </div>

      <!-- 中間資訊欄 -->
      <div class="content-box container">
        <div class="content-left">
          <img src="../../image/2.HOME/headshot_1.png">
        </div>
        <ul class="content-right">
           <li class="content-list">
             <div>
              <span class="name">BEN JOMNSON</span><span class="company">台朔石化股份有限公司</span>
             </div>
             <a href="#" class="logout">Sign out</a>
           </li>
           <ul class="content-list-footer">
             <li><h3>場類別名</h3><p>桃園二廠pvc</p></li>
             <li><h3>日期</h3><p>2021/04/01</p></li>
             <li><h3>客戶代碼</h3><p>ABCXXXX</p></li>
            <li><h3>客戶統編</h3><p>80279076</p></li>
           </ul>
        </ul>
      </div>`;
      
  item += `<h3>版權所有 2020 台灣安東集團-安保科技股份有限公司 <br> 客戶服務中心（TEL）：（03）328-3200</h3>`;

  header.innerHTML = str;
  footer.innerHTML = item;
}

render();
