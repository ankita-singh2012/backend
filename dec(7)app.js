let div=document.createElement('div');
div.id='maindiv';
div.className='div1';
let str =document.createTextNode('div wit create element demo');
div.appendChild(str);
document.body.appendChild(div);

let h2=document.createElement('h2');
h2.id='newh';
h2.className='newhead';
h2.innerHTML='New Head';
div.before(h2);

let ul = document.createElement('ul');
ul.id='ul1';
ul.className='ulnew';
div.appendChild(ul);

let arr = ['Home','AboutUs','Content'];
let nodes = arr.map(
    e=>{
        let listitem=document.createElement('li');
        listitem.textContent=e;
        return listitem;
    }
);
ul.append(...nodes);

document.getElementById('ul1').style.color='black';
