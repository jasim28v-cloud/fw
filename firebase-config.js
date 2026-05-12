// 💖 MNAENCA 2026 - Rose Gold Configuration
// Firebase: somf-8adca | Cloudinary: dt0tkbtzw
// ✨ PREMIUM: Notifications + Compact Grid + Delete Videos

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

// 💖 MNAENCA Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #831843, #9d174d, #be185d)",
    "linear-gradient(135deg, #4c0519, #831843, #9d174d)",
    "linear-gradient(135deg, #701a75, #86198f, #a21caf)",
    "linear-gradient(135deg, #ec4899, #db2777, #be185d)",
    "linear-gradient(135deg, #f472b6, #ec4899, #db2777)",
    "linear-gradient(135deg, #1a0a15, #2d0a1e, #ec4899)"
];

// 💖 App Info
const APP_NAME = "MNAENCA";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#ec4899";
const SECONDARY_COLOR = "#f472b6";

console.log('💖 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #ec4899; font-size: 16px; font-weight: bold;');
