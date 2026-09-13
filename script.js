function generatePSD(){


let builder =
document.getElementById("builder").value;


let project =
document.getElementById("project").value;


let headline =
document.getElementById("headline").value;


let property =
document.getElementById("property").value;


let cta =
document.getElementById("cta").value;


let phone =
document.getElementById("phone").value;


let address =
document.getElementById("address").value;


let rera =
document.getElementById("rera").value;



let script = `


var doc = app.documents.add(
1080,
1350,
72,
"Luxury Real Estate Ad"
);



function addText(name,text,size,x,y){

var layer = doc.artLayers.add();

layer.name=name;

layer.kind=LayerKind.TEXT;

layer.textItem.contents=text;

layer.textItem.size=size;

layer.textItem.position=[x,y];

}



//
// BACKGROUND
//

var bg = doc.artLayers.add();

bg.name="01_BACKGROUND_SKY";



var ground = doc.artLayers.add();

ground.name="02_GROUND";



//
// BUILDING
//

var building = doc.artLayers.add();

building.name="03_BUILDING_IMAGE_PLACEHOLDER";


//
// FAMILY
//

var family = doc.artLayers.add();

family.name="04_FAMILY_IMAGE_PLACEHOLDER";


//
// BRAND
//

addText(
"05_BUILDER_NAME",
"${builder}",
32,
60,
100
);



//
// PROJECT
//

addText(
"06_PROJECT_NAME",
"${project}",
80,
600,
180
);



addText(
"07_HEADLINE",
"${headline}",
55,
600,
280
);



addText(
"08_PROPERTY",
"${property}",
25,
600,
350
);




//
// CTA
//

addText(
"09_CTA",
"${cta}",
30,
650,
780
);




//
// FOOTER
//

addText(
"10_PHONE",
"${phone}",
20,
70,
1280
);


addText(
"11_ADDRESS",
"${address}",
18,
400,
1250
);


addText(
"12_RERA",
"RERA : ${rera}",
18,
850,
100
);





//
// PLACEHOLDERS
//

var logo=doc.artLayers.add();
logo.name="13_LOGO_PLACEHOLDER";


var qr=doc.artLayers.add();
qr.name="14_QR_PLACEHOLDER";



`;



let config={

"environment":{

"theme":2,

"panels":[2,5,9]

},

"script":script

};



let url =
"https://www.photopea.com#"+
encodeURIComponent(JSON.stringify(config));



window.open(url,"_blank");


}
