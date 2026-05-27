document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, you'd send this data to a server
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    console.log('Feedback submitted:', data);

    // Hide form and show success message
    document.getElementById('feedbackForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
});