const scenarios = ['SCENARIO 1 HERE', 'Scenario 2 here', 'Scenario 3 here'];
const scenario_options_1_titles = ['THIS IS OPTION 1', 'THIS IS OPTION 2', 'THIS IS OPTION 3'];
const scenario_options_1 = ['option 1 result here', 'option 2 result here', 'option 3 result here'];
var rand;
const subheader = document.getElementById("generating_scenario_subheader");
const container1 = document.getElementById("container1_text");
const container2 = document.getElementById("container2_text");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const options1_buttons = [btn1, btn2, btn3];
const options1_buttons_container = document.getElementById("options1_button_container");
var leadership_score;

function generateScenario() {
    // rand = Math.floor((Math.random() * 3) + 1);
    /**
     * UNCOMMENT THE ABOVE LINE AFTER BUILDING FUNCTIONALITY.
     * IT ALLOWS FOR RANDOM NUMBERS FROM 1-3 TO BE GENERATED, ALLOWING FOR 
     * ALL SCENARIOS TO BE CHOSEN AT RANDOM. LIMITING IT TO 1
     * IS ONLY FOR DEV PURPOSES.
     */
    rand = Math.floor((Math.random()) + 1);
    console.log(rand);

    console.log(scenarios[rand - 1])

    switch (rand) {
        case 1: //SCENARIO ONE HAS BEEN PICKED
            //run 'generating scenario' for 2 seconds, then show remaining part of div.
            subheader.classList.remove('hidden');
            setTimeout(function () {

                subheader.textContent = "SCENARIO GENERATED.";
                container1.classList = ['block']; //show text
                container1.children[0].textContent = "Scenario 1" //header
                container1.children[1].textContent = scenarios[0] //main body

                /**
                 * depending on the scenario, the role of each button will be different. 
                 * Use switch cases / if statements to determine what happens when each button is pressed.
                 */

                btn1.textContent = scenario_options_1_titles[0];
                btn2.textContent = scenario_options_1_titles[1];
                btn3.textContent = scenario_options_1_titles[2];

                btn1.addEventListener("click", function () {
                    /**
                     * TODO after button is clicked, show appropriate scenario, options 
                     * and alter leadership score
                     */
                    console.log("btn1 clicked");
                    // btn1.classList = ['bg-blue-700', 'text-white', ''];
                    btn1.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario_options_1[0]


                });

                btn2.addEventListener("click", function () {
                    console.log("btn2 clicked");
                    // btn1.classList = ['bg-blue-700', 'text-white', ''];
                    btn2.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");
                });
                btn3.addEventListener("click", function () {
                    console.log("btn3 clicked");
                    // btn1.classList = ['bg-blue-700', 'text-white', ''];
                    btn3.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");
                });

            }, 100 /*2000*/ )
            break;
        case 2: //if scenario 2 is displayed

            break;
        case 3: //if scenario 3 is displayed
            break;
    }
}