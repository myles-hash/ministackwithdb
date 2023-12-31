const form = document.getElementById("messageForm");

form.addEventListener("submit", async function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    const response = await fetch("https://messageboardserver.onrender.com/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });

  form.reset();

  getMessages();

  scrollToBottom();
});

async function getMessages(){
    const response = await fetch("https://messageboardserver.onrender.com/messages");
    const message = await response.json();
    const messageContainer = document.getElementById("messageContainer");
    
    messageContainer.innerHTML = '';

    message.forEach(function(message){
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
    

        h3.textContent = message.username;
        p.textContent = message.message;

    

        messageContainer.appendChild(h3);
        messageContainer.appendChild(p);
    });

}

function scrollToBottom() {
  const messageContainer = document.getElementById("messageContainer");
  setTimeout(() => {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }, 100);
}


getMessages();