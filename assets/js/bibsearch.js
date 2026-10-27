document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("bibsearch");
  const status = document.getElementById("bibsearch-status");
  if (!input || !status) return;

  const entries = [...document.querySelectorAll(".bibliography > li")];
  const groups = [...document.querySelectorAll("ol.bibliography")];
  const searchableText = entries.map((entry) => entry.textContent.toLowerCase());

  const filter = () => {
    const query = input.value.trim().toLowerCase();
    let matches = 0;
    entries.forEach((entry, index) => {
      const match = searchableText[index].includes(query);
      entry.classList.toggle("unloaded", !match);
      if (match) matches += 1;
    });
    groups.forEach((group) => {
      const empty = !group.querySelector("li:not(.unloaded)");
      group.classList.toggle("unloaded", empty);
      const heading = group.previousElementSibling;
      if (heading && /^H[2-6]$/.test(heading.tagName)) heading.classList.toggle("unloaded", empty);
    });
    status.textContent = matches
      ? `${matches} publication${matches === 1 ? "" : "s"}${query ? " found" : ""}`
      : "No matching publications. Try another title, author, or venue.";
  };

  const readHash = () => {
    try {
      input.value = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      input.value = "";
    }
    filter();
  };
  input.addEventListener("input", filter);
  window.addEventListener("hashchange", readHash);
  readHash();
});
