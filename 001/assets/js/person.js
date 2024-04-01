export const person = [
  {
    fisrtname: "sabino",
    lastname: "capingana",
    logged: true,
    telefone: 939172046,
    email: "scapingana@gmail.com",
  },
  {
    fisrtname: "Jose",
    lastname: "Antonio",
    logged: true,
    telefone: 939172046,
    email: "scapingana@gmail.com",
  },

];

for(let i=0;i<=person.length;i++){
    if(person[i].logged==true){
        console.log(`O ${person[i].lastname} está logado`)
    }else{
        console.log(`O ${person[i].lastname} está deslogado infelizmente`)
    }
}





