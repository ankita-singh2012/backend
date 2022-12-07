class employee{
    constructor(name,id){
        this.name=name;
        this.id=id;

    }
    get name(){
        return this._name;

    }
    set name(val){
        this._name=val;

    }
    get id(){
        return this._id;

    }
    set id(val){
        this._id=val;

    }
    display=()=>{
        console.log(`name is:${this.name} and id is:${this.id}`);

    }
}
let emp1 = new employee('Ankita',123);
emp1.display();
let emp2=new employee('golu',456);
emp2.display();