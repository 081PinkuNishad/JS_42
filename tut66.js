// Callback hell
/*
function loaddata(src,callback){
    let script=document.createElement('script');
    script.src=src;
    callback();
    script.onload=function(){
        console.log("script load ho gaya hai :"+src)
    }
    script.onerror=function(){
        console.log("script load nhi huwa hai :"+src)
        callback(new Error("ye new Error hai"))
    }

    document.body.appendChild(script);
}
function call(error){
    if(error){
        console.log(error);
        // SendMegToCeo();
        return;
    }
    console.log("callback");
}
loaddata("https://dn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",call);

    */

// Pyramid of Doom
// function x1(){
//     function x2(){
//         function x3(){
//             function x4(){
//                 function x5(){

//                 }
//             }
//         }
//     }
// }