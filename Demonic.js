var 惡魔琴 = {"惡魔之眼": 1,"惡魔之刀" :1 ,"惡魔的鱗片" :10 ,"惡魔之塊" :10 ,"惡魔的木板" :10 , "製作方法":"木工"}
var 惡魔手把 = {"惡魔之眼" : 2, "惡魔之塊" :20, "製作方法":"手工藝"}
var 惡魔弓 = {"惡魔之眼" :2 ,"惡魔之刀" :2 ,"惡魔的鱗片" :5 ,"惡魔之塊" :5 ,"惡魔的木板" :20 , "製作方法":"木工"}
var 惡魔捕夢者 = {"惡魔之眼" :1 ,"惡魔的腳指" :2 ,"惡魔之塊" :15, "製作方法":"手工藝"}
var 惡魔集魔杖 = {"惡魔之眼" :1 ,"惡魔的腳指" :1 ,"惡魔之刀" :1 ,"惡魔之塊" :20, "製作方法":"手工藝"}


var itemlist = {"惡魔的木板":3,"惡魔之塊":3,"惡魔的鱗片":3}
var 碎片來源 = {"惡魔的木板":"惡魔木柴","惡魔之塊":"礦石碎片","惡魔的鱗片":"鱗片碎片"}
var 製作方法 = {"惡魔的木板":"木工","惡魔之塊":"冶煉","惡魔的鱗片":"手工藝"}
function calc(){
	var table =  eval(myform.product.value)
	ref1.innerHTML = myform.product.value+"的材料:</br>"
	for (var item in table) {
		ref1.innerHTML +=item+" : "+table[item]+" ";
	}
	ref1.innerHTML += "</br></br>根據機率算出期望值</br>"
	for (var item in itemlist) {
		if(table[item]>1){
			var p = eval("myform."+製作方法[item]+"機率.value")/100
			var p2 =eval("myform."+table["製作方法"]+"機率.value")/100
			ref1.innerHTML +=碎片來源[item]+"需要"+(table[item]/p*itemlist[item]/p2).toFixed(2)+"個</br>";
		}	
	}
	
}