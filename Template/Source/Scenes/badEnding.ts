namespace Template {
    export async function badEnding1(): ƒS.SceneReturn {

        console.log("Scene: Bad Ending 1");

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.dark);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "GAME OVER!");
        await ƒS.update(0.2);
        return "emptyScene";

    }

}