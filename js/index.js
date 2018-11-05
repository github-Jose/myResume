var headerNav = document.querySelector('#headerNav');
var myPortfolio = document.querySelector('#myPortfolio');
var headerUl = document.querySelector('#headerUl');
var main =document.querySelector('main')
var page = main.children;

for(var i=0;i<headerUl.children.length;i++){
    (function(num){
        headerUl.children[num].addEventListener('click',function(){
            for(var j=0;j<headerUl.children.length;j++){
                if(j != num){
                    headerUl.children[j].className = '';
                    page[j].style.display='none';
                }else{
                    headerUl.children[j].className = 'actived';
                    page[j].style.display = 'block'
                }
            }
        })
    })(i);
}

window.onscroll = function(){
    var scrollSite = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrollSite)
    if(scrollSite > 0){
        headerNav.className = 'clearfix changePadding'
        // console.log(headerNav)
    }else{
        headerNav.className = 'clearfix'
    }
}