
//PHYSICAL REQUIREMENTS************************************************
const awesomeStrength= [
    { pillar: 'physical', element:'strength', level:'awesome', requirements: '10 push ups, 30 sit ups, 1 pull-up', completed: '', approver: '' },
    { pillar: 'physical', element:'strength', level:'awesome', requirements: 'Box jump half your height,  broad jump your height', completed: '', approver: '' },
    { pillar: 'physical', element:'strength', level:'awesome', requirements: 'Carry 50 lbs 50 yds', completed: '', approver: '' },
    { pillar: 'physical', element:'strength', level:'awesome', requirements: 'Identify major muscle groups ', completed: '', approver: '' },
    { pillar: 'physical', element:'strength', level:'awesome', requirements: 'Complete balanced strength training routine for a month ', completed: '', approver: '' },
    { pillar: 'physical', element:'strength', level:'awesome', requirements: '1 minute plank', completed: '', approver: '' },
  ]
const epicStrength= [
    { requirements: 'Bench press your weight', completed: '', approver: '' },
    { requirements: 'Dunk a basketball', completed: '', approver: '' },
    { requirements: 'Take a self defense course', completed: '', approver: '' },
    { requirements: 'Survive boot camp', completed: '', approver: '' },
    { requirements: 'Reach the highest level in a martial art ', completed: '', approver: '' },
    { requirements: 'Participate in an obstacle course race', completed: '', approver: '' },
    { requirements: 'Run 40m under 10 sec', completed: '', approver: '' },
    { requirements: 'Pass the presidential fitness test ', completed: '', approver: '' },
    { requirements: 'Climb 100 feet of rope', completed: '', approver: '' },
    { requirements: '100 pushups, 100 sit ups, 25 pull ups', completed: '', approver: '' },
    { requirements: 'Compete on an obstacle course game show (eg American Ninja Warrior)', completed: '', approver: '' },
    { requirements: 'Lift something over your head that weighs twice your weight', completed: '', approver: '' },
  ]

const awesomeEndurance= [
    { requirements: 'Run a mile without stopping', completed: '', approver: '' },
    { requirements: 'Swim 100 meters', completed: '', approver: '' },
    { requirements: 'Ride a bike for 10 miles', completed: '', approver: '' },
    { requirements: 'Jump rope 100 times consecutively', completed: '', approver: '' },
    { requirements: 'Climb 1000 stairs', completed: '', approver: '' },
    { requirements: 'Do 30 minutes of instructor-led aerobic exercise', completed: '', approver: '' },
  ]
const epicEndurance= [
    { requirements: 'Run a race that is longer than 5k', completed: '', approver: '' },
    { requirements: 'Paddle 20 consecutive miles in a kayak or canoe', completed: '', approver: '' },
    { requirements: 'Hike 50 miles in a week', completed: '', approver: '' },
    { requirements: 'Compete in a triathalon', completed: '', approver: '' },
    { requirements: 'Ride a bicycle for 100 consecutive miles in one day ', completed: '', approver: '' },
    { requirements: 'Achieve the highest level of a martial art', completed: '', approver: '' },
    { requirements: 'Tread water for more than 12 minutes.', completed: '', approver: '' },
    { requirements: 'Earn the Personal Fitness Merit Badge', completed: '', approver: '' },
    { requirements: 'Pass the Presidential Fitness Test', completed: '', approver: '' },
    { requirements: 'Swim 100m using only the butterfly stroke', completed: '', approver: '' },
    { requirements: 'Swim a distance longer than a mile', completed: '', approver: '' },
    { requirements: 'Run a mile under 5 minutes.', completed: '', approver: '' },
  ]
      
const awesomeAgility= [
    { requirements: 'Know the rules and be able to play Common Sports', completed: '', approver: '' },
    { requirements: 'Throw and catch a baseball, kick a soccer ball through a net and a football over a goalpost', completed: '', approver: '' },
    { requirements: 'Know how to stretch major muscle groups', completed: '', approver: '' },
    { requirements: 'Walk across a 5m balance beam', completed: '', approver: '' },
    { requirements: 'Hit a baseball, golf ball, and hocky puck with proper form', completed: '', approver: '' },
    { requirements: 'Serve and return a volleyball, a tennis ball, and badminton birdie', completed: '', approver: '' },
  ]
const epicAgility= [
    { requirements: 'Win an individual sports competition', completed: '', approver: '' },
    { requirements: 'Know the rules and be able to play Less Common Sports', completed: '', approver: '' },
    { requirements: 'Hit a homerun in a baseball game', completed: '', approver: '' },
    { requirements: 'Achieve the highest level of a martial art', completed: '', approver: '' },
    { requirements: 'Golf 18 holes under par', completed: '', approver: '' },
    { requirements: 'Do the splits', completed: '', approver: '' },
    { requirements: 'Break a school record for athletics', completed: '', approver: '' },
    { requirements: 'Bowl over 200', completed: '', approver: '' },
    { requirements: 'Pass the Presidential Fitness Test', completed: '', approver: '' },
    { requirements: 'Be named MVP by a coach', completed: '', approver: '' },
    { requirements: 'Walk on your hands for 100 feet', completed: '', approver: '' },
    { requirements: 'Do a standing back flip', completed: '', approver: '' },]

const awesomePoise= 
    [ { requirements: 'Respond respectfully to an insult and compliment ', completed: '', approver: '' },
      { requirements: 'Know basic ballroom dance: Box-step, Swing, Cha-Cha ', completed: '', approver: '' },
      { requirements: 'Maintain good posture while sitting, standing and walking ', completed: '', approver: '' },
      { requirements: 'Sit still and attentive for an hour lecture. ', completed: '', approver: '' },
      { requirements: 'Hold your breath for a minute ', completed: '', approver: '' },
      { requirements: 'Be able to do 12 yoga poses ', completed: '', approver: '' },
    ]
