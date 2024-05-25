var htmlres="";
var container= document.getElementById('container');
console.log(container);
var posts= document.getElementById('posts');
console.log(posts);
var userID='';
async function getUsers() {
    var p = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(p); 
    var data = await p.json();
    console.log(data);
    return data;
}
var userdata = getUsers();
userdata.then(function(data){
  // var txt= data[i].name;
  for(i=0;i<data.length;i++){ 
    container.innerHTML+=`<div> ${data[i].name} </div>`
    userID = data[i].id;
    console.log(userID);
  }
})
.catch(function(error){
  throw'there is an error'
})
container.addEventListener('click', async function getPosts(){ 
     
     var p2 = await fetch("https://jsonplaceholder.typicode.com/posts?");
      console.log(p2); 
      var data2 = await p2.json();
      console.log(data2);
      debugger;
      for(j=0;j<data2.length;j++){
      if(userID==data2[j].id)
{
      var htmlpost='';
      htmlpost += `<div>${data2[j].title}</div>`
      console.log(data2[j].title);
      posts.innerHTML =htmlpost;
}
}
})
  


  
