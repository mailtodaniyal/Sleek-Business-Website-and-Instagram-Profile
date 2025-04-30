        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animateElements.forEach(element => {
                observer.observe(element);
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            const scrollToTopBtn = document.createElement('button');
            scrollToTopBtn.innerHTML = '↑';
            scrollToTopBtn.style.position = 'fixed';
            scrollToTopBtn.style.bottom = '30px';
            scrollToTopBtn.style.right = '30px';
            scrollToTopBtn.style.width = '50px';
            scrollToTopBtn.style.height = '50px';
            scrollToTopBtn.style.borderRadius = '50%';
            scrollToTopBtn.style.background = 'var(--accent)';
            scrollToTopBtn.style.color = 'white';
            scrollToTopBtn.style.border = 'none';
            scrollToTopBtn.style.cursor = 'pointer';
            scrollToTopBtn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.transition = 'opacity 0.3s';
            scrollToTopBtn.style.zIndex = '1000';
            scrollToTopBtn.style.fontSize = '20px';
            document.body.appendChild(scrollToTopBtn);
            
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollToTopBtn.style.opacity = '1';
                } else {
                    scrollToTopBtn.style.opacity = '0';
                }
            });
        });
