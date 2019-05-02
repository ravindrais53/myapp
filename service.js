var emps = [{
    empId: 1,
    name: "Ravindra Kulkarni",
    age: 30,
    phone: 574878875768
},
{
    empId: 2,
    name: "Ravindra Kulkarni",
    age: 30,
    phone: 574878875768
},
{
    empId: 3,
    name: "Ravindra Kulkarni",
    age: 30,
    phone: 574878875768
},
{
    empId: 4,
    name: "Ravindra Kulkarni",
    age: 30,
    phone: 574878875768
}];

function getEmplList(req, res) {
    return emps;
}

function editEmp(req, res) {
    const empId = req.query.empId;
    const empName = req.query.name;
    const age = req.query.age;
    const phone = req.query.phone;
    for (var emp of emps) {
        if (emp.empId === parseInt(empId)) {
            emp.name = empName;
            emp.age = age;
            emp.phone = phone;
            return emp;
        }
    }
    return undefined;
}

module.exports = { getEmplList, editEmp }