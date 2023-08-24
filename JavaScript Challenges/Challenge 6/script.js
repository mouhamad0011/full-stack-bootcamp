setTimeout(function() {
    console.log("Hello after 5 seconds!");
}, 5000); 

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    console.log(timeString);
  }
  updateClock();
  setInterval(updateClock, 1000);
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000); 
  });
  
  myPromise.then((message) => {
    console.log(message);
  });
  