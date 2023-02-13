declare namespace Template {
    function journals(): Promise<void>;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        damageScore: number;
        scoreForDamage: string;
        novelPage1: boolean;
        novelRadio: boolean;
        novelFavFood: boolean;
        novelPet: boolean;
        novelSurvivors: boolean;
        novelLewis: boolean;
        novelNoLewis: boolean;
        novelEnding2: boolean;
        pickedUpRations: boolean;
        pickedUpBat: boolean;
        pickedMeterScene: boolean;
        pickedAnimationScene: boolean;
        pickedChoice: boolean;
    };
    let transition: {
        paintblobs: {
            duration: number;
            alpha: string;
            edge: number;
        };
        lines: {
            duration: number;
            alpha: string;
            edge: number;
        };
        vignette: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        drop: string;
    };
    let locations: {
        oldKitchen: {
            name: string;
            background: string;
        };
        apartmentOutside: {
            name: string;
            background: string;
        };
        outdoorStairs: {
            name: string;
            background: string;
        };
        railroadCrossing: {
            name: string;
            background: string;
        };
        restaurant: {
            name: string;
            background: string;
        };
        kitchen: {
            name: string;
            background: string;
        };
        oldStreet: {
            name: string;
            background: string;
        };
        schoolyard: {
            name: string;
            background: string;
        };
        school: {
            name: string;
            background: string;
        };
        cafeteria: {
            name: string;
            background: string;
        };
        sideStreet: {
            name: string;
            background: string;
        };
        livingRoom: {
            name: string;
            background: string;
        };
        otherStreet: {
            name: string;
            background: string;
        };
        cabinInForest: {
            name: string;
            background: string;
        };
        dark: {
            name: string;
            background: string;
        };
        base: {
            name: string;
            background: string;
        };
        beach: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Player: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                neutral2: string;
                happy: string;
                happy2: string;
                sad: string;
                sad2: string;
                angry: string;
                surprised: string;
                confused: string;
                hurt: string;
                hurt2: string;
                thinking: string;
            };
        };
        Lewis: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                neutral2: string;
                happy: string;
                happy2: string;
                sad: string;
                sad2: string;
                angry: string;
                surprised: string;
                worried: string;
                zombie: string;
            };
        };
        Radio: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                radio: string;
            };
        };
        SurvivorM: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                survivorM: string;
            };
        };
        SurvivorF: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                survivorF: string;
            };
        };
        SurvivorChild: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                survivorChild: string;
            };
        };
        Zombie: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                zombieM: string;
                zombieF: string;
                zombieChild: string;
            };
        };
        Soldier: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                soldier: string;
            };
        };
        Others: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                catPic: string;
                golfClub: string;
                memory: string;
                red: string;
            };
        };
    };
    function animation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function credits(): Promise<void>;
}
declare namespace Template {
    function badEnding1(): ƒS.SceneReturn;
}
declare namespace Template {
    function callForHelp(): ƒS.SceneReturn;
}
declare namespace Template {
    function empty(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function followCallForHelp(): ƒS.SceneReturn;
}
declare namespace Template {
    function goThroughSchoolyard(): ƒS.SceneReturn;
}
declare namespace Template {
    function goThroughSideStreet(): ƒS.SceneReturn;
}
declare namespace Template {
    function goWithLewis(): ƒS.SceneReturn;
}
declare namespace Template {
    function goodEnding1(): ƒS.SceneReturn;
}
declare namespace Template {
    function goodEnding2(): ƒS.SceneReturn;
}
declare namespace Template {
    function helpingTheSurvivors(): ƒS.SceneReturn;
}
declare namespace Template {
    function ignoreCallForHelp(): ƒS.SceneReturn;
}
declare namespace Template {
    function meetingSurvivors(): ƒS.SceneReturn;
}
declare namespace Template {
    function prologue(): ƒS.SceneReturn;
}
declare namespace Template {
    function rendezvous(): ƒS.SceneReturn;
}
declare namespace Template {
    function routeCommercialArea(): ƒS.SceneReturn;
}
declare namespace Template {
    function routeResidentialArea(): ƒS.SceneReturn;
}
declare namespace Template {
    function testScene(): ƒS.SceneReturn;
}
