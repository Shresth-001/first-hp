for(let i=1;i<100;i++){
  print("shresth");
}
for (let j=0;j<10;j++){
  print("Kumar")
}
var json=require("./testIgnore/config.json")
console.log(json.name)
console.log(json.password)
console.log("This will cause conflit");
