namespace Template {
    export async function goThroughSchoolyard(): ƒS.SceneReturn {

        console.log("Scene: Go through schoolyard");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.schoolyard);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "[In a schoolyard]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(25, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.neutral, ƒS.positionPercent(75, 100));
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
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.happy, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Lewis, "It's actually kinda silly, really. One day off-base we were watching a movie about superheroes. The \
        main characters were this duo, they were complete opposites but they worked together like they were two halves of a whole. And out of joke \
        we started calling each other as their hero names and it kinda just stuck. One of them was this quiet reserved guy, that prefered working \
        alone, but cared about his team. Like you. That was Rush. And the other one was this outgoing, happy-go-lucky guy, that got along with \
        everyone. Kinda like me. That was-");
        await ƒS.Speech.tell(characters.Player, "[...]?");
        await ƒS.Speech.tell(characters.Lewis, "Yes, Exactly! Do you remember?");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Bits and pieces, but I do remember watching the movie with you. You kept talking about it for weeks \
        after that. It was kind of endearing.");
        await ƒS.Speech.tell(characters.Lewis, "Don't act like you didn't enjoy it too. You loved it! And spending time with me.");
        await ƒS.Speech.tell(characters.Player, "Yeah.");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.surprised, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Lewis, "Huh?");
        await ƒS.Speech.tell(characters.Player, "I never really said it back then and that was a mistake. So I'm sorry and thank you.");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.happy, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Lewis, "I'm so glad to have met you. Back then and now.");
        await ƒS.Speech.tell(characters.Player, "...");
        
        await ƒS.Location.show(locations.school);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "When you reach the school you hear something that sounds like crying.");

        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Shh, do you hear that?");

        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.surprised, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Lewis, "That sounds like crying, but something feels off. It's coming from the cafeteria.");

        await ƒS.Location.show(locations.school);
        await ƒS.update(0.2);

        await ƒS.Character.hide(characters.Player);
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.surprised, ƒS.positionPercent(20, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.surprised, ƒS.positionPercent(30, 100));
        await ƒS.Character.show(characters.Zombie, characters.Zombie.pose.zombieChild, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Lewis, "A child...?");
        await ƒS.Speech.tell(characters.Lewis, "What should we do?");

        // Choice: Kill the zombie child or don't
        let killZombieChild = {
            killZombieKid: "Kill it",
            dontKillZombieKid: "Don't kill it",
        };

        let choiceKillZombieChild = await ƒS.Menu.getInput(killZombieChild, "choiceCSSClass");

        switch(choiceKillZombieChild) {
            case killZombieChild.killZombieKid:
                console.log("Kill the zombie child.");
                await ƒS.Speech.tell(characters.Player, "...");
                await ƒS.Speech.tell(characters.Narrator, "");
                // Player kills the zombie-child and places the body against the wall
                await ƒS.Speech.tell(characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await ƒS.Speech.tell(characters.Lewis, "Come on, let's go.");
                break;

            case killZombieChild.dontKillZombieKid:
                console.log("Leave the zombie child be.");
                await ƒS.Speech.tell(characters.Player, "The poor child...");
                // Player can't kill the child and just watches it for a minute as it stumbles around 
                await ƒS.Speech.tell(characters.Narrator, "Lewis lets you be for a minute, but then he takes hold of your hand and gently pulls \
                you along.");
                await ƒS.Speech.tell(characters.Lewis, "Come on, let's go.");
                break;

        }

        await ƒS.Speech.tell(characters.Narrator, "After some more walking you two reach the edge of the city. The destruction here is less severe. \
        Some broken cars and corpses are strewn across the road, but in contrast to the city it seems almost peaceful. Just a bit more and \
        your new life can begin. Soon you can rest.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        return "goodEnding1";

    }

}