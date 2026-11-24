function includeHTML(id, file) {
  fetch(file)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      document.getElementById(id).innerHTML = doc.body.innerHTML;
    });
}

includeHTML('site-header', 'header.html');
includeHTML('site-nav', 'nav.html');
includeHTML('site-footer', 'footer.html');
