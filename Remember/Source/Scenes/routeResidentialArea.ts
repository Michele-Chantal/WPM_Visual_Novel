namespace Remember {
    export async function routeResidentialArea(): ƒS.SceneReturn {

        console.log("Residential area");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.kitchen);
        ƒS.Sound.fade(sound.lost, 0.6, 0.1, true);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "You enter an abandoned apartment that looks like it hasn't been stepped into in months.");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "This place looks like it was untouched by the apocalypse. Guess the residents never \
        came back after it started.");
        await ƒS.Speech.tell(characters.Player, "Hopefully there'll be some still-edible stuff I can take.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "You rummage through the cabinets and cupboards in search for rations and find a bottle of \
        water and three granola bars.");
        dataForSave.pickedUpRations = true;
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "That should be enough to last to the rendezvous point.");
        await ƒS.Speech.tell(characters.Player, "Let's see what else is here.");
        ƒS.Speech.hide();
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.3);
        await ƒS.Location.show(locations.livingRoom);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "You search through the rest of the apartment and find a golf club in the storage room.");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "A golf club. Could be useful if I want to keep the zombies away from me. Is there anything else?");
        dataForSave.pickedUpBat = true;
        await ƒS.Speech.tell(characters.Narrator, "You notice some photos on one of the cabinets.");
        await ƒS.Speech.tell(characters.Player, "I wonder who lived here before.");
        await ƒS.Character.animate(characters.Others, characters.Others.pose.catPic, moveItemInFrame());
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "A cat. Cute.");
        await ƒS.Speech.tell(characters.Player, "Did I have any pets?");
        await ƒS.Character.hide(characters.Others);
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.confused, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "I think.. I had one?");
        await ƒS.Speech.tell(characters.Player, "But what was it?");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Ah yes I remember. I had a cat when I was younger.");
        await ƒS.Speech.tell(characters.Player, "Her name was Loona. She was so small even as she got older. I can almost feel her claws, she \
        loved playing.");
        await ƒS.Speech.tell(characters.Player, "I should write that down.");
        await ƒS.Text.print("I remembered some things about my past. I had a pet when I was younger, a cat. Her name was Loona and she \
        was this feisty little ball of black and white fur. I still have countless little scars all over my hands and arms, 'cause she loved \
        playing. She wasn't really a cuddler most of the time, but I remember waking up to her cuddled up on the foot of my bed sometimes. <br><br> \
        She was my first and only pet and I'll continue to remember her fondly.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Okay, time to go. I've still got some ground to cover");

        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.lost, 0, 0.1, false);
        return "meetingSurvivors";
    }

}