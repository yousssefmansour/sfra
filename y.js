function tran(){
let text1=document.getElementById("sfra").value;
let text=document.getElementById("text").value;
let out=document.getElementById('output');
let output="";
if(text1==4){
output="";
let sfra4=[[["ا","ب","ت"],["ث","ج",'ح'],['خ','ر','ز']]
,[['ر','ز','س'],["ش",'ص','ض'],['ط','ظ','ع']],
[["ف",'ق','ك'],['ل','م',"ن"],['ه','و','ي']]];
for(i=0;i<text.length;){
  output+=sfra4[text[i]-1][text[i+1]-1][text[i+2]-1];
 i=i+3;
 out.innerText=output;
}}
if(text1==2){
output="";
let sfra2=['ا','ب','ت','ث','ج','ح','خ','د'
 ,'ذ','ر','ز','س','ش','ص','ض','ط','ظ'
 ,'ع','غ','ف','ق','ك','ل','م','ن','ه'
 ,'و','ي' 
]
output=sfra2[text-1];
out.innerText=output;
}
if(text1==3){
    output="";
    let sfra3=['ا','ب','ت','ث','ج','ح','خ','د'
     ,'ذ','ر','ز','س','ش','ص','ض','ط','ظ'
     ,'ع','غ','ف','ق','ك','ل','م','ن','ه'
     ,'و','ي' 
    ]

    output=sfra3.reverse()[text-1];
    out.innerText=output;
}
if(text1==1){
 output="";
 let a =['ا','ب','ت','ث','ج','ح','خ'];
 let b =['د','ذ','ر','ز','س','ش','ص'];
 let c =['ض','ط','ظ','ع','غ','ف','ق'];
 let d =['ك','ل','م','ن','ه','و','ي'];
 for(i=0;i<text.length;){
 if(text[i]=='ي'){
 output+=a[text[i+1]-1];
 }
 else if(text[i]=='س'){
    output+=b[text[i+1]-1];
 }   
 else if(text[i]=='و'){
    output+=c[text[i+1]-1];
 }   
 else if(text[i]=='ع'){
    output+=d[text[i+1]-1];
 }   
 out.innerText=output;
 i=i+2
 }
}
}   
document.getElementById("btn").onclick=function clear(){
  document.getElementById("text").value=null;
    console.log('sss')
};