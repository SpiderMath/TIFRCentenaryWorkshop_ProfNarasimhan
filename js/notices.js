(function() {
    // Notice configuration list
    // Set "active" to true/false to turn an item on or off globally.
    // In "pages", set boolean flags to control on which pages the notice appears.
    const siteNotices = [
        {
            id: "poster-extension",
            title: "Poster Submission is now closed",
            html: `<p>The student poster submission has <strong>concluded</strong>. Selected students will be informed by email soon.</p>`,
            active: true,
            pages: {
                home: true,
                programme: false,
                participate: false,
                publicLecture: false,
                remembering: false
            }
        },
        {
            id: "poster-extension",
            title: "Poster Submission deadline extended",
            html: `<p>The student poster submission deadline has been extended to <strong><time datetime="2026-10-30">October 30, 2026</time></strong>.
                <a class="announcement-submit">Submit
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                        <path d="M15 3h6v6M10 14 21 3"></path>
                        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                    </svg>
                </a></p>`,
            active: true,
            pages: {
                home: true,
                programme: false,
                participate: false,
                publicLecture: false,
                remembering: false
            }
        }
    ];
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
    let noticesHTML = '<section class="notices-container" aria-labelledby="announcements-heading"><h2 id="announcements-heading" class="announcements-heading">Announcements</h2>';
    activeNotices.forEach(function(notice) {
        noticesHTML += `
            <article class="announcement-banner">
                ${notice.tag ? `<span class="announcement-tag">${notice.tag}</span>` : ""}
                <div class="announcement-content">
                    ${notice.title ? `<h3 class="announcement-title">${notice.title}</h3>` : ""}
                    <div class="announcement-text">${notice.html}</div>
                </div>
            </article>
        `;
    });
    noticesHTML += "</section>";
    mountPoint.innerHTML = noticesHTML;
})();
