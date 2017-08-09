 var mylist = ["提村","杜巴","班克","艾明",
               "塔丁","塔拉","卡普","貝爾"];
mylist["提村"] =
[
    ["嬰孩藥水" ,1 ,80],
    ["減肥藥水" ,1 ,100],
    ["打鼾預防藥水" ,2 ,100],
    ["人蔘藥水" ,3 ,50],
    ["討喜藥水" ,3 ,100]
]
mylist["杜巴"] =
[
    ["蜘蛛絲手套" ,5 ,10],
    ["羊毛靴子" ,8 ,10],
    ["食人魔屠殺者面具" ,4 ,50],
    ["惡翅魅魔正裝" ,25 ,5],
    ["魅魔泳衣" ,6 ,10]
]
mylist["班克"] =
[
    ["班克爾山石炭" ,8 ,10],
    ["大理石" ,20 ,10],
    ["黃水晶" ,25 ,10],
    ["海蘭德礦石" ,30 ,8],
    ["鉛" ,30 ,10]
]
mylist["艾明"] =
[
    ["莓燕麥片" ,3 ,40],
    ["奶油啤酒" ,4 ,50],
    ["燻烤野生動物" ,3 ,50],
    ["松露義大利麵" ,5 ,50],
    ["整隻燒烤" ,40 ,10]
]
mylist["塔丁"] =
[
    ["熱氣的結晶" ,2 ,100],
    ["音樂盒保存石" ,3 ,50],
    ["帕拉魯結晶" ,2 ,100],
    ["圓型防護壁結晶" ,4 ,100],
    ["煉金結晶" ,5 ,10]
]
mylist["塔拉"] =
[
    ["迷你梳妝台" ,20 ,10],
    ["茶几" ,25 ,5],
    ["搖椅" ,25 ,5],
    ["小朋友兩層樓床" ,75 ,3],
    ["大型葡萄酒架" ,300 ,1]
]
mylist["卡普"] =
[
    ["卡普山煙" ,2 ,50],
    ["卡普山洞窟" ,3 ,50],
    ["鯊魚魚鰭" ,4 ,50],
    ["水母軟糖" ,6 ,30],
    ["那伊德鱗片" ,2 ,50],
]
mylist["貝島"] =
[
    ["鐵鞭子" ,8 ,15],
    ["闇之劍" ,12 ,10],
    ["金庫" ,220 ,1],
    ["骷髏食人魔盔甲" ,180 ,1],
    ["仿造摩根特頭盔" ,40 ,10]
]


var city = "提村";
var Vweight = 0;
var Vsize = 0;

function listitem(){
    
    city = calc3.city.value;
    for (i=0;i<5;i++){
        var tempName = "itemname"+i
        eval(tempName).innerHTML ="商品： "+mylist[city][i][0];
        eval("calc3.item"+i).value = 0;
    }
}


function exp_calc(){
    var diff = (1+ 0.01*(16-calcMinNum.R.value+ 1*calcMinNum.B.value));
    /*ref1.innerHTML = "100元 " + ( 100 / diff  /calcMinNum.X.value).toFixed(3) +"個<br\>";
    ref1.innerHTML +="1000元 " + ( 1000 / diff  /calcMinNum.X.value).toFixed(3)+"個<br\>";
    ref1.innerHTML +="5000元 " + ( 5000 / diff  /calcMinNum.X.value).toFixed(3) +"個<br\>";*/
    ref1.innerHTML = "100元 " + Math.ceil( 100 / diff  /calcMinNum.X.value) +"個<br\>";
    ref1.innerHTML +="1000元 " + Math.ceil( 1000 / diff  /calcMinNum.X.value)+"個<br\>";
    ref1.innerHTML +="5000元 " + Math.ceil( 5000 / diff  /calcMinNum.X.value) +"個<br\>";
}


function exp(cost,weight,count){
    return Math.floor(Math.sqrt(cost*weight))*30*count;
}
   
   
   
function checkvehicles(){
	var weight,count
	if(calc3.vehicles[0].checked){
        weight = 1700;
        count = 7;
    }
    else if(calc3.vehicles[1].checked){
        weight = 900;
        count = 8;
        if(calc3.alpaca.checked){
            weight = 1100;
            count = 10;
        }
    }else if(calc3.vehicles[2].checked){
        weight = 800;
        count = 6;
    }else if(calc3.vehicles[3].checked){
        weight = 400;
        count = 4;
    }
    if(calc3.partner.checked){
        weight += 100;
        count += 1;
        }
    if(calc3.master.checked){
        weight += 100;
        count += 1;
    }
    if(calc3.vehicles[4].checked){
        weight = calc3.Uweight.value;
        count  = calc3.Ubox.value;
    }else{
        calc3.Uweight.value = weight;
        calc3.Ubox.value =  count;   
        }
	Vweight = weight;
    Vsize = count;
    
}


