namespace Template {
    export async function testScene(): ƒS.SceneReturn {

        console.log("Test Scene");

        // await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        // ƒS.update();
        // await ƒS.Speech.tell(characters.Player, "Test");
        await ƒS.Text.print("How to survive the Zombie Apocalypse: <br><br><br> - Avoid getting bitten -> Infection will spread like that <br><br> - Aim for the head -> Their brains are their weakness <br><br> - Use melee weapons if possible -> Sound attracts them <br><br> - Don't give up")
        // await ƒS.Text.print("Day 23 <br><br> It's been a few weeks since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. ");   
        // await ƒS.update();


        // Welche Entscheidungsmöglichkeiten gibt es 
        let decision = { // nachher passend umbenennen
            iSayYes: "Yes",
            iSayOk: "Okay",
            iSayNo: "No",
            iSayBla: "Bla"
        };

        let dialogueElement = await ƒS.Menu.getInput(decision, "choiceCSSClass");


        // if specific answer was picked in a choice, changes dialogue or choices available
        let pickedYes: boolean;
        let pickedNo: boolean;
        let pickedBla: boolean;
        // let pickedOk: boolean;

        // if Yes, Bla or No was picked, run specific code
        if (pickedYes || pickedBla || pickedNo) {
            delete decision.iSayBla;
        }


        // switch case for when specific answer is picked
        switch(dialogueElement) {
            case decision.iSayYes:
                // continue path here
                console.log("Option Yes");
                dataForSave.damageScore += 20;
                await ƒS.Speech.tell(characters.Player, "Yes");
                novelPage1: true
                // return "SecondScene";        //bei return springt es auf die angegebene Szene, id verwenden
                break;
            case decision.iSayNo:
                // continue path here
                console.log("Option No");
                await ƒS.Speech.tell(characters.Player, "No")
                break;
            case decision.iSayOk:
                // continue path here
                console.log("Option Ok");
                await ƒS.Speech.tell(characters.Player, "Ok")
                break;
            case decision.iSayBla:  
                // continue path here
                console.log("Option Bla");
                await ƒS.Speech.tell(characters.Player, "Bla")
                break;

        }



    }

}