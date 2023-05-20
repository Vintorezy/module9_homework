const json = `{
    "list": [
      {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
      },
      {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
      }
    ]
  }`;
  

const result = JSON.parse(json);
  
console.log(result);