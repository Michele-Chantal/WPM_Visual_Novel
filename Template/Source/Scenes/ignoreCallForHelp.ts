namespace Template {
    export async function ignoreCallForHelp(): ƒS.SceneReturn {

        console.log("Scene: Ignore the call for help");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.oldStreet);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "[Somewhere outside]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "I'll ignore the call for help.");

        if (dataForSave.pickedUpRations == false) {
            // Player gets dizzy and stumbles, scratches his arm on some protruding metal
            await ƒS.Character.hide(characters.Player);
            await ƒS.update(0.2);
            await ƒS.Character.show(characters.Player, characters.Player.pose.hurt2, ƒS.positionPercent(30, 100));
            await ƒS.update(0.2);
            await ƒS.Speech.tell(characters.Player, "Ah, fuck.");
            dataForSave.damageScore += 5;
        }

        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);

        // Sees Lewis as a zombie and remembers him from his time in the military

        // Choice: Kill the Zombie or leave it
        let killLewis = {
            killHim: "Give him mercy.",
            dontKillHim: "Leave him be.",
        };

        let choiceKillLewis = await ƒS.Menu.getInput(killLewis, "choiceCSSClass");

        switch (choiceKillLewis) {
            case killLewis.killHim:
                console.log("Kill Zombie-Lewis.");
                await ƒS.Speech.tell(characters.Player, "I should give him mercy...");

                // Choice: How to kill him
                let whichWeapon = {
                    withKnife: "The knife.",
                    withGun: "The Gun.",
                };

                let choicewhichWeapon = await ƒS.Menu.getInput(whichWeapon, "choiceCSSClass");

                switch (choicewhichWeapon) {
                    case whichWeapon.withKnife:
                        console.log("Kill him with the knife.");
                        await ƒS.Speech.tell(characters.Player, "I'm sorry...");
                        // Player tries to kill Zombie-Lewis with the knife but they have to get up close to do it
                        // Either he is sloppy because it takes more time and gets hurt or he remembers something when he is close enough to really see Lewis' face
                        dataForSave.damageScore += 5;
                        await ƒS.Character.hide(characters.Player);
                        await ƒS.update(0.2);
                        await ƒS.Character.show(characters.Player, characters.Player.pose.hurt2, ƒS.positionPercent(30, 100));
                        await ƒS.update(0.2);
                        await ƒS.Speech.tell(characters.Player, "Shit.");
                        // Manages to kill Zombie-Lewis
                        await ƒS.Character.hide(characters.Player);
                        await ƒS.update(0.2);
                        await ƒS.Character.show(characters.Player, characters.Player.pose.hurt2, ƒS.positionPercent(30, 100));
                        await ƒS.update(0.2);
                        await ƒS.Speech.tell(characters.Player, "He deserves to be remembered.");
                        await ƒS.Text.print("Memory about Lewis + extra memory");
                        dataForSave.novelMilitaryTimeExtra = true;
                        break;

                    case whichWeapon.withGun:
                        console.log("Kill him with the gun.");
                        await ƒS.Speech.tell(characters.Player, "I'm sorry...");
                        // Player shoots Zombie-Lewis in the head and leaves before other zombies can arrive
                        await ƒS.Speech.tell(characters.Player, "He deserves to be remembered.");
                        await ƒS.Text.print("Memory about Lewis");
                        dataForSave.novelMilitaryTime = true;
                        break;
                }

                
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "rendezvous";
                break;

            case killLewis.dontKillHim:
                console.log("Don't kill Zombie-Lewis.");
                await ƒS.Speech.tell(characters.Player, "I can't kill him...");
                await ƒS.Speech.tell(characters.Player, "But he deserves that I at least remember him.");
                await ƒS.Text.print("Memory about Lewis");
                dataForSave.novelMilitaryTime = true;
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "rendezvous";
                break;

        }

    }

}