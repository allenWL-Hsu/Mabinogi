var Alease = [1,3,4,3,1,2,1,1,2,1,2,5,2,2,4,6,2,5,1,2,6,5,6,6,4,2,4,3,5,5,1,1,1,2,2,2,1,4,1,1,4,3,3,2,4,3,4,4,1,4,2,1,1,2,2,6,6,1,2,4,3,5,2,2,4,1,2,1,1,1,3,2,2,3,2,1,2,1,2,5,1,2,4,1,5,3,2,2,4,4,1,2,4,1,1,6,4,4,1]
var Ershi  = [4,3,5,6,5,3,6,6,3,1,2,3,6,3,2,3,1,4,3,3,3,6,3,4,3,6,1,5,3,3,3,6,4,6,2,6,3,4,1,2,3,3,1,6,4,6,4,3,3,6,3,2,6,3,1,3,3,3,5,6,3,3,1,2,6,6,3,3,3,5,3,2,4,3,5,3,5,6,1,3,3,6,2,3,3,5,6,1,1,5,5,5,5,6,3,3,1,4,1]
var Dai    = [3,6,3,5,2,3,3,3,3,4,3,2,3,6,1,6,5,3,3,4,5,3,3,5,5,4,5,3,4,1,6,3,4,3,5,5,4,3,5,2,3,5,3,6,1,6,3,6,3,5,4,5,5,3,5,2,2,3,3,3,3,3,5,2,4,5,3,5,3,5,3,2,3,1,4,3,2,3,5,3,1,6,2,6,5,1,5,6,5,1,5,4,3,5,4,6,5]
var Kaoru  = [3,3,2,4,3,6,2,4,6,4,1,1,5,6,4,5,6,1,1,1,5,6,1,5,3,1,5,2,6,1,1,3,6,1,5,1,2,2,2,3,2,6,5,4,2,3,5,6,3,6,4,1,3,5,4,4,4,5,5,3,3,2,5,2,1,2,4,6,5,2,3,5,6,2,1,1,4,1,1,5,4,4,2,5,4,6,1,5,6,4,6,5,6,2,1,4,2]

function convert(index){
    var ret = "XX"
    switch(parseInt(index)){
        case 1:
            ret = "任務"
            break;
        case 2:
            ret = "修練"
            break;
        case 3:
            ret = "遊戲"
            break;
        case 4:
            ret = "料理"
            break;
        case 5:
            ret = "時尚"
            break;
        case 6:
            ret = "戀愛"
            break;
    }
    return ret
}
function calc(){
    var myChar = eval(myform.character.value);
    ref1.innerHTML = ""
    for(var i = 0; i< 3;i++ ){
       var index = parseInt(test.value) +i
       if (index > myChar.length){
           index -= 97
       }
       ref1.innerHTML +=index+" "+convert(myChar[index-1]) 
       ref1.innerHTML +="<br\>"
       
    }
}

function calc2(){
    var myChar = eval(myform.character2.value)
    var index = 0
    var temp = eval(myform.a1.value);
    var myinput = []
    while(temp != 0 && index <5){
        myinput[index++] = temp
        if(index <5){
            temp = eval("myform.a"+(index+1)+".value");
        }
    }
    ref2.innerHTML = "預測接下來編號： "
    for(var i = 0; i< myChar.length;i++ ){
        var flag = true
        for(var j = 0; j< myinput.length;j++ ){
            if(myChar[i+j]!=myinput[j])
            {
                flag = false
                break
            }
        }
        if(flag && myinput.length!=0){
            ref2.innerHTML += (i+1+myinput.length)+" "
        }
    }
    ref2.innerHTML +="<br\>"
}

