namespace Template {
    export async function routeCommercialArea(): ƒS.SceneReturn {

        console.log("Scene: Commercial area");

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("damageScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForDamage").style.display = "";

        ƒS.Speech.setTickerDelays(30, 5000);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.restaurant);
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Narrator, "[At an abandoned restaurant]");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Player, "This place looks better than the others I've seen, but I don't think there'll be anything left either.")
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.1);
        await ƒS.Character.show(characters.Player, characters.Player.pose.thinking, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "The people left in a hurry with all the food still on the table. But it's already gone bad, sadly.")
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.Narrator, "You search the whole restaurant for some food or water that's still edible, but find nothing");
        await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Nothing left for me here, it seems...");
        await ƒS.Speech.tell(characters.Player, "But I need to find something to drink soon, my throat's starting to hurt.");
        await ƒS.Speech.tell(characters.Player, "Hm, the menu...");
        await ƒS.Text.print("<strong>Menu</strong> <br><br> <i>SOUP AND SALAD</i> <br><br> Mango Chutney 2,95€ <br> Dal Soup 2,95€ <br> Cucumber Salad 3,50€ <br> \
        Mixed Salad 3,50€ <br> Raita 2,25€ <br><br> <i>MAIN DISHES</i> <br><br> Lamb Curry 11,95€ <br> Prawn Vindaloo 11,95€ <br> \
        Boti Kabab 12,95€ <br> Prawn Biryani 12,95€ <br><br> <i>DESSERTS</i> <br><br> Gulab Jamun 2,50€ <br> Kulfi 2,50€ <br> Kheer 2,50€");
        await ƒS.Speech.tell(characters.Player, "Suddenly I'm really craving some Mushroom Mattar.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.surprised, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Mushroom Mattar? Oh yea, mom used to make it for me whenever I got good grades or \
        wasn't feeling well. That was when I was still in school.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "The way she made it was my favourite, I never could quite recreate it no matter how hard I tried. \
        She wanted to wait until my 18th birthday, before giving me the family recipe, but-");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Player, characters.Player.pose.sad, ƒS.positionPercent(30, 100));
        await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "Oh... right.");
        await ƒS.Speech.tell(characters.Player, "She passed away before she could when I was 16.");
        await ƒS.Speech.tell(characters.Player, "I should write that down...");
        await ƒS.Text.print("I remembered some things about my past. My favourite food is Mushroom Mattar. My mother always cooked it for me \
        when I did well in school or when she wanted to cheer me up. The way she made it was special and I remember it tasting like the most \
        delicious food I had ever eaten. <br> I tried recreating it for years, but never did quite manage to make it taste exactly like hers. She told \
        me as soon as I turned 18 she would teach me the family recipe, but she passed away when I was 16. A car accident. A drunk driver crashed \
        into her car. <br><br> She taught me how to cook and thanks to her, cooking became my hobby. I miss her. <br><br> But at least she \
        won't have to see what happened to the world. <br><br><br> Rest well, Mom.");
        dataForSave.novelFavFood = true;
        await ƒS.Speech.tell(characters.Player, "...");
        // await ƒS.Character.hide(characters.Player);
        // await ƒS.update(0.2);
        // await ƒS.Character.show(characters.Player, characters.Player.pose.neutral, ƒS.positionPercent(30, 100));
        // await ƒS.update(0.2);
        await ƒS.Speech.tell(characters.Player, "I have to go on or I won't make it in time.");
        await ƒS.Character.hide(characters.Player);
        await ƒS.update(0.2);
        ƒS.Speech.clear();

        return "meetingSurvivors";


    }

}