function fetchLeaderboard() {
  fetch('/api/leaderboard')
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById('leaderboardRows');
      tbody.innerHTML = '';
      data.forEach((player, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${idx+1}</td><td>${player.name}</td><td>${player.points}</td><td>${player.wins}</td>`;
        tbody.appendChild(tr);
      });
    });
}
fetchLeaderboard();
setInterval(fetchLeaderboard, 60000);