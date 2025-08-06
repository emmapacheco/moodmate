function getSuggestion() {
  const mood = document.getElementById("moodSelector").value;
  
  const music = {
    happy: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
    sad: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1",
    stressed: "https://open.spotify.com/playlist/37i9dQZF1DWZqd5JICZI0u",
    motivated: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP"
  };

  const prompts = {
    happy: "What made you smile today?",
    sad: "Write about a moment that helped you get through a tough time.",
    stressed: "List three things that are in your control right now.",
    motivated: "What’s one thing you’re proud of yourself for recently?"
  };

  document.getElementById("musicSuggestion").innerHTML = `<p><strong>Music:</strong> <a href="${music[mood]}" target="_blank">Open Playlist 🎵</a></p>`;
  document.getElementById("journalPrompt").innerHTML = `<p><strong>Journal Prompt:</strong> ${prompts[mood]}</p>`;
}
