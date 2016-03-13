(function () {
  function infiniteNetflix() {
    if ($('.player-autoplay-interrupter.no-select.show-autoplay-interrupter')) {
      $('.button.continue-playing').click();
      setTimeout(infiniteNetflix, 180000);
    } else {
      setTimeout(infiniteNetflix, 100);
    }
  };

  infiniteNetflix();
}());
