namespace Template {
    export async function goWithLewis(): ƒS.SceneReturn {

        console.log("Scene: Go with Lewis");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.oldStreet);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "[Further in the City]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(25, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "Show the way, Lewis.");
        // insert Gespräch mit Lewis here (about the past and that he knows about a place they can go to)
        await ƒS.Speech.tell(characters.Player, "Alright, which way do you want to take? We could go through a side street or the main street. \
        Both will take us to the edge of the city. It's your call.");


        // Choice: Which way to go
        let whichStreet = {
            takeSideStreet: "Side street",
            takeMainStreet: "Main street",
        };

        let choiceWhichStreet = await ƒS.Menu.getInput(whichStreet, "choiceCSSClass");

        switch(choiceWhichStreet) {
            case whichStreet.takeSideStreet:
                console.log("Take the side street.");
                await ƒS.Speech.tell(characters.Player, "Let's take the side street.");

                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "goThroughSideStreet";
                break;

            case whichStreet.takeMainStreet:
                console.log("Take the main street.");
                await ƒS.Speech.tell(characters.Player, "Let's go through the main street.");

                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "goThroughMainStreet";
                break;

        }

    }

}