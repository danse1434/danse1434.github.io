let varlist = 
    {"name": ["A/B Testing", "AWS", "Causal Effects", "Clustering Models", "Co-linearity", "Convolutional Neural Networks", "Crontab", 
    "Cross Validation", "Dash", "Data Cleaning", "Data Extraction", "Data Transformation", "Data Visualization", "Data Wrangling", 
    "Deep Learning", "EDA", "Elastic Cloud 2 (EC2)", "Geovisualization", "Hypothesis Testing", "Inference", "Initial Settings", 
    "Interaction Effects", "Interpreting Linear Models", "K-nearest neighboors", "Logistic Regression", "Naive Bayes Classifier", 
    "Neural Networks", "NLP", "Pandas", "Postgres", "Python", "Random Forest", "Regression", "Relational Data Bases (RDB)", 
    "Relational Data Services (RDS)", "Residual analysis", "S3", "SQL", "SQLAlchemy", "Statistics", "Text Processing", 
    "Unsupervised Learning", "Variable Transformations", "Web Scrapping"], 
    "color": ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", 
    "#000000", "#FFFFFF", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#FFFFFF", "#FFFFFF", 
    "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#FFFFFF", 
    "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#FFFFFF"], 
    "bg_color": ["#82393F", "#8FBC8F", "#6CA19B", "#8B0000", "#FFF8DC", "#0066CC", "#DDA0DD", "#8B4513", "#FFA07A", "#2F4F4F", 
    "#FFE4B5", "#F8F8FF", "#8B4513", "#F5FFFA", "#FF00FF", "#008080", "#8B0000", "#FFF8DC", "#E2F6E4", "#DEC5E5", "#F0FFFF", 
    "#008080", "#8B4513", "#00FF00", "#F8F8FF", "#008080", "#6B8E23", "#C33FF6", "#4682B4", "#FFF0F5", "#00FF7F", "#F5FFFA", 
    "#F8F8FF", "#5F9EA0", "#20B2AA", "#8B0000", "#E0FFFF", "#AFEEEE", "#FFC0CB", "#A0522D", "#98FB98", "#4682B4", "#F5FFFA", "#6B8E23"]};




let re = /\"/gi;
let index = 0;

// let varlist = {'name':[], 'bg_color':[], 'color':[]};
// var data;
// 	$.ajax({
// 	  type: "GET",  
//       url: "./00_general/name_categories.csv",
// 	  dataType: "text",       
// 	  success: function(response)  
// 	  {
//         data = $.csv.toObjects(response);
                
        
//         // console.log(data1);

//         data.forEach(d => {
//             varlist['name'].push(d.name.replace(re, ''));
//             varlist['bg_color'].push(d.bg_color.replace(re, ''));
//             varlist['color'].push(d.color.replace(re, ''));
//             index+=1; 
//         });
        
// 		// generateHtmlTable(data);
//     }   
// });

// console.log(index);

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