$.extend(true, $.fn.dataTable.defaults, {
    lengthMenu: [
        [10, 25, 50, -1],
        ["10", "25", "50", "All"]
    ],
    "dom": '<"row justify-content-between"Bf><"mt-2"l><rt><"row justify-content-between mt-2"ip>',
    "select": {
        "style": "multi",
        "selector": ".select-checkbox"
    },
    "buttons": [{
            "extend": "collection",
            "text": "Export",
            "buttons": [{
                    "extend": "copy",
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
                    "exportOptions": {
                        "columns": ":not(:last-child)"
                    },
                },
            ],
        },
        {
            "extend": "collection",
            "text": "Select",
            "className": "ml-1",
            "buttons": [{
                    "extend": "selectAll",
                },
                {
                    "extend": "selectNone",
                },
            ]
        },
    ],
});