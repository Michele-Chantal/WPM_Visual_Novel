namespace Template {
    export async function helpingTheSurvivors(): ƒS.SceneReturn {

        console.log("Scene: Helping the survivors");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.oldStreet);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "[Somewhere outside]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "Oh, let's help the survivors");
        await ƒS.update(0.5);

        if (dataForSave.pickedUpRations == false) {
            // Player has to kill them with the knife and gets hurt in the process
            await ƒS.Character.hide(characters.Player);
            await ƒS.update(0.2);
            await ƒS.Character.show(characters.Player, characters.Player.pose.hurt2, ƒS.positionPercent(30, 100));
            await ƒS.update(0.2);
            await ƒS.Speech.tell(characters.Player, "Shit.");
            dataForSave.damageScore += 10;
        }

        // Player manages to kill the zombies with the help of the group and they thank him
        // They then ask him if he has any food or water for them, because they have children with them and haven't eaten in days





        if (dataForSave.pickedUpRations == true) {
            // Choice: Give rations or not
            let giveThemRations = {
                giveRations: "'Here, you can have my rations.'",
                dontGiveRationsLie: "'Sorry, I have nothing left.' (Lie)",
            };

            let choiceGiveThemRations = await ƒS.Menu.getInput(giveThemRations, "choiceCSSClass");

            switch (choiceGiveThemRations) {
                case giveThemRations.giveRations:
                    console.log("Give your rations to the group.");
                    await ƒS.Speech.tell(characters.Player, "Here, you can have my rations.");
                    dataForSave.pickedUpRations = false;
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    return "callForHelp";
                    break;
    
                case giveThemRations.dontGiveRationsLie:
                    console.log("Lie and don't give your rations to the group.");
                    await ƒS.Speech.tell(characters.Player, "Sorry, I have nothing left");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    return "callForHelp";
                    break;
            }
        } else if (dataForSave.pickedUpRations == false) {
            let giveThemRations = {
                dontGiveRationsTruth: "'Sorry, I have nothing left.' (Truth)"
            };

            let choiceGiveThemRations = await ƒS.Menu.getInput(giveThemRations, "choiceCSSClass");

            switch (choiceGiveThemRations) {
                case giveThemRations.dontGiveRationsTruth:
                    console.log("Don't give your rations to the group.");
                    await ƒS.Speech.tell(characters.Player, "Sorry, I have nothing left");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    return "callForHelp";
                    break;
            }
        }

    }

}