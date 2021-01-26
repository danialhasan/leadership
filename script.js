const scenarios = [
    'You run a multi-million dollar company. You have been extremely successful in the past due to rigorous interviews and demanding vetting procedures aimed at potential employees. Because of this, you have been able to employ highly skilled individuals who are responsible for the majority of your company\'s success. However, all is not well. Through your company\'s complaint system, you have discovered that your best-performing high-level employees have been damaging to the company culture. Some of them have been abrasive to other employees. Due to this, some low-level employees have resigned. As the CEO of the company, what will you do?',
    'You are in the middle of a group project. The project deadline is approaching and things are moving smoothly until an argument breaks between two group members. The argument is over which direction the project should be heading in for the best marks. Currently, both parties are using facts, logic, and respect to explain their arguments. As a member of the group, what will you do?',
    'Scenario 3 here'
];
//randomly generated scenario
// const scenario_options_1_titles = ['THIS IS OPTION 1', 'THIS IS OPTION 2', 'THIS IS OPTION 3'];
//options to choose from (that are displayed on buttons). They change depending on which scenario
//is generated.
/**
 * options to choose from (that are displayed on buttons). 
 * They change depending on which scenario is generated.`
 */
// const scenario_options_2_titles = ['THIS IS OPTION 1.1', 'THIS IS OPTION 2.1', 'THIS IS OPTION 3.1'];
// const scenario_options_1 = ['option 1 result here', 'option 2 result here', 'option 3 result here'];
// const scenario_opt   ions_2 = ['option 1 result here', 'option 2 result here', 'option 3 result here', 'option 1 result here', 'option 2 result here', 'option 3 result here', 'option 1 result here', 'option 2 result here', 'option 3 result here'];

/**
 * //NOTE: these arrays are what i'm working with during development.
 * after development, i'll copy paste the main logic to implement the other
 * scenarios and add the final touches.
 */

// Option titles (What will be on the buttons)
const scenario1_1_titles = ['Talk to high-level employees', 'Talk to low-level employees', 'Do Nothing']; //first decision branch titles (3)
const scenario1_2_titles = ['Fire problematic high-level employees', 'Ignore complaints', 'Fire problematic high-level employees', 'Emphasize mental health at your company', 'Step down', 'Fire the high-level employees']; //second decision branch titles (6)

const scenario2_1_titles = ['Step between them', 'Encourage them', 'Wait to see where this goes']; //first decision branch titles (3)
const scenario2_2_titles = ['Propose a vote', 'Randomly choose an idea', 'Continue the project on your own', 'Try to fix the group', 'Pick an idea randomly', 'Look for new ideas']; //second decision branch titles (6)

const scenario3_1_titles = ['scenario 3 L1 option 1', 'scenario 3 L1 option 2', 'scenario 3 L1 option 3']; //first decision branch titles (3)
const scenario3_2_titles = ['scenario 3 L2 option 1', 'scenario 3 L2 option 2', 'scenario 3 L2 option 3', 'scenario 3 L2 option 4', 'scenario 3 L2 option 5', 'scenario 3 L2 option 6']; //second decision branch titles (3)

// Option scenarios (The scenario that is used when the button is picked)
const scenario1_1 = ['You bring in the high level employees. You inform them of the complaints that have been made as they roll their eyes. They state they have done nothing wrong, and that the low level employees should learn from them as they have more experience and know how to run things in the company. Most of them claim there is nothing wrong with how the company culture is right now, and that the complaints are baseless and attention-seeking.',
    'You bring in the low level employees. They inform you that the high level employees have created a patronizing company culture that borders on bullying. Some of them state that they have occasionally cried in the bathroom stalls due to the way they are treated, and others claim that some interactions with high level employees have been overly confrontational. They warn you that if nothing changes, further conflict is guaranteed.',
    'You do nothing, and let things play out on their own. Some employees leave the company and write scathing articles of how your company treats its lower level employees, citing \'apathy towards anyone making below $100k annually\'. Several fights break out in your headquarters and police lock down the area. Your company generates bad PR and your stock sinks 584%.'
]; // 3 potential scenarios from first decision branch
const scenario1_2 = ['You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
    'You ignore the complaints, and trust that your high-level employees are telling the truth. After a week, several low-level employees leave the company and write scathing articles of how your company treats its lower level employees, citing \'apathy towards anyone making below $100k annually\'. This generates huge amounts of bad press and your stock drops 963%. Widespread fear and uncertainty floods the company and employees begin resigning in droves. It is truly a dumpster fire. You are forced to step down and leave the company. It is swallowed by its biggest competitor and its potential is stomped out.',
    'You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
    'You begin a campaign to emphasize mental health at your company. This brings mixed responses; some praise the move as a progressive move away from the \’work work work\’ culture we have. Others see it as nothing more than a marketing campaign. Inside your company, the lower level companies compare it to \’putting a bandaid on a knife wound\’ and begin leaving your company. Your annual revenue drops by 10% and your brand is damaged as ex-employees reveal the toxic work culture of your company.',
    'You step down, and your company goes down in flames. It is acquired by its competitor and dissolved.',
    'You fire the high-level employees in an effort to reverse your mistake and rebuild your company’s work culture and reputation. It is too late. You are left with a shortage of skilled employees, as you learn no one wants to work for a company with a toxic working environment. You are forced to disband several departments and those employees are acquired by your competitors, as they move in to take your place as market leader. Your company shrinks tremendously and never manages to grow to the level it once was. Eventually, it is acquired by a competitor for a pathetic price and dissolved.'
]; //endings (6 possible endings for scenario 1)

