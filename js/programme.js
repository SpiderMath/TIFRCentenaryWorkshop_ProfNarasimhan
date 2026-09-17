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

		function renderSpeakerLine(item, cssClass) {
            // Check for multi-speaker array first
            if (Array.isArray(item.speakers) && item.speakers.length > 0) {
                const speakerLinks = item.speakers.map(function (sp) {
                    if (typeof sp === "string") {
                        return sp;
                    }
                    if (sp.anchor && sp.anchor.trim() !== "") {
                        return `<a href="#speaker-${sp.anchor}" class="speaker-jump-link">${sp.name}</a>`;
                    }
                    return sp.name;
                });

                const label = speakerLinks.length > 1 ? "Speakers" : "Speaker";
                return `<div class="${cssClass}">${label}: ${speakerLinks.join(", ")}</div>`;
            }

            // Fallback for single speaker field
            if (item.speaker && item.speaker.trim() !== "") {
                if (item.anchor && item.anchor.trim() !== "") {
                    return `<div class="${cssClass}">Speaker: <a href="#speaker-${item.anchor}" class="speaker-jump-link">${item.speaker}</a></div>`;
                }
                return `<div class="${cssClass}">Speaker: ${item.speaker}</div>`;
            }

            return "";
        }

        dayGroup.sessions.forEach(function (session) {
            // Case A: Umbrella session with multiple sub-talks
            if (session.talks && session.talks.length > 0) {
                scheduleHTML += `
                    <tr class="umbrella-header-row">
                        <td colspan="2">
                            <div class="umbrella-banner">
                                <span class="umbrella-time-badge">${session.time}</span>
                                <span class="umbrella-heading">${session.title}</span>
                            </div>
                        </td>
                    </tr>
                `;

                session.talks.forEach(function (talk, index) {
                    const talkLabel = (talk.time && talk.time.trim() !== "")
                        ? talk.time
                        : `Talk ${index + 1}`;

                    const talkSpeaker = renderSpeakerLine(talk, "subtalk-speaker-line");

                    let abstractBlock = "";
                    if (talk.abstract && talk.abstract.trim() !== "") {
                        abstractBlock = `
                            <details class="subtalk-abstract-details">
                                <summary>Abstract</summary>
                                <div class="subtalk-abstract-body">${talk.abstract}</div>
                            </details>
                        `;
                    }

                    scheduleHTML += `
                        <tr class="subtalk-row">
                            <td class="timetable-time subtalk-time-cell">${talkLabel}</td>
                            <td class="timetable-content">
                                <div class="subtalk-title-text">${talk.title}</div>
                                ${talkSpeaker}
                                ${abstractBlock}
                            </td>
                        </tr>
                    `;
                });
                return;
            }

            // Case B: Standalone session (breaks, welcome, public lecture, single talks)
            const rowClass = session.isBreak ? ' class="break-row"' : "";
            const speakerLine = renderSpeakerLine(session, "timetable-speaker");

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
