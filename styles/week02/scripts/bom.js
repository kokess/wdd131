// References to HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add Chapter button click event
button.addEventListener('click', function () {

    // Check that input is not empty
    if (input.value.trim() !== '') {

        // Create list item
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute(
            'aria-label',
            `Remove ${input.value}`
        );

        // Add delete functionality
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Append button and list item
        li.append(deleteButton);
        list.append(li);

        // Clear input
        input.value = '';
    }

    // Always return focus to input
    input.focus();
});
