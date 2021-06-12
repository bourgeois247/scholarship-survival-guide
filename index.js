const reviews = document.getElementsByClassName('review');
let activeReviewId = 0;

function updateActiveReview() {
  const activeReview = document.getElementsByClassName('review active');

  if (activeReview.length > 0) {
    activeReview[0].classList.remove('active');
  }

  reviews[activeReviewId].classList.add('active');
  activeReviewId = activeReviewId + 1 <= reviews.length - 1 ? ++activeReviewId : 0;
}

const intervalId = setInterval(updateActiveReview, 2000);
