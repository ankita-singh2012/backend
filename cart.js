let carts={
    addItem:function(name){
        console.log("Adding Item" +name+ "to cart");

    },
    removeItem:function(){
        console.log("removing item from cart")
    }

}
carts.checkout=function() {
    console.log("checking out");

}
carts.addItem("lap");
carts.removeItem();
carts.checkout();
