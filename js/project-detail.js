function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug");
}

function renderProject() {
  const root = document.getElementById("detailRoot");
  const slug = getSlug();
  const data = slug && PROJECTS[slug];

  if (!data) {
    root.innerHTML = `
      <header class="detail-header">
        <a class="detail-back" href="projects.html">← 프로젝트 목록으로</a>
        <h1 class="detail-title" style="margin-top: 24px;">프로젝트를 찾을 수 없습니다</h1>
      </header>
    `;
    return;
  }

  document.title = `${data.title} · Koolunkle's Hub`;

  const metaHtml = [`<span class="card-category">${data.category}</span>`];
  if (data.periodLabel) {
    metaHtml.push(`<span class="card-period">${data.periodLabel}</span>`);
  }

  const tagsHtml = data.tags
    .map((tag) => `<span class="tech-tag">${tag}</span>`)
    .join("");
  const contributionsHtml = data.contributions
    .map((item) => `<li>${item}</li>`)
    .join("");
  const githubHtml = data.github
    ? `<a class="detail-github" href="${data.github}" target="_blank" rel="noopener">GitHub ↗</a>`
    : `<span class="detail-github is-disabled">비공개 프로젝트 — 코드 및 이미지는 공개하지 않습니다</span>`;

  root.innerHTML = `
    <header class="detail-header">
      <a class="detail-back" href="projects.html">← 프로젝트 목록으로</a>
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

      <section class="detail-section" data-reveal>
        <h2 class="detail-section-title">트러블슈팅 / 기술적 도전</h2>
        <p class="detail-placeholder">아직 정리 중인 내용입니다. 순차적으로 업데이트할 예정입니다.</p>
      </section>

      <section class="detail-section" data-reveal>
        <h2 class="detail-section-title">배운점 / 회고</h2>
        <p class="detail-placeholder">아직 정리 중인 내용입니다. 순차적으로 업데이트할 예정입니다.</p>
      </section>

      <section class="detail-section" data-reveal>
        <h2 class="detail-section-title">GitHub</h2>
        ${githubHtml}
      </section>
    </main>
  `;
}

function setupScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
    bar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProject();
  setupScrollProgress();
});
