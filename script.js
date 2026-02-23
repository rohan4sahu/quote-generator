const quotes = [
    "Discipline is choosing what you want most over what you want now.",
    "What you do daily becomes what you are permanently.",
    "The quieter you become, the more you can hear.",
    "Small steps every day lead to big results.",
    "Your future is created by what you do today, not tomorrow.",
    "You don't need more time, you need more focus.",
    "The person who moves a mountain begins by carrying small stones.",
    "Success is a slow process; giving up is instant.",
    "Consistency is harder when no one is watching.",
    "Dreams don’t work unless you do.",
    "Everything is hard before it is easy.",
    "Your habits decide your destiny.",
    "Energy flows where attention goes.",
    "You become what you repeat daily.",
    "Action cures fear.",
    "Don't wish for it. Work for it.",
    "If you get tired, learn to rest, not quit.",
    "An inch of movement is better than a mile of intention.",
    "Your only limit is your mind.",
    "A river cuts through rock not because of its power but its persistence.",
    "You learn nothing if you think you know everything.",
    "Failure is information, not identity.",
    "Not all storms come to disrupt your life; some come to clear your path.",
    "You won’t always be motivated. You must learn to be disciplined.",
    "Facts don’t care about feelings — but your actions shape reality.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "In the middle of difficulty lies opportunity.",
    "He who has a why to live can bear almost any how.",
    "The successful warrior is the average man, with laser-like focus.",
    "Do what you can, with what you have, where you are.",
    "It is never too late to be what you might have been.",
    "What you get by achieving your goals is not as important as what you become.",
    "If you want to go fast, go alone. If you want to go far, go together.",
    "Your life does not get better by chance; it gets better by change.",
    "Courage is not the absence of fear, but the triumph over it.",
    "You don’t need more time. You need fewer distractions.",
    "Your future is decided by the choices you make when you are tired.",
    "If you want different results, make different choices.",
    "Nothing will change if you change nothing.",
    "Long-term consistency beats short-term intensity.",
    "A calm mind makes better decisions than an excited one.",
    "Not everything requires a reaction; sometimes silence is superior.",
    "You won’t always be motivated. Train yourself to be disciplined.",
    "Where your attention goes, your energy flows, and your life grows.",
    "You don’t rise to the level of your goals; you fall to the level of your systems."
];

function changeBackground() {
    const colors = ["#FFB74D",
        "#4DB6AC",
        "#7986CB",
        "#81C784",
        "#E57373",
        "#64B5F6",
        "#BA68C8",
        "#FFD54F",
        "#A1887F"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
    changeBackground();
}