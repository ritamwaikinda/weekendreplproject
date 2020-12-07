let readlineSync = require("readline-sync");

console.log("**************************************************** ");
console.log("**************************************************** ");
console.log("**************************************************** ");
console.log(
	"Hey guys and girls! Answer these three questions, and let us, the team"
);
console.log("at Wyncode, tell you all about what type of personality you have");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log(
	"DISCLAIMER: Any commentary made in this game is for entertainment only,"
);
console.log(
	"and should not be taken as legal or medical opinion. If you are seeking a"
);
console.log(
	"true evaluation, please seek God, a therapist, or your mother, because they"
);
console.log(
	"are the only ones who can truly understand the complexities of your dysfunctional"
);
console.log("sweet ole self (^_^). Thank you. And enjoy...");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");

let getField = readlineSync.question(
	"Think of an open field. How big is this field? What is it filled with? What are the surroundings like?"
);
console.log(
	'The field represents your mind. "' +
		getField +
		'" is the representation of your knowledge of the world, and how vast your personality is.'
);

fieldCondition = ["Dry and Dead", "Grassy and Healthy", "Well-Trimmed"];
let getFieldCondition = readlineSync.keyInSelect(
	fieldCondition,
	"What is the condition of the field?"
);

console.log(
	"The condition of the field (dry, grassy, or well-trimmed) is what your personality looks like at first glance."
);
switch (fieldCondition) {
	case "Dry and Dead":
		console.log("You are feeling pessimistic.");
		break;
	case "Grassy and Healthy":
		console.log("You are feeling optimistic.");
		break;
	case "Well-Trimmed":
		console.log("You are analytical and cautious.");
		break;
	default:
		console.log("Please select a response");
}

let getCube = readlineSync.question("Think of a cube. How big is the cube?");
console.log(
	'The cube represents you. "' + getCube + '" is the size of your ego.'
);

cubeTexture = ["Smooth", "Rough", "Bumpy or Spiky"];
let getCubeTexture = readlineSync.keyInSelect(
	cubeTexture,
	"Think of that same cube. What is it made of, and what is the surface like?"
);

console.log(
	"The surface of the cube represents what is visibly observable about your personality, or maybe it is what you want others to think about you. The texture of the cube (e.g. smooth, rough, bumpy, etc.) represents your nature."
);
switch (cubeTexture) {
	case "Smooth":
		console.log("You are feeling pessimistic.");
		break;
	case "Rough":
		console.log("You are feeling optimistic.");
		break;
	case "Bumpy or Spiky":
		console.log("You are analytical and cautious.");
		break;
	default:
		console.log("Please select a response");
}

cubeColor = ["Red", "Yellow", "Blue", "Violet", "Grey", "Black", "White"];
let getCubeColor = readlineSync.keyInSelect(cubeColor, "What color is it?");

console.log(
	"The color of the cube is a more in-depth analysis of yourself. Each color can represent an emotion, or an entire personality altogether. However, these are the most common:"
);
switch (cubeColor) {
	case "Red":
		console.log(
			"You are physically active and enjoy rich sensory experiences."
		);
		break;
	case "Yellow":
		console.log("You are sociable and cherish your individuality.");
		break;
	case "Blue":
		console.log("You are intelligent and respect others' ideals.");
		break;
	case "Violet":
		console.log(
			"You are intelligent and a bit of a perfectionist. You are also mysterious."
		);
		break;
	case "Grey":
		console.log("You are self-confident, independent, and not easily rattled.");
		break;
	case "Black":
		console.log(
			"You have a strong sense of individuality and independence, and you put a high value on alone time."
		);
		break;
	case "White":
		console.log("You are kind, independent, and self-reliant.");
		break;
	default:
		console.log("Please select a response");
}

cubeCharacteristics = [
	"Transparent",
	"Water or Ice",
	"Hollow",
	"Metal or Rock",
];
let getCubeCharacteristics = readlineSync.keyInSelect(
	cubeCharacteristics,
	"What is it made of? Is it transparent? If so, can you see inside?"
);

