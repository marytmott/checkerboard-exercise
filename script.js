// Your JS goes here
(function() {
  var body = document.querySelector('body');
  var gradientTile;
  var r = 51;
  var g = 65;
  var b = 251;
  var color;

  //create a bunch of divs
  for (var i = 1; i <= 63; i++) {
    r += 3;
    g += 3;
    b += 3;
    color = 'rgb(' + r + ',' + g + ',' + b + ')';

    console.log(color);

    gradientTile = document.createElement('div');
    gradientTile.style.backgroundColor = color; //rgba(57, 194, 228, 1) - summer sky
    gradientTile.style.width = '11.1%';
    gradientTile.style.float = 'left';
    gradientTile.style.paddingBottom = '11.1%';
    body.appendChild(gradientTile);



    // if (i % 2 === 0) {
    //   //cyan tiles
    //   cyanTile = document.createElement('div');
    //   cyanTile.style.backgroundImage = 'cyan'; //rgba(57, 194, 228, 1) - summer sky
    //   cyanTile.style.width = '11.1%';
    //   cyanTile.style.float = 'left';
    //   cyanTile.style.paddingBottom = '11.1%';
    //   body.appendChild(cyanTile);

    // } else {
    //   //magenta
    //   magentaTile = document.createElement('div');
    //   magentaTile.style.backgroundImage = 'linear-gradient('; //rgba(192, 35, 227, 1) - veronica
    //   magentaTile.style.width = '11.1%';
    //   magentaTile.style.float = 'left';
    //   magentaTile.style.paddingBottom = '11.1%';
    //   body.appendChild(magentaTile);
    // }
  }

})();

//RGBA(51, 65, 251, 1)