document.addEventListener('DOMContentLoaded', function () {
    var chooseFileInput = document.getElementById('chooseFile');
    var uploadButton = document.getElementById('uploadBtn');
    var imageContainer = document.getElementById('image');
    var tableBody = document.querySelector('#table tbody');

    uploadButton.addEventListener('click', function () {
        var file = chooseFileInput.files[0];

        if (file) {
            // Display uploaded image
            displayImage(file);

            // Add file details to the table
            addFileToTable(file);
        } else {
            alert('Please choose a file before uploading.');
        }
    });

    function displayImage(file) {
        // Clear previous image
        imageContainer.innerHTML = '';

        // Create an img element
        var imgElement = document.createElement('img');
        imgElement.classList.add('img-fluid'); // Bootstrap class for responsive images
        imgElement.src = URL.createObjectURL(file);

        // Append the img element to the image container
        imageContainer.appendChild(imgElement);
    }

    function addFileToTable(file) {
        // Create a new row
        var newRow = tableBody.insertRow(tableBody.rows.length);

        // Insert cells and add file details
        newRow.insertCell(0).textContent = tableBody.rows.length;
        newRow.insertCell(1).textContent = file.name;
        newRow.insertCell(2).textContent = file.type;
        newRow.insertCell(3).textContent = file.size;
    }
});
