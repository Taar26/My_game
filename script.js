let audio;
let name_track;
let display;
let playlist = [
    'https://zvukipro.com/uploads/files/2019-09/1568975988_si_intro.mp3',
    'https://zvukipro.com/uploads/files/2019-09/1568976002_si_closing.mp3',
    'https://allsoundsaround.com/wp-content/uploads/2020/12/kot-v-meshke-5570.mp3',
    'https://zvukipro.com/uploads/files/2019-09/1568976011_si_categories.mp3',
    'https://zvukipro.com/uploads/files/2019-09/1568976004_si_choice.mp3',
    'https://zvukipro.com/uploads/files/2019-09/1568975953_si_auction.mp3',
    'https://zvukipro.com/uploads/files/2019-09/1568976023_si_noanswer.mp3',
    'https://zvukipro.com/uploads/files/2019-09/1568975934_si_round.mp3',
    'https://zvukipro.com/uploads/files/2019-09/1568975948_si_roundend.mp3',
    'https://zvukipro.com/uploads/files/2019-09/1568976012_si_think.mp3',
    'https://zvukipro.com/uploads/files/2019-09/1568976875_fanfare.mp3'
];

intro.onclick = function() {
    audio.src = playlist[0];
    document.getElementById("h_track").innerHTML = "Вступление"
}
closing.onclick = function() {
    audio.src = playlist[1];
    document.getElementById("h_track").innerHTML = "Закрытие"
}
cat.onclick = function() {
    audio.src = playlist[2];
    document.getElementById("h_track").innerHTML = "Кот в мешке"
}
category.onclick = function() {
    audio.src = playlist[3];
    document.getElementById("h_track").innerHTML = "Категории"
}
choice.onclick = function() {
    audio.src = playlist[4];
    document.getElementById("h_track").innerHTML = "Выбор"
}
auction.onclick = function() {
    audio.src = playlist[5];
    document.getElementById("h_track").innerHTML = "Аукцион"
}
noanswer.onclick = function() {
    audio.src = playlist[6];
    document.getElementById("h_track").innerHTML = "Нет ответа"
}
round.onclick = function() {
    audio.src = playlist[7];
    document.getElementById("h_track").innerHTML = "Начало раунда"
}
roundend.onclick = function() {
    audio.src = playlist[8];
    document.getElementById("h_track").innerHTML = "Конец раунда"
}
think.onclick = function() {
    audio.src = playlist[9];
    document.getElementById("h_track").innerHTML = "Размышления"
}
fanfare.onclick = function() {
    audio.src = playlist[10];
    document.getElementById("h_track").innerHTML = "Фанфары"
}

window.onload = function() {
	audio = document.getElementById("audioplayer");
};

function play() {
    audio.play();
}

function pause() {
    audio.pause();
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function progressUpdate() {
	// Устанавливаем позицию воспроизведения
    let positionBar = document.getElementById("positionBar");
    positionBar.style.width = (audio.currentTime / audio.duration * 100)  + "%";
	
	// Заполняем текстовую надпись текущим значением
	displayStatus = document.getElementById("displayStatus");
    displayStatus.innerHTML = (Math.round(audio.currentTime)) + " сек";
}