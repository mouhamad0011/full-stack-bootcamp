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
    async function fetchRandomFact() {
        try {
          const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
          const data = await response.json();
          return data.text;
        } catch (error) {
          throw new Error("An error occurred: " + error);
        }
      }
      
      (async () => {
        try {
          const fact = await fetchRandomFact();
          console.log("Random Fact:", fact);
        } catch (error) {
          console.error(error.message);
        }
      })();
      