'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('rashmikaanuhas1111@gmail.com');
    copyStatus.textContent = 'Email address copied.';
  } catch {
    copyStatus.textContent = 'Select and copy the email address, or click it to open your email app.';
  }
});
