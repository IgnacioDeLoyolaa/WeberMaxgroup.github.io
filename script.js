document.addEventListener("DOMContentLoaded", function() {

    // ... (tu código JS existente como el del año del footer, validación, cookies, etc.) ...

    // --- INICIO: Lógica para el efecto fade-in al hacer scroll ---
    const sectionsToFade = document.querySelectorAll('.fade-in-section');

    if (sectionsToFade.length > 0) {
        const observerOptions = {
            root: null, // El viewport
            rootMargin: '0px',
            threshold: 0.15 // Porcentaje de visibilidad para disparar (15%)
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Dejar de observar una vez que es visible
                }
            });
        };

        const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

        sectionsToFade.forEach(section => {
            intersectionObserver.observe(section);
        });
    }
    // --- FIN: Lógica para el efecto fade-in al hacer scroll ---

});