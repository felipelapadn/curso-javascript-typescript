const nome = "Felipe";
const obj = { nome }; // { nome: 'Felipe' }
// aqui é usada a spread syntax para copiar as propriedades de obj para um novo objeto obj2. Isso cria um clone superficial (shallow copy) de obj, ou seja, todas as propriedades de obj são copiadas para obj2:
const obj2 = { ...obj };  // também { nome: 'Felipe' }, mas em um novo objeto

console.log(obj2);

// "babel ./main.js -o ./bundle.js --presets=@babel/env -w" ao rodar esse comando no terminal, ele vai ficar "assistindo" o códig e convertendo
// --save-dev é legal para isolar as bibs da produção

