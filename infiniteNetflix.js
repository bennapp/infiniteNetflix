(function () {
  window.infiniteNetflix = function() {
    if ($('.player-autoplay-interrupter.no-select.show-autoplay-interrupter').length) {
      console.log('promt!!!');
      $('.button.continue-playing').click();
      setTimeout(window.infiniteNetflix, 180000);
    } else {
      console.log('no-promt');
      setTimeout(window.infiniteNetflix, 100);
    }
  };

  window.infiniteNetflix();
}());
