namespace Remember {
    export async function callForHelp(): ƒS.SceneReturn {

        console.log("Scene: Call for help");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.lost, 0.6, 0.1, true);
        await ƒS.Location.show(locations.otherStreet);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.update(0.2);
        ƒS.Sound.fade(sound.radio, 0.2, 0.1, true);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Radio, "'<i>Hello, can anyone hear me?</i>'");

        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.thinking, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "Hmm?");
        await ƒS.Character.animate(characters.Radio, characters.Radio.pose.radio, moveItemInFrame());
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Radio, "'<i>If anyone can hear this, please, I need some help.</i>'");
        await ƒS.Speech.tell(characters.Radio, "'<i>I'm at the garten center on Maple Avenue, the west back entrance. Zombies are trying to break into the room \
        I'm holed up in but I can't leave, because it's not looking better outside.</i>'");
        await ƒS.Speech.tell(characters.Radio, "'<i>Whoever can hear me, please, hurry. I don't know how much longer I can hold out.</i>'");
        await ƒS.Speech.tell(characters.Radio, "'<i>I repeat. I'm at the garten center on Maple Avenue, the west back entrance.</i>'");
        await ƒS.Speech.tell(characters.Radio, "'<i>There's a group of zombies just by the back entrance, so if someone is coming, please be careful. Over.</i>'");
        await ƒS.Character.hide(characters.Radio);
        await ƒS.update(0.2);
        ƒS.Sound.fade(sound.radio, 0, 0.1, false);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Should I go help? But it's in the opposite direction I need to go. If I'll follow the call I won't make it to the rendezvous \
        in time.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "In my mind I <i>know</i> should ignore the call, but why do I feel my body hesitating?");
        await ƒS.Speech.tell(characters.Player, "Shit, I gotta decide.");

        // Choice: Follow the call for help or ignore it
        let radioCallForHelp = {
            followRadioCall: "Follow the call for help.",
            ignoreRadioCall: "Ignore call for help.",
        };

        let choiceradioCallForHelp = await ƒS.Menu.getInput(radioCallForHelp, "choiceCSSClass");

        switch (choiceradioCallForHelp) {
            case radioCallForHelp.followRadioCall:
                console.log("Follow the call for help.");               
                await ƒS.Speech.tell(characters.Player, "Something is telling me to follow the call.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.lost, 0, 0.1, false);
                return "followCallForHelp";
                break;

            case radioCallForHelp.ignoreRadioCall:
                console.log("Ignore the call for help.");
                await ƒS.Speech.tell(characters.Player, "I have to keep going. If I try to help now, I won't make it in time.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.lost, 0, 0.1, false);
                return "ignoreCallForHelp";
                break;

        }

    }

}