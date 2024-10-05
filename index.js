
document.addEventListener('DOMContentLoaded', () => {
    // Select the paragraph element
    const paragraph = document.querySelector('p');
    
    // Change the initial text
    paragraph.textContent = "This is really cool!";
    setTimeout(() => {
      paragraph.textContent = "This is really cool!";
    }, 0); 
  });
  