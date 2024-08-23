let count = 0;
document.getElementById("add-task").addEventListener("click", function () {
  const field = document.getElementById("textarea");
  const value = field.value;
  const row = document.createElement("tr");
  row.innerHTML = `
    <th>${(count += 1)}</th>
    <td>${value}</td>
    <td>
    <button class="done-btn btn btn-success btn-xs">Done</button>
    <button class="dlt-btn btn btn-error btn-xs">Delete</button>
    </td>
    `;
  const ans = document.getElementById("tbody");
  ans.appendChild(row);
  field.value = "";


  const btns = document.querySelectorAll('.dlt-btn')
  for(const btn of btns){
    btn.addEventListener('click',function(){
        btn.parentElement.parentElement.style.display = "none"
  }
)
}
  const btnLines = document.querySelectorAll('.done-btn')
  for(const btnLine of btnLines){
    btnLine.addEventListener('click',function(){
        btnLine.parentElement.parentElement.style.textDecoration= "line-through";
  }
)
}

  document.querySelector("#clear-btn").addEventListener("click", function () {
    const element = document.getElementById("tbody");
    if (element.children.length !== 0) {
      document.getElementById("tbody").style.display = "none";
      const btn = document.querySelector("#clear-btn");
      btn.style.display = "none";
    } else {
      const btn = document.querySelector("#clear-btn");
      btn.style.display = "inline-block";
    }
  });
});
