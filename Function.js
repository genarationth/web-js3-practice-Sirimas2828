// try creating function add/subtract/multiplay/divide

const add = (a, b) =>{
    console.log(a+b);
    return (a+b);
}

const subtract = (a, b) =>{
    console.log(a-b);
    return (a-b);
}

const multiplay = (a, b) =>{
    console.log(a*b);
    return (a*b);
}

const divide = (a, b) =>{
    console.log(a/b);
    return (a/b);
}


add(3,4);
subtract(3,4);
multiplay(3,4);
divide(3,4);

// another exercise
function informations(firstName, location, hobby){
    console.log ("Hi, my name is "+firstName+".I live in "+location+" and enjoy "+hobby + ".");
}
informations("Sirimas", "Chiang Mai", "playing game")