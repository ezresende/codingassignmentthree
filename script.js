var names = new Array ();
names[0] = "Yakoov"
names[1] = "Enzo"
names[2] = "Victor"
names[3] = "Luciano"
names[4] = "Bruna"
names[5] = "Nuno"
names[6] = "Juca"
names[7] = "Jonas"
names[8] = "Val"
names[9] = "Amanda"
names[10] = "Joana"
names[11] = "Peu"
names[12] = "James"
names[13] = "Julia"
names[14] = "Fabio"

// similar to create an array var names = ["Yakoov", "Enzo", "Victor", ..., ...]

for (var i=0; i <names.length; i++) {
    if(names[i].charAt(0)==="J" || names[i].charAt(0)==="j") {
        console.log("Goodbye " + names[i])
    }
    else{
        console.log("Hello " + names[i])
    }
}

