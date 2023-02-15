namespace Remember {
    export async function firstScene(): ƒS.SceneReturn {

        console.log("First Scene");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();

        ƒS.Sound.fade(sound.lost, 0.6, 0.1, true);

        await ƒS.Location.show(locations.apartmentOutside);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "A sound from your right draws your attention just as you leave the apartment.");
        await ƒS.Speech.tell(characters.Player, "Hello?")
        await ƒS.Character.show(characters.Zombie, characters.Zombie.pose.zombieM, ƒS.positionPercent(70, 100));
        await ƒS.update(0.2);
        ƒS.Sound.fade(sound.zombie, 0.2, 0.1, false);
        await ƒS.Speech.tell(characters.Zombie, "Uaaaaaghhrrrr");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.surprised, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "A Zombie! Crap, it's in my way. What should I do?")
    

        // Kill zombie or don't
        let killZombie = { 
            shootIt: "Shoot it",
            knifeIt: "Kill it with a knife",
        };

        let choiceKillZombie = await ƒS.Menu.getInput(killZombie, "choiceCSSClass");

        // switch case for when specific answer is picked
        switch(choiceKillZombie) {
            case killZombie.shootIt:
                console.log("Shoot the Zombie");
                ƒS.Sound.fade(sound.gunshot, 0.1, 0.1, false);
                ƒS.Sound.fade(sound.bodyFall, 0.1, 0.1, false);
                await ƒS.Speech.tell(characters.Narrator, "You shoot the zombie but you hear even more shuffling and groaning from all around you. A moment later more zombies appear in front of you.");
                await ƒS.Speech.tell(characters.Narrator, "Suddenly you're grabbed from a zombie behind you while another scratches your arm.");
                ƒS.Sound.fade(sound.grunting, 0.2, 0.1, false);
                ƒS.Sound.fade(sound.hit, 0.2, 0.1, false);
                dataForSave.damageScore += 15;
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                await ƒS.Character.animate(characters.Player, characters.Player.pose.hurt2, playerGetsHit());
                await ƒS.Character.show(characters.Others, characters.Others.pose.red, ƒS.positionPercent(50, 100));
                await ƒS.update(0.2);
                await ƒS.Character.hide(characters.Others);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Player, "Ugh, dammit! I have to run.");
                await ƒS.Character.hide(characters.Zombie);
                await ƒS.Character.hide(characters.Player);
                await ƒS.Location.show(locations.outdoorStairs);
                ƒS.Sound.fade(sound.running, 0.2, 0.1, false);
                await ƒS.update(transition.lines.duration, transition.lines.alpha, transition.lines.edge);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Narrator, "");
                break;

            case killZombie.knifeIt:
                console.log("Knife the Zombie");
                ƒS.Sound.fade(sound.hitWithKnife, 0.2, 0.1, false);
                ƒS.Sound.fade(sound.bodyFall, 0.1, 0.1, false);
                await ƒS.Speech.tell(characters.Narrator, "The Zombie goes down with a quiet 'thud' and you hold your breath to hear if others are nearby.");
                await ƒS.Speech.tell(characters.Narrator, "But the hallway stays quiet.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(30, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Player, "Good. Now, let's go.")
                await ƒS.Character.hide(characters.Zombie);
                await ƒS.Character.hide(characters.Player);
                await ƒS.Location.show(locations.outdoorStairs);
                ƒS.Sound.fade(sound.running, 0.2, 0.1, false);
                await ƒS.update(transition.lines.duration, transition.lines.alpha, transition.lines.edge);
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Narrator, "");
                break;

        }

        await ƒS.Location.show(locations.railroadCrossing);
        ƒS.Sound.fade(sound.running, 0.2, 0.1, false);
        await ƒS.update(transition.lines.duration, transition.lines.alpha, transition.lines.edge);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "Out of sheer luck you find a railroad crossing with a map next to it.");
        await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "A map, perfect!");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.thinking, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Now, let's see...");
        await ƒS.Speech.tell(characters.Player, "I'm here. And the military base should be... here.");
        await ƒS.Speech.tell(characters.Player, "I'm nearly on the other side of the city. But a little less than 8 hours should be more than enough.");
        await ƒS.Speech.tell(characters.Player, "I could go through the residential or the commercial area. Hmmm...");

        // Choice: Which area should player go to
        let whichArea = {
            residentialArea: "Go through the residential area.",
            commercialArea: "Go through the commercial area.",
        };

        let choiceWhichArea = await ƒS.Menu.getInput(whichArea, "choiceCSSClass");

        switch(choiceWhichArea) {
            case whichArea.residentialArea:
                console.log("Go through residential area.");
                await ƒS.Speech.tell(characters.Player, "I'll go through the residential area. Maybe I'll find something useful there.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.lost, 0, 0.1, false);
                return "residentialArea";
                break;

            case whichArea.commercialArea:
                console.log("Go through commercial area.");
                await ƒS.Speech.tell(characters.Player, "I'll go through the commercial area. Maybe there'll be something useful left.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.lost, 0, 0.1, false);
                return "commercialArea";
                break;

        }

    }

}