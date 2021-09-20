// Promise is used to perform asynchronous operation/tasks
// Asynchronous operation means - non-blocking tasks, which means, it does not wait // for it to complete and continue executing next statements

function callGithubApi() {
  return new Promise(function (resolve, reject) {
    fetch('https://api.github.com')
      .then(function (response) {
        fetch('https://api.github.com/gists/public')
          .then(function (result) {
            resolve({ root: response.json(), gists: result.json() });
          })
          .catch(function (error) {
            reject(error);
          });
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

callGithubApi()
  .then(function (response) {
    console.log({ response });
  })
  .catch(function (error) {
    console.log({ error });
  });

function waitTimer() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        console.log('Blah blah blah... After 5 seconds');
        // If your operation goes well then you resolve the outcome
        let randomNumber = parseInt((Math.random() * 10).toFixed(0));
        if (randomNumber % 2 === 0) {
          resolve(true);
        } else {
          reject({ error: 'Odd number not supported', data: randomNumber });
        }
      }, 1000);
    } catch (error) {
      // If there is some error, you reject it with some error data(optional)
      reject(error);
    }
  });
}

waitTimer()
  .then(function (value) {
    console.log('Log printed.. Perform any cleanup action: ' + value);
  })
  .catch(function (error) {
    console.error('There are some errors: ', error);
  });

/* new Promise(function (resolve, reject) {
  // If your operation goes well then you resolve the outcome
  resolve();

  // If there is some error, you reject it with some error data(optional)
  console.log(typeof resolve, typeof reject);
}); */
