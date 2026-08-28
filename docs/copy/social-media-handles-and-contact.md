# Social media handles and Contact

## Social Media - Contact Page and Footer

[Facebook (Icon)](https://www.facebook.com/HotelVillasPlayaSamaraBeachFrontAllInclusiveResort/)

[Instagram (Icon)](https://www.instagram.com/villasplayasamara/)

## Contacts - Contact Page and Footer

### Email

reserve@villasplayasamara.com

### Phone

[+506 4102 4040](tel:+50641024040)

### WhatsApp

[8659-8383](https://wa.me/50686598383)

### Toll Free

[+1 833 2685 858](tel:+18332685858)

### Address

[Villas Playa Samara, Playa Sámara, Guanacaste, Costa Rica](https://maps.app.goo.gl/4P1U2n5NMWqT6FKAA)

## Contact Page

### Map - OpenStreetMap iframe (For Visual Representation of Map)

```HTML
<div class="map-iframe-wrapper">
<!-- OpenStreetMap -->
<iframe class="map-iframe" width="100%" height="500" src="https://www.openstreetmap.org/export/embed.html?bbox=-85.50966560840607%2C9.871837801864013%2C-85.50635576248169%2C9.874482929194963&amp;layer=mapnik" style="border: none" scrolling="no" allowfullscreen></iframe>
</div>
```

```JS
document.addEventListener('DOMContentLoaded', function() {
    // Handle map scroll interaction to prevent unwanted zooming
    const mapWrapper = document.querySelector('.map-iframe-wrapper');
    const mapIframe = document.querySelector('.map-iframe');

    if (mapWrapper && mapIframe) {
        // Function to activate map interaction
        function activateMap() {
            mapWrapper.classList.add('active');
            mapIframe.style.pointerEvents = 'auto';

            // Focus the iframe to ensure keyboard events work
            setTimeout(() => {
                mapIframe.focus();
            }, 100);
        }

        // Function to deactivate map interaction
        function deactivateMap() {
            mapWrapper.classList.remove('active');
            mapIframe.style.pointerEvents = 'none';
        }

        // Click on map to activate interaction
        mapWrapper.addEventListener('click', function(e) {
            if (!mapWrapper.classList.contains('active')) {
                e.preventDefault();
                activateMap();
            }
        });

        // Handle mouse leave on map wrapper
        mapWrapper.addEventListener('mouseleave', function() {
            if (mapWrapper.classList.contains('active')) {
                mapIframe.style.pointerEvents = 'none';
            }
        });

        // Handle escape key to deactivate map
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mapWrapper.classList.contains('active')) {
                deactivateMap();
            }
        });

        // Handle click outside map to deactivate
        document.addEventListener('click', function(e) {
            if (mapWrapper.classList.contains('active') &&
                !mapWrapper.contains(e.target)) {
                deactivateMap();
            }
        });

        // Prevent scroll on map when not active
        mapWrapper.addEventListener('wheel', function(e) {
            if (!mapWrapper.classList.contains('active')) {
                e.preventDefault();
            }
        }, { passive: false });

        // Initialize map state
        deactivateMap();
    }
});
```
