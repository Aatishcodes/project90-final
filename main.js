
function adduser() {
    player_name_1 = document.getElementById("player_log1").value
    player_name_2 = document.getElementById("player_log2").value

    localStorage.setItem("player_name_1", player_name_1)
    localStorage.setItem("player_name_2", player_name_2)
    window.location.replace("game_page.html")
}