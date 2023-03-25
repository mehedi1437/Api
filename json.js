const user = {
    id: 1, name : 'Gorib Amir', job: 'Actor'
}

// Javascript Object NOtation 
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    owner : 'Alia ',
    adderss : {
        street : "Kochukhet Vooter Goli ",
        city : 'Ranbir',
        country : 'BD'
    },
    products : ['laptop', 'computer', 'mobile','dextop', 'Tablet'],
    revenue : 45000,
    isOpen : true,
    isNew: false

}
console.log(shop);

const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);