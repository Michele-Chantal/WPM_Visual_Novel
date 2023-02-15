namespace Remember {
    export async function journals() {

        let pages: string[] = ["<strong> How to survive the Zombie Apocalypse: </strong><br><br><br> - Avoid getting bitten => Infection will spread like that <br><br> \
        - Aim for the head => Their brains are their weakness <br><br> - Use melee weapons if possible => Sound attracts them <br><br> - Don't give up", "Day 13, <br><br>\
        It's been a few days since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. Is this going to be the end of humanity?",
        "Day 26, <br><br> I lost all contact to the military headquarters. Were they overrun or is something interferring with the radios? I really hope it's the latter... \
        I don't know how good our chances are if we lost the military.", "Day 45, <br><br> I don't know if I can keep doing this..."];

        // Alle Journalseiten in einer if-Abfrage abfragen mit boolschen Werten in dataForSave; z.B. iSayYes = false und nachdem man 'Yes' gewählt hat wird iSayYes = true und die richtige Novelpage wird angezeigt
        let current: number = 0;
        let numberAquired = 0;
        ƒS.Text.addClass("changePage");

        if (dataForSave.novelPage1 == true) {
            pages.push("I suddenly woke up in the apocalypse and I have trouble remembering how it all started or who I really am. I faintly remember \
            being in the military, but not for how long or if I left it before everything went to hell. <br><br><br><br> Name: " + dataForSave.nameProtagonist +
                "<br><br> Age: ?? <br><br> Occupation: Soldier?/Ex-Soldier? ");
            numberAquired += 4;
        }

        if (dataForSave.novelRadio == true) {
            pages.push("<strong>Extraction </strong><br><br><br> The Military is organizing one last effort to safe some survivors. I wonder where they are bringing us \
            and if we're really going to be safe there. Here is all the important information: <br><br> - Military base 'Delta' <br><br> - city northern edge <br><br> - last extraction in 8 hours");
            numberAquired += 1;
        }

        if (dataForSave.novelFavFood == true) {
            pages.push("I remembered some things about my past. My favourite food is (insert food here). My mother always cooked it for me \
            when I did well in school or when she wanted to cheer me up. The way she made it was special and I remember it tasting like the most \
            delicious food I had ever eaten. <br> I tried recreating it for years, but never did quite manage to make it taste exactly like hers. She told \
            me as soon as I turned 18 she would teach me the family recipe, but she passed away when I was 16. A car accident. A drunk driver crashed \
            into her car. <br><br> She taught me how to cook and thanks to her cooking became my hobby. I miss her. <br><br> But at least she \
            doesn't have to see what happened to the world. <br><br><br> Rest well, Mom.");
            numberAquired += 1;
        }

        if (dataForSave.novelPet == true) {
            pages.push("I remembered some things about my past. I had a pet when I was younger, a cat. Her name was Loona and she \
            was this feisty little ball of black and white fur. I still have countless little scars all over my hands and arms, 'cause she loved \
            playing. She wasn't really a cuddler most of the time, but I remember waking up to her cuddled up on the foot of my bed sometimes. <br><br> \
            She was my first and only pet and I'll continue to remember her fondly.");
            numberAquired += 1;
        }

        if (dataForSave.novelSurvivors == true) {
            pages.push("Finding and helping the survivors made me remember a specific mission I did while in the military. We had to save a \
            VIP that had been taken hostage by a shady organization that was trying get rich through. They didn't expect the military to show up \
            but that could have been avoided if they had did their research right. They thought they just had a higher-up worker at the bank they had \
            tried to rob. But what they didn't know was that she was also the chief's daughter. We managed to get her out of there safely, but it didn't \
            so well for the robbers. In the end they got no money and landed in jail.");
            numberAquired += 1;
        }

        if (dataForSave.novelLewis == true) {
            pages.push("I just met someone from my past, his name is Lewis. We served together in the military and after he got shot in the \
            shoulder in a battle I saved him and after that we became close, because he kept following me around. I guess I kind of just warmed up \
            to him and it became normal to seek each other out. <br><br> According to him I joined the military when I was 20 years old and spent \
            at least three years there. And I am 32 years old.");
            numberAquired += 1;
        }

        if (dataForSave.novelNoLewis == true) {
            pages.push("I just came across someone I knew from my past. His name <del>is</del> was Lewis and I met him in the military. <del>He</del> \
            We were <del>friends</del> <del>best friends</del> really close. After he got hurt badly in battle and I saved him, he stuck by my side and \
            over time we became unseperable. And now he's dead... I could have saved him, but I didn't. I should have followed my gut feelings. He was \
            the only thing left from my past that was in reach. <br><br> Now there is nothing left that needs remembering.");
            numberAquired += 1;
        }

        if (dataForSave.novelEnding2 == true) {
            pages.push("Day 47, <br><br> We finally reached the cabin Lewis was talking about. It's a days walk from the city, but he was right \
            it's in the middle of nowhere and also hidden from all main roads. At first we followed the main road leavig out of the city and \
            came across quite a few zombies. But halfway through we started heading through the forest and fields and found just a few stray zombies \
            roaming around.");
            pages.push("The cabin itself is quite cozy, but it's obvious that no one's been here in months. It's too big for just us \
            two, but maybe someone will join us in time. And he was right, there's enough food here to last us a few weeks. But Lewis says he's \
            already has a plan. I trust him. It'll be some time, until this place will feel like home, but tidying everything up will be the first step.");
            pages.push("Day 54, <br><br> We're still busy with the place and I haven't found much time to write. But I finally know what Lewis' plan \
            was: He wants to plant some vegetables and fruits. He got the seeds from the garden center in the center, that's why he was there when I \
            found him. I have no idea about gardening, but he seems so know what he is doing.");
            pages.push("Day 67, <br><br> It's peaceful here and not many zombies find their way all the way out here. <br> My \
            memories are gradually returning and Lewis tries to fill in the blanks as good as he can. He has been a big help, not only in remembering \
            but giving us a new place to call home and giving me a reason to keep fighting. <br> I remembered that I love fishing and we got lucky \
            with a big lake not far from here. So fish is our main ingredient at the moment. Most of the time I cook, but Lewis helps from time to time. \
            He pretends that he's not had enough of fish yet, but I know he wouldn't mind a change.");
            pages.push("I hope the stuff we planted will be ready to harvest soon, then I could surprise him with his favourite dish. <br> It's \
            also getting time for another city run soon. Maybe we'll get lucky this time and find a functioning car. I don't mind the walk, but it \
            can get tiring pretty quickly. Not that Lewis minds. He always loved walking. I wonder where he gets all the energy from...");
            numberAquired += 5;
        }


        if (numberAquired > 0) {
            let changePage = { back: "previous", next: "next", done: "close" };
            let choice: string;
            do {
                ƒS.Text.print(pages[current]);
                choice = await ƒS.Menu.getInput(changePage, "changePage");
                switch (choice) {
                    case changePage.back: current = Math.max(0, current - 1); break;
                    case changePage.next: current = Math.min(numberAquired, current + 1); break;
                }
            } while (choice != changePage.done);
        } else {
            let changePage = { back: "previous", next: "next", done: "close" };
            let choice: string;
            do {
                ƒS.Text.print(pages[current]);
                choice = await ƒS.Menu.getInput(changePage, "changePage");
                switch (choice) {
                    case changePage.back: current = Math.max(0, current - 1); break;
                    case changePage.next: current = Math.min(3, current + 1); break;
                }
            } while (choice != changePage.done);
        } ƒS.Text.close();

    }

}




