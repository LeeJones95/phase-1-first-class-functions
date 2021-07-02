function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction(){
    var fn = receivesAFunction
    return fn 
}

function returnsAnAnonymousFunction() {
    let name = "this" 
    return (name) => ("")
}
