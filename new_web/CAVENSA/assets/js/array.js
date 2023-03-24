var a = [
    ['x40 x50 x60 x80 x100 x120 x150', '1.25'],
    ['x40 x50 x60 x80 x100 x110', '1.25'],
    ['x40 x50 x60 x80 x100 x120 x150', '1.50'],
    ['x40 x50 x60 x80 x100', '1.25'],
    ['x40 x50 x60 x80 x100', '1.50'],
    ['x40 x50 x60 x80 x100 x120 x150', '1.75'],
    ['x70', '1.50']
 ];

 var b = [
    ['Espárrago 5/16"', 'x2" x2-1/2" x3" x3-1/2" x4" x5"', 'NC-NF'],
    ['Espárrago 3/8"', 'x2" x2-1/2" x3" x3-1/2" x4" x4-1/2"', 'NC-NF'],
    ['Espárrago 7/16"', 'x2" x2-1/2" x3" x3-1/2" x4" x4-1/2"', 'NC-NF'],
    ['Espárrago 1/2"', 'x2" x2-1/2" x3" x3-1/2" x4" x5"', 'NC-NF'],
    ['Espárrago 9/16"', 'x2" x2-1/2" x3" x3-1/2" x4" x5"', 'NC-NF'],
    ['Espárrago 5/8"', 'x2" x2-1/2" x3" x3-1/2" x4" x4-1/2" x5" x3"NC x3"NF', 'NC-NF'],
    ['Espárrago 3/4"', 'x2-1/2" x3" x3-1/2" x4" x5"', 'NC-NF'],
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


// ['Espárrago 8','x40 x50 x60 x80 x100 x120 x150', '1.25'],
//     ['Espárrago 10 x 40', '1.50'],
//     ['Espárrago 10 x 50', '1.50'],
//     ['Espárrago 10 x 60', '1.50'],
//     ['Espárrago 10 x 80', '1.50'],
//     ['Espárrago 10 x 100', '1.50'],
//     ['Espárrago 10 x 120', '1.50'],
//     ['Espárrago 10 x 150', '1.50'],
//     ['Espárrago 10 x 40', '1.25'],
//     ['Espárrago 10 x 50', '1.25'],
//     ['Espárrago 10 x 60', '1.25'],
//     ['Espárrago 10 x 80', '1.25'],
//     ['Espárrago 10 x 100', '1.25'],
//     ['Espárrago 10 x 110', '1.25'],
//     ['Espárrago 12 x 40', '1.75'],
//     ['Espárrago 12 x 50', '1.75'],
//     ['Espárrago 12 x 60', '1.75'],
//     ['Espárrago 12 x 80', '1.75'],
//     ['Espárrago 12 x 100', '1.75'],
//     ['Espárrago 12 x 120', '1.75'],
//     ['Espárrago 12 x 150', '1.75'],
//     ['Espárrago 12 x 40', '1.25'],
//     ['Espárrago 12 x 50', '1.25'],
//     ['Espárrago 12 x 60', '1.25'],
//     ['Espárrago 12 x 80', '1.25'],
//     ['Espárrago 12 x 100', '1.25'],
//     ['Espárrago 12 x 40', '1.50'],
//     ['Espárrago 12 x 50', '1.50'],
//     ['Espárrago 12 x 60', '1.50'],
//     ['Espárrago 12 x 80', '1.50'],
//     ['Espárrago 12 x 100', '1.50'],
//     ['Espárrago 18 x 70', '1.50']




// var b = [
//     ['Espárrago 5/16 x 2"', 'NC-NF'],
//     ['Espárrago 5/16 x 2-1/2"', 'NC-NF'],
//     ['Espárrago 5/16 x 3"', 'NC-NF'],
//     ['Espárrago 5/16 x 3-1/2"', 'NC-NF'],
//     ['Espárrago 5/16 x 4"', 'NC-NF'],
//     ['Espárrago 5/16 x 5"', 'NC-NF'],
//     ['Espárrago 3/8 x 2"', 'NC-NF'],
//     ['Espárrago 3/8 x 2-1/2"', 'NC-NF'],
//     ['Espárrago 3/8 x 3"', 'NC-NF'],
//     ['Espárrago 3/8 x 3-1/2"', 'NC-NF'],
//     ['Espárrago 3/8 x 4"', 'NC-NF'],
//     ['Espárrago 3/8 x 4-1/2"', 'NC-NF'],
//     ['Espárrago 7/16 x 2"', 'NC-NF'],
//     ['Espárrago 7/16 x 2-1/2"', 'NC-NF'],
//     ['Espárrago 7/16 x 3"', 'NC-NF'],
//     ['Espárrago 7/16 x 3-1/2"', 'NC-NF'],
//     ['Espárrago 7/16 x 4"', 'NC-NF'],
//     ['Espárrago 7/16 x 4-1/2"', 'NC-NF'],
//     ['Espárrago 1/2 x 2"', 'NC-NF'],
//     ['Espárrago 1/2 x 2-1/2"', 'NC-NF'],
//     ['Espárrago 1/2 x 3"', 'NC-NF'],
//     ['Espárrago 1/2 x 3-1/2"', 'NC-NF'],
//     ['Espárrago 1/2 x 4"', 'NC-NF'],
//     ['Espárrago 1/2 x 5"', 'NC-NF'],
//     ['Espárrago 9/16 x 2"', 'NC-NF'],
//     ['Espárrago 9/16 x 2-1/2"', 'NC-NF'],
//     ['Espárrago 9/16 x 3"', 'NC-NF'],
//     ['Espárrago 9/16 x 3-1/2"', 'NC-NF'],
//     ['Espárrago 9/16 x 4"', 'NC-NF'],
//     ['Espárrago 9/16 x 5"', 'NC-NF'],
//     ['Espárrago 5/8 x 2"', 'NC-NF'],
//     ['Espárrago 5/8 x 2-1/2"', 'NC-NF'],
//     ['Espárrago 5/8 x 3"', 'NC-NF'],
//     ['Espárrago 5/8 x 3-1/2"', 'NC-NF'],
//     ['Espárrago 5/8 x 4"', 'NC-NF'],
//     ['Espárrago 5/8 x 4-1/2"', 'NC-NF'],
//     ['Espárrago 5/8 x 5"', 'NC-NF'],
//     ['Espárrago 5/8 x 3" NC', 'NC-NF'],
//     ['Espárrago 5/8 x 3" NF', 'NC-NF'],
//     ['Espárrago 3/4 x 2-1/2"', 'NC-NF'],
//     ['Espárrago 3/4 x 3"', 'NC-NF'],
//     ['Espárrago 3/4 x 3-1/2"', 'NC-NF'],
//     ['Espárrago 3/4 x 4"', 'NC-NF'],
//     ['Espárrago 3/4 x 5"', 'NC-NF']
//  ];