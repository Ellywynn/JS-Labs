function fact(n){
    if(n === 0 || n === 1){
        return 1;
    }
    let f = 1;
    while(n>0){
        f*=n;
        n--;
    }
    return f;
}

alert(fact(10));