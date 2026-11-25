(function () {
  // Notice configuration list
  // Set "active" to true/false to turn an item on or off globally.
  // In "pages", set boolean flags to control on which pages the notice appears.
  const siteNotices = [
    {
      id: "accepted-posters",
      title: "Accepted student posters",
      html: `<p>See the <a href="programme.html#accepted-posters">accepted posters section</a> in the workshop programme.</p>`,
      active: true,
      pages: {
        home: true,
        programme: false,
        participate: false,
        publicLecture: false,
        remembering: false,
      },
    },
    {
      id: "registration-deadline",
      title: "Registration will close on November 28th.",
      html: `<p>Please register <a href="https://forms.gle/dMWKAp92bVZXLoBAA" target="_blank" rel="noopener noreferrer" aria-label="Register here for workshop attendance">here</a> by <time datetime="2026-11-28">November 28th</time> if you would like to attend.</p>`,
      active: true,
      pages: {
        home: true,
        programme: false,
        participate: true,
        publicLecture: false,
        remembering: false,
      },
    },
  ];
  const mountPoint = document.getElementById("notices-mount");
  if (!mountPoint) return;
  // Determine current page key from body data-page or filename
  const currentPage = document.body.getAttribute("data-page") || "home";
  // Filter active notices configured for this specific page (maximum 4)
  const activeNotices = siteNotices
    .filter(function (item) {
      return item.active && item.pages && item.pages[currentPage] === true;
    })
    .slice(0, 4);
  if (activeNotices.length === 0) {
    mountPoint.innerHTML = "";
    return;
  }
  let noticesHTML =
    '<section class="notices-container" aria-labelledby="announcements-heading"><h2 id="announcements-heading" class="announcements-heading">Announcements</h2>';
  activeNotices.forEach(function (notice) {
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
