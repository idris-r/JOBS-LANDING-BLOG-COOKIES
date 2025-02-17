function initCookieConsent() {
  // Create cookie consent element
  const cookieConsent = document.createElement('div');
  cookieConsent.className = 'cookie-consent';
  cookieConsent.innerHTML = `
    <div class="cookie-consent-text">
      We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
      <a href="/privacy-policy.html" style="color: #6366f1; text-decoration: underline;">Learn more</a>
    </div>
    <div class="cookie-consent-buttons">
      <button class="cookie-consent-button cookie-consent-accept">Accept</button>
      <button class="cookie-consent-button cookie-consent-decline">Decline</button>
    </div>
  `;

  // Add to DOM
  document.body.appendChild(cookieConsent);

  // Show the consent after a brief delay
  setTimeout(() => {
    cookieConsent.classList.add('show');
  }, 1000);

  // Handle button clicks
  const acceptButton = cookieConsent.querySelector('.cookie-consent-accept');
  const declineButton = cookieConsent.querySelector('.cookie-consent-decline');

  function handleConsent(accepted) {
    // Set cookie to remember user's choice
    document.cookie = `cookies_accepted=${accepted}; max-age=${60*60*24*365}; path=/`;
    // Remove the consent popup
    cookieConsent.remove();
  }

  acceptButton.addEventListener('click', () => handleConsent(true));
  declineButton.addEventListener('click', () => handleConsent(false));

  // Check if user has already made a choice
  if (document.cookie.includes('cookies_accepted')) {
    cookieConsent.remove();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCookieConsent);
