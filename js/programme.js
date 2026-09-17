(function () {
    const scheduleMount = document.getElementById("schedule-mount");
    const speakersMount = document.getElementById("speakers-mount");

    if (!scheduleMount || !speakersMount || typeof workshopData === "undefined") {
        return;
    }

    // 1. Build a quick lookup map of speakers by anchor
    const speakerMap = {};
    workshopData.speakers.forEach(function (sp) {
        speakerMap[sp.anchor] = sp;
    });

    // Helper: Resolves anchors to linked names, or prints raw text if not in directory
    function renderSpeakerLine(item, cssClass) {
        // Collect speakers into a flat array whether defined as 'speakers' or legacy 'speaker'
        let rawList = [];
        if (Array.isArray(item.speakers)) {
            rawList = item.speakers;
        } else if (item.speaker) {
            rawList = [item.anchor || item.speaker];
        }

        if (rawList.length === 0) {
            return "";
        }

        const renderedSpeakers = rawList.map(function (identifier) {
            // Check if the identifier matches an anchor in our directory
            if (speakerMap[identifier]) {
                const sp = speakerMap[identifier];
                return `<a href="#speaker-${sp.anchor}" class="speaker-jump-link">${sp.name}</a>`;
            }
            // Otherwise, treat it as a plain name string
            return identifier;
        });

        const label = renderedSpeakers.length > 1 ? "Speakers" : "Speaker";
        return `<div class="${cssClass}">${label}: ${renderedSpeakers.join(", ")}</div>`;
    }

    // 2. Render Timetable Schedule
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
            const sessionSpeakerLine = renderSpeakerLine(session, "timetable-speaker");

            let talksHTML = "";
            if (session.talks && session.talks.length > 0) {
                talksHTML += '<div class="subtalks-list">';
                session.talks.forEach(function (talk) {
                    const talkSpeaker = renderSpeakerLine(talk, "subtalk-speaker");

                    let abstractBlock = "";
                    if (talk.abstract && talk.abstract.trim() !== "") {
                        abstractBlock = `
                            <details class="subtalk-abstract-details">
                                <summary>Abstract</summary>
                                <div class="subtalk-abstract-body">${talk.abstract}</div>
                            </details>
                        `;
                    }

                    talksHTML += `
                        <div class="subtalk-item">
                            <div class="subtalk-title"><strong>${talk.title}</strong></div>
                            ${talkSpeaker}
                            ${abstractBlock}
                        </div>
                    `;
                });
                talksHTML += '</div>';
            }

            scheduleHTML += `
                <tr${rowClass}>
                    <td class="timetable-time">${session.time || ""}</td>
                    <td class="timetable-content">
                        <div class="timetable-title${session.talks && session.talks.length ? ' umbrella-title' : ''}">${session.title}</div>
                        ${sessionSpeakerLine}
                        ${talksHTML}
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

    // 3. Render Confirmed Speakers Directory
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

    // 4. Highlight speaker card when clicked from schedule
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
