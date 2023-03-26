///descripcion, medida, rosca

//cambiar medida por tipo de rosca, y donde dice rosca debe decir material

const hexagonal = [
    ['Hex. 9mm', '1,25', '9/16"']
];

const hexagonalpg = [
    ['Tuerca para Guía 3/8"', '24H','5/8"'],
    ['Tuerca para Guía 7/16"', '20H', '3/4"'],
    ['Tuerca para Guía 1/2"', '20H', '3/4"']
];

const baja = [
    ['Tuerca Plana Baja 12mm', '1,00 - 1,25', '3/4"'],
    ['Tuerca Plana Baja 14mm', '1,00 - 1,50', '7/8"'],
    ['Tuerca Plana Baja 16mm ', '1,00 - 1,50', '1"'],
    ['Tuerca Plana Baja 18mm', '1,00 - 1,50', '1"']
];

const bajapg = [
    ['Tuerca Plana Baja 11/16"', '16H - 18H - 20H', '1"'],
    ['Tuerca Plana Baja 3/4"', '16H - 20H', '1-1/16"'],
    ['Tuerca Plana Baja 3/16"', '16H - 20H', '1-1/16"']
];

const ranurada = [
    ['Tuerca Ranurada 16mm', '1,00', '1"'],
    ['Tuerca Ranurada 18mm', '1,50', '1"'],
    ['Tuerca Ranurada 19mm', '1,50', '1-1/16"'],
    ['Tuerca Ranurada 20mm', '1,50', '1-1/16"'],
    ['Tuerca Ranurada 22mm', '1,50', '1-1/4"'],
    ['Tuerca Ranurada 24mm', '1,50', '1-3/8"']
];

const ranuradapg = [
    ['Tuerca Ranurada 9/16"', '18H', '1"'],
    ['Tuerca Ranurada 11/16"', '16H - 18H - 20H', '1"'],
    ['Tuerca Ranurada 3/4"', '16H - 20H', '1-1/16"'],
    ['Tuerca Ranurada 13/16"', '18H - 20H', '1-1/16"'],
    ['Tuerca Ranurada 7/8"', '16H - 20H', '1-1/4"'],
    ['Tuerca Ranurada 1"', '14H', '1-1/2"']
];

const conica = [
    ['Tuerca Cónica 14mm','1,50','1-1/16"'],  
    ['Tuerca Cónica 16mm','1,50','1"'],  
    ['Tuerca Cónica 18mm','1,50','1-1/8"'],  
];

const conicapg = [
    ['Tuerca Cónica 1/2"','20H','3/4"'],  
    ['Tuerca Cónica 3/4"','16H','1-1/2"'], 
    ['Tuerca Cónica 5/8"','18H','1-1/16"'],
    ['Tuerca Cónica 9/16"','18H','1-1/16"'],  
    ['Tuerca Cónica 11/16"','16H','1-1/8"']  
];

const pinon = [
    ['Tuerca Seguridad Piñón 18mm', '1,50', '1"'],
    ['Tuerca Seguridad Piñón 19mm', '1,50', '1-1/16"'],
    ['Tuerca Seguridad Piñón 20mm', '1,50', '1-1/16"'],
    ['Tuerca Seguridad Piñón 22mm', '1,50', '1-1/4"'],
    ['Tuerca Seguridad Piñón 24mm', '1,50', '1-3/8"']
];

const pinonpg = [
    ['Tuerca Seguridad Piñón 3/4"', '16H', '1-1/16"'],
    ['Tuerca Seguridad Piñón 7/8"', '14H - 20H', '1-1/4"']
];

const botella = [
    ['Tuerca Seguridad Tipo Botella 16mm', '1,50 - 1,50 L', '13/16"'],
    ['Tuerca Seguridad Tipo Botella 18mm', '1,50 - 1,50 L', '1-1/16"'],
    ['Tuerca Seguridad Tipo Botella 19mm', '1,50', '1-1/16"'],
    ['Tuerca Seguridad Tipo Botella 20mm', '1,50', '1-1/16"'],
    ['Tuerca Seguridad Tipo Botella 22mm', '1,50', '1-1/4"'],
    ['Tuerca Seguridad Tipo Botella 24mm', '1,50', '1-3/8"'],
    ['Tuerca Seguridad Tipo Botella 26mm', '1,50', '1-3/8"'],
];

const listar = ()=> {
    let selectedValue = document.getElementById("list").value;

    document.getElementById("b").addEventListener("click", function() {
        if(selectedValue == 'hexagonal') {
            updateTableHTML(hexagonalpg)
        } else if (selectedValue == 'baja') {
            updateTableHTML(bajapg)
        } else if (selectedValue == 'ranurada') {
            updateTableHTML(ranuradapg)
        } else if (selectedValue == 'conica') {
            updateTableHTML(conicapg)
        } else if (selectedValue == 'pinon') {
            updateTableHTML(pinonpg)
        } else if(selectedValue == 'botella') {
            updateTableHTML(botella)
        }
    }, false);

    document.getElementById("a").addEventListener("click", function() {
        if(selectedValue == 'hexagonal') {
            updateTableHTML(hexagonal)
        } else if (selectedValue == 'baja') {
            updateTableHTML(baja)
        } else if(selectedValue == 'ranurada') {
            updateTableHTML(ranurada)
        } else if(selectedValue == 'conica') {
            updateTableHTML(conica)
        } else if(selectedValue == 'pinon') {
            updateTableHTML(pinon)
        } else if(selectedValue == 'botella') {
            updateTableHTML(botella)
        }
    }, false);

    if(selectedValue == 'hexagonal'){
        updateTableHTML(hexagonal);
    } else if(selectedValue == 'baja') {
        updateTableHTML(baja)
    } else if(selectedValue == 'ranurada') {
        updateTableHTML(ranurada)
    } else if(selectedValue == 'conica') {
        updateTableHTML(conica)
    } else if(selectedValue == 'pinon') {
        updateTableHTML(pinon)
    }
    else if(selectedValue == 'botella') {
        updateTableHTML(botella)
    }
}

document.getElementById("b").addEventListener("click", function() {
    updateTableHTML(b)
}, false);
document.getElementById("a").addEventListener("click", function() {
    updateTableHTML(a)
}, false);

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

listar();