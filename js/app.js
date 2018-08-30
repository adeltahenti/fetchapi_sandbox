/**
 * Button 1 event listener - Get local text file data
 */
document.getElementById("button1").addEventListener("click", getText);

function getText() {
  fetch("../data.txt")
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById("output").innerHTML = `
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
    .catch(err => console.log(err));
}

/**
 * Button 2 event listener - Get local JSON data
 */
document.getElementById("button2").addEventListener("click", getJSON);

function getJSON() {
  fetch("../posts.json")
    .then(res => res.json())
    .then(data => {
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
              <li class="list-group-item"><strong>Title: </strong>${
                post.title
              }</li>
              <li class="list-group-item"><strong>Body: </strong>${
                post.body
              }</li>
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
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}

/**
 * Button 3 event listener - Get from external API
 */
document.getElementById("button3").addEventListener("click", getExternal);

function getExternal() {
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // Bootstrap Card - begin
      let output = `
        <div class="card">
          <div class="card-header">
            JSON External API Data
          </div>
          <ul class="list-group list-group-flush">
      `;

      // Bootstrap Card - body
      data.forEach(user => {
        output += `
          <li class="list-group-item">
            <ul class="list-group">
              <li class="list-group-item"><strong>Title : </strong>${
                user.id
              }</li>
              <li class="list-group-item bg-light"><strong>Login : </strong>${
                user.login
              }</li>
              <li class="list-group-item"><strong>Avatar URL : </strong>${
                user.avatar_url
              }</li>
              <li class="list-group-item"><strong>Html URL : </strong>${
                user.html_url
              }</li>
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
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}