const epicPoise= [
      { requirements: 'Participate in a formally organized debate ', completed: '', approver: '' },
      { requirements: 'Walk on your hands 50 feet ', completed: '', approver: '' },
      { requirements: 'Teach a yoga class ', completed: '', approver: '' },
      { requirements: 'Fire walk ', completed: '', approver: '' },
      { requirements: 'Take a ballet class ', completed: '', approver: '' },
      { requirements: 'Place in a dance competition ', completed: '', approver: '' },
      { requirements: 'Know advanced ballroom: Tango, Salsa, Foxtrot, Rumba and a Waltz ', completed: '', approver: '' },
      { requirements: 'Be proficient at ice skating (skate forward, backward, and land a jump) ', completed: '', approver: '' },
      { requirements: 'Jump the wake on skis or a wakeboard ', completed: '', approver: '' },
      { requirements: 'Take an anger management class ', completed: '', approver: '' },
      { requirements: 'Snow ski or snowboard black diamond slope ', completed: '', approver: '' },
      { requirements: 'Win a hot pepper eating competition ', completed: '', approver: '' },]
  
const awesomeDexterity= 
      [ { requirements: 'Type 40 words per minute ', completed: '', approver: '' },
        { requirements: 'Shuffle a deck of cards and do a magic trick ', completed: '', approver: '' },
        { requirements: 'Wrap a present ', completed: '', approver: '' },
        { requirements: 'Bait a hook and cast a fishing pole', completed: '', approver: '' },
        { requirements: 'Thread a needle ', completed: '', approver: '' },
        { requirements: 'Successfully play a platformer, racing, and FPS video game  ', completed: '', approver: '' },
      ]
const epicDexterity= [
        { requirements: 'Juggle more than 3 balls for longer than 2 minutes ', completed: '', approver: '' },
        { requirements: 'Know 200 ASL words ', completed: '', approver: '' },
        { requirements: 'Make 20 distinguishable shadow puppets ', completed: '', approver: '' },
        { requirements: 'Win marksmanship competition ', completed: '', approver: '' },
        { requirements: 'Build a house of cards as tall as you are ', completed: '', approver: '' },
        { requirements: 'Make a complete outfit using a sewing machine  ', completed: '', approver: '' },
        { requirements: 'Sew a full-sized quilt ', completed: '', approver: '' },
        { requirements: 'Knit a sweater', completed: '', approver: '' },
        { requirements: 'Solve a Rubik’s cube in under a minute ', completed: '', approver: '' },
        { requirements: 'Know how to fold 20 different origami shapes ', completed: '', approver: '' },
        { requirements: 'Build a scale model of a ship or airplane ', completed: '', approver: '' },]
  
const awesomeNutrition= 
        [ { requirements: 'Be able to prepare all the food on the Meals list ', completed: '', approver: '' },
          { requirements: 'Know how to cut fruit, veggies, and meat  ', completed: '', approver: '' },
          { requirements: 'Know how to follow a recipe ', completed: '', approver: '' },
          { requirements: 'Grill a steak at different levels ', completed: '', approver: '' },
          { requirements: 'Know how to operate a stove, oven, skillet and BBQ grill ', completed: '', approver: '' },
          { requirements: 'Graciously eat food that you do not enjoy ', completed: '', approver: '' },
        ]
const epicNutrition= [
          { requirements: 'Win a sponsored cooking competition ', completed: '', approver: '' },
          { requirements: 'Prepare a 5-course meal for 8 guests ', completed: '', approver: '' },
          { requirements: 'Get a job that requires a food handler’s permit ', completed: '', approver: '' },
          { requirements: 'Invent a recipe that someone else regularly uses ', completed: '', approver: '' },
          { requirements: 'Compile a cookbook with more than 30 recipes ', completed: '', approver: '' },
          { requirements: 'Earn the Cooking merit badge ', completed: '', approver: '' },
          { requirements: 'Bake a loaf of 3 different types of bread by yourself ', completed: '', approver: '' },
          { requirements: 'Bake and decorate three-tier cake ', completed: '', approver: '' },
          { requirements: 'Memorize the recipe of 5 baked goods ', completed: '', approver: '' },
          { requirements: 'Bake a turducken ', completed: '', approver: '' },
          { requirements: 'Bake 3 dozen macarons ', completed: '', approver: '' },
          { requirements: 'Cook a Baked Alaska for 6 people ', completed: '', approver: '' },]
  
const awesomeFirstAid= 
          [ { requirements: 'Know how to treat a deep cut, scrape and a 1° and 2° burn ', completed: '', approver: '' },
            { requirements: 'Be familiar with basic over the counter items list ', completed: '', approver: '' },
            { requirements: 'Know how to treat a cold, flu, and bacterial infections. ', completed: '', approver: '' },
            { requirements: 'Know how to treat common sports injuries (broken bone, sprain, pulled muscle) ', completed: '', approver: '' },
            { requirements: 'Know when to see a doctor and when to dial 911 ', completed: '', approver: '' },
            { requirements: 'Make and maintain a first aid kit ', completed: '', approver: '' },
          ]
