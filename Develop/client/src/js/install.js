const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;

    butInstall.style.display = 'block'
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();

        const choiceResults = await deferredPrompt.userChoice;

        if (choiceResults.outcome === 'accepted') {
            console.log ('User accepted the install prompt');
        }else {
            console.log ('USer did not accept the install prompt');
        }

        deferredPrompt = null;

        butInstall.style.display = 'none';
        }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App we installed:', event);
});
