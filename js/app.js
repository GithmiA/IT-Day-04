
// let name = "Saman";
// let age = 18;
// let isAfterAL = false;
// let customers = {};
// let customer = {};
// let salary = 7500.0;

// let x = 10;
// let y = "10";
// console.log(x===y);

// let day = 1;

//  switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//      case 2:
//          console.log("Tuesday");
//          break;
//     case 3:
//          console.log("Wednesday");        
//         break;
//      default:
//         console.log("Invalid day");
// }
// function add(a,b){
//    return a+b;
// }
// let result = add(10,20);

// console.log(result);

// let number = [1, 2, "three", 4, "five"];

// for(let i=0;i<number.length;i++){
//          console.log(number[i]);
// }

//console.log("Invalid day");


// 
let customer2 = {
    name: "John",
    age: 25,
    address: "New York",
    salary: 50000,
    items: [
        {
            id: 1,
            name: "item1",
            price: 100,
            variants: [
                {
                    id: 1,
                    name: "variant1",
                    price: 10
                },
                {
                    id: 2,
                    name: "variant2",
                    price: 20
                    
                }
            ]
        }, {
            id: 2,
            name: "item2",
            price: 200
        }, {
            id: 3,
            name: "item3",
            price: 300
        }
    ],
    father: {
        name: "Doe",
        age: 50,
        address: "New York"
    }
};
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items[2].name);
// console.log(customer2.father.name);
//console.log(customer2.items[0].variants[1].price);

//console.log(document.title);
//document.write("");
 
//console.log(heading);
 
 //let number = 0;


//  function changeheading1(){
//     let input1 = document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let sum = parseInt(input1.value) + parseInt(input2.value);
//     let heading = document.getElementById("heading");
//     heading.innerText = sum;

//     console.log("Clicked");
//  }
//  function changeheading2(){
//     let input1 = document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let sum = parseInt(input1.value) - parseInt(input2.value);
//     let heading = document.getElementById("heading");
//     heading.innerText = sum;

//     console.log("Clicked");
//  }
// //  function changeheading3(){
// //     let input1 = document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let mult = parseInt(input1.value) * parseInt(input2.value);
//     let heading = document.getElementById("heading");
//     heading.innerText = mult;

//     console.log("Clicked");
//  }
//  function changeheading4(){
//     let input1 = document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let div = parseInt(input1.value) / parseInt(input2.value);
//     let heading = document.getElementById("heading");
//     heading.innerText = div;

//     console.log("Clicked");
//  }
//-----------------------------------------------------------------------

// create an array to store customer objects
// let customerList = [];

// function btnAddCustomerOnAction(){

//     let txtName = document.getElementById("txtName").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtEmail = document.getElementById("txtEmail").value;
//     let txtSalary = document.getElementById("txtSalary").value;

    //create customer object
    // let customer={
    //     name:txtName,
    //     address:txtAddress,
    //     age:txtAge,
    //     email:txtEmail,
    //     salary:txtSalary
    // }

    // customerList.push(customer);

    // console.log(customerList);
      
//}
//  function loadTable(){
//      let tblCustomers = document.getElementById("tblCustomers");

//      tblCustomers.innerHTML+=`<tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>`
//         console.log(tblCustomers);

//  }
//document.getElementById("heading").innerText = "Githmi Anuradha";


function btnAddCustomerOnAction(){
    let sum = parseInt(document.getElementById("input1").value) + parseInt(document.getElementById("input2").value);
    console.log(sum);
     let output = document.getElementById("output1");
     output.value = sum;
}


