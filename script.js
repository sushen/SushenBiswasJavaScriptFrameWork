function CriptoCurrency(name,price,marketCap,volume,circulatingSupply,date) {
    this.name = name;
    this.price = price;
    this.marketCap = marketCap;
    this.volume = volume;
    this.circulatingSupply = circulatingSupply;
    this.date = date;
    
}

var currencysArray = [
    new CriptoCurrency("bitcoin",47000,888513591184,72766434194,18627337,new Date()),
    new CriptoCurrency("ethereum",1834,122226149106,38085385945,114650284,new Date())

];


console.log(currencysArray[0].marketCap)

document.body.innerHTML = currencysArray[0].marketCap;
