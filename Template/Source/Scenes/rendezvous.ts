namespace Template {
    export async function rendezvous(): ƒS.SceneReturn {

        console.log("Scene: Rendezvous");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.base);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.update(0.2);
        // await ƒS.Speech.tell(characters.Narrator, "[At Military Camp Delta]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "I made it to rendezvous in time.");
        await ƒS.Speech.tell(characters.Narrator, "You get in line behind all the other survivors that are all being checked before being led inside \
        one of the two planes still there. When you reach the front you're greeted by a woman who greets you with a tired smile.");
        await ƒS.Character.show(characters.Soldier, characters.Soldier.pose.soldier, ƒS.positionPercent(70, 100));
        await ƒS.Speech.tell(characters.Soldier, "Are you armed?");
        await ƒS.Speech.tell(characters.Narrator, "You nod and reluctantly place all your weapons in her outstretched hand.");
        await ƒS.Speech.tell(characters.Soldier, "Thank you and don't worry, you won't need them anymore.");
        await ƒS.Speech.tell(characters.Narrator, "After that you're sent into a medical tent where you are checked for bites and your injuries \
        are treated as best as possible. You were the last survivor to arrive, so they start packing up as you put your hoodie back on.");
        await ƒS.Speech.tell(characters.Narrator, "When you leave the tent the soldier that greeted you is waiting for you.");
        await ƒS.Speech.tell(characters.Soldier, "It's nice to have another soldier with us.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.surprised, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "How did you know?");
        await ƒS.Speech.tell(characters.Soldier, "I've been around long enough to notice the small things.");
        await ƒS.Speech.tell(characters.Soldier, "And your hoodie gave me the confirmation.");
        await ƒS.Speech.tell(characters.Player, "Oh.");
        await ƒS.Speech.tell(characters.Soldier, "We won't have to fight anymore, where we're going. It will all be in the past. I can't wait to \
        forget all about that and start a new life.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "Yes, the past...");
        await ƒS.Speech.tell(characters.Soldier, "Come on, let's go. Before they decide to fly without us.");
        await ƒS.Speech.tell(characters.Narrator, "Together you board the plane that will take you to your new life. A new start.");

        await ƒS.Character.hide(characters.Player);
        await ƒS.Character.hide(characters.Soldier);
        await ƒS.update(0.2);
        return "goodEnding2";

    }

}