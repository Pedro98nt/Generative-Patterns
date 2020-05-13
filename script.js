function draw(){
  document.querySelectorAll(".cell").forEach(cell => { 
    cell.style.setProperty("--size",((Math.floor(Math.random() * 150) + 150)));
    cell.style.setProperty("--skewX",((Math.floor(Math.random() * 45) - 45))+ "deg");
    cell.style.setProperty("--skewY",((Math.floor(Math.random() * 45) - 45))+ "deg");
    cell.style.setProperty("--angle",((Math.floor(Math.random() * 360) + 1))+ "deg");
    cell.style.setProperty("--color","var(--color"+((Math.floor(Math.random() * 4) + 1))+")");
    cell.style.setProperty("--color6","var(--color"+((Math.floor(Math.random() * 4) + 1))+")");
    cell.style.setProperty("--rotate",((Math.floor(Math.random() * 360) - 180)) + 'deg');
    cell.style.setProperty("--opacity",(10/(Math.floor(Math.random() * 20) + 1)) + 0.25);
  });
  document.querySelectorAll(".squig").forEach(squig => { 
    var start = (Math.floor(Math.random() * 15) + 25);
    var total = (Math.floor(Math.random() * 6) + 1);
    if (total > 3){
      var points = [
        [start, 5],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 100) + 50)],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 125) + 50)],
        [(Math.floor(Math.random() * 100) + 50), (Math.floor(Math.random() * 150) + 50)],
        [(Math.floor(Math.random() * 100) + 25), (Math.floor(Math.random() * 125) + 50)],
        [(Math.floor(Math.random() * 100) + 0), (Math.floor(Math.random() * 50) + 5)],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 100) + 50)],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 100) + 100)],
        [start,5]
    ];
    }
   if (total > 5){
      var points = [
        [start, 5],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 100) + 50)],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 125) + 50)],
        [(Math.floor(Math.random() * 100) + 50), (Math.floor(Math.random() * 150) + 50)],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 100) + 50)],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 100) + 100)],
        [start,5]
    ];
    }
    else{
      var points = [
        [start, 5],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 100) + 50)],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 100) + 50)],
        [(Math.floor(Math.random() * 100) + 100), (Math.floor(Math.random() * 100) + 100)],
        [start,5]
    ];
    }

    render(toSVGPath(points));
    squig.setAttribute("d", toRoundedSVGPath(points));

    function render(path){};

    function toSVGPath(points) {
        var SVGPath = '';
        for (var i = 0; i < points.length; i++) {
            var prefix = (i == 0) ? 'M' : 'L';
            SVGPath += prefix + points[i][0] + ' ' + points[i][1] + ' ';
        }
        return SVGPath;
    }

    function toRoundedSVGPath(points) {
        var SVGPath = '';
        for (var i = 0; i < points.length; i++) {
            if (i == 0) {
              SVGPath += 'M' + points[i][0] + ' ' + points[i][1];
            } else {
                var current, previous, next;
                current = points[i];
                previous = points[i-1];
                if (i < points.length -1) {
                  next = points[i+1];
                } else {
                    next = points[0];
                }
                var quota = 0.15;
                var median = [
                    (current[0] - previous[0] * quota) / (1 + quota),
                    (current[1] - previous[1] * quota) / (1 + quota),
                ];
              SVGPath += 'C' + previous[0] + ' ' + previous[1];
              SVGPath += ' ' + median[0]   + ' ' + median[1];
              SVGPath += ' ' + current[0]  + ' ' + current[1];
            }
            SVGPath += ' ';
        }
        return SVGPath;
    }
    
    });
    
};

draw();


document.addEventListener('click', function (event) {
draw();
}, false);