const epicFirstAid= [
            { requirements: 'Get CPR +AED certification ', completed: '', approver: '' },
            { requirements: 'Save someones life ', completed: '', approver: '' },
            { requirements: 'Take an advanced first aid course ', completed: '', approver: '' },
            { requirements: 'Earn the First Aid AND Lifesaving merit badge ', completed: '', approver: '' },
            { requirements: 'Identify every organ in the body and know its function ', completed: '', approver: '' },
            { requirements: 'Teach first aid class ', completed: '', approver: '' },
            { requirements: 'Sew stitches on a deep cut ', completed: '', approver: '' },
            { requirements: 'Memorize the Hippocratic Oath ', completed: '', approver: '' },
            { requirements: 'Know how to perform advanced emergency first aid (tourniquet, tracheotomy) ', completed: '', approver: '' },
            { requirements: 'Volunteer for a year at a hospital or medical facility  ', completed: '', approver: '' },
            { requirements: 'Take a phlebotomy course ', completed: '', approver: '' },]
            
const awesomeSurvival= 
            [ { requirements: 'Know how to tie all the knots on the Knot List ', completed: '', approver: '' },
              { requirements: 'Be able to start a fire with one match', completed: '', approver: '' },
              { requirements: 'Know how to purify water ', completed: '', approver: '' },
              { requirements: 'Set up a tent, and sleep in it ', completed: '', approver: '' },
              { requirements: 'Use a map and compass and find North using stars or sun ', completed: '', approver: '' },
              { requirements: 'Know how to sharpen a knife ', completed: '', approver: '' },
            ]
const epicSurvival= [
              { requirements: 'Know Morse Code ', completed: '', approver: '' },
              { requirements: 'Backpack more than 5 nights ', completed: '', approver: '' },
              { requirements: 'Take a mushroom foraging class ', completed: '', approver: '' },
              { requirements: 'Take a gun safety course ', completed: '', approver: '' },
              { requirements: 'Build a snow shelter and sleep in it ', completed: '', approver: '' },
              { requirements: 'Earn Wilderness Survival AND Emergency Prep merit badge ', completed: '', approver: '' },
              { requirements: 'Catch a fish and eat it. ', completed: '', approver: '' },
              { requirements: 'Catch an animal in a trap ', completed: '', approver: '' },
              { requirements: 'Make a fire without a match or lighter ', completed: '', approver: '' },
              { requirements: 'Earn Epic Pin in First Aid ', completed: '', approver: '' },
              ]
              
const awesomeAppearance= 
              [ { requirements: 'Use proper hygiene (regularly bathe, wash face and hands, use deodorant, brush teeth) ', completed: '', approver: '' },
                { requirements: 'Know the difference and uses for toiletries on list ', completed: '', approver: '' },
                { requirements: 'Know how to iron clothes and read fabric labels ', completed: '', approver: '' },
                { requirements: 'Dress appropriately for school, church, exercise, a job interview, and a formal occasion ', completed: '', approver: '' },
                { requirements: 'Do a load of laundry and fold clothes ', completed: '', approver: '' },
                { requirements: 'Know the differences in fashion styles over the last century ', completed: '', approver: '' },
              ]
const epicAppearance= [
              { requirements: 'Get paid to cut someone elses hair... twice ', completed: '', approver: '' },
              { requirements: 'Compete in a beauty pageant or body building competition ', completed: '', approver: '' },
              { requirements: 'Be a model in a fashion show or photo shoot  ', completed: '', approver: '' },
              { requirements: 'Knit or crochet an article of clothing ', completed: '', approver: '' },
              { requirements: 'Hem pants or skirt and take in a shirt ', completed: '', approver: '' },
              { requirements: 'Prepare hygiene kits for the homeless ', completed: '', approver: '' },
              { requirements: 'Be voted best dressed in the yearbook ', completed: '', approver: '' },
              { requirements: 'Use a clothes pattern to sew a three-piece outfit ', completed: '', approver: '' },
              { requirements: 'Start a fashion trend ', completed: '', approver: '' },
              { requirements: 'Make a makeup tutorial YouTube video that gets 1000 views ', completed: '', approver: '' },
              ]
  
//MENTAL REQUIREMENTS************************************************
const awesomeMath= 
      [ { requirements: 'Add and subtract 3 digits without a calculator', completed: '', approver: '' },
        { requirements: 'Memorize times tables to 12', completed: '', approver: '' },
        { requirements: 'Understand basic algebra (unit conversion and solving for x)', completed: '', approver: '' },
        { requirements: 'Calculate the area of a rectangle, triangle and circle and the volume of a cylinder, cube and pyramid', completed: '', approver: '' },
        { requirements: 'Calculate percentage (for tips or discounts)', completed: '', approver: '' },
        { requirements: 'Know the Order of Operations', completed: '', approver: '' },
      ]
const epicMath= [
        { requirements: 'Create a video of yourself teaching a math concept', completed: '', approver: '' },
        { requirements: 'Pass AP Calculus test', completed: '', approver: '' },
        { requirements: 'Publish a useful app in an app store', completed: '', approver: '' },
        { requirements: 'Learn 3 programming languages', completed: '', approver: '' },
        { requirements: 'Memorize pi to the 20th digit', completed: '', approver: '' },
        { requirements: 'Score 100% on the math sections of the SAT or ACT ', completed: '', approver: '' },
        { requirements: 'Publish a paper in a math journal', completed: '', approver: '' },
        { requirements: 'Be a math tutor for a semester ', completed: '', approver: '' },
        { requirements: 'Be able to quickly multiply any 2 digit numbers without a calculator', completed: '', approver: '' },
        { requirements: 'Win a regional Math Olympiad', completed: '', approver: '' },
        { requirements: 'Be awarded a math related grant', completed: '', approver: '' },]