console.log(
	"In some cases, the physical characteristics of the cube are unique;"
);
switch (cubeCharacteristics) {
	case "Transparent":
		console.log(
			"A cube with a transparent surface means you tend to let others know how you feel on the inside. You are confident enough to show your inner thoughts, and you are deeply sincere. You know that you are good inside, and guess what—it shows! That's what most people see in you as well."
		);
		break;
	case "Water or Ice":
		console.log(
			"A cube made out of water or ice indicates that you let external elements influence you completely. Your personality is sensitive to social pressure, relationships, and other environmental factors."
		);
		break;
	case "Hollow":
		console.log(
			"A hollow cube means that you are primarily concerned with your outside appearance, with far less care for what's going on within. However, this does not mean that you have nothing to offer on the inside."
		);
		break;
	case "Metal or Rock":
		console.log(
			"A hollow cube means that you are primarily concerned with your outside appearance, with far less care for what's going on within. However, this does not mean that you have nothing to offer on the inside."
		);
		break;
	default:
		console.log("Please select a response");
}

ladderLength = ["Short", "Long"];
let getLadderLength = readlineSync.keyInSelect(
	ladderLength,
	"Think of a ladder. How long is this ladder?"
);

ladderDistance = ["Near from Me", "Far from Me"];
let getLadderDistance = readlineSync.keyInSelect(
	ladderDistance,
	"and where is this located in your field?"
);

console.log(
	"The ladder represents two different aspects of your life—your goals and your friendships. First, let's look at what the ladder says about your goals."
);
switch (ladderLength) {
	case "Short":
		console.log("Your goals are realistic and simple.");
		break;
	case "Long":
		console.log("Your goals are more far fetched and difficult to attain.");
		break;
	default:
		console.log("Please select a response");
}

switch (ladderDistance) {
	case "Near from Me":
		console.log(
			"You are putting maximum effort and focus into achieving your goals."
		);
		break;
	case "Far from Me":
		console.log(
			"You aren't putting much thought or effort into achieving your goals."
		);
		break;
	default:
		console.log("Please select a response");
}

ladderCubeDistance = ["Near the Cube", "Far from the Cube"];
let getLadderCubeDistance = readlineSync.keyInSelect(
	ladderCubeDistance,
	"What's the distance between the ladder and the cube?"
);

ladderMaterial = ["Strong", "Weak"];
let getLadderMaterial = readlineSync.keyInSelect(
	ladderMaterial,
	"How is the ladder?"
);

console.log(
	"Now, the location and material of your ladder can also tell you how close you are with your friends. You guessed it—the closer the ladder is to the cube and the stronger the ladder is, the better it is for your friendships!"
);
switch (ladderCubeDistance) {
	case "Near the Cube":
		console.log(
			"If your ladder is near the cube, you are very close with your friends. If it's actually leaning on the cube, it means your friends can lean on you for support."
		);
		break;
	case "Far from the Cube":
		console.log(
			"You have a hard time opening up to people and letting them get close to you."
		);
		break;
	default:
		console.log("Please select a response");
}

switch (ladderMaterial) {
	case "Strong":
		console.log(
			"The stronger the material (e.g. stone, metal, etc.), the stronger the bond!"
		);
		break;
	case "Weak":
		console.log(
			"A weak ladder indicates a weak bond between you and those around you."
		);
		break;
	default:
		console.log("Please select a response");
}

horseActivity = ["Playing", "Running", "Sleeping or Grazing"];
let getHorseActivity = readlineSync.keyInSelect(
	horseActivity,
	"Think of a horse. What color is the horse? What is the horse doing, and where is it in relation to your cube?"
);

console.log(
	"The horse represents your ideal partner. It could be playing, running around, or grazing right next to your cube or clear across the field."
);
switch (horseActivity) {
	case "Playing":
		console.log(
			"Your ideal partner doesn't take life too seriously and or get bogged down by the little stuff."
		);
		break;
	case "Running":
		console.log(
			"Your ideal partner will respect your space and give you the alone time that you crave."
		);
		break;
	case "Sleeping or Grazing":
		console.log("Your ideal partner is calm and fully committed to you.");
		break;
	default:
		console.log("Please select a response");
}

horseColor = ["Brown", "Black", "White"];
let getHorseColor = readlineSync.keyInSelect(
	horseColor,
	"Think of a horse. What color is the horse? What is the horse doing, and where is it in relation to your cube?"
);

console.log(
	"The horse represents your ideal partner. It could be playing, running around, or grazing right next to your cube or clear across the field."
);
switch (horseColor) {
	case "Brown":
		console.log(
			"You prize comfort and reliability above all else. Otherwise, you don't have a specific set of expectations for your partner."
		);
		break;
	case "Black":
		console.log("Your idea partner is dominant, seductive, and sophisticated.");
		break;
	case "White":
		console.log(
			"You value loyalty and trust more than anything else in a relationship."
		);
		break;
	default:
		console.log("Please select a response");
}

