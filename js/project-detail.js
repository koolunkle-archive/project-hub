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
  root.innerHTML = buildProjectHtml(data);
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
