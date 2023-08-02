const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

// Stores Event
    window.deferredPrompt = event;

// Removes hidden class from button
    butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

// Retrievs deferred prompt and exits if no prompt is there
    const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
        return;
    }
// Shows prompt & hides install button
promptEvent.prompt();
window.deferredPrompt = null;
butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event

// Clears Prompt
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;

});
