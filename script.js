const abilities = [
  {
    icon: "💬",
    title: "Understand language",
    short: "Read, write, translate, and summarize text.",
    more: "Chatbots and writing assistants use language models trained on huge amounts of text to answer questions, draft emails, and translate between languages."
  },
  {
    icon: "👁️",
    title: "See images",
    short: "Recognize faces, objects, and scenes.",
    more: "Computer vision powers photo search on your phone, medical scan analysis, and cars that detect pedestrians."
  },
  {
    icon: "🎙️",
    title: "Hear speech",
    short: "Turn spoken words into text and back.",
    more: "Voice assistants and automatic captions convert audio to text, and text-to-speech reads text aloud in natural voices."
  },
  {
    icon: "🎯",
    title: "Recommend",
    short: "Suggest what you might like next.",
    more: "Streaming services, online stores, and social feeds learn from what you watch, buy, and click to suggest new things."
  },
  {
    icon: "📈",
    title: "Predict",
    short: "Spot patterns to forecast what comes next.",
    more: "AI helps forecast weather, detect credit card fraud, and estimate traffic by learning from past patterns."
  },
  {
    icon: "🎨",
    title: "Create",
    short: "Generate images, music, code, and more.",
    more: "Generative AI produces new content from a short description — artwork, songs, stories, or working computer code."
  }
];

const container = document.getElementById("cards");

abilities.forEach((a) => {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.setAttribute("aria-expanded", "false");
  card.innerHTML = `
    <span class="icon" aria-hidden="true">${a.icon}</span>
    <h3>${a.title}</h3>
    <p>${a.short}</p>
    <p class="more">${a.more}</p>
  `;
  card.addEventListener("click", () => {
    const open = card.classList.toggle("open");
    card.setAttribute("aria-expanded", String(open));
  });
  container.appendChild(card);
});
