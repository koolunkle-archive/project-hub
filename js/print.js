// About 페이지와 모든 프로젝트 상세를 한 문서로 모아 인쇄(PDF 저장)할 수 있게 한다.
// About 내용은 about.html에서 그대로 가져와, 내용을 두 곳에서 관리하지 않도록 한다.
async function renderPrintDocument() {
  const root = document.getElementById("printRoot");

  let aboutHtml = "";
  try {
    const response = await fetch("about.html");
    const doc = new DOMParser().parseFromString(await response.text(), "text/html");
    doc.querySelectorAll(".about-cta").forEach((el) => el.remove());
    const parts = [doc.querySelector(".about-hero"), ...doc.querySelectorAll(".about-section")];
    aboutHtml = parts.filter(Boolean).map((el) => el.outerHTML).join("");
  } catch (error) {
    aboutHtml = `<p class="print-loading">About 내용을 불러오지 못했습니다. 배포된 사이트에서 열어 주세요.</p>`;
  }

  const projectsHtml = Object.values(PROJECTS)
    .map((data) => `<article class="print-project">${buildProjectHtml(data, { withBack: false })}</article>`)
    .join("");

  root.innerHTML = `
    ${aboutHtml}
    <section class="print-projects">
      <h2 class="about-section-title print-projects-title">Projects</h2>
      ${projectsHtml}
    </section>
  `;

  // 화면용 등장 애니메이션 없이 모든 요소를 바로 보이게 한다
  root.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed"));
}

document.addEventListener("DOMContentLoaded", () => {
  renderPrintDocument();
  document.getElementById("printButton").addEventListener("click", () => window.print());
});
