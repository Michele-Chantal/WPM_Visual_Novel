namespace Template {
    export async function goThroughMainStreet(): ƒS.SceneReturn {

        console.log("Scene: Go through main street");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.oldStreet);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "[On the main street]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(25, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "...");
        // insert Gespräch mit Lewis here (...)
        // they come across a zombie child that seems to be crying (sounds like growl-crying) and have to decide whether to give it mercy or leave it be


        // Choice: Kill the zombie child or don't
        let killZombieChild = {
            killZombieKid: "Side street",
            dontKillZombieKid: "Main street",
        };

        let choiceWhichStreet = await ƒS.Menu.getInput(killZombieChild, "choiceCSSClass");

        switch(choiceWhichStreet) {
            case killZombieChild.killZombieKid:
                console.log("Kill the zombie child.");
                await ƒS.Speech.tell(characters.Player, "...");
                
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                break;

            case killZombieChild.dontKillZombieKid:
                console.log("Leave the zombie child be.");
                await ƒS.Speech.tell(characters.Player, "The poor child...");

                break;

        }

        // They continue on and reach the edge of the city
        return "goodEnding1";

    }

}