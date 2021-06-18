document.addEventListener("DOMContentLoaded", () => {
    // let main_button = document.getElementsByClassName('main-button')[0]
    // main_button.addEventListener('click', (e) => {
    //     main_button.classList.add('')
    // })

    let header = document.getElementsByClassName('header')[0]
    header.onclick = function(event) {
        let tab = event.target.closest('div');
        // console.log(tab)
        if ("header" == tab.classList[0]) return;
        if (tab.tagName != 'DIV') return;
        document.getElementsByClassName('header-tab-active')[0].classList.remove('header-tab-active')
        document.getElementsByClassName('section-active')[0].classList.remove('section-active')
        tab.classList.add('header-tab-active')
        document.getElementsByClassName(tab.classList[1].split('-')[0])[0].classList.add('section-active')
      };
});