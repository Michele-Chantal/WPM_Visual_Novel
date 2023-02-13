namespace Template {
    export async function goWithLewis(): ƒS.SceneReturn {

        console.log("Scene: Go with Lewis");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000); 

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.oldStreet);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "[Further in the City]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(25, 100));
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Lewis, "This way.");
        await ƒS.Speech.tell(characters.Player, "...");
        await ƒS.Speech.tell(characters.Player, "You called me 'Rush'. Why?");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.sad, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Lewis, "So you really don't remember?");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.confused, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "I woke up this morning in an apartment I didn't know and the only things I could remember were my \
        name and that I was a soldier. I've been slowly remembering random little things, but most of my past is still blank.");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Lewis, "...");
        await ƒS.Speech.tell(characters.Lewis, "We served together in the military. I joined three years after you, when I was 19 and you were 23 \
        at that time. That was 9 years ago, which makes you 32 years old now.");
        await ƒS.Speech.tell(characters.Lewis, "Tell me if you want me to stop.");
        await ƒS.Speech.tell(characters.Narrator, "You just nod as you try to process the new information.");
        await ƒS.Speech.tell(characters.Lewis, "At first we didn't talk much, you liked to keep to yourself. You looked after everyone in your \
        own ways and we respected that. But some of that changed after I got badly hurt in battle. I got shot in the shoulder and you risked your \
        life to pull me back to safety. After that I never strayed far from your side.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "Oh, that's right, you kept following me around like a lost puppy.");
        await ƒS.Character.hide(characters.Lewis);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Lewis, characters.Lewis.pose.happy, ƒS.positionPercent(75, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Lewis, "Because you finally started opening up after that! And I realized how nice it was to be at your side.");
        await ƒS.Speech.tell(characters.Player, "Can you wait for a moment?");
        await ƒS.Speech.tell(characters.Lewis, "Of course");
        await ƒS.Text.print("I just met someone from my past, his name is Lewis. We served together in the military and after he got shot in the \
        shoulder in a battle I saved him and after that we became close, because he kept following me around. I guess I kind of just warmed up \
        to him and it became normal to seek each other out.");
        dataForSave.novelLewis = true;
        await ƒS.Speech.tell(characters.Lewis, "Alright, which way do you want to take? We could go through a side street or through the school. \
        Both will take us to the edge of the city. It's your call.");


        // Choice: Which way to go
        let whichWayWithLewis = {
            takeSideStreet: "Side street",
            goThroughSchool: "School",
        };

        let choicewhichWayWithLewis = await ƒS.Menu.getInput(whichWayWithLewis, "choiceCSSClass");

        switch(choicewhichWayWithLewis) {
            case whichWayWithLewis.takeSideStreet:
                console.log("Take the side street.");
                await ƒS.Speech.tell(characters.Player, "Let's take the side street.");
                await ƒS.Speech.tell(characters.Lewis, "Alrighty!");
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "goThroughSideStreet";
                break;

            case whichWayWithLewis.goThroughSchool:
                console.log("Go through schoolyard.");
                await ƒS.Speech.tell(characters.Player, "Let's go through the school.");
                await ƒS.Speech.tell(characters.Lewis, "Alrighty!");
                await ƒS.Character.hide(characters.Lewis);
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "goThroughSchoolyard";
                break;

        }

    }

}