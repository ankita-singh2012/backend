fetch("https://jsonplaceholder.typicode.com/users")

.then(res =>res.json())

.then(res =>{console.log(res);

  res.map(user=>console.log(`${user.id}     ${user.name}    ${user.website}` ));})

.catch(function(err){console.log(err)});



fetch("https://jsonplaceholder.typicode.com/users")

.then(function(res){

    return res.json();

})

.then(function(data){

    console.log(data);

})

.catch(function(err){

    console.log(err);

});

async function fetch2(){

    let response = await fetch("https://jsonplaceholder.typicode.com/users/2");

    let data = await response.json();

    console.log(data);

}

fetch2();

let data={
    title:" movie",
    body:"good one",
    user_id:10
}
let post2={
    title:"old movie",
    body:"better one",
    user_id:20
}
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    body: JSON.stringify(data),
    headers: {"Content-type":"application/json"}
}).then(response =>response.json())
    .then(json=>console.log(json))
    .catch(err=>console.log(err))
async function post(){
    let response= await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body: JSON.stringify(post2),
        headers: {"Content-type":"application/json"}
    })
    let data = await response.json()
    console.log(data)
}
post()