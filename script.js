function showPopup(player) {

    document.getElementById('playerInfo').innerHTML = '<p>' + player + '</p>';
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}
