document.querySelectorAll('nav.menu .item').forEach(navItem => {
    navItem.addEventListener('mouseover', () => {
        const navItemContent = navItem.textContent.trim();

        document.querySelectorAll(`.section .menu .item`).forEach(sectionItem => {
          if (sectionItem.textContent.trim() === navItemContent) {
            sectionItem.classList.add('hovering');
          }
        });
    });

    navItem.addEventListener('mouseout', () => {
        const navItemContent = navItem.textContent.trim();
        document.querySelectorAll(`.section .menu .item`).forEach(sectionItem => {
          if (sectionItem.textContent.trim() === navItemContent) {
            sectionItem.classList.remove('hovering');
          }
        });
    });
});
