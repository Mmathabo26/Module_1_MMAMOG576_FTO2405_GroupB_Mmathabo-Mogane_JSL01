function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here

    

    let result = 'pet_'; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
            
        if (input.indexOf("pet_") === 0) {
            console.log("Valid syntax")
        }

            document.getElementById('result').innerText = result;
}