const scenario2_1 = ['You step between them and they stop arguing to look at you. You ask what they’re talking about and why it matters, and they simultaneously begin explaining their side to you. You call the other group members and let them weigh in on the situation. What will you do?',
    'You tell one member that the opposing member said their idea was stupid. This angers them and they begin personally attacking the other group member with petty remarks and insults to their intelligence, persona, and mother. This angers the other member who responds with their own personal attacks and petty remarks, and soon the group is split between these two members. There is heavy group infighting. The deadline is approaching, and there has been two unproductive weeks of little progress since the fight. What will you do?',
    'While the two group members debate each other, the rest of the group watches in confusion as to what they must do now. The group is without direction and purpose and productivity drops. You lose two weeks of time.'
]; // (3) first decision branch Ending 
const scenario2_2 = ['You propose a democratic vote on which idea is better. The group agrees with you, and a vote is taken. One idea wins over the other, and your group gets back on track to completing the project. Two weeks later, the project is finished and is handed in. During the post-project peer evaluation, your peers rate you highly due to your initiative and ability to break the team out of the indecisive unproductivity. You end up with one of the highest marks in the class.',
    'You randomly choose an idea and stick with it. The rest of your team follows through with your recommendation and work resumes. Two weeks later, the project is finished and is handed in. During the post-project peer evaluation, your peers rate you highly due to your initiative and ability to break the team out of the indecisive unproductivity. You end up with one of the highest marks in the class.',
    'You decide to splinter off the group and continue the project on your own. You erase any team member that does not follow you. Due to a smaller number of people working on the project (you + whoever decided to follow), you appeal for an extension. You do not get it. You are forced to rush the rest of the project until you finally hand it in. During a peer evaluation, you harshly judge the lack of work contributed by your peers. They do the same to you. You end up with a slightly below-average grade.',
    'You decide to fix the interpersonal relationships of the group. Although this is successful, you end up contributing most of your time towards using your social skills to repair relationships rather than working on the project. The project is incomplete by the deadline, and you receive a bad grade.',
    'Due to the stress and pressure of the approaching deadline and concurrent lack of a working project, you randomly pick an idea and roll with it. Due to the two weeks lost because of your indecisiveness, the project is rushed. You end up submitting the project in its rushed state, and you receive a slightly below-average grade.',
    'You decide to look for new ideas. One week later, you find one. However, because of the 3 weeks lost due to group infighting and your indecisiveness, you are only left with one week to finish the project. Despite pulling several all-nighters and sacrificing your short-term mental health, the project does not get completed and you submit it late. You receive a bad grade.'
]; // (6) second decision branch

const scenario3_1 = ['you\'re in scenario three, decision level 1. You picked option 1.', 'you\'re in scenario three, decision level 1. You picked option 2.', 'you\'re in scenario three, decision level 1. You picked option 3.']; // (3) first decision branch
const scenario3_2 = ['Ending 3_2_1', 'Ending 3_2_2', 'Ending 3_2_3', 'Ending 3_2_4', 'Ending 3_2_5', 'Ending 3_2_6']; // (6) second decision branch

