let prime= function(n){
    let arr=[];
    for(i=0;i<=n;i++)arr[i]=0;
    for(i=2;i<=n;i++){
        for(j=2*i;j<=n;j+=i){
            arr[j]=1;

        }
    }
    console.log(`prime no till ${n} arr:-`)
    for(i=2;i<=n;i++){
        if(arr[i]==0) console.log(i);

    }
}
prime(20)