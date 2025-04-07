function firstClassFunc(){
    return "HEllo"
}

function letsSee(firstClassF){
    console.log(firstClassF(),"yz")
}

// letsSee(firstClassFunc)

const storeFunc = function (){
    console.log("testing");
}

storeFunc()