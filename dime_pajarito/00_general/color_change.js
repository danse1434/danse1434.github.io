let re = /\"/gi;
let index = 0;


// Functions
function selectbg(name, refData) {
    let res_a = ''; let res_b = '';
    name = name.trim().toLowerCase(); // Remove spaces and 

    // console.log(name);
    for (let i = 0; i < refData['name'].length; i++) {
        let name_1 = refData['name'][i].trim().toLowerCase();
        
        

        if (name_1 == name) {
            res_a = refData['bg_color'][i]
            res_b = refData['color'][i]
        };
    }
    return [res_a, res_b];
}

// Ejecutar la función de lectura de readDataJSON
//let varlist = readDataJSON("./00_general/data.json"); // Forzar su ejecución antes

let cobl_ls = document.getElementsByTagName('cobl');

for (let i = 0; i < cobl_ls.length; i++) {
    let valTuple = selectbg(cobl_ls[i].innerText, varlist);
    document.getElementsByTagName('cobl')[i].style['background'] = valTuple[0];
    document.getElementsByTagName('cobl')[i].style['color'] = valTuple[1];

    // console.log( cobl_ls[i].innerText );
    // console.log( selectbg(cobl_ls[i].innerText, varlist) );
}