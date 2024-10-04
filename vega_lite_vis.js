var vg_1 = "sample.vg.json";
var vg_2 = "bubble.vg.json";

vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bubble", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    console.log("Bubble chart successfully embedded!");
}).catch(console.error);

