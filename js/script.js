async function sendMessage(message) {
  const data = {
    content: message,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(
    "https://discord.com/api/webhooks/1197083824790708335/A9plFhpG36OPhVmsd8o_Np86s80ToJVhQ0XmdfZm0IrFaNCQZv2zT4yXdYhXlno0PhsM",
    options
  );
  return response.ok;
}

function getMessage() {

  let message = document.getElementById("message").value;
  if(message != ""){
  sendMessage("@everyone "+ message);
  }
}
