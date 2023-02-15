namespace Remember {
    export async function badEnding(): ƒS.SceneReturn {

        console.log("Scene: Bad Ending");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForDamage").style.display = "none";

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.dark);
        await ƒS.update(transition.vignette.duration, transition.vignette.alpha, transition.vignette.edge);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "GAME OVER!");
        await ƒS.update(0.2);
        return "emptyScene";

    }

}