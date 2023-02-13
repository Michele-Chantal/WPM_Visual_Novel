"use strict";
var Template;
(function (Template) {
    async function journals() {
        let pages = ["<strong> How to survive the Zombie Apocalypse: </strong><br><br><br> - Avoid getting bitten => Infection will spread like that <br><br> \
        - Aim for the head => Their brains are their weakness <br><br> - Use melee weapons if possible => Sound attracts them <br><br> - Don't give up", "Day 13, <br><br>\
        It's been a few days since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. Is this going to be the end of humanity?",
            "Day 26, <br><br> I lost all contact to the military headquarters. Were they overrun or is something interferring with the radios? I really hope it's the latter... \
        I don't know how good our chances are if we lost the military.", "Day 45, <br><br> I don't know if I can keep doing this..."];
        // Alle Journalseiten in einer if-Abfrage abfragen mit boolschen Werten in dataForSave; z.B. iSayYes = false und nachdem man 'Yes' gewählt hat wird iSayYes = true und die richtige Novelpage wird angezeigt
        let current = 0;
        let numberAquired = 0;
        Template.ƒS.Text.addClass("changePage");
        if (Template.dataForSave.novelPage1 == true) {
            pages.push("I suddenly woke up in the apocalypse and I have trouble remembering how it all started or who I really am. I faintly remember \
            being in the military, but not for how long or if I left it before everything went to hell. <br><br><br><br> Name: " + Template.dataForSave.nameProtagonist +
                "<br><br> Age: ?? <br><br> Occupation: Soldier?/Ex-Soldier? ");
            numberAquired += 4;
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
        if (Template.dataForSave.novelSurvivors == true) {
            pages.push("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
            VIP that had been taken hostage by a shady organization that was trying get rich through. They didn't expect the military to show up \
            but that could have been avoided if they had did their research right. They thought they just had a higher-up worker at the bank they had \
            tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
            so well for the robbers. In the end they got no money and landed in jail.");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelLewis == true) {
            pages.push("I just met someone from my past, his name is Lewis. We served together in the military and after he got shot in the \
            shoulder in a battle I saved him and after that we became close, because he kept following me around. I guess I kind of just warmed up \
            to him and it became normal to seek each other out.");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelNoLewis == true) {
            pages.push("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
            We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him he stuck by my side and \
            over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
            the only thing from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
            numberAquired += 1;
        }
        if (Template.dataForSave.novelEnding2 == true) {
            pages.push("Day 47 <br><br> We finally reached the cabin Lewis was talking about. It's a days walk from the city, but he was right \
            it's in the middle of nowhere and also hidden from all main roads. At first we followed the main road leavig out of the city and \
            came across quite a few zombies. But halfway through we started heading through the forest and fields and found just a few stray zombies \
            roaming around. <br><br> The cabin itself is quite cozy, but it's obvious that no one's been here in months. It's too big for just us \
            two, but maybe someone will join us in time. And he was right, there's enough food here to last us a few weeks. But Lewis says he's \
            already has a plan. I trust him. It'll be some time, until this place will feel like home, but tidying everything up will be the first step.");
            pages.push("Day 54 <br><br> We're still busy with the place and I haven't found much time to write. But I finally know what Lewis' plan \
            was: He wants to plant some vegetables and fruits. He got the seeds from the garden center in the center, that's why he was there when I \
            found him. I have no idea about gardening, but he seems so know what he is doing.");
            pages.push("Day 67 <br><br> It's peaceful here and not many zombies find their way all the way out here. <br><br> My \
            memories are gradually returning and Lewis tries to fill in the blanks as good as he can. He has been a big help, not only in remembering \
            but giving us a new place to call home and giving me a reason to keep fighting. <br><br> I remembered that I love fishing and we got lucky \
            with a big lake not far from here. So fish is our main ingredient at the moment. Most of the time I cook, but Lewis helps from time to time \
            He pretends that he's not had enough of fish yet, but I know he wouldn't mind a change. I hope the stuff we planted will be ready to harvest \
            soon, then I could surprise him with his favourite dish. It's also getting time for another city run soon. Maybe we'll get lucky this time and \
            find a functioning car. I don't mind the walk, but it can get tiring pretty quickly. Not that Lewis minds. He always loved walking. I wonder \
            where he gets all the energy from...");
            numberAquired += 3;
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
        novelSurvivors: false,
        novelLewis: false,
        novelNoLewis: false,
        novelEnding2: false,
        // Item
        pickedUpRations: false,
        pickedUpBat: false,
        pickedMeterScene: false,
        pickedAnimationScene: false,
        pickedChoice: false
    };
    Template.transition = {
        paintblobs: {
            duration: 1.1,
            // keine absoluten Pfade, sondern relative Pfad
            alpha: "Images/Transitions/paintblobs.jpg",
            // Härte der Transitions
            edge: 2
        },
        lines: {
            duration: 1,
            alpha: "Images/Transitions/lines.jpg",
            edge: 2
        },
        vignette: {
            duration: 3,
            alpha: "Images/Transitions/vignette.jpg",
            edge: 1,
        }
    };
    // Sounds werden exportiert bzw. geladen
    Template.sound = {
        // Sounds unterscheiden in Themes, SFX etc.
        // Music/Themes
        // SFX
        drop: "Audio/drop.mp3" //name of sound and the relative path to it, kann unbenannt werden
    };
    // Locations bzw. Backgrounds der Szenen
    Template.locations = {
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
        schoolyard: {
            name: "Schoolyard",
            background: "Images/Backgrounds/schoolyard.png"
        },
        school: {
            name: "School",
            background: "Images/Backgrounds/school.png"
        },
        cafeteria: {
            name: "cafeteria",
            background: "Images/Backgrounds/cafeteria.png"
        },
        sideStreet: {
            name: "Side Street",
            background: "Images/Backgrounds/side_street.png"
        },
        livingRoom: {
            name: "Living Room",
            background: "Images/Backgrounds/living_room.png"
        },
        otherStreet: {
            name: "Other Street",
            background: "Images/Backgrounds/other_street.png"
        },
        cabinInForest: {
            name: "Cabin in the forest",
            background: "Images/Backgrounds/cabin_in_forest.jpg"
        },
        dark: {
            name: "Bad Ending 1",
            background: "Images/Backgrounds/dark.png"
        },
        base: {
            name: "Base",
            background: "Images/Backgrounds/base.png"
        },
        beach: {
            name: "Beach",
            background: "Images/Backgrounds/beach.png"
        },
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
                surprised: "Images/Characters/lewis_surprised.png",
                worried: "Images/Characters/lewis_worried.png",
                zombie: "Images/Characters/lewis_zombie.png"
            }
        },
        Radio: {
            name: "Radio",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                radio: "Images/Items/radio.png",
            }
        },
        SurvivorM: {
            name: "Man",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                survivorM: "Images/Characters/survivorM.png",
            }
        },
        SurvivorF: {
            name: "Woman",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                survivorF: "Images/Characters/survivorF.png",
            }
        },
        SurvivorChild: {
            name: "Child",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                survivorChild: "Images/Characters/survivorChild.png"
            }
        },
        Zombie: {
            name: "Zombie",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                zombieM: "Images/Characters/zombieM.png",
                zombieF: "Images/Characters/zombieF.png",
                zombieChild: "Images/Characters/zombieChild.png"
            }
        },
        Soldier: {
            name: "Soldier",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                soldier: "Images/Characters/soldier.png"
            }
        },
        Others: {
            name: "Others",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                catPic: "Images/Items/cat_pic.png",
                golfClub: "Images/Items/golf_club.png",
                memory: "Images/Items/memory.png",
                red: "Images/Items/red.png",
                // flower: "Images/Items/flower.png",       still unsure about this one
                // rations: "Images/Items/rations.png",      still unsure about this one
                // journal: "Images/Items/journal.png",      still unsure about this one
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
                Template.credits();
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
            { id: "FirstScene", scene: Template.firstScene, name: "First scene" },
            { id: "residentialArea", scene: Template.routeResidentialArea, name: "Residential area" },
            { id: "commercialArea", scene: Template.routeCommercialArea, name: "Commercial area" },
            { id: "meetingSurvivors", scene: Template.meetingSurvivors, name: "Meeting Survivors" },
            { id: "helpingTheSurvivors", scene: Template.helpingTheSurvivors, name: "Helping the Survivors" },
            { id: "callForHelp", scene: Template.callForHelp, name: "Call for help" },
            { id: "followCallForHelp", scene: Template.followCallForHelp, name: "Follow the call for help" },
            { id: "ignoreCallForHelp", scene: Template.ignoreCallForHelp, name: "Ignore the call for help" },
            { id: "rendezvous", scene: Template.rendezvous, name: "Rendezvous" },
            { id: "goWithLewis", scene: Template.goWithLewis, name: "Go with Lewis" },
            { id: "goThroughSideStreet", scene: Template.goThroughSideStreet, name: "Go through side street" },
            { id: "goThroughSchoolyard", scene: Template.goThroughSchoolyard, name: "Go through schoolyard" },
            { id: "goodEnding1", scene: Template.goodEnding1, name: "Good Ending 1" },
            { id: "goodEnding2", scene: Template.goodEnding2, name: "Good Ending 2" },
            { id: "badEnding1", scene: Template.badEnding1, name: "Bad Ending 1" },
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
    async function credits() {
        await Template.ƒS.Text.print("<strong>Credits</strong> <br><br> <i>Characters:</i> <br> All characters by Michele-Chantal Oeun (me) in VRoid <br><br> <i>Character Assets:</i> <br>\
        Hoodie by mio (https://mo-shop.booth.pm/) <br> Wounds/Blood by Akira's Creations (https://arttai.booth.pm/) <br> Bloody Eye by TwoEzStore \
        (https://twoezdragon.booth.pm/) <br><br>  <i>Backgrounds:</i> <br> Background Pack by Noraneko Games <br> Beach Background by Selidor (https://robingoodwin.co.uk \
        & https://twitter.com/Selidor) <br> Cabin in woods by tatsuya (https://www.pixiv.net/en/users/2206379) <br><br> <i>Music:</i> <br> ??? <br><br> \
        <i>SFX:</i> <br> ???");
    }
    Template.credits = credits;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function badEnding1() {
        console.log("Scene: Bad Ending 1");
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.dark);
        await Template.ƒS.update(Template.transition.vignette.duration, Template.transition.vignette.alpha, Template.transition.vignette.edge);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "GAME OVER!");
        await Template.ƒS.update(0.2);
        return "emptyScene";
    }
    Template.badEnding1 = badEnding1;
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
        await Template.ƒS.Location.show(Template.locations.otherStreet);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        // await ƒS.Speech.tell(characters.Narrator, "[Somewhere outside]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Radio, "'<i>Hello, can anyone hear me?</i>'");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.thinking, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Hmm?");
        await Template.ƒS.Character.show(Template.characters.Radio, Template.characters.Radio.pose.radio, Template.ƒS.positionPercent(75, 100)); // model still missing
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Radio, "'<i>If anyone can hear this, please, I need some help</i>'");
        await Template.ƒS.Speech.tell(Template.characters.Radio, "'<i>I'm at the garten center on Maple Avenue, the west back entrance. Zombie are trying to break into the room \
        I'm holed up in but I can't leave, because it's not looking better on the outside.</i>'");
        await Template.ƒS.Speech.tell(Template.characters.Radio, "'<i>Whoever can hear me, please, hurry. I don't know how much longer I can hold out.</i>'");
        await Template.ƒS.Speech.tell(Template.characters.Radio, "'<i>I repeat. I'm at the garten center on Maple Avenue, the west back entrance.</i>'");
        await Template.ƒS.Speech.tell(Template.characters.Radio, "'<i>There's a group of zombies just by the back entrance, so if someone is coming, please be careful. Over.</i>'");
        await Template.ƒS.Character.hide(Template.characters.Radio);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Should I go help? But it's in the opposite direction I need to go. If I'll follow the call I won't make it to the rendezvous \
        in time.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "In my mind I <i>know</i> should ignore the call, but why do I feel my body hesitating?");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Shit, I gotta decide.");
        // Choice: Follow the call for help or ignore it
        let radioCallForHelp = {
            followRadioCall: "Ignore call for help.",
            ignoreRadioCall: "Follow the call for help.",
        };
        let choiceradioCallForHelp = await Template.ƒS.Menu.getInput(radioCallForHelp, "choiceCSSClass");
        switch (choiceradioCallForHelp) {
            case radioCallForHelp.followRadioCall:
                console.log("Follow the call for help.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Something is telling me to follow the call.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "followCallForHelp";
                break;
            case radioCallForHelp.ignoreRadioCall:
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
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.apartmentOutside);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "A sound from your right draws your attention just as you leave the apartment.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Hello?");
        await Template.ƒS.Character.show(Template.characters.Zombie, Template.characters.Zombie.pose.zombieM, Template.ƒS.positionPercent(70, 100));
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
                await Template.ƒS.Character.show(Template.characters.Others, Template.characters.Others.pose.red, Template.ƒS.positionPercent(50, 100));
                // await ƒS.update(0.2);
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.Character.hide(Template.characters.Others);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Player, "Ugh, dammit! I have to run.");
                await Template.ƒS.Character.hide(Template.characters.Zombie);
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.Location.show(Template.locations.outdoorStairs);
                await Template.ƒS.update(Template.transition.lines.duration, Template.transition.lines.alpha, Template.transition.lines.edge);
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
                await Template.ƒS.update(Template.transition.lines.duration, Template.transition.lines.alpha, Template.transition.lines.edge);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "");
                break;
        }
        await Template.ƒS.Location.show(Template.locations.railroadCrossing);
        await Template.ƒS.update(Template.transition.lines.duration, Template.transition.lines.alpha, Template.transition.lines.edge);
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
        await Template.ƒS.Location.show(Template.locations.otherStreet);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[At the garden center]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You round the corner to the west entrance and immediately notice four zombies clawing at the backdoor.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Just four zombies? I should be able to deal with them. Just need to find something elevated to \
        stay out of their reach, just to be safe.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I could climb on that hedge, should be high enough.");
        if (Template.dataForSave.pickedUpBat == true) {
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "You climb on the hedge and make sure that your footing is steady before you pull out your golf club.");
        }
        else if (Template.dataForSave.pickedUpBat == false) {
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "You climb on the hedge and make sure that your footing is steady before you pull out your knife.");
        }
        await Template.ƒS.Speech.tell(Template.characters.Player, "Hey, zombies! I'm over here.");
        await Template.ƒS.Character.show(Template.characters.Zombie, Template.characters.Zombie.pose.zombieM, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Zombie, "Huuuurgghhhhh.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "All the zombies turn to your voice and begin to stumble their way towards you. Out of the \
        corner of your eyes you see the door open, but you keep your focus on the zombies.");
        if (Template.dataForSave.pickedUpBat == true) {
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "As soon as the first zombie is in reach, you swing your club and smash its head in. With a \
            satisfying 'thump' its body slumps to the ground. The next one uses that moment to grab for your leg, but you kick it away and deal \
            a few deals to its head.");
        }
        else if (Template.dataForSave.pickedUpBat == false) {
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "As soon as the first zombie is in reach, you stab your knife into its head. While you try \
            to pull your knife out of the first zombie's brain, the next one uses that moment to grab for your leg. But you manage to free your knife \
            in time to ram it through its head.");
        }
        await Template.ƒS.Character.show(Template.characters.Zombie, Template.characters.Zombie.pose.zombieM, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.Zombie);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You turn to the last two zombies only to find them already dead on the ground with a blond haired \
        man standing over them, who is already staring at you.");
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.surprised, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Rush? It's you.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You climb down from the hedge and walk closer to the man.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Who?");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.worried, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "But, I thought-");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Sorry, forget that. I'm Lewis, thanks for your help. Thought I'd have to risk fighting my way out of this. \
        Was real lucky that you decided to help me.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I'm " + Template.dataForSave.nameProtagonist + ". And yea, you're welcome. Couldn't just ignore your call. \
        Because, you know, you needed help and...");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You know you're rambling, but as soon as you saw him you felt like you had seen him somewhere before. \
        And you couldn't just tell him that a gut feeling made you come here.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "I hope I didn't inconvenience you or seperate you from your group.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "No, I'm... traveling alone.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Great!");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "I mean, I was planing to leave the city, I know of a cabin some way from the city. \
        It belonged to my uncle and he mostly used it to get away from the all the stress and work, so it should be stocked. If you don't have any \
        other plans you could come with me.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "But you don't even know me.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "You saved me. I know that you're a good person.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "...");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "So what do you say? Don't worry, it's not a ploy to lure you into a dark alley and steal your cool \
        hoodie or something like that. Sorry, bad joke.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Okay, I'll go with you.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Alright! Then what are we waiting for? Let's go.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        return "goWithLewis";
    }
    Template.followCallForHelp = followCallForHelp;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goThroughSchoolyard() {
        console.log("Scene: Go through schoolyard");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.schoolyard);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        // await ƒS.Speech.tell(characters.Narrator, "[In a schoolyard]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(25, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "We just have to go through here and another street then we're out of the city.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "How do you know the cabin will be safe?");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "It's not marked on any maps and quite a ways from the nearest road. Unless someone stumbled onto \
        it out of sheer luck or on accident, it'll be our safest bet.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "And even if zombies are there it won't be that many. There's not much there for them, so they'll \
        mostly ignore it.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I see.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "You know, you never told my why you called me 'Rush'.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.happy, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "It's actually kinda silly, really. One day off-base we were watching a movie about superheroes. The \
        main characters were this duo, they were complete opposites but they worked together like they were two halves of a whole. And out of joke \
        we started calling each other as their hero names and it kinda just stuck. One of them was this quiet reserved guy, that prefered working \
        alone, but cared about his team. Like you. That was Rush. And the other one was this outgoing, happy-go-lucky guy, that got along with \
        everyone. Kinda like me. That was-");
        await Template.ƒS.Speech.tell(Template.characters.Player, "[...]?");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Yes, Exactly! Do you remember?");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Bits and pieces, but I do remember watching the movie with you. You kept talking about it for weeks \
        after that. It was kind of endearing.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Don't act like you didn't enjoy it too. You loved it! And spending time with me.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Yeah.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.surprised, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Huh?");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I never really said it back then and that was a mistake. So I'm sorry and thank you.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.happy, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "I'm so glad to have met you. Back then and now.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "...");
        await Template.ƒS.Location.show(Template.locations.school);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "When you reach the school you hear something that sounds like crying.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Shh, do you hear that?");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.surprised, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "That sounds like crying, but something feels off. It's coming from the cafeteria.");
        await Template.ƒS.Location.show(Template.locations.cafeteria);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.surprised, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.surprised, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.Character.show(Template.characters.Zombie, Template.characters.Zombie.pose.zombieChild, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "A child...?");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "What should we do?");
        // Choice: Kill the zombie child or don't
        let killZombieChild = {
            killZombieKid: "Kill it",
            dontKillZombieKid: "Don't kill it",
        };
        let choiceKillZombieChild = await Template.ƒS.Menu.getInput(killZombieChild, "choiceCSSClass");
        switch (choiceKillZombieChild) {
            case killZombieChild.killZombieKid:
                console.log("Kill the zombie child.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.Character.hide(Template.characters.Lewis);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(20, 100));
                await Template.ƒS.Speech.tell(Template.characters.Player, "...");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "You pull out your knife as you sneak to the zombie-child. It has its face turned away from \
                you so it doesn't see you coming and you manage to step right up to it.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "With a firm grip you hold onto its head so it can't turn around and as it struggles you \
                ram your knife into its head. The struggling ceases and you carefully carry the lifeless body to place it against a wall and close \
                its eyes. Then you pack away your knife.");
                await Template.ƒS.Character.hide(Template.characters.Zombie);
                await Template.ƒS.Speech.tell(Template.characters.Player, "You can rest now...");
                await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.sad, Template.ƒS.positionPercent(35, 100));
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Come on, let's go.");
                break;
            case killZombieChild.dontKillZombieKid:
                console.log("Leave the zombie child be.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "The poor child...");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "You look at the child for a bit longer as it stumbles through the cafeteria with no \
                goal. You couldn't kill it, even if wasn't human anymore.");
                await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.sad, Template.ƒS.positionPercent(35, 100));
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Come on, let's go.");
                await Template.ƒS.Character.hide(Template.characters.Zombie);
                break;
        }
        await Template.ƒS.Location.show(Template.locations.base);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "After some more walking you two reach the edge of the city. The destruction here is less severe. \
        Some broken cars and corpses are strewn across the road, but in contrast to the city it seems almost peaceful. Just a bit more and \
        your new life can begin. Soon you can rest.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        return "goodEnding1";
    }
    Template.goThroughSchoolyard = goThroughSchoolyard;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goThroughSideStreet() {
        console.log("Scene: Go through side street.");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.sideStreet);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        // await ƒS.Speech.tell(characters.Narrator, "[In a side street]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(25, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "We just have to go through here and another street then we're out of the city.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "How do you know the cabin will be safe?");
        await Template.ƒS.Speech.tell(Template.characters.Player, "It's not marked on any maps and quite a ways from the nearest road. Unless someone stumbled onto \
        it out of sheer luck or on accident, it'll be our safest bet.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "And even if zombies are there it won't be that many. There's not much there for them, so they'll \
        mostly ignore it.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I see.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "You know, you never told my why you called me 'Rush'.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.happy, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "It's actually kinda silly, really. One day off-base we were watching a movie about superheroes. The \
        main characters were this duo, they were complete opposites but they worked together like they were two halves of a whole. And out of joke \
        we started calling each other as their hero names and it kinda just stuck. One of them was this quiet reserved guy, that prefered working \
        alone, but cared about his team. Like you. That was Rush. And the other one was this outgoing, happy-go-lucky guy, that got along with \
        everyone. Kinda like me. That was-");
        await Template.ƒS.Speech.tell(Template.characters.Player, "[...]?"); // have to find a name!!
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Yes, Exactly! Do you remember?");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Bits and pieces, but I do remember watching the movie with you. You kept talking about it for weeks \
        after that. It was kind of endearing.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Don't act like you didn't enjoy it too. You loved it! And spending time with me.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Yeah.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.surprised, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Huh?");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I never really said it back then and that was a mistake. So I'm sorry and thank you.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.happy, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "I'm so glad to have met you. Back then and now.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "...");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.surprised, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.surprised, Template.ƒS.positionPercent(40, 100));
        await Template.ƒS.Character.show(Template.characters.SurvivorF, Template.characters.SurvivorF.pose.survivorF, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "About halfway through the street you see a woman running towards you. Her clothes are torn\
        and bloody, and she is cradling her bleeding arm against her chest, but she appears to be human.");
        await Template.ƒS.Speech.tell(Template.characters.SurvivorF, "Please, help!");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Lewis catches her as she reaches you and sways on her feet.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "What's wrong?");
        await Template.ƒS.Speech.tell(Template.characters.SurvivorF, "I think i got bitten by one of those-those-");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Her wide fearful eyes settle on you.");
        await Template.ƒS.Speech.tell(Template.characters.SurvivorF, "Please, I don't want to hurt anyone! I don't want to be one of them.. Please, k-kill me, before \
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
                await Template.ƒS.Speech.tell(Template.characters.SurvivorF, "Thank you..");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "You take the shaking woman into your arms and pull out your knife out of her sight. \
                Your body almost recognizes the motion as natural as you place it at the back of her neck at the base of her skull and with a sharp \
                plunge you sever her spinal cord.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Her body slumps against you and the shaking ceases. Gently you place her against the \
                nearest wall and fully close her eyes. Then you pack away your knife.");
                await Template.ƒS.Character.hide(Template.characters.SurvivorF);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.worried, Template.ƒS.positionPercent(75, 100));
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
                await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.worried, Template.ƒS.positionPercent(55, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Come on, let's go.");
                break;
            case killInfectedWoman.dontKillHer:
                console.log("Don't kill the infected woman.");
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(25, 100));
                await Template.ƒS.update(0.2);
                await Template.ƒS.Speech.tell(Template.characters.Player, "I can't... I'm sorry.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "The woman slumps further into Lewis' arms, defeated.");
                await Template.ƒS.Speech.tell(Template.characters.SurvivorF, "At least don't let me die or turn alone, please.");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Of course we'll stay.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Lewis guides her towards the wall.");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Here, sit down. That'll be more comfortable.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Time passes as Lewis starts talking about a children's story he used to love as a kid, \
                but you're not really listening as you watch the life leaving the woman. When her head finally slumps forward unmoving, Lewis stops.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "A few seconds pass and her body stays motionless and your gaze finds Lewis'. But that was a mistake.");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "In the short time you take your eyes off of her she lunges forward and manages to tear \
                through your pants and draw blood.");
                if (Template.dataForSave.damageScore == 50) {
                    Template.dataForSave.damageScore += 10;
                    await Template.ƒS.Character.hide(Template.characters.Lewis);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "You don't manage to stop her as she lunges at you for a second time and even Lewis \
                    can't reach you in time.");
                    await Template.ƒS.Character.show(Template.characters.Others, Template.characters.Others.pose.red, Template.ƒS.positionPercent(50, 100));
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
                    await Template.ƒS.Character.hide(Template.characters.Others);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.Lewis, "NO!");
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "Her teeth sink into your neck and as she pulls back you can feel your skin rip. \
                    Your screams soon turn into a choked gurgle as your mouth fills with blood. And your last thought before the whole world goes \
                    dark is...");
                    await Template.ƒS.Speech.tell(Template.characters.Player, "<i>I don't want to die...</i>");
                    return "badEnding";
                }
                else {
                    Template.dataForSave.damageScore += 10;
                    await Template.ƒS.Character.show(Template.characters.Others, Template.characters.Others.pose.red, Template.ƒS.positionPercent(50, 100));
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt, Template.ƒS.positionPercent(25, 100));
                    await Template.ƒS.Character.hide(Template.characters.Others);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Ugh!");
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "The zombie is pulled off of you and you only see Lewis ram a knife into her head and shortly\
                    after the body slumps to the ground. Lewis is at your side in a second, looking at your injury.");
                    await Template.ƒS.Character.hide(Template.characters.SurvivorF);
                    await Template.ƒS.Character.hide(Template.characters.Lewis);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.worried, Template.ƒS.positionPercent(55, 100));
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.Lewis, "Are you okay?!");
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Yes, it's just a scratch...");
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.Character.hide(Template.characters.Lewis);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(25, 100));
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
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "Lewis lets you be for a minute, but then he gently pulls you along.");
                    await Template.ƒS.Speech.tell(Template.characters.Lewis, "Come on, let's go.");
                    break;
                }
        }
        await Template.ƒS.Location.show(Template.locations.base);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "After some more walking you two reach the edge of the city. The destruction here is less severe \
        here. Some broken cars and corpses are strewn across the road, but in contrast to the city it seems almost peaceful. Just a bit more and \
        your new life can begin. Soon you can rest.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        return "goodEnding1";
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
        await Template.ƒS.Location.show(Template.locations.otherStreet);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "[Further in the City]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(25, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "This way.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "...");
        await Template.ƒS.Speech.tell(Template.characters.Player, "You called me 'Rush'. Why?");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.sad, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "So you really don't remember?");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.confused, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "I woke up this morning in an apartment I didn't know and the only things I could remember were my \
        name and that I was a soldier. I've been slowly remembering random little things, but most of my past is still blank.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "...");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "We served together in the military. I joined three years after you, when I was 19 and you were 23 \
        at that time. That was 9 years ago, which makes you 32 years old now.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Tell me if you want me to stop.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You just nod as you try to process the new information.");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "At first we didn't talk much, you liked to keep to yourself. You looked after everyone in your \
        own ways and we respected that. But some of that changed after I got badly hurt in battle. I got shot in the shoulder and you risked your \
        life to pull me back to safety. After that I never strayed far from your side.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Oh, that's right, you kept following me around like a lost puppy.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.happy, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Because you finally started opening up after that! And I realized how nice it was to be at your side.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Can you wait for a moment?");
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Of course");
        await Template.ƒS.Text.print("I just met someone from my past, his name is Lewis. We served together in the military and after he got shot in the \
        shoulder in a battle I saved him and after that we became close, because he kept following me around. I guess I kind of just warmed up \
        to him and it became normal to seek each other out.");
        Template.dataForSave.novelLewis = true;
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Alright, which way do you want to take? We could go through a side street or through the school. \
        Both will take us to the edge of the city. It's your call.");
        // Choice: Which way to go
        let whichWayWithLewis = {
            takeSideStreet: "Side street",
            goThroughSchool: "School",
        };
        let choicewhichWayWithLewis = await Template.ƒS.Menu.getInput(whichWayWithLewis, "choiceCSSClass");
        switch (choicewhichWayWithLewis) {
            case whichWayWithLewis.takeSideStreet:
                console.log("Take the side street.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Let's take the side street.");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Alrighty!");
                await Template.ƒS.Character.hide(Template.characters.Lewis);
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "goThroughSideStreet";
                break;
            case whichWayWithLewis.goThroughSchool:
                console.log("Go through schoolyard.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Let's go through the school.");
                await Template.ƒS.Speech.tell(Template.characters.Lewis, "Alrighty!");
                await Template.ƒS.Character.hide(Template.characters.Lewis);
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "goThroughSchoolyard";
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
        await Template.ƒS.Location.show(Template.locations.cabinInForest);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Several weeks later");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy2, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "...");
        await Template.ƒS.Text.print("Day <br><br> It's peaceful here and not many zombies find their way all the way out here. <br><br> My \
        memories are gradually returning and Lewis tries to fill in the blanks as good as he can. He has been a big help, not only in remembering \
        but giving us a new place to call home and giving me a reason to keep fighting. <br><br> I remembered that I love fishing and we got lucky \
        with a big lake not far from here. So fish is our main ingredient at the moment. Most of the time I cook, but Lewis helps from time to time \
        He pretends that he's not had enough of fish yet, but I know he wouldn't mind a change. I hope the stuff we planted will be ready to harvest \
        soon, then I could surprise him with his favourite dish. It's also getting time for another city run soon. Maybe we'll get lucky this time and \
        find a functioning car. I don't mind the walk, but it can get tiring pretty quickly. Not that Lewis minds. He always loved walking. I wonder \
        where he gets all the energy from...");
        Template.dataForSave.novelEnding2 = true;
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.happy2, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Lewis, "Hey Rush, you ready to go yet? You promised to teach me how to fish.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Yeah, I'm done. Let's go.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "GOOD ENDING 1!");
        await Template.ƒS.update(0.2);
        return "emptyScene";
    }
    Template.goodEnding1 = goodEnding1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goodEnding2() {
        console.log("Scene: Good Ending 2");
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForDamage").style.display = "none";
        Template.ƒS.Speech.setTickerDelays(30, 5000);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.beach);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Several weeks later");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral2, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "It's peaceful here and I haven't seen a single zombie in weeks.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "The first few days were quite hectic. We all had to get settled in on this island and it was hard \
        to shake the mindset that danger lurks around every corner. Sometimes the peace and quiet is even making me jittery.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I'm still missing a big part of my memory, but apparently I knew how to \
        fish. So that and cooking are the parts I'm responsible for in our community. At least it's keeping me busy.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I still think about my past life sometimes, even though they told us to forget all about it. \
        Not that it's hard to forget about a past you can't even remember. But I decided to stop writing my journal. No use remembering an old life.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "I'd rather put all my concentration on this new life and do everything I can to keep it this happy \
        and peaceful.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "GOOD ENDING 2!");
        await Template.ƒS.update(0.2);
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
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        if (Template.dataForSave.pickedUpBat == false) {
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "You pull out your knife and quietly sneak towards the closest zombie. You manage to take \
            this one and the next two down without a hitch, but as you sneak up on the last it turns around and charges towards you.");
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "With the knife you don't have enough reach to take it down before it's close enough to barrel \
            into you with such a force that you fall to the ground. And despite the hoodie you can feel your elbow scrape across the ground, drawing blood.");
            await Template.ƒS.Character.hide(Template.characters.Player);
            Template.dataForSave.damageScore += 10;
            await Template.ƒS.Character.show(Template.characters.Others, Template.characters.Others.pose.red, Template.ƒS.positionPercent(50, 100));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
            await Template.ƒS.Character.hide(Template.characters.Others);
            await Template.ƒS.update(0.2);
            await Template.ƒS.Speech.tell(Template.characters.Player, "Shit.");
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "But you manage to ram your knife into its head before it can take a bite out of you.");
        }
        else if (Template.dataForSave.pickedUpBat == true) {
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "You pull out your knife and quietly sneak towards the closest zombie. You manage to take \
            this one and the next two down without a hitch, but instead of risking to sneak towards the last one, you take out your golf club and smash \
            its head in.");
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "You wait a few more seconds to see if more zombies will appear, but when none come you nod to \
            the group and they carefully open the doors.");
        }
        await Template.ƒS.Character.show(Template.characters.SurvivorM, Template.characters.SurvivorM.pose.survivorM, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.Character.show(Template.characters.SurvivorChild, Template.characters.SurvivorChild.pose.survivorChild, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "Oh, thank you, without you we would have been- Thank you.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Are you all okay?");
        await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "Yes, thanks to you. We've been stuck in that shop for hours now. I don't think the doors \
        would have held on for much longer.");
        await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "You've already done so much for us, but I just must ask. Do you maybe have something to eat and \
        drink for us?");
        await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "There are some children in our group and they're getting weaker without anything to eat.");
        await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "Our group mostly consists of women, old people or children and the men still haven't come back \
        from their supply run. Just a little bit would be sufficient to give us enough time until they are back.");
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
                    await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "Thank you so much! I don't know how we could ever repay your kindness.");
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "You notice a little girl peak at you from behind the man's legs.");
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(30, 100));
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "You give her a small smile and she ducks out of sight for a moment, but you can hear her giggle. \
                    A moment later she steps out with her hands behind her back and walks towards you.");
                    await Template.ƒS.Character.hide(Template.characters.SurvivorChild);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.show(Template.characters.SurvivorChild, Template.characters.SurvivorChild.pose.survivorChild, Template.ƒS.positionPercent(50, 100));
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.SurvivorChild, "This is for you, Mister.");
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "She hands you a beautiful white flower.");
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Thank you, I will take good care of it.");
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "She giggles again and runs back behind the man's legs.");
                    await Template.ƒS.Character.hide(Template.characters.SurvivorChild);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.show(Template.characters.SurvivorChild, Template.characters.SurvivorChild.pose.survivorChild, Template.ƒS.positionPercent(75, 100));
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.Player, "You don't have to repay me. Just make sure you keep everyone safe.");
                    await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "I will! Thanks to you we now have a chance.");
                    await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "I hope we'll meet again someday. Goodbye and stay safe.");
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Thank you. And you stay safe as well.");
                    await Template.ƒS.Character.hide(Template.characters.SurvivorM);
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "The Man and the little girl wave until you round round the corner and can't see them anymore.");
                    Template.dataForSave.novelSurvivors = true;
                    await Template.ƒS.Text.print("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
                    VIP that had been taken hostage by a shady organization that was trying get rich through. They didn't expect the military to show up \
                    but that could have been avoided if they had did their research right. They thought they just had a higher-up worker at the bank they had \
                    tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
                    so well for the robbers. In the end they got no money and landed in jail.");
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    return "callForHelp";
                    break;
                case giveThemRations.dontGiveRationsLie:
                    console.log("Lie and don't give your rations to the group.");
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Sorry, I have nothing left");
                    await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "I see... But we'd like to thank you again for your help. I hope we'll meet again. \
                    Goodbye and stay safe.");
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(30, 100));
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Thank you. And you stay safe as well.");
                    await Template.ƒS.Character.hide(Template.characters.SurvivorM);
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "The Man and the little girl wave until you round round the corner and can't see them anymore.");
                    Template.dataForSave.novelSurvivors = true;
                    await Template.ƒS.Text.print("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
                    VIP that had been taken hostage by a shady organization that was trying get rich through. They didn't expect the military to show up \
                    but that could have been avoided if they had did their research right. They thought they just had a higher-up worker at the bank they had \
                    tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
                    so well for the robbers. In the end they got no money and landed in jail.");
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
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Sorry, I have nothing left.");
                    await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "I see... But we'd like to thank you again for your help. I hope we'll meet again. \
                    Goodbye and stay safe.");
                    await Template.ƒS.Character.hide(Template.characters.Player);
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.happy, Template.ƒS.positionPercent(30, 100));
                    await Template.ƒS.update(0.2);
                    await Template.ƒS.Speech.tell(Template.characters.Player, "Thank you. And you stay safe as well.");
                    await Template.ƒS.Character.hide(Template.characters.SurvivorM);
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "The Man and the little girl wave until you round round the corner and can't see them anymore.");
                    Template.dataForSave.novelSurvivors = true;
                    await Template.ƒS.Text.print("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
                    VIP that had been taken hostage by a shady organization that was trying get rich through. They didn't expect the military to show up \
                    but that could have been avoided if they had did their research right. They thought they just had a higher-up worker at the bank they had \
                    tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
                    so well for the robbers. In the end they got no money and landed in jail.");
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
        await Template.ƒS.Location.show(Template.locations.otherStreet);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "I'm sorry whoever you are, but I can't risk my only chance.");
        if (Template.dataForSave.pickedUpRations == false) {
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "You keep walking for some minutes, when suddenly your head feels like you're underwater \
            and your sight gets blurry for a moment. You stumble and are just barely able to catch yourself on a wall but while doing so your hand \
            manages to scratch against a stray protruding nail there.");
            Template.dataForSave.damageScore += 5;
            await Template.ƒS.Character.show(Template.characters.Others, Template.characters.Others.pose.red, Template.ƒS.positionPercent(50, 100));
            await Template.ƒS.Character.hide(Template.characters.Player);
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
            await Template.ƒS.Character.hide(Template.characters.Others);
            await Template.ƒS.update(0.2);
            await Template.ƒS.Speech.tell(Template.characters.Player, "Ah, fuck.");
            await Template.ƒS.Speech.tell(Template.characters.Player, "I didn't notice how dehydrated I was.");
            await Template.ƒS.Character.hide(Template.characters.Player);
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Speech.tell(Template.characters.Player, "I should bandage the wound. Don't want it to get infected.");
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.Narrator, "You keep walking for a while and come across a few zombies. You alternate between taking them \
            down stealthily or just sneaking by undetected.");
        }
        await Template.ƒS.Speech.tell(Template.characters.Player, "Huh?");
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.zombie, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "This zombie is different from the others, you just know it. But it takes you a moment to pinpoint \
        exactly why, as a memory hits you like a bucket of cold water.");
        await Template.ƒS.Character.hide(Template.characters.Lewis);
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Others, Template.characters.Others.pose.memory, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "The face of the zombie- the man, bloody, almost as much as in the present. You drag him behind a \
        wall with one hand, your gun forgotten in the other. He got shot in the shoulder and you're trying to stop the bleeding.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You remember his name, <i>Lewis</i>, and telling him to stay awake. You remember him clinging \
        to your arm like you were his lifeline.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "For a short moment you wonder if he survived, but you <i>know</i> that he did, because after that \
        he decided to stick by your side. The man who got your back, your best friend, your...");
        await Template.ƒS.Character.hide(Template.characters.Others);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.Character.show(Template.characters.Lewis, Template.characters.Lewis.pose.zombie, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "No...");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You should have followed your gut. But you didn't and now Lewis is gone.");
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
                        await Template.ƒS.Speech.tell(Template.characters.Player, "I am so sorry...");
                        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You take out your knife and get close to Lewis. But you're scared you won't make \
                        it to the rendezvous in time so you make a mistake and accidentally kick an empty bottle that was lying just behind the zombie.");
                        if (Template.dataForSave.damageScore == 50) {
                            await Template.ƒS.Speech.tell(Template.characters.Narrator, "Zombie-Lewis turns around and before you can react he goes for your neck.");
                            Template.dataForSave.damageScore += 5;
                            await Template.ƒS.Character.show(Template.characters.Others, Template.characters.Others.pose.red, Template.ƒS.positionPercent(50, 100));
                            await Template.ƒS.Character.hide(Template.characters.Player);
                            await Template.ƒS.update(0.2);
                            await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
                            await Template.ƒS.Character.hide(Template.characters.Others);
                            await Template.ƒS.update(0.2);
                            await Template.ƒS.Speech.tell(Template.characters.Player, "AHHH!");
                            await Template.ƒS.Character.hide(Template.characters.Player);
                            await Template.ƒS.update(0.2);
                            await Template.ƒS.Speech.tell(Template.characters.Narrator, "His teeth sink into your neck and as he pulls back you can feel your skin rip. \
                            Your screams soon turn into a choked gurgle as your mouth fills with blood. And your last thought before the whole world goes\
                            dark is...");
                            await Template.ƒS.Speech.tell(Template.characters.Player, "<i>I was so close...</i>");
                            return "badEnding";
                        }
                        else {
                            await Template.ƒS.Speech.tell(Template.characters.Narrator, "Zombie-Lewis turns around and manages to scratch open your arm, before you finally plunge the \
                            knife deep into his head. His body slumps to the ground");
                            Template.dataForSave.damageScore += 5;
                            await Template.ƒS.Character.show(Template.characters.Others, Template.characters.Others.pose.red, Template.ƒS.positionPercent(50, 100));
                            await Template.ƒS.Character.hide(Template.characters.Player);
                            await Template.ƒS.update(0.2);
                            await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt2, Template.ƒS.positionPercent(30, 100));
                            await Template.ƒS.Character.hide(Template.characters.Others);
                            await Template.ƒS.update(0.2);
                            await Template.ƒS.Speech.tell(Template.characters.Player, "Shit.");
                        }
                        await Template.ƒS.Character.hide(Template.characters.Player);
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(30, 100));
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.Player, "...");
                        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You simply stare at him for a moment, before you remember that you should to leave. \
                        With one last look at Lewis you continue on towards the rendezvous.");
                        await Template.ƒS.Speech.tell(Template.characters.Narrator, "When you're sure that you're far enough away you pull out your journal.");
                        await Template.ƒS.Speech.tell(Template.characters.Player, "He deserves to be remembered.");
                        await Template.ƒS.Text.print("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
                        We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him he stuck by my side and \
                        over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
                        the only thing from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
                        Template.dataForSave.novelNoLewis = true;
                        break;
                    case whichWeapon.withGun:
                        console.log("Kill him with the gun.");
                        await Template.ƒS.Character.hide(Template.characters.Player);
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(30, 100));
                        await Template.ƒS.update(0.2);
                        await Template.ƒS.Speech.tell(Template.characters.Player, "I am so sorry...");
                        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You take out your gun and train it towards his head with slightly shaking hands. \
                        You hesitate and suddenly his gaze turns to you and for split seconds it almost seems like he recognizes you. But then he \
                        charges towards you with a snarl and you pull the trigger just before he can come too close.");
                        await Template.ƒS.Speech.tell(Template.characters.Narrator, "His lifeless body hits the ground and you simply stare at him for a moment, before \
                        you remember that you have to leave, because every zombie in the vicinity will be lured here by the gunshot. With one last look \
                        at Lewis you run into the direction of the rendezvous");
                        await Template.ƒS.Speech.tell(Template.characters.Narrator, "When you're sure that you're far enough away you pull out your journal.");
                        await Template.ƒS.Speech.tell(Template.characters.Player, "He deserves to be remembered.");
                        await Template.ƒS.Text.print("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
                        We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him he stuck by my side and \
                        over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
                        the only thing from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
                        Template.dataForSave.novelNoLewis = true;
                        break;
                }
                await Template.ƒS.Character.hide(Template.characters.Player);
                await Template.ƒS.update(0.2);
                return "rendezvous";
                break;
            case killLewis.dontKillHim:
                console.log("Don't kill Zombie-Lewis.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "I can't kill him...");
                await Template.ƒS.Speech.tell(Template.characters.Player, "Please forgive me...");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "With one last look at Lewis you run into the direction of the rendezvous");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "When you're sure that you're far enough away you pull out your journal.");
                await Template.ƒS.Speech.tell(Template.characters.Player, "He at least deserves that I remember him.");
                await Template.ƒS.Text.print("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
                We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him he stuck by my side and \
                over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
                the only thing from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
                Template.dataForSave.novelNoLewis = true;
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
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
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
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "While you're carefully watching the zombies, you notice movement in one of the shop windows.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You notice a group of people inside the shop holding closed the doors, as the zombies try to \
        claw and shove their way inside.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "One of the people in the shop, an older man, meets your gaze and starts waving frantically.");
        await Template.ƒS.Character.show(Template.characters.SurvivorM, Template.characters.SurvivorM.pose.survivorM, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.SurvivorM, "Please, you have to help us! I beg you! There are children in here!");
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
                await Template.ƒS.Character.hide(Template.characters.SurvivorM);
                await Template.ƒS.update(0.2);
                return "helpingTheSurvivors";
                break;
            case groupNeedsHelp.ignoreGroup:
                console.log("Ignore the group");
                await Template.ƒS.Speech.tell(Template.characters.Player, "I don't have time for this.");
                await Template.ƒS.Character.hide(Template.characters.SurvivorM);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "You turn away from the group and their calls for help continue on. Just as you \
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
        Template.ƒS.Speech.setTickerDelays(40, 5000); // kontrolliert die Textgeschwindigkeit -> cpms = characters per miliisecond
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
        await Template.ƒS.Text.print("Day 45, <br><br> I don't know if I can keep doing this...");
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.Speech.tell(Template.characters.Player, "A zombie apocalypse? Ah yes, I remember now. But who...");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Wait, I know. My name is ");
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        Template.characters.Player.name = Template.dataForSave.nameProtagonist;
        await Template.ƒS.Speech.tell(Template.characters.Player, "I should write everything I know down. I don't want to forget again.");
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
        await Template.ƒS.Location.show(Template.locations.base);
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        // await ƒS.Speech.tell(characters.Narrator, "[At Military Camp Delta]");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "I made it to rendezvous in time.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You get in line behind all the other survivors that are all being checked before being led inside \
        one of the two planes still there. When you reach the front you're greeted by a woman who greets you with a tired smile.");
        await Template.ƒS.Character.show(Template.characters.Soldier, Template.characters.Soldier.pose.soldier, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Speech.tell(Template.characters.Soldier, "Are you armed?");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You nod and reluctantly place all your weapons in her outstretched hand.");
        await Template.ƒS.Speech.tell(Template.characters.Soldier, "Thank you and don't worry, you won't need them anymore.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "After that you're sent into a medical tent where you are checked for bites and your injuries \
        are treated as best as possible. You were the last survivor to arrive, so they start packing up as you put your hoodie back on.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "When you leave the tent the soldier that greeted you is waiting for you.");
        await Template.ƒS.Speech.tell(Template.characters.Soldier, "It's nice to have another soldier with us.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.surprised, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "How did you know?");
        await Template.ƒS.Speech.tell(Template.characters.Soldier, "I've been around long enough to notice the small things.");
        await Template.ƒS.Speech.tell(Template.characters.Soldier, "And your hoodie gave me the confirmation.");
        await Template.ƒS.Speech.tell(Template.characters.Player, "Oh.");
        await Template.ƒS.Speech.tell(Template.characters.Soldier, "We won't have to fight anymore, where we're going. It will all be in the past. I can't wait to \
        forget all about that and start a new life.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.sad, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.Player, "Yes, the past...");
        await Template.ƒS.Speech.tell(Template.characters.Soldier, "Come on, let's go. Before they decide to fly without us.");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Together you board the plane that will take you to your new life. A new start.");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.Character.hide(Template.characters.Soldier);
        await Template.ƒS.update(0.2);
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
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
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
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
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
        await Template.ƒS.update(Template.transition.paintblobs.duration, Template.transition.paintblobs.alpha, Template.transition.paintblobs.edge);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "You search through the rest of the apartment and find a golf club in the storage room.");
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "A golf club. Could be useful if I want to keep the zombies away from me. Is there anything else?");
        Template.dataForSave.pickedUpBat = true;
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
        // await ƒS.Text.print("How to survive the Zombie Apocalypse: <br><br><br> - Avoid getting bitten -> Infection will spread like that <br><br> - Aim for the head -> Their brains are their weakness <br><br> - Use melee weapons if possible -> Sound attracts them <br><br> - Don't give up")
        // await ƒS.Text.print("Day 23 <br><br> It's been a few weeks since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. ");   
        // await ƒS.update();
        Template.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Template.ƒS.Speech.setTickerDelays(80, 5000); // kontrolliert die Textgeschwindigkeit -> cpms = characters per miliisecond
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        Template.ƒS.Speech.hide(); //hides the speech --> verhindert, dass man die speechbox sofort mit Beginn der Szene sieht
        await Template.ƒS.Location.show(Template.locations.oldKitchen);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.hurt, Template.ƒS.positionPercent(30, 100)); // beim hovern wird Aufbau angezeigt
        await Template.ƒS.update(); // immer nach Location-Wechsel
        // signalDelay3();
        await Template.ƒS.Speech.tell(Template.characters.Player, "Huh, what... Where am I? Ouch, my head...");
        await Template.ƒS.Character.hide(Template.characters.Player);
        await Template.ƒS.update(0.2);
        await Template.ƒS.Location.show(Template.locations.kitchen);
        // await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge); //-> yes
        // await ƒS.update(transition.lines.duration, transition.lines.alpha, transition.lines.edge); //-> maybe
        // await ƒS.update(transition.hair.duration, transition.hair.alpha, transition.hair.edge); //-> dont know
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.Player, Template.characters.Player.pose.neutral, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.Player, "There is a journal here.");
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