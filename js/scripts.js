// audio scripts


let songDiv = document.querySelectorAll('.song');
let albumThumbnail = document.querySelectorAll('.album');



function hideAll() {
  songDiv.forEach(function(el) {
    el.style.display = 'none';
  });
}


hideAll();


albumThumbnail.forEach(function(el) {
  el.onclick = (e) => {



    hideAll();





    switch (e.target.getAttribute('id')) {
      case 'lace':
        document.querySelector('#wildboy')
        	.style.display = 'block';
        break;
      case 'binge':
        document.querySelector('#loco')
        	.style.display = 'block';
        break;
      case 'hotel':
        document.querySelector('#sixsixsix')
        .style.display = 'block';
        break;
      case 'tickets':
        document.querySelector('#forget')
        .style.display = 'block';
        break;


    }

    let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
      el.pause();
      el.currentTime = 0;
    });
  }

}); 