function CanBeStoredNum (weight,SpaceCount,tWeight,tSpace){
    
    if(Math.floor(tWeight/weight)<(SpaceCount*tSpace)){
        return Math.floor(tWeight/weight);
    }
    else{
        return SpaceCount*tSpace;
    }

}



function GetItemInfo(Iindex){
    //0 value 1 weight 2 size
    return [1*eval("calc3.item"+Iindex+".value"),mylist[city][Iindex][1],mylist[city][Iindex][2]]
         
    
}
function CalcValue(Iindex,TotalWeight,TotalSize){
    var ItemTable = GetItemInfo(Iindex);
    return ItemTable[0] * CanBeStoredNum(ItemTable[1],ItemTable[2],TotalWeight ,TotalSize);
    
}
 
 
function FindBestItem(MaxWeight,MaxBox) {
    valueList = [];
    BestIndex = 0;
    for (i=0;i<5;i++){
        var ItemInfoTable = GetItemInfo(i);
        var tempNum = CanBeStoredNum(ItemInfoTable[1],ItemInfoTable[2],MaxWeight ,MaxBox);
        valueList[i] =  [ItemInfoTable[0] *tempNum,tempNum];
        if(valueList[BestIndex][0] < valueList[i][0] || (valueList[BestIndex][0] == valueList[i][0] && 
           exp(GetItemInfo(BestIndex)[0],GetItemInfo(BestIndex)[1],valueList[BestIndex][1]) < exp(GetItemInfo(i)[0],GetItemInfo(i)[1],valueList[i][1])) ){
            BestIndex = i;
        }
    }
    //      0:物品編號       1:總賣價                 2:總數量                   3:總重量
    return [BestIndex,valueList[BestIndex][0],valueList[BestIndex][1],valueList[BestIndex][1]*GetItemInfo(BestIndex)[1]]
}
 
 
function mycalc(){
    checkvehicles();
    BestList = FindBestItem(Vweight,Vsize);
    BestList2 = [-1,0,0,0];
    for(sizeCount = 1; sizeCount < Vsize;++sizeCount){
        TempList =  FindBestItem(Vweight,Vsize-sizeCount);
        console.log(TempList)
        TempList2 = [-1,0,0,0];
        if (Vweight-1*TempList[3] > 0){
            TempList2 =  FindBestItem(Vweight-1*TempList[3],sizeCount);
        }
        console.log(TempList2)
        console.log(sizeCount+"end\n----------------")
        if(1*BestList[1] + 1*BestList2[1]< 1*TempList[1] + 1*TempList2[1] ){
            BestList = TempList.slice() ;
            BestList2 = TempList2.slice() ;
        }
    }
    
    if(BestList2[0]==-1){
        answer.innerHTML  = "商品："+mylist[city][BestList[0]][0]+"<br/>";
        answer.innerHTML += "數量："+BestList[2]+"<br/>";
        answer.innerHTML += "可賺："+BestList[1]+" 杜卡特 <br/>";
        answer.innerHTML += "　　　"+exp(GetItemInfo(BestList[0])[0],GetItemInfo(BestList[0])[1],BestList[2])　+" 經驗值 <br/>";
    }else{
        answer.innerHTML  = "商品："+mylist[city][BestList[0]][0]+" "+BestList[2]+"個<br/>";
        answer.innerHTML += "　　　"+mylist[city][BestList2[0]][0]+" "+BestList2[2]+"個<br/>";
        answer.innerHTML += "可賺："+(1*BestList[1]+1*BestList2[1])+" 杜卡特 <br/>";
        answer.innerHTML += "　　　"+(1*exp(GetItemInfo(BestList[0])[0],GetItemInfo(BestList[0])[1],BestList[2])
                                    +1*exp(GetItemInfo(BestList2[0])[0],GetItemInfo(BestList2[0])[1],BestList2[2]))+" 經驗值 <br/>";
        
    }
    
    
    
    // test
    calcMinNum.X.value = GetItemInfo(BestList[0])[0];
    
}


