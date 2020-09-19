function power(i,n){
    let p = i;
    while(n>1){
        i*=p;
        n--;
    }
    return i;
}

alert(power(2,10));