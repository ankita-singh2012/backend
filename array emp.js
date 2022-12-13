class Emp{

    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }


    setId(id){
        if(id===''){
            throw 'Id cannot be empty';
        }
        this.id=id;
    }
    setName(name){
        this.name=name;

    }
    
    setSalary(salary){
        this.salary=salary;
    }
}

let emp1 = new Emp();
emp1.setId(101);
emp1.setName('Golu');
emp1.setSalary(45000);
console.log('employee1',emp1);


let emp2 = new Emp();
emp2.setId(102);
emp2.setName('Nikita');
emp2.setSalary(50000);
console.log('employee2',emp2);


let emp3 = new Emp();
emp3.setId(103);
emp3.setName('Ankita');
emp3.setSalary(30000);
console.log('emoplyee3',emp3);

let Employees =[emp1,emp2,emp3];

let sortByNames = Employees.sort(
    (a,b)=>(a.name > b.name) ?1 :(a.name<b.name)?-1:0);
    
console.log('sort by name',sortByNames);


let sortBySalary = Employees.sort(
    (a,b)=>(a.salary > b.salary) ?1 :(a.salary<b.salary)?-1:0);
    
console.log('sort by salary',sortBySalary);



let sortById = Employees.sort(
    (a,b)=>(a.id > b.id) ?1 :(a.id<b.id)?-1:0);
    
console.log('sort by Id',sortById);