const awesomeHistory= 
      [ { requirements: 'Know how to use Wikipedia ', completed: '', approver: '' },
        { requirements: 'Be familiar with major eras of world history ', completed: '', approver: '' },
        { requirements: 'Be familiar with Major US wars ', completed: '', approver: '' },
        { requirements: 'Be familiar with the people on US currency ', completed: '', approver: '' },
        { requirements: 'Navigate the reference section of a library ', completed: '', approver: '' },
        { requirements: 'Interview someone older than 90 years old ', completed: '', approver: '' },
      ]
const epicHistory= [
        { requirements: 'Teach a class about a major historical event ', completed: '', approver: '' },
        { requirements: 'Pass AP History test ', completed: '', approver: '' },
        { requirements: 'Participate in a historic event ', completed: '', approver: '' },
        { requirements: 'Know all Historical Figures highlighted in this book ', completed: '', approver: '' },
        { requirements: 'Know Major US Wars ', completed: '', approver: '' },
        { requirements: 'Know Major Historical Eras in world history ', completed: '', approver: '' },
        { requirements: 'Visit 10 history museums ', completed: '', approver: '' },
        { requirements: 'Be a tour guide for a historical place ', completed: '', approver: '' },
        { requirements: 'Reenact an important battle from a major war ', completed: '', approver: '' },
        { requirements: 'Visit one of the Seven Wonders of the Ancient World ', completed: '', approver: '' },
        { requirements: 'Get a place added to the National Registry of Historic Places ', completed: '', approver: '' },]
        
const awesomeScience= 
      [ { requirements: 'Be familiar with different kinds of graphs and charts and how to read them ', completed: '', approver: '' },
        { requirements: 'Know the scientific method and how to design and conduct an experiment ', completed: '', approver: '' },
        { requirements: 'Know significant digits and scientific notation ', completed: '', approver: '' },
        { requirements: 'Be familiar with the Scientific Principles List ', completed: '', approver: '' },
        { requirements: 'Know how to read the periodic table ', completed: '', approver: '' },
        { requirements: 'Be familiar with Scientists List ', completed: '', approver: '' },
      ]
const epicScience= [
        { requirements: 'Design and conduct an experiment that proves something previously unknown ', completed: '', approver: '' },
        { requirements: 'Pass AP Biology or AP Chemistry test ', completed: '', approver: '' },
        { requirements: 'Win a science competition ', completed: '', approver: '' },
        { requirements: 'Make a YouTube video explaining a scientific principle ', completed: '', approver: '' },
        { requirements: 'Identify 20 constellations ', completed: '', approver: '' },
        { requirements: 'Publish a paper in a science journal ', completed: '', approver: '' },
        { requirements: 'Be awarded a grant for scientific research ', completed: '', approver: '' },
        { requirements: 'Visit 10 science museums ', completed: '', approver: '' },
        { requirements: 'Attend 5 different science camps ', completed: '', approver: '' },
        { requirements: 'Name a new plant or animal species ', completed: '', approver: '' },
        ]

const awesomeLanguage= 
        [ { requirements: 'Have a conversation without words ', completed: '', approver: '' },
          { requirements: 'Know what makes a good story and be able to tell a personal anecdote, a fairy tale, a true story. ', completed: '', approver: '' },
          { requirements: 'Write an essay ', completed: '', approver: '' },
          { requirements: 'Have a library card and know how to find a book ', completed: '', approver: '' },
          { requirements: 'Write a letter ', completed: '', approver: '' },
          { requirements: 'Communicate using code (Morse, nautical, cipher etc) ', completed: '', approver: '' },
        ]
const epicLanguage= [
          { requirements: 'Read 1000 books ', completed: '', approver: '' },
          { requirements: 'Pass AP English Test ', completed: '', approver: '' },
          { requirements: 'Publish a short story ', completed: '', approver: '' },
          { requirements: 'Solve the New York Times crossword puzzle every day of a week ', completed: '', approver: '' },
          { requirements: 'Know the fallacies list  ', completed: '', approver: '' },
          { requirements: 'Write an op-ed that is published in a newspaper ', completed: '', approver: '' },
          { requirements: 'Compete in the regional spelling bee ', completed: '', approver: '' },
          { requirements: 'Write a novel with more than 50,000 words ', completed: '', approver: '' },
          { requirements: 'Write a screenplay ', completed: '', approver: '' },
          { requirements: 'Pass a language fluency test in a foreign language ', completed: '', approver: '' },
          { requirements: 'Know 250 words of 3 foreign languages ', completed: '', approver: '' },]

const awesomeGeography= 
          [ { requirements: 'Find your way home from 5 miles away without GPS ', completed: '', approver: '' },
            { requirements: 'How to read a map, atlas and GPS ', completed: '', approver: '' },
            { requirements: 'Know the cities in your metro area ', completed: '', approver: '' },
            { requirements: 'Be familiar with the 50 states and capitals ', completed: '', approver: '' },
            { requirements: 'Be familiar with the G20 countries and their capitals ', completed: '', approver: '' },
            { requirements: 'Identify the oceans and continents of the world ', completed: '', approver: '' },
          ]
