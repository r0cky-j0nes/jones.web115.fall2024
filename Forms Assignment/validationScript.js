  // JavaScript code for form validation
  const form = document.getElementById('myForm');
  const inputField = document.getElementById('inputField')

  //event listener that submits event
        form.addEventListener('submit', function(event) {
          // Prevent form from submitting
          event.preventDefault();


          // Retrieve the input field value
  const inputValue = inputField.value;

      function validateAlphanumeric(inputValue) {
      // Regular expression pattern for alphanumeric input
      const alphanumericRegex = /^[a-zA-Z0-9]*$/;
      // Check if the input value matches the pattern
      return alphanumericRegex.test(inputValue);
      }
        
        if (validateAlphanumeric(inputValue)) {
          // Valid input: display confirmation and submit the form
          alert("Input is valid!");
        } else {
          // Invalid input: display error message
          alert("Input is invalid! Please enter only alphanumeric characters.");
        }
        
        });



        
	
        
