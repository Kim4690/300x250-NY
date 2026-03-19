(function () {

  var clickUrl = window.clickTag || window.clickTAG || "https://www.stark.dk/services";

  // LOAD GSAP
  var script = document.createElement("script");
  script.src = "https://s0.2mdn.net/ads/studio/cached_libs/gsap_3.11.1_min.js";
  script.onload = initBanner;
  document.head.appendChild(script);

  function initBanner() {

    var html = `
      <div id="stark-banner" style="
        width:100%;
        max-width:300px;
        aspect-ratio:300/250;
        position:relative;
        overflow:hidden;
        font-family: Arial, sans-serif;
        cursor:pointer;
      ">

        <!-- DESKTOP -->
        <div class="layout desktop">
          <img src="https://cloud.adjust-digital.com/creatives/056f3780641e8d6223a7115111f24cca/assets/v1_bg.jpg" class="bg">
          <div class="txt txt1" id="txt1_d">Få styr på dit projekt</div>
          <div class="txt txt2" id="txt2_d">STARK hjælper dig</div>
          <div class="btn">Læs mere</div>
        </div>

        <!-- MOBILE -->
        <div class="layout mobile">
          <img src="https://cloud.adjust-digital.com/creatives/056f3780641e8d6223a7115111f24cca/assets/v2_bg.jpg" class="bg">
          <div class="txt txt1" id="txt1_m">STARK hjælper dig</div>
          <div class="txt txt2" id="txt2_m">Kom godt i gang</div>
          <div class="btn">Læs mere</div>
        </div>

        <div id="clickLayer"></div>

      </div>
    `;

    document.write(html);

    // STYLE
    var style = document.createElement("style");
    style.innerHTML = `
      .layout {
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
      }

      .mobile { display:none; }

      @media (max-width:600px) {
        .desktop { display:none; }
        .mobile { display:block; }
      }

      .bg {
        position:absolute;
        width:100%;
        height:100%;
        object-fit:cover;
      }

      .txt {
        position:absolute;
        width:100%;
        text-align:center;
        color:white;
        font-weight:bold;
      }

      .txt1 { top:20%; font-size:18px; }
      .txt2 { top:20%; font-size:18px; opacity:0; }

      .mobile .txt1,
      .mobile .txt2 {
        font-size:22px;
        top:25%;
      }

      .btn {
        position:absolute;
        bottom:20px;
        left:50%;
        transform:translateX(-50%);
        background:#ffd500;
        color:#000;
        padding:10px 15px;
        font-weight:bold;
        font-size:14px;
      }

      .mobile .btn {
        font-size:18px;
        padding:14px 20px;
      }

      #clickLayer {
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        z-index:10;
      }
    `;
    document.head.appendChild(style);

    // ANIMATION
    var tl_d = gsap.timeline({ repeat: 3, repeatDelay: 3 });

    tl_d
      .to("#txt1_d", {opacity:0, duration:0.5, delay:3})
      .to("#txt2_d", {opacity:1, duration:0.5})
      .to("#txt2_d", {opacity:0, duration:0.5, delay:3})
      .to("#txt1_d", {opacity:1, duration:0.5});

    var tl_m = gsap.timeline({ repeat: 3, repeatDelay: 3 });

    tl_m
      .to("#txt1_m", {opacity:0, duration:0.6, delay:3})
      .to("#txt2_m", {opacity:1, duration:0.6})
      .to("#txt2_m", {opacity:0, duration:0.6, delay:3})
      .to("#txt1_m", {opacity:1, duration:0.6});

    // CLICK
    document.getElementById("clickLayer").onclick = function () {
      window.open(clickUrl, "_blank");
    };

  }

})();
