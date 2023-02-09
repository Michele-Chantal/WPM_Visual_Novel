namespace Template {
    export async function goThroughSideStreet(): ƒS.SceneReturn {

        console.log("Scene: Go through side street");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.oldStreet);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "[In a side street]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(25, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "We just have to go through here and another street then we're out of the city.");
        await ƒS.Speech.tell(characters.Player, "How do you know the cabin will be safe?");
        await ƒS.Speech.tell(characters.Player, "It's not marked on any maps and quite a ways from the nearest road. Unless someone stumbled onto \
        it out of sheer luck or on accident, it'll be our safest bet.");
        await ƒS.Speech.tell(characters.Player, "And even if zombies are there it won't be that many. There's not much there for them, so they'll \
        mostly ignore it.");
        // insert Gespräch mit Lewis here (...)
        await ƒS.Character.show(characters.Player, characters.Player.pose.surprised, ƒS.positionPercent(20, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.surprised, ƒS.positionPercent(40, 100));
        await ƒS.Character.show(characters.Survivor, characters.Survivor.pose.survivorM, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Narrator, "About halfway through the street you see a woman running towards you. Her clothes are torn\
        and bloody, and she is cradling her bleeding arm against her chest, but she appears to be human.");
        await ƒS.Speech.tell(characters.Survivor, "Please, help!");
        await ƒS.Speech.tell(characters.Narrator, "Lewis catches her as she reaches you and sways on her feet.");
        await ƒS.Speech.tell(characters.Lewis, "What's wrong?");
        await ƒS.Speech.tell(characters.Survivor, "I think i got bitten by one of those-those-");
        await ƒS.Speech.tell(characters.Narrator, "Her wide fearful eyes settle on you.");
        await ƒS.Speech.tell(characters.Survivor, "Please, I don't want to hurt anyone! I don't want to be one of them.. Please, k-kill me, before \
        I turn! I beg you!");

        // Choice: Kill the infected woman or don't
        let killInfectedWoman = {
            killHer: "Kill her.",
            dontKillHer: "Don't kill her.",
        };

        let choiceKillInfectedWoman = await ƒS.Menu.getInput(killInfectedWoman, "choiceCSSClass");

        switch(choiceKillInfectedWoman) {
            case killInfectedWoman.killHer:
                console.log("Kill the infected woman.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(25, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Player, "You can rest now.");
                await ƒS.Speech.tell(characters.Survivor, "Thank you..");
                await ƒS.Speech.tell(characters.Narrator, "You take the shaking woman into your arms and pull out your knife out of her sight. \
                Your body almost recognizes the motion as natural as you place it at the back of her neck at the base of her skull and with a sharp \
                plunge you sever her spinal cord.");
                await ƒS.Speech.tell(characters.Narrator, "Her body slumps against you and the shaking ceases. Gently you place her against the \
                nearest wall and fully close her eyes. Then you pack away your knife.");
                await ƒS.Character.hide(characters.Survivor);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.sad, ƒS.positionPercent(75, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Player, "...");
                await ƒS.Speech.tell(characters.Lewis, "...");
                await ƒS.Speech.tell(characters.Lewis, "You did the right thing. You let her die as a human.");
                // maybe a memory from the war as the player killed their first person
                // await ƒS.Character.hide(characters.Player);
                // await ƒS.update(0.2);
                // await ƒS.Character.show(characters.Player, characters.Player.pose.confused, ƒS.positionPercent(75, 100));
                // await ƒS.update(0.2);
                // await ƒS.Text.print("Another memory, but this one is from my time in the war. [...]");
                await ƒS.Speech.tell(characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(25, 100));
                await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.sad, ƒS.positionPercent(55, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Lewis, "Come on, let's go.");
                break;

            case killInfectedWoman.dontKillHer:
                console.log("Don't kill the infected woman.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(25, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Player, "I can't...");
                // Player can't kill her so she asks them to at least stay at her side until she dies or turns
                // They stay with her and it seems that she died but then she attacks the player and hurts him
                dataForSave.damageScore += 10;
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Player, characters.Player.pose.hurt, ƒS.positionPercent(25, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Player, "Ugh!");
                await ƒS.Speech.tell(characters.Narrator, "The zombie is pulled off of you and you only see Lewis ram a knife into her head and shortly\
                after the body slumps to the ground. Lewis is at your side in a second, looking at your injury.");
                await ƒS.Character.hide(characters.Survivor);
                await ƒS.update(0.2);

                await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.sad, ƒS.positionPercent(75, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Lewis, "Are you okay?!");
                await ƒS.Speech.tell(characters.Player, "Yes, it's just a scratch...");
        
                await ƒS.Character.hide(characters.Player);
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(25, 100));
                await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.sad, ƒS.positionPercent(55, 100));
                await ƒS.update(0.2);
                await ƒS.Speech.tell(characters.Narrator, "Lewis helps to patch you up as good as he can and then takes your hands in his.");
                await ƒS.Speech.tell(characters.Lewis, "Don't beat yourself up over it, it was a difficult decision.");
                await ƒS.Speech.tell(characters.Lewis, "I would have hesitated too, because there's a difference between killing on the \
                battlefield, killing a zombie and killing someone innocent who got unlucky.");
                await ƒS.Speech.tell(characters.Player, "...");
                // maybe a memory from the war as the player got hurt and got saved by Lewis
                // await ƒS.Character.hide(characters.Player);
                // await ƒS.update(0.2);
                // await ƒS.Character.show(characters.Player, characters.Player.pose.confused, ƒS.positionPercent(75, 100));
                // await ƒS.update(0.2);
                // await ƒS.Text.print("Another memory, but this one is from my time in the war. [...]");
                await ƒS.Speech.tell(characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await ƒS.Speech.tell(characters.Lewis, "Come on, let's go.");
                break;
        }

        // They continue on, leave the side street and reach the edge of the city
        await ƒS.Character.hide(characters.Player);
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        return "goodEnding2";

    }

}