const epicGeography= [
            { requirements: 'Travel to more than 5 different countries ', completed: '', approver: '' },
            { requirements: 'Pass AP Geography Test ', completed: '', approver: '' },
            { requirements: 'Memorize all states and capitals ', completed: '', approver: '' },
            { requirements: 'Identify the counties in your family history ', completed: '', approver: '' },
            { requirements: 'Know G20 countries and their capitals ', completed: '', approver: '' },
            { requirements: 'Identify every country on a world map ', completed: '', approver: '' },
            { requirements: 'Have a place named after you on a published map ', completed: '', approver: '' },
            { requirements: 'Visit 20 National Parks ', completed: '', approver: '' },
            { requirements: 'Identify 100 world flags ', completed: '', approver: '' },
            { requirements: 'Visit every state in the US ', completed: '', approver: '' },
            ]

const awesomeFinance= 
            [ { requirements: 'Be familiar with investments list ', completed: '', approver: '' },
              { requirements: 'Get paid for a service by someone not your parents ', completed: '', approver: '' },
              { requirements: 'Know your credit score and maintain good credit ', completed: '', approver: '' },
              { requirements: 'Be able to buy groceries ', completed: '', approver: '' },
              { requirements: 'Make a monthly budget ', completed: '', approver: '' },
              { requirements: 'Know how to evaluate a loan and how interest works ', completed: '', approver: '' },
            ]
const epicFinance= [
              { requirements: 'Build a profitable business ', completed: '', approver: '' },
              { requirements: 'Earn and save $1,000 ', completed: '', approver: '' },
              { requirements: 'Take out a small loan and pay it off ', completed: '', approver: '' },
              { requirements: 'Take part in a fundraiser that earns over $10,000 ', completed: '', approver: '' },
              { requirements: 'Apply for and be approved for a credit card with an allowance of more than $5000 ', completed: '', approver: '' },
              { requirements: 'Open a bank account and write a check to someone for more than $50.00 ', completed: '', approver: '' },
              { requirements: 'Earn Personal Management merit badge ', completed: '', approver: '' },
              { requirements: 'Have investments in more than 6 types from Investment list ', completed: '', approver: '' },
              { requirements: 'Attend an investment seminar ', completed: '', approver: '' },
              { requirements: 'Run a successful Kickstarter campaign ', completed: '', approver: '' },
              ]

const awesomeEngineering= 
              [ { requirements: 'Build a desk, bookcase, or complicated furniture from Ikea ', completed: '', approver: '' },
                { requirements: 'Know Simple Machines List ', completed: '', approver: '' },
                { requirements: 'Know tools on Tool List ', completed: '', approver: '' },
                { requirements: 'Sand and stain a piece of wood ', completed: '', approver: '' },
                { requirements: 'Build a Lego set that is more than 1000 pieces ', completed: '', approver: '' },
                { requirements: 'Lash poles together to build a useful structure ', completed: '', approver: '' },
              ]
const epicEngineering= [
                { requirements: 'Install drywall, cover nails with putty and paint ', completed: '', approver: '' },
                { requirements: 'Create a metal structure using welding  ', completed: '', approver: '' },
                { requirements: 'Restore a piece of old furniture ', completed: '', approver: '' },
                { requirements: 'Forge something out of iron ', completed: '', approver: '' },
                { requirements: 'Build a piece of new furniture ', completed: '', approver: '' },
                { requirements: 'Get a patent for an invention ', completed: '', approver: '' },
                { requirements: 'Build a fence ', completed: '', approver: '' },
                { requirements: 'Rebuild a car engine ', completed: '', approver: '' },
                { requirements: 'Take apart a small appliance and put it back together (toaster,CD player, etc) ', completed: '', approver: '' },
                { requirements: 'Design and build a functioning go-cart ', completed: '', approver: '' },
                { requirements: 'Install a light fixture ', completed: '', approver: '' },
                { requirements: 'Remove and install a sink or a toilet ', completed: '', approver: '' },]
                
const awesomeTechnology= 
                [ { requirements: 'Know how to use the internet safely ', completed: '', approver: '' },
                  { requirements: 'Use Word processor, Spreadsheet, Slideshow ', completed: '', approver: '' },
                  { requirements: 'Know how to use a copy machine, fax machine, rotary phone ', completed: '', approver: '' },
                  { requirements: 'Know how to safely download and install a software program ', completed: '', approver: '' },
                  { requirements: 'Make a logo or graphic using design software ', completed: '', approver: '' },
                  { requirements: 'Know how to send an email with an attachment and some HTML formatting ', completed: '', approver: '' },
                ]
const epicTechnology= [
                  { requirements: '3D print something useful ', completed: '', approver: '' },
                  { requirements: 'Build a robot and program it to do a complicated task ', completed: '', approver: '' },
                  { requirements: 'Participate in a hackathon ', completed: '', approver: '' },
                  { requirements: 'Build a website using HTML and CSS ', completed: '', approver: '' },
                  { requirements: 'Build a computer ', completed: '', approver: '' },
                  { requirements: 'Attend a technology conference ', completed: '', approver: '' },
                  { requirements: 'Earn the Programming and Computers merit badges ', completed: '', approver: '' },
                  { requirements: 'Design a font ', completed: '', approver: '' },
                  { requirements: 'Get a software patent  ', completed: '', approver: '' },
                  { requirements: 'Take a software certification course ', completed: '', approver: '' },
                  { requirements: 'Place in a robotics competition ', completed: '', approver: '' },]
                  
const awesomeCivics= 
    [ { requirements: 'Know the cities in your metro area	 ', completed: '', approver: '' },
      { requirements: 'Be familiar with government organization on Federal, State and Local levels ', completed: '', approver: '' },
      { requirements: 'Know the Pledge of Allegiance, the National Anthem and proper flag etiquette ', completed: '', approver: '' },
      { requirements: 'Be familiar with the US constitution, the Bill of Rights and the Declaration of Independence ', completed: '', approver: '' },
      { requirements: 'Be familiar with major political parties and their positions ', completed: '', approver: '' },
      { requirements: 'Be familiar with and know the differences in the different branches of the armed forces. ', completed: '', approver: '' },
    ]
