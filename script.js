const adjectivesArr = ["lowly", "broken", "boring", "questionable", "noxious","finicky","spiteful", "abrasive","cumbersome", "ill-informed", "vapid", "ridiculous", "ratty", "confused", "simplistic", "inane", "average", "moist", "crusty", "dusty", "musty", "dry", "wet", "limp"];
const curseWordsArr = ["cum", "fuck", "dick", "piss", "shit", "cock", "bitch", "ass", "jizz", "wanker", "twat", "cunt", "scrotum", "douche", "chode", "thundercunt", "rimjob", "clusterfuck", "clithood"];
const nounsArr = ["bubble", "trumpet", "head", "flaps", "bag", "nose", "weed", "badger", "dumpster", "tits", "waffle", "head", "pouch", "stain", "wipe", "puddle", "weasel", "nugget", "hole", "bucket", "magnet", "cheese", "breath", "artist", "canoe", "sack", "burger", "clown", "stick", "muffin", "goblin"];

const adjIndex = Math.floor(Math.random() * adjectivesArr.length);
const curseWordIndex = Math.floor(Math.random() * curseWordsArr.length);
const nounIndex = Math.floor(Math.random() * nounsArr.length);

const adjItem = adjectivesArr[adjIndex];
const curseWordItem = curseWordsArr[curseWordIndex];
const nounItem = nounsArr[nounIndex];

function generateInsult() {
if(curseWordItem === "thundercunt" || curseWordItem === "rimjob" || curseWordItem === "clusterfuck" || curseWordItem === "clithood"){
    document.getElementById("insult").innerHTML = `You are a ${adjItem} ${curseWordItem}.`
} else {
    document.getElementById("insult").innerHTML = `You are a ${adjItem} ${curseWordItem} ${nounItem}.`
}
}