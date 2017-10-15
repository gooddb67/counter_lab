const submit = document.getElementById('submit');
const commentArea = document.getElementById('list');
const commentNode = document.createElement('h3')
const minus = document.getElementById('-')
const plus = document.getElementById('+')
const like = document.getElementById('<3')
const pause = document.getElementById('pause')

let likedHash = {};


submit.addEventListener('click', function(e){
  e.preventDefault()
  let listItem = document.createElement('li')
  const comment = document.getElementById('comment').value;
  const textNode = document.createTextNode(comment);
  listItem.appendChild(textNode);
  document.getElementById('list').appendChild(listItem);
});

window.onload = function() {
  let counter = setInterval(function(){
    let number = parseInt(document.getElementById('counter').innerText);
    number++
    document.getElementById('counter').innerText = number//set the counter back to number

  },1000)
}

  minus.addEventListener('click', function(e){
    let number = parseInt(document.getElementById('counter').innerText);
    number--;
    document.getElementById('counter').innerText = number;
  });

  plus.addEventListener('click', function(e){
    let number = parseInt(document.getElementById('counter').innerText);
    number++;
    document.getElementById('counter').innerText = number;
  });

  like.addEventListener('click', function(e){
    let number = parseInt(document.getElementById('counter').innerText);
    let likeItem = document.createElement('li')
    if(likedHash[number] === undefined){
      likedHash[number] = 1
    }else{
      likedHash[number]+= 1
    }
    let likeText = document.createTextNode(`I liked ${number} ${likedHash[number]} times`);
    likeItem.appendChild(likeText)
    document.querySelector('.likes').appendChild(likeItem)
  });

  let pauseButton = pause.addEventListener('click', function(e){
    like.disabled = true
    plus.disabled = true
    minus.disabled = true

  });


  //need like statement to say "i liked NUMBER this NUMBER of times"
