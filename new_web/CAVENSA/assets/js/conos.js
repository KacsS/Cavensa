var a = [
    ['Cono 8mm', '9/16"'],
    ['Cono 10mm', '5/8"'],
    ['Cono 12mm', '3/4"']
 ];

 var b = [
    ['Cono 5/16"', '9/16"'],
    ['Cono 3/8"', '5/8"'],
    ['Cono 7/16"', '3/4"'],
    ['Cono 1/2"', '3/4"'],
    ['Cono 9/16"', '7/8"'],
    ['Cono 5/8""', '1"'],
    ['Cono 3/4"', '1-1/4"']
 ];

 document.getElementById("b").addEventListener("click", function() {
    updateTableHTML(b)
}, false);
document.getElementById("a").addEventListener("click", function() {
    updateTableHTML(a)
}, false);

 var html = "<table>";
 for(var i in a){
     html += "<tr>";
       for(var j in a[i])
         html += "<td>"+a[i][j]+"</td>";
     html += "</tr>";
 }
 
 html += "</table>";
//  document.write(html); 

function updateTableHTML(myArray) {
    var tableBody = document.getElementById("your-table-body-id");

    // Reset the table
    tableBody.innerHTML = "";

    // Build the new table
    myArray.forEach(function(row) {
        var newRow = document.createElement("tr");
        tableBody.appendChild(newRow);

        if (row instanceof Array) {
            row.forEach(function(cell) {
                var newCell = document.createElement("td");
                newCell.textContent = cell;
                newRow.appendChild(newCell);
            });
        } else {
            newCell = document.createElement("td");
            newCell.textContent = row;
            newRow.appendChild(newCell);
        }
    });
}

updateTableHTML(a)
