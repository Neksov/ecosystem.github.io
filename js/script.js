window.addEventListener('DOMContentLoaded' , () =>{
  'use strict';
  //scrollbar
  new SimpleBar(document.getElementById('simplebarblock'), { 
    autoHide: false,
  });

  //Табы
  let btnBlock = () =>{
    const blockGroupBtn = document.querySelectorAll('.block-group__btn');
    blockGroupBtn.forEach((elem)=>{
        elem.addEventListener('click', function(){
            let bodyInfoActive = document.querySelectorAll('.body-info-active'),
                blockGroupBtnActiveAll = document.querySelectorAll('.block-group__btn-active');

            let parentElem = this.parentNode;

            let bodyInfo = parentElem.querySelector('.body-info');
            let blockGroupBtn = parentElem.querySelector('.block-group__btn');

            if(bodyInfo.classList.contains("body-info-active")) {
              bodyInfo.classList.remove('body-info-active');
            }
            else {
              bodyInfo.classList.add('body-info-active');
            }

            if(blockGroupBtn.classList.contains("block-group__btn-active")) {
              blockGroupBtn.classList.remove('block-group__btn-active');                    
            }
            else {
              blockGroupBtn.classList.toggle('block-group__btn-active');
              bodyInfoActive.forEach((e)=>{
                e.classList.remove('body-info-active');
              })
              blockGroupBtnActiveAll.forEach((e)=>{
                e.classList.remove('block-group__btn-active');
              })
            }
        })
    })
  };
  btnBlock();
});
