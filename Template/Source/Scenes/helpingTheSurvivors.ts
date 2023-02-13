namespace Template {
    export async function helpingTheSurvivors(): ƒS.SceneReturn {

        console.log("Scene: Helping the survivors");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.oldStreet);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);

        if (dataForSave.pickedUpBat == false) {
            await ƒS.Speech.tell(characters.Narrator, "You pull out your knife and quietly sneak towards the closest zombie. You manage to take \
            this one and the next two down without a hitch, but as you sneak up on the last it turns around and charges towards you.");
            await ƒS.Speech.tell(characters.Narrator, "With the knife you don't have enough reach to take it down before it's close enough to barrel \
            into you with such a force that you fall to the ground. And despite the hoodie you can feel your elbow scrape across the ground, drawing blood.");
            await ƒS.Character.hide(characters.Player);
            dataForSave.damageScore += 10;
            await ƒS.Character.show(characters.Others, characters.Others.pose.red, ƒS.positionPercent(50, 100));
            await ƒS.update(0.2);
            await ƒS.Character.show(characters.Player, characters.Player.pose.hurt2, ƒS.positionPercent(30, 100));
            await ƒS.Character.hide(characters.Others);
            await ƒS.update(0.2);
            await ƒS.Speech.tell(characters.Player, "Shit.");
            
            await ƒS.Speech.tell(characters.Narrator, "But you manage to ram your knife into its head before it can take a bite out of you.");
        } else if (dataForSave.pickedUpBat == true) {
            await ƒS.Speech.tell(characters.Narrator, "You pull out your knife and quietly sneak towards the closest zombie. You manage to take \
            this one and the next two down without a hitch, but instead of risking to sneak towards the last one, you take out your golf club and smash \
            its head in.");
            await ƒS.Speech.tell(characters.Narrator, "You wait a few more seconds to see if more zombies will appear, but when none come you nod to \
            the group and they carefully open the doors.");
        }

        await ƒS.Character.show(characters.SurvivorM, characters.SurvivorM.pose.survivorM, ƒS.positionPercent(65, 100));
        await ƒS.Character.show(characters.SurvivorChild, characters.SurvivorChild.pose.survivorChild, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.SurvivorM, "Oh, thank you, without you we would have been- Thank you.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Are you all okay?");
        await ƒS.Speech.tell(characters.SurvivorM, "Yes, thanks to you. We've been stuck in that shop for hours now. I don't think the doors \
        would have held on for much longer.");
        await ƒS.Speech.tell(characters.SurvivorM, "You've already done so much for us, but I just must ask. Do you maybe have something to eat and \
        drink for us?");
        await ƒS.Speech.tell(characters.SurvivorM, "There are some children in our group and they're getting weaker without anything to eat.");
        await ƒS.Speech.tell(characters.SurvivorM, "Our group mostly consists of women, old people or children and the men still haven't come back \
        from their supply run. Just a little bit would be sufficient to give us enough time until they are back.");


        if (dataForSave.pickedUpRations == true) {
            // Choice: Give rations or not
            let giveThemRations = {
                giveRations: "'Here, you can have my rations.'",
                dontGiveRationsLie: "'Sorry, I have nothing left.' (Lie)",
            };

            let choiceGiveThemRations = await ƒS.Menu.getInput(giveThemRations, "choiceCSSClass");

            switch (choiceGiveThemRations) {
                case giveThemRations.giveRations:
                    console.log("Give your rations to the group.");
                    await ƒS.Speech.tell(characters.Player, "Here, you can have my rations.");
                    dataForSave.pickedUpRations = false;
                    await ƒS.Speech.tell(characters.SurvivorM, "Thank you so much! I don't know how we could ever repay your kindness.");
                    await ƒS.Speech.tell(characters.Narrator, "You notice a little girl peak at you from behind the man's legs.");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(30, 100));
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.Narrator, "You give her a small smile and she ducks out of sight for a moment, but you can hear her giggle. \
                    A moment later she steps out with her hands behind her back and walks towards you.");
                    await ƒS.Character.hide(characters.SurvivorChild);
                    await ƒS.update(0.2);
                    await ƒS.Character.show(characters.SurvivorChild, characters.SurvivorChild.pose.survivorChild, ƒS.positionPercent(50, 100));
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.SurvivorChild, "This is for you, Mister.");
                    await ƒS.Speech.tell(characters.Narrator, "She hands you a beautiful white flower.");
                    await ƒS.Speech.tell(characters.Player, "Thank you, I will take good care of it.");
                    await ƒS.Speech.tell(characters.Narrator, "She giggles again and runs back behind the man's legs.");
                    await ƒS.Character.hide(characters.SurvivorChild);
                    await ƒS.update(0.2);
                    await ƒS.Character.show(characters.SurvivorChild, characters.SurvivorChild.pose.survivorChild, ƒS.positionPercent(75, 100));
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.Player, "You don't have to repay me. Just make sure you keep everyone safe.");
                    await ƒS.Speech.tell(characters.SurvivorM, "I will! Thanks to you we now have a chance.");
                    await ƒS.Speech.tell(characters.SurvivorM, "I hope we'll meet again someday. Goodbye and stay safe.");
                    await ƒS.Speech.tell(characters.Player, "Thank you. And you stay safe as well.");
                    await ƒS.Character.hide(characters.SurvivorM);
                    await ƒS.Speech.tell(characters.Narrator, "The Man and the little girl wave until you round round the corner and can't see them anymore.");
                    dataForSave.novelSurvivors = true;
                    await ƒS.Text.print("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
                    VIP that had been taken hostage by a shady organization that was trying get rich through. They didn't expect the military to show up \
                    but that could have been avoided if they had did their research right. They thought they just had a higher-up worker at the bank they had \
                    tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
                    so well for the robbers. In the end they got no money and landed in jail.");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    return "callForHelp";
                    break;

                case giveThemRations.dontGiveRationsLie:
                    console.log("Lie and don't give your rations to the group.");
                    await ƒS.Speech.tell(characters.Player, "Sorry, I have nothing left");
                    await ƒS.Speech.tell(characters.SurvivorM, "I see... But we'd like to thank you again for your help. I hope we'll meet again. \
                    Goodbye and stay safe.");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(30, 100));
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.Player, "Thank you. And you stay safe as well.");
                    await ƒS.Character.hide(characters.SurvivorM);
                    await ƒS.Speech.tell(characters.Narrator, "The Man and the little girl wave until you round round the corner and can't see them anymore.");
                    dataForSave.novelSurvivors = true;
                    await ƒS.Text.print("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
                    VIP that had been taken hostage by a shady organization that was trying get rich through. They didn't expect the military to show up \
                    but that could have been avoided if they had did their research right. They thought they just had a higher-up worker at the bank they had \
                    tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
                    so well for the robbers. In the end they got no money and landed in jail.");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    return "callForHelp";
                    break;
            }
        } else if (dataForSave.pickedUpRations == false) {
            let giveThemRations = {
                dontGiveRationsTruth: "'Sorry, I have nothing left.' (Truth)"
            };

            let choiceGiveThemRations = await ƒS.Menu.getInput(giveThemRations, "choiceCSSClass");

            switch (choiceGiveThemRations) {
                case giveThemRations.dontGiveRationsTruth:
                    console.log("Don't give your rations to the group.");
                    await ƒS.Speech.tell(characters.Player, "Sorry, I have nothing left.");
                    await ƒS.Speech.tell(characters.SurvivorM, "I see... But we'd like to thank you again for your help. I hope we'll meet again. \
                    Goodbye and stay safe.");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(30, 100));
                    await ƒS.update(0.2);
                    await ƒS.Speech.tell(characters.Player, "Thank you. And you stay safe as well.");
                    await ƒS.Character.hide(characters.SurvivorM);
                    await ƒS.Speech.tell(characters.Narrator, "The Man and the little girl wave until you round round the corner and can't see them anymore.");
                    dataForSave.novelSurvivors = true;
                    await ƒS.Text.print("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
                    VIP that had been taken hostage by a shady organization that was trying get rich through. They didn't expect the military to show up \
                    but that could have been avoided if they had did their research right. They thought they just had a higher-up worker at the bank they had \
                    tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
                    so well for the robbers. In the end they got no money and landed in jail.");
                    await ƒS.Character.hide(characters.Player);
                    await ƒS.update(0.2);
                    return "callForHelp";
                    break;
            }
        }

    }

}