function CriptoCurrency(name,price,marketCap,volume,circulatingSupply,date) {
    this.name = name;
    this.price = price;
    this.marketCap = marketCap;
    this.volume = volume;
    this.circulatingSupply = circulatingSupply;
    this.date = date;
    
}

var bitcoin = new CriptoCurrency("bitcoin",47000,888513591184,72766434194,18627337,new Date());

console.log(bitcoin);
