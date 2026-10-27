$(document).ready(function () {
  // Native buttons support pointer, Enter, and Space with the same behavior.
  $(".links .abstract, .links .award, .links .bibtex").on("click", function () {
    const container = $(this).parent().parent();
    const kind = ["abstract", "award", "bibtex"].find((name) => $(this).hasClass(name));
    const panel = container.find(`div.${kind}.hidden`);
    const opening = !panel.hasClass("open");
    container.find("div.abstract.hidden, div.award.hidden, div.bibtex.hidden").removeClass("open").attr("aria-hidden", "true");
    container.find(".links [aria-expanded]").attr("aria-expanded", "false");
    if (opening) {
      panel.addClass("open").attr("aria-hidden", "false");
      $(this).attr("aria-expanded", "true");
    }
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
