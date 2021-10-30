$.extend(true, $.fn.dataTable.defaults, {
    lengthMenu: [
        [10, 25, 50, -1],
        ["10", "25", "50", "Todos"]
    ],
    "dom": '<"row justify-content-between"Bf><"mt-2"l><rt><"row justify-content-between mt-2"ip>',
    "select": {
        "style": "multi",
        "selector": ".select-checkbox"
    },
    "buttons": [{
            "extend": "collection",
            "text": "Exportar",
            "buttons": [{
                    "extend": "copy",
                    "text": "Copiar",
                    "exportOptions": {
                        "modifier": {
                            "page": "all",
                            "search": "none",
                        },
                        "columns": ":not(:last-child)"
                    },
                },
                {
                    "extend": "excel",
                    "text": "Excel",
                    "exportOptions": {
                        "modifier": {
                            "page": "all",
                            "search": "none",
                        },
                        "columns": ":not(:last-child)"
                    },
                },
                {
                    "extend": "csv",
                    "text": "CSV",
                    "exportOptions": {
                        "modifier": {
                            "page": "all",
                            "search": "none",
                        },
                        "columns": ":not(:last-child)"
                    },
                },
                {
                    "extend": "pdfHtml5",
                    "text": "PDF",
                    "exportOptions": {
                        "columns": ":not(:last-child)"
                    },
                },
            ],
        },
        {
            "extend": "collection",
            "text": "Seleccionar",
            "className": "ml-1",
            "buttons": [{
                    "extend": "selectAll",
                    "text": "Seleccionar todo",
                },
                {
                    "extend": "selectNone",
                    "text": "Deseleccionar"
                },
            ]
        },
    ],
    "language": {
        "sProcessing": "Procesando...",
        "sLengthMenu": "Visualizar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst": "[",
            "sLast": "]",
            "sNext": "»",
            "sPrevious": "«"
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    },
});