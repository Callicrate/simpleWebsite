function hello(name){
    console.log("Hello " + name);
 }
 hello('node.js');

let original_page = 'https://gist.githubusercontent.com/modalsoul/3868393/raw/0d504c31b183e4efc52dbaea14ced04c69d6656c/helloworld.js';


function loader(location){
    GM.xmlHttpRequest({
    method: "GET",
    url: location+'?'+Math.random(),
    onload: async function(e) {
        console.log(`got: ${e.responseText}`);
        eval(e.responseText);
    }
})
}
loader(original_page);