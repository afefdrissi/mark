function cEle(ele,childrenArrayOrstring){
    let element=document.createElement(ele);
    if (arguments.length==2){
                if (Array.isArray(arguments[1])){
            for (let i=0;i<arguments[1].length;i++){
                if (typeof childrenArrayOrstring[i]!="string"){
                    element.appendChild(arguments[1][i]);

                }
                else{
                    let textnode=document.createTextNode(childrenArrayOrstring[i]);
                    element.appendChild(textnode); 
                }
            }
            }
            else {
                let textnode=document.createTextNode(childrenArrayOrstring);
                element.appendChild(textnode);
            }

    }

    
    return element;
}
//var body=document.getElementById("body");
var div1=cEle("v");
var span=cEle("span");
var text=cEle("text","hello")
var div2=cEle("div",[div1,span,text]);
//body.appendChild(div2);
//////////
