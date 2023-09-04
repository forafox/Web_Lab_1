function clearTable() {
    $('#results').html(`<tr id="heads">
        <th width="10%">X</th>
        <th width="10%">Y</th>
        <th width="10%">R</th>
        <th width="20%">Текущее время</th>
        <th width="30%">Время работы скрипта</th>
        <th width="40%">Результат</th>
    </tr> `);

    // localStorage.clear();
}