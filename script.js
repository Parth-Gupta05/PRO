






let numpro=document.querySelector("#numpro")
// console.log(numpro)
let rows=document.querySelectorAll(".rows")
let y
let clear=true
let one=false
let changenum=0
numpro.addEventListener("focusout",()=>{
let rows=document.querySelectorAll(".rows")
let cols=document.querySelectorAll(".cols")
// console.log(rows)
// console.log(cols)
let n=1
if(clear==true){
for(i=0;i<4;i++){
    rows[i].removeChild(rows[i].lastElementChild)
}
clear=false
}
if(changenum==1){
    // console.log(y)
    for(j=0;j<y;j++){
        for(i=0;i<4;i++){
            rows[i].removeChild(rows[i].lastElementChild)
        }
    }
}
//no of times cols should be added
    for(j=1;j<=numpro.value;j++){
        y=numpro.value
        //adding cols in each row
            for(i=0;i<4;i++){
            if(j==numpro.value){
                let newdiv=document.createElement("div")
                newdiv.classList.add("cols")
            }
            else if (i==2) {
                let newdiv=document.createElement("textarea")
                newdiv.classList.add("cols")
                rows[i].appendChild(newdiv)
                continue
            }
            
            let newdiv=document.createElement("div")
            newdiv.classList.add("cols")
            if(i==0){
                if(j==numpro.value){
                    newdiv.appendChild(document.createTextNode('Total Score'));
                }
                else{
                newdiv.appendChild(document.createTextNode(`PRO${n+1}`));
                n=n+1
                }
            }
            if(i==1){
                if(j==numpro.value){
                    newdiv.appendChild(document.createTextNode(``));
                }
                else{
                newdiv.appendChild(document.createTextNode(`20`));
                }
            }
            rows[i].appendChild(newdiv)  
        }
        changenum=1
    }
    if(one==true){
    rows[1].lastElementChild.innerHTML=`${20*numpro.value}`
    rows[2].lastElementChild.innerHTML=`${marksobt.value/20}`
    rows[3].lastElementChild.innerHTML=`${marksobt.value/20*20*numpro.value}`
    let a=marksobt.value/20
    //adding pts and score
    let textarea=document.querySelectorAll("textarea")
    // console.log(textarea)
    // let rowscore=document.querySelectorAll(rows[3])
    // console.log(rows)
    if(numpro.value%2==0){

        let ptsarr=[];
        if(numpro.value==4){
            ptsarr=[a,Math.round((a+0.1)*100)/100,Math.round((a-0.1)*100)/100,a];

        }
        if(numpro.value==2){
            ptsarr=[Math.round((a+0.1)*100)/100,Math.round((a-0.1)*100)/100];

        }
        if(numpro.value==6){
            ptsarr=[a,Math.round((a+0.1)*100)/100,Math.round((a-0.2)*100)/100,Math.round((a+0.2)*100)/100,Math.round((a-0.1)*100)/100,a];

        }
        let rowscore=[]
        
        for (let i = 0; i < numpro.value; i++) {
            textarea[i].innerHTML = ptsarr[i];
            rowscore[i]=ptsarr[i]*20
            rows[3].children[i+1].innerHTML=rowscore[i]
        }   
        // console.log(rows[3])
    }
    else{
        if(numpro.value==3){
            ptsarr=[a,Math.round((a+0.1)*100)/100,a];

        }
        if(numpro.value==5){
            ptsarr=[a,Math.round((a+0.1)*100)/100,a,Math.round((a-0.1)*100)/100,a];

        }
        if(numpro.value==7){
            ptsarr=[a,Math.round((a+0.1)*100)/100,Math.round((a+0.2)*100)/100,a,Math.round((a-0.1)*100)/100,Math.round((a-0.2)*100)/100,a];

        }
        let rowscore=[]
        for (let i = 0; i <numpro.value; i++) {
        textarea[i].innerHTML = ptsarr[i];
        rowscore[i]=ptsarr[i]*20
        rows[3].children[i+1].innerHTML=rowscore[i]
        }
    }
    }
    one=true
})
let marksobt=document.querySelector("#marks")
let marks=document.querySelector("#r5c2")
let ep=document.querySelector("#r5c1")
marksobt.addEventListener("focusout",()=>{
    let a=marksobt.value/20
    marks.innerHTML="Marks in 100 = "+` ${marksobt.value}`
    ep.innerHTML="Earned Points = "+`${a}`
    rows[1].lastElementChild.innerHTML=`${20*numpro.value}`
    rows[2].lastElementChild.innerHTML=`${marksobt.value/20}`
    rows[3].lastElementChild.innerHTML=`${marksobt.value/20*20*numpro.value}`

    //adding pts and score
    let textarea=document.querySelectorAll("textarea")
    // console.log(textarea)
    // let rowscore=document.querySelectorAll(rows[3])
    // console.log(rows)
    if(numpro.value%2==0){

        let ptsarr=[];
        if(numpro.value==4){
            ptsarr=[a,Math.round((a+0.1)*100)/100,Math.round((a-0.1)*100)/100,a];

        }
        if(numpro.value==2){
            ptsarr=[Math.round((a+0.1)*100)/100,Math.round((a-0.1)*100)/100];

        }
        if(numpro.value==6){
            ptsarr=[a,Math.round((a+0.1)*100)/100,Math.round((a-0.2)*100)/100,Math.round((a+0.2)*100)/100,Math.round((a-0.1)*100)/100,a];

        }
        let rowscore=[]
        
        for (let i = 0; i < numpro.value; i++) {
            textarea[i].innerHTML = ptsarr[i];
            rowscore[i]=ptsarr[i]*20
            rows[3].children[i+1].innerHTML=rowscore[i]
        }   
        // console.log(rows[3])
    }
    else{
        if(numpro.value==3){
            ptsarr=[a,Math.round((a+0.1)*100)/100,a];

        }
        if(numpro.value==5){
            ptsarr=[a,Math.round((a+0.1)*100)/100,a,Math.round((a-0.1)*100)/100,a];

        }
        if(numpro.value==7){
            ptsarr=[a,Math.round((a+0.1)*100)/100,Math.round((a+0.2)*100)/100,a,Math.round((a-0.1)*100)/100,Math.round((a-0.2)*100)/100,a];

        }
        let rowscore=[]
        for (let i = 0; i <numpro.value; i++) {
        textarea[i].innerHTML = ptsarr[i];
        rowscore[i]=ptsarr[i]*20
        rows[3].children[i+1].innerHTML=rowscore[i]
        }
    }
})

// localStorage.setItem("name","qwerty")


// window.onstorage=(e)=>{
//     alert("changed");
//     console.log(e);
    
// }

