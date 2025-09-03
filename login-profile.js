function loginUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById('loginBox').style.display = 'none';
      document.getElementById('profileBox').style.display = '';
      document.getElementById('profileName').textContent = data.user.name;
      document.getElementById('profileAvatar').src = data.user.avatar;
    } else {
      alert('Login failed');
    }
  });
}

function logoutUser() {
  document.getElementById('loginBox').style.display = '';
  document.getElementById('profileBox').style.display = 'none';
}