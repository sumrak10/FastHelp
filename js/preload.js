function createNote() {
    let sss = document.getElementsByClassName('select-style')[0].options.selectedIndex;
    console.log(document.getElementsByTagName('option')[sss].options.selectedIndex;)

    let div = document.createElement('div');
    div.className = "note";
    let time = ''
    let date = ''
    let dir = ''
    let addr = ''
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