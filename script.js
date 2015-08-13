// Your JS goes here
(function() {
  var body = document.querySelector('body');
  var crazyTile;
  var r;
  var g;
  var b;
  var color;

  //create a bunch of divs
  for (var i = 1; i <= 63; i++) {
    //populate with tiles
    r = Math.floor(Math.random() * 255 + 1);
    g = Math.floor(Math.random() * 255 + 1);
    b = Math.floor(Math.random() * 255 + 1);
    color = 'rgb(' + r + ',' + g + ',' + b + ')';

    crazyTile = document.createElement('div');
    crazyTile.style.backgroundColor = color;
    crazyTile.style.width = '11.1%';
    crazyTile.style.float = 'left';
    crazyTile.style.paddingBottom = '11.1%';
    body.appendChild(crazyTile);
  }
})();