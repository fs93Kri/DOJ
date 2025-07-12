
async function loadStatus() {
    const res = await fetch('doj_status.json');
    const data = await res.json();
    const list = document.getElementById('statusList');
    data.forEach(person => {
        const li = document.createElement('li');
        li.textContent = person.name + ' – ' + person.role + ' – ' + (person.online ? '🟢 Online' : '🔴 Offline');
        list.appendChild(li);
    });
}

function searchCase() {
    const input = document.getElementById('caseInput').value.trim();
    if (input) {
        alert('Szukana sprawa: ' + input); // Do zastąpienia przekierowaniem
    }
}

window.onload = loadStatus;
