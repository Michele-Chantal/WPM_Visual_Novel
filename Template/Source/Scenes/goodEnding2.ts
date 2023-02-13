namespace Template {
    export async function goodEnding2(): ƒS.SceneReturn {

        console.log("Scene: Good Ending 2");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForDamage").style.display = "none";

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.beach);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "Several weeks later");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral2, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "It's peaceful here and I haven't seen a single zombie in weeks.");
        // some more text and code
        // Another journal entry, maybe two or three



        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "GOOD ENDING 2!");
        await ƒS.update(0.2);
    
        return "emptyScene";

    }

}