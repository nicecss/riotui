<ui-img>
  <img src="{ src }"
    onmouseover = "{ hover }"
    onmouseout = "{ out }"
    onmousedown = "{ active }"
    onmouseup = "{ up }"
    width = "{ opts.width }"
    height = "{ opts.height }"
  >
  <script>
  import './ui-img.css';
  
  this.src = opts.src;
  opts.hover && (this.hover = function(){
    this.src = opts.hover;
  });
  this.out = function(){
    this.src = opts.src;
  };
  opts.active && (this.active = function(){
    this.src = opts.active;
  });
  this.up = function(){
    this.src = opts.hover || opts.src;
  };
  </script>
</ui-img>