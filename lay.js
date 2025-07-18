/*
    Last Modified: 2025-07-18 13:08
    Author: Maxim
    Contact: https://www.maxim.pe.kr
    License: © 2025 Maxim. All Rights Reserved.
*/

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const allProductItems = document.querySelectorAll('.product-item');

        allProductItems.forEach(item => {
            const label = item.querySelector('.item-label');
            if (label && label.textContent.startsWith('--')) {
                // Add classes for styling and icon creation, then remove prefix
                item.classList.add('is-sub-item', 'is-refill');
                label.textContent = label.textContent.substring(2).trim();
            }
        });
    }, 200);
});
