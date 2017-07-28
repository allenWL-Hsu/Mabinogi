var BTable = [ 0,10,15,20,30,40,45]
var ATable = [ 0, 0,10,20,30,45]
var LVTable = [-100,70,100,130,190,999]
function calc(){
    
    ref1.innerHTML = "所有適當組合：<br\>"    
    for(var i = 1; i<= 5;i++ ){
       for(var j = 0; j<= 6;j++ ){
           var score = parseInt(myform.diffcult.value) + parseInt(myform.member.value)+BTable[j]+ATable[i]
           //ref1.innerHTML += score+"<br\>"
           var lv = parseInt(myform.level.value)
           if (score >= LVTable[lv] && score<LVTable[++lv]){
                 ref1.innerHTML +=((i-1)<1?"  ":"A"+(i-1))+((j-1)<0?"  ":"B"+(j-1))+((j-1)<0&&(i-1)<1 ?"不放":" ")+"<br\>"
           }
       }
    }
}
function calc2(){
    var LVList = ['C','B','A','S','SS']
    var score = parseInt(myform2.diffcult.value) + parseInt(myform2.member.value)+BTable[parseInt(myform2.stoneB.value)+1]+ATable[parseInt(myform2.stoneA.value)+1]
    //ref2.innerHTML = score2
    for(var i = 0;i<5;++i){
        if (score >= LVTable[i] && score<LVTable[i+1]){
            ref2.innerHTML = LVList[i]
            break
        }
    }
}