namespace Remember {
    export async function ignoreCallForHelp(): ƒS.SceneReturn {

        console.log("Scene: Ignore the call for help");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.otherStreet);
        ƒS.Sound.fade(sound.lost, 0.5, 0.1, true);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "I'm sorry whoever you are, but I can't risk my only chance.");

        if (dataForSave.pickedUpRations == false) {
            await ƒS.Speech.tell(characters.Narrator, "You keep walking for some minutes, when suddenly your head feels like you're underwater \
            and your sight gets blurry for a moment. You stumble and are just barely able to catch yourself on a wall but while doing so your hand \
            manages to scratch against a stray protruding nail there.");
            ƒS.Sound.fade(sound.grunting, 0.2, 0.1, false);
            ƒS.Sound.fade(sound.hit, 0.2, 0.1, false);
            dataForSave.damageScore += 5;
            await ƒS.Character.show(characters.Others, characters.Others.pose.red, ƒS.positionPercent(50, 100));
            await ƒS.Character.hide(characters.Player);
            await ƒS.update(0.2);
            await ƒS.Character.show(characters.Player, characters.Player.pose.hurt2, ƒS.positionPercent(30, 100));
            await ƒS.Character.hide(characters.Others);
            await ƒS.update(0.2);
            await ƒS.Speech.tell(characters.Player, "Ah, fuck.");
            await ƒS.Speech.tell(characters.Player, "I didn't notice how dehydrated I was.");
            await ƒS.Character.hide(characters.Player);
            await ƒS.update(0.2);
            await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
            await ƒS.update(0.2);
            await ƒS.Speech.tell(characters.Player, "I should bandage the wound. Don't want it to get infected.");
        }

        await ƒS.Speech.tell(characters.Narrator, "You keep walking for a while and come across a few zombies. You alternate between taking them \
        down stealthily or just sneaking by undetected.")
        await ƒS.Speech.tell(characters.Player, "Huh?");
        ƒS.Sound.fade(sound.zombie2, 0.1, 0.1, false);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.zombie, ƒS.positionPercent(70, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "This zombie is different from the others, you just know it. But it takes you a moment to pinpoint \
        exactly why, as a memory hits you like a bucket of cold water.");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Others, characters.Others.pose.memory, ƒS.positionPercent(50, 100));
        await ƒS.update(0.2);
        ƒS.Sound.fade(sound.dawn, 0.5, 0.1, true);
        ƒS.Sound.fade(sound.lost, 0, 0.1, false);
        await ƒS.Speech.tell(characters.Narrator, "The face of the zombie- the man, bloody, almost as much as in the present. You drag him behind a \
        wall with one hand, your gun forgotten in the other. He got shot in the shoulder and you're trying to stop the bleeding.");
        await ƒS.Speech.tell(characters.Narrator, "You remember his name, <i>Lewis</i>, and telling him to stay awake. You remember him clinging \
        to your arm like you were his lifeline.");
        await ƒS.Speech.tell(characters.Narrator, "For a short moment you wonder if he survived, but you <i>know</i> that he did, because after that \
        he decided to stick by your side and you became almost inseperable. The man who got your back, your best friend, your...");
        await ƒS.Character.hide(characters.Others);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(30, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.zombie, ƒS.positionPercent(70, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "No...");
        await ƒS.Speech.tell(characters.Player, "I should have followed my gut. But I didn't and now he's gone.");

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
                await ƒS.Speech.tell(characters.Narrator, "You know you don't have much time, but you can't just let him keep wandering around like that \
                He wouldn't have wanted to hurt anybody.");

                // Choice: How to kill him
                let whichWeapon = {
                    withKnife: "The knife.",
                    withGun: "The Gun.",
                };

                let choicewhichWeapon = await ƒS.Menu.getInput(whichWeapon, "choiceCSSClass");

                switch (choicewhichWeapon) {
                    case whichWeapon.withKnife:
                        console.log("Kill him with the knife.");
                        await ƒS.Speech.tell(characters.Player, "I am so sorry...");
                        await ƒS.Speech.tell(characters.Narrator, "You take out your knife and get close to Lewis. But you're scared you won't make \
                        it to the rendezvous in time so you make a mistake and accidentally kick an empty bottle that was lying just behind the zombie.")
                        if (dataForSave.damageScore == 45) {
                            await ƒS.Speech.tell(characters.Narrator, "Zombie-Lewis turns around and before you can react he goes for your neck.");
                            ƒS.Sound.fade(sound.grunting, 0.2, 0.1, false);
                            ƒS.Sound.fade(sound.hit, 0.2, 0.1, false);
                            dataForSave.damageScore += 5;
                            await ƒS.Character.hide(characters.Player);
                            await ƒS.update(0.2);
                            await ƒS.Character.animate(characters.Player, characters.Player.pose.hurt2, playerGetsHit());
                            await ƒS.Character.show(characters.Others, characters.Others.pose.red, ƒS.positionPercent(50, 100));
                            await ƒS.update(0.2);
                            await ƒS.Character.hide(characters.Others);
                            await ƒS.update(0.2);
                            ƒS.Sound.fade(sound.death, 0.2, 0.1, false);
                            await ƒS.Speech.tell(characters.Player, "AHHH!");
                            await ƒS.Character.hide(characters.Player);
                            await ƒS.update(0.2);
                            await ƒS.Speech.tell(characters.Narrator, "His teeth sink into your neck and as he pulls back you can feel your skin rip. \
                            Your screams soon turn into a choked gurgle as your mouth fills with blood. And your last thought before the whole world goes\
                            dark is...");
                            await ƒS.Speech.tell(characters.Player, "<i>I was so close...</i>");
                            ƒS.Sound.fade(sound.bodyFall, 0.1, 0.1, false);
                            await ƒS.Character.hide(characters.Lewis);
                            await ƒS.Character.hide(characters.Player);
                            await ƒS.update(0.2);
                            return "badEnding";
                        } else {
                            ƒS.Sound.fade(sound.hitWithKnife, 0.2, 0.1, false);
                            ƒS.Sound.fade(sound.bodyFall, 0.1, 0.1, false);
                            await ƒS.Speech.tell(characters.Narrator, "Zombie-Lewis turns around and manages to scratch open your arm, before you finally plunge the \
                            knife deep into his head. His body slumps to the ground.");
                            await ƒS.Character.hide(characters.Lewis);
                            await ƒS.update(0.2);
                            ƒS.Sound.fade(sound.grunting, 0.2, 0.1, false);
                            ƒS.Sound.fade(sound.hit, 0.2, 0.1, false);
                            dataForSave.damageScore += 5;
                            await ƒS.Character.show(characters.Others, characters.Others.pose.red, ƒS.positionPercent(50, 100));
                            await ƒS.Character.hide(characters.Player);
                            await ƒS.update(0.2);
                            await ƒS.Character.show(characters.Player, characters.Player.pose.hurt2, ƒS.positionPercent(30, 100));
                            await ƒS.Character.hide(characters.Others);
                            await ƒS.update(0.2);
                            await ƒS.Speech.tell(characters.Player, "Shit.");
                        }

                        await ƒS.Character.hide(characters.Player);
                        await ƒS.update(0.2);
                        await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(30, 100));
                        await ƒS.update(0.2);
                        await ƒS.Speech.tell(characters.Player, "...");
                        await ƒS.Speech.tell(characters.Narrator, "You simply stare at him for a moment, before you remember that you should to leave.");
                        await ƒS.Speech.tell(characters.Narrator, "With one last look at Lewis you continue on towards the rendezvous.");
                        await ƒS.Speech.tell(characters.Narrator, "When you're sure that you're far enough away you pull out your journal.");
                        await ƒS.Speech.tell(characters.Player, "He deserves to be remembered.");
                        await ƒS.Text.print("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
                        We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him, he stuck by my side and \
                        over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
                        the only thing left from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
                        dataForSave.novelNoLewis = true;
                        break;

                    case whichWeapon.withGun:
                        console.log("Kill him with the gun.");
                        await ƒS.Speech.tell(characters.Player, "I am so sorry...");
                        await ƒS.Speech.tell(characters.Narrator, "You take out your gun and train it towards his head with slightly shaking hands. \
                        You hesitate and suddenly his gaze turns to you and for split seconds it almost seems like he recognizes you. But then he \
                        charges towards you with a snarl and you pull the trigger just before he can come too close.");
                        ƒS.Sound.fade(sound.gunshot, 0.1, 0.1, false);
                        ƒS.Sound.fade(sound.bodyFall, 0.1, 0.1, false);
                        await ƒS.Character.hide(characters.Lewis);
                        await ƒS.update(0.2);
                        await ƒS.Speech.tell(characters.Narrator, "His lifeless body hits the ground and you simply stare at him for a moment, before \
                        you remember that you have to leave, because every zombie in the vicinity will be lured here by the gunshot.");
                        ƒS.Sound.fade(sound.running, 0.2, 0.1, false);
                        await ƒS.Speech.tell(characters.Narrator, "With one last look at Lewis you run into the direction of the rendezvous.");
                        await ƒS.Speech.tell(characters.Narrator, "When you're sure that you're far enough away you pull out your journal.");
                        await ƒS.Speech.tell(characters.Player, "He deserves to be remembered.");
                        await ƒS.Text.print("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
                        We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him, he stuck by my side and \
                        over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
                        the only thing left from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
                        dataForSave.novelNoLewis = true;
                        break;
                }


                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.dawn, 0, 0.1, false);
                return "rendezvous";
                break;

            case killLewis.dontKillHim:
                console.log("Don't kill Zombie-Lewis.");
                await ƒS.Speech.tell(characters.Player, "I can't kill him...");
                await ƒS.Speech.tell(characters.Player, "Please forgive me...");
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Narrator, "With one last look at Lewis you run into the direction of the rendezvous.");
                await ƒS.Speech.tell(characters.Narrator, "When you're sure that you're far enough away you pull out your journal.");
                await ƒS.Speech.tell(characters.Player, "He at least deserves that I remember him.");
                await ƒS.Text.print("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
                We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him he, stuck by my side and \
                over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
                the only thing left from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
                dataForSave.novelNoLewis = true;
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.dawn, 0, 0.1, false);
                return "rendezvous";
                break;

        }

    }

}