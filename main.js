// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

document.addEventListener('DOMContentLoaded', () => {
  // When a user clicks on an empty heart
  document.querySelectorAll('.like-glyph').forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          // When the "server" returns a success status
          heart.innerText = FULL_HEART;
          heart.classList.add('activated-heart');
        })
        .catch(error => {
          // When the "server" returns a failure status
          errorModal.classList.remove('hidden');
          const errorMessage = document.getElementById('modal-message');
          errorMessage.innerText = error;
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });

  // When a user clicks on a full heart
  document.querySelectorAll('.activated-heart').forEach(fullHeart => {
    fullHeart.addEventListener('click', () => {
      fullHeart.innerText = EMPTY_HEART;
      fullHeart.classList.remove('activated-heart');
    });
  });
});