let rows = 10, cols = 10;
document.write("<table border=\"1\">");
for(let i=1; i<=rows; i++){
    document.write("<td>" + i)
    for(let j=i+1; j<=cols; j++){
        document.write("<tr>" + j + "</tr>");
    }
    document.write("</td>")
}
document.write("</table>")