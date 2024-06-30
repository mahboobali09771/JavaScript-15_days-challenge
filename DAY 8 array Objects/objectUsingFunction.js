// 3rd way of creating object using funcions

function emp(id, name, salary){
    this.emp_id = id;
    this.name = name;
    this.salary = salary;
}
const emp_obj = new emp(1,"mahboob",100000) // new -> object

console.log(emp_obj)