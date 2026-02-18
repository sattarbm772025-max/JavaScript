const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ol");

button.addEventListener("click", function() {

    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerText = input.value;

    li.style.color = "darkblue";
    li.style.fontWeight = "bold";

    li.setAttribute("class", "task-item");

    li.addEventListener("click", function() {
        li.remove();
    });

    list.append(li);

    input.value = "";
});
