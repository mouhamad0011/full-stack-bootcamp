function delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
delay(2000).then(() => {
    console.log("Delayed action after 2000 milliseconds");
  });

  
  function fetchRandomFact() {
    return fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(response => response.json())
      .then(data => data.text);
  }
  
  fetchRandomFact()
    .then(fact => {
      console.log("Random Fact:", fact);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  