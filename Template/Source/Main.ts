namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");

  // Data that will be saved
  export let dataForSave = {
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
    pickedUpBat: false,

    pickedMeterScene: false,
    pickedAnimationScene: false,
    // pickedInventoryScene: false,
    pickedChoice: false
  };


  export let transition = {
    puzzle: { // name of transition?? Kann unbenannt werden
      duration: 1,
      // keine absoluten Pfade, sondern relative Pfad
      alpha: "",
      // Härte der Transitions
      edge: 1
    }
  };

  // Sounds werden exportiert bzw. geladen
  export let sound = {
    // Sounds unterscheiden in Themes, SFX etc.

    // SFX
    drop: "Audio/drop.mp3"  //name of sound and the relative path to it, kann unbenannt werden

  };

  // Locations bzw. Backgrounds der Szenen
  export let locations = {
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
  export let characters = {
    Narrator: {
      name: ""
    },
    Player: {
      name: dataForSave.nameProtagonist,
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        radio: "Images/Items/radio.png",
      }
    },
    SurvivorM: {
      name: "Man",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        survivorM: "Images/Characters/survivorM.png",
      }
    },
    SurvivorF: {
      name: "Woman",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        survivorF: "Images/Characters/survivorF.png",
      }
    },
    SurvivorChild: {
      name: "Child",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        survivorChild: "Images/Characters/survivorChild.png"
      }
    },
    Zombie: {
      name: "Zombie",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        zombieM: "Images/Characters/zombieM.png",
        zombieF: "Images/Characters/zombieF.png",
        zombieChild: "Images/Characters/zombieChild.png"
      }
    },
    Soldier: {
      name: "Soldier",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        soldier: "Images/Characters/soldier.png"
      }
    },
    Others: {
      name: "Others",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        catPic: "Images/Items/cat_pic.png",
        golfClub: "Images/Items/golf_club.png",
        memory: "Images/Items/memory.png",
        // flower: "Images/Items/flower.png",       still unsure about this one
        // rations: "Images/Items/rations.png",      still unsure about this one
        // journal: "Images/Items/journal.png",      still unsure about this one
      }
    }
  }

  export function animation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("white", 1) },
      end: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("blue", 0) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    };
  }

  // Animation that rotates and scales
  export function getAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }


  // Menu shortcuts
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits",
    journal: "Journal"
  };

  let gameMenu: ƒS.Menu;

  // open entspricht Menü ist offen und false zu
  let menuIsOpen: boolean = true;

  // Funktionalitäten der Buttons
  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        console.log("credits");
      // credits(); //???
        break;
      case inGameMenuButtons.journal:
        journals();
        break;
    }
  }

  // Menu shortcuts
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        } else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
    buttonFunctionalities("Close");   // soll von Anfang an geschlossen sein
    // Scene Hierarchy
    let scenes: ƒS.Scenes = [
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
      { id: "rendezvous", scene: rendezvous, name: "Rendezvous"},
      // { id: "goWithLewis", scene: goWithLewis, name: "Go with Lewis"},
      { id: "goThroughSideStreet", scene: goThroughSideStreet, name: "Go through side street"},
      { id: "goThroughSchoolyard", scene: goThroughSchoolyard, name: "Go through schoolyard"},

      { id: "goodEnding1", scene: goodEnding1, name: "Good Ending 1"},
      { id: "goodEnding2", scene: goodEnding2, name: "Good Ending 2"},
      { id: "badEnding1", scene: badEnding1, name: "Bad Ending 1"},

      { id: "emptyScene", scene: empty, name: "END" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}