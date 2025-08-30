js_content = """
// ✅ Console confirmation (for debugging)
console.log("Page Loaded: Ali Fitness Trainer");

// ✅ Contact Form Handler
function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = "Message sent! I’ll get back to you soon.";
  event.target.reset();
  setTimeout(() => {
    status.textContent = "";
  }, 4000);
  return false;
}

// ✅ Mobile Hamburger Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('active');
});

// ✅ Smooth Scroll for internal links (Bonus UX)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});
"""

# Save files
from pathlib import Path

output_dir = Path("/mnt/data/ali-fitness")
output_dir.mkdir(exist_ok=True)

(output_dir / "index.html").write_text(html_content)
(output_dir / "style.css").write_text(css_content)
(output_dir / "script.js").write_text(js_content)

"/mnt/data/ali-fitness"
