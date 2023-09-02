let names = ["Abigail", "Adam", "Ada", "Adolf", "Adéla", "Adrián", "Adela", "Adrian", "Adina", "Aladár"];
let format = ["science paper", "tabloid", "article", "notes", "diary", "scripture", "textbook", "essay", "novel"];
let actions = ["reads", "writes", "translates", "examines", "analyses", "rewrites", "describes", "owns", "preaches", "copies"];
let titles = [
"Forecasters call for weather on Monday",
"Amphibious pitcher makes debut",
"Cows lose their jobs as milk prices drop",
"Miracle cure kills fifth patient",
"Man Accused of Killing Lawyer Receives a New Attorney",
"State population to double by 2040, babies to blame",
"Missippi's literacy program shows improvement",
"Breathing oxygen linked to staying alive",
"Police arrest everyone on February 22nd",
"Thursday is cancelled"
]

function messageMixer() {
    let randomNumber = Math.floor(Math.random() * 100);

    let position = 0;
    if (randomNumber >= 0 && randomNumber <= 10) { position = 0; }
    if (randomNumber > 10 && randomNumber <= 20) { position = 1; }
    if (randomNumber > 20 && randomNumber <= 30) { position = 2; }
    if (randomNumber > 30 && randomNumber <= 40) { position = 3; }
    if (randomNumber > 40 && randomNumber <= 50) { position = 4; }
    if (randomNumber > 50 && randomNumber <= 60) { position = 5; }
    if (randomNumber > 60 && randomNumber <= 70) { position = 6; }
    if (randomNumber > 70 && randomNumber <= 80) { position = 7; }
    if (randomNumber > 80 && randomNumber <= 90) { position = 8; }
    if (randomNumber > 90 && randomNumber <= 100) { position = 9; }

    return names[position] + " " + actions[position] + " " + format[position] + " titled " + titles[position];
    }

    console.log(messageMixer());

