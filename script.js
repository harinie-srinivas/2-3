function add() {
    let n = name.value;
    let r = roll.value;
    let d = dept.value;

    if(n == "" || r == "" || d == "") {
        alert("Fill all fields");
        return;
    }

    let t = document.getElementById("table");
    t.innerHTML += `<tr>
    <td>${n}</td><td>${r}</td><td>${d}</td>
    </tr>`;

    name.value = "";
    roll.value = "";
    dept.value = "";
}