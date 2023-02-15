namespace Remember {
    export async function testScene(): ƒS.SceneReturn {

        console.log("Test Scene");

        // await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        // ƒS.update();
        // await ƒS.Speech.tell(characters.Player, "Test");
        // await ƒS.Text.print("How to survive the Zombie Apocalypse: <br><br><br> - Avoid getting bitten -> Infection will spread like that <br><br> - Aim for the head -> Their brains are their weakness <br><br> - Use melee weapons if possible -> Sound attracts them <br><br> - Don't give up")
        // await ƒS.Text.print("Day 23 <br><br> It's been a few weeks since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. ");   
        // await ƒS.update();

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(80, 5000); // kontrolliert die Textgeschwindigkeit -> cpms = characters per miliisecond
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);

        ƒS.Speech.hide(); //hides the speech --> verhindert, dass man die speechbox sofort mit Beginn der Szene sieht
        await ƒS.Location.show(locations.oldKitchen);
        await ƒS.update();
        await ƒS.Character.show(characters.Player, characters.Player.pose.hurt, ƒS.positionPercent(30, 100));    // beim hovern wird Aufbau angezeigt
        await ƒS.update();  // immer nach Location-Wechsel
        // signalDelay3();
        await ƒS.Speech.tell(characters.Player, "Huh, what... Where am I? Ouch, my head...");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);

        await ƒS.Location.show(locations.kitchen);
        // await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge); //-> yes

        // await ƒS.update(transition.lines.duration, transition.lines.alpha, transition.lines.edge); //-> maybe

        // await ƒS.update(transition.hair.duration, transition.hair.alpha, transition.hair.edge); //-> dont know
        await ƒS.update();


        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);

        await ƒS.Speech.tell(characters.Player, "There is a journal here.");

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