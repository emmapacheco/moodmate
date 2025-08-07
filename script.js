const moods = [
  { emoji: "😊", label: "Happy", message: "That's great! Stay positive!", youtube: "https://www.youtube.com/embed/ZbZSe6N_BXs", spotify: "https://open.spotify.com/embed/track/3H7ihDc1dqLriiWXwsc2po" }, // Pharrell Williams - Happy
  { emoji: "😢", label: "Sad", message: "Sending you comfort and peace.", youtube: "https://www.youtube.com/embed/hLQl3WQQoQ0", spotify: "https://open.spotify.com/embed/track/4VqPOruhp5EdPBeR92t6lQ" }, // Adele - Someone Like You
  { emoji: "😠", label: "Angry", message: "Take a deep breath, it's okay.", youtube: "https://www.youtube.com/embed/OUU5qZ1FzRM", spotify: "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b" }, // Imagine Dragons - Believer
  { emoji: "😰", label: "Anxious", message: "You're safe. Breathe with me.", youtube: "https://www.youtube.com/embed/fRh_vgS2dFE", spotify: "https://open.spotify.com/embed/track/6I9VzXrHxO9rA9A5euc8Ak" }, // Justin Bieber - Sorry
  { emoji: "😴", label: "Tired", message: "Get some rest—you deserve it.", youtube: "https://www.youtube.com/embed/5qap5aO4i9A", spotify: "https://open.spotify.com/embed/track/5nNmj1cLH3r4aA4XDJ2bgY" }, // Lofi hip hop radio
  { emoji: "🤩", label: "Excited", message: "Enjoy the moment!", youtube: "https://www.youtube.com/embed/CevxZvSJLk8", spotify: "https://open.spotify.com/embed/track/2takcwOaAZWiXQijPHIx7B" }, // Katy Perry - Roar
  { emoji: "😎", label: "Confident", message: "Go crush it!", youtube: "https://www.youtube.com/embed/3JWTaaS7LdU", spotify: "https://open.spotify.com/embed/track/1AhDOtG9vPSOmsWgNW0BEY" }, // Survivor - Eye of the Tiger
  { emoji: "🤯", label: "Overwhelmed", message: "One step at a time.", youtube: "https://www.youtube.com/embed/hTWKbfoikeg", spotify: "https://open.spotify.com/embed/track/6UelLqGlWMcVH1E5c4H7lY" }, // Nirvana - Smells Like Teen Spirit
  { emoji: "😇", label: "Grateful", message: "Gratitude is powerful.", youtube: "https://www.youtube.com/embed/VbfpW0pbvaU", spotify: "https://open.spotify.com/embed/track/5HCyWlXZPP0y6Gqq8TgA20" }, // Beyoncé - Halo
  { emoji: "😕", label: "Confused", message: "Clarity will come.", youtube: "https://www.youtube.com/embed/kXYiU_JCYtU", spotify: "https://open.spotify.com/embed/track/5zFglKYiknIxks8geR8rcL" }, // Linkin Park - Numb
  { emoji: "😐", label: "Meh", message: "That's okay too.", youtube: "https://www.youtube.com/embed/CvFH_6DNRCY", spotify: "https://open.spotify.com/embed/track/4RVwu0g32PAqgUiJoXsdF8" }, // LAKEY INSPIRED - Chill Day
  { emoji: "😳", label: "Embarrassed", message: "We all have moments like that.", youtube: "https://www.youtube.com/embed/OPf0YbXqDm0", spotify: "https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P" }, // Mark Ronson - Uptown Funk
  { emoji: "😜", label: "Playful", message: "Have fun with it!", youtube: "https://www.youtube.com/embed/d-diB65scQU", spotify: "https://open.spotify.com/embed/track/2dLLR6qlu5UJ5gk0dKz0h3" }, // Bruno Mars - Treasure
  { emoji: "🤓", label: "Focused", message: "Stay locked in.", youtube: "https://www.youtube.com/embed/MtN1YnoL46Q", spotify: "https://open.spotify.com/embed/track/1HNkqx9Ahdgi1Ixy2xkKkL" }, // Keyboard Cat
  { emoji: "💪", label: "Motivated", message: "Keep pushing!", youtube: "https://www.youtube.com/embed/kJQP7kiw5Fk", spotify: "https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg" }, // Luis Fonsi - Despacito
  { emoji: "🥺", label: "Tender", message: "You're loved.", youtube: "https://www.youtube.com/embed/XsX3ATc3FbA", spotify: "https://open.spotify.com/embed/track/3U4isOIWM3VvDubwSI3y7a" }, // Wiz Khalifa - See You Again
  { emoji: "😌", label: "Relaxed", message: "Take it easy.", youtube: "https://www.youtube.com/embed/5qap5aO4i9A", spotify: "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b" }, // Lofi hip hop radio
  { emoji: "🌟", label: "Hopeful", message: "Better days ahead.", youtube: "https://www.youtube.com/embed/2vjPBrBU-TM", spotify: "https://open.spotify.com/embed/track/1bSpwphooTq2Gz6syeH0ow" }, // Sia - Chandelier
];

