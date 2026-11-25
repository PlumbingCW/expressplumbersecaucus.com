(function(){
var d=document,h=d.documentElement;
h.classList.add('js');
var tog=d.querySelector('.nav-toggle'),ov=d.querySelector('.mob-overlay'),cl=d.querySelector('.mob-close');
function setOpen(o){
  h.classList.toggle('nav-open',o);
  h.style.overflow=o?'hidden':'';
  if(tog){tog.setAttribute('aria-expanded',o?'true':'false');}
  if(o&&cl){cl.focus();}
  if(!o&&tog){tog.focus();}
}
if(tog){tog.addEventListener('click',function(){setOpen(true);});}
if(cl){cl.addEventListener('click',function(){setOpen(false);});}
if(ov){ov.addEventListener('click',function(){setOpen(false);});}
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&h.classList.contains('nav-open')){setOpen(false);}});
var links=d.querySelectorAll('.mob-drawer a');
for(var i=0;i<links.length;i++){links[i].addEventListener('click',function(){h.classList.remove('nav-open');h.style.overflow='';});}
var subs=d.querySelectorAll('.mob-sub-btn');
for(var j=0;j<subs.length;j++){
  subs[j].addEventListener('click',function(){
    var t=d.getElementById(this.getAttribute('aria-controls'));
    var open=this.getAttribute('aria-expanded')==='true';
    this.setAttribute('aria-expanded',open?'false':'true');
    if(t){t.classList.toggle('is-open',!open);}
  });
}
if(window.matchMedia){
  var mq=window.matchMedia('(min-width: 901px)');
  var fn=function(e){if(e.matches){h.classList.remove('nav-open');h.style.overflow='';}};
  if(mq.addEventListener){mq.addEventListener('change',fn);}else if(mq.addListener){mq.addListener(fn);}
}
var qs=d.querySelectorAll('.faq-q');
for(var k=0;k<qs.length;k++){
  qs[k].addEventListener('click',function(){
    var a=d.getElementById(this.getAttribute('aria-controls'));
    var open=this.getAttribute('aria-expanded')==='true';
    this.setAttribute('aria-expanded',open?'false':'true');
    if(a){a.style.maxHeight=open?'0px':(a.scrollHeight+'px');}
  });
}
})();
