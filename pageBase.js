const images = document.querySelectorAll('.img');

images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transition = 'transform 0.4s ease';
    img.style.transform = 'scale(1.1)';
    img.style.zIndex = '2';


    images.forEach(other => {
      if (other !== img) {
        other.style.transition = 'transform 0.6s ease';
        other.style.transform = 'scale(0.9)';
        other.style.zIndex = '1';
      }
    });
  });

  img.addEventListener('mouseleave', () => {
    images.forEach(other => {
      other.style.transition = 'transform 0.4s ease';
      other.style.transform = 'scale(1)';
      other.style.zIndex = '1';
    });
  });
});
