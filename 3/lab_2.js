let s = 0;
for(let i=1; i<=15; i++)
{
    if(i !== 5 || i !== 7){
        s+=i;
    }else{
        continue;
    }
}

document.write(s);