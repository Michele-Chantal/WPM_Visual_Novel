namespace Template {
    export async function callForHelp(): ƒS.SceneReturn {

        console.log("Scene: Call for help");

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
        await ƒS.Speech.tell(characters.Player, "Oh, a call for help through the radio");
    

        // Choice: Follow the call for help or ignore it
        let followCall = {
            residentialArea: "Ignore call for help.",
            commercialArea: "Follow the call for help.",
        };

        // Ignore call for help and continue to meetingpoint

        let choiceFollowCall = await ƒS.Menu.getInput(followCall, "choiceCSSClass");

        switch(choiceFollowCall) {
            case followCall.residentialArea:
                console.log("Follow the call for help.");
                await ƒS.Speech.tell(characters.Player, "Something is teling me to follow the call.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "followCallForHelp";
                break;

            case followCall.commercialArea:
                console.log("Ignore the call for help.");
                await ƒS.Speech.tell(characters.Player, "I have to keep going. If I try to help now, I won't make it in time.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "ignoreCallForHelp";
                break;

        }

    }

}