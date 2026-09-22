(function () {
    const sponsorsMount = document.getElementById("sponsors-mount");
    if (!sponsorsMount || typeof workshopData === "undefined" || !Array.isArray(workshopData.sponsors)) {
        return;
    }

    if (workshopData.sponsors.length === 0) {
        return;
    }

    let cardsHTML = "";
    workshopData.sponsors.forEach(function (sponsor) {
        const hasLightLogo = sponsor.logo && sponsor.logo.trim() !== "";
        const hasDarkLogo = sponsor.logoDark && sponsor.logoDark.trim() !== "";

        let innerContent = "";

        if (hasLightLogo && hasDarkLogo) {
            innerContent = `
                <div class="sponsor-logo-frame">
                    <img src="${sponsor.logo}" alt="${sponsor.name}" class="sponsor-logo-img logo-light">
                    <img src="${sponsor.logoDark}" alt="${sponsor.name}" class="sponsor-logo-img logo-dark">
                </div>
            `;
        } else if (hasLightLogo) {
            innerContent = `
                <div class="sponsor-logo-frame">
                    <img src="${sponsor.logo}" alt="${sponsor.name}" class="sponsor-logo-img">
                </div>
            `;
        } else {
            const subtitleHTML = sponsor.subtitle && sponsor.subtitle.trim() !== ""
                ? `<span class="sponsor-card-sub">${sponsor.subtitle}</span>`
                : "";

            innerContent = `
                <div class="sponsor-text-lockup">
                    <span class="sponsor-card-title">${sponsor.name}</span>
                    ${subtitleHTML}
                </div>
                <svg class="sponsor-external-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            `;
        }

        if (sponsor.url && sponsor.url.trim() !== "") {
            cardsHTML += `
                <a href="${sponsor.url}" class="sponsor-card" target="_blank" rel="noopener noreferrer" title="${sponsor.name}">
                    ${innerContent}
                </a>
            `;
        } else {
            cardsHTML += `
                <div class="sponsor-card">
                    ${innerContent}
                </div>
            `;
        }
    });

    sponsorsMount.innerHTML = `
        <section class="programme-block sponsors-section" aria-label="Sponsors and Support">
            <h2 class="section-heading">Supported by</h2>
            <div class="sponsors-grid">
                ${cardsHTML}
            </div>
        </section>
    `;
})();
