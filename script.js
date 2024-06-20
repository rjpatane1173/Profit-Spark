// Show or hide the button based on scroll position
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) { // Show after scrolling 300px
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top when button is clicked
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Helper function to check if the top of the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to add fade-in effect to sections
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('fade-in');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case some sections are already in view on load
document.addEventListener('DOMContentLoaded', handleScroll);

// Add class to header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Select all navbar divs that contain dropdowns
    const navDivs = document.querySelectorAll('.navbar > div');

    navDivs.forEach(navDiv => {
        const anchor = navDiv.querySelector('a');
        const dropdown = navDiv.querySelector('ul');

        if (anchor && dropdown) {
            let timeoutId; // Variable to store timeout ID

            // Function to hide dropdown and clear timeout
            const hideDropdown = () => {
                dropdown.classList.remove('fade-in');
                dropdown.classList.add('fade-out');
                setTimeout(() => dropdown.style.display = 'none', 300);
            };

            // Toggle dropdown on anchor click
            anchor.addEventListener('click', (event) => {
                event.preventDefault();

                // Close any open dropdowns first
                document.querySelectorAll('.navbar > div ul').forEach(openDropdown => {
                    if (openDropdown !== dropdown && openDropdown.classList.contains('fade-in')) {
                        openDropdown.classList.remove('fade-in');
                        openDropdown.classList.add('fade-out');
                        setTimeout(() => openDropdown.style.display = 'none', 300);
                    }
                });

                // Toggle the clicked dropdown
                if (dropdown.classList.contains('fade-in')) {
                    hideDropdown();
                    clearTimeout(timeoutId); // Clear existing timeout
                } else {
                    dropdown.style.display = 'block';
                    dropdown.classList.remove('fade-out');
                    dropdown.classList.add('fade-in');

                    // Set timeout to hide dropdown after 2 seconds
                    timeoutId = setTimeout(hideDropdown, 2000);
                }
            });

            // Hide dropdown when clicking outside
            document.addEventListener('click', (event) => {
                if (!navDiv.contains(event.target)) {
                    hideDropdown();
                    clearTimeout(timeoutId); // Clear existing timeout
                }
            });

            // Clear timeout on mouseenter and reset on mouseleave
            navDiv.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId);
            });

            navDiv.addEventListener('mouseleave', () => {
                timeoutId = setTimeout(hideDropdown, 2000);
            });
        }
    });
});
