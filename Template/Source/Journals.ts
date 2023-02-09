namespace Template {
    export async function journals() {

        let pages: string[] = ["<strong> How to survive the Zombie Apocalypse: </strong><br><br><br> - Avoid getting bitten => Infection will spread like that <br><br> \
        - Aim for the head => Their brains are their weakness <br><br> - Use melee weapons if possible => Sound attracts them <br><br> - Don't give up", "Day 13, <br><br>\
        It's been a few days since the apocalypse started. Everyday it's getting harder to find survivors and I'm starting to lose hope. Is this going to be the end of humanity?",
            "Day 26, <br><br> I lost all contact to the military headquarters. Were they overrun or is something interferring with the radios? I really hope it's the latter... \
        I don't know how good our chances are if we lost the military."];

        // Alle Journalseiten in einer if-Abfrage abfragen mit boolschen Werten in dataForSave; z.B. iSayYes = false und nachdem man 'Yes' gewählt hat wird iSayYes = true und die richtige Novelpage wird angezeigt
        let current: number = 0;
        let numberAquired = 0;
        ƒS.Text.addClass("changePage");

        if (dataForSave.novelPage1 == true) {
            pages.push("I suddenly woke up in the apocalypse and I have trouble remembering how it all started or who I really am. I faintly remember \
            being in the military, but not for how long or if I left it before everything went to hell. <br><br><br><br> Name: " + dataForSave.nameProtagonist +
                "<br><br> Age: ?? <br><br> Occupation: Soldier?/Ex-Soldier? ");
            numberAquired += 3;
        }

        if (dataForSave.novelRadio == true) {
            pages.push("<strong>Extraction </strong><br><br><br> The Military is organizing one last effort to safe some survivors. I wonder where they are bringing us \
            and if we're really going to be safe there. Here is all the important information: <br><br><br> - Military base 'Delta' <br><br> - city northern edge <br><br> - last extraction in 8 hours");
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

        if (dataForSave.novelMilitaryTime == true) {
            pages.push("...");
            numberAquired += 1;
        }

        if (dataForSave.novelMilitaryTimeExtra == true) {
            pages.push("...");
            numberAquired += 1;
        }

        if (dataForSave.novelDude == true) {
            pages.push("...");
            numberAquired += 1;
        }

        if (dataForSave.novelNoDude == true) {
            pages.push("...");
            numberAquired += 1;
        }

        if (dataForSave.novelEnding1 == true) {
            pages.push("...");
            numberAquired += 1;
        }

        if (dataForSave.novelEnding2 == true) {
            pages.push("...");
            numberAquired += 1;
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
                    case changePage.next: current = Math.min(2, current + 1); break;
                }
            } while (choice != changePage.done);
        } ƒS.Text.close();

    }

}




