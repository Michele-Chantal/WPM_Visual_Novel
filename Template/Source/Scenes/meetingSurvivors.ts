namespace Template {
    export async function meetingSurvivors(): ƒS.SceneReturn {

        console.log("Scene: Meeting survivors");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.oldStreet);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Narrator, "You walk through the streets and surprisingly only come across a few zombies you can avoid. \
        As you walk by another side street you hear and see why that is.");
        await ƒS.Speech.tell(characters.Narrator, "A group of zombies is trying to claw their way into a small shop.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.thinking, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "What are all the zombies doing there?");
        // Add more code here: Player sees the group of survivors that are defending themselves against a group of zombies
        // The survivors are inside an old abandoned shop and the zombies are trying to break inside to get to them
        // One of them sees the player and calls to them for help
        await ƒS.Character.show(characters.Survivor, characters.Survivor.pose.survivorM, ƒS.positionPercent(70, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Survivor, "Please, you have to help us! I beg you! There are children in here!")

        // Choice: Help the group of survivors or don't
        let groupNeedsHelp = {
            helpGroup: "Help them.",
            ignoreGroup: "Ignore them.",
        };

        let choiceGroupNeedsHelp = await ƒS.Menu.getInput(groupNeedsHelp, "choiceCSSClass");

        switch(choiceGroupNeedsHelp) {
            case groupNeedsHelp.helpGroup:
                console.log("Help the group.");
                await ƒS.Speech.tell(characters.Player, "I have to help them.");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "helpingTheSurvivors";
                break;

            case groupNeedsHelp.ignoreGroup:
                console.log("Ignore the group");
                await ƒS.Speech.tell(characters.Player, "I don't have time for this.");
                await ƒS.Character.hide(characters.Survivor);
                await ƒS.Speech.tell(characters.Narrator, "You turn away from the group and their calls for help and continue on. Just as you \
                make to round the next corner you hear glass break and the calls turn into screams of terror and pain. Amidst the agonizing \
                screams you can hear the voice of the man that had called out to you curse you and cry out why you didn't help.");
                await ƒS.Speech.tell(characters.Narrator,"You don't turn back around to see the zombies storming into the shop like starving \
                animals, as they rip apart whoever they can reach the fastest. But just as soon as the screams started they're quiet again \
                and the only sound that remains is of the zombies enjoying their feast.");
                await ƒS.Speech.tell(characters.Player, "...");
                await ƒS.Character.hide(characters.Player);
                await ƒS.update(0.2);
                return "callForHelp";
                break;

        }

    }

}