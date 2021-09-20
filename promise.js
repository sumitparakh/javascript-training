// Promise is used to perform asynchronous operation/tasks
// Asynchronous operation means - non-blocking tasks, which means, it does not wait // for it to complete and continue executing next statements

function waitTimer() {
  new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        console.log('Blah blah blah... After 2 seconds');
        // If your operation goes well then you resolve the outcome
        resolve(true);
      }, 5000);
    } catch (error) {
      // If there is some error, you reject it with some error data(optional)
      reject(error);
    }
  });
}

new Promise(function (resolve, reject) {
  // If your operation goes well then you resolve the outcome
  resolve();

  // If there is some error, you reject it with some error data(optional)
  console.log(typeof resolve, typeof reject);
});
