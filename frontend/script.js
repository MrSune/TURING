const socket = io();

// Generate a random username
const username = `User${Math.floor(Math.random() * 1000)}`;

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('input').value;
    if (msg) {
        socket.emit('chat message', `${username}: ${msg}`); // Send message with username
        document.getElementById('input').value = '';
    }
    return false;
});

socket.on('chat message', function(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    document.getElementById('messages').appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
