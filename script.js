window.addEventListener("load", () => {
    const dialog = document.getElementById('cookie-dialog');
    const acceptButton = document.getElementById('accept-btn');
    const denyButton = document.getElementById('deny-btn');

    acceptButton.addEventListener("click", () => {
        localStorage.setItem('confirmedChoice', true);
    });

    denyButton.addEventListener("click" , () => {
        localStorage.setItem('confirmedChoice', true);
    })

    if(!localStorage.getItem('confirmedChoice')) {
        dialog.showModal();
    }
});