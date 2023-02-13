namespace Template {
    export async function goodEnding2(): ƒS.SceneReturn {

        console.log("Scene: Good Ending 2");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForDamage").style.display = "none";

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.beach);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "Several weeks later");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral2, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "It's peaceful here and I haven't seen a single zombie in weeks.");
        await ƒS.Speech.tell(characters.Player, "The first few days were quite hectic. We all had to get settled in on this island and it was hard \
        to shake the mindset that danger lurks around every corner. Sometimes the peace and quiet is even making me jittery.");
        await ƒS.Speech.tell(characters.Player, "I'm still missing a big part of my memory, but apparently I knew how to \
        fish. So that and cooking are the parts I'm responsible for in our community. At least it's keeping me busy.");
        await ƒS.Speech.tell(characters.Player, "I still think about my past life sometimes, even though they told us to forget all about it. \
        Not that it's hard to forget about a past you can't even remember. But I decided to stop writing my journal. No use remembering an old life.");
        await ƒS.Speech.tell(characters.Player, "I'd rather put all my concentration on this new life and do everything I can to keep it this happy \
        and peaceful.");

        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "GOOD ENDING 2!");
        await ƒS.update(0.2);
    
        return "emptyScene";

    }

}