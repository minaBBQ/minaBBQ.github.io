//rhino_center————————————

(function () {
  var $rhinoScale = document.getElementsByClassName('rhino_scale')[0];
  var $rhinoBackgroundHeight = document.getElementsByClassName('sec2_wrap')[0];
  var $seaLightHeight = document.getElementsByClassName('sea_light')[0];
  window.addEventListener('resize', resize);
  resize();

  function resize() {
    var scale = window.outerWidth / 1800;
    var translate = scale * 900 - 900 - 50 * scale;
    $rhinoScale.style.transform = 'scale(' + scale + ')';
    $rhinoBackgroundHeight.style.height = `${scale * 1000}px`;
    $seaLightHeight.style.height = `${scale * 890}px`;
  }
})();
//rhino_center_end——————————

