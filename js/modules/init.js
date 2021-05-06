let employees = [
	{
		"id":34123413,
        "name":"Zak Ruvalcaba",
		"extension":3424,
        "email":"zak@vectacorp.com",
        "department":"Executive"
	},
    {
		"id":23424665,
        "name":"Sally Smith",
		"extension":2344,
        "email":"sally@vectacorp.com",
        "department":"Administrative"
	},
    {
		"id":12341244,
        "name":"Mark Martin",
		"extension":5352,
        "email":"mark@vectacorp.com",
        "department":"Sales"
	},
    {
		"id":14545423,
        "name":"Robin Banks",
		"extension":7867,
        "email":"robin@vectacorp.com",
        "department":"Marketing"
	},
    {
		"id":13413453,
        "name":"Sue Wedge",
		"extension":1235,
        "email":"sue@vectacorp.com",
        "department":"QA"
	}
]
  async function buildGrid() {

    try {
        const response = await fetch("/data/employees.json");
        const employees =await response.json();
        return employees;
        
    } catch (error) {
        console.log(error.message);
    }  
}
//  console.log(employees);
buildGrid() 

.then( (employees) => {
    
    for (let employee of employees) {
        document.body.innerHTML +=
        `<p>
        ${employee.id}
        ${employee.name}
        ${employee.extension}
        <a href="mailto:${employee.email}">${employee.email}</a>
        ${employee.department}
        </p>`;
    }

})
.catch( e => console.log(e));

export {buildGrid}



