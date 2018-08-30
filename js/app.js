/**
 * Button 1 event listener - Get local text file data
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

/**
 * Button 2 event listener - Get local JSON data
 */
document.getElementById('button2').addEventListener('click', getJSON);

function getJSON() {
  fetch('../posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      // Bootstrap Card - begin
      let output = `
        <div class="card">
          <div class="card-header">
            JSON File Data
          </div>
          <ul class="list-group list-group-flush">
      `;

      // Bootstrap Card - body
      data.forEach(post => {
        output += `
          <li class="list-group-item">
            <ul class="list-group">
              <li class="list-group-item"><strong>Title: </strong>${post.title}</li>
              <li class="list-group-item"><strong>Body: </strong>${post.body}</li>
            </ul>
          </li>
        `;
      });

      // Bootstrap Card - end
      output += `
          </ul>
        </div>
      `;
      // Output
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}