namespace Remember {
    export async function goThroughSideStreet(): ƒS.SceneReturn {

        console.log("Scene: Go through side street.");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.stars, 0.5, 0.1, true);
        await ƒS.Location.show(locations.sideStreet);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.neutral, ƒS.positionPercent(70, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Lewis, "We just have to go through here and another street then we're out of the city.");
        await ƒS.Speech.tell(characters.Player, "How do you know the cabin will be safe?");
        await ƒS.Speech.tell(characters.Lewis, "It's not marked on any maps and quite a ways from the nearest road. Unless someone stumbled onto \
        it out of sheer luck or on accident, it'll be our safest bet.");
        await ƒS.Speech.tell(characters.Lewis, "And even if zombies are there it won't be that many. There's not much there for them, so they'll \
        mostly ignore it.");
        await ƒS.Speech.tell(characters.Player, "I see.");
        await ƒS.Speech.tell(characters.Player, "You know, you never told my why you called me 'Rush'.");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Lewis, "It's actually kinda silly, really. One day off-base we were watching a movie about superheroes. The \
        main characters were this duo, they were complete opposites but they worked together like they were two halves of a whole. And out of joke \
        we started calling each other as their hero names and it kinda just stuck.");
        await ƒS.Speech.tell(characters.Lewis, "One of them was this quiet reserved guy, that prefered working \
        alone, but cared about his team. Like you. That was Rush. And the other one was this outgoing, happy-go-lucky guy, that got along with \
        everyone. Kinda like me. That was-");
        await ƒS.Speech.tell(characters.Player, "Adamas?");
        await ƒS.Speech.tell(characters.Lewis, "Yes, Exactly! Do you remember?");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Bits and pieces, but I do remember watching the movie with you. You kept talking about it for weeks \
        after that. It was kind of endearing.");
        await ƒS.Speech.tell(characters.Lewis, "Don't act like you didn't enjoy it too. You loved it! And spending time with me.");
        await ƒS.Speech.tell(characters.Player, "Yeah.");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.surprised, ƒS.positionPercent(70, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Lewis, "Huh?");
        await ƒS.Speech.tell(characters.Player, "I never really said it back then and that was a mistake. So I'm sorry and thank you.");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Lewis, "I'm so glad to have met you. Back then and now.");
        await ƒS.Speech.tell(characters.Player, "...");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.surprised, ƒS.positionPercent(25, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.Character.show(characters.SurvivorF, characters.SurvivorF.pose.survivorF, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Narrator, "About halfway through the street you see a woman running towards you. Her clothes are torn\
        and bloody, and she is cradling her bleeding arm against her chest, but she appears to be human.");
        ƒS.Sound.fade(sound.stars, 0, 0.1, false);
        ƒS.Sound.fade(sound.alone, 0.5, 0.1, true);
        await ƒS.Speech.tell(characters.SurvivorF, "Please, help!");
        await ƒS.Speech.tell(characters.Narrator, "Lewis catches her as she reaches you and sways on her feet.");
        await ƒS.Speech.tell(characters.Lewis, "What's wrong?");
        await ƒS.Speech.tell(characters.SurvivorF, "I think i got bitten by one of those-those-");
        await ƒS.Speech.tell(characters.Narrator, "Her wide fearful eyes settle on you.");
        await ƒS.Speech.tell(characters.SurvivorF, "Please, I don't want to hurt anyone! I don't want to be one of them.. Please, k-kill me, before \
        I turn! I beg you!");

        // Choice: Kill the infected woman or don't
        let killInfectedWoman = {
            killHer: "Kill her.",
            dontKillHer: "Don't kill her.",
        };

        let choiceKillInfectedWoman = await ƒS.Menu.getInput(killInfectedWoman, "choiceCSSClass");

        switch (choiceKillInfectedWoman) {
            case killInfectedWoman.killHer:
                console.log("Kill the infected woman.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(30, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Player, "Okay, you can rest now.");
                await ƒS.Speech.tell(characters.SurvivorF, "Thank you..");
                await ƒS.Character.hide(characters.SurvivorF);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.SurvivorF, characters.SurvivorF.pose.survivorF, ƒS.positionPercent(50, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Narrator, "You take the shaking woman into your arms and pull out your knife out of her sight. \
                Your body almost recognizes the motion as natural as you place it at the back of her neck at the base of her skull and with a sharp \
                plunge you sever her spinal cord.");
                ƒS.Sound.fade(sound.hitWithKnife, 0.1, 0.1, false);
                await ƒS.Speech.tell(characters.Narrator, "Her body slumps against you and the shaking ceases. Gently you place her against the \
                nearest wall and fully close her eyes. Then you pack away your knife.");
                await ƒS.Character.hide(characters.SurvivorF);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.worried, ƒS.positionPercent(70, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Player, "...");
                await ƒS.Speech.tell(characters.Lewis, "...");
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.worried, ƒS.positionPercent(60, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Lewis, "You did the right thing. You let her die as a human.");
                await ƒS.Speech.tell(characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await ƒS.Speech.tell(characters.Lewis, "Come on, let's go.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.update(0.2);
                break;

            case killInfectedWoman.dontKillHer:
                console.log("Don't kill the infected woman.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(30, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Player, "I can't... I'm sorry.");
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.sad, ƒS.positionPercent(50, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Narrator, "The woman slumps further into Lewis' arms, defeated.");
                await ƒS.Speech.tell(characters.SurvivorF, "At least don't let me die or turn alone, please.");
                await ƒS.Speech.tell(characters.Lewis, "Of course we'll stay.");
                await ƒS.Speech.tell(characters.Narrator, "Lewis guides her towards the wall.");
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.Character.hide(characters.SurvivorF);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.SurvivorF, characters.SurvivorF.pose.survivorF, ƒS.positionPercent(55, 100));
                await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.worried, ƒS.positionPercent(75, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Lewis, "Here, sit down. That'll be more comfortable.");
                await ƒS.Speech.tell(characters.Narrator, "Time passes as Lewis starts talking about a children's story he used to love as a kid, \
                but you're not really listening as you watch the life leaving the woman. When her head finally slumps forward unmoving, Lewis stops.");
                await ƒS.Speech.tell(characters.Narrator, "A few seconds pass and her body stays motionless and your gaze finds Lewis'. But that was a mistake.");
                await ƒS.Speech.tell(characters.Narrator, "In the short time you take your eyes off of her she lunges forward and manages to tear \
                through your pants and draw blood.");
                if (dataForSave.damageScore == 40) {
                    ƒS.Sound.fade(sound.grunting, 0.2, 0.1, false);
                    ƒS.Sound.fade(sound.hit, 0.2, 0.1, false);
                    dataForSave.damageScore += 10;
                    await ƒS.Character.hide(characters.Lewis);
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.Narrator, "You don't manage to stop her as she lunges at you for a second time and even Lewis \
                    can't reach you in time.");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    await ƒS.Character.animate(characters.Player, characters.Player.pose.hurt2, playerGetsHit());
                    await ƒS.Character.show(characters.Others, characters.Others.pose.red, ƒS.positionPercent(50, 100));
                    await ƒS.update(0.2);
                    await ƒS.Character.hide(characters.SurvivorF);
                    await ƒS.update(0.2);
                    await ƒS.Character.show(characters.SurvivorF, characters.SurvivorF.pose.survivorF, ƒS.positionPercent(55, 100));
                    await ƒS.Character.hide(characters.Others);
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.Lewis, "NO!");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.Character.hide(characters.SurvivorF);
                    await ƒS.update(0.2);
                    ƒS.Sound.fade(sound.death, 0.2, 0.1, false);
                    await ƒS.Speech.tell(characters.Narrator, "Her teeth sink into your neck and as she pulls back you can feel your skin rip. \
                    Your screams soon turn into a choked gurgle as your mouth fills with blood. And your last thought before the whole world goes \
                    dark is...");
                    await ƒS.Speech.tell(characters.Player, "<i>I don't want to die...</i>");
                    ƒS.Sound.fade(sound.bodyFall, 0.1, 0.1, false);
                    ƒS.Sound.fade(sound.stars, 0, 0.1, false);
                    await ƒS.Character.hide(characters.SurvivorF);
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    return "badEnding";
                } else {
                    ƒS.Sound.fade(sound.grunting, 0.2, 0.1, false);
                    ƒS.Sound.fade(sound.hit, 0.2, 0.1, false);
                    dataForSave.damageScore += 10;
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    await ƒS.Character.animate(characters.Player, characters.Player.pose.hurt2, playerGetsHit());
                    await ƒS.Character.show(characters.Others, characters.Others.pose.red, ƒS.positionPercent(50, 100));
                    await ƒS.update(0.2);
                    await ƒS.Character.hide(characters.SurvivorF);
                    await ƒS.Character.hide(characters.Lewis);
                    await ƒS.update(0.2);
                    await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.surprised, ƒS.positionPercent(75, 100));
                    await ƒS.Character.show(characters.SurvivorF, characters.SurvivorF.pose.survivorF, ƒS.positionPercent(55, 100));
                    await ƒS.Character.hide(characters.Others);
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.Player, "Ugh!");
                    ƒS.Sound.fade(sound.hitWithKnife, 0.2, 0.1, false);
                    ƒS.Sound.fade(sound.bodyFall, 0.1, 0.1, false);
                    await ƒS.Speech.tell(characters.Narrator, "The zombie is pulled off of you and you only see Lewis ram a knife into her head and shortly\
                    after the body slumps to the ground. Lewis is at your side in a second, looking at your injury.");
                    await ƒS.Character.hide(characters.SurvivorF);
                    await ƒS.Character.hide(characters.Lewis);
                    await ƒS.update(0.2);
                    await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.worried, ƒS.positionPercent(60, 100));
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.Lewis, "Are you okay?!");
                    await ƒS.Speech.tell(characters.Player, "Yes, it's just a scratch...");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(30, 100));
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.Narrator, "Lewis helps to patch you up as good as he can and then takes your hands in his.");
                    await ƒS.Speech.tell(characters.Lewis, "Don't beat yourself up over it, it was a difficult decision.");
                    await ƒS.Speech.tell(characters.Lewis, "I would have hesitated too, because there's a difference between killing on the \
                    battlefield, killing a zombie and killing someone innocent who got unlucky.");
                    await ƒS.Speech.tell(characters.Player, "...");
                    await ƒS.Speech.tell(characters.Narrator, "Lewis lets you be for a minute, but then he gently pulls you along.");
                    await ƒS.Speech.tell(characters.Lewis, "Come on, let's go.");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.Character.hide(characters.Lewis);
                    await ƒS.update(0.2);
                    break;
                }
        }

        await ƒS.Location.show(locations.base);
        await ƒS.update(transition.paintblobs.duration, transition.paintblobs.alpha, transition.paintblobs.edge);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.neutral, ƒS.positionPercent(60, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "After some more walking you two reach the edge of the city. The destruction here is less severe \
        here. Some broken cars and corpses are strewn across the road, but in contrast to the city it seems almost peaceful. Just a bit more and \
        your new life can begin. Soon you can rest.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        ƒS.Sound.fade(sound.alone, 0, 0.1, false);
        return "goodEnding1";

    }

}