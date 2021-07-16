(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');
  var top;

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)){
         if(target === toggle){
           top = document.scrollingElement.scrollTop;
         }
         if(top !== undefined && (target === checkbox || target === toggle)){
           document.scrollingElement.scrollTop = top;
         }
         return;
       }

    checkbox.checked = false;
  }, false);
})(document);
