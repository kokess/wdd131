const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor"
    },
    {
        id: "fs-1987",
        name: "Flame Sensor"
    },
    {
        id: "ac-2000",
        name: "Air Conditioner"
    },
    {
        id: "sp-2020",
        name: "Solar Panel"
    },
    {
        id: "wb-2023",
        name: "Water Boiler"
    },
    {
        id: "rf-2024",
        name: "Refrigerator"
    }
];

document.addEventListener("DOMContentLoaded", function () {

    const productSelect = document.getElementById("product");

    products.forEach(function (product) {

        const option = document.createElement("option");

        option.value = product.id;

        option.textContent = product.name;

        
        productSelect.appendChild(option);

    });

});
