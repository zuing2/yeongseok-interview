const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const norm = (v="") => String(v).toLowerCase().replace(/\s+/g," ").trim();
const esc = (v="") => String(v).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));

function uniqueValues(arr, key) {
  return [...new Set(arr.map(x => x[key]).filter(Boolean))].sort((a,b)=>String(a).localeCompare(String(b),"ko"));
}
function fillSelect(select, values) {
  values.forEach(v => {
    const o = document.createElement("option");
    o.value = v; o.textContent = v; select.appendChild(o);
  });
}

const eduSearch = $("#eduSearch");
const eduRegion = $("#eduRegion");
fillSelect(eduRegion, uniqueValues(educationResources, "region"));

function renderEdu() {
  const q = norm(eduSearch.value);
  const region = eduRegion.value;
  const items = educationResources.filter(x => {
    const hay = norm([x.region,x.organization,x.title,x.kind,x.year,x.description].join(" "));
    return (!q || hay.includes(q)) && (!region || x.region===region);
  });
  $("#eduCards").innerHTML = items.length ? items.map(x => `
    <article class="card">
      <span class="badge edu">${esc(x.organization)}</span><span class="badge year">${esc(x.year)}</span>
      <h3>${esc(x.title)}</h3>
      <div class="meta">${esc(x.region)} · ${esc(x.kind)}</div>
      <p class="desc">${esc(x.description)}</p>
      <a class="source-link" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">공식 원문 보기 ↗</a>
    </article>`).join("") : `<div class="empty">조건에 맞는 교육청 자료가 없습니다.</div>`;
}
eduSearch.addEventListener("input",renderEdu); eduRegion.addEventListener("change",renderEdu);
$("#eduReset").onclick=()=>{eduSearch.value="";eduRegion.value="";renderEdu()};

const urSearch = $("#univResourceSearch");
const urRegion = $("#univResourceRegion");
const urKind = $("#univResourceKind");
fillSelect(urRegion, uniqueValues(universityResources, "region"));
fillSelect(urKind, uniqueValues(universityResources, "kind"));

function renderUniversityResources() {
  const q = norm(urSearch.value), region=urRegion.value, kind=urKind.value;
  const items = universityResources.filter(x => {
    const hay = norm([x.university,x.region,x.year,x.kind,x.title,x.description].join(" "));
    return (!q||hay.includes(q)) && (!region||x.region===region) && (!kind||x.kind===kind);
  });
  $("#univResourceCards").innerHTML = items.length ? items.map(x => `
    <article class="card">
      <span class="badge univ">${esc(x.university)}</span><span class="badge year">${esc(x.year)}</span>
      <h3>${esc(x.title)}</h3>
      <div class="meta">${esc(x.region)} · ${esc(x.kind)}</div>
      <p class="desc">${esc(x.description)}</p>
      <a class="source-link" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">대학 공식자료 열기 ↗</a>
    </article>`).join("") : `<div class="empty">조건에 맞는 대학 공식자료가 없습니다.</div>`;
}
[urSearch,urRegion,urKind].forEach(el=>el.addEventListener(el.tagName==="INPUT"?"input":"change",renderUniversityResources));
$("#univResourceReset").onclick=()=>{urSearch.value="";urRegion.value="";urKind.value="";renderUniversityResources()};

const pSearch=$("#portalSearch"), pRegion=$("#portalRegion");
fillSelect(pRegion, uniqueValues(universityPortals,"region"));
function renderPortals(){
  const q=norm(pSearch.value), region=pRegion.value;
  const items=universityPortals.filter(x=>{
    const hay=norm([x.university,x.region].join(" "));
    return (!q||hay.includes(q))&&(!region||x.region===region);
  });
  $("#portalCards").innerHTML=items.length?items.map(x=>`
    <article class="portal-card">
      <small>${esc(x.region)}</small>
      <h3>${esc(x.university)}</h3>
      <a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">공식 입학처 ↗</a>
    </article>`).join(""):`<div class="empty">조건에 맞는 대학이 없습니다.</div>`;
}
pSearch.addEventListener("input",renderPortals);pRegion.addEventListener("change",renderPortals);
$("#portalReset").onclick=()=>{pSearch.value="";pRegion.value="";renderPortals()};

function globalSearch(){
  const q=$("#globalSearch").value.trim();
  urSearch.value=q; urRegion.value=""; urKind.value=""; renderUniversityResources();
  pSearch.value=q; pRegion.value=""; renderPortals();
  eduSearch.value=q; eduRegion.value=""; renderEdu();
  location.hash="univ";
}
$("#globalSearchButton").onclick=globalSearch;
$("#globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter")globalSearch()});
$$("[data-keyword]").forEach(btn=>btn.onclick=()=>{
  $("#globalSearch").value=btn.dataset.keyword;
  globalSearch();
});

renderEdu(); renderUniversityResources(); renderPortals();
