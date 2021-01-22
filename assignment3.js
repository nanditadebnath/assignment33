//kilometerToMeter

function kilometerToMeter(kilometer){

    var meter=kilometer*1000;  // 1km=1000m
    return meter;
}


//budgetcalculator
function budgetCalculator(watch, phone, laptop) {
    if (watch > 0 && phone > 0 && laptop > 0) {
        var watchTotal = watch * 50;
        var phoneTotal = phone * 100;
        var laptopTotal = laptop * 500;

        var total = watchTotal + phoneTotal + laptopTotal;
    }
    else {
        console.log("sorry! invalid number");
    }
    return total;
}


//hotelcost

function hotelCost (dayCount){
    var totalCost = 0;
    if (dayCount <= 0){
        return "Error : Enter valid number of days"
    }

    else if (dayCount <= 10 ){
        totalCost = dayCount * 100;
    }
    else if(dayCount <= 20){
        var firstPackage = 10 * 100;
        var remainingDays = dayCount - 10;
        var secondPackage = remainingDays * 80;
        var totalCost = firstPackage + secondPackage;
    } 
    else {
        var firstPackage =10 * 100;
        var secondPackage = 10 * 80;
        var remainingDays = dayCount - 20;
        var thirdPackage = remainingDays *50 ;
        totalCost = firstPackage + secondPackage + thirdPackage ;
    }
    return totalCost
}
  

// megaFriend
function megaFriend (arra){
    var max_str=arra[0].length;// max_str variable
    var ans =arra[0];
    for(var i=0;i<arra.length;i++){
        var element=arra[i].length;
        if(element> max_str){
            ans=arra[i];
            max_str = element;
        }
    }
    return ans;
 }
 
