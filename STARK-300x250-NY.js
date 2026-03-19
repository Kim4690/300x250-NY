(function () {

  var clickUrl = window.clickTag || window.clickTAG || "https://www.stark.dk/services";

  var bannerContent = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script src="https://s0.2mdn.net/ads/studio/cached_libs/gsap_3.11.1_min.js"></script>

<style>
html, body {
  margin:0;
  padding:0;
  width:100%;
  height:100%;
}

#container {
  position:relative;
  width:100%;
  height:100%;
  overflow:hidden;
  font-family: Arial, sans-serif;
}

/* LAYOUTS */
.layout {
  position:absolute;
  width:100%;
  height:100%;
}

/* Desktop default */
.mobile { display:none; }

/* MOBILE BREAKPOINT */
@media (max-width: 480px) {

  .desktop { display:none; }
  .mobile { display:block; }

}

/* ELEMENTS */
.topLeft { position:absolute; top:0; left:0; width:100%; }

.txt {
  position:absolute;
  width:100%;
  text-align:center;
  color:white;
  font-weight:bold;
}

.txt1 { top:20%; font-size:18px; }
.txt2 { top:20%; font-size:18px; opacity:0; }

/* MOBILE TEXT */
.mobile .txt1,
.mobile .txt2 {
  font-size:22px;
  top:25%;
}

/* CTA */
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

/* MOBILE CTA */
.mobile .btn {
  font-size:18px;
  padding:14px 20px;
}

/* CLICK LAYER */
#clickLayer {
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  z-index:9999;
  cursor:pointer;
}
</style>
</head>

<body>

<div id="container">

  <!-- DESKTOP -->
  <div class="layout desktop">
    <img src="https://cloud.adjust-digital.com/creatives/056f3780641e8d6223a7115111f24cca/assets/v1_bg.jpg" class="topLeft">
    <div class="txt txt1" id="txt1_d">Få styr på dit projekt</div>
    <div class="txt txt2" id="txt2_d">STARK hjælper dig</div>
    <div class="btn">Læs mere</div>
  </div>

  <!-- MOBILE -->
  <div class="layout mobile">
    <img src="https://cloud.adjust-digital.com/creatives/056f3780641e8d6223a7115111f24cca/assets/v2_bg.jpg" class="topLeft">
    <div class="txt txt1" id="txt1_m">STARK hjælper dig</div>
    <div class="txt txt2" id="txt2_m">Kom godt i gang</div>
    <div class="btn">Læs mere</div>
  </div>

  <div id="clickLayer"></div>

</div>

<script>

/* DESKTOP ANIMATION */
var tl_d = gsap.timeline({ repeat: -1 });

tl_d.to("#txt1_d", {opacity:0, duration:0.20, delay:8})
    .to("#txt2_d", {opacity:1, duration:0.20)
    .to("#txt2_d", {opacity:0, duration:0.20, delay:8})
    .to("#txt1_d", {opacity:1, duration:0.20});

/* MOBILE ANIMATION */
var tl_m = gsap.timeline({ repeat: -1 });

tl_m.to("#txt1_m", {opacity:0, duration:0.8, delay:4})
    .to("#txt2_m", {opacity:1, duration:0.8})
    .to("#txt2_m", {opacity:0, duration:0.8, delay:4})
    .to("#txt1_m", {opacity:1, duration:0.8});

/* CLICK */
document.getElementById("clickLayer").onclick = function () {
  window.open(parent.clickTag || parent.clickTAG || "${clickUrl}", "_blank");
};

</script>

</body>
</html>
`;

  var html = `
    <div style="width:100%;max-width:300px;aspect-ratio:300/250;">
      <iframe 
        srcdoc='${bannerContent.replace(/'/g, "&apos;")}'
        style="width:100%;height:100%;border:0;"
      ></iframe>
    </div>
  `;

  document.write(html);

})();
