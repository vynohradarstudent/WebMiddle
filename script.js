$(document).ready(function () {
  fetch(
    "https://raw.githubusercontent.com/MamboDancer/WebMiddleCyberween/main/task.json"
  )
    .then((response) => response.json())
    .then((data) => show(data));

  function show(data) {
    console.log(data);
    console.log(data.event);
    $(".content1").append(data.event)

    console.log(data.event);
    data.guests.forEach((e) => {
      $(".content").append(`
          <div class='page'>
          <h1>${e.name}</h1>
           <p>Description: ${e.about}</p>
           <img src="${e.photo_url}" alt="Photo about ${e.name}" width="300px">
           </div>`);
    });
  }
});
