"use strict";
var Template;
(function (Template) {
    async function journals() {
        let pages = ["<strong> How to survive the Zombie Apocalypse: </strong><br><br><br> - Avoid getting bitten => Infection will spread like that <br><br> \
        - Aim for the head => Their brains are their weakness <br><br> - Use melee weapons if possible => Sound attracts them <br><br> - Don't give up", "Day 13, <br><br>\
        It's been a few days since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. Is this going to be the end of humanity?",
            "Day 26, <br><br> I lost all contact to the military headquarters. Were they overrun or is something interferring with the radios? I really hope it's the latter... \
        I don't know how good our chances are if we lost the military."];
        // Alle Journalseiten in einer if-Abfrage abfragen mit boolschen Werten in dataForSave; z.B. iSayYes = false und nachdem man 'Yes' gewählt hat wird iSayYes = true und die richtige Novelpage wird angezeigt
        let current = 0;
        let numberAquired = 0;
        Template.ƒS.Text.addClass("changePage");
        if (Template.dataForSave.novelPage1 == true) {
            pages.push("I suddenly woke up in the apocalypse and I have trouble remembering how it all started or who I really am. I faintly remember \
            being in the military, but not for how long or if I left it before everything went to hell. <br><br><br><br> Name: " + Template.dataForSave.nameProtagonist +
                "<br><br> Age: ?? <br><br> Occupation: Soldier?/Ex-Soldier? ");
            numberAquired += 3;
        }
        if (Template.dataForSave.novelRadio == true) {
            pages.push("<strong>Extraction </strong><br><br><br> The Military is organizing one last effort to safe some survivors. I wonder where they are bringing us \
            and if we're really going to be safe there. Here is all the important information: <br><br><br> - Military base 'Delta' <br><br> - city northern edge <br><br> - last extraction in 8 hours");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelFavFood == true) {
            pages.push("I remembered some things about my past. My favourite food is (insert food here). My mother always cooked it for me \
            when I did well in school or when she wanted to cheer me up. The way she made it was special and I remember it tasting like the most \
            delicious food I had ever eaten. <br> I tried recreating it for years, but never did quite manage to make it taste exactly like hers. She told \
            me as soon as I turned 18 she would teach me the family recipe, but she passed away when I was 16. A car accident. A drunk driver crashed \
            into her car. <br><br> She taught me how to cook and thanks to her cooking became my hobby. I miss her. <br><br> But at least she \
            doesn't have to see what happened to the world. <br><br><br> Rest well, Mom.");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelPet == true) {
            pages.push("I remembered some things about my past. I had a pet when I was younger, a cat. Her name was Loona and she \
            was this feisty little ball of black and white fur. I still have countless little scars all over my hands and arms, 'cause she loved \
            playing. She wasn't really a cuddler most of the time, but I remember waking up to her cuddled up on the foot of my bed sometimes. <br><br> \
            She was my first and only pet and I'll continue to remember her fondly.");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelMilitaryTime == true) {
            pages.push("...");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelMilitaryTimeExtra == true) {
            pages.push("...");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelDude == true) {
            pages.push("...");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelNoDude == true) {
            pages.push("...");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelEnding1 == true) {
            pages.push("...");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelEnding2 == true) {
            pages.push("...");
            numberAquired += 1;
        }
        if (numberAquired > 0) {
            let changePage = { back: "previous", next: "next", done: "close" };
            let choice;
            do {
                Template.ƒS.Text.print(pages[current]);
                choice = await Template.ƒS.Menu.getInput(changePage, "changePage");
                switch (choice) {
                    case changePage.back:
                        current = Math.max(0, current - 1);
                        break;
                    case changePage.next:
                        current = Math.min(numberAquired, current + 1);
                        break;
                }
            } while (choice != changePage.done);
        }
        else {
            let changePage = { back: "previous", next: "next", done: "close" };
            let choice;
            do {
                Template.ƒS.Text.print(pages[current]);
                choice = await Template.ƒS.Menu.getInput(changePage, "changePage");
                switch (choice) {
                    case changePage.back:
                        current = Math.max(0, current - 1);
                        break;
                    case changePage.next:
                        current = Math.min(2, current + 1);
                        break;
                }
            } while (choice != changePage.done);
        }
        Template.ƒS.Text.close();
    }
    Template.journals = journals;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // Data that will be saved
    Template.dataForSave = {
        nameProtagonist: "???",
        // Meterbar
        damageScore: 15,
        scoreForDamage: "",
        // Novel Pages für Journal
        novelPage1: false,
        novelRadio: false,
        novelFavFood: false,
        novelPet: false,
        novelMilitaryTime: false,
        novelMilitaryTimeExtra: false,
        novelDude: false,
        novelNoDude: false,
        novelEnding1: false,
        novelEnding2: false,
        // Item
        pickedUpRations: false,
        pickedMeterScene: false,
        pickedAnimationScene: false,
        // pickedInventoryScene: false,
        pickedChoice: false
    };
    Template.transition = {
        puzzle: {
            duration: 1,
            // keine absoluten Pfade, sondern relative Pfad
            alpha: "",
            // Härte der Transitions
            edge: 1
        }
    };
    // Sounds werden exportiert bzw. geladen
    Template.sound = {
        // Sounds unterscheiden in Themes, SFX etc.
        // SFX
        drop: "Audio/drop.mp3" //name of sound and the relative path to it, kann unbenannt werden
    };
    // Locations bzw. Backgrounds der Szenen
    Template.locations = {
        // rundownAlley: {   // Kann unbenannt werden, Name der Location
        //   name: "Rundown Alley",
        //   background: "Images/Backgrounds/rundown_alley_night.png"
        // },
        oldKitchen: {
            name: "Old Kitchen",
            background: "Images/Backgrounds/old_kitchen.png"
        },
        apartmentOutside: {
            name: "Apartment Outside",
            background: "Images/Backgrounds/apartment_outside.png"
        },
        outdoorStairs: {
            name: "Outdoor Stairs",
            background: "Images/Backgrounds/outdoor_stairs.png"
        },
        railroadCrossing: {
            name: "Railroad Crossing",
            background: "Images/Backgrounds/railroad_crossing.png"
        },
        restaurant: {
            name: "Restaurant",
            background: "Images/Backgrounds/restaurant.png"
        },
        kitchen: {
            name: "Kitchen",
            background: "Images/Backgrounds/kitchen.png"
        },
        oldStreet: {
            name: "Old Street",
            background: "Images/Backgrounds/old_street.png"
        },
        school: {
            name: "School",
            background: "Images/Backgrounds/school.png"
        },
        sideStreet: {
            name: "Side Street",
            background: "Images/Backgrounds/side_street.png"
        },
        livingRoom: {
            name: "Living Room",
            background: "Images/Backgrounds/living_room.png"
        },
        cabinInForest: {
            name: "Cabin in the forest",
            background: "Images/Backgrounds/cabin_in_forest.jpg"
        }
    };
    // Die Charaktere
    Template.characters = {
        Narrator: {
            name: ""
        },
        Player: {
            name: Template.dataForSave.nameProtagonist,
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/player_neutral.png",
                neutral2: "Images/Characters/player_neutral2.png",
                happy: "Images/Characters/player_happy.png",
                happy2: "Images/Characters/player_happy2.png",
                sad: "Images/Characters/player_sad.png",
                sad2: "Images/Characters/player_sad2.png",
                angry: "Images/Characters/player_angry.png",
                surprised: "Images/Characters/player_surprised.png",
                confused: "Images/Characters/player_confused.png",
                hurt: "Images/Characters/player_hurt.png",
                hurt2: "Images/Characters/player_hurt2.png",
                thinking: "Images/Characters/player_thinking.png"
            }
        },
        Lewis: {
            name: "Lewis",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/lewis_neutral.png",
                neutral2: "Images/Characters/lewis_neutral2.png",
                happy: "Images/Characters/lewis_happy.png",
                happy2: "Images/Characters/lewis_happy2.png",
                sad: "Images/Characters/lewis_sad.png",
                sad2: "Images/Characters/lewis_sad2.png",
                angry: "Images/Characters/lewis_angry.png",
                surprised: "Images/Characters/lewis_surprised.png"
            }
        },
        Radio: {
            name: "Radio",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {}
        },
        Survivor: {
            name: "Survivor",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                survivorM: "Images/Characters/survivorM.png",
                survivorF: "Images/Characters/survivorF.png",
            }
        },
        Zombie: {
            name: "Zombie",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                zombieM: "Images/Characters/zombie.png",
                zombieF: "Images/Characters/zombie.png",
                child: "Images/Characters/zombie.png"
            }
        },
        Others: {
            name: "Others",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                radio: "Images/Items/radio.png",
                catPic: "Images/Items/cat_pic.png"
            }
        }
    };
    function animation() {
        return {
            start: { translation: Template.ƒS.positions.bottomcenter, color: Template.ƒS.Color.CSS("white", 1) },
            end: { translation: Template.ƒS.positions.bottomright, color: Template.ƒS.Color.CSS("blue", 0) },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.animation = animation;
    // Animation that rotates and scales
    function getAnimation() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0.3) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.getAnimation = getAnimation;
    // Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits",
        journal: "Journal"
    };
    let gameMenu;
    // open entspricht Menü ist offen und false zu
    let menuIsOpen = true;
    // Funktionalitäten der Buttons
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.ƒS.Progress.load();
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                console.log("credits");
                // credits(); //???
                break;
            case inGameMenuButtons.journal:
                Template.journals();
                break;
        }
    }
    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close"); // soll von Anfang an geschlossen sein
        // Scene Hierarchy
        let scenes = [
            // { id: "Test", scene: testScene, name: "Test" },
            // { id: "Prologue", scene: prologue, name: "Prologue" },  // name: Description of the scene
            // { id: "FirstScene", scene: firstScene, name: "First scene" },    // mit id kann man im Zusammenhang mit 'next' angeben, welche Szene als nächstes abgespielt wird
            // { id: "residentialArea", scene: routeResidentialArea, name: "Residential area"},
            // { id: "commercialArea", scene: routeCommercialArea, name: "Commercial area"},
            // { id: "meetingSurvivors", scene: meetingSurvivors, name: "Meeting Survivors"},
            // { id: "helpingTheSurvivors", scene: helpingTheSurvivors, name: "Helping the Survivors"},
            // { id: "callForHelp", scene: callForHelp, name: "Call for help"},
            // { id: "followCallForHelp", scene: followCallForHelp, name: "Follow the call for help"},
            // { id: "ignoreCallForHelp", scene: ignoreCallForHelp, name: "Ignore the call for help"},
            // { id: "rendezvous", scene: rendezvous, name: "Rendezvous"},
            // { id: "goWithLewis", scene: goWithLewis, name: "Go with Lewis"},
            // { id: "goThroughMainStreet", scene: goThroughMainStreet, name: "Go through main street"},
            { id: "goThroughSideStreet", scene: Template.goThroughSideStreet, name: "Go through side street" },
            { id: "goodEnding1", scene: Template.goodEnding1, name: "Good Ending 1" },
            { id: "goodEnding2", scene: Template.goodEnding2, name: "Good Ending 2" },
            { id: "emptyScene", scene: Template.empty, name: "END" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function callForHelp() {
        console.log("Scene: Call for help");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[Somewhere outside]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Oh, a call for help through the radio");
        // Choice: Follow the call for help or ignore it
        let followCall = {
            residentialArea: "Ignore call for help.",
            commercialArea: "Follow the call for help.",
        };
        // Ignore call for help and continue to meetingpoint
        let choiceFollowCall = await Template.ƒS.Menu.getInput(followCall, "choiceCSSClass");
        switch (choiceFollowCall) {
            case followCall.residentialArea:
                console.log("Follow the call for help.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Something is teling me to follow the call.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "followCallForHelp";
                break;
            case followCall.commercialArea:
                console.log("Ignore the call for help.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "I have to keep going. If I try to help now, I won't make it in time.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "ignoreCallForHelp";
                break;
        }
    }
    Template.callForHelp = callForHelp;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function empty() {
        console.log("END");
    }
    Template.empty = empty;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        console.log("First Scene");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000); // kontrolliert die Textgeschwindigkeit -> cpms = characters per miliisecond
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        await Template.ƒS.Location.show(Template.locations.apartmentOutside);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[Outside of the Apartment]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "A sound from your right draws your attention just as you leave the apartment.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Hello?");
        await Template.ƒS.Character.show(Template.characters.Zombie, Template.characters.Zombie.pose.zombie, Template.ƒS.positionPercent(70, 100));
        // await ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Zombie, "Uaaaaaghhrrrr");
        // await ƒS.update(0.2);
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.surprised, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "A Zombie! Crap, it's in my way. What should I do?");
        // Welche Entscheidungsmöglichkeiten gibt es 
        let killZombie = {
            shootIt: "Shoot it",
            knifeIt: "Kill it with a knife",
        };
        let choiceKillZombie = await Template.ƒS.Menu.getInput(killZombie, "choiceCSSClass");
        // // if specific answer was picked in a choice, changes dialogue or choices available
        // let shootIt: boolean;
        // let knifeIt: boolean;
        // switch case for when specific answer is picked
        switch (choiceKillZombie) {
            case killZombie.shootIt:
                console.log("Shoot the Zombie");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "You shoot the zombie but you hear even more shuffling and groaning from all around you. A moment later more zombies appear in front of you.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Suddenly you're grabbed from a zombie behind you while another scratches your arm.");
                Template.dataForSave.damageScore += 15;
                // await ƒS.update(0.2);
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Player, "Ugh, dammit! I have to run.");
                await Template.ƒS.Character.hide(Template.characters.Zombie);
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.Location.show(Template.locations.outdoorStairs);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "");
                break;
            case killZombie.knifeIt:
                console.log("Knife the Zombie");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "The Zombie goes down with a quiet 'thud' and you hold your breath to hear if others are nearby.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "But the hallway stays quiet.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Player, "Good. Now, let's go.");
                await Template.ƒS.Character.hide(Template.characters.Zombie);
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.Location.show(Template.locations.outdoorStairs);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "");
                break;
        }
        await Template.ƒS.Location.show(Template.locations.railroadCrossing);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Out of sheer luck you find a railroad crossing with a map next to it.");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "A map, perfect!");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.thinking, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Now, let's see...");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I'm here. And the military base should be... here.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I'm nearly on the other side of the city. But a little less than 8 hours should be more than enough.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I could go through the residential or the commercial area. Hmmm...");
        // Choice: Which area should player go to
        let whichArea = {
            residentialArea: "Go through the residential area.",
            commercialArea: "Go through the commercial area.",
        };
        let choiceWhichArea = await Template.ƒS.Menu.getInput(whichArea, "choiceCSSClass");
        switch (choiceWhichArea) {
            case whichArea.residentialArea:
                console.log("Go through residential area.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "I'll go through the residential area. Maybe I'll find something useful there.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "residentialArea";
                break;
            case whichArea.commercialArea:
                console.log("Go through commercial area.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "I'll go through the commercial area. Maybe there'll be something useful left.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "commercialArea";
                break;
        }
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function followCallForHelp() {
        console.log("Scene: Follow the call for help");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[Somewhere outside]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "I'll follow the call for help");
    }
    Template.followCallForHelp = followCallForHelp;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goThroughMainStreet() {
        console.log("Scene: Go through main street");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[On the main street]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(25, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "...");
        // insert Gespräch mit Lewis here (...)
        // they come across a zombie child that seems to be crying (sounds like growl-crying) and have to decide whether to give it mercy or leave it be
        // Choice: Kill the zombie child or don't
        let killZombieChild = {
            killZombieKid: "Side street",
            dontKillZombieKid: "Main street",
        };
        let choiceWhichStreet = await Template.ƒS.Menu.getInput(killZombieChild, "choiceCSSClass");
        switch (choiceWhichStreet) {
            case killZombieChild.killZombieKid:
                console.log("Kill the zombie child.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "...");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                break;
            case killZombieChild.dontKillZombieKid:
                console.log("Leave the zombie child be.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "The poor child...");
                break;
        }
        // They continue on and reach the edge of the city
        return "goodEnding1";
    }
    Template.goThroughMainStreet = goThroughMainStreet;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goThroughSideStreet() {
        console.log("Scene: Go through side street");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[In a side street]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(25, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "We just have to go through here and another street then we're out of the city.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "How do you know the cabin will be safe?");
        await Template.ƒS.Speech.tell(Template.characters.Player, "It's not marked on any maps and quite a ways from the nearest road. Unless someone stumbled onto \
        it out of sheer luck or on accident, it'll be our safest bet.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "And even if zombies are there it won't be that many. There's not much there for them, so they'll \
        mostly ignore it.");
        // insert Gespräch mit Lewis here (...)
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.surprised, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.surprised, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.Character.show(Template.characters.Survivor, Template.characters.Survivor.pose.survivorM, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "About halfway through the street you see a woman running towards you. Her clothes are torn\
        and bloody, and she is cradling her bleeding arm against her chest, but she appears to be human.");
        await Template.ƒS.Speech.tell(Template.characters.Survivor, "Please, help!");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Lewis catches her as she reaches you and sways on her feet.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "What's wrong?");
        await Template.ƒS.Speech.tell(Template.characters.Survivor, "I think i got bitten by one of those-those-");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Her wide fearful eyes settle on you.");
        await Template.ƒS.Speech.tell(Template.characters.Survivor, "Please, I don't want to hurt anyone! I don't want to be one of them.. Please, k-kill me, before \
        I turn! I beg you!");
        // Choice: Kill the infected woman or don't
        let killInfectedWoman = {
            killHer: "Kill her.",
            dontKillHer: "Don't kill her.",
        };
        let choiceKillInfectedWoman = await Template.ƒS.Menu.getInput(killInfectedWoman, "choiceCSSClass");
        switch (choiceKillInfectedWoman) {
            case killInfectedWoman.killHer:
                console.log("Kill the infected woman.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.Character.hide(Template.characters.Lewis);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(25, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Player, "You can rest now.");
                await Template.ƒS.Speech.tell(Template.characters.Survivor, "Thank you..");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "You take the shaking woman into your arms and pull out your knife out of her sight. \
                Your body almost recognizes the motion as natural as you place it at the back of her neck at the base of her skull and with a sharp \
                plunge you sever her spinal cord.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Her body slumps against you and the shaking ceases. Gently you place her against the \
                nearest wall and fully close her eyes. Then you pack away your knife.");
                await Template.ƒS.Character.hide(Template.characters.Survivor);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.sad, Template.ƒS.positionPercent(75, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Player, "...");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "...");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "You did the right thing. You let her die as a human.");
                // maybe a memory from the war as the player killed their first person
                // await ƒS.Character.hide(characters.Player);
                // await ƒS.update(0.2);
                // await ƒS.Character.show(characters.Player, characters.Player.pose.confused, ƒS.positionPercent(75, 100));
                // await ƒS.update(0.2);
                // await ƒS.Text.print("Another memory, but this one is from my time in the war. [...]");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.Character.hide(Template.characters.Lewis);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(25, 100));
                await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.sad, Template.ƒS.positionPercent(55, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Come on, let's go.");
                break;
            case killInfectedWoman.dontKillHer:
                console.log("Don't kill the infected woman.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(25, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Player, "I can't...");
                // Player can't kill her so she asks them to at least stay at her side until she dies or turns
                // They stay with her and it seems that she died but then she attacks the player and hurts him
                Template.dataForSave.damageScore += 10;
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt, Template.ƒS.positionPercent(25, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Player, "Ugh!");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "The zombie is pulled off of you and you only see Lewis ram a knife into her head and shortly\
                after the body slumps to the ground. Lewis is at your side in a second, looking at your injury.");
                await Template.ƒS.Character.hide(Template.characters.Survivor);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.sad, Template.ƒS.positionPercent(75, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Are you okay?!");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Yes, it's just a scratch...");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.Character.hide(Template.characters.Lewis);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(25, 100));
                await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.sad, Template.ƒS.positionPercent(55, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Lewis helps to patch you up as good as he can and then takes your hands in his.");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Don't beat yourself up over it, it was a difficult decision.");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "I would have hesitated too, because there's a difference between killing on the \
                battlefield, killing a zombie and killing someone innocent who got unlucky.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "...");
                // maybe a memory from the war as the player got hurt and got saved by Lewis
                // await ƒS.Character.hide(characters.Player);
                // await ƒS.update(0.2);
                // await ƒS.Character.show(characters.Player, characters.Player.pose.confused, ƒS.positionPercent(75, 100));
                // await ƒS.update(0.2);
                // await ƒS.Text.print("Another memory, but this one is from my time in the war. [...]");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Come on, let's go.");
                break;
        }
        // They continue on, leave the side street and reach the edge of the city
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        return "goodEnding2";
    }
    Template.goThroughSideStreet = goThroughSideStreet;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goWithLewis() {
        console.log("Scene: Go with Lewis");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[Further in the City]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(25, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Show the way, Lewis.");
        // insert Gespräch mit Lewis here (about the past and that he knows about a place they can go to)
        await Template.ƒS.Speech.tell(Template.characters.Player, "Alright, which way do you want to take? We could go through a side street or the main street. \
        Both will take us to the edge of the city. It's your call.");
        // Choice: Which way to go
        let whichStreet = {
            takeSideStreet: "Side street",
            takeMainStreet: "Main street",
        };
        let choiceWhichStreet = await Template.ƒS.Menu.getInput(whichStreet, "choiceCSSClass");
        switch (choiceWhichStreet) {
            case whichStreet.takeSideStreet:
                console.log("Take the side street.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Let's take the side street.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "goThroughSideStreet";
                break;
            case whichStreet.takeMainStreet:
                console.log("Take the main street.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Let's go through the main street.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "goThroughMainStreet";
                break;
        }
    }
    Template.goWithLewis = goWithLewis;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goodEnding1() {
        console.log("Scene: Good Ending 1");
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Several weeks later");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy2, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "It's peaceful here and not many zombies find their way all the way out here.");
        return "emptyScene";
    }
    Template.goodEnding1 = goodEnding1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goodEnding2() {
        console.log("Scene: Good Ending 2");
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.cabinInForest);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Several weeks later");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral2, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "It's peaceful here and I haven't seen a single zombie in weeks.");
        return "emptyScene";
    }
    Template.goodEnding2 = goodEnding2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function helpingTheSurvivors() {
        console.log("Scene: Helping the survivors");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[Somewhere outside]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Oh, let's help the survivors");
        await Template.ƒS.update(0.5);
        if (Template.dataForSave.pickedUpRations == false) {
            // Player has to kill them with the knife and gets hurt in the process
            await Template.ƒS.Character.hide(Template.characters.Player);
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Speech.tell(Template.characters.Player, "Shit.");
            Template.dataForSave.damageScore += 10;
        }
        // Player manages to kill the zombies with the help of the group and they thank him
        // They then ask him if he has any food or water for them, because they have children with them and haven't eaten in days
        if (Template.dataForSave.pickedUpRations == true) {
            // Choice: Give rations or not
            let giveThemRations = {
                giveRations: "'Here, you can have my rations.'",
                dontGiveRationsLie: "'Sorry, I have nothing left.' (Lie)",
            };
            let choiceGiveThemRations = await Template.ƒS.Menu.getInput(giveThemRations, "choiceCSSClass");
            switch (choiceGiveThemRations) {
                case giveThemRations.giveRations:
                    console.log("Give your rations to the group.");
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Here, you can have my rations.");
                    Template.dataForSave.pickedUpRations = false;
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    return "callForHelp";
                    break;
                case giveThemRations.dontGiveRationsLie:
                    console.log("Lie and don't give your rations to the group.");
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Sorry, I have nothing left");
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    return "callForHelp";
                    break;
            }
        }
        else if (Template.dataForSave.pickedUpRations == false) {
            let giveThemRations = {
                dontGiveRationsTruth: "'Sorry, I have nothing left.' (Truth)"
            };
            let choiceGiveThemRations = await Template.ƒS.Menu.getInput(giveThemRations, "choiceCSSClass");
            switch (choiceGiveThemRations) {
                case giveThemRations.dontGiveRationsTruth:
                    console.log("Don't give your rations to the group.");
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Sorry, I have nothing left");
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    return "callForHelp";
                    break;
            }
        }
    }
    Template.helpingTheSurvivors = helpingTheSurvivors;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function ignoreCallForHelp() {
        console.log("Scene: Ignore the call for help");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[Somewhere outside]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "I'll ignore the call for help.");
        if (Template.dataForSave.pickedUpRations == false) {
            // Player gets dizzy and stumbles, scratches his arm on some protruding metal
            await Template.ƒS.Character.hide(Template.characters.Player);
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Speech.tell(Template.characters.Player, "Ah, fuck.");
            Template.dataForSave.damageScore += 5;
        }
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        // Sees Lewis as a zombie and remembers him from his time in the military
        // Choice: Kill the Zombie or leave it
        let killLewis = {
            killHim: "Give him mercy.",
            dontKillHim: "Leave him be.",
        };
        let choiceKillLewis = await Template.ƒS.Menu.getInput(killLewis, "choiceCSSClass");
        switch (choiceKillLewis) {
            case killLewis.killHim:
                console.log("Kill Zombie-Lewis.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "I should give him mercy...");
                // Choice: How to kill him
                let whichWeapon = {
                    withKnife: "The knife.",
                    withGun: "The Gun.",
                };
                let choicewhichWeapon = await Template.ƒS.Menu.getInput(whichWeapon, "choiceCSSClass");
                switch (choicewhichWeapon) {
                    case whichWeapon.withKnife:
                        console.log("Kill him with the knife.");
                        await Template.ƒS.Speech.tell(Template.characters.Player, "I'm sorry...");
                        // Player tries to kill Zombie-Lewis with the knife but they have to get up close to do it
                        // Either he is sloppy because it takes more time and gets hurt or he remembers something when he is close enough to really see Lewis' face
                        Template.dataForSave.damageScore += 5;
                        await Template.ƒS.Character.hide(Template.characters.Player);
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.Player, "Shit.");
                        // Manages to kill Zombie-Lewis
                        await Template.ƒS.Character.hide(Template.characters.Player);
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.Player, "He deserves to be remembered.");
                        await Template.ƒS.Text.print("Memory about Lewis + extra memory");
                        Template.dataForSave.novelMilitaryTimeExtra = true;
                        break;
                    case whichWeapon.withGun:
                        console.log("Kill him with the gun.");
                        await Template.ƒS.Speech.tell(Template.characters.Player, "I'm sorry...");
                        // Player shoots Zombie-Lewis in the head and leaves before other zombies can arrive
                        await Template.ƒS.Speech.tell(Template.characters.Player, "He deserves to be remembered.");
                        await Template.ƒS.Text.print("Memory about Lewis");
                        Template.dataForSave.novelMilitaryTime = true;
                        break;
                }
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "rendezvous";
                break;
            case killLewis.dontKillHim:
                console.log("Don't kill Zombie-Lewis.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "I can't kill him...");
                await Template.ƒS.Speech.tell(Template.characters.Player, "But he deserves that I at least remember him.");
                await Template.ƒS.Text.print("Memory about Lewis");
                Template.dataForSave.novelMilitaryTime = true;
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "rendezvous";
                break;
        }
    }
    Template.ignoreCallForHelp = ignoreCallForHelp;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function meetingSurvivors() {
        console.log("Scene: Meeting survivors");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You walk through the streets and surprisingly only come across a few zombies you can avoid. \
        As you walk by another side street you hear and see why that is.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "A group of zombies is trying to claw their way into a small shop.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.thinking, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "What are all the zombies doing there?");
        // Add more code here: Player sees the group of survivors that are defending themselves against a group of zombies
        // The survivors are inside an old abandoned shop and the zombies are trying to break inside to get to them
        // One of them sees the player and calls to them for help
        await Template.ƒS.Character.show(Template.characters.Survivor, Template.characters.Survivor.pose.survivorM, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Survivor, "Please, you have to help us! I beg you! There are children in here!");
        // Choice: Help the group of survivors or don't
        let groupNeedsHelp = {
            helpGroup: "Help them.",
            ignoreGroup: "Ignore them.",
        };
        let choiceGroupNeedsHelp = await Template.ƒS.Menu.getInput(groupNeedsHelp, "choiceCSSClass");
        switch (choiceGroupNeedsHelp) {
            case groupNeedsHelp.helpGroup:
                console.log("Help the group.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "I have to help them.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "helpingTheSurvivors";
                break;
            case groupNeedsHelp.ignoreGroup:
                console.log("Ignore the group");
                await Template.ƒS.Speech.tell(Template.characters.Player, "I don't have time for this.");
                await Template.ƒS.Character.hide(Template.characters.Survivor);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "You turn away from the group and their calls for help and continue on. Just as you \
                make to round the next corner you hear glass break and the calls turn into screams of terror and pain. Amidst the agonizing \
                screams you can hear the voice of the man that had called out to you curse you and cry out why you didn't help.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "You don't turn back around to see the zombies storming into the shop like starving \
                animals, as they rip apart whoever they can reach the fastest. But just as soon as the screams started they're quiet again \
                and the only sound that remains is of the zombies enjoying their feast.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "...");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "callForHelp";
                break;
        }
    }
    Template.meetingSurvivors = meetingSurvivors;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function prologue() {
        console.log("Prologue");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(80, 5000); // kontrolliert die Textgeschwindigkeit -> cpms = characters per miliisecond
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        Template.ƒS.Speech.hide(); //hides the speech --> verhindert, dass man die speechbox sofort mit Beginn der Szene sieht
        await Template.ƒS.Location.show(Template.locations.oldKitchen);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt, Template.ƒS.positionPercent(30, 100)); // beim hovern wird Aufbau angezeigt
        await Template.ƒS.update(); // immer nach Location-Wechsel
        // signalDelay3();
        await Template.ƒS.Speech.tell(Template.characters.Player, "Huh, what... Where am I? Ouch, my head...");
        await Template.ƒS.Speech.tell(Template.characters.Player, "What happened?");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "There is a journal here.");
        await Template.ƒS.Text.print("<strong> How to survive the Zombie Apocalypse: </strong><br><br><br> - Avoid getting bitten => Infection will \
        spread like that <br><br> - Aim for the head => Their brains are their weakness <br><br> - Use melee weapons if possible => Sound \
        attracts them <br><br> - Don't give up");
        await Template.ƒS.Text.print("Day 13, <br><br> It's been a few days since the apocalypse started. Everyday it's getting harder to find survivors \
        and I'm starting to lose hope. Is this going to be the end of humanity?");
        await Template.ƒS.Text.print("Day 26, <br><br> I lost all contact to the military headquarters. Were they overrun or is something interferring \
        with the radios? I really hope it's the latter... I don't know how good our chances are if we lost the military.");
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.Speech.tell(Template.characters.Player, "A zombie apocalypse? Ah yes, I remember now. But who...");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Wait, I know. My name is ");
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        Template.characters.Player.name = Template.dataForSave.nameProtagonist;
        await Template.ƒS.Speech.tell(Template.characters.Player, "I should write everything I know down.");
        await Template.ƒS.Text.print("I suddenly woke up in the apocalypse and I have trouble remembering how it all started or who I really am. \
        I faintly remember being in the military, but not for how long or if I left it before everything went to hell. <br><br><br><br> \
        Name: " + Template.dataForSave.nameProtagonist + "<br><br> Age: ?? <br><br> Occupation: Soldier?/Ex-Soldier? ");
        Template.dataForSave.novelPage1 = true;
        await Template.ƒS.Speech.tell(Template.characters.Player, "Age...?");
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.confused, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Dammit my mind's all fuzzy.");
        await Template.ƒS.Speech.tell(Template.characters.Radio, "'<i>...surv...hea...tary...extrac...</i>'");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.surprised, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "What's that?");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You notice a radio, a gun and a knife lying next to you. You take everything and try to tune the radio.");
        await Template.ƒS.Speech.tell(Template.characters.Radio, "'<i>To all survivors who can hear this, the military is organizing one last extraction of survivors to a safe zone.</i>'");
        await Template.ƒS.Speech.tell(Template.characters.Radio, "'<i>The rendezvous point is the military base 'Delta' just on the northern edge of the city. The last plane will leave in 8 hours. \
        I repeat: The rendezvous point is military base 'Delta' just on the northern edge of the city. The last plane will leave in 8 hours.</i>'");
        Template.dataForSave.novelRadio = true;
        console.log(Template.dataForSave.novelRadio);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Northern edge? I'll have to find a map. I hope I can make it there on time.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update();
        Template.ƒS.Speech.clear(); // löscht den Text und danach kann man die speech box verstecken mit hide
    }
    Template.prologue = prologue;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function rendezvous() {
        console.log("Scene: Rendezvous");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.oldStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[At Military Camp Delta]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "I made it to rendezvous.");
        return "goodEnding2";
    }
    Template.rendezvous = rendezvous;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function routeCommercialArea() {
        console.log("Scene: Commercial area");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.restaurant);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[At an abandoned restaurant]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "This place looks better than the others I've seen, but I don't think there'll be anything left either.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.thinking, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "The people left in a hurry with all the food still on the table. But it's already gone bad, sadly.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You search the whole restaurant for some food or water that's still edible, but find nothing");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Nothing left for me here, it seems...");
        await Template.ƒS.Speech.tell(Template.characters.Player, "But I need to find something to drink soon, my throat's starting to hurt.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Hm, the menu...");
        await Template.ƒS.Text.print("<strong>Menu</strong> <br><br> <i>SOUP AND SALAD</i> <br><br> Mango Chutney 2,95€ <br> Dal Soup 2,95€ <br> Cucumber Salad 3,50€ <br> \
        Mixed Salad 3,50€ <br> Raita 2,25€ <br><br> <i>MAIN DISHES</i> <br><br> Lamb Curry 11,95€ <br> Prawn Vindaloo 11,95€ <br> \
        Boti Kabab 12,95€ <br> Prawn Biryani 12,95€ <br><br> <i>DESSERTS</i> <br><br> Gulab Jamun 2,50€ <br> Kulfi 2,50€ <br> Kheer 2,50€");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Suddenly I'm really craving some Mushroom Mattar.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.surprised, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Mushroom Mattar? Oh yea, mom used to make it for me whenever I got good grades or \
        wasn't feeling well. That was when I was still in school.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "The way she made it was my favourite, I never could quite recreate it no matter how hard I tried. \
        She wanted to wait until my 18th birthday, before giving me the family recipe, but-");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Oh... right.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "She passed away before she could when I was 16.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I should write that down...");
        await Template.ƒS.Text.print("I remembered some things about my past. My favourite food is Mushroom Mattar. My mother always cooked it for me \
        when I did well in school or when she wanted to cheer me up. The way she made it was special and I remember it tasting like the most \
        delicious food I had ever eaten. <br> I tried recreating it for years, but never did quite manage to make it taste exactly like hers. She told \
        me as soon as I turned 18 she would teach me the family recipe, but she passed away when I was 16. A car accident. A drunk driver crashed \
        into her car. <br><br> She taught me how to cook and thanks to her, cooking became my hobby. I miss her. <br><br> But at least she \
        won't have to see what happened to the world. <br><br><br> Rest well, Mom.");
        Template.dataForSave.novelFavFood = true;
        await Template.ƒS.Speech.tell(Template.characters.Player, "...");
        // await ƒS.Character.hide(characters.Player);
        // await ƒS.update(0.2);
        // await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        // await ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "I have to go on or I won't make it in time.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        Template.ƒS.Speech.clear();
        return "meetingSurvivors";
    }
    Template.routeCommercialArea = routeCommercialArea;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function routeResidentialArea() {
        console.log("Residential area");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.kitchen);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[In an abandoned apartment]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "This place looks like it was untouched by the apocalypse. Guess the residents never \
        came back after it started.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Hopefully there'll be some still-edible stuff I can take.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You rummage through the cabinets and cupboards in search for rations and find a bottle of \
        water and three granola bars.");
        Template.dataForSave.pickedUpRations = true;
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "That should be enough to last to the rendezvous point.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Let's see what else is here.");
        Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.livingRoom);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You search through the rest of the apartment and find a golf club in the storage room.");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "A golf club. Could be useful if I want to keep the zombies away from me. Is there anything else?");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You notice some photos on one of the cabinets.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I wonder who lived here before.");
        await Template.ƒS.Character.show(Template.characters.Others, Template.characters.Others.pose.catPic, Template.ƒS.positionPercent(70, 70));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "A cat. Cute.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Did I have any pets?");
        await Template.ƒS.Character.hide(Template.characters.Others);
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.confused, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "I think.. I had one?");
        await Template.ƒS.Speech.tell(Template.characters.Player, "But what was it?");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Ah yes I remember. I had a cat when I was younger.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Her name was Loona. She was so small even as she got older. I can almost feel her claws, she \
        loved playing.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I should write that down.");
        await Template.ƒS.Text.print("I remembered some things about my past. I had a pet when I was younger, a cat. Her name was Loona and she \
        was this feisty little ball of black and white fur. I still have countless little scars all over my hands and arms, 'cause she loved \
        playing. She wasn't really a cuddler most of the time, but I remember waking up to her cuddled up on the foot of my bed sometimes. <br><br> \
        She was my first and only pet and I'll continue to remember her fondly.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Okay, time to go. I've still got some ground to cover");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        Template.ƒS.Speech.clear();
        return "meetingSurvivors";
    }
    Template.routeResidentialArea = routeResidentialArea;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function testScene() {
        console.log("Test Scene");
        // await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        // ƒS.update();
        // await ƒS.Speech.tell(characters.Player, "Test");
        await Template.ƒS.Text.print("How to survive the Zombie Apocalypse: <br><br><br> - Avoid getting bitten -> Infection will spread like that <br><br> - Aim for the head -> Their brains are their weakness <br><br> - Use melee weapons if possible -> Sound attracts them <br><br> - Don't give up");
        // await ƒS.Text.print("Day 23 <br><br> It's been a few weeks since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. ");   
        // await ƒS.update();
        // Welche Entscheidungsmöglichkeiten gibt es 
        let decision = {
            iSayYes: "Yes",
            iSayOk: "Okay",
            iSayNo: "No",
            iSayBla: "Bla"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(decision, "choiceCSSClass");
        // if specific answer was picked in a choice, changes dialogue or choices available
        let pickedYes;
        let pickedNo;
        let pickedBla;
        // let pickedOk: boolean;
        // if Yes, Bla or No was picked, run specific code
        if (pickedYes || pickedBla || pickedNo) {
            delete decision.iSayBla;
        }
        // switch case for when specific answer is picked
        switch (dialogueElement) {
            case decision.iSayYes:
                // continue path here
                console.log("Option Yes");
                Template.dataForSave.damageScore += 20;
                await Template.ƒS.Speech.tell(Template.characters.Player, "Yes");
                novelPage1: true;
                // return "SecondScene";        //bei return springt es auf die angegebene Szene, id verwenden
                break;
            case decision.iSayNo:
                // continue path here
                console.log("Option No");
                await Template.ƒS.Speech.tell(Template.characters.Player, "No");
                break;
            case decision.iSayOk:
                // continue path here
                console.log("Option Ok");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Ok");
                break;
            case decision.iSayBla:
                // continue path here
                console.log("Option Bla");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Bla");
                break;
        }
    }
    Template.testScene = testScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map