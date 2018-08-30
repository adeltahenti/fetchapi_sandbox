/**
 * BUtton 1 event listener
 */
document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('../data.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = `
        <div class="card">
          <div class="card-header">
            Text File Data
          </div>
          <div class="card-body">
            ${data}
          </div>
        </div>
      `;
    })
    .catch(function (err) {
      console.log(err);
    });
}