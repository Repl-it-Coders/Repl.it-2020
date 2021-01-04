document.getElementsByTagName('iframe')[0].width = window.innerWidth-20;
document.getElementsByTagName('iframe')[0].height = window.innerHeight-30 - document.getElementsByTagName('h4')[0].offsetHeight;
;(function() {
  var selem = document.currentScript;

    // var authWindow = window.open('https://repl.it/auth_with_repl_site?domain=' + location.host)
    window.addEventListener('message', authComplete);

    var h = 500;
		var w = 350;
		var left = (screen.width / 2) - ( w / 2);
		var top = (screen.height / 2) - (h / 2);

    /*var authWindow = window.open(
      'https://repl.it/auth_with_repl_site?domain='+location.host,
      '_blank',
      'modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left)*/

    function authComplete(e) {
      if (e.data !== 'auth_complete') {
        return;
      }

      window.removeEventListener('message', authComplete);
      location.assign("/home");
    }

})();