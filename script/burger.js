(function() {
    const baseElement = document.querySelector('[data-element="filters-panel"]')
    const buttonTarget=document.querySelector('.button-low-width')
    const buttonOn=document.querySelector('.button-on');
    const buttonOff=document.querySelector('.button-off');
    const leftPanel=document.querySelector('.left-panel');
        function closeNavBar(){
    if (window.innerWidth >= 992){
        baseElement.style.display = 'flex';
        buttonTarget.style.display='none';

    }else {
        baseElement.style.display = 'none';
        buttonTarget.style.display = 'grid';
        buttonOff.style.display = 'none';
    }

    }
    buttonOn.addEventListener('click', function (){
        baseElement.style.display='flex';
        buttonOff.style.display='flex';
        buttonOn.style.display='none';
    })
    buttonOff.addEventListener('click', function (){
        baseElement.style.display='none';
        buttonOff.style.display='none';
        buttonOn.style.display='flex';
    })


    window.addEventListener('resize',closeNavBar)

})();