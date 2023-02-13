namespace Template {
    export async function goodEnding1(): ƒS.SceneReturn {

        console.log("Scene: Good Ending 1");

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.oldStreet);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "Several weeks later");
        await ƒS.Character.show(characters.Player, characters.Player.pose.happy2, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "It's peaceful here and not many zombies find their way all the way out here.");
        // some more text and code
        // One last journal entry
    


        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "GOOD ENDING 1!");
        await ƒS.update(0.2);
        return "emptyScene";

    }

}