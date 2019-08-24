var playlist = {
  "Troye": "Youth"
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { artistName: songTitle })
}