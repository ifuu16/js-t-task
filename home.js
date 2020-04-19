function parameter(int){
 let output = [];
 for(let i = 1; i <= 100; i++){
     if(i % 2 == 0){
       output += i + "yu,"  
     }
     else  if(i % 3 == 0){
        output += i + "gi,"  
      }
      else  if(i % 5 == 0){
        output += i + "oh,"  
      }
      else  if(i % 2 && i % 3 == 0){
        output += i + "yu-gi,"
      }
      else  if(i % 2 && i % 3 && i % 5 == 0){
        output += i + "yu-gi-oh,"  
      }
      else {
          output = i;
      }
    
    }
    console.log(output);
      
    return(output)
}
output(int);