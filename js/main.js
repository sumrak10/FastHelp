document.addEventListener("DOMContentLoaded", () => {
    // let main_button = document.getElementsByClassName('main-button')[0]
    // main_button.addEventListener('click', (e) => {
    //     main_button.classList.add('')
    // })
//     long map(long x, long in_min, long in_max, long out_min, long out_max)
// {
//   return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }
    function map(x, minx,maxx,miny,maxy) {
        return (x - minx) * (maxy - miny) / (maxx-minx) + miny
    }
    function changeIMT(x) {
        if (x <= 16) {
            x = 16;
        }
        else if (x >= 40) {
            x = 40
        }
        let v = map(x,16,40,60,220)
        let p = document.getElementsByClassName('rangecontainer-ball')[0]
        p.style.height = String(v)+"px"
        let c = map(v,60,150,0,255)
        console.log(c)
        if (v >= 150) {
            c = map(v,150,220,0,255)
            p.style.backgroundColor = "rgb("+(c)+","+(255-c)+",0)"
        }
        else {
            p.style.backgroundColor = "rgb("+(255-c)+","+(c)+",0)"
        }
    }
    let slider = document.getElementById("myRangeW");
    let output = document.getElementById("data-w");
    output.innerHTML = "Рост: "+slider.value;
    slider.oninput = function() {
        output.innerHTML = "Рост: "+this.value;
        let h = Number(document.getElementById("data-h").innerHTML.split(': ')[1])
        let w = Number(document.getElementById("data-w").innerHTML.split(': ')[1])
        changeIMT(h / ((w/100)*(w/100)))
    }
    let slider2 = document.getElementById("myRangeH");
    let output2 = document.getElementById("data-h");
    output2.innerHTML = "Вес: "+slider2.value;
    slider2.oninput = function() {
        output2.innerHTML = "Вес: "+this.value;
        let h = Number(document.getElementById("data-h").innerHTML.split(': ')[1])
        let w = Number(document.getElementById("data-w").innerHTML.split(': ')[1])
        changeIMT(h / ((w/100)*(w/100)))
    }

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