// Real-time player count
function fetchPlayerCount() {
  fetch('/api/server-status')
    .then(res => res.json())
    .then(data => {
      document.getElementById('playerCount').textContent = data.onlinePlayers;
      // update chart if needed
    });
}
setInterval(fetchPlayerCount, 10000);

// Real-time news
function fetchLatestNews() {
  fetch('/api/news')
    .then(res => res.json())
    .then(newsArray => {
      const newsList = document.getElementById('newsList');
      newsList.innerHTML = '';
      newsArray.forEach(item => {
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `<span class="news-date">${item.date}</span><span class="news-title">${item.title}</span>`;
        newsList.appendChild(div);
      });
    });
}
fetchLatestNews();
setInterval(fetchLatestNews, 60000);