const kraTaxRates = {
    0: 0,
    12298: 10,
    23885: 15,
    35472: 20,
    47059: 25,
    58646: 30,
};
const nhifDeduction = 500;
const nssfDeduction = 2000;

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    let payee = 0;
    for (const[amount,rate] of Object.entries(kraTaxRates)){
        if (grossSalary <= parseFloat(amount)) {
            payee = (grossSalary * rate) / 100;
            break;
        }
    }

}
const totalDeductions = nhifDeduction + nssfDeduction;


const netSalary = grossSalary - payee - totalDeductions;


return {
    grossSalary,
    payee,
    nhifDeduction,
    nssfDeduction,
    netSalary,
};

if (!isNaN(basicSalary) && !isNaN(benefits)) {
    const salaryDetails = calculateNetSalary(basicSalary, benefits)

    console.log(`Gross Salary: ${salaryDetails.grossSalary}`)
    console.log(`Payee (Tax):${salaryDetails.payee}`)
    console.log(`NHIF Deductions: ${salaryDetails.nhifDeduction}`)
    console.log(`NSSF Deductions: ${salaryDetails.nssfDeduction} `)
    console.log(`Net salary: ${salaryDetails.netSalary}`)
} else {
    console.log("Invalid input.please enter valid numeric value")
}


