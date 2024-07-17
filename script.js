function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here

    s1= "pet_2015Forrest";
    let result = s1.startsWith("pet_");       

    // let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
            
        if (input.startsWith("pet_") && input.endsWith("/^[A-Az-z0-9\s]+$/")) {
            console.log("Valid Syntax")
        } else {
            console.log("Invalid Syntax")
        }

            document.getElementById('result').innerText = result;
}


