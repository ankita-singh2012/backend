const emp= {
    empId:'2143716',
    fName:'Ankita',
    lName:'Singh',
    dept:{
        deptName:'FSEjava',
        deptId:'123',
        mangerId:'123456',

    },
   project:{
    pId:12367865,
    title:"About project",
    started:false,
   },
   salary:150000,
   doj:new Date("2024-08-25"),
   serviceYears:function(){
    return(2022-this.doj.getFullyYear());
   } 
}
for(let i in emp){
    if((i==="project")||(i==="department")){
        for(let j in emp[i]){
            console.log(`${emp[i][j]}`);

        }
    }
    else{
        console.log(`${i} : ${emp[i]}`);
    }
}
