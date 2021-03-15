$("#gallery").on("click", ".lazy-image", function (e) {
  console.log("click");
  const id = $(e.target).attr("data-id");
  console.log(id);

  $.get(`/api/images/${id}`).then((data) => zoomImage(data));
});

const zoomImage = (image) => {
  $("#gallery").hide(500);
  $("#zoom").show(-1000);
  const row = $("<row>");
  const col = $("<col-md-12>");
  const zoomCont = $("<div>").addClass("card");
  const zoomImg = $("<img>")
    .addClass("img-thumbnail lazy-image image--cover zoomed")
    .attr("src", image.image)
    .attr("data-src", image.image)
    .attr("data-id", image._id);

  row.append(col);
  col.append(zoomCont);
  zoomCont.append(zoomImg);
  $("#zoom").append(row);
};

$("#zoom").on("click", $(".zoomed"), function () {
  $("#zoom").toggle(500);
  $("#zoom").empty();
  $("#gallery").toggle();
});
