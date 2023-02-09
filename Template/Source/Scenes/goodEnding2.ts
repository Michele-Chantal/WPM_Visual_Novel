namespace Template {
    export async function goodEnding2(): ƒS.SceneReturn {

        console.log("Scene: Good Ending 2");

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.cabinInForest);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "Several weeks later");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral2, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "It's peaceful here and I haven't seen a single zombie in weeks.");
    
        return "emptyScene";

    }

}