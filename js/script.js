// Simple fade animation on scroll

const cards = document.querySelectorAll('.card, .course-card, .feature');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

cards.forEach(card=>{
  card.classList.add('hidden');
  observer.observe(card);
});