console.log(
	"If your horse is a completely different color than the ones listed above (think Wizard of Oz), it means you value originality and independence in a partner. You want to be with someone who fascinates and challenges you."
);

horseCubeDistance = ["Near the Cube", "Far from the Cube"];
let getHorseCubeDistance = readlineSync.keyInSelect(
	horseCubeDistance,
	"Think of a horse. What color is the horse? What is the horse doing, and where is it in relation to your cube?"
);

switch (horseCubeDistance) {
	case "Near the Cube":
		console.log(
			"You prefer relationships where you spend most of your time with your partner."
		);
		break;
	case "Far from the Cube":
		console.log(
			"You have a need for a partner who will understand and accommodate your desire for alone time."
		);
		break;
	default:
		console.log("Please select a response");
}

flowers = ["Just a Few", "They're Everywhere!"];
let getFlowers = readlineSync.keyInSelect(
	flowers,
	"Think of flowers. Where are the flowers in your field, and how many are there?"
);

console.log(
	"The flowers represent your family and friends. The number of flowers reflects your popularity, and their location indicates how close you are with your social groups."
);
switch (flowers) {
	case "Just a Few":
		console.log(
			"You are close with your family and have a small, tight-knit group of friends."
		);
		break;
	case "They're Everywhere!":
		console.log(
			"You're a social butterfly! With family and friends too numerous to count, you'll never be lonely."
		);
		break;
	default:
		console.log("Please select a response");
}

weather = ["Rain", "Fog", "Wind", "Sun"];
let getWeather = readlineSync.keyInSelect(
	weather,
	"Think of what the weather in the field is like. Is it raining? Sunny? Is your field foggy?"
);

console.log(
	'The weather in your field reflects your general outlook on life. There\'s a reason we have expressions like, "When it rains, it pours!"'
);
switch (cubeTexture) {
	case "Rain":
		console.log(
			"Rain symbolizes the problems in your life; the harder the rain, the bigger the problems."
		);
		break;
	case "Fog":
		console.log(
			"You feel uncertainty in life and may be struggling with your identity."
		);
		break;
	case "Wind":
		console.log(
			"Though you tend to worry about future issues, you generally don't let them get you down for long."
		);
		break;
	case "Sun":
		console.log("You are optimistic and carefree!");
		break;
	default:
		console.log("Please select a response");
}

stormIntensity = [
	"Mild (Just Passing Through)",
	"Strong (In the Eye of the Storm)",
];
let getStormIntensity = readlineSync.keyInSelect(
	stormIntensity,
	"Think of a storm. What is the distance between the storm and the cube? Is it a big storm? Is it just passing through?"
);

console.log(
	"The strength and position of the storm reflect the stress you're feeling in life. As you probably guessed, the stronger the storm and the closer to the cube, the higher your stress level!"
);
switch (cubeTexture) {
	case "Mild (Just Passing Through)":
		console.log(
			"While you aren't immune to stress, you know that all things must pass."
		);
		break;
	case "Strong (In the Eye of the Storm)":
		console.log(
			"When you stress, you go all in and have a very hard time pulling yourself out again."
		);
		break;
	default:
		console.log("Please select a response");
}

stormLocation = ["In the Background", "Right Above Your Cube"];
let getStormLocation = readlineSync.keyInSelect(
	stormLocation,
	"Think of a storm. What is the distance between the storm and the cube? Is it a big storm? Is it just passing through?"
);

console.log(
	'The weather in your field reflects your general outlook on life. There\'s a reason we have expressions like, "When it rains, it pours!"'
);
switch (cubeTexture) {
	case "In the Background":
		console.log(
			"Any obstacles that might be causing you grief are not at the forefront of your mind. You are good at managing your anxiety."
		);
		break;
	case "Right Above Your Cube":
		console.log(
			"You are deeply affected by stress and have a hard time seeing past it to get back to the bigger picture."
		);
		break;
	default:
		console.log("Please select a response");
}

console.log(
	"The strength and position of the storm reflect the stress you're feeling in life. As you probably guessed, the stronger the storm and the closer to the cube, the higher your stress level! If you imagined a storm raging right above your cube, it might be a good idea to work on reducing stress in your daily life."
);
