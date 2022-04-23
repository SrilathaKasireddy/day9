
var request =new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function() {

 var data =JSON.parse(request.response);

console.log(data)


//Get all the countries from Asia continent /region using Filter function
let getdata =data.filter(function(data){

 return data.region==='Asia'
});
console.log(getdata);


//Get all the countries with a population of less than 2 lakhs using Filter function

let getpopulation =data.filter(function(data){
    
 return data.population>200000

});

console.log(getpopulation);


//Print the following details name, capital, flag using forEach function


let getdetail=[];
    data.forEach(function(data){

getdetail.push(data.name,data.capital,data.flag)


    })
    console.log(getdetail);

//Print the total population of countries using reduce function
let totalpopulation =data.reduce(function(accum,popu){
    return accum+popu.population;},0)
    
    console.log(totalpopulation);


//Print the country which uses US Dollars as currency.

    data.forEach(function(data){
    if(data.currencies[0].code=="USD"){
        console.log(data.name)
    }
      
})

}
