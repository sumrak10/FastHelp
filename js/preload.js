function createNote() {
    var audio = new Audio('../media/sounds/notification.mp3');
    var sound = new Howl({
        src: ['../media/sounds/notification.mp3'],
        onplay: function () {
          alert('Запись добавлена! Проверьте личный кабинет');
        }
      });
    sound.play();
    // alert("Запись добавлена! Проверьте личный кабинет.")
    let sss = document.getElementsByClassName('select-style')[0].options.selectedIndex;
    let div = document.createElement('div');
    div.className = "note";
    let time = document.getElementsByClassName('input-data')[0].value
    let date = document.getElementsByClassName('input-data')[1].value
    let dir = document.getElementsByTagName('option')[sss].innerHTML
    let addr = document.getElementsByClassName('input-data')[2].value
    let ihtml = `
    <div class="note-data">
                <b>Время:</b>
                <p>`+time+`</p>
            </div>
            <div class="note-data">
                <b>Дата:</b>
                <p>`+date+`</p>
            </div>
            <div class="note-data">
                <b>Направление:</b>
                <p>`+dir+`</p>
            </div>
            <div class="note-data">
                <b>Адрес:</b>
                <p>`+addr+`</p>
            </div>
            `
    div.innerHTML = ihtml
    document.getElementsByClassName('cabinet-notes')[0].append(div);
}
// document.getElementsByTagName('sub').onclick = createNote('12^22','23.23.23','dfdf','ddddddd')