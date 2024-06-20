// Function to scroll to top smoothly when button is clicked
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Helper function to check if any part of the element is in the viewport
function isAnyPartInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < window.innerHeight
    );
}

// Function to add fade-in effect to sections when any part is in viewport
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isAnyPartInViewport(section)) {
            section.classList.add('fade-in');
        }
    });
}

// Listen for scroll events to trigger section fade-in effect
window.addEventListener('scroll', handleScroll);

// Trigger section fade-in on page load
document.addEventListener('DOMContentLoaded', handleScroll);

// Add class to header when scrolled
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Dropdown menu functionality with hover and auto-hide timeout
document.addEventListener('DOMContentLoaded', function () {
    const navDivs = document.querySelectorAll('.navbar > div');

    navDivs.forEach(navDiv => {
        const anchor = navDiv.querySelector('a');
        const dropdown = navDiv.querySelector('ul');

        if (anchor && dropdown) {
            let timeoutId;

            const hideDropdown = () => {
                dropdown.classList.remove('fade-in');
                dropdown.classList.add('fade-out');
                setTimeout(() => dropdown.style.display = 'none', 300);
            };

            anchor.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId);
                dropdown.style.display = 'block';
                dropdown.classList.remove('fade-out');
                dropdown.classList.add('fade-in');
            });

            anchor.addEventListener('mouseleave', () => {
                timeoutId = setTimeout(hideDropdown, 2000);
            });

            dropdown.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId);
            });

            dropdown.addEventListener('mouseleave', () => {
                hideDropdown();
            });
        }
    });
});
