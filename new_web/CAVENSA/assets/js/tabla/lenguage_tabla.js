$(document).ready(function () {
    $('#tablax').DataTable({
        language: {
            processing: "Tratamiento en curso...",
            search: "Buscar por mm&nbsp;:",
            lengthMenu: "Agrupar de _MENU_ items",
            info: "Mostrando el registro _START_ al _END_ de un total de _TOTAL_ registro",
            infoEmpty: "No existen datos.",
            infoFiltered: "(filtrado de _MAX_ elementos en total)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron datos con tu busqueda",
            emptyTable: "No hay datos disponibles en la tabla.",
            paginate: {
                first: "Primero",
                previous: "<- ",
                next: " ->",
                last: "Ultimo"
            },
            aria: {
                sortAscending: ": active para ordenar la columna en orden ascendente",
                sortDescending: ": active para ordenar la columna en orden descendente"
            }
        },
        scrollY: 350,
        lengthMenu: [ [22, 25, -1], [10, 25, "All"] ],
    });
});


$(document).ready(function () {
    $('#tablay').DataTable({
        language: {
            processing: "Tratamiento en curso...",
            search: "Buscar por pulgada&nbsp;:",
            lengthMenu: "Agrupar de _MENU_ items",
            info: "Mostrando el registro _START_ al _END_ de un total de _TOTAL_ registro",
            infoEmpty: "No existen datos.",
            infoFiltered: "(filtrado de _MAX_ elementos en total)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron datos con tu busqueda",
            emptyTable: "No hay datos disponibles en la tabla.",
            paginate: {
                first: "Primero",
                previous: "<- ",
                next: " ->",
                last: "Ultimo"
            },
            aria: {
                sortAscending: ": active para ordenar la columna en orden ascendente",
                sortDescending: ": active para ordenar la columna en orden descendente"
            }
        },
        scrollY: 350,
        lengthMenu: [ [21, 25, -1], [10, 25, "All"] ],
    });
});