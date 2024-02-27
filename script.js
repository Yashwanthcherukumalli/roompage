document.addEventListener('DOMContentLoaded', function () {
    var textElements = document.querySelectorAll('.text > div');
    var prevButton = document.getElementById('prevBtn');
    var nextButton = document.getElementById('nextBtn');
    var currentIndex = 0;

    // Function to hide all text elements
    function hideAllText() {
        textElements.forEach(function (textElement) {
            textElement.style.display = 'none';
        });
    }

    // Function to show current text element
    function showCurrentText() {
        hideAllText();
        textElements[currentIndex].style.display = 'block';
    }

    // Initial setup to show the first text element
    showCurrentText();

    // Event listener for previous button
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? textElements.length - 1 : currentIndex - 1;
        showCurrentText();
    });

    // Event listener for next button
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === textElements.length - 1) ? 0 : currentIndex + 1;
        showCurrentText();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var textElements = document.querySelectorAll('.img-menu > div');
    var prevButton = document.getElementById('prevBtn');
    var nextButton = document.getElementById('nextBtn');
    var currentIndex = 0;

    // Function to hide all text elements
    function hideAllText() {
        textElements.forEach(function (textElement) {
            textElement.style.display = 'none';
        });
    }

    // Function to show current text element
    function showCurrentText() {
        hideAllText();
        textElements[currentIndex].style.display = 'block';
    }

    // Initial setup to show the first text element
    showCurrentText();

    // Event listener for previous button
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? textElements.length - 1 : currentIndex - 1;
        showCurrentText();
    });

    // Event listener for next button
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === textElements.length - 1) ? 0 : currentIndex + 1;
        showCurrentText();
    });
});


