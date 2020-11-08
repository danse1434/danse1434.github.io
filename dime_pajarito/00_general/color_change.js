let re = /\"/gi;
let index = 0;


// Functions
function selectbg(name) {
    let res_a = ''; let res_b = '';
    name = name.trim().toLowerCase(); // Remove spaces and 

    // console.log(name);
    for (let i = 0; i < varlist['name'].length; i++) {
        let name_1 = varlist['name'][i].trim().toLowerCase();
        
        

        if (name_1 == name) {
            res_a = varlist['bg_color'][i]
            res_b = varlist['color'][i]
        };
    }
    return [res_a, res_b];
}

cobl_ls = document.getElementsByTagName('cobl')

for (let i = 0; i < cobl_ls.length; i++) {
    valTuple = selectbg(cobl_ls[i].innerText);
    document.getElementsByTagName('cobl')[i].style['background'] = valTuple[0];
    document.getElementsByTagName('cobl')[i].style['color'] = valTuple[1];

    // console.log( cobl_ls[i].innerText );
    // console.log( selectbg(cobl_ls[i].innerText) );
}