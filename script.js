function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    let dob = new Date(dobInput);
    
    if (!dobInput) {
        document.getElementById("output").innerHTML = "Please select a date!";
        return;
    }
    
    let today = new Date();
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust for negative month/day differences
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // days in previous month
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("output").innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
