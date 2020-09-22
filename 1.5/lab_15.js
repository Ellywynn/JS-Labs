let matrix = [[10,20,30,40,50],
              [1,3,5,12,5],
              [4,6,0,-3,-2],
              [1,-19,39,28,98],
              [8,7,20,-2,-5]];

for(let i=0; i<5; i++){
    for(let j=0; j<5;j++){
        let element = matrix[i][j];
        if(element>=-5 && element<=7){
            document.write("matrix["+i+"]["+j+"] = " + element + "<br>");
        }
    }
}