var rand;
const subheader = document.getElementById("generating_scenario_subheader");
const finalresults_subheader = document.getElementById("final_result_subheader");
const container1 = document.getElementById("container1_text");
const container2 = document.getElementById("container2_text");
const container3_text = document.getElementById("container3_text");
const container3 = document.getElementById("container3");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");
const btn5 = document.getElementById("button5");
const options1_buttons = [btn1, btn2, btn3];
const options1_buttons_container = document.getElementById("options1_button_container");
const options2_buttons_container = document.getElementById("options2_button_container");
var leadershipType, mediateScore, instigateScore, actionScore;

function reloadPage() {
    location.reload();
}

function generateScenario() {
    // rand = 2
    rand = Math.floor((Math.random() * 2) + 1);
    // rand = Math.floor((Math.random() * 3) + 1);
    /**
     * UNCOMMENT THE ABOVE LINE AFTER BUILDING FUNCTIONALITY.
     * IT ALLOWS FOR RANDOM NUMBERS FROM 1-3 TO BE GENERATED, ALLOWING FOR 
     * ALL SCENARIOS TO BE CHOSEN AT RANDOM. LIMITING IT TO 1
     * IS ONLY FOR DEV PURPOSES.
     */
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
                container1.children[1].textContent = scenarios[0] //main scenario description

                /**
                 * depending on the scenario, the role of each button will be different. 
                 * Use switch cases / if statements to determine what happens when each button is pressed.
                 */

                btn1.textContent = scenario1_1_titles[0];
                btn2.textContent = scenario1_1_titles[1];
                btn3.textContent = scenario1_1_titles[2];

                btn1.addEventListener("click", function () {
                    console.log("btn1 clicked");
                    btn1.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario1_1[0]; //generated scenario 
                    //giivng relevant titles to buttons
                    btn4.textContent = scenario1_2_titles[0];
                    btn5.textContent = scenario1_2_titles[1];

                    btn4.addEventListener("click", function () { //Decision level 2
                        btn4.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario1_2[0];
                            //good ending. 
                            /**
                             * leadership type: GOOD
                             * mediate: well
                             * instigate: Rarely
                             * Action: Regularly 
                             */
                        }, 800)
                    });


                    btn5.addEventListener("click", function () { //Decision level 2
                        btn5.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario1_2[1];
                        }, 800)
                        /**
                        * Bad ending:
                        * leadership type: BAD
                        * mediate: POORLY
                        * instigate: REGULARLY
                        * Action: RARELY 
                        * 
                         const scenario1_2 = ['You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                             'You ignore the complaints, and trust that your high-level employees are telling the truth. After a week, several low-level employees leave the company and write scathing articles of how your company treats its lower level employees, citing \'apathy towards anyone making below $100k annually\'. This generates huge amounts of bad press and your stock drops 963%. Widespread fear and uncertainty floods the company and employees begin resigning in droves. It is truly a dumpster fire. You are forced to step down and leave the company. It is swallowed by its biggest competitor and its potential is stomped out.',
                             'You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                             'You begin a campaign to emphasize mental health at your company. This brings mixed responses; some praise the move as a progressive move away from the \’work work work\’ culture we have. Others see it as nothing more than a marketing campaign. Inside your company, the lower level companies compare it to \’putting a bandaid on a knife wound\’ and begin leaving your company. Your annual revenue drops by 10% and your brand is damaged as ex-employees reveal the toxic work culture of your company.',
                             'You step down, and your company goes down in flames. It is acquired by its competitor and dissolved.',
                             'You fire the high-level employees in an effort to reverse your mistake and rebuild your company’s work culture and reputation. It is too late. You are left with a shortage of skilled employees, as you learn no one wants to work for a company with a toxic working environment. You are forced to disband several departments and those employees are acquired by your competitors, as they move in to take your place as market leader. Your company shrinks tremendously and never manages to grow to the level it once was. Eventually, it is acquired by a competitor for a pathetic price and dissolved.'
                         ];
                         */
                    });

                });

                btn2.addEventListener("click", function () {
                    console.log("btn2 clicked");
                    // btn1.classList = ['bg-blue-700', 'text-white', ''];
                    btn2.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario1_1[1]; //generated scenario 
                    //giivng relevant titles to buttons
                    btn4.textContent = scenario1_2_titles[2];
                    btn5.textContent = scenario1_2_titles[3];

                    btn4.addEventListener("click", function () { //Decision level 2
                        btn4.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario1_2[2];
                        }, 800)
                    });
                    //good ending. 
                    /**
                     * leadership type: GOOD
                     * mediate: well
                     * instigate: Rarely
                     * Action: Regularly 
                     
                    * 
                    const scenario1_2 = ['You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                        'You ignore the complaints, and trust that your high-level employees are telling the truth. After a week, several low-level employees leave the company and write scathing articles of how your company treats its lower level employees, citing \'apathy towards anyone making below $100k annually\'. This generates huge amounts of bad press and your stock drops 963%. Widespread fear and uncertainty floods the company and employees begin resigning in droves. It is truly a dumpster fire. You are forced to step down and leave the company. It is swallowed by its biggest competitor and its potential is stomped out.',
                        'You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                        'You begin a campaign to emphasize mental health at your company. This brings mixed responses; some praise the move as a progressive move away from the \’work work work\’ culture we have. Others see it as nothing more than a marketing campaign. Inside your company, the lower level companies compare it to \’putting a bandaid on a knife wound\’ and begin leaving your company. Your annual revenue drops by 10% and your brand is damaged as ex-employees reveal the toxic work culture of your company.',
                        'You step down, and your company goes down in flames. It is acquired by its competitor and dissolved.',
                        'You fire the high-level employees in an effort to reverse your mistake and rebuild your company’s work culture and reputation. It is too late. You are left with a shortage of skilled employees, as you learn no one wants to work for a company with a toxic working environment. You are forced to disband several departments and those employees are acquired by your competitors, as they move in to take your place as market leader. Your company shrinks tremendously and never manages to grow to the level it once was. Eventually, it is acquired by a competitor for a pathetic price and dissolved.'
                    ];
                    */

                    btn5.addEventListener("click", function () { //Decision level 2
                        btn5.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario1_2[3];
                        }, 800)
                    });
                    //Decent ending. 
                    /**
                     * leadership type: DECENT
                     * mediate: SOMEWHAT WELL
                     * instigate: Rarely
                     * Action: OCCASIONALLY 
                     
                    * 
                    const scenario1_2 = ['You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                        'You ignore the complaints, and trust that your high-level employees are telling the truth. After a week, several low-level employees leave the company and write scathing articles of how your company treats its lower level employees, citing \'apathy towards anyone making below $100k annually\'. This generates huge amounts of bad press and your stock drops 963%. Widespread fear and uncertainty floods the company and employees begin resigning in droves. It is truly a dumpster fire. You are forced to step down and leave the company. It is swallowed by its biggest competitor and its potential is stomped out.',
                        'You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                        'You begin a campaign to emphasize mental health at your company. This brings mixed responses; some praise the move as a progressive move away from the \’work work work\’ culture we have. Others see it as nothing more than a marketing campaign. Inside your company, the lower level companies compare it to \’putting a bandaid on a knife wound\’ and begin leaving your company. Your annual revenue drops by 10% and your brand is damaged as ex-employees reveal the toxic work culture of your company.',
                        'You step down, and your company goes down in flames. It is acquired by its competitor and dissolved.',
                        'You fire the high-level employees in an effort to reverse your mistake and rebuild your company’s work culture and reputation. It is too late. You are left with a shortage of skilled employees, as you learn no one wants to work for a company with a toxic working environment. You are forced to disband several departments and those employees are acquired by your competitors, as they move in to take your place as market leader. Your company shrinks tremendously and never manages to grow to the level it once was. Eventually, it is acquired by a competitor for a pathetic price and dissolved.'
                    ];
                    */
                });
                btn3.addEventListener("click", function () {
                    console.log("btn3 clicked");
                    // btn1.classList = ['bg-blue-700', 'text-white', ''];
                    btn3.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario1_1[2]; //generated scenario 
                    //giivng relevant titles to buttons
                    btn4.textContent = scenario1_2_titles[4];
                    btn5.textContent = scenario1_2_titles[5];

                    btn4.addEventListener("click", function () { //Decision level 2
                        btn4.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario1_2[4];
                        }, 800)
                    });
                    //Bad ending. 
                    /**
                     * leadership type: BAD
                     * mediate: POORLY
                     * instigate: RARELY
                     * Action: RARELY 
                     
                    * 
                    const scenario1_2 = ['You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                        'You ignore the complaints, and trust that your high-level employees are telling the truth. After a week, several low-level employees leave the company and write scathing articles of how your company treats its lower level employees, citing \'apathy towards anyone making below $100k annually\'. This generates huge amounts of bad press and your stock drops 963%. Widespread fear and uncertainty floods the company and employees begin resigning in droves. It is truly a dumpster fire. You are forced to step down and leave the company. It is swallowed by its biggest competitor and its potential is stomped out.',
                        'You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                        'You begin a campaign to emphasize mental health at your company. This brings mixed responses; some praise the move as a progressive move away from the \’work work work\’ culture we have. Others see it as nothing more than a marketing campaign. Inside your company, the lower level companies compare it to \’putting a bandaid on a knife wound\’ and begin leaving your company. Your annual revenue drops by 10% and your brand is damaged as ex-employees reveal the toxic work culture of your company.',
                        'You step down, and your company goes down in flames. It is acquired by its competitor and dissolved.',
                        'You fire the high-level employees in an effort to reverse your mistake and rebuild your company’s work culture and reputation. It is too late. You are left with a shortage of skilled employees, as you learn no one wants to work for a company with a toxic working environment. You are forced to disband several departments and those employees are acquired by your competitors, as they move in to take your place as market leader. Your company shrinks tremendously and never manages to grow to the level it once was. Eventually, it is acquired by a competitor for a pathetic price and dissolved.'
                    ];
                    */

                    btn5.addEventListener("click", function () { //Decision level 2
                        btn5.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario1_2[5];
                        }, 800)
                    });
                    //Bad ending. 
                    /**
                     * leadership type: BAD
                     * mediate: POORLY
                     * instigate: RARELY
                     * Action: RARELY 
                     
                    * 
                    const scenario1_2 = ['You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                        'You ignore the complaints, and trust that your high-level employees are telling the truth. After a week, several low-level employees leave the company and write scathing articles of how your company treats its lower level employees, citing \'apathy towards anyone making below $100k annually\'. This generates huge amounts of bad press and your stock drops 963%. Widespread fear and uncertainty floods the company and employees begin resigning in droves. It is truly a dumpster fire. You are forced to step down and leave the company. It is swallowed by its biggest competitor and its potential is stomped out.',
                        'You fire several accused high-level employees and replace them. Your monthly revenue drops by 60% for 2 months, then shoots back up after hiring new high-level employees. These employees are informed of what happened to those they are replacing, and treat everyone in the company with respect. You end the year with a 30% growth in revenue and the company becomes significantly more powerful after a few years.',
                        'You begin a campaign to emphasize mental health at your company. This brings mixed responses; some praise the move as a progressive move away from the \’work work work\’ culture we have. Others see it as nothing more than a marketing campaign. Inside your company, the lower level companies compare it to \’putting a bandaid on a knife wound\’ and begin leaving your company. Your annual revenue drops by 10% and your brand is damaged as ex-employees reveal the toxic work culture of your company.',
                        'You step down, and your company goes down in flames. It is acquired by its competitor and dissolved.',
                        'You fire the high-level employees in an effort to reverse your mistake and rebuild your company’s work culture and reputation. It is too late. You are left with a shortage of skilled employees, as you learn no one wants to work for a company with a toxic working environment. You are forced to disband several departments and those employees are acquired by your competitors, as they move in to take your place as market leader. Your company shrinks tremendously and never manages to grow to the level it once was. Eventually, it is acquired by a competitor for a pathetic price and dissolved.'
                    ];
                    */
                });
            }, 800 /*2000*/ )
            break;
        case 2: //if scenario 2 is displayed
            subheader.classList.remove('hidden');
            setTimeout(function () {

                subheader.textContent = "SCENARIO GENERATED.";
                container1.classList = ['block']; //show text
                container1.children[0].textContent = "Scenario 2" //header
                container1.children[1].textContent = scenarios[1] //main scenario description

                /**
                 * depending on the scenario, the role of each button will be different. 
                 * Use switch cases / if statements to determine what happens when each button is pressed.
                 */

                btn1.textContent = scenario2_1_titles[0];
                btn2.textContent = scenario2_1_titles[1];
                btn3.textContent = scenario2_1_titles[2];

                btn1.addEventListener("click", function () {
                    /**
                     * TODO after button is clicked, show appropriate scenario, options 
                     * and alter leadership score
                     */
                    console.log("btn1 clicked");
                    btn1.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario2_1[0]; //generated scenario 
                    //giivng relevant titles to buttons
                    btn4.textContent = scenario2_2_titles[0];
                    btn5.textContent = scenario2_2_titles[1];

                    btn4.addEventListener("click", function () { //Decision level 2
                        btn4.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario2_2[0];
                        }, 800)
                    });


                    btn5.addEventListener("click", function () { //Decision level 2
                        btn5.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario2_2[1];
                        }, 800)
                    });

                });

                btn2.addEventListener("click", function () {
                    console.log("btn2 clicked");
                    // btn1.classList = ['bg-blue-700', 'text-white', ''];
                    btn2.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario2_1[1]; //generated scenario 
                    //giivng relevant titles to buttons
                    btn4.textContent = scenario2_2_titles[2];
                    btn5.textContent = scenario2_2_titles[3];

                    btn4.addEventListener("click", function () { //Decision level 2
                        btn4.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario2_2[2];
                        }, 800)
                    });


                    btn5.addEventListener("click", function () { //Decision level 2
                        btn5.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario2_2[3];
                        }, 800)
                    });
                });
                btn3.addEventListener("click", function () {
                    console.log("btn3 clicked");
                    // btn1.classList = ['bg-blue-700', 'text-white', ''];
                    btn3.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario2_1[2]; //generated scenario 
                    //giivng relevant titles to buttons
                    btn4.textContent = scenario2_2_titles[4];
                    btn5.textContent = scenario2_2_titles[5];

                    btn4.addEventListener("click", function () { //Decision level 2
                        btn4.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario2_2[4];
                        }, 800)
                    });


                    btn5.addEventListener("click", function () { //Decision level 2
                        btn5.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario2_2[5];
                        }, 800)
                    });
                });
            }, 800 /*2000*/ )
            break;
        case 3: //if scenario 3 is displayed
            subheader.classList.remove('hidden');
            setTimeout(function () {

                subheader.textContent = "SCENARIO GENERATED.";
                container1.classList = ['block']; //show text
                container1.children[0].textContent = "Scenario 3" //header
                container1.children[1].textContent = scenarios[2] //main scenario description

                /**
                 * depending on the scenario, the role of each button will be different. 
                 * Use switch cases / if statements to determine what happens when each button is pressed.
                 */

                btn1.textContent = scenario3_1_titles[0];
                btn2.textContent = scenario3_1_titles[1];
                btn3.textContent = scenario3_1_titles[2];

                btn1.addEventListener("click", function () {
                    /**
                     * TODO after button is clicked, show appropriate scenario, options 
                     * and alter leadership score
                     */
                    console.log("btn1 clicked");
                    btn1.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario3_1[0]; //generated scenario 
                    //giivng relevant titles to buttons
                    btn4.textContent = scenario3_2_titles[0];
                    btn5.textContent = scenario3_2_titles[1];

                    btn4.addEventListener("click", function () { //Decision level 2
                        btn4.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario3_2[0];
                        }, 800)
                    });


                    btn5.addEventListener("click", function () { //Decision level 2
                        btn5.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario3_2[1];
                        }, 800)
                    });

                });

                btn2.addEventListener("click", function () {
                    console.log("btn2 clicked");
                    // btn1.classList = ['bg-blue-700', 'text-white', ''];
                    btn2.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario3_1[1]; //generated scenario 
                    //giivng relevant titles to buttons
                    btn4.textContent = scenario3_2_titles[2];
                    btn5.textContent = scenario3_2_titles[3];

                    btn4.addEventListener("click", function () { //Decision level 2
                        btn4.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario3_2[2];
                        }, 800)
                    });


                    btn5.addEventListener("click", function () { //Decision level 2
                        btn5.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario3_2[3];
                        }, 800)
                    });
                });
                btn3.addEventListener("click", function () {
                    console.log("btn3 clicked");
                    // btn1.classList = ['bg-blue-700', 'text-white', ''];
                    btn3.classList.add('bg-blue-700', 'text-white')
                    options1_buttons_container.classList.add("pointer-events-none");

                    container2.classList.remove('hidden');
                    container2.children[1].textContent = scenario3_1[2]; //generated scenario 
                    //giivng relevant titles to buttons
                    btn4.textContent = scenario3_2_titles[4];
                    btn5.textContent = scenario3_2_titles[5];

                    btn4.addEventListener("click", function () { //Decision level 2
                        btn4.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario3_2[4];
                        }, 800)
                    });


                    btn5.addEventListener("click", function () { //Decision level 2
                        btn5.classList.add('bg-blue-700', 'text-white')
                        options2_buttons_container.classList.add("pointer-events-none");
                        finalresults_subheader.classList.remove("hidden")
                        setTimeout(function () {
                            container3_text.classList.remove('hidden');
                            container3_text.children[1].textContent = scenario3_2[5];
                        }, 800)
                    });
                });
            }, 800 /*2000*/ )
            break;
    }
}