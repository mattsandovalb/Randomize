function generate(){
    var firstname = [ "Rhandun", "Jeff", "Hideon", "Matt", "Hyron", "Fardohin", "Bandok", "Fideon", "Rään", "Whandol", "Rhas", "Ghuldi", "Ghorda", "Manhein", "Hardun", "Tölh", "Hustap", "Jolen", "Mashjön", "Rhipale", "Mindjunt", "Sirps", "Jhon", "Argenion", "Rhasad", "Junkon", "Fin", "Forun", "Koren", "Baldung", "Rhoden"
    ];
    var lastname=[ "Hoonk", "Maldonado", "Domk", "Frost", "Castle", "Beerman", "Videnka", "Russ", "Rosenton", "Baldeng", "Whithernot", "Ghun", "Ghard", "Madman", "Ruski", "Bashää", "Rikhon", "Fusnio", "Mather", "Fus", "Jildeon", "Arhääm", "Yust", "Asfold", "Asshole", "Master", "Huntman", "Warner", "Qief", "Fondan", "Videon", "Nammen"
    ];
    var rand_first = Math.floor(Math.random()*firstname.length);
    var rand_last = Math.floor(Math.random()*lastname.length);
    document.getElementById('result').innerHTML = "<div class='alert'><h3>"+firstname[rand_first]+" "+lastname[rand_last]+"</h3></div>";

}