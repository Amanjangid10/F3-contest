function ErrorSuccessMsg() {
    let Name = document.getElementById("getname").value;
    let Work = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    var flag = true;

    if (Name, Work, age == false) {

        var success = document.getElementById("msg");

        success.innerHTML = "Error: Please make sure all the fields are filled before adding employee !"

    } else {
        var error = document.getElementById("msg");

        error.innerHTML = "Success : Employee added. ";

        AddEmployees();
    }

}

function AddEmployees() {

    // let Name = document.getElementById("getname").value;
    // let Work = document.getElementById("profession").value;
    // let age = document.getElementById("age").value;

    var employee = document.getElementById("Add-Employee");

    employee.innerHTML = "hello";
}