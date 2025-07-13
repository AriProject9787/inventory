// firebase-messaging-sw.js

// Initialize Firebase
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyAGYH0CeVCQDESjcJdvikoKmeOyhLCYoyk",
    authDomain: "grand-lekage-web.firebaseapp.com",
    projectId: "grand-lekage-web",
    storageBucket: "grand-lekage-web.appspot.com",
    messagingSenderId: "185245033432",
    appId: "1:185245033432:web:258e597d6b2b7ad46f48ad",
    measurementId: "G-B4GCWFR374"
};

// Firebase initialization
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized
    }
} catch (error) {
    console.error("Firebase initialization error: ", error);
    // Handle error gracefully, for example, you can show a fallback notification
}

// Initialize Firebase Messaging
let messaging;
try {
    messaging = firebase.messaging();
} catch (error) {
    console.error("Error initializing Firebase Messaging: ", error);
    // Handle error, maybe fallback to a different logic or alert user
}

// Handle background messages
if (messaging) {
    messaging.onBackgroundMessage(function(payload) {
        try {
            console.log("Received background message: ", payload);

            const notificationTitle = payload.notification.title || "New Notification";
            const notificationOptions = {
                body: payload.notification.body || "You have a new message!",
                icon: '/images/favicon.ico',
                badge: '/images/badge.ico'  // Optional: Add badge if needed
            };

            // Show notification
            self.registration.showNotification(notificationTitle, notificationOptions);

        } catch (error) {
            console.error("Error while showing notification: ", error);
            // Handle any specific errors related to the notification
        }
    });
}

// Optional: Requesting Permission for Notifications (could be triggered from the app frontend)
self.addEventListener('activate', event => {
    event.waitUntil(
        self.clients.claim().then(() => {
            // Check if the user has granted notification permission
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    console.log("Notification permission granted.");
                } else {
                    console.warn("Notification permission denied.");
                }
            }).catch((error) => {
                console.error("Error requesting notification permission: ", error);
                // Handle the error, e.g., alert user or log
            });
        })
    );
});

// Optional: Error Handling for Fetching Firebase Data
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch((error) => {
            console.error("Fetch error: ", error);
            // Return a fallback response, like a cached file or error page
            return caches.match('/offline.html').then((response) => {
                return response || new Response('Network error occurred.');
            });
        })
    );
});
