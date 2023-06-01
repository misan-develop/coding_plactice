document.getElementById('upScroll')

.addEventListener('click', () => {
    var a = document.documentElement;
    var y = a.scrollHeight - a.clientHeight;
    window.scroll({top: 0});
  });