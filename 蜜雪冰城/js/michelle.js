window.onload=function(){
    //导航栏目鼠标移入改变字体颜色
    var navA=document.getElementsByClassName('item-ltn');
    for(var i=0;i<navA.length;i++){
        navA[i].onmouseenter=function(){
            this.style.color='#E40055';  
        }
        navA[i].onmouseleave=function(){
            this.style.color='#1E1E1E';
        }
    } 
    //下拉菜单
    var navLi=document.querySelectorAll('nav>ul>li');
    for(var i=0;i<navLi.length;i++){
        navLi[i].onmouseenter=function(){
            var subNavs=this.querySelector('.subnav-wrap');
            subNavs.style.display='block';
        }
        navLi[i].onmouseleave=function(){
            var subNavs=this.querySelector('.subnav-wrap');
            subNavs.style.display='none';
        }
    }
    
    
    // console.log(subNav);
    //导航栏下拉菜单鼠标移入效果
    // var downBoxLis=doucument.querySelectorAll('.down-box>li');
    // for(var i=0;i<downBoxLis.length;i++){
    //     downBoxLis[i].onmouseenter=function(){
    //         this.classList.add('active');
    //     }
    //     downBoxLis[i].onmouseleave=function(){
    //         this.classList.remove('active');
    //     }
    // }
}