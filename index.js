function dig(num) {
    let area = document.getElementById("area");
    area.value += num;
    console.log("ciao");
}

function reset() {
    let area = document.getElementById("area");
    area.value = "";
}

function cancella() {
    let area = document.getElementById("area");
    area.value = area.value.slice(0, -1);
}

function ris() {
    let area = document.getElementById("area");
    try {
        area.value = eval(area.value);
    } catch (e) {
        area.value = "Errore";
    }
}
