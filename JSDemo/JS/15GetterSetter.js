//getter and setter
let obj = {
  set name(fname) {
    this.fname = fname;
  },
  get name() {
    return this.fname;
  },
};

console.log(obj.fname); //undefined
obj.name = "Parth"; //set name
console.log(obj.name); //get name
