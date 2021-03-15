loadImages();

function createEl(htmlString = "", className) {
  const el = document.createElement(htmlString);
  if (className) {
    el.setAttribute("class", className);
  }
  return el;
}

function initLazyImages() {
  const lazyImages = document.querySelectorAll(".lazy-image");

  function onIntersection(imageEntities) {
    imageEntities.forEach((image) => {
      if (image.isIntersecting) {
        observer.unobserve(image.target);
        image.target.src = image.target.dataset.src;
      }
    });
  }

  const observer = new IntersectionObserver(onIntersection);

  lazyImages.forEach((image) => observer.observe(image));
}

function loadImages() {
  fetch("/api/images")
    .then((res) => res.json())
    .then((data) => createCards(data))
    .then(() => initLazyImages());
}

function createCards(data) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  let lastRow;
  const row = createEl("div", "row");

  return data.forEach(function (image, index) {
    const col = createEl("div", "col-md-4 mt-4");
    col.appendChild(createCard(image));
    if (index % 3 === 0) {
      row.appendChild(col);
      container.appendChild(row);
      lastRow = row;
    }

    return lastRow.appendChild(col);
  });
}

function createCard(image) {
  const card = createEl("div", "card");
  // const imageContainer = createEl("div", "container");
  const img = createEl("img", "img-thumbnail lazy-image image--cover ");
  img.setAttribute(
    "src",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAATsA3BT31OAAAAAASUVORK5CYII="
  );
  img.setAttribute(
    "src",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPc9OX/TwAIpQOgE36vNQAAAABJRU5ErkJggg=="
  );
  img.setAttribute("data-src", image.image);

  img.setAttribute("alt", image.description);

  card.appendChild(img);

  return card;
}
