    // Retrieve all navigation links
    const navigationLinks = document.querySelectorAll('.navigation-link');
    const loginLink = document.querySelector('.login-link');

    // Add click event listener to each link
    navigationLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Add click event listener to the login link
    loginLink.addEventListener('click', handleLoginClick);

    // Click event handler for navigation links
    function handleClick(event) {
      event.preventDefault();
      const targetSectionId = event.target.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetSectionId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Click event handler for the login link
    function handleLoginClick(event) {
      // No preventDefault() is needed as we want the link to navigate to the login page
      // You may add additional logic here if necessary
    }