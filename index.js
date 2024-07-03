function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    if (!day || !month || !year) {
        alert("Please enter your date of birth.");
        return false;
    }

    if (day < 1 || day > 31) {
        alert("Please enter a valid day.");
        return false;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month.");
        return false;
    }

    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
        alert("Please enter a valid year.");
        return false;
    }
    const dob = new Date(year, month - 1, day);
    if (dob.getDate() != day || dob.getMonth() + 1 != month || dob.getFullYear() != year) {
        alert("Please enter a valid date.");
        return false;
    }
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById('result').innerText = `You are ${age} years old.`;
    return false;
}