const epicCivics= [
      { requirements: 'Represent your community in a national forum ', completed: '', approver: '' },
      { requirements: 'Be a part of a community organization for a year ', completed: '', approver: '' },
      { requirements: 'Pass AP Civics test ', completed: '', approver: '' },
      { requirements: 'Pass US Citizenship test ', completed: '', approver: '' },
      { requirements: 'Participate in an election campaign ', completed: '', approver: '' },
      { requirements: 'Work with a local government council to make a difference in your community ', completed: '', approver: '' },
      { requirements: 'Tour 12 government buildings ', completed: '', approver: '' },
      { requirements: 'Participate in a Model UN  ', completed: '', approver: '' },
      { requirements: 'Testify before a legislative body ', completed: '', approver: '' },
      { requirements: 'Earn Epic pin for History ', completed: '', approver: '' },
      ]

//SPIRITUAL REQUIREMENTS************************************************

const awesomeFaith= 
[ { requirements: 'Know how to navigate scriptures and read them regularly. ', completed: '', approver: '' },
  { requirements: 'Be familiar with the articles of faith or creed of your church. ', completed: '', approver: '' },
  { requirements: 'Know 6 faith scriptures ', completed: '', approver: '' },
  { requirements: 'Be familiar World Religions List ', completed: '', approver: '' },
  { requirements: 'Testify to others about your beliefs  ', completed: '', approver: '' },
  { requirements: 'Pay regular tithe or offering to your church ', completed: '', approver: '' },
]
const epicFaith= [
  { requirements: 'Go to a week-long church camp (FSY, trek, etc) ', completed: '', approver: '' },
  { requirements: 'Attend a church service of 6 different faiths ', completed: '', approver: '' },
  { requirements: 'Memorize your religions creeds or articles of faith ', completed: '', approver: '' },
  { requirements: 'Teach Sunday School for 6 months ', completed: '', approver: '' },
  { requirements: 'Memorize 12 scriptures about faith ', completed: '', approver: '' },
  { requirements: 'Practice the five pillars of Islam ', completed: '', approver: '' },
  { requirements: 'Graduate from Seminary ', completed: '', approver: '' },
  { requirements: 'Complete Catechism for your church ', completed: '', approver: '' },
  { requirements: 'Read 2 books of scripture cover to cover twice  ', completed: '', approver: '' },
  { requirements: 'Earn the Awesome Pin for all principles in the Spiritual pillar ', completed: '', approver: '' },
  ]

const awesomeHope= 
[ { requirements: 'Make a list of 12 talents ', completed: '', approver: '' },
  { requirements: 'Identify 12 people in your support network ', completed: '', approver: '' },
  { requirements: 'Make a list of life goals ', completed: '', approver: '' },
  { requirements: 'Make a list of short-term goals ', completed: '', approver: '' },
  { requirements: 'Know how to pray and do it daily ', completed: '', approver: '' },
  { requirements: 'Have something you are looking forward to ', completed: '', approver: '' },
]
const epicHope= [
  { requirements: 'Keep a consistent journal for more than a year ', completed: '', approver: '' },
  { requirements: 'Memorize 6 scriptures about hope ', completed: '', approver: '' },
  { requirements: 'Volunteer 12 hours at a nursing home ', completed: '', approver: '' },
  { requirements: 'Volunteer for a semester in a support group ', completed: '', approver: '' },
  { requirements: 'Take part in a peaceful protest or march ', completed: '', approver: '' },
  { requirements: 'Find 100 deceased relatives and do their temple work ', completed: '', approver: '' },
  { requirements: 'Know your family history completely for 6 generations ', completed: '', approver: '' },
  { requirements: 'Be a mentor to someone less fortunate than you ', completed: '', approver: '' },
  { requirements: 'Know Reformers list ', completed: '', approver: '' },
  { requirements: 'Organize a time capsule for your community ', completed: '', approver: '' },
  { requirements: 'Plant 12 trees ', completed: '', approver: '' },]
  
const awesomeCharity= 
[ { requirements: 'Know 6 charity scriptures ', completed: '', approver: '' },
  { requirements: 'Know how to give a sincere compliment ', completed: '', approver: '' },
  { requirements: 'Complete the awesome requirements for Empathy ', completed: '', approver: '' },
  { requirements: 'Give money to the poor and needy ', completed: '', approver: '' },
  { requirements: 'Give of your time to someone who needs help ', completed: '', approver: '' },
  { requirements: 'Share a talent with someone ', completed: '', approver: '' },
]
const epicCharity= [
  { requirements: 'Organize a service project for a family member ', completed: '', approver: '' },
  { requirements: 'Organize a service project with a Non-Profit organization ', completed: '', approver: '' },
  { requirements: 'Organize a service project for a stranger ', completed: '', approver: '' },
  { requirements: 'Memorize the Lords Prayer, the Ten Commandments and the Beatitudes ', completed: '', approver: '' },
  { requirements: 'Memorize 12 scriptures about charity ', completed: '', approver: '' },
  { requirements: 'Do 12 hours of anonymous service ', completed: '', approver: '' },
  { requirements: 'Donate money, time or materials to 6 different charities ', completed: '', approver: '' },
  { requirements: 'Create a charitable organization ', completed: '', approver: '' },
  { requirements: 'Develop a fundraiser for a charitable organization ', completed: '', approver: '' },
  { requirements: 'Give away your favorite thing to someone who needs it more ', completed: '', approver: '' },
  ]

