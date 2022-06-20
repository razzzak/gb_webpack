console.log("useFull");

loadScript("./js/timer.js", () => {
  console.log("ok");
});

loadScript("./js/show.js", () => {
  console.log("show.js load");
});

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js",
  () => {
    console.log("cdn load");
  }
);

loadScript("./js/howler.js", () => {
  console.log("howler.js load");
});
