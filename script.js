// Your JS goes here
(function() {
  var body = document.querySelector('body');
  var redTile;
  var blackTile;
  //var size// = 63 tiles
// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%

// document.createElement('div'); //in a for loop?
// redTile.style.backgroundColor = 'red';
// redTile.style.width = '11.1%';
// redTile.style.float = 'left';
// redTile.style.paddingBottom = '11.1%';

//create a bunch of divs
  for (var i = 1; i <= 63; i++) {
    if (i % 2 === 0) {
      //red tiles
    redTile = document.createElement('div');
    redTile.style.backgroundColor = 'red';
    redTile.style.width = '11.1%';
    redTile.style.float = 'left';
    redTile.style.paddingBottom = '11.1%';
    body.appendChild(redTile);

    } else {
      //black tiles
      blackTile = document.createElement('div');
      blackTile.style.backgroundColor = 'black';
      blackTile.style.width = '11.1%';
      blackTile.style.float = 'left';
      blackTile.style.paddingBottom = '11.1%';
      body.appendChild(blackTile);
    }
  }

})();