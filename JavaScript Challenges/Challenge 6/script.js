/*setTimeout(function() {
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
  });*/
  // step 2
  /*function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve("Data fetched successfully!");
        } else {
          reject("Network Error!");
        }
      }, 3000); // 3000 milliseconds = 3 seconds
    });
  }
  
  async function fetchPost() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching post:', error);
    }
  }
  
  (async () => {
    try {
      const simulatedResult = await simulateNetworkRequest();
      console.log('Simulated Result:', simulatedResult);
  
      const postData = await fetchPost();
      console.log('Fetched Post:', postData);
    } catch (error) {
      console.error('Error:', error);
    }
  })();
  */
 //step 3
 async function fetchPosts(postIds) {
    const promises = postIds.map(postId =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok for post ${postId}`);
          }
          return response.json();
        })
        .catch(error => {
          throw new Error(`Error fetching post ${postId}: ${error}`);
        })
    );
  
    return Promise.all(promises);
  }
  
  (async () => {
    try {
      const postIds = [1, 2, 3];
      const posts = await fetchPosts(postIds);
  
      console.log("Fetched Posts:", posts);
      
      // Sequentially process the fetched posts
      for (const post of posts) {
        console.log("Processed Post:", post);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  })();
  