// 🌊 SOREX 2026 - Ocean Blue Configuration
// Firebase: somf-8adca | Cloudinary: dfscughol
// ✨ PREMIUM: PWA + Notifications + Compact Grid + Delete Videos

const firebaseConfig = {
    apiKey: "AIzaSyBJp12x71p1_Qsb4VmhdZ_VmHmN2Sn49F0",
    authDomain: "somf-8adca.firebaseapp.com",
    databaseURL: "https://somf-8adca-default-rtdb.firebaseio.com",
    projectId: "somf-8adca",
    storageBucket: "somf-8adca.firebasestorage.app",
    messagingSenderId: "324976875378",
    appId: "1:324976875378:web:a1d20730e5e92fedf1afeb",
    measurementId: "G-9MSBJJKDY5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Cloudinary Configuration
const CLOUD_NAME = "dt0tkbtzw";
const UPLOAD_PRESET = "gok3_k";

// 🌊 SOREX Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #0c1929, #1a365d, #1e3a5f)",
    "linear-gradient(135deg, #05101a, #0c1929, #1a365d)",
    "linear-gradient(135deg, #164e63, #0e7490, #06b6d4)",
    "linear-gradient(135deg, #1e3a8a, #2563eb, #3b82f6)",
    "linear-gradient(135deg, #06b6d4, #3b82f6, #60a5fa)",
    "linear-gradient(135deg, #0a1628, #1a2744, #3b82f6)"
];

// 🌊 App Info
const APP_NAME = "SOREX";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#3b82f6";
const SECONDARY_COLOR = "#06b6d4";

// 🌊 Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('🌊 SW registered!', reg))
        .catch(err => console.log('SW error:', err));
}

console.log('🌊 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
