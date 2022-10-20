namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");

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
    beachDay: {   // Kann unbenannt werden, Name der Location
      name: "Beach Day",
      backgrounds: ""
    }
  };

  // Die Charaktere
  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: ""
    },
    jamie: {
      name: "Jamie",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Pfad des Bildes",
        happy: "",
        upset: ""
      }
    }
  }


  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}