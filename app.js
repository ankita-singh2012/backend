let btn = document.getElementById("btn");
btn.addEventListener('click',loadData);
function loadData(){
    const xhr= new XMLHttpRequest();
    xhr.open('Get','data.txt',true);
    xhr.onprogress = function(){
        xhr.onprogress = function(){
            console.log('ready state',xhr.readyState);

        }
        xhr.onload = function(){
            console.log('readyState',xhr.readyState);
            document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;

        }
    }
    xhr.onerror = function(){
        console.log('Request has some errors');

    }
    xhr.send();
    
}