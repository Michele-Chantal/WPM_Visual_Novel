namespace Template {
    export async function prologue(): ƒS.SceneReturn {

        console.log("Prologue");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(40, 5000); // kontrolliert die Textgeschwindigkeit -> cpms = characters per miliisecond
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);

        ƒS.Speech.hide(); //hides the speech --> verhindert, dass man die speechbox sofort mit Beginn der Szene sieht
        await ƒS.Location.show(locations.oldKitchen);

        await ƒS.Character.show(characters.Player, characters.Player.pose.hurt, ƒS.positionPercent(30, 100));    // beim hovern wird Aufbau angezeigt
        await ƒS.update();  // immer nach Location-Wechsel
        // signalDelay3();
        await ƒS.Speech.tell(characters.Player, "Huh, what... Where am I? Ouch, my head...");
        await ƒS.Speech.tell(characters.Player, "What happened?");

        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);

        await ƒS.Speech.tell(characters.Player, "There is a journal here.");
        await ƒS.Text.print("<strong> How to survive the Zombie Apocalypse: </strong><br><br><br> - Avoid getting bitten => Infection will \
        spread like that <br><br> - Aim for the head => Their brains are their weakness <br><br> - Use melee weapons if possible => Sound \
        attracts them <br><br> - Don't give up");
        await ƒS.Text.print("Day 13, <br><br> It's been a few days since the apocalypse started. Everyday it's getting harder to find survivors \
        and I'm starting to lose hope. Is this going to be the end of humanity?"); 
        await ƒS.Text.print("Day 26, <br><br> I lost all contact to the military headquarters. Were they overrun or is something interferring \
        with the radios? I really hope it's the latter... I don't know how good our chances are if we lost the military.");
        await ƒS.Text.print("Day 45, <br><br> I don't know if I can keep doing this...");
        
        await ƒS.update();
        await ƒS.Character.hide(characters.Player);
        await ƒS.Speech.tell(characters.Player, "A zombie apocalypse? Ah yes, I remember now. But who...");
        await ƒS.Speech.tell(characters.Player, "Wait, I know. My name is ");
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        characters.Player.name = dataForSave.nameProtagonist;
        await ƒS.Speech.tell(characters.Player, "I should write everything I know down. I don't want to forget again.");
        await ƒS.Text.print("I suddenly woke up in the apocalypse and I have trouble remembering how it all started or who I really am. \
        I faintly remember being in the military, but not for how long or if I left it before everything went to hell. <br><br><br><br> \
        Name: " + dataForSave.nameProtagonist + "<br><br> Age: ?? <br><br> Occupation: Soldier?/Ex-Soldier? ");
        dataForSave.novelPage1 = true;
        await ƒS.Speech.tell(characters.Player, "Age...?");
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.confused, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Dammit my mind's all fuzzy.");
        await ƒS.Speech.tell(characters.Radio, "'<i>...surv...hea...tary...extrac...</i>'");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.surprised, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "What's that?");
        await ƒS.Speech.tell(characters.Narrator, "You notice a radio, a gun and a knife lying next to you. You take everything and try to tune the radio.");
        await ƒS.Speech.tell(characters.Radio, "'<i>To all survivors who can hear this, the military is organizing one last extraction of survivors to a safe zone.</i>'");
        await ƒS.Speech.tell(characters.Radio, "'<i>The rendezvous point is the military base 'Delta' just on the northern edge of the city. The last plane will leave in 8 hours. \
        I repeat: The rendezvous point is military base 'Delta' just on the northern edge of the city. The last plane will leave in 8 hours.</i>'");
        dataForSave.novelRadio = true;
        console.log(dataForSave.novelRadio)
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Northern edge? I'll have to find a map. I hope I can make it there on time.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update();

        ƒS.Speech.clear(); // löscht den Text und danach kann man die speech box verstecken mit hide

    }

}