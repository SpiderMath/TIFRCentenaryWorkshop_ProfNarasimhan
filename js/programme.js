(function () {
  const scheduleMount = document.getElementById("schedule-mount");
  const speakersMount = document.getElementById("speakers-mount");

  if (!scheduleMount || !speakersMount || typeof workshopData === "undefined") {
    return;
  }

  // 1. Render Timetable Schedule
  let scheduleHTML = "";
  workshopData.schedule.forEach(function (dayGroup) {
    scheduleHTML += `
      <div class="day-group">
        <div class="day-title">${dayGroup.day}</div>
        <table class="timetable">
          <tbody>
    `;

    dayGroup.sessions.forEach(function (session) {
      const rowClass = session.isBreak ? ' class="break-row"' : "";
      let speakerLine = "";

      if (session.speaker) {
        if (session.anchor) {
          speakerLine = `<div class="timetable-speaker">Speaker: <a href="#speaker-${session.anchor}" class="speaker-jump-link">${session.speaker}</a></div>`;
        } else {
          speakerLine = `<div class="timetable-speaker">Speaker: ${session.speaker}</div>`;
        }
      }

      scheduleHTML += `
        <tr${rowClass}>
          <td class="timetable-time">${session.time}</td>
          <td class="timetable-content">
            <div class="timetable-title">${session.title}</div>
            ${speakerLine}
          </td>
        </tr>
      `;
    });

    scheduleHTML += `
          </tbody>
        </table>
      </div>
    `;
  });
  scheduleMount.innerHTML = scheduleHTML;

  // 2. Render Confirmed Speakers Directory
  // 2. Render Confirmed Speakers Directory
  let speakersHTML = "";
  workshopData.speakers.forEach(function (sp) {
    let websitePill = "";
    if (sp.website && sp.website.trim() !== "") {
      websitePill = `
        <a href="${sp.website}" class="speaker-web-pill" target="_blank" rel="noopener noreferrer" aria-label="Visit academic webpage of ${sp.name}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>Webpage</span>
        </a>
      `;
    }

    speakersHTML += `
      <article id="speaker-${sp.anchor}" class="speaker-card">
        <img class="speaker-photo" src="${sp.image}" alt="Photo of ${sp.name}" loading="lazy">
        <div class="speaker-name">${sp.name}</div>
        <div class="speaker-affiliation">${sp.affiliation}</div>
        ${websitePill}
      </article>
    `;
  });
  speakersMount.innerHTML = speakersHTML;

  // 3. Highlight speaker card when clicked from schedule
  document.addEventListener("click", function (event) {
    const link = event.target.closest(".speaker-jump-link");
    if (!link) return;

    const targetId = link.getAttribute("href").substring(1);
    const targetCard = document.getElementById(targetId);

    if (targetCard) {
      document.querySelectorAll(".speaker-card.highlighted").forEach(function (card) {
        card.classList.remove("highlighted");
      });

      targetCard.classList.add("highlighted");
      targetCard.scrollIntoView({ behavior: "smooth", block: "center" });

      setTimeout(function () {
        targetCard.classList.remove("highlighted");
      }, 2500);
    }
  });
})();
