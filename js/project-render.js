// 프로젝트 상세 HTML을 만든다. 상세 페이지(project-detail.js)와 인쇄용 페이지(print.js)가 함께 쓴다.
function buildProjectHtml(data, { withBack = true } = {}) {
  const metaHtml = [`<span class="card-category">${data.category}</span>`];
  if (data.periodLabel) {
    metaHtml.push(`<span class="card-period">${data.periodLabel}</span>`);
  }
  if (data.award) {
    metaHtml.push(`<span class="card-award">${data.award}</span>`);
  }

  const tagsHtml = data.tags
    .map((tag) => `<span class="tech-tag">${tag}</span>`)
    .join("");
  const contributionsHtml = data.contributions
    .map((item) => `<li>${item}</li>`)
    .join("");
  // github: 문자열(단일 저장소) 또는 { label, url } 배열(여러 저장소)
  const repos = Array.isArray(data.github)
    ? data.github
    : data.github
      ? [{ label: "GitHub", url: data.github }]
      : [];
  const linkList = (items) =>
    `<div class="detail-github-list">${items
      .map(
        (item) =>
          `<a class="detail-github" href="${item.url}" target="_blank" rel="noopener">${item.label} ↗</a>`,
      )
      .join("")}</div>`;
  const githubHtml = repos.length
    ? linkList(repos)
    : `<span class="detail-github is-disabled">비공개 프로젝트 — 코드 및 이미지는 공개하지 않습니다</span>`;
  // links: 운영 서비스, 시연 영상 등 GitHub 외 링크 ({ label, url } 배열)
  const linksHtml =
    data.links && data.links.length
      ? `
      <section class="detail-section" data-reveal>
        <h2 class="detail-section-title">서비스 및 시연</h2>
        ${linkList(data.links)}
      </section>`
      : "";

  // 내용이 있는 프로젝트에만 섹션을 보여준다 (문자열 배열)
  const optionalSection = (title, items) =>
    items && items.length
      ? `
      <section class="detail-section" data-reveal>
        <h2 class="detail-section-title">${title}</h2>
        <ul class="detail-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>`
      : "";

  return `
    <header class="detail-header">
      ${withBack ? `<a class="detail-back" href="projects.html">← 프로젝트 목록으로</a>` : ""}
      <div class="detail-meta">${metaHtml.join("")}</div>
      <h1 class="detail-title">${data.title}${
        data.titleEn
          ? ` <span class="detail-title-en">(${data.titleEn})</span>`
          : ""
      }</h1>
      <p class="detail-lead">${data.description}</p>
      <div class="detail-tags">${tagsHtml}</div>
    </header>

    <main class="detail-body">
      <section class="detail-section" data-reveal>
        <h2 class="detail-section-title">담당 역할 및 주요 기여</h2>
        <ul class="detail-list">${contributionsHtml}</ul>
      </section>
${optionalSection("트러블슈팅 / 기술적 도전", data.challenges)}
${optionalSection("배운점 / 회고", data.retrospective)}
${linksHtml}
      <section class="detail-section" data-reveal>
        <h2 class="detail-section-title">GitHub</h2>
        ${githubHtml}
      </section>
    </main>
  `;
}
