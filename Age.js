document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", calculateAge);

    function calculateAge() {
        const dobInput = document.getElementById("dob");
        const dob = new Date(dobInput.value);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();

        if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
            age--;
        }

        resultElement.textContent = `Your age is ${age} years.`;
    }
});