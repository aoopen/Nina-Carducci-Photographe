// RichSnippet-data.js
document.addEventListener("DOMContentLoaded", function() {
    const ldJsonScript = document.createElement('script');
    ldJsonScript.type = 'application/ld+json';
    ldJsonScript.text = JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Nina Carducci",
        "jobTitle": "Photographe",
        "url": "https://www.ninacarducci.photo",
        "image": "https://www.ninacarducci.photo/assets/images/nina.png",
        "sameAs": [
            "https://www.instagram.com/ninacarducci.photo/?hl=fr"
        ],
        "description": "Nina Carducci est une photographe professionnelle spécialisée dans les portraits et les événements.",
        "worksFor": {
            "@type": "Organization",
            "name": "Nina Carducci Photography",
            "url": "https://www.ninacarducci.photo"
        },
        "address": {
            "@type": "123 Rue de la Photographie Paris 75001 ",
            "addressLocality": "Île-de-France",
            "addressCountry": "France"
        }
    });
    document.head.appendChild(ldJsonScript);
});
