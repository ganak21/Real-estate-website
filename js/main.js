// ===========================
// NestWise Realty — Main JS
// ===========================

// NAV scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  // Hero nav transparent effect
  const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  if (isHome) navbar.classList.add('hero-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('hero-nav');
    } else {
      navbar.classList.remove('scrolled');
      if (isHome) navbar.classList.add('hero-nav');
    }
  });
}

// Burger menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Intersection observer for fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .prop-card, .why-card, .stat-item, .suite-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Gallery modal
let galleryImages = [];
let galleryIndex = 0;

function openGallery(images, startIndex = 0) {
  galleryImages = images;
  galleryIndex = startIndex;
  const modal = document.getElementById('galleryModal');
  if (!modal) return;
  modal.classList.add('open');
  updateGalleryImage();
}

function updateGalleryImage() {
  const img = document.getElementById('galleryMainImg');
  if (img) img.src = galleryImages[galleryIndex];
}

function closeGallery() {
  const modal = document.getElementById('galleryModal');
  if (modal) modal.classList.remove('open');
}

function galleryPrev() {
  galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  updateGalleryImage();
}

function galleryNext() {
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  updateGalleryImage();
}

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('galleryModal');
  if (!modal || !modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeGallery();
  if (e.key === 'ArrowLeft') galleryPrev();
  if (e.key === 'ArrowRight') galleryNext();
});
