camp_fire = [0,0 ,0 ,0 ,0 ,10,11,12,13 ,14 ,15,16,17,18,19,20]// p -> 1
camp_fireER= [0,100 ,95 ,90 ,80 ,70 ,60 ,55 ,40 ,35 ,25,20,15,15 ,10 ,10]// p -> 1
BurnPowber= [0,50,53,56,60,63,66,70,73,76,80,83,86,90,95,100]
function calc(){
    var  en=Enchantform.enchant.value;
    var  bb=Enchantform.burn.value;
    var  ss=Enchantform.scroll.value;
    var  temp  = wood(en,whichwood())+ ER(en)*fire(bb);
    
    Enchantform.fire.value = temp;
}

function whichwood(){
    if(Enchantform.wood[0].checked) return 1;
    if(Enchantform.wood[1].checked) return 2;
    if(Enchantform.wood[2].checked) return 3;
    if(Enchantform.wood[3].checked) return 4;
	if(Enchantform.wood[4].checked) return 5;
   }

function fire(a){
    return camp_fire[16-HtoD(a)];
}

function ER(a){
    return camp_fireER[16-HtoD(a)]*0.01;
}

function HtoD(a){
 if (isNaN(a)){ 
        switch(a){
        case 'A':
                a=10; 
        break;
        case 'B':
                a=11; 
        break;
        case 'C':
                a=12; 
        break;
        case 'D':
                a=13; 
        break;
        case 'E':
                a=14; 
        break;
        case 'F':
                a=15; 
        break;
        default:
                a=0;
        }
    }
    return a;

}
function wood(a,b){
    var rate=[         
    [0,0,0,0,0,0,0],     
    [0,25,30,34,39,40],   
    [0,27,31,36,40,42],    
    [0,29,33,38,42,43],    
    [0,31,35,39,43,45],    
    [0,33,37,41,45,47],    
    [0,35,39,43,47,51],    
    [0,40,44,47,51,53],    
    [0,43,46,50,53,56],    
    [0,46,49,52,56,59],    
    [0,50,53,56,59,63],   
    [0,55,58,60,63,67],   
    [0,60,62,65,67,71],   
    [0,65,67,69,71,75],   
    [0,70,72,74,75,81],   
    [0,75,77,78,80,85]    
    ]
return rate[16-HtoD(a)][b]
}




function calc2(){
    var four = 0;
    if(Enchantform.four.checked){
        four = 1;
    }else{
        four = 0;
    }
    var temp;
    if(Enchantform.powder[0].checked){
        temp = EP(four,16-HtoD(Enchantform.scroll.value),0);
    }else
    if(Enchantform.powder[1].checked){
        temp = EP(four,16-HtoD(Enchantform.scroll.value),1);
    }else
    if(Enchantform.powder[2].checked){
        temp = EP(four,16-HtoD(Enchantform.scroll.value),2);
    }else
    if(Enchantform.powder[3].checked){
        temp = EP(four,16-HtoD(Enchantform.scroll.value),3);
    }
    var times=[0,2 ,2 ,2 ,3 ,3 ,4 ,5 ,6 ,6 ,7 ,9 ,11, 13, 15, 21];
    
    //Enchantform.ans.value = temp;
    //ref1.innerHTML = "<font color = red>以下測試中</font><br\>"+"1次過 " + temp + "%";
    ref1.innerHTML = "1次過 " + temp + "%";
    temp=(100-temp)/100;
    var ans = temp;
    
    var n = Enchantform.n.value;
    //n=times[16-HtoD(Enchantform.enchant.value)];
    
    if(n>20)n=20;
    Enchantform.n.value=n;
    for(i=2;i<=n;i++){
        temp*=ans;
        ref1.innerHTML += "<br/>"+i+"次內過 " +(100*(1-temp)).toFixed(2)+ "%";
    }
}

function EP(a,b,c){
    var rate1=[
        [0,0,0,0,0],
        [90,90,90,90],				
        [90,90,90,90],				
        [90,90,90,90],				
        [90,90,90,90],				
        [82,85,88,90],				
        [75,77,80,90],				
        [52,54,56,70],				
        [49,51,52,66],				
        [45,46,48,60],				
        [40,41,43,54],				
        [33,34,35,44],				
        [24,24,25,32],				
        [16,17,17,22],				
        [10,10,11,14],				
        [ 0, 0, 0, 0], 
    ]

    var rate2=[
        [0,0,0,0,0],
        [90,90,90,90],				
        [90,90,90,90],				
        [90,90,90,90],				
        [90,90,90,90],				
        [88,90,90,90],				
        [80,82,85,90],				
        [56,57,59,73],				
        [52,54,56,69],				
        [48,49,51,62],				
        [43,44,45,56],				
        [35,36,37,46],				
        [25,26,27,33],				
        [17,18,18,23],				
        [10,11,11,14],				
        [ 0, 0, 0, 0], 
    ]
    if(a==0){
        return rate1[b][c]
    }else{
        return rate2[b][c]
    }

}
