let rows = 10, cols = 10;
document.write("<table border=\"1\">");
for (let i = 1; i <= 10; i++) {
    if (i == 1) {
        document.write("<tr bgcolor=\"red\">");
    } else {
        document.write("<tr>");
    }
    for (let j = 1; j <= 10; j++) {
        if (j == 1) {
            document.write("<td bgcolor=\"red\">" + i * j + "</td>");
        } else {
            document.write("<td>" + i * j + "</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>")