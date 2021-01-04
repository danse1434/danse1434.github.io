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