const awesomePatience= 
  [ { requirements: 'Roast a marshmallow to perfection ', completed: '', approver: '' },
    { requirements: 'Do an activity that you do not enjoy doing without complaining ', completed: '', approver: '' },
    { requirements: 'Wait in line for more than 30 minutes ', completed: '', approver: '' },
    { requirements: 'Sit through a 2-hour long lecture ', completed: '', approver: '' },
    { requirements: 'Wait on hold for more than 15 minutes ', completed: '', approver: '' },
    { requirements: 'Count 1000 things ', completed: '', approver: '' },
  ]
const epicPatience= [
    { requirements: 'Win a game of hide and seek that lasts longer than a half hour ', completed: '', approver: '' },
    { requirements: 'Dig a hole that is deeper than you are tall ', completed: '', approver: '' },
    { requirements: 'Complete a 1000-piece puzzle ', completed: '', approver: '' },
    { requirements: 'Plant a garden with more than 6 kinds of vegetables ', completed: '', approver: '' },
    { requirements: 'Be a living statue street performer for a day ', completed: '', approver: '' },
    { requirements: 'Start a collection of something unique and rare ', completed: '', approver: '' },
    { requirements: 'Count 10,000 things ', completed: '', approver: '' },
    { requirements: 'Bake a 3-tiered cake ', completed: '', approver: '' },
    { requirements: 'Win a call-in contest on the radio', completed: '', approver: '' },
    { requirements: 'Volunteer more than 12 hours at an animal shelter', completed: '', approver: '' },
    { requirements: 'Volunteer more than 12 hours at a preschool or daycare', completed: '', approver: '' },]

const awesomeDiligenc= 
    [ { requirements: 'Use a calendar and/or day planner consistently for a week ', completed: '', approver: '' },
      { requirements: 'Make and prioritize a list of to do items ', completed: '', approver: '' },
      { requirements: 'Set an alarm and wake up early for something ', completed: '', approver: '' },
      { requirements: 'Do two Awesome level requirements at the same time ', completed: '', approver: '' },
      { requirements: 'Know your address, phone number and social security number ', completed: '', approver: '' },
      { requirements: 'Ask for a chore to do. When it is done, ask for another ', completed: '', approver: '' },
    ]
const epicDiligence= [
      { requirements: 'Plan an event that requires coordinating the schedules of more than 10 people ', completed: '', approver: '' },
      { requirements: 'Set a time sensitive goal that requires coordination. ', completed: '', approver: '' },
      { requirements: 'Earn Eagle Scout rank, or Gold Award ', completed: '', approver: '' },
      { requirements: 'Be a member of the National Honor Society ', completed: '', approver: '' },
      { requirements: 'Earn Duty to God award  ', completed: '', approver: '' },
      { requirements: 'Maintain a 4.0 GPA for a year ', completed: '', approver: '' },
      { requirements: 'Organize a fundraiser with more than 20 people involved ', completed: '', approver: '' },
      { requirements: 'Manage 3 or more extracurricular activities for a semester ', completed: '', approver: '' },
      { requirements: 'Plan a wedding ', completed: '', approver: '' },
      { requirements: 'Do something in a week that would normally take a month  ', completed: '', approver: '' },
      { requirements: 'Plan a family vacation ', completed: '', approver: '' },]

const awesomeHumility= 
      [ { requirements: 'Make a list of your blessings ', completed: '', approver: '' },
        { requirements: 'Know how to sincerely apologize ', completed: '', approver: '' },
        { requirements: 'Willingly accept an assignment from an ecclesiastical leader ', completed: '', approver: '' },
        { requirements: 'Meditate or ponder for 15 minutes ', completed: '', approver: '' },
        { requirements: 'Allow someone in a hurry to go before you ', completed: '', approver: '' },
        { requirements: 'Know Forms of Pride List ', completed: '', approver: '' },
      ]
const epicHumility= [
        { requirements: 'Memorize the Lords Prayer, the Ten Commandments and the Beatitudes ', completed: '', approver: '' },
        { requirements: '12 hours of service at a hospital or retirement center ', completed: '', approver: '' },
        { requirements: '12 hours of service at a homeless shelter ', completed: '', approver: '' },
        { requirements: 'Write thank you notes to every teacher youve had ', completed: '', approver: '' },
        { requirements: 'Memorize 6 scriptures about humility ', completed: '', approver: '' },
        { requirements: 'Take a course on meditation and mindfulness ', completed: '', approver: '' },
        { requirements: 'Do something TRULY embarrassing for a worthy cause ', completed: '', approver: '' },
        { requirements: 'Spend a semester in a third world country ', completed: '', approver: '' },
        { requirements: 'Know Hindu Deities list ', completed: '', approver: '' },
        { requirements: 'Earn the Epic Achievement for Empathy ', completed: '', approver: '' },
        { requirements: 'Engage in an argument you are passionate about and admit that you are wrong and apologize ', completed: '', approver: '' },]

const awesomeIntegrity= 
        [ { requirements: 'Make and keep a difficult promise ', completed: '', approver: '' },
          { requirements: 'Keep a harmless secret for 24 hours ', completed: '', approver: '' },
          { requirements: 'Identify 12 forms of deception ', completed: '', approver: '' },
          { requirements: 'Provide a list of three character references ', completed: '', approver: '' },
          { requirements: 'Be left alone for a day ', completed: '', approver: '' },
          { requirements: 'Return a lost item to its owner ', completed: '', approver: '' },
        ]
