// Custom Cursor Logic
const dot = document.getElementById('cursorDot');
const outline = document.getElementById('cursorOutline');

window.addEventListener('mousemove', (e) => {
    // Dot position
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';

    // Outline smooth follow
    outline.animate({
        left: e.clientX - 20 + 'px',
        top: e.clientY - 20 + 'px'
    }, { duration: 500, fill: "forwards" });
});

// Cursor Hover Effect on links/buttons
const interactables = document.querySelectorAll('button, a, select, input, .dropdown, label');
interactables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        outline.style.transform = 'scale(1.5)';
        outline.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
    });
    item.addEventListener('mouseleave', () => {
        outline.style.transform = 'scale(1)';
        outline.style.backgroundColor = 'transparent';
    });
});

// Modal Toggle Function
function toggleModal() {
    const modal = document.getElementById('formModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scroll
    } else {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable scroll
    }
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById('formModal');
    if (event.target == modal) {
        toggleModal();
    }
}

// Optional: Success Alert
function showSuccess() {
    alert("Thank you! Our team will contact you soon.");
    toggleModal();
}