namespace Template {
    export async function goodEnding1(): ƒS.SceneReturn {

        console.log("Scene: Good Ending 1");

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.cabinInForest);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "Several weeks later");
        await ƒS.Character.show(characters.Player, characters.Player.pose.happy2, ƒS.positionPercent(35, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "...");
        
        await ƒS.Text.print("Day <br><br> It's peaceful here and not many zombies find their way all the way out here. <br><br> My \
        memories are gradually returning and Lewis tries to fill in the blanks as good as he can. He has been a big help, not only in remembering \
        but giving us a new place to call home and giving me a reason to keep fighting. <br><br> I remembered that I love fishing and we got lucky \
        with a big lake not far from here. So fish is our main ingredient at the moment. Most of the time I cook, but Lewis helps from time to time \
        He pretends that he's not had enough of fish yet, but I know he wouldn't mind a change. I hope the stuff we planted will be ready to harvest \
        soon, then I could surprise him with his favourite dish. It's also getting time for another city run soon. Maybe we'll get lucky this time and \
        find a functioning car. I don't mind the walk, but it can get tiring pretty quickly. Not that Lewis minds. He always loved walking. I wonder \
        where he gets all the energy from...");
        dataForSave.novelEnding2 = true;

        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.happy2, ƒS.positionPercent(65, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Lewis, "Hey Rush, you ready to go yet? You promised to teach me how to fish.");
        await ƒS.Speech.tell(characters.Player, "Yeah, I'm done. Let's go.");

        await ƒS.Character.hide(characters.Player);
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "GOOD ENDING 1!");
        await ƒS.update(0.2);
        return "emptyScene";

    }

}