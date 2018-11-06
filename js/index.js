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

//屏幕宽度减小时
var clientWidth = document.documentElement.clientWidth;
var wrapperInner = document.querySelector('#wrapper-inner')
var wrapperInnerChild = wrapperInner.children;
window.onresize = function(){
    var clientWidth = document.documentElement.clientWidth;
    if(clientWidth <960){
        for(var i=0;i<wrapperInnerChild.length;i++){
            wrapperInnerChild[i].style.width = clientWidth - 30 + 'px';
        }
    }else{
        for(var i=0;i<wrapperInnerChild.length;i++){
            wrapperInnerChild[i].style.width = 930 + 'px';
        }
    }
    wrapperInner.style.width = wrapperInnerChild[0].style.width.replace(/px/,'') * 6 + 'px';
}

//轮播
var previous =document.querySelector('#previous');
var next = document.querySelector('#next');
var imgNum = wrapperInnerChild.length;
function movePortfolio(offset){
    var oldMarginLeft = window.getComputedStyle(wrapperInner).marginLeft.replace(/px/,'');
    oldMarginLeft = parseInt(oldMarginLeft);
    // console.log(oldMarginLeft)
    var newMarginLeft = oldMarginLeft + offset;
    if(offset >= 0){
        if(oldMarginLeft >=0){
            wrapperInner.style['margin-left'] = -(imgNum-1) * offset + 'px';
            wrapperInner.style.transition = 'none';
        }else{
            wrapperInner.style['margin-left'] = newMarginLeft + 'px';
            wrapperInner.style.transition = 'all 0.3s';
        }
    }else{
        if(oldMarginLeft <= (imgNum-1)*offset){
            wrapperInner.style['margin-left'] = '0px';
            wrapperInner.style.transition = 'none';
        }else{
            wrapperInner.style['margin-left'] = newMarginLeft + 'px';
            wrapperInner.style.transition = 'all 0.3s';
        }
    }
    
}
previous.addEventListener('click',function(){
    var imgWidth = wrapperInnerChild[0].offsetWidth;
    movePortfolio(-imgWidth);
})
next.addEventListener('click',function(){
    var imgWidth = wrapperInnerChild[0].offsetWidth;
    movePortfolio(imgWidth);
    // console.log('1')
})