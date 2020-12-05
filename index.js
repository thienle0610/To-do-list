

function addEvent()
{   
    var list = document.getElementById("events");
    var text = document.getElementById("inputtxt").value;
    var s = document.createElement("li");
    s.appendChild(document.createTextNode(text));
    list.appendChild(s);

    var button1 = document.createElement("BUTTON");
    button1.textContent = "Done";
    list.appendChild(button1);

    button1.addEventListener("click", () =>
    {
        list.removeChild(s);
        button1.style.visibility = 'hidden';
        e.preventDefault();
    }
    );
}

function removeEvent()
{
    document.getElementById("events").innerHTML = "";
}