// Grab elements
const moodGrid = document.getElementById("moodGrid");
const moodTitle = document.getElementById("moodTitle");
const moodMessage = document.getElementById("moodMessage");
const youtubeContainer = document.getElementById("youtubeContainer");
const spotifyEmbed = document.getElementById("spotifyEmbed");
const moodDisplay = document.getElementById("moodDisplay");
const customMoodInput = document.getElementById("customMoodInput");
const submitCustomMoodBtn = document.getElementById("submitCustomMood");

// Create mood cards
moods.forEach((mood) => {
  const card = document.createElement("div");
  card.className = "mood-card";
  card.innerHTML = `<span>${mood.emoji}</span><p>${mood.label}</p>`;
  card.onclick = () => showMood(mood);
  moodGrid.appendChild(card);
});

// Extract YouTube ID from embed URL
function getYouTubeVideoID(url) {
  const match = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

// Show mood details & clickable thumbnail for YouTube
function showMood(mood) {
  moodTitle.textContent = mood.label;
  moodMessage.textContent = mood.message;

  // Clear previous YouTube content
  youtubeContainer.innerHTML = "";
  youtubeContainer.onclick = null;

  const videoID = getYouTubeVideoID(mood.youtube);
  if (!videoID) {
    youtubeContainer.textContent = "Video unavailable";
  } else {
    // Thumbnail img
    const thumb = document.createElement("img");
    thumb.src = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
    thumb.alt = `Thumbnail for ${mood.label}`;
    thumb.className = "youtube-thumb";

    // Play button overlay
    const playBtn = document.createElement("div");
    playBtn.className = "youtube-play-button";
    playBtn.textContent = "▶";

    youtubeContainer.appendChild(thumb);
    youtubeContainer.appendChild(playBtn);

    // On click, swap thumbnail for embedded iframe with autoplay
    youtubeContainer.onclick = () => {
      youtubeContainer.innerHTML = `<iframe width="480" height="270" src="https://www.youtube.com/embed/${videoID}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    };
  }

  // Update Spotify embed
  spotifyEmbed.src = mood.spotify;

  moodDisplay.classList.remove("hidden");
  moodDisplay.scrollIntoView({ behavior: "smooth" });
}

// Handle custom mood submission
function handleCustomMood() {
  const input = customMoodInput.value.trim();
  if (!input) return;

  moodTitle.textContent = input;
  moodMessage.textContent = `Thanks for sharing how you feel: "${input}".`;

  // Show a default chill Lofi video + playlist for custom mood
  youtubeContainer.innerHTML = "";
  youtubeContainer.onclick = null;

  // Use Lofi hip hop thumbnail and video ID
  const defaultVideoID = "5qap5aO4i9A";
  const thumb = document.createElement("img");
  thumb.src = `https://img.youtube.com/vi/${defaultVideoID}/hqdefault.jpg`;
  thumb.alt = "Lofi Hip Hop Radio Thumbnail";
  thumb.className = "youtube-thumb";

  const playBtn = document.createElement("div");
  playBtn.className = "youtube-play-button";
  playBtn.textContent = "▶";

  youtubeContainer.appendChild(thumb);
  youtubeContainer.appendChild(playBtn);

  youtubeContainer.onclick = () => {
    youtubeContainer.innerHTML = `<iframe width="480" height="270" src="https://www.youtube.com/embed/${defaultVideoID}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  };

  spotifyEmbed.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0"; // Chill playlist

  moodDisplay.classList.remove("hidden");
  moodDisplay.scrollIntoView({ behavior: "smooth" });

  // Clear input field
  customMoodInput.value = "";
}

// Submit button event
submitCustomMoodBtn.addEventListener("click", handleCustomMood);

// Enter key submits custom mood
customMoodInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCustomMood();
  }
});




