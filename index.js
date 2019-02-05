
var lorem20="Eligendi aut sed voluptas rerum quaerat asperiores aliquam iste natus, sunt praesentium.";
var two=document.getElementById("two");
var three=document.getElementById("three");


let abouts=cEle(
    "div",[
        cEle("h3",["Introducing Mark."]),
        cEle("p",lorem20)
    ]);
abouts.id="abouts";
let abouts_t=["Eligendi aut sed","star","Aliquam iste natus","heart","Sunt praesentium","moon"]
for (let i=0;i<abouts_t.length;i+=2){
let h6=cEle("h6",abouts_t[i]); 
let div1=cEle("div",[h6,lorem20]);
div1.id=abouts_t[i+1];
abouts.appendChild(div1);
}
two.appendChild(abouts);
/////////////
let features=cEle("div");
features.id="features";
let features_t=["Performance","bp","Customization","ac","Fast Loading","lf","Clean Code","cc","Use Anywhere","ua"]
for (let i=0;i<features_t.length;i+=2){
let h5=cEle("h5",features_t[i]); 
let div1=cEle("div",[h5,lorem20]);
div1.id=features_t[i+1];
features.appendChild(div1);
}

three.appendChild( cEle("h3",["Discover why everybody likes Mark."]));
three.appendChild(features);
