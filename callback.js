function sum(x,y){
    return x+y;
}

function summsg(clbk,msg,x,y){
    let result=clbk(20,8);
    let final="Byee "+msg+ ", Sum is: "+ result;
    console.log(final);
}

summsg(sum,"Alex",20,8);