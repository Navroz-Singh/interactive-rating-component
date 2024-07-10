let typ = document.body.getElementsByClassName("thankspage")[0]
typ.classList.toggle("hidden")
let main = document.body.getElementsByTagName("main")[0]

let submit = document.body.getElementsByClassName("submit")[0]

let rating  = 0;

let ratingpush = document.body.getElementsByTagName("span")[0]

let selected  = false;

let buttons = document.body.getElementsByTagName("button");


Array.from(buttons).forEach(function (button) {
    button.addEventListener("click", function (but){
      Array.from(buttons).forEach(function(e){
        e.classList.remove("clicked");
      });
      but.currentTarget.classList.add("clicked");
      rating = but.currentTarget.value;
      selected = true;
    });
});
  


submit.addEventListener("click", function(e){
    if(selected){
        main.classList.toggle("hidden");
        typ.classList.toggle("hidden");
        ratingpush.innerHTML = rating
    }
})

