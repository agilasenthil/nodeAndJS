const companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];


const modded = companies.filter((company) => {
    if(!company.startsWith("a")) return true;
    return false;
}).reduce((result,company,i) => {
    if(i == 0) return result + company;
    return result + '-' + company;
}, "");

console.log(modded);