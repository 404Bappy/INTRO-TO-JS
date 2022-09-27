document.getElementById('Add-Border').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid red';

})

document.getElementById('Add-Background').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
for(const friend of friends){
    friend.style.backgroundColor = 'lightgreen';
}

})


 