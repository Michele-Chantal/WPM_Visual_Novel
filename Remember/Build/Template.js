"use strict";
var Remember;
(function (Remember) {
    async function journals() {
        let pages = ["<strong> How to survive the Zombie Apocalypse: </strong><br><br><br> - Avoid getting bitten => Infection will spread like that <br><br> \
        - Aim for the head => Their brains are their weakness <br><br> - Use melee weapons if possible => Sound attracts them <br><br> - Don't give up", "Day 13, <br><br>\
        It's been a few days since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. Is this going to be the end of humanity?",
            "Day 26, <br><br> I lost all contact to the military headquarters. Were they overrun or is something interferring with the radios? I really hope it's the latter... \
        I don't know how good our chances are if we lost the military.", "Day 45, <br><br> I don't know if I can keep doing this..."];
        // Alle Journalseiten in einer if-Abfrage abfragen mit boolschen Werten in dataForSave; z.B. iSayYes = false und nachdem man 'Yes' gewählt hat wird iSayYes = true und die richtige Novelpage wird angezeigt
        let current = 0;
        let numberAquired = 0;
        Remember.ƒS.Text.addClass("changePage");
        if (Remember.dataForSave.novelPage1 == true) {
            pages.push("I suddenly woke up in the apocalypse and I have trouble remembering how it all started or who I really am. I faintly remember \
            being in the military, but not for how long or if I left it before everything went to hell. <br><br><br><br> Name: " + Remember.dataForSave.nameProtagonist +
                "<br><br> Age: ?? <br><br> Occupation: Soldier?/Ex-Soldier? ");
            numberAquired += 4;
        }
        if (Remember.dataForSave.novelRadio == true) {
            pages.push("<strong>Extraction </strong><br><br><br> The Military is organizing one last effort to safe some survivors. I wonder where they are bringing us \
            and if we're really going to be safe there. Here is all the important information: <br><br> - Military base 'Delta' <br><br> - city northern edge <br><br> - last extraction in 8 hours");
            numberAquired += 1;
        }
        if (Remember.dataForSave.novelFavFood == true) {
            pages.push("I remembered some things about my past. My favourite food is (insert food here). My mother always cooked it for me \
            when I did well in school or when she wanted to cheer me up. The way she made it was special and I remember it tasting like the most \
            delicious food I had ever eaten. <br> I tried recreating it for years, but never did quite manage to make it taste exactly like hers. She told \
            me as soon as I turned 18 she would teach me the family recipe, but she passed away when I was 16. A car accident. A drunk driver crashed \
            into her car. <br><br> She taught me how to cook and thanks to her cooking became my hobby. I miss her. <br><br> But at least she \
            doesn't have to see what happened to the world. <br><br><br> Rest well, Mom.");
            numberAquired += 1;
        }
        if (Remember.dataForSave.novelPet == true) {
            pages.push("I remembered some things about my past. I had a pet when I was younger, a cat. Her name was Loona and she \
            was this feisty little ball of black and white fur. I still have countless little scars all over my hands and arms, 'cause she loved \
            playing. She wasn't really a cuddler most of the time, but I remember waking up to her cuddled up on the foot of my bed sometimes. <br><br> \
            She was my first and only pet and I'll continue to remember her fondly.");
            numberAquired += 1;
        }
        if (Remember.dataForSave.novelSurvivors == true) {
            pages.push("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
            VIP that had been taken hostage by a shady organization that was trying get rich through. They didn't expect the military to show up \
            but that could have been avoided if they had done their research right. They thought they just had a higher-up worker at the bank they had \
            tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
            so well for the robbers. In the end they got no money and landed in jail.");
            numberAquired += 1;
        }
        if (Remember.dataForSave.novelLewis == true) {
            pages.push("I just met someone from my past, his name is Lewis. We served together in the military and after he got shot in the \
            shoulder in a battle I saved him and after that we became close, because he kept following me around. I guess I kind of just warmed up \
            to him and it became normal to seek each other out. <br><br> According to him I joined the military when I was 20 years old and spent \
            at least three years there. And I am 32 years old.");
            numberAquired += 1;
        }
        if (Remember.dataForSave.novelNoLewis == true) {
            pages.push("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
            We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him, he stuck by my side and \
            over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
            the only thing left from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
            numberAquired += 1;
        }
        if (Remember.dataForSave.novelEnding2 == true) {
            pages.push("Day 47, <br><br> We finally reached the cabin Lewis was talking about. It's a days walk from the city, but he was right \
            it's in the middle of nowhere and also hidden from all main roads. At first we followed the main road leavig out of the city and \
            came across quite a few zombies. But halfway through we started heading through the forest and fields and found just a few stray zombies \
            roaming around.");
            pages.push("The cabin itself is quite cozy, but it's obvious that no one's been here in months. It's too big for just us \
            two, but maybe someone will join us in time. And he was right, there's enough food here to last us a few weeks. But Lewis says he's \
            already has a plan. I trust him. It'll be some time, until this place will feel like home, but tidying everything up will be the first step.");
            pages.push("Day 54, <br><br> We're still busy with the place and I haven't found much time to write. But I finally know what Lewis' plan \
            was: He wants to plant some vegetables and fruits. He got the seeds from the garden center in the center, that's why he was there when I \
            found him. I have no idea about gardening, but he seems so know what he is doing.");
            pages.push("Day 67, <br><br> It's peaceful here and not many zombies find their way all the way out here. <br> My \
            memories are gradually returning and Lewis tries to fill in the blanks as good as he can. He has been a big help, not only in remembering \
            but giving us a new place to call home and giving me a reason to keep fighting. <br> I remembered that I love fishing and we got lucky \
            with a big lake not far from here. So fish is our main ingredient at the moment. Most of the time I cook, but Lewis helps from time to time. \
            He pretends that he's not had enough of fish yet, but I know he wouldn't mind a change.");
            pages.push("I hope the stuff we planted will be ready to harvest soon, then I could surprise him with his favourite dish. <br> It's \
            also getting time for another city run soon. Maybe we'll get lucky this time and find a functioning car. I don't mind the walk, but it \
            can get tiring pretty quickly. Not that Lewis minds. He always loved walking. I wonder where he gets all the energy from...");
            numberAquired += 5;
        }
        if (numberAquired > 0) {
            let changePage = { back: "previous", next: "next", done: "close" };
            let choice;
            do {
                Remember.ƒS.Text.print(pages[current]);
                choice = await Remember.ƒS.Menu.getInput(changePage, "changePage");
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
                Remember.ƒS.Text.print(pages[current]);
                choice = await Remember.ƒS.Menu.getInput(changePage, "changePage");
                switch (choice) {
                    case changePage.back:
                        current = Math.max(0, current - 1);
                        break;
                    case changePage.next:
                        current = Math.min(3, current + 1);
                        break;
                }
            } while (choice != changePage.done);
        }
        Remember.ƒS.Text.close();
    }
    Remember.journals = journals;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    Remember.ƒ = FudgeCore;
    Remember.ƒS = FudgeStory;
    console.log("FudgeStory Remember starting");
    // Data that will be saved
    Remember.dataForSave = {
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
    Remember.transition = {
        paintblobs: {
            duration: 1.1,
            alpha: "Images/Transitions/paintblobs.jpg",
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
    Remember.sound = {
        // Music/Themes
        alone: "Audio/Music/alone.mp3",
        assault: "Audio/Music/assault.mp3",
        dawn: "Audio/Music/dawn.mp3",
        lost: "Audio/Music/lost.mp3",
        stars: "Audio/Music/stars.mp3",
        survivor: "Audio/Music/survivor.mp3",
        // SFX
        gunshot: "Audio/SFX/gunshot.mp3",
        hit: "Audio/SFX/hit.mp3",
        radio: "Audio/SFX/radio.mp3",
        hitWithClub: "Audio/SFX/hit_with_club.mp3",
        hitWithKnife: "Audio/SFX/hit_with_knife.mp3",
        zombie: "Audio/SFX/zombie.mp3",
        zombie2: "Audio/SFX/zombie2.mp3",
        grunting: "Audio/SFX/grunting.wav",
        running: "Audio/SFX/running.mp3",
        bodyFall: "Audio/SFX/body_fall.mp3",
        death: "Audio/SFX/death.wav"
    };
    // Locations bzw. Backgrounds der Szenen
    Remember.locations = {
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
    Remember.characters = {
        Narrator: {
            name: ""
        },
        Player: {
            name: Remember.dataForSave.nameProtagonist,
            origin: Remember.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/player_neutral.png",
                neutral2: "Images/Characters/player_neutral2.png",
                happy: "Images/Characters/player_happy.png",
                happy2: "Images/Characters/player_happy2.png",
                sad: "Images/Characters/player_sad.png",
                // sad2: "Images/Characters/player_sad2.png",
                // angry: "Images/Characters/player_angry.png",
                surprised: "Images/Characters/player_surprised.png",
                confused: "Images/Characters/player_confused.png",
                hurt: "Images/Characters/player_hurt.png",
                hurt2: "Images/Characters/player_hurt2.png",
                thinking: "Images/Characters/player_thinking.png"
            }
        },
        Lewis: {
            name: "Lewis",
            origin: Remember.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Characters/lewis_neutral.png",
                // neutral2: "Images/Characters/lewis_neutral2.png",
                happy: "Images/Characters/lewis_happy.png",
                happy2: "Images/Characters/lewis_happy2.png",
                sad: "Images/Characters/lewis_sad.png",
                // sad2: "Images/Characters/lewis_sad2.png",
                // angry: "Images/Characters/lewis_angry.png",
                surprised: "Images/Characters/lewis_surprised.png",
                worried: "Images/Characters/lewis_worried.png",
                zombie: "Images/Characters/lewis_zombie.png"
            }
        },
        Radio: {
            name: "Radio",
            origin: Remember.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                radio: "Images/Items/radio.png",
            }
        },
        SurvivorM: {
            name: "Man",
            origin: Remember.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                survivorM: "Images/Characters/survivorM.png",
            }
        },
        SurvivorF: {
            name: "Woman",
            origin: Remember.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                survivorF: "Images/Characters/survivorF.png",
            }
        },
        SurvivorChild: {
            name: "Child",
            origin: Remember.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                survivorChild: "Images/Characters/survivorChild.png"
            }
        },
        Zombie: {
            name: "Zombie",
            origin: Remember.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                zombieM: "Images/Characters/zombieM.png",
                zombieF: "Images/Characters/zombieF.png",
                zombieChild: "Images/Characters/zombieChild.png"
            }
        },
        Soldier: {
            name: "Soldier",
            origin: Remember.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                soldier: "Images/Characters/soldier.png"
            }
        },
        Others: {
            name: "Others",
            origin: Remember.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                catPic: "Images/Items/cat_pic.png",
                memory: "Images/Items/memory.png",
                red: "Images/Items/red.png",
            }
        }
    };
    function moveItemInFrame() {
        return {
            start: { translation: Remember.ƒS.positionPercent(110, 65), scaling: new Remember.ƒS.Position(1, 1) },
            end: { translation: Remember.ƒS.positionPercent(70, 65), scaling: new Remember.ƒS.Position(1, 1) },
            duration: 0.5,
            playmode: Remember.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Remember.moveItemInFrame = moveItemInFrame;
    function playerGetsHit() {
        return {
            start: { translation: Remember.ƒS.positionPercent(30, 100), scaling: new Remember.ƒS.Position(1, 1) },
            end: { translation: Remember.ƒS.positionPercent(25, 100), scaling: new Remember.ƒS.Position(1, 1) },
            duration: 0.5,
            playmode: Remember.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Remember.playerGetsHit = playerGetsHit;
    function enemyGetsHit() {
        return {
            start: { translation: Remember.ƒS.positionPercent(70, 100), scaling: new Remember.ƒS.Position(1, 1) },
            end: { translation: Remember.ƒS.positionPercent(75, 100), scaling: new Remember.ƒS.Position(1, 1) },
            duration: 0.5,
            playmode: Remember.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Remember.enemyGetsHit = enemyGetsHit;
    // Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        journal: "Journal",
        credits: "Credits",
        close: "X",
    };
    let gameMenu;
    // true entspricht Menü ist offen und false zu
    let menuIsOpen = false;
    // Funktionalitäten der Buttons
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Remember.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Remember.ƒS.Progress.load();
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                console.log("credits");
                Remember.credits();
                break;
            case inGameMenuButtons.journal:
                Remember.journals();
                break;
        }
    }
    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Remember.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Remember.ƒS.Progress.save();
                break;
            case Remember.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Remember.ƒS.Progress.load();
                break;
            case Remember.ƒ.KEYBOARD_CODE.M:
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
        gameMenu = Remember.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("X"); // soll von Anfang an geschlossen sein
        Remember.ƒS.Speech.hide();
        // Scene Hierarchy
        let scenes = [
            { id: "Prologue", scene: Remember.prologue, name: "Prologue" },
            { id: "FirstScene", scene: Remember.firstScene, name: "First scene" },
            { id: "residentialArea", scene: Remember.routeResidentialArea, name: "Residential area" },
            { id: "commercialArea", scene: Remember.routeCommercialArea, name: "Commercial area" },
            { id: "meetingSurvivors", scene: Remember.meetingSurvivors, name: "Meeting Survivors" },
            { id: "helpingTheSurvivors", scene: Remember.helpingTheSurvivors, name: "Helping the Survivors" },
            { id: "callForHelp", scene: Remember.callForHelp, name: "Call for help" },
            { id: "followCallForHelp", scene: Remember.followCallForHelp, name: "Follow the call for help" },
            { id: "ignoreCallForHelp", scene: Remember.ignoreCallForHelp, name: "Ignore the call for help" },
            { id: "rendezvous", scene: Remember.rendezvous, name: "Rendezvous" },
            { id: "goWithLewis", scene: Remember.goWithLewis, name: "Go with Lewis" },
            { id: "goThroughSideStreet", scene: Remember.goThroughSideStreet, name: "Go through side street" },
            { id: "goThroughSchoolyard", scene: Remember.goThroughSchoolyard, name: "Go through schoolyard" },
            { id: "goodEnding1", scene: Remember.goodEnding1, name: "Good Ending 1" },
            { id: "goodEnding2", scene: Remember.goodEnding2, name: "Good Ending 2" },
            { id: "badEnding", scene: Remember.badEnding, name: "Bad Ending " },
            { id: "emptyScene", scene: Remember.empty, name: "END" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Remember.dataForSave = Remember.ƒS.Progress.setData(Remember.dataForSave, uiElement);
        // start the sequence
        Remember.ƒS.Progress.go(scenes);
    }
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function Scene() {
        console.log("FudgeStory Remember Scene starting");
    }
    Remember.Scene = Scene;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function credits() {
        await Remember.ƒS.Text.print("<strong>Credits</strong> <br><br> <i>Characters:</i> <br> All characters made by Michele-Chantal Oeun (me) in VRoid <br><br> <i>Character Assets:</i> <br>\
        Hoodie by mio (https://mo-shop.booth.pm/) <br> Wounds/Blood by Akira's Creations (https://arttai.booth.pm/) <br> Bloody Eye by TwoEzStore \
        (https://twoezdragon.booth.pm/) <br><br> <i>Items:</i> <br> All items made by Michele-Chantal Oeun (me) in Blender <br><br> <i>Backgrounds:</i> <br> Background Pack by Noraneko Games <br> Beach Background by Selidor (https://robingoodwin.co.uk \
        & https://twitter.com/Selidor) <br> Cabin in woods by tatsuya (https://www.pixiv.net/en/users/2206379) <br> Paper by Owltears (https://owltears.itch.io/oldpapers) \
        <br><br> <i>Music:</i> <br> Music by MakotoHiramatsu (https://makotohiramatsu.itch.io/) <br><br> \
        <i>SFX:</i> <br> Gunshot (https://pixabay.com/de/sound-effects/single-pistol-gunshot-42-40781/) <br> Radio (https://pixabay.com/de/sound-effects/radio-static-6382/) \
        <br> Running (https://pixabay.com/de/sound-effects/running-6358/) <br> Super Dialogue Audio Pack by Dillon Becker. This work is licensed under CC BY 4.0 \
        (https://dillonbecker.itch.io/sdap) <br> Zombie Horror Pack - Free Version by Catastic (https://catastic.itch.io/zombie-sound-pack-free-version)");
    }
    Remember.credits = credits;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function badEnding() {
        console.log("Scene: Bad Ending");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForDamage").style.display = "none";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        await Remember.ƒS.Location.show(Remember.locations.dark);
        await Remember.ƒS.update(Remember.transition.vignette.duration, Remember.transition.vignette.alpha, Remember.transition.vignette.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "GAME OVER!");
        await Remember.ƒS.update(0.2);
        return "emptyScene";
    }
    Remember.badEnding = badEnding;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function callForHelp() {
        console.log("Scene: Call for help");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0.6, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.otherStreet);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.radio, 0.2, 0.1, true);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Radio, "'<i>Hello, can anyone hear me?</i>'");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.thinking, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Hmm?");
        await Remember.ƒS.Character.animate(Remember.characters.Radio, Remember.characters.Radio.pose.radio, Remember.moveItemInFrame());
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Radio, "'<i>If anyone can hear this, please, I need some help.</i>'");
        await Remember.ƒS.Speech.tell(Remember.characters.Radio, "'<i>I'm at the garten center on Maple Avenue, the west back entrance. Zombies are trying to break into the room \
        I'm holed up in but I can't leave, because it's not looking better outside.</i>'");
        await Remember.ƒS.Speech.tell(Remember.characters.Radio, "'<i>Whoever can hear me, please, hurry. I don't know how much longer I can hold out.</i>'");
        await Remember.ƒS.Speech.tell(Remember.characters.Radio, "'<i>I repeat. I'm at the garten center on Maple Avenue, the west back entrance.</i>'");
        await Remember.ƒS.Speech.tell(Remember.characters.Radio, "'<i>There's a group of zombies just by the back entrance, so if someone is coming, please be careful. Over.</i>'");
        await Remember.ƒS.Character.hide(Remember.characters.Radio);
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.radio, 0, 0.1, false);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Should I go help? But it's in the opposite direction I need to go. If I'll follow the call I won't make it to the rendezvous \
        in time.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "In my mind I <i>know</i> should ignore the call, but why do I feel my body hesitating?");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Shit, I gotta decide.");
        // Choice: Follow the call for help or ignore it
        let radioCallForHelp = {
            followRadioCall: "Follow the call for help.",
            ignoreRadioCall: "Ignore call for help.",
        };
        let choiceradioCallForHelp = await Remember.ƒS.Menu.getInput(radioCallForHelp, "choiceCSSClass");
        switch (choiceradioCallForHelp) {
            case radioCallForHelp.followRadioCall:
                console.log("Follow the call for help.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Something is telling me to follow the call.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
                return "followCallForHelp";
                break;
            case radioCallForHelp.ignoreRadioCall:
                console.log("Ignore the call for help.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "I have to keep going. If I try to help now, I won't make it in time.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
                return "ignoreCallForHelp";
                break;
        }
    }
    Remember.callForHelp = callForHelp;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function empty() {
        console.log("END");
    }
    Remember.empty = empty;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function firstScene() {
        console.log("First Scene");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0.6, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.apartmentOutside);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "A sound from your right draws your attention just as you leave the apartment.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Hello?");
        await Remember.ƒS.Character.show(Remember.characters.Zombie, Remember.characters.Zombie.pose.zombieM, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.zombie, 0.2, 0.1, false);
        await Remember.ƒS.Speech.tell(Remember.characters.Zombie, "Uaaaaaghhrrrr");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.surprised, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "A Zombie! Crap, it's in my way. What should I do?");
        // Kill zombie or don't
        let killZombie = {
            shootIt: "Shoot it",
            knifeIt: "Kill it with a knife",
        };
        let choiceKillZombie = await Remember.ƒS.Menu.getInput(killZombie, "choiceCSSClass");
        // switch case for when specific answer is picked
        switch (choiceKillZombie) {
            case killZombie.shootIt:
                console.log("Shoot the Zombie");
                Remember.ƒS.Sound.fade(Remember.sound.gunshot, 0.1, 0.1, false);
                Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You shoot the zombie but you hear even more shuffling and groaning from all around you. A moment later more zombies appear in front of you.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Suddenly you're grabbed from a zombie behind you while another scratches your arm.");
                Remember.ƒS.Sound.fade(Remember.sound.grunting, 0.2, 0.1, false);
                Remember.ƒS.Sound.fade(Remember.sound.hit, 0.2, 0.1, false);
                Remember.dataForSave.damageScore += 15;
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.animate(Remember.characters.Player, Remember.characters.Player.pose.hurt2, Remember.playerGetsHit());
                await Remember.ƒS.Character.show(Remember.characters.Others, Remember.characters.Others.pose.red, Remember.ƒS.positionPercent(50, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.hide(Remember.characters.Others);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Ugh, dammit! I have to run.");
                await Remember.ƒS.Character.hide(Remember.characters.Zombie);
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.Location.show(Remember.locations.outdoorStairs);
                Remember.ƒS.Sound.fade(Remember.sound.running, 0.2, 0.1, false);
                await Remember.ƒS.update(Remember.transition.lines.duration, Remember.transition.lines.alpha, Remember.transition.lines.edge);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "");
                break;
            case killZombie.knifeIt:
                console.log("Knife the Zombie");
                Remember.ƒS.Sound.fade(Remember.sound.hitWithKnife, 0.2, 0.1, false);
                Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "The Zombie goes down with a quiet 'thud' and you hold your breath to hear if others are nearby.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "But the hallway stays quiet.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Good. Now, let's go.");
                await Remember.ƒS.Character.hide(Remember.characters.Zombie);
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.Location.show(Remember.locations.outdoorStairs);
                Remember.ƒS.Sound.fade(Remember.sound.running, 0.2, 0.1, false);
                await Remember.ƒS.update(Remember.transition.lines.duration, Remember.transition.lines.alpha, Remember.transition.lines.edge);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "");
                break;
        }
        await Remember.ƒS.Location.show(Remember.locations.railroadCrossing);
        Remember.ƒS.Sound.fade(Remember.sound.running, 0.2, 0.1, false);
        await Remember.ƒS.update(Remember.transition.lines.duration, Remember.transition.lines.alpha, Remember.transition.lines.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Out of sheer luck you find a railroad crossing with a map next to it.");
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "A map, perfect!");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.thinking, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Now, let's see...");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I'm here. And the military base should be... here.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I'm nearly on the other side of the city. But a little less than 8 hours should be more than enough.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I could go through the residential or the commercial area. Hmmm...");
        // Choice: Which area should player go to
        let whichArea = {
            residentialArea: "Go through the residential area.",
            commercialArea: "Go through the commercial area.",
        };
        let choiceWhichArea = await Remember.ƒS.Menu.getInput(whichArea, "choiceCSSClass");
        switch (choiceWhichArea) {
            case whichArea.residentialArea:
                console.log("Go through residential area.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "I'll go through the residential area. Maybe I'll find something useful there.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
                return "residentialArea";
                break;
            case whichArea.commercialArea:
                console.log("Go through commercial area.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "I'll go through the commercial area. Maybe there'll be something useful left.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
                return "commercialArea";
                break;
        }
    }
    Remember.firstScene = firstScene;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function followCallForHelp() {
        console.log("Scene: Follow the call for help");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.assault, 0.6, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.otherStreet);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You reach the garden center and round the corner to the west entrance and immediately notice four zombies clawing at the backdoor.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Just four zombies? I should be able to deal with them. Just need to find something elevated to \
        stay out of their reach, just to be safe.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I could climb on that hedge, should be high enough.");
        if (Remember.dataForSave.pickedUpBat == true) {
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You climb on the hedge and make sure that your footing is steady before you pull out your golf club.");
        }
        else if (Remember.dataForSave.pickedUpBat == false) {
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You climb on the hedge and make sure that your footing is steady before you pull out your knife.");
        }
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Hey, zombies! I'm over here.");
        await Remember.ƒS.Character.show(Remember.characters.Zombie, Remember.characters.Zombie.pose.zombieM, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Zombie, "Huuuurgghhhhh.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "All the zombies turn to your voice and begin to stumble their way towards you. Out of the \
        corner of your eyes you see the door open, but you keep your focus on the zombies.");
        if (Remember.dataForSave.pickedUpBat == true) {
            Remember.ƒS.Sound.fade(Remember.sound.zombie, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.hitWithClub, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "As soon as the first zombie is in reach, you swing your club and smash its head in. With a \
            satisfying 'thump' its body slumps to the ground. The next one uses that moment to grab for your leg, but you kick it away and deal \
            a few deals to its head.");
        }
        else if (Remember.dataForSave.pickedUpBat == false) {
            Remember.ƒS.Sound.fade(Remember.sound.zombie, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.hitWithKnife, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "As soon as the first zombie is in reach, you stab your knife into its head. While you try \
            to pull your knife out of the first zombie's brain, the next one uses that moment to grab for your leg. But you manage to free your knife \
            in time to ram it through its head.");
        }
        await Remember.ƒS.Character.hide(Remember.characters.Zombie);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You turn to the last two zombies only to find them already dead on the ground with a blond haired \
        man standing over them, who is already staring at you.");
        Remember.ƒS.Sound.fade(Remember.sound.assault, 0, 0.1, false);
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0.5, 0.1, true);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.surprised, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell("???", "Rush? It's you.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You climb down from the hedge and walk closer to the man.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Who?");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.worried, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell("???", "But, I thought-");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.happy, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Sorry, forget that. I'm Lewis, thanks for your help. Thought I'd have to risk fighting my way out of this. \
        Was real lucky that you decided to help me.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I'm " + Remember.dataForSave.nameProtagonist + ". And yea, you're welcome. Couldn't just ignore your call. \
        Because, you know, you needed help and...");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You know you're rambling, but as soon as you saw him you felt like you had seen him somewhere before. \
        And you couldn't just tell him that a gut feeling made you come here.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "I hope I didn't inconvenience you or seperate you from your group.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "No, I'm... traveling alone.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Great!");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "I mean, I was planning to leave the city, I know of a cabin some way from the city. \
        It belonged to my uncle and he mostly used it to get away from all the stress and work, so it should be stocked. If you don't have any \
        other plans you could come with me.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "But you don't even know me.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "You saved me. I know that you're a good person.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "So what do you say? Don't worry, it's not a ploy to lure you into a dark alley and steal your cool \
        hoodie or something like that. Sorry, bad joke.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Okay, I'll go with you.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Alright! Then what are we waiting for? Let's go.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
        await Remember.ƒS.update(0.2);
        return "goWithLewis";
    }
    Remember.followCallForHelp = followCallForHelp;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function goThroughSchoolyard() {
        console.log("Scene: Go through schoolyard");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0.5, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.schoolyard);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.neutral, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "We just have to go through here and another street then we're out of the city.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "How do you know the cabin will be safe?");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "It's not marked on any maps and quite a ways from the nearest road. Unless someone stumbled onto \
        it out of sheer luck or on accident, it'll be our safest bet.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "And even if zombies are there it won't be that many. There's not much there for them, so they'll \
        mostly ignore it.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I see.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "You know, you never told my why you called me 'Rush'.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.happy, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "It's actually kinda silly, really. One day off-base we were watching a movie about superheroes. The \
        main characters were this duo, they were complete opposites but they worked together like they were two halves of a whole. And out of joke \
        we started calling each other as their hero names and it kinda just stuck.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "One of them was this quiet reserved guy, that prefered working \
        alone, but cared about his team. Like you. That was Rush. And the other one was this outgoing, happy-go-lucky guy, that got along with \
        everyone. Kinda like me. That was-");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Adamas?");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Yes, Exactly! Do you remember?");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Bits and pieces, but I do remember watching the movie with you. You kept talking about it for weeks \
        after that. It was kind of endearing.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Don't act like you didn't enjoy it too. You loved it! And spending time with me.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Yeah.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.surprised, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Huh?");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I never really said it back then and that was a mistake. So I'm sorry and thank you.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.happy, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "I'm so glad to have met you. Back then and now.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Location.show(Remember.locations.school);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.happy, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
        Remember.ƒS.Sound.fade(Remember.sound.alone, 0.5, 0.1, true);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "When you reach the school you hear something that sounds like crying.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Shh, do you hear that?");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.surprised, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "That sounds like crying, but something feels off. It's coming from the cafeteria.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Location.show(Remember.locations.cafeteria);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.surprised, Remember.ƒS.positionPercent(25, 100));
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.surprised, Remember.ƒS.positionPercent(45, 100));
        await Remember.ƒS.Character.show(Remember.characters.Zombie, Remember.characters.Zombie.pose.zombieChild, Remember.ƒS.positionPercent(75, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "A child? But... it's a zombie...");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "What should we do?");
        // Choice: Kill the zombie child or don't
        let killZombieChild = {
            killZombieKid: "Kill it",
            dontKillZombieKid: "Don't kill it",
        };
        let choiceKillZombieChild = await Remember.ƒS.Menu.getInput(killZombieChild, "choiceCSSClass");
        switch (choiceKillZombieChild) {
            case killZombieChild.killZombieKid:
                console.log("Kill the zombie child.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You pull out your knife as you sneak to the zombie-child. It has its face turned away from \
                you so it doesn't see you coming and you manage to step right up to it.");
                Remember.ƒS.Sound.fade(Remember.sound.hitWithKnife, 0.2, 0.1, false);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "With a firm grip you hold onto its head so it can't turn around and as it struggles you \
                ram your knife into its head.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "The struggling ceases and you carefully carry the lifeless body to place it against a wall and close \
                its eyes. Then you pack away your knife.");
                await Remember.ƒS.Character.hide(Remember.characters.Zombie);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "You can rest now...");
                await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.worried, Remember.ƒS.positionPercent(60, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Come on, let's go.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.update(0.2);
                break;
            case killZombieChild.dontKillZombieKid:
                console.log("Leave the zombie child be.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(25, 100));
                await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.sad, Remember.ƒS.positionPercent(45, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "The poor child...");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You look at the child for a bit longer as it stumbles through the cafeteria with no \
                goal. You couldn't kill it, even if it wasn't human anymore.");
                await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.sad, Remember.ƒS.positionPercent(35, 100));
                await Remember.ƒS.Character.hide(Remember.characters.Zombie);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Come on, let's go.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.update(0.2);
                break;
        }
        await Remember.ƒS.Location.show(Remember.locations.base);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.neutral, Remember.ƒS.positionPercent(60, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "After some more walking you two reach the edge of the city. The destruction here is less severe. \
        Some broken cars and corpses are strewn across the road, but in contrast to the city it seems almost peaceful. Just a bit more and \
        your new life can begin. Soon you can rest.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.alone, 0, 0.1, false);
        return "goodEnding1";
    }
    Remember.goThroughSchoolyard = goThroughSchoolyard;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function goThroughSideStreet() {
        console.log("Scene: Go through side street.");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0.5, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.sideStreet);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.neutral, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "We just have to go through here and another street then we're out of the city.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "How do you know the cabin will be safe?");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "It's not marked on any maps and quite a ways from the nearest road. Unless someone stumbled onto \
        it out of sheer luck or on accident, it'll be our safest bet.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "And even if zombies are there it won't be that many. There's not much there for them, so they'll \
        mostly ignore it.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I see.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "You know, you never told my why you called me 'Rush'.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.happy, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "It's actually kinda silly, really. One day off-base we were watching a movie about superheroes. The \
        main characters were this duo, they were complete opposites but they worked together like they were two halves of a whole. And out of joke \
        we started calling each other as their hero names and it kinda just stuck.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "One of them was this quiet reserved guy, that prefered working \
        alone, but cared about his team. Like you. That was Rush. And the other one was this outgoing, happy-go-lucky guy, that got along with \
        everyone. Kinda like me. That was-");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Adamas?");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Yes, Exactly! Do you remember?");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Bits and pieces, but I do remember watching the movie with you. You kept talking about it for weeks \
        after that. It was kind of endearing.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Don't act like you didn't enjoy it too. You loved it! And spending time with me.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Yeah.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.surprised, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Huh?");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I never really said it back then and that was a mistake. So I'm sorry and thank you.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.happy, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "I'm so glad to have met you. Back then and now.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.surprised, Remember.ƒS.positionPercent(25, 100));
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.surprised, Remember.ƒS.positionPercent(50, 100));
        await Remember.ƒS.Character.show(Remember.characters.SurvivorF, Remember.characters.SurvivorF.pose.survivorF, Remember.ƒS.positionPercent(75, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "About halfway through the street you see a woman running towards you. Her clothes are torn\
        and bloody, and she is cradling her bleeding arm against her chest, but she appears to be human.");
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
        Remember.ƒS.Sound.fade(Remember.sound.alone, 0.5, 0.1, true);
        await Remember.ƒS.Speech.tell(Remember.characters.SurvivorF, "Please, help!");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Lewis catches her as she reaches you and sways on her feet.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "What's wrong?");
        await Remember.ƒS.Speech.tell(Remember.characters.SurvivorF, "I think i got bitten by one of those-those-");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Her wide fearful eyes settle on you.");
        await Remember.ƒS.Speech.tell(Remember.characters.SurvivorF, "Please, I don't want to hurt anyone! I don't want to be one of them.. Please, k-kill me, before \
        I turn! I beg you!");
        // Choice: Kill the infected woman or don't
        let killInfectedWoman = {
            killHer: "Kill her.",
            dontKillHer: "Don't kill her.",
        };
        let choiceKillInfectedWoman = await Remember.ƒS.Menu.getInput(killInfectedWoman, "choiceCSSClass");
        switch (choiceKillInfectedWoman) {
            case killInfectedWoman.killHer:
                console.log("Kill the infected woman.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Okay, you can rest now.");
                await Remember.ƒS.Speech.tell(Remember.characters.SurvivorF, "Thank you..");
                await Remember.ƒS.Character.hide(Remember.characters.SurvivorF);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.SurvivorF, Remember.characters.SurvivorF.pose.survivorF, Remember.ƒS.positionPercent(50, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You take the shaking woman into your arms and pull out your knife out of her sight. \
                Your body almost recognizes the motion as natural as you place it at the back of her neck at the base of her skull and with a sharp \
                plunge you sever her spinal cord.");
                Remember.ƒS.Sound.fade(Remember.sound.hitWithKnife, 0.1, 0.1, false);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Her body slumps against you and the shaking ceases. Gently you place her against the \
                nearest wall and fully close her eyes. Then you pack away your knife.");
                await Remember.ƒS.Character.hide(Remember.characters.SurvivorF);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.worried, Remember.ƒS.positionPercent(70, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
                await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "...");
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.worried, Remember.ƒS.positionPercent(60, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "You did the right thing. You let her die as a human.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Come on, let's go.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.update(0.2);
                break;
            case killInfectedWoman.dontKillHer:
                console.log("Don't kill the infected woman.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "I can't... I'm sorry.");
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.sad, Remember.ƒS.positionPercent(50, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "The woman slumps further into Lewis' arms, defeated.");
                await Remember.ƒS.Speech.tell(Remember.characters.SurvivorF, "At least don't let me die or turn alone, please.");
                await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Of course we'll stay.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Lewis guides her towards the wall.");
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.Character.hide(Remember.characters.SurvivorF);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Character.show(Remember.characters.SurvivorF, Remember.characters.SurvivorF.pose.survivorF, Remember.ƒS.positionPercent(55, 100));
                await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.worried, Remember.ƒS.positionPercent(75, 100));
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Here, sit down. That'll be more comfortable.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Time passes as Lewis starts talking about a children's story he used to love as a kid, \
                but you're not really listening as you watch the life leaving the woman. When her head finally slumps forward unmoving, Lewis stops.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "A few seconds pass and her body stays motionless and your gaze finds Lewis'. But that was a mistake.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "In the short time you take your eyes off of her she lunges forward and manages to tear \
                through your pants and draw blood.");
                if (Remember.dataForSave.damageScore == 40) {
                    Remember.ƒS.Sound.fade(Remember.sound.grunting, 0.2, 0.1, false);
                    Remember.ƒS.Sound.fade(Remember.sound.hit, 0.2, 0.1, false);
                    Remember.dataForSave.damageScore += 10;
                    await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You don't manage to stop her as she lunges at you for a second time and even Lewis \
                    can't reach you in time.");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.animate(Remember.characters.Player, Remember.characters.Player.pose.hurt2, Remember.playerGetsHit());
                    await Remember.ƒS.Character.show(Remember.characters.Others, Remember.characters.Others.pose.red, Remember.ƒS.positionPercent(50, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorF);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.SurvivorF, Remember.characters.SurvivorF.pose.survivorF, Remember.ƒS.positionPercent(55, 100));
                    await Remember.ƒS.Character.hide(Remember.characters.Others);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "NO!");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorF);
                    await Remember.ƒS.update(0.2);
                    Remember.ƒS.Sound.fade(Remember.sound.death, 0.2, 0.1, false);
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Her teeth sink into your neck and as she pulls back you can feel your skin rip. \
                    Your screams soon turn into a choked gurgle as your mouth fills with blood. And your last thought before the whole world goes \
                    dark is...");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "<i>I don't want to die...</i>");
                    Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
                    Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorF);
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.update(0.2);
                    return "badEnding";
                }
                else {
                    Remember.ƒS.Sound.fade(Remember.sound.grunting, 0.2, 0.1, false);
                    Remember.ƒS.Sound.fade(Remember.sound.hit, 0.2, 0.1, false);
                    Remember.dataForSave.damageScore += 10;
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.animate(Remember.characters.Player, Remember.characters.Player.pose.hurt2, Remember.playerGetsHit());
                    await Remember.ƒS.Character.show(Remember.characters.Others, Remember.characters.Others.pose.red, Remember.ƒS.positionPercent(50, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorF);
                    await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.surprised, Remember.ƒS.positionPercent(75, 100));
                    await Remember.ƒS.Character.show(Remember.characters.SurvivorF, Remember.characters.SurvivorF.pose.survivorF, Remember.ƒS.positionPercent(55, 100));
                    await Remember.ƒS.Character.hide(Remember.characters.Others);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Ugh!");
                    Remember.ƒS.Sound.fade(Remember.sound.hitWithKnife, 0.2, 0.1, false);
                    Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "The zombie is pulled off of you and you only see Lewis ram a knife into her head and shortly\
                    after the body slumps to the ground. Lewis is at your side in a second, looking at your injury.");
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorF);
                    await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.worried, Remember.ƒS.positionPercent(60, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Are you okay?!");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Yes, it's just a scratch...");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Lewis helps to patch you up as good as he can and then takes your hands in his.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Don't beat yourself up over it, it was a difficult decision.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "I would have hesitated too, because there's a difference between killing on the \
                    battlefield, killing a zombie and killing someone innocent who got unlucky.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Lewis lets you be for a minute, but then he gently pulls you along.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Come on, let's go.");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                    await Remember.ƒS.update(0.2);
                    break;
                }
        }
        await Remember.ƒS.Location.show(Remember.locations.base);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.neutral, Remember.ƒS.positionPercent(60, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "After some more walking you two reach the edge of the city. The destruction here is less severe \
        here. Some broken cars and corpses are strewn across the road, but in contrast to the city it seems almost peaceful. Just a bit more and \
        your new life can begin. Soon you can rest.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.alone, 0, 0.1, false);
        return "goodEnding1";
    }
    Remember.goThroughSideStreet = goThroughSideStreet;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function goWithLewis() {
        console.log("Scene: Go with Lewis");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0.5, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.otherStreet);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "[Further in the City]");
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.neutral, Remember.ƒS.positionPercent(75, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "This way.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You keep walking for some minutes, when suddenly your head feels like you're underwater \
        and your sight gets blurry for a moment. You stumble but Lewis catches you. With one hand he keeps you steady and with the other he gives \
        you his water with a worried smile.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Thanks.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You drink a bit and then continue on.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "You called me 'Rush'. Why?");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.sad, Remember.ƒS.positionPercent(75, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "So you really don't remember?");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.confused, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I woke up this morning in an apartment I didn't know and the only things I could remember were my \
        name and that I was a soldier. I've been slowly remembering random little things, but most of my past is still blank.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.neutral, Remember.ƒS.positionPercent(75, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "...");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "We served together in the military. I joined three years after you, when I was 19 and you were 23 \
        at that time. That was 9 years ago, which makes you 32 years old now.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Tell me if you want me to stop.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You just nod as you try to process the new information.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "At first we didn't talk much, you liked to keep to yourself. You looked after everyone in your \
        own ways and we respected that. But some of that changed after I got badly hurt in battle. I got shot in the shoulder and you risked your \
        life to pull me back to safety. After that I never strayed far from your side.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Oh, that's right, you kept following me around like a lost puppy.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.happy, Remember.ƒS.positionPercent(75, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Because you finally started opening up after that! And I realized how nice it was to be at your side.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Thank you for telling me. Can you wait for a moment?");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Of course.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You pull out your journal to write everything down.");
        await Remember.ƒS.Text.print("I just met someone from my past, his name is Lewis. We served together in the military and after he got shot in the \
        shoulder in a battle I saved him and after that we became close, because he kept following me around. I guess I kind of just warmed up \
        to him and it became normal to seek each other out. <br><br> According to him I joined the military when I was 20 years old and spent \
        at least three years there. And I am 32 years old.");
        Remember.dataForSave.novelLewis = true;
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Okay, I'm done.");
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Alright, which way do you want to take? We could go through a side street or through the school. \
        Both will take us to the edge of the city. It's your call.");
        // Choice: Which way to go
        let whichWayWithLewis = {
            takeSideStreet: "Side street",
            goThroughSchool: "School",
        };
        let choicewhichWayWithLewis = await Remember.ƒS.Menu.getInput(whichWayWithLewis, "choiceCSSClass");
        switch (choicewhichWayWithLewis) {
            case whichWayWithLewis.takeSideStreet:
                console.log("Take the side street.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Let's take the side street.");
                await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Alrighty!");
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
                return "goThroughSideStreet";
                break;
            case whichWayWithLewis.goThroughSchool:
                console.log("Go through schoolyard.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Let's go through the school.");
                await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Alrighty!");
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
                return "goThroughSchoolyard";
                break;
        }
    }
    Remember.goWithLewis = goWithLewis;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function goodEnding1() {
        console.log("Scene: Good Ending 1");
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.survivor, 0.5, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.cabinInForest);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Several weeks later");
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy2, Remember.ƒS.positionPercent(35, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
        await Remember.ƒS.Text.print("Day 67, <br><br> It's peaceful here and not many zombies find their way all the way out here. <br><br> My \
        memories are gradually returning and Lewis tries to fill in the blanks as good as he can. He has been a big help, not only in remembering \
        but giving us a new place to call home and giving me a reason to keep fighting. <br><br> I remembered that I love fishing and we got lucky \
        with a big lake not far from here. So fish is our main ingredient at the moment. Most of the time I cook, but Lewis helps from time to time. \
        He pretends that he's not had enough of fish yet, but I know he wouldn't mind a change. I hope the stuff we planted will be ready to harvest \
        soon, then I could surprise him with his favourite dish. <br> It's also getting time for another city run soon. Maybe we'll get lucky this time and \
        find a functioning car. I don't mind the walk, but it can get tiring pretty quickly. Not that Lewis minds. He always loved walking. I wonder \
        where he gets all the energy from...");
        Remember.dataForSave.novelEnding2 = true;
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.happy2, Remember.ƒS.positionPercent(65, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Lewis, "Hey Rush, you ready to go yet? You promised to teach me how to fish.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Yeah, I'm done. Let's go.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "GOOD ENDING 1!");
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.survivor, 0, 0.1, false);
        return "emptyScene";
    }
    Remember.goodEnding1 = goodEnding1;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function goodEnding2() {
        console.log("Scene: Good Ending 2");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForDamage").style.display = "none";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.survivor, 0.5, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.beach);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Several weeks later");
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral2, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "It's peaceful here and I haven't seen a single zombie in weeks.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "The first few days were quite hectic. We all had to get settled in on this island and it was hard \
        to shake the mindset that danger lurks around every corner. Sometimes the peace and quiet is even making me jittery.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I'm still missing a big part of my memory, but apparently I knew how to \
        fish. So that and cooking are the parts I'm responsible for in our community. At least it's keeping me busy.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I still think about my past life sometimes, even though they told us to forget all about it. \
        Not that it's hard to forget about a past you can't even remember. But I decided to stop writing my journal. No use remembering an old life.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I'd rather put all my concentration on this new life and do everything I can to keep it this happy \
        and peaceful.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "GOOD ENDING 2!");
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.survivor, 0, 0.1, false);
        return "emptyScene";
    }
    Remember.goodEnding2 = goodEnding2;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function helpingTheSurvivors() {
        console.log("Scene: Helping the survivors");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.assault, 0.5, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.oldStreet);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        if (Remember.dataForSave.pickedUpBat == false) {
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You pull out your knife and quietly sneak towards the closest zombie.");
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, " You manage to take this one and the next two down without a hitch. But as you sneak up on \
            the last it turns around and charges towards you.");
            Remember.ƒS.Sound.fade(Remember.sound.zombie, 0.2, 0.1, false);
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "With the knife you don't have enough reach to take it down before it's close enough to barrel \
            into you with such a force that you fall to the ground. And despite the hoodie you can feel your elbow scrape across the ground, drawing blood.");
            await Remember.ƒS.Character.hide(Remember.characters.Player);
            Remember.ƒS.Sound.fade(Remember.sound.grunting, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.hit, 0.2, 0.1, false);
            Remember.dataForSave.damageScore += 10;
            await Remember.ƒS.Character.hide(Remember.characters.Player);
            await Remember.ƒS.update(0.2);
            await Remember.ƒS.Character.animate(Remember.characters.Player, Remember.characters.Player.pose.hurt2, Remember.playerGetsHit());
            await Remember.ƒS.Character.show(Remember.characters.Others, Remember.characters.Others.pose.red, Remember.ƒS.positionPercent(50, 100));
            await Remember.ƒS.update(0.2);
            await Remember.ƒS.Character.hide(Remember.characters.Others);
            await Remember.ƒS.update(0.2);
            await Remember.ƒS.Speech.tell(Remember.characters.Player, "Shit.");
            Remember.ƒS.Sound.fade(Remember.sound.hitWithKnife, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "But you manage to ram your knife into its head before it can take a bite out of you.");
            await Remember.ƒS.Character.hide(Remember.characters.Player);
            await Remember.ƒS.update(0.2);
            await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
            await Remember.ƒS.update(0.2);
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You wait a few more seconds to see if more zombies will appear, but when none come you nod to \
            the group and they carefully open the doors.");
        }
        else if (Remember.dataForSave.pickedUpBat == true) {
            Remember.ƒS.Sound.fade(Remember.sound.zombie, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.hitWithKnife, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You pull out your knife and quietly sneak towards the closest zombie. You manage to take \
            this one and the next two down without a hitch");
            Remember.ƒS.Sound.fade(Remember.sound.hitWithClub, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "But instead of risking to sneak towards the last one, you take out your golf club and smash \
            its head in.");
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You wait a few more seconds to see if more zombies will appear, but when none come you nod to \
            the group and they carefully open the doors.");
        }
        Remember.ƒS.Sound.fade(Remember.sound.assault, 0, 0.1, false);
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0.5, 0.1, true);
        await Remember.ƒS.Character.show(Remember.characters.SurvivorM, Remember.characters.SurvivorM.pose.survivorM, Remember.ƒS.positionPercent(75, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "Oh, thank you, without you we would have been- Thank you.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Are you all okay?");
        await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "Yes, thanks to you. We've been stuck in that shop for hours now. I don't think the doors \
        would have held on for much longer.");
        await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "You've already done so much for us, but I just must ask. Do you maybe have something to eat and \
        drink for us?");
        await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "There are some children in our group and they're getting weaker without anything to eat.");
        await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "Our group mostly consists of women, old people or children and the men still haven't come back \
        from their supply run. Just a little bit would be sufficient to give us enough time until they are back.");
        if (Remember.dataForSave.pickedUpRations == true) {
            // Choice: Give rations or not
            let giveThemRations = {
                giveRations: "'Here, you can have my rations.'",
                dontGiveRationsLie: "'Sorry, I have nothing left.' (Lie)",
            };
            let choiceGiveThemRations = await Remember.ƒS.Menu.getInput(giveThemRations, "choiceCSSClass");
            switch (choiceGiveThemRations) {
                case giveThemRations.giveRations:
                    console.log("Give your rations to the group.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Here, you can have my rations.");
                    Remember.dataForSave.pickedUpRations = false;
                    await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "Thank you so much! I don't know how we could ever repay your kindness.");
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorM);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.SurvivorM, Remember.characters.SurvivorM.pose.survivorM, Remember.ƒS.positionPercent(65, 100));
                    await Remember.ƒS.Character.show(Remember.characters.SurvivorChild, Remember.characters.SurvivorChild.pose.survivorChild, Remember.ƒS.positionPercent(85, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You notice a little girl peak at you from behind the man's legs.");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You give her a small smile and she ducks out of sight for a moment, but you can hear her giggle. \
                    A moment later she steps out with her hands behind her back and walks towards you.");
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorChild);
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorM);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.SurvivorChild, Remember.characters.SurvivorChild.pose.survivorChild, Remember.ƒS.positionPercent(55, 100));
                    await Remember.ƒS.Character.show(Remember.characters.SurvivorM, Remember.characters.SurvivorM.pose.survivorM, Remember.ƒS.positionPercent(80, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.SurvivorChild, "This is for you, Mister.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "She hands you a beautiful white flower.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Thank you, I will take good care of it.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "She giggles again and runs back behind the man's legs.");
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorChild);
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorM);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.SurvivorM, Remember.characters.SurvivorM.pose.survivorM, Remember.ƒS.positionPercent(65, 100));
                    await Remember.ƒS.Character.show(Remember.characters.SurvivorChild, Remember.characters.SurvivorChild.pose.survivorChild, Remember.ƒS.positionPercent(85, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "You don't have to repay me. Just make sure you keep everyone safe.");
                    await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "I will! Thanks to you we now have a chance.");
                    await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "I hope we'll meet again someday. Goodbye and stay safe.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Thank you. And you stay safe as well.");
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorM);
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "The Man and the little girl wave until you round the corner and you can't see them anymore.");
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorChild);
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorM);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Helping them made me remember something. I should write it down.");
                    Remember.dataForSave.novelSurvivors = true;
                    await Remember.ƒS.Text.print("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
                    VIP that had been taken hostage by a shady organization that was trying get rich by robbing a bank. <br> They didn't expect the military to show up \
                    but that could have been avoided if they had done their research right. They thought they just had a higher-up worker at the bank they had \
                    tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
                    end so well for the robbers. In the end they got no money and landed in jail.");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.update(0.2);
                    Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
                    return "callForHelp";
                    break;
                case giveThemRations.dontGiveRationsLie:
                    console.log("Lie and don't give your rations to the group.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Sorry, I have nothing left");
                    await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "I see... But we'd like to thank you again for your help. I hope we'll meet again. \
                    Goodbye and stay safe.");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Thank you. And you stay safe as well.");
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorM);
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "The Man waves until you round the corner and can't see him and the others anymore.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Helping them made me remember something. I should write it down.");
                    Remember.dataForSave.novelSurvivors = true;
                    await Remember.ƒS.Text.print("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
                    VIP that had been taken hostage by a shady organization that was trying get rich by robbing a bank. <br> They didn't expect the military to show up \
                    but that could have been avoided if they had done their research right. They thought they just had a higher-up worker at the bank they had \
                    tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
                    end so well for the robbers. In the end they got no money and landed in jail.");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.update(0.2);
                    Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
                    return "callForHelp";
                    break;
            }
        }
        else if (Remember.dataForSave.pickedUpRations == false) {
            let giveThemRations = {
                dontGiveRationsTruth: "'Sorry, I have nothing left.' (Truth)"
            };
            let choiceGiveThemRations = await Remember.ƒS.Menu.getInput(giveThemRations, "choiceCSSClass");
            switch (choiceGiveThemRations) {
                case giveThemRations.dontGiveRationsTruth:
                    console.log("Don't give your rations to the group.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Sorry, I have nothing left.");
                    await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "I see... But we'd like to thank you again for your help. I hope we'll meet again. \
                    Goodbye and stay safe.");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
                    await Remember.ƒS.update(0.2);
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Thank you. And you stay safe as well.");
                    await Remember.ƒS.Character.hide(Remember.characters.SurvivorM);
                    await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "The Man waves until you round the corner and can't see him and the others anymore.");
                    await Remember.ƒS.Speech.tell(Remember.characters.Player, "Helping them made me remember something. I should write it down.");
                    Remember.dataForSave.novelSurvivors = true;
                    await Remember.ƒS.Text.print("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
                    VIP that had been taken hostage by a shady organization that was trying get rich by robbing a bank. <br> They didn't expect the military to show up \
                    but that could have been avoided if they had done their research right. They thought they just had a higher-up worker at the bank they had \
                    tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
                    end so well for the robbers. In the end they got no money and landed in jail.");
                    await Remember.ƒS.Character.hide(Remember.characters.Player);
                    Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
                    await Remember.ƒS.update(0.2);
                    return "callForHelp";
                    break;
            }
        }
    }
    Remember.helpingTheSurvivors = helpingTheSurvivors;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function ignoreCallForHelp() {
        console.log("Scene: Ignore the call for help");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        await Remember.ƒS.Location.show(Remember.locations.otherStreet);
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0.5, 0.1, true);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I'm sorry whoever you are, but I can't risk my only chance.");
        if (Remember.dataForSave.pickedUpRations == false) {
            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You keep walking for some minutes, when suddenly your head feels like you're underwater \
            and your sight gets blurry for a moment. You stumble and are just barely able to catch yourself on a wall but while doing so your hand \
            manages to scratch against a stray protruding nail there.");
            Remember.ƒS.Sound.fade(Remember.sound.grunting, 0.2, 0.1, false);
            Remember.ƒS.Sound.fade(Remember.sound.hit, 0.2, 0.1, false);
            Remember.dataForSave.damageScore += 5;
            await Remember.ƒS.Character.show(Remember.characters.Others, Remember.characters.Others.pose.red, Remember.ƒS.positionPercent(50, 100));
            await Remember.ƒS.Character.hide(Remember.characters.Player);
            await Remember.ƒS.update(0.2);
            await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.hurt2, Remember.ƒS.positionPercent(30, 100));
            await Remember.ƒS.Character.hide(Remember.characters.Others);
            await Remember.ƒS.update(0.2);
            await Remember.ƒS.Speech.tell(Remember.characters.Player, "Ah, fuck.");
            await Remember.ƒS.Speech.tell(Remember.characters.Player, "I didn't notice how dehydrated I was.");
            await Remember.ƒS.Character.hide(Remember.characters.Player);
            await Remember.ƒS.update(0.2);
            await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
            await Remember.ƒS.update(0.2);
            await Remember.ƒS.Speech.tell(Remember.characters.Player, "I should bandage the wound. Don't want it to get infected.");
        }
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You keep walking for a while and come across a few zombies. You alternate between taking them \
        down stealthily or just sneaking by undetected.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Huh?");
        Remember.ƒS.Sound.fade(Remember.sound.zombie2, 0.1, 0.1, false);
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.zombie, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "This zombie is different from the others, you just know it. But it takes you a moment to pinpoint \
        exactly why, as a memory hits you like a bucket of cold water.");
        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Others, Remember.characters.Others.pose.memory, Remember.ƒS.positionPercent(50, 100));
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.dawn, 0.5, 0.1, true);
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "The face of the zombie- the man, bloody, almost as much as in the present. You drag him behind a \
        wall with one hand, your gun forgotten in the other. He got shot in the shoulder and you're trying to stop the bleeding.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You remember his name, <i>Lewis</i>, and telling him to stay awake. You remember him clinging \
        to your arm like you were his lifeline.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "For a short moment you wonder if he survived, but you <i>know</i> that he did, because after that \
        he decided to stick by your side and you became almost inseperable. The man who got your back, your best friend, your...");
        await Remember.ƒS.Character.hide(Remember.characters.Others);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.Character.show(Remember.characters.Lewis, Remember.characters.Lewis.pose.zombie, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "No...");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I should have followed my gut. But I didn't and now he's gone.");
        // Choice: Kill the Zombie or leave it
        let killLewis = {
            killHim: "Give him mercy.",
            dontKillHim: "Leave him be.",
        };
        let choiceKillLewis = await Remember.ƒS.Menu.getInput(killLewis, "choiceCSSClass");
        switch (choiceKillLewis) {
            case killLewis.killHim:
                console.log("Kill Zombie-Lewis.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "I should give him mercy...");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You know you don't have much time, but you can't just let him keep wandering around like that \
                He wouldn't have wanted to hurt anybody.");
                // Choice: How to kill him
                let whichWeapon = {
                    withKnife: "The knife.",
                    withGun: "The Gun.",
                };
                let choicewhichWeapon = await Remember.ƒS.Menu.getInput(whichWeapon, "choiceCSSClass");
                switch (choicewhichWeapon) {
                    case whichWeapon.withKnife:
                        console.log("Kill him with the knife.");
                        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I am so sorry...");
                        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You take out your knife and get close to Lewis. But you're scared you won't make \
                        it to the rendezvous in time so you make a mistake and accidentally kick an empty bottle that was lying just behind the zombie.");
                        if (Remember.dataForSave.damageScore == 45) {
                            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Zombie-Lewis turns around and before you can react he goes for your neck.");
                            Remember.ƒS.Sound.fade(Remember.sound.grunting, 0.2, 0.1, false);
                            Remember.ƒS.Sound.fade(Remember.sound.hit, 0.2, 0.1, false);
                            Remember.dataForSave.damageScore += 5;
                            await Remember.ƒS.Character.hide(Remember.characters.Player);
                            await Remember.ƒS.update(0.2);
                            await Remember.ƒS.Character.animate(Remember.characters.Player, Remember.characters.Player.pose.hurt2, Remember.playerGetsHit());
                            await Remember.ƒS.Character.show(Remember.characters.Others, Remember.characters.Others.pose.red, Remember.ƒS.positionPercent(50, 100));
                            await Remember.ƒS.update(0.2);
                            await Remember.ƒS.Character.hide(Remember.characters.Others);
                            await Remember.ƒS.update(0.2);
                            Remember.ƒS.Sound.fade(Remember.sound.death, 0.2, 0.1, false);
                            await Remember.ƒS.Speech.tell(Remember.characters.Player, "AHHH!");
                            await Remember.ƒS.Character.hide(Remember.characters.Player);
                            await Remember.ƒS.update(0.2);
                            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "His teeth sink into your neck and as he pulls back you can feel your skin rip. \
                            Your screams soon turn into a choked gurgle as your mouth fills with blood. And your last thought before the whole world goes\
                            dark is...");
                            await Remember.ƒS.Speech.tell(Remember.characters.Player, "<i>I was so close...</i>");
                            Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
                            await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                            await Remember.ƒS.Character.hide(Remember.characters.Player);
                            await Remember.ƒS.update(0.2);
                            return "badEnding";
                        }
                        else {
                            Remember.ƒS.Sound.fade(Remember.sound.hitWithKnife, 0.2, 0.1, false);
                            Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
                            await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Zombie-Lewis turns around and manages to scratch open your arm, before you finally plunge the \
                            knife deep into his head. His body slumps to the ground.");
                            await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                            await Remember.ƒS.update(0.2);
                            Remember.ƒS.Sound.fade(Remember.sound.grunting, 0.2, 0.1, false);
                            Remember.ƒS.Sound.fade(Remember.sound.hit, 0.2, 0.1, false);
                            Remember.dataForSave.damageScore += 5;
                            await Remember.ƒS.Character.show(Remember.characters.Others, Remember.characters.Others.pose.red, Remember.ƒS.positionPercent(50, 100));
                            await Remember.ƒS.Character.hide(Remember.characters.Player);
                            await Remember.ƒS.update(0.2);
                            await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.hurt2, Remember.ƒS.positionPercent(30, 100));
                            await Remember.ƒS.Character.hide(Remember.characters.Others);
                            await Remember.ƒS.update(0.2);
                            await Remember.ƒS.Speech.tell(Remember.characters.Player, "Shit.");
                        }
                        await Remember.ƒS.Character.hide(Remember.characters.Player);
                        await Remember.ƒS.update(0.2);
                        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
                        await Remember.ƒS.update(0.2);
                        await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
                        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You simply stare at him for a moment, before you remember that you should to leave.");
                        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "With one last look at Lewis you continue on towards the rendezvous.");
                        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "When you're sure that you're far enough away you pull out your journal.");
                        await Remember.ƒS.Speech.tell(Remember.characters.Player, "He deserves to be remembered.");
                        await Remember.ƒS.Text.print("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
                        We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him, he stuck by my side and \
                        over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
                        the only thing left from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
                        Remember.dataForSave.novelNoLewis = true;
                        break;
                    case whichWeapon.withGun:
                        console.log("Kill him with the gun.");
                        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I am so sorry...");
                        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You take out your gun and train it towards his head with slightly shaking hands. \
                        You hesitate and suddenly his gaze turns to you and for split seconds it almost seems like he recognizes you. But then he \
                        charges towards you with a snarl and you pull the trigger just before he can come too close.");
                        Remember.ƒS.Sound.fade(Remember.sound.gunshot, 0.1, 0.1, false);
                        Remember.ƒS.Sound.fade(Remember.sound.bodyFall, 0.1, 0.1, false);
                        await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                        await Remember.ƒS.update(0.2);
                        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "His lifeless body hits the ground and you simply stare at him for a moment, before \
                        you remember that you have to leave, because every zombie in the vicinity will be lured here by the gunshot.");
                        Remember.ƒS.Sound.fade(Remember.sound.running, 0.2, 0.1, false);
                        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "With one last look at Lewis you run into the direction of the rendezvous.");
                        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "When you're sure that you're far enough away you pull out your journal.");
                        await Remember.ƒS.Speech.tell(Remember.characters.Player, "He deserves to be remembered.");
                        await Remember.ƒS.Text.print("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
                        We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him, he stuck by my side and \
                        over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
                        the only thing left from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
                        Remember.dataForSave.novelNoLewis = true;
                        break;
                }
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.dawn, 0, 0.1, false);
                return "rendezvous";
                break;
            case killLewis.dontKillHim:
                console.log("Don't kill Zombie-Lewis.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "I can't kill him...");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Please forgive me...");
                await Remember.ƒS.Character.hide(Remember.characters.Lewis);
                await Remember.ƒS.update(0.2);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "With one last look at Lewis you run into the direction of the rendezvous.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "When you're sure that you're far enough away you pull out your journal.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "He at least deserves that I remember him.");
                await Remember.ƒS.Text.print("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
                We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him he, stuck by my side and \
                over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
                the only thing left from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
                Remember.dataForSave.novelNoLewis = true;
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.dawn, 0, 0.1, false);
                return "rendezvous";
                break;
        }
    }
    Remember.ignoreCallForHelp = ignoreCallForHelp;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function meetingSurvivors() {
        console.log("Scene: Meeting survivors");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0.6, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.oldStreet);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You walk through the streets and surprisingly only come across a few zombies you can avoid. \
        As you walk by another side street you hear and see why that is.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "A group of zombies is trying to claw their way into a small shop.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.thinking, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "What are all the zombies doing there?");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "While you're carefully watching the zombies, you notice movement in one of the shop windows.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You notice a group of people inside the shop holding closed the doors, as the zombies try to \
        claw and shove their way inside.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "One of the people in the shop, an older man, meets your gaze and starts waving frantically.");
        await Remember.ƒS.Character.show(Remember.characters.SurvivorM, Remember.characters.SurvivorM.pose.survivorM, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.SurvivorM, "Please, you have to help us! I beg you! There are children in here!");
        // Choice: Help the group of survivors or don't
        let groupNeedsHelp = {
            helpGroup: "Help them.",
            ignoreGroup: "Ignore them.",
        };
        let choiceGroupNeedsHelp = await Remember.ƒS.Menu.getInput(groupNeedsHelp, "choiceCSSClass");
        switch (choiceGroupNeedsHelp) {
            case groupNeedsHelp.helpGroup:
                console.log("Help the group.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "I have to help them.");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.Character.hide(Remember.characters.SurvivorM);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
                return "helpingTheSurvivors";
                break;
            case groupNeedsHelp.ignoreGroup:
                console.log("Ignore the group");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "I don't have time for this.");
                await Remember.ƒS.Character.hide(Remember.characters.SurvivorM);
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You turn away from the group and their calls for help continue on. Just as you \
                make to round the next corner you hear glass break and the calls turn into screams of terror and pain. Amidst the agonizing \
                screams you can hear the voice of the man that had called out to you curse you and cry out why you didn't help.");
                await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You don't turn back around to see the zombies storming into the shop like starving \
                animals, as they rip apart whoever they can reach the fastest. But just as soon as the screams started they're quiet again \
                and the only sound that remains is of the zombies enjoying their feast.");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
                await Remember.ƒS.Character.hide(Remember.characters.Player);
                await Remember.ƒS.update(0.2);
                Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
                return "callForHelp";
                break;
        }
    }
    Remember.meetingSurvivors = meetingSurvivors;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function prologue() {
        console.log("Prologue");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(40, 5000); // kontrolliert die Textgeschwindigkeit -> cpms = characters per miliisecond
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        Remember.ƒS.Speech.hide(); //hides the speech --> verhindert, dass man die speechbox sofort mit Beginn der Szene sieht
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0.6, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.oldKitchen);
        await Remember.ƒS.update(Remember.transition.vignette.duration, Remember.transition.vignette.alpha, Remember.transition.vignette.edge);
        await Remember.ƒS.update(0.3);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.hurt, Remember.ƒS.positionPercent(30, 100)); // beim hovern wird Aufbau angezeigt
        await Remember.ƒS.update(0.5);
        // signalDelay3();
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Huh, what... Where am I? Ouch, my head...");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "What happened?");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "There is a journal here.");
        await Remember.ƒS.Text.print("<strong> How to survive the Zombie Apocalypse: </strong><br><br><br> - Avoid getting bitten => Infection will \
        spread like that <br><br> - Aim for the head => Their brains are their weakness <br><br> - Use melee weapons if possible => Sound \
        attracts them <br><br> - Don't give up");
        await Remember.ƒS.Text.print("Day 13, <br><br> It's been a few days since the apocalypse started. Everyday it's getting harder to find survivors \
        and I'm starting to lose hope. Is this going to be the end of humanity?");
        await Remember.ƒS.Text.print("Day 26, <br><br> I lost all contact to the military headquarters. Were they overrun or is something interferring \
        with the radios? I really hope it's the latter... I don't know how good our chances are if we lost the military.");
        await Remember.ƒS.Text.print("Day 45, <br><br> I don't know if I can keep doing this...");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "> <b>You can access the Journal through the Menu (press 'M')</b> <");
        await Remember.ƒS.update();
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "A zombie apocalypse? Ah yes, I remember now. But who...");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Wait, I know. My name is ");
        Remember.dataForSave.nameProtagonist = await Remember.ƒS.Speech.getInput();
        Remember.characters.Player.name = Remember.dataForSave.nameProtagonist;
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I should write everything I know down. I don't want to forget again.");
        await Remember.ƒS.Text.print("I suddenly woke up in the apocalypse and I have trouble remembering how it all started or who I really am. \
        I faintly remember being in the military, but not for how long or if I left it before everything went to hell. <br><br><br><br> \
        Name: " + Remember.dataForSave.nameProtagonist + "<br><br> Age: ?? <br><br> Occupation: Soldier?/Ex-Soldier? ");
        Remember.dataForSave.novelPage1 = true;
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Age...?");
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.confused, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Dammit my mind's all fuzzy.");
        Remember.ƒS.Sound.fade(Remember.sound.radio, 0.2, 0.1, true);
        await Remember.ƒS.Speech.tell(Remember.characters.Radio, "'<i>...surv...hea...tary...extrac...</i>'");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.surprised, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "What's that?");
        await Remember.ƒS.Character.animate(Remember.characters.Radio, Remember.characters.Radio.pose.radio, Remember.moveItemInFrame());
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You notice a radio, a gun and a knife lying next to you. You take everything and try to tune the radio.");
        await Remember.ƒS.Speech.tell(Remember.characters.Radio, "'<i>To all survivors who can hear this, the military is organizing one last extraction of survivors to a safe zone.</i>'");
        await Remember.ƒS.Speech.tell(Remember.characters.Radio, "'<i>The rendezvous point is the military base 'Delta' just on the northern edge of the city. The last plane will leave in 8 hours. \
        I repeat: The rendezvous point is military base 'Delta' just on the northern edge of the city. The last plane will leave in 8 hours.</i>'");
        Remember.ƒS.Sound.fade(Remember.sound.radio, 0, 0, true);
        Remember.dataForSave.novelRadio = true;
        console.log(Remember.dataForSave.novelRadio);
        await Remember.ƒS.Character.hide(Remember.characters.Radio);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Northern edge? I'll have to find a map. I hope I can make it there on time.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update();
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
        Remember.ƒS.Speech.clear();
    }
    Remember.prologue = prologue;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function rendezvous() {
        console.log("Scene: Rendezvous");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        await Remember.ƒS.Location.show(Remember.locations.base);
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0.5, 0.1, true);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        // await ƒS.Speech.tell(characters.Narrator, "[At Military Camp Delta]");
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I made it to rendezvous in time.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You get in line behind all the other survivors that are all being checked before being led inside \
        one of the two planes still there. When you reach the front you're greeted by a woman who gives you a tired smile.");
        await Remember.ƒS.Character.show(Remember.characters.Soldier, Remember.characters.Soldier.pose.soldier, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Soldier, "Are you armed? Sorry, but we have to confiscate everything that could be used as a weapon.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You nod and reluctantly place all your weapons in her outstretched hand.");
        await Remember.ƒS.Speech.tell(Remember.characters.Soldier, "Thank you and don't worry, you won't need them anymore.");
        await Remember.ƒS.Character.hide(Remember.characters.Soldier);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "After that you're sent into a medical tent where you are checked for bites and your injuries \
        are treated as best as possible. You were the last survivor to arrive, so they start packing up as you put your hoodie back on.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "When you leave the tent the soldier that greeted you is waiting for you.");
        await Remember.ƒS.Character.show(Remember.characters.Soldier, Remember.characters.Soldier.pose.soldier, Remember.ƒS.positionPercent(70, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Soldier, "It's nice to have another soldier with us.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.surprised, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "How did you know?");
        await Remember.ƒS.Speech.tell(Remember.characters.Soldier, "I've been around long enough to notice the small things. Your stance and body language, the look \
        in your eyes, the reluctance to give up your weapon...");
        await Remember.ƒS.Speech.tell(Remember.characters.Soldier, "And your hoodie gave me the confirmation.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Oh.");
        await Remember.ƒS.Speech.tell(Remember.characters.Soldier, "We won't have to fight anymore, where we're going. It will all be in the past. I can't wait to \
        forget all about that and start a new life.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Yes, the past...");
        await Remember.ƒS.Speech.tell(Remember.characters.Soldier, "Come on, let's go. Before they decide to fly without us.");
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "Together you board the plane that will take you to your new life. A new start.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.Character.hide(Remember.characters.Soldier);
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Sound.fade(Remember.sound.stars, 0, 0.1, false);
        return "goodEnding2";
    }
    Remember.rendezvous = rendezvous;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function routeCommercialArea() {
        console.log("Scene: Commercial area");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0.6, 0.1, true);
        await Remember.ƒS.Location.show(Remember.locations.restaurant);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You enter an abandoned restaurant that looks like it's already been ransacked.");
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "This place looks better than the others I've seen, but I don't think there'll be anything left either.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.1);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.thinking, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "The people left in a hurry with all the food still on the table. But it's already gone bad, sadly.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.1);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You search the whole restaurant for some food or water that's still edible, but find nothing");
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Nothing left for me here, it seems...");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "But I need to find something to drink soon, my throat's starting to hurt.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Hm, the menu...");
        Remember.ƒS.Text.setClass("menu");
        await Remember.ƒS.Text.print("<strong>Menu</strong> <br><br> <i>SOUP AND SALAD</i> <br><br> Mango Chutney 2,95€ <br> Dal Soup 2,95€ <br> Cucumber Salad 3,50€ <br> \
        Mixed Salad 3,50€ <br> Raita 2,25€ <br><br> <i>MAIN DISHES</i> <br><br> Lamb Curry 11,95€ <br> Prawn Vindaloo 11,95€ <br> \
        Boti Kabab 12,95€ <br> Prawn Biryani 12,95€ <br><br> <i>DESSERTS</i> <br><br> Gulab Jamun 2,50€ <br> Kulfi 2,50€ <br> Kheer 2,50€");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Suddenly I'm really craving some Mushroom Mattar.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.surprised, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Mushroom Mattar? Oh yea, mom used to make it for me whenever I got good grades or \
        wasn't feeling well. That was when I was still in school.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "The way she made it was my favourite, I never could quite recreate it no matter how hard I tried. \
        She wanted to wait until my 18th birthday, before giving me the family recipe, but-");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.sad, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Oh... right.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "She passed away before she could when I was 16.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I should write that down...");
        Remember.ƒS.Text.setClass("journal");
        await Remember.ƒS.Text.print("I remembered some things about my past. My favourite food is Mushroom Mattar. My mother always cooked it for me \
        when I did well in school or when she wanted to cheer me up. The way she made it was special and I remember it tasting like the most \
        delicious food I had ever eaten. <br> I tried recreating it for years, but never did quite manage to make it taste exactly like hers. She told \
        me as soon as I turned 18 she would teach me the family recipe, but she passed away when I was 16. A car accident. A drunk driver crashed \
        into her car. <br><br> She taught me how to cook and thanks to her, cooking became my hobby. I miss her. <br><br> But at least she \
        won't have to see what happened to the world. <br><br><br> Rest well, Mom.");
        Remember.dataForSave.novelFavFood = true;
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "...");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I have to go on or I won't make it in time.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Speech.clear();
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
        return "meetingSurvivors";
    }
    Remember.routeCommercialArea = routeCommercialArea;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function routeResidentialArea() {
        console.log("Residential area");
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(30, 5000);
        Remember.ƒS.Speech.hide();
        await Remember.ƒS.Location.show(Remember.locations.kitchen);
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0.6, 0.1, true);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You enter an abandoned apartment that looks like it hasn't been stepped into in months.");
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.5);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "This place looks like it was untouched by the apocalypse. Guess the residents never \
        came back after it started.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Hopefully there'll be some still-edible stuff I can take.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You rummage through the cabinets and cupboards in search for rations and find a bottle of \
        water and three granola bars.");
        Remember.dataForSave.pickedUpRations = true;
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "That should be enough to last to the rendezvous point.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Let's see what else is here.");
        Remember.ƒS.Speech.hide();
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.3);
        await Remember.ƒS.Location.show(Remember.locations.livingRoom);
        await Remember.ƒS.update(Remember.transition.paintblobs.duration, Remember.transition.paintblobs.alpha, Remember.transition.paintblobs.edge);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You search through the rest of the apartment and find a golf club in the storage room.");
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "A golf club. Could be useful if I want to keep the zombies away from me. Is there anything else?");
        Remember.dataForSave.pickedUpBat = true;
        await Remember.ƒS.Speech.tell(Remember.characters.Narrator, "You notice some photos on one of the cabinets.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I wonder who lived here before.");
        await Remember.ƒS.Character.animate(Remember.characters.Others, Remember.characters.Others.pose.catPic, Remember.moveItemInFrame());
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "A cat. Cute.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Did I have any pets?");
        await Remember.ƒS.Character.hide(Remember.characters.Others);
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.confused, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I think.. I had one?");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "But what was it?");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.happy, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Ah yes I remember. I had a cat when I was younger.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Her name was Loona. She was so small even as she got older. I can almost feel her claws, she \
        loved playing.");
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "I should write that down.");
        await Remember.ƒS.Text.print("I remembered some things about my past. I had a pet when I was younger, a cat. Her name was Loona and she \
        was this feisty little ball of black and white fur. I still have countless little scars all over my hands and arms, 'cause she loved \
        playing. She wasn't really a cuddler most of the time, but I remember waking up to her cuddled up on the foot of my bed sometimes. <br><br> \
        She was my first and only pet and I'll continue to remember her fondly.");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Okay, time to go. I've still got some ground to cover");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        Remember.ƒS.Speech.clear();
        Remember.ƒS.Sound.fade(Remember.sound.lost, 0, 0.1, false);
        return "meetingSurvivors";
    }
    Remember.routeResidentialArea = routeResidentialArea;
})(Remember || (Remember = {}));
var Remember;
(function (Remember) {
    async function testScene() {
        console.log("Test Scene");
        // await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        // ƒS.update();
        // await ƒS.Speech.tell(characters.Player, "Test");
        // await ƒS.Text.print("How to survive the Zombie Apocalypse: <br><br><br> - Avoid getting bitten -> Infection will spread like that <br><br> - Aim for the head -> Their brains are their weakness <br><br> - Use melee weapons if possible -> Sound attracts them <br><br> - Don't give up")
        // await ƒS.Text.print("Day 23 <br><br> It's been a few weeks since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. ");   
        // await ƒS.update();
        Remember.dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";
        Remember.ƒS.Speech.setTickerDelays(80, 5000); // kontrolliert die Textgeschwindigkeit -> cpms = characters per miliisecond
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        Remember.ƒS.Speech.hide(); //hides the speech --> verhindert, dass man die speechbox sofort mit Beginn der Szene sieht
        await Remember.ƒS.Location.show(Remember.locations.oldKitchen);
        await Remember.ƒS.update();
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.hurt, Remember.ƒS.positionPercent(30, 100)); // beim hovern wird Aufbau angezeigt
        await Remember.ƒS.update(); // immer nach Location-Wechsel
        // signalDelay3();
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "Huh, what... Where am I? Ouch, my head...");
        await Remember.ƒS.Character.hide(Remember.characters.Player);
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Location.show(Remember.locations.kitchen);
        // await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge); //-> yes
        // await ƒS.update(transition.lines.duration, transition.lines.alpha, transition.lines.edge); //-> maybe
        // await ƒS.update(transition.hair.duration, transition.hair.alpha, transition.hair.edge); //-> dont know
        await Remember.ƒS.update();
        await Remember.ƒS.Character.show(Remember.characters.Player, Remember.characters.Player.pose.neutral, Remember.ƒS.positionPercent(30, 100));
        await Remember.ƒS.update(0.2);
        await Remember.ƒS.Speech.tell(Remember.characters.Player, "There is a journal here.");
        // Welche Entscheidungsmöglichkeiten gibt es 
        let decision = {
            iSayYes: "Yes",
            iSayOk: "Okay",
            iSayNo: "No",
            iSayBla: "Bla"
        };
        let dialogueElement = await Remember.ƒS.Menu.getInput(decision, "choiceCSSClass");
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
                Remember.dataForSave.damageScore += 20;
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Yes");
                novelPage1: true;
                // return "SecondScene";        //bei return springt es auf die angegebene Szene, id verwenden
                break;
            case decision.iSayNo:
                // continue path here
                console.log("Option No");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "No");
                break;
            case decision.iSayOk:
                // continue path here
                console.log("Option Ok");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Ok");
                break;
            case decision.iSayBla:
                // continue path here
                console.log("Option Bla");
                await Remember.ƒS.Speech.tell(Remember.characters.Player, "Bla");
                break;
        }
    }
    Remember.testScene = testScene;
})(Remember || (Remember = {}));
//# sourceMappingURL=Template.js.map