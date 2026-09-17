(function() {
    // Notice configuration list
    // Set "active" to true/false to turn an item on or off globally.
    // In "pages", set boolean flags to control on which pages the notice appears.
    const siteNotices = [{
        id: "poster-extension",
        tag: "Notice",
        html: 'Poster submission deadline has been extended to 15 November 2026. <a href="participate.html#engagement-tracks">Submit your poster proposal</a>.',
        active: true,
        pages: {
            home: true,
            programme: true,
            participate: true,
            publicLecture: true
        }
    }, {
        id: "general-registration",
        tag: "Update",
        html: 'Workshop attendance registration is open. <a href="participate.html#engagement-tracks">Register here</a>.',
        active: false,
        pages: {
            home: true,
            programme: true,
            participate: true,
            publicLecture: false
        }
    }];
    const mountPoint = document.getElementById("notices-mount");
    if (!mountPoint) return;
    // Determine current page key from body data-page or filename
    const currentPage = document.body.getAttribute("data-page") || "home";
    // Filter active notices configured for this specific page (maximum 3)
    const activeNotices = siteNotices.filter(function(item) {
        return item.active && item.pages && item.pages[currentPage] === true;
    }).slice(0, 3);
    if (activeNotices.length === 0) {
        mountPoint.innerHTML = "";
        return;
    }
    let noticesHTML = '<div class="notices-container" role="region" aria-label="Announcements">';
    activeNotices.forEach(function(notice) {
        noticesHTML += `
            <div class="announcement-banner" role="status">
                <span class="announcement-tag">${notice.tag}</span>
                <span class="announcement-text">${notice.html}</span>
            </div>
        `;
    });
    noticesHTML += "</div>";
    mountPoint.innerHTML = noticesHTML;
})();
