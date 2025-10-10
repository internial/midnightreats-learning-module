import { ModuleData } from '../types';

/**
 * This file contains all the static data for the training modules.
 * Each object in the MODULES array represents a complete module,
 * including its content, quiz, and metadata.
 */
export const MODULES: ModuleData[] = [
  {
    id: 'module-1',
    title: 'First Day Basics & Work Attire',
    description: 'Everything you need to know for a successful first day, from clocking in to dress code.',
    content: [
      { type: 'heading', content: 'First Day Checklist' },
      { type: 'list', content: [
        'Store personal belongings in the designated area.',
        'Ensure you have the proper work attire on before clocking in.',
        'Clock in at the start of your shift and clock out at the end. Contact a manager ASAP if you forget.',
        'Remember to clock in and out for breaks.',
        'Wash your hands for 20 seconds with hot water after clocking in.',
      ]},
      { type: 'heading', content: 'Work Attire Requirements' },
      { type: 'paragraph', content: 'Our required work attire is essential for a professional and safe environment.' },
      { type: 'list', content: [
        'Proper headwear: Hat, Bandana, Full Wrap Headband, or Hairnet.',
        'The team shirt or a plain all-black shirt.',
        'Closed-toe shoes are mandatory for safety.',
        'Hair longer than shoulder length must be tied up with no bangs in the front.',
        'Start each shift by lint rolling your uniform, especially if you have pets.',
      ]},
       { type: 'clickToReveal', content: {
        title: 'Why is the dress code so specific?',
        body: 'A consistent and professional appearance builds customer trust. Safety measures like closed-toe shoes and tied-back hair are crucial in a food service environment to prevent accidents and ensure hygiene.'
      }}
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 3,
      questions: [
        {
          id: 'q1-1',
          type: 'multiple-choice',
          question: 'How long should you wash your hands with hot water after clocking in?',
          options: ['10 seconds', '15 seconds', '20 seconds', 'It doesn\'t matter'],
          answer: '20 seconds',
          explanation: 'The FDA-approved hand washing technique requires washing for at least 20 seconds in hot water to ensure proper hygiene.'
        },
        {
          id: 'q1-2',
          type: 'true-false',
          question: 'Open-toed shoes, like sandals, are acceptable work attire.',
          answer: 'False',
          explanation: 'For safety reasons, all team members must wear closed-toe shoes at all times.'
        },
        {
          id: 'q1-3',
          type: 'multiple-choice',
          question: 'What is the correct procedure if you forget to clock in?',
          options: ['Ask a coworker to clock you in', 'Tell your manager at the end of the week', 'Contact your manager ASAP with the correct time', 'Just clock in when you remember'],
          answer: 'Contact your manager ASAP with the correct time',
          explanation: 'Accurate timekeeping is critical. You must notify your manager immediately of any clock-in or clock-out errors to ensure you are paid correctly.'
        }
      ]
    }
  },
  {
    id: 'module-2',
    title: 'Food Safety & Hygiene',
    description: 'Learn the critical practices for maintaining a safe and clean environment for everyone.',
    content: [
      { type: 'heading', content: 'Handling Food Safely' },
      { type: 'paragraph', content: 'Gloves are only required if you have long nails or extensions. Otherwise, proper and frequent hand washing is the most important practice.'},
      { type: 'list', content: [
          "Avoid touching things like your phone, face, or clothing with your hands/gloves, as this contaminates them.",
          "Phones are not clean. They should not be left out or used without cleaning your hands afterwards.",
          "If customers arrive during closing cleaning, you must wash or sanitize your hands before serving them.",
          "Nothing (e.g., bags of cookie dough, lids, trays) should ever be placed on the floor."
      ]},
      { type: 'scenario', content: {
        title: 'Scenario: Multitasking During a Shift',
        body: 'You receive a text message while handling food. The correct procedure is to finish your food-related task, remove your gloves (if wearing any), wash your hands, handle your phone, and then wash your hands again before returning to food service.'
      }}
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 3,
      questions: [
        {
          id: 'q2-1',
          type: 'true-false',
          question: 'It is acceptable to place a bag of cookie dough on the floor temporarily if you are busy.',
          answer: 'False',
          explanation: 'The floor is considered unclean. Nothing that will be used for food preparation or service should ever touch the floor.'
        },
        {
          id: 'q2-2',
          type: 'multiple-choice',
          question: 'When are gloves required for food handling?',
          options: ['At all times', 'Only when handling raw dough', 'Only if you have long nails or extensions', 'Never'],
          answer: 'Only if you have long nails or extensions',
          explanation: 'Gloves are required for long nails or extensions. Otherwise, frequent and proper hand washing is the standard.'
        },
        {
          id: 'q2-3',
          type: 'true-false',
          question: 'You can assume your hands/gloves are still clean after touching your face or phone.',
          answer: 'False',
          explanation: 'Faces, phones, and clothing are not clean surfaces. Touching them contaminates your hands/gloves, requiring you to wash/sanitize before handling food again.'
        }
      ]
    }
  },
  {
    id: 'module-3',
    title: 'Allergens & Brand Introduction',
    description: 'Understand our ingredients, allergen policies, and the core values of the Midnight Treats brand.',
    content: [
      { type: 'heading', content: 'Allergen Information' },
       { type: 'paragraph', content: 'It is crucial to memorize this information to keep our customers safe.'},
      { type: 'list', content: [
          "All cookies contain Soy and Wheat.",
          "All cookies may contain Coconut.",
          "Our kitchen is free from dairy, eggs, and peanuts.",
          "Cross-contamination is possible as some ingredients are made in facilities that also process dairy/eggs."
      ]},
      { type: 'clickToReveal', content: {
          title: 'What if a customer asks for our recipes or ingredient brands?',
          body: 'We do not give out our recipes or the brands of ingredients we use. Politely let them know this information is proprietary and that our full ingredient lists are on the FAQs page of our website.'
      }},
       { type: 'heading', content: 'Our Brand & Culture' },
        { type: 'paragraph', content: 'We are a sustainable, plant-based business with a "midnight vibe". We focus on creating a positive perception around plant-based foods without being overtly "vegan" in our marketing.'},
        { type: 'list', content: [
            "Open and Constant Feedback: Be open to accepting and giving respectful feedback to help everyone improve.",
            "Radical Honesty: Own up to mistakes rather than trying to cover them up.",
            "Growth Mindset: View challenges as opportunities to learn and improve.",
        ]},
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 3,
      questions: [
        {
          id: 'q3-1',
          type: 'multiple-choice',
          question: 'A customer with a severe dairy allergy asks if our cookies are safe. What is the best response?',
          options: ['"Yes, they are all 100% dairy-free."', '"Our kitchen is dairy-free, but some ingredients are made in facilities with dairy, so cross-contamination is possible."', '"I\'m not sure, you should probably not risk it."', '"Yes, everything we make is vegan."'],
          answer: '"Our kitchen is dairy-free, but some ingredients are made in facilities with dairy, so cross-contamination is possible."',
          explanation: 'This is the most accurate and honest answer. It states our kitchen policy while also informing the customer about the potential risk of cross-contamination from suppliers.'
        },
        {
          id: 'q3-2',
          type: 'true-false',
          question: 'If a customer asks for the brand of chocolate chips we use, we should tell them.',
          answer: 'False',
          explanation: 'We do not give out our recipes or brands of ingredients. This information is considered proprietary.'
        },
         {
          id: 'q3-3',
          type: 'multiple-choice',
          question: 'Which of these is NOT a core part of our company culture?',
          options: ['Radical Honesty', 'Growth Mindset', 'Avoiding customer feedback', 'Open Minded Discussion'],
          answer: 'Avoiding customer feedback',
          explanation: 'Open and Constant Feedback is a key part of our culture. We value feedback from both team members and customers to help us improve.'
        }
      ]
    }
  },
  {
    id: 'module-4',
    title: 'Customer Interaction',
    description: 'Master the art of creating a welcoming and memorable experience for every customer.',
    content: [
      { type: 'heading', content: 'The Midnight Treats Experience' },
      { type: 'paragraph', content: 'Bad customer service can ruin a great product. Our advantage as a small business is the ability to give customers a more personable experience. Every customer interaction is a chance to get a 5-star review!' },
      { type: 'list', content: [
        'Warmly greet every customer with "Welcome in!" as they enter.',
        'Smile and make eye contact when talking with them.',
        'Give them space to decide. Say "Just let me know when you\'re ready" instead of staring at them.',
        'Don\'t bring up that the cookies are vegan/dairy-free unless the customer asks first.'
      ]},
      { type: 'heading', content: 'The Serving Script' },
       { type: 'scenario', content: {
        title: 'For a New Customer',
        body: 'After greeting them, ask "Have you been here before?". If they say no, explain: "We make from scratch giant one third of a pound cookies with 2 flavors rotating every two weeks. Right now, the rotational flavors are...".'
      }},
       { type: 'scenario', content: {
        title: 'For a Returning Customer',
        body: 'When they say they\'ve been here before, respond with "Welcome Back! Our current rotational flavors are...".'
      }},
      { type: 'scenario', content: {
        title: 'Closing the Sale',
        body: 'Before clicking Charge, always ask, “Are you a rewards member?”. After payment, say “Thanks, you\'re all set!” and mention the reheating instructions on the box.'
      }},
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 2,
      questions: [
        {
          id: 'q4-1',
          type: 'multiple-choice',
          question: 'What is the standard greeting for every customer entering the store?',
          options: ['"Hi, what can I get you?"', '"Welcome in!"', '"Have you been here before?"', '"Our rotational flavors are..."'],
          answer: '"Welcome in!"',
          explanation: 'A warm "Welcome in!" is the standard greeting to make customers feel immediately welcome and acknowledged.'
        },
        {
          id: 'q4-2',
          type: 'true-false',
          question: 'You should always mention that the cookies are vegan to every customer.',
          answer: 'False',
          explanation: 'We don\'t lead with this information as it can create a negative stigma. Only bring it up if the customer asks or brings it up first.'
        },
        {
          id: 'q4-3',
          type: 'multiple-choice',
          question: 'Right before you hit the "Charge" button, what question should you ask the customer?',
          options: ['"Do you want to leave a tip?"', '"Will that be all for you?"', '"Are you a rewards member?"', '"Do you want your cookies cut in half?"'],
          answer: '"Are you a rewards member?"',
          explanation: 'Asking about the rewards program before charging is a key step in the serving script to ensure customers get their points.'
        }
      ]
    }
  },
   {
    id: 'module-5',
    title: 'POS & Online Orders',
    description: 'Learn to navigate the Point of Sale system, manage online orders, and handle gift cards.',
    content: [
      { type: 'heading', content: 'P.O.S. & Tablets' },
      { type: 'paragraph', content: 'The Point of Sales (POS) is where we ring up customers and receive online orders from services like Uber, DoorDash, and Grubhub.' },
      { type: 'list', content: [
        "The two main screens are Quick Order and Orders Hub.",
        "Scheduled orders appear in the Scheduled tab; always check this when opening and throughout the day.",
        "When a new order comes in, immediately check that you have the cookies and mark it 'Ready For Pickup'.",
        "Always double-check the quantity of each item, shown by the '2x' next to the item name.",
      ]},
       { type: 'scenario', content: {
        title: 'Spotting a Mistake',
        body: 'An online order for a 4-pack has a total of $30. This should seem strange. You should scroll down to check the quantity, as it likely means the customer ordered two 4-packs by mistake.'
      }},
      { type: 'heading', content: 'Gift Cards' },
      { type: 'list', content: [
          "We sell both physical and eGift cards, which can be purchased in-store or online.",
          "IMPORTANT: All gift cards can only be redeemed in-store.",
          "Gift cards must be redeemed at the store where they were purchased."
      ]},
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 3,
      questions: [
        {
          id: 'q5-1',
          type: 'multiple-choice',
          question: 'When a new online order comes in, what is the first thing you should do?',
          options: ['Make the cookies from scratch', 'Wait for the driver to arrive', 'Immediately check if you have the cookies and mark "Ready For Pickup"', 'Call the customer to confirm'],
          answer: 'Immediately check if you have the cookies and mark "Ready For Pickup"',
          explanation: 'This ensures the system is updated and helps streamline the pickup process for delivery drivers.'
        },
        {
          id: 'q5-2',
          type: 'true-false',
          question: 'Customers can use their gift cards to pay for online orders.',
          answer: 'False',
          explanation: 'The guide explicitly states that gift cards cannot be used online at this time and can only be redeemed in-store.'
        },
        {
          id: 'q5-3',
          type: 'multiple-choice',
          question: 'Where should you look for orders that are scheduled for a future pickup time?',
          options: ['In the Quick Order screen', 'In the Scheduled tab in the Orders Hub', 'In the group chat', 'On the white board'],
          answer: 'In the Scheduled tab in the Orders Hub',
          explanation: 'Scheduled orders are organized under their own tab in the Orders Hub to keep them separate from immediate orders.'
        }
      ]
    }
  },
   {
    id: 'module-6',
    title: 'Baking & Munchies',
    description: 'Understand the standard procedures for baking cookies and munchies to ensure consistency and quality.',
    content: [
      { type: 'heading', content: 'Baking Cookies' },
      { type: 'list', content: [
        "Keep walk-in, cooler, and oven doors open as little as possible to maintain temperature.",
        "Bake 6-12 cookies per tray in a 3x4 pattern. A full oven holds 4 trays (max 48 cookies).",
        "Load trays top-down, unload trays bottom-up.",
        "The bake time/temp is written in the store and changes, so always double-check.",
        "Reuse parchment paper if it's not oily or messy to reduce waste.",
        "Never block the vent on top of the oven."
      ]},
       { type: 'clickToReveal', content: {
        title: 'Why load top-down and unload bottom-up?',
        body: 'This rotation method helps ensure the most even baking possible for all cookies in the oven.'
      }},
      { type: 'heading', content: 'Baking Munchies' },
       { type: 'paragraph', content: 'Munchies require special attention due to their smaller size and the risk of paper flying up from the fan.'},
      { type: 'list', content: [
          "If baking only one tray of munchies, use the top rack.",
          "Try to have an empty row between munchie trays when possible.",
          "If you open the oven door mid-bake, add an extra minute to the timer.",
          "We can fit up to 12 munchies per half tray and 24 munchies per full tray."
      ]},
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 3,
      questions: [
        {
          id: 'q6-1',
          type: 'multiple-choice',
          question: 'What is the maximum number of cookies you can bake in a full oven at one time?',
          options: ['24', '36', '48', '60'],
          answer: '48',
          explanation: 'A full oven holds 4 trays, and each tray can hold a maximum of 12 cookies (4 x 12 = 48).'
        },
        {
          id: 'q6-2',
          type: 'true-false',
          question: 'If you are only baking one tray of munchies, you should place it on the bottom rack of the oven.',
          answer: 'False',
          explanation: 'The guide specifies that a single tray of munchies should be placed on the top rack.'
        },
        {
          id: 'q6-3',
          type: 'multiple-choice',
          question: 'What should you do if you open the oven door while munchies are baking?',
          options: ['Do nothing, it\'s fine', 'Take them out immediately', 'Add an extra minute to the baking time', 'Lower the oven temperature'],
          answer: 'Add an extra minute to the baking time',
          explanation: 'Opening the door releases heat, so adding an extra minute compensates for the temperature drop and ensures the munchies are fully baked.'
        }
      ]
    }
  },
   {
    id: 'module-7',
    title: 'Icing & Drinks',
    description: 'Learn the specific techniques for icing cookies and preparing drinks for consistency.',
    content: [
      { type: 'heading', content: 'Icing Cookies' },
      { type: 'paragraph', content: 'Our goal is consistency, like a Boston cream donut. The icing should be an even layer across the entire top. If a cookie is cut in half, the icing should ooze out.' },
      { type: 'list', content: [
        "Let cookies cool for about 20 minutes before icing.",
        "Make a very minor dent in the top to help the icing pool.",
        "Use the scoop to level one portion of icing and the back of the scoop to spread it in a circular motion.",
        "Leave the scoop face down on the spoon holder, not the tray, to prevent flavors from mixing."
      ]},
      { type: 'heading', content: 'Preparing Drinks' },
      { type: 'paragraph', content: 'It is important to follow recipes closely for a consistent product.'},
      { type: 'list', content: [
          "The fridge should always contain 1-3 of each flavor of pre-mixed drink.",
          "Shake the pre-mix jars extremely well before serving, as they separate.",
          "For delivery orders, seal teas with a red tamper-proof sticker.",
          "For a single drink order, tape the straw to the cookie box. For 2 or more, place straws in the bag/carrier."
      ]},
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 3,
      questions: [
        {
          id: 'q7-1',
          type: 'multiple-choice',
          question: 'How long should cookies cool before you apply icing?',
          options: ['They should be hot', '5 minutes', '20 minutes', '1 hour'],
          answer: '20 minutes',
          explanation: 'Cookies need to cool for about 20 minutes. If they are too hot, the icing will melt and not set properly.'
        },
        {
          id: 'q7-2',
          type: 'true-false',
          question: 'You should shake pre-mixed drink jars well before serving.',
          answer: 'True',
          explanation: 'The guide states to shake them "extremely well" because the pre-mixes separate while sitting in the fridge.'
        },
        {
          id: 'q7-3',
          type: 'multiple-choice',
          question: 'What is the correct way to handle the straw for a delivery order with one drink?',
          options: ['Place it in the bag', 'Hand it to the driver', 'Tape it onto the cookie box', 'Don\'t include a straw'],
          answer: 'Tape it onto the cookie box',
          explanation: 'For single drink orders, taping the straw directly to the box ensures it doesn\'t get lost and is associated with the correct order.'
        }
      ]
    }
  },
  {
    id: 'module-8',
    title: 'Large & Unscheduled Orders',
    description: 'Learn the protocols for handling large catering orders and unexpected large walk-in orders.',
    content: [
      { type: 'heading', content: 'Large Catering Orders' },
      { type: 'list', content: [
        'These are titled "Munchies by the Dozen (15 Dozen Minimum)".',
        'Begin preparing the order 2 hours early.',
        'Always assume the customer will arrive earlier than their selected time.',
        'Allow extra cooling time for cookies before boxing.',
        'Factor in an extra 20+ minutes just for boxing, as it can be time-consuming.'
      ]},
      { type: 'heading', content: 'Unscheduled Large Order Protocol' },
      { type: 'paragraph', content: 'This is for a rare scenario where a walk-in customer wants to buy your entire selection.'},
      { type: 'list', content: [
        'Ideally, large orders should be placed 24 hours in advance.',
        'If customers are waiting behind the large order, serve them first.',
        'Immediately turn on the ovens and start pulling dough for a new bake.',
        'Don\'t waste time counting or thinking; just get every flavor in the oven to replenish stock quickly.'
      ]},
       { type: 'scenario', content: {
        title: 'Scenario: Two People Working',
        body: 'A customer wants to buy all the cookies. If two people are on shift, one person serves the customer while the second person immediately starts the ovens and pulls dough for the next bake.'
      }},
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 3,
      questions: [
        {
          id: 'q8-1',
          type: 'multiple-choice',
          question: 'How early should you begin preparing a large catering order?',
          options: ['30 minutes early', '1 hour early', '2 hours early', 'When the customer arrives'],
          answer: '2 hours early',
          explanation: 'Starting 2 hours early provides a comfortable buffer for baking, cooling, and boxing, especially since customers often arrive early.'
        },
        {
          id: 'q8-2',
          type: 'true-false',
          question: 'If a walk-in customer wants to buy all your cookies and there are people in line, you should make the people behind them wait.',
          answer: 'False',
          explanation: 'The protocol is to serve the customers behind the large order first before processing the large, time-consuming order.'
        },
        {
          id: 'q8-3',
          type: 'multiple-choice',
          question: 'When an unscheduled large order wipes out your stock, what is the priority for the next bake?',
          options: ['Only bake the most popular flavors', 'Carefully count and plan what to bake next', 'Ask the manager what to bake', 'Get every flavor in the oven as quickly as possible'],
          answer: 'Get every flavor in the oven as quickly as possible',
          explanation: 'The protocol emphasizes speed to replenish the stock. You should not waste time counting or thinking, just get all flavors baking immediately.'
        }
      ]
    }
  },
    {
    id: 'module-9',
    title: 'Customer FAQs & Scenarios',
    description: 'Prepare for common questions and situations you will encounter during your shift.',
    content: [
      { type: 'heading', content: 'Frequently Asked Questions' },
      { type: 'list', content: [
        'Are cookies gluten-free? No, we don\'t have anything gluten-free.',
        'What are leftovers? They are from last night, sold at a discount, and should be reheated. They keep for about a week.',
        'What makes your cookies special? They are handcrafted, plant-based, thick with a crisp outside and soft center, and use less butter.',
        'Do you ship cookies? Yes, nationwide. Orders must be placed on our website.',
        'Do you have samples? No, we don\'t do samples, sorry.'
      ]},
      { type: 'heading', content: 'Common Scenarios' },
       { type: 'scenario', content: {
        title: 'Internet Goes Out',
        body: 'First, reset the router. If that doesn\'t work, call the internet provider and let your manager know.'
      }},
       { type: 'scenario', content: {
        title: 'Delivery Driver Steals an Order',
        body: 'Call DoorDash/Uber support immediately. Let them know what happened. They will normally send another driver, and you will have to send the order out again. We get paid for both the stolen and the remade order.'
      }},
       { type: 'scenario', content: {
        title: 'Customer is Unhappy with a Flavor',
        body: 'If a customer walks back in and is unhappy with the flavor they selected, the correct response is to apologize and offer to give them a free new flavor.'
      }},
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 3,
      questions: [
        {
          id: 'q9-1',
          type: 'multiple-choice',
          question: 'A customer asks if they can have a sample of a cookie. What should you say?',
          options: ['"Yes, let me cut a piece for you."', '"Samples are for rewards members only."', '"No, we don\'t do samples, sorry."', '"You can buy a munchie to try it."'],
          answer: '"No, we don\'t do samples, sorry."',
          explanation: 'The policy is clear that we do not offer samples. This is a polite and direct way to answer the question.'
        },
        {
          id: 'q9-2',
          type: 'true-false',
          question: 'If a delivery driver steals an order, the store loses money on that sale.',
          answer: 'False',
          explanation: 'When you report the theft to support, we get paid for both the stolen order and the remake, so the store does not take a loss.'
        },
        {
          id: 'q9-3',
          type: 'multiple-choice',
          question: 'A customer says the leftovers they bought are hard. What should you remind them?',
          options: ['That they are day-old and won\'t be perfect', 'That they should be reheated before eating', 'To throw them away', 'To eat them cold'],
          answer: 'That they should be reheated before eating',
          explanation: 'Leftovers are from the previous night and are sold with the recommendation that they be reheated to restore their texture and flavor.'
        }
      ]
    }
  },
  {
    id: 'module-10',
    title: 'Benefits & Policies',
    description: 'An overview of employee benefits, general workplace rules, and disciplinary actions.',
    content: [
      { type: 'heading', content: 'Employee Benefits' },
      { type: 'list', content: [
        'One free monster 4-pack or munchies 8-pack per week (does not roll over).',
        '20% employee discount on purchases.',
        '10% friends & family discount.',
        'Important: A different team member must ring up your free items or your discounted purchases. No one should ring up themselves.'
      ]},
      { type: 'heading', content: 'General Policies' },
       { type: 'list', content: [
          "There is a 30-day probation period for new hires.",
          "Phone use should be limited to important calls/messages. Downtime tasks must be completed before phones are out.",
          "Be respectful to all employees and customers. Don't gossip.",
          "No headphones are allowed once the store is open."
      ]},
       { type: 'heading', content: 'Disciplinary Actions' },
        { type: 'paragraph', content: 'Your shift is your responsibility. If you cannot make it, you must find someone to cover you by reaching out to all team members.'},
        // FIX: Corrected a typo in the content block type from `_ts 'list'` to `'list'`. This resolves both errors.
       { type: 'list', content: [
            "A no-show, late arrival, or early clock-out without prior notice results in one write-up.",
            "You lose your free 4-pack for the week after a write-up.",
            "Two or more write-ups in a 3-month period can lead to termination.",
            "Stealing, lying, or a no-call no-show are zero-tolerance policies and can result in immediate termination."
        ]},
    ],
    quiz: {
      passingScore: 80,
      maxAttempts: 3,
      questions: [
        {
          id: 'q10-1',
          type: 'multiple-choice',
          question: 'What is the employee discount?',
          options: ['10%', '15%', '20%', '50%'],
          answer: '20%',
          explanation: 'Team members receive a 20% discount on their purchases.'
        },
        {
          id: 'q10-2',
          type: 'true-false',
          question: 'It is okay to ring up your own free weekly cookie pack.',
          answer: 'False',
          explanation: 'The policy explicitly states that a different team member must ring up your items. You should never ring up yourself.'
        },
        {
          id: 'q10-3',
          type: 'multiple-choice',
          question: 'Which of the following is a zero-tolerance policy that could lead to immediate termination?',
          options: ['Being 5 minutes late one time', 'Forgetting to clean a table', 'A no-call no-show', 'Using your phone during downtime'],
          answer: 'A no-call no-show',
          explanation: 'Stealing, lying, and no-call no-shows are considered zero-tolerance offenses.'
        }
      ]
    }
  }
];
