function grab(g) {
    g.onmousemove = function(e) {
      g.scroll += -e.movementX;
      return false;
    }
    
    g.onmouseleave = function() { g.onmousemove = null; }
    g.onmouseup = function() { g.onmousemove = null; }
  }