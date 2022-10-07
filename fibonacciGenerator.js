var output=[];
function fibonacciGenerator(n){
    if (n==1){
        output.push(0)
        return console.log(output);
    }
    else if (n==2){
        output.push(0,1)
        return console.log(output);
    }
    else{
        output=[0,1];
        for (i=3;i<=n;i++){
            sum=output[output.length-2]+output[output.length-1];
            output.push(sum); 
        }
        return console.log(output);
    }
}

fibonacciGenerator(prompt(n="Enter the number of items"));