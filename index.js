let add = document.querySelector("#add"); // assigned
let list = document.querySelector("#list");
add.onclick = (addList) => {
  addList.preventDefault(); //stop executing default process
  let listItem = document.querySelector("#listitem"); //  listitem id place assigned
  if (listItem.value !== "") {
    let li = document.createElement("li"); // list element created
    li.innerHTML = listItem.value; //adding

    let closeButton = document.createElement("button");
    closeButton.className = "close";
    closeButton.innerHTML = "\u00D7";
    li.appendChild(closeButton);

    list.appendChild(li); // li element added next to the list .
    listItem.value = ""; // empty the list after adding text .

    li.addEventListener("click", (appendList) => {
      //each event appended to next.
      appendList.target.style.textDecoration = "line-through"; //text style changed.
    });
    closeButton.addEventListener("click", (deleteList) => {
      deleteList.target.parentElement.style.display = "none"; //delete the text using close button
    });
  } else {
    alert("Empty Input...! \n Type Important Do List");
  }
};
