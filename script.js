// Your JS goes here
(function() {
  var body = document.querySelector('body');
  var magentaTile;
  var cyanTile;

  //create a bunch of divs
  for (var i = 1; i <= 63; i++) {
    if (i % 2 === 0) {
      //red tiles
      magentaTile = document.createElement('div');
      magentaTile.style.backgroundColor = 'red';
      magentaTile.style.width = '11.1%';
      magentaTile.style.float = 'left';
      magentaTile.style.paddingBottom = '11.1%';
      body.appendChild(redTile);

    } else {
      //black tiles
      cyanTile = document.createElement('div');
      cyanTile.style.backgroundColor = 'cyan'; //rgba(57, 194, 228, 1)
      cyanTile.style.width = '11.1%';
      cyanTile.style.float = 'left';
      cyanTile.style.paddingBottom = '11.1%';
      body.appendChild(blackTile);
    }
  }

})();