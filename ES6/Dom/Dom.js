document.getElementById('Add-Border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid red';

})

document.getElementById('Add-Background').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightgreen';
    }

})

document.getElementById('Add-Friend').addEventListener('click', function () {
    const addFriend = document.getElementById('friend-container');
    const addFriendDiv = document.createElement('div');
    addFriendDiv.classList.add('friend')
    addFriendDiv.innerHTML = `
     <h3 class="friend-name">New friend</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    `;

    addFriend.appendChild(addFriendDiv);
})