const epicIntegrity= [
          { requirements: 'Memorize the Lords Prayer, the Ten Commandments and the Beatitudes ', completed: '', approver: '' },
          { requirements: 'Receive an award for a particularly honest act ', completed: '', approver: '' },
          { requirements: 'Be featured in the news for a particularly honest act ', completed: '', approver: '' },
          { requirements: 'Pass a polygraph test ', completed: '', approver: '' },
          { requirements: 'Provide a list of 12 character references ', completed: '', approver: '' },
          { requirements: 'Investigate and break a corruption story in the news ', completed: '', approver: '' },
          { requirements: 'Teach all Old Testament stories  ', completed: '', approver: '' },
          { requirements: 'Memorize 6 scriptures about integrity ', completed: '', approver: '' },
          { requirements: 'Be certified as a public notary ', completed: '', approver: '' },
          { requirements: 'Testify in a court case ', completed: '', approver: '' },
          { requirements: 'Be a referee in an official sports competition ', completed: '', approver: '' },]
          
const awesomeVirtue= 
          [ { requirements: 'Fast from food for 24 hrs ', completed: '', approver: '' },
            { requirements: 'Abstain from something you love for a week ', completed: '', approver: '' },
            { requirements: 'Give blood to a blood bank ', completed: '', approver: '' },
            { requirements: 'Explain why it is important to use good language ', completed: '', approver: '' },
            { requirements: 'Set aside one day a week as a holy day ', completed: '', approver: '' },
            { requirements: 'Identify 12 vices ', completed: '', approver: '' },
          ]
const epicVirtue= [
            { requirements: 'Memorize 6 scriptures about virtue ', completed: '', approver: '' },
            { requirements: 'Memorize The Family: A Proclamation to the World ', completed: '', approver: '' },
            { requirements: 'Know and teach 12 New Testament stories ', completed: '', approver: '' },
            { requirements: 'Write an essay about virtue.  Include a story of someone who was particularly virtuous ', completed: '', approver: '' },
            { requirements: 'Abstain from something unhealthy (eg soda) for a year ', completed: '', approver: '' },
            { requirements: 'Know and explain everyone on the Catholic Saints list ', completed: '', approver: '' },
            { requirements: 'Visit 12 different temples, or holy sites ', completed: '', approver: '' },
            { requirements: 'Volunteer with a mentoring program for a semester ', completed: '', approver: '' },
            { requirements: 'Receive an award for a particularly virtuous act ', completed: '', approver: '' },
            { requirements: 'Be featured in the news for a particularly virtuous act ', completed: '', approver: '' },
            ]
            
const awesomeGrit= 
            [ { requirements: 'Set a SMART goal and achieve it ', completed: '', approver: '' },
              { requirements: 'Set aside 30 minutes a day to practice an approved skill for a month  ', completed: '', approver: '' },
              { requirements: 'Stay awake for 36 hours ', completed: '', approver: '' },
              { requirements: 'Go 48 hours without looking at a screen ', completed: '', approver: '' },
              { requirements: 'Do an approved difficult activity for 6 consecutive hours ', completed: '', approver: '' },
              { requirements: 'Learn how to do something you’ve never done before ', completed: '', approver: '' },
            ]
const epicGrit= [
              { requirements: 'Write a persuasive essay about a topic you care deeply about ', completed: '', approver: '' },
              { requirements: 'Pick a principle and do ALL of the Epic level requirements ', completed: '', approver: '' },
              { requirements: 'Do something that people think cannot be done ', completed: '', approver: '' },
              { requirements: 'Sell something to someone who doesn’t want it ', completed: '', approver: '' },
              { requirements: 'Find a four-leaf clover ', completed: '', approver: '' },
              { requirements: 'Beat every level and side quest of a difficult video game ', completed: '', approver: '' },
              { requirements: 'Complete every Awesome level requirement in this book ', completed: '', approver: '' },
              { requirements: 'Complete an approved project that takes over a year ', completed: '', approver: '' },
              { requirements: 'Memorize every memorization requirement in this book ', completed: '', approver: '' },
              ]

//SOCIAL REQUIREMENTS************************************************

const awesomeLeadership= 
[ { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
]
const epicLeadership= [
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },]

const awesomeConfidence= 
[ { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
]
const epicConfidence= [
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },]
  
const awesomeCourage= 
[ { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
]
const epicCourage= [
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },
  { requirements: ' ', completed: '', approver: '' },]

const awesomeEmpathy= 
  [ { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
  ]
const epicEmpathy= [
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },
    { requirements: ' ', completed: '', approver: '' },]

const awesomeEnthusiasm= 
    [ { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
    ]
const epicEnthusiasm= [
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },
      { requirements: ' ', completed: '', approver: '' },]

const awesomeResponsability= 
      [ { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
      ]
const epicResponsability= [
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },
        { requirements: ' ', completed: '', approver: '' },]

const awesomeArt= 
        [ { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
        ]
const epicArt= [
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },
          { requirements: ' ', completed: '', approver: '' },]
          
const awesomeMusic= 
          [ { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
          ]
const epicMusic= [
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },]
            
const awesomeCulture= 
            [ { requirements: ' ', completed: '', approver: '' },
              { requirements: ' ', completed: '', approver: '' },
              { requirements: ' ', completed: '', approver: '' },
              { requirements: ' ', completed: '', approver: '' },
              { requirements: ' ', completed: '', approver: '' },
              { requirements: ' ', completed: '', approver: '' },
            ]
const epicCulture= [

            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },
            { requirements: ' ', completed: '', approver: '' },]

  // export default reqs;