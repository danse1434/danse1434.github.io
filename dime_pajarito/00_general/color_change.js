// This list contains all values
let varlist = {
    'name': ["A/B Testing","AWS","Causal Effects","Co-linearity","Crontab","Dash","Data Cleaning","Data Extraction","Data Transformation","Data Visualization","Data Wrangling","EDA","Elastic Cloud 2 (EC2)","Geovisualization","Hypothesis Testing","Inference","Initial Settings","Interaction Effects","Interpreting Linear Models","NLP","Pandas","Postgres","Python","Regression","Relational Data Bases (RDB)","Relational Data Services (RDS)","Residual analysis","S3","SQL","SQLAlchemy","Statistics","Text Processing","Variable Transformations","Web Scrapping"],

    "bg_color": ["#82393F","#8FBC8F","#6CA19B","#FFF8DC","#DDA0DD","#FFA07A","#2F4F4F","#FFE4B5","#F8F8FF","#8B4513","#F5FFFA","#008080","#8B0000","#FFF8DC","#E2F6E4","#DEC5E5","#F0FFFF","#008080","#8B4513","#C33FF6","#4682B4","#FFF0F5","#00FF7F","#F8F8FF","#5F9EA0","#20B2AA","#8B0000","#E0FFFF","#AFEEEE","#FFC0CB","#A0522D","#98FB98","#F5FFFA","#6B8E23"],

    "color":["#FFFFFF","#FFFFFF","#FFFFFF","#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#FFFFFF","#000000","#FFFFFF","#FFFFFF","#000000","#000000","#FFFFFF","#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#FFFFFF","#000000","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#FFFFFF"]

};

// Functions
function selectbg(name) {
    let res_a = ''; let res_b = '';
    name = name.trim().toLowerCase(); // Remove spaces and 

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
    document.getElementsByTagName('cobl')[i].style['background'] = selectbg(cobl_ls[i].innerText)[0];
    document.getElementsByTagName('cobl')[i].style['color'] = selectbg(cobl_ls[i].innerText)[1];

    // console.log( selectbg(cobl_ls[i].innerText) );
}