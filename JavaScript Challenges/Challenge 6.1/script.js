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
    