namespace Template {
    export async function followCallForHelp(): ƒS.SceneReturn {

        console.log("Scene: Follow the call for help");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.otherStreet);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "[At the garden center]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Narrator, "You round the corner to the west entrance and immediately notice four zombies clawing at the backdoor.");
        await ƒS.Speech.tell(characters.Player, "Just four zombies? I should be able to deal with them. Just need to find something elevated to \
        stay out of their reach, just to be safe.");
        await ƒS.Speech.tell(characters.Player, "I could climb on that hedge, should be high enough.");

        if (dataForSave.pickedUpBat == true) {
            await ƒS.Speech.tell(characters.Narrator, "You climb on the hedge and make sure that your footing is steady before you pull out your golf club.");
        } else if (dataForSave.pickedUpBat == false) {
            await ƒS.Speech.tell(characters.Narrator, "You climb on the hedge and make sure that your footing is steady before you pull out your knife.");
        }

        await ƒS.Speech.tell(characters.Player, "Hey, zombies! I'm over here.");
        await ƒS.Character.show(characters.Zombie, characters.Zombie.pose.zombieM, ƒS.positionPercent(70, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Zombie, "Huuuurgghhhhh.");
        await ƒS.Speech.tell(characters.Narrator, "All the zombies turn to your voice and begin to stumble their way towards you. Out of the \
        corner of your eyes you see the door open, but you keep your focus on the zombies.");

        if (dataForSave.pickedUpBat == true) {
            await ƒS.Speech.tell(characters.Narrator, "As soon as the first zombie is in reach, you swing your club and smash its head in. With a \
            satisfying 'thump' its body slumps to the ground. The next one uses that moment to grab for your leg, but you kick it away and deal \
            a few deals to its head.");
        } else if (dataForSave.pickedUpBat == false) {
            await ƒS.Speech.tell(characters.Narrator, "As soon as the first zombie is in reach, you stab your knife into its head. While you try \
            to pull your knife out of the first zombie's brain, the next one uses that moment to grab for your leg. But you manage to free your knife \
            in time to ram it through its head.");
        }
        await ƒS.Character.show(characters.Zombie, characters.Zombie.pose.zombieM, ƒS.positionPercent(70, 100));
        await ƒS.update(0.5);
        await ƒS.Character.hide(characters.Zombie);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "You turn to the last two zombies only to find them already dead on the ground with a blond haired \
        man standing over them, who is already staring at you.");
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.surprised, ƒS.positionPercent(70, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Rush? It's you.");
        await ƒS.Speech.tell(characters.Narrator, "You climb down from the hedge and walk closer to the man.");
        await ƒS.Speech.tell(characters.Player, "Who?");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.worried, ƒS.positionPercent(70, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Lewis, "But, I thought-");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Lewis, "Sorry, forget that. I'm Lewis, thanks for your help. Thought I'd have to risk fighting my way out of this. \
        Was real lucky that you decided to help me.");
        await ƒS.Speech.tell(characters.Player, "I'm " + dataForSave.nameProtagonist + ". And yea, you're welcome. Couldn't just ignore your call. \
        Because, you know, you needed help and...");
        await ƒS.Speech.tell(characters.Narrator, "You know you're rambling, but as soon as you saw him you felt like you had seen him somewhere before. \
        And you couldn't just tell him that a gut feeling made you come here.");
        await ƒS.Speech.tell(characters.Lewis, "I hope I didn't inconvenience you or seperate you from your group.");
        await ƒS.Speech.tell(characters.Player, "No, I'm... traveling alone.");
        await ƒS.Speech.tell(characters.Lewis, "Great!");
        await ƒS.Speech.tell(characters.Lewis, "I mean, I was planing to leave the city, I know of a cabin some way from the city. \
        It belonged to my uncle and he mostly used it to get away from the all the stress and work, so it should be stocked. If you don't have any \
        other plans you could come with me.");
        await ƒS.Speech.tell(characters.Player, "But you don't even know me.");
        await ƒS.Speech.tell(characters.Lewis, "You saved me. I know that you're a good person.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "...");
        await ƒS.Speech.tell(characters.Lewis, "So what do you say? Don't worry, it's not a ploy to lure you into a dark alley and steal your cool \
        hoodie or something like that. Sorry, bad joke.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Okay, I'll go with you.");
        await ƒS.Speech.tell(characters.Lewis, "Alright! Then what are we waiting for? Let's go.")

        await ƒS.Character.hide(characters.Lewis);
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        return "goWithLewis";

    }

}