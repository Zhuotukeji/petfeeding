export interface Article {
  id: string;
  title: string;
  description: string;
  category: 'dogs' | 'cats' | 'birds' | 'other-pets';
  content: string;
  faqs: FAQ[];
  keywords: string[];
  publishedAt: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const articles: Article[] = [
  {
    id: 'dog-feeding-schedule',
    title: 'Complete Dog Feeding Schedule Guide',
    description: 'Learn the optimal feeding schedule for dogs of all ages, from puppies to senior dogs.',
    category: 'dogs',
    content: `Establishing a proper feeding schedule is crucial for your dog's health and well-being. Dogs thrive on routine, and a consistent feeding schedule helps with digestion, behavior, and overall health. Puppies typically need to eat 3-4 times per day, while adult dogs do well with 2 meals daily. Senior dogs may benefit from smaller, more frequent meals to aid digestion. The amount of food depends on your dog's size, age, activity level, and the calorie content of their food. Always provide fresh water alongside meals. Monitor your dog's weight and adjust portions as needed. Avoid feeding immediately before or after vigorous exercise to prevent bloat. Consider your dog's individual needs and consult with your veterinarian for personalized recommendations.`,
    faqs: [
      {
        question: 'How many times a day should I feed my dog?',
        answer: 'Adult dogs should be fed twice daily, while puppies need 3-4 meals per day.'
      },
      {
        question: 'What is the best time to feed my dog?',
        answer: 'Feed your dog at consistent times, typically morning and evening, spacing meals 8-12 hours apart.'
      },
      {
        question: 'How much food should I give my dog?',
        answer: 'Follow the feeding guidelines on your dog food package based on weight, and adjust according to activity level.'
      },
      {
        question: 'Should I leave food out all day for my dog?',
        answer: 'Free feeding is not recommended as it can lead to obesity and makes it harder to monitor appetite.'
      },
      {
        question: 'Can I feed my dog human food?',
        answer: 'Some human foods are safe in moderation, but many are toxic to dogs. Stick to dog-specific food primarily.'
      },
      {
        question: 'When should I switch from puppy to adult food?',
        answer: 'Most dogs transition to adult food around 12 months, but large breeds may need puppy food longer.'
      },
      {
        question: 'Should senior dogs eat differently?',
        answer: 'Yes, senior dogs often need lower-calorie food and may benefit from smaller, more frequent meals.'
      },
      {
        question: 'Is it okay to change my dog\'s food brand?',
        answer: 'Yes, but transition gradually over 7-10 days by mixing increasing amounts of new food with the old.'
      }
    ],
    keywords: ['dog feeding schedule', 'how often feed dog', 'dog meal times', 'puppy feeding'],
    publishedAt: '2026-04-01'
  },
  {
    id: 'dog-nutrition-basics',
    title: 'Dog Nutrition Basics: Essential Nutrients Your Dog Needs',
    description: 'Understanding the essential nutrients and balanced diet requirements for healthy dogs.',
    category: 'dogs',
    content: `Proper nutrition is the foundation of your dog's health. Dogs require six essential nutrients: proteins, fats, carbohydrates, vitamins, minerals, and water. Proteins are crucial for muscle development and repair, with quality sources including chicken, beef, fish, and eggs. Fats provide energy and support skin and coat health, with omega-3 and omega-6 fatty acids being particularly important. Carbohydrates offer energy and fiber for digestive health. Vitamins and minerals support various bodily functions, from bone health to immune system function. Always ensure fresh water is available. Commercial dog foods are formulated to meet these nutritional needs, but understanding these basics helps you make informed choices about your dog's diet.`,
    faqs: [
      {
        question: 'What nutrients do dogs need?',
        answer: 'Dogs need proteins, fats, carbohydrates, vitamins, minerals, and water for optimal health.'
      },
      {
        question: 'Is grain-free food better for dogs?',
        answer: 'Not necessarily. Most dogs digest grains well unless they have specific allergies.'
      },
      {
        question: 'Do dogs need supplements?',
        answer: 'Complete commercial dog foods provide all necessary nutrients. Supplements should only be added under veterinary guidance.'
      },
      {
        question: 'What protein sources are best for dogs?',
        answer: 'Quality protein sources include chicken, beef, fish, lamb, and eggs.'
      },
      {
        question: 'How much protein does my dog need?',
        answer: 'Adult dogs need at least 18% protein in their diet, while puppies need 22% or more.'
      },
      {
        question: 'Are raw diets safe for dogs?',
        answer: 'Raw diets carry risks of bacterial contamination and nutritional imbalances. Consult your vet first.'
      },
      {
        question: 'Can dogs be vegetarian?',
        answer: 'While possible, it requires careful planning to ensure all nutritional needs are met.'
      },
      {
        question: 'What about treats in my dog\'s diet?',
        answer: 'Treats should make up no more than 10% of your dog\'s daily caloric intake.'
      }
    ],
    keywords: ['dog nutrition', 'dog diet', 'dog food nutrients', 'what dogs need to eat'],
    publishedAt: '2026-04-02'
  },
  {
    id: 'puppy-feeding-guide',
    title: 'Puppy Feeding Guide: From Weaning to Adulthood',
    description: 'Complete guide to feeding puppies at different growth stages for optimal development.',
    category: 'dogs',
    content: `Feeding puppies correctly is essential for proper growth and development. Puppies have different nutritional needs than adult dogs, requiring more calories, protein, and specific nutrients for bone and muscle development. Start with puppy-specific food formulated for their growth stage. Newborn puppies nurse from their mother, but weaning typically begins around 3-4 weeks. Feed puppies 3-4 times daily until 6 months old, then reduce to 2-3 meals. Choose food appropriate for your puppy's expected adult size, as large breed puppies have different requirements. Monitor growth carefully - puppies should gain weight steadily but not too rapidly. Avoid overfeeding, which can lead to developmental issues, especially in large breeds. Transition to adult food gradually around 12 months for most breeds.`,
    faqs: [
      {
        question: 'When can puppies start eating solid food?',
        answer: 'Puppies can begin transitioning to solid food around 3-4 weeks of age.'
      },
      {
        question: 'How often should I feed my puppy?',
        answer: 'Feed puppies 3-4 times daily until 6 months, then reduce to 2-3 meals.'
      },
      {
        question: 'What type of food is best for puppies?',
        answer: 'Choose high-quality puppy-specific food formulated for their expected adult size.'
      },
      {
        question: 'How much should my puppy eat?',
        answer: 'Follow package guidelines based on current weight and expected adult size, adjusting as needed.'
      },
      {
        question: 'When do I switch from puppy to adult food?',
        answer: 'Most dogs transition around 12 months, but large breeds may need puppy food until 18-24 months.'
      },
      {
        question: 'Can I give my puppy treats?',
        answer: 'Yes, but treats should be puppy-appropriate and limited to 10% of daily calories.'
      },
      {
        question: 'Should I soak puppy kibble?',
        answer: 'Soaking kibble can help young puppies transition from nursing and aids digestion.'
      },
      {
        question: 'How do I know if my puppy is eating enough?',
        answer: 'Monitor weight gain, energy levels, and body condition. Ribs should be felt but not prominently visible.'
      }
    ],
    keywords: ['puppy feeding', 'puppy food', 'how to feed puppy', 'puppy nutrition'],
    publishedAt: '2026-04-03'
  },
  {
    id: 'senior-dog-nutrition',
    title: 'Senior Dog Nutrition: Feeding Your Aging Companion',
    description: 'Nutritional adjustments and feeding strategies for senior dogs to maintain health.',
    category: 'dogs',
    content: `As dogs age, their nutritional needs change significantly. Senior dogs typically need fewer calories due to decreased activity levels, but they still require high-quality protein to maintain muscle mass. Look for senior-specific dog foods with adjusted calorie content and added joint support ingredients like glucosamine. Older dogs may benefit from smaller, more frequent meals to aid digestion. Consider softer food if dental issues are present. Increase fiber to support digestive health and maintain healthy weight. Omega-3 fatty acids can help with joint health and cognitive function. Monitor water intake as senior dogs are prone to dehydration. Watch for changes in appetite or eating habits, which may indicate health issues. Adjust portions based on activity level and body condition to prevent obesity, which can exacerbate age-related health problems.`,
    faqs: [
      {
        question: 'When is a dog considered senior?',
        answer: 'Dogs are generally considered senior around 7 years, though this varies by breed and size.'
      },
      {
        question: 'Do senior dogs need special food?',
        answer: 'Senior-specific foods are formulated with adjusted calories and nutrients beneficial for aging dogs.'
      },
      {
        question: 'How much should I feed my senior dog?',
        answer: 'Senior dogs typically need 20-30% fewer calories than adult dogs due to reduced activity.'
      },
      {
        question: 'Should I feed my senior dog more often?',
        answer: 'Smaller, more frequent meals can help with digestion and prevent bloating in senior dogs.'
      },
      {
        question: 'What supplements help senior dogs?',
        answer: 'Glucosamine, omega-3 fatty acids, and antioxidants can support joint and cognitive health.'
      },
      {
        question: 'My senior dog has lost appetite. What should I do?',
        answer: 'Appetite changes can indicate health issues. Consult your veterinarian promptly.'
      },
      {
        question: 'Can I switch my senior dog to soft food?',
        answer: 'Yes, soft food can be easier for dogs with dental issues or difficulty chewing.'
      },
      {
        question: 'How do I prevent weight gain in my senior dog?',
        answer: 'Monitor portions carefully, choose lower-calorie food, and maintain appropriate exercise levels.'
      }
    ],
    keywords: ['senior dog food', 'old dog nutrition', 'feeding elderly dogs', 'aging dog diet'],
    publishedAt: '2026-04-04'
  },
  {
    id: 'dog-food-allergies',
    title: 'Dog Food Allergies: Symptoms, Causes, and Solutions',
    description: 'Identifying and managing food allergies in dogs for better health and comfort.',
    category: 'dogs',
    content: `Food allergies in dogs are more common than many owners realize. Common allergens include beef, dairy, wheat, chicken, eggs, and soy. Symptoms include itchy skin, ear infections, digestive issues, and excessive licking or scratching. Diagnosing food allergies requires an elimination diet under veterinary supervision, typically lasting 8-12 weeks. During this period, feed a limited ingredient diet with novel proteins your dog hasn't eaten before. Once symptoms improve, gradually reintroduce foods to identify triggers. Treatment involves avoiding identified allergens permanently. Many dogs do well on limited ingredient or hypoallergenic diets. Read labels carefully as allergens can hide in treats and supplements. Food allergies differ from food intolerances, which cause digestive upset without immune system involvement. Work closely with your veterinarian to develop an appropriate management plan.`,
    faqs: [
      {
        question: 'What are common signs of food allergies in dogs?',
        answer: 'Itchy skin, ear infections, digestive issues, and excessive licking are common signs.'
      },
      {
        question: 'What foods cause allergies in dogs?',
        answer: 'Common allergens include beef, dairy, wheat, chicken, eggs, and soy.'
      },
      {
        question: 'How are food allergies diagnosed?',
        answer: 'Through an elimination diet lasting 8-12 weeks under veterinary supervision.'
      },
      {
        question: 'Can food allergies develop suddenly?',
        answer: 'Yes, dogs can develop allergies to foods they\'ve eaten for years without problems.'
      },
      {
        question: 'What is a limited ingredient diet?',
        answer: 'A diet with fewer ingredients, making it easier to identify and avoid allergens.'
      },
      {
        question: 'Are grain-free diets better for allergies?',
        answer: 'Not necessarily. Protein sources are more common allergens than grains.'
      },
      {
        question: 'Can food allergies be cured?',
        answer: 'No, but they can be managed effectively by avoiding trigger foods.'
      },
      {
        question: 'What about treats for dogs with allergies?',
        answer: 'Choose treats made with the same limited ingredients as their main diet.'
      }
    ],
    keywords: ['dog food allergies', 'dog allergy symptoms', 'hypoallergenic dog food', 'dog food intolerance'],
    publishedAt: '2026-04-05'
  },
  {
    id: 'cat-feeding-basics',
    title: 'Cat Feeding Basics: Complete Nutrition Guide',
    description: 'Essential guide to feeding cats properly with balanced nutrition and appropriate portions.',
    category: 'cats',
    content: `Cats are obligate carnivores, meaning they require meat-based diets to thrive. Unlike dogs, cats need specific nutrients found only in animal tissues, including taurine, arachidonic acid, and vitamin A. Feed adult cats twice daily, though some do well with free feeding if they maintain healthy weight. Kittens need 3-4 meals daily. Wet food provides hydration and is closer to a cat's natural diet, while dry food helps with dental health. Many owners combine both. Portion sizes depend on age, weight, and activity level. Cats are prone to obesity, so monitor weight carefully. Provide fresh water daily, as cats often don't drink enough. Avoid feeding dogs food to cats, as it lacks essential feline nutrients. Transition foods gradually over 7-10 days to prevent digestive upset.`,
    faqs: [
      {
        question: 'How often should I feed my cat?',
        answer: 'Adult cats should be fed twice daily, while kittens need 3-4 meals per day.'
      },
      {
        question: 'Is wet or dry food better for cats?',
        answer: 'Both have benefits. Wet food provides hydration, while dry food supports dental health. Many cats do well with both.'
      },
      {
        question: 'How much should I feed my cat?',
        answer: 'Follow package guidelines based on weight, typically 24-35 calories per pound for adult cats.'
      },
      {
        question: 'Can cats be vegetarian?',
        answer: 'No, cats are obligate carnivores and require nutrients found only in animal tissue.'
      },
      {
        question: 'Should I leave food out all day?',
        answer: 'Free feeding works for some cats, but scheduled meals help monitor appetite and prevent obesity.'
      },
      {
        question: 'Why won\'t my cat drink water?',
        answer: 'Cats have low thirst drive. Try fountains, multiple water stations, or increase wet food.'
      },
      {
        question: 'Can I feed my cat dog food?',
        answer: 'No, dog food lacks essential nutrients cats need, like taurine.'
      },
      {
        question: 'How do I switch cat food brands?',
        answer: 'Transition gradually over 7-10 days by mixing increasing amounts of new food with old.'
      }
    ],
    keywords: ['cat feeding', 'cat nutrition', 'how to feed cats', 'cat diet'],
    publishedAt: '2026-04-06'
  },
  {
    id: 'kitten-feeding-guide',
    title: 'Kitten Feeding Guide: Nutrition for Growing Cats',
    description: 'Complete feeding guide for kittens from weaning through first year of life.',
    category: 'cats',
    content: `Proper nutrition during kittenhood sets the foundation for lifelong health. Kittens need specially formulated kitten food with higher protein, fat, and calories than adult cat food. Weaning begins around 4 weeks, with kittens fully weaned by 8 weeks. Feed kittens 3-4 times daily until 6 months old, then reduce to 2-3 meals. Kittens grow rapidly and need about twice the calories per pound as adult cats. Choose food labeled for kittens or all life stages. Both wet and dry kitten food are appropriate. Ensure constant access to fresh water. Monitor growth and body condition - kittens should be lean but not thin. Avoid adult cat food, which lacks necessary nutrients for growth. Transition to adult food around 12 months. Establish good eating habits early by feeding at consistent times and locations.`,
    faqs: [
      {
        question: 'When can kittens eat solid food?',
        answer: 'Kittens can start eating solid food around 4 weeks, fully weaned by 8 weeks.'
      },
      {
        question: 'How often should I feed my kitten?',
        answer: 'Feed kittens 3-4 times daily until 6 months, then reduce to 2-3 meals.'
      },
      {
        question: 'What food is best for kittens?',
        answer: 'High-quality kitten-specific food with appropriate protein and calorie levels.'
      },
      {
        question: 'How much should my kitten eat?',
        answer: 'Kittens need about twice the calories per pound as adult cats. Follow package guidelines.'
      },
      {
        question: 'When do I switch to adult cat food?',
        answer: 'Transition to adult food around 12 months of age.'
      },
      {
        question: 'Can I give my kitten milk?',
        answer: 'Most cats are lactose intolerant. Provide water instead, or kitten-specific milk replacer if needed.'
      },
      {
        question: 'Should I feed wet or dry food to kittens?',
        answer: 'Both are fine. Many owners feed a combination for balanced nutrition and hydration.'
      },
      {
        question: 'Can kittens eat adult cat food?',
        answer: 'No, adult food lacks the extra nutrients and calories kittens need for proper growth.'
      }
    ],
    keywords: ['kitten feeding', 'kitten food', 'how to feed kittens', 'kitten nutrition'],
    publishedAt: '2026-04-07'
  },
  {
    id: 'senior-cat-nutrition',
    title: 'Senior Cat Nutrition: Caring for Your Aging Feline',
    description: 'Nutritional needs and feeding strategies for senior cats to maintain health.',
    category: 'cats',
    content: `Senior cats have unique nutritional needs that differ from younger adults. Cats are considered senior around age 7-10. Older cats may need more protein to maintain muscle mass, but with reduced calories to prevent obesity. Senior cat foods are formulated with these adjustments. Many senior cats develop dental issues, making softer food more comfortable. Increased water content in wet food helps with hydration and kidney function. Add supplements like omega-3 fatty acids for joint health and cognitive function. Monitor appetite closely, as decreased eating can indicate health problems. Some seniors need more frequent, smaller meals. Elevated food bowls can help cats with arthritis. Watch for weight changes in both directions - weight loss may indicate illness, while obesity stresses aging joints. Regular veterinary checkups help adjust diet as needs change.`,
    faqs: [
      {
        question: 'When is a cat considered senior?',
        answer: 'Cats are generally considered senior between 7-10 years of age.'
      },
      {
        question: 'Do senior cats need special food?',
        answer: 'Senior-specific foods have adjusted protein and calories beneficial for aging cats.'
      },
      {
        question: 'Should I feed my senior cat more protein?',
        answer: 'Yes, senior cats often need higher protein to maintain muscle mass.'
      },
      {
        question: 'My senior cat is losing weight. What should I do?',
        answer: 'Weight loss in senior cats can indicate illness. Consult your veterinarian promptly.'
      },
      {
        question: 'Is wet food better for senior cats?',
        answer: 'Wet food provides hydration and is easier to eat for cats with dental issues.'
      },
      {
        question: 'What supplements help senior cats?',
        answer: 'Omega-3 fatty acids, glucosamine, and antioxidants can support aging cats.'
      },
      {
        question: 'How often should I feed my senior cat?',
        answer: 'Most do well with twice daily feeding, though some benefit from smaller, more frequent meals.'
      },
      {
        question: 'My senior cat is picky. How can I encourage eating?',
        answer: 'Try warming food, offering variety, and ensuring food is easily accessible.'
      }
    ],
    keywords: ['senior cat food', 'old cat nutrition', 'feeding elderly cats', 'aging cat diet'],
    publishedAt: '2026-04-08'
  },
  {
    id: 'cat-hydration',
    title: 'Cat Hydration: Ensuring Your Cat Drinks Enough Water',
    description: 'Tips and strategies to keep your cat properly hydrated for optimal health.',
    category: 'cats',
    content: `Proper hydration is crucial for cat health, especially for kidney and urinary tract function. Cats evolved from desert animals and have a naturally low thirst drive, making dehydration common. Signs of dehydration include lethargy, dry gums, and decreased skin elasticity. Encourage water intake by providing multiple water stations throughout your home. Many cats prefer running water, so consider a cat water fountain. Keep water bowls clean and filled with fresh water daily. Some cats dislike water near their food - try separating them. Wet food significantly increases water intake and is beneficial for cats prone to urinary issues. Add water or low-sodium broth to food to increase moisture. Avoid milk, as most cats are lactose intolerant. Monitor litter box use - decreased urination may indicate dehydration or health issues requiring veterinary attention.`,
    faqs: [
      {
        question: 'How much water should my cat drink daily?',
        answer: 'Cats need about 3.5-4.5 ounces of water per 5 pounds of body weight daily.'
      },
      {
        question: 'Why doesn\'t my cat drink much water?',
        answer: 'Cats have a naturally low thirst drive inherited from their desert-dwelling ancestors.'
      },
      {
        question: 'Are water fountains good for cats?',
        answer: 'Yes, many cats prefer running water and drink more from fountains.'
      },
      {
        question: 'Can I give my cat milk?',
        answer: 'Most adult cats are lactose intolerant. Stick to water or cat-specific milk products.'
      },
      {
        question: 'Does wet food help with hydration?',
        answer: 'Yes, wet food contains 70-80% water and significantly increases overall water intake.'
      },
      {
        question: 'How can I tell if my cat is dehydrated?',
        answer: 'Signs include lethargy, dry gums, sunken eyes, and decreased skin elasticity.'
      },
      {
        question: 'Should water be near food bowls?',
        answer: 'Some cats prefer water away from food. Try multiple locations to see what your cat prefers.'
      },
      {
        question: 'Can I add flavor to my cat\'s water?',
        answer: 'You can add small amounts of low-sodium broth, but ensure plain water is also available.'
      }
    ],
    keywords: ['cat hydration', 'cat water intake', 'cat not drinking water', 'cat dehydration'],
    publishedAt: '2026-04-09'
  },
  {
    id: 'cat-food-allergies',
    title: 'Cat Food Allergies: Identification and Management',
    description: 'Understanding and managing food allergies in cats for better health.',
    category: 'cats',
    content: `Food allergies in cats manifest differently than in dogs, often causing skin issues and digestive problems. Common allergens include beef, fish, dairy, and chicken. Symptoms include itchy skin, excessive grooming, hair loss, ear infections, vomiting, and diarrhea. Diagnosis requires an elimination diet lasting 8-12 weeks using novel proteins your cat hasn't eaten before, such as duck, venison, or rabbit. During this period, feed only the prescribed diet - no treats or table food. Once symptoms resolve, gradually reintroduce foods to identify triggers. Management involves permanently avoiding identified allergens. Limited ingredient diets work well for allergic cats. Read all labels carefully, including treats and supplements. Food allergies differ from food intolerances, which cause digestive upset without immune involvement. Work with your veterinarian to develop an appropriate long-term management plan for your cat's specific needs.`,
    faqs: [
      {
        question: 'What are signs of food allergies in cats?',
        answer: 'Itchy skin, excessive grooming, hair loss, ear infections, vomiting, and diarrhea.'
      },
      {
        question: 'What foods cause allergies in cats?',
        answer: 'Common allergens include beef, fish, dairy, and chicken.'
      },
      {
        question: 'How are cat food allergies diagnosed?',
        answer: 'Through an 8-12 week elimination diet under veterinary supervision.'
      },
      {
        question: 'Can cats develop allergies to food they\'ve eaten before?',
        answer: 'Yes, cats can develop allergies to foods they\'ve tolerated for years.'
      },
      {
        question: 'What is a novel protein diet?',
        answer: 'A diet using protein sources your cat hasn\'t eaten before, like duck or venison.'
      },
      {
        question: 'Are grain-free diets better for cat allergies?',
        answer: 'Not necessarily. Protein sources are more common allergens than grains in cats.'
      },
      {
        question: 'Can food allergies be cured?',
        answer: 'No, but they can be managed by avoiding trigger foods.'
      },
      {
        question: 'What treats can I give my cat with allergies?',
        answer: 'Only treats made with the same limited ingredients as their main diet.'
      }
    ],
    keywords: ['cat food allergies', 'cat allergy symptoms', 'hypoallergenic cat food', 'cat food intolerance'],
    publishedAt: '2026-04-10'
  },
  {
    id: 'bird-feeding-basics',
    title: 'Bird Feeding Basics: Complete Nutrition Guide',
    description: 'Essential guide to feeding pet birds with proper nutrition and dietary variety.',
    category: 'birds',
    content: `Proper nutrition is essential for pet bird health and longevity. Different bird species have varying dietary needs, but most require a varied diet including pellets, fresh vegetables, fruits, and seeds. High-quality pellets should form the base of most birds' diets, providing balanced nutrition. Supplement with fresh vegetables daily - dark leafy greens, carrots, and peppers are excellent choices. Fruits should be offered in moderation due to sugar content. Seeds are high in fat and should be limited, not the primary diet. Provide fresh water daily in clean bowls. Avoid toxic foods including avocado, chocolate, caffeine, and salt. Remove uneaten fresh foods within a few hours to prevent spoilage. Birds need variety to prevent boredom and ensure complete nutrition. Introduce new foods gradually. Monitor droppings and weight regularly as indicators of health.`,
    faqs: [
      {
        question: 'What should I feed my pet bird?',
        answer: 'A varied diet of high-quality pellets, fresh vegetables, limited fruits, and minimal seeds.'
      },
      {
        question: 'Are seeds good for birds?',
        answer: 'Seeds are high in fat and should be treats, not the main diet.'
      },
      {
        question: 'What vegetables can birds eat?',
        answer: 'Dark leafy greens, carrots, peppers, broccoli, and squash are excellent choices.'
      },
      {
        question: 'Can birds eat fruit?',
        answer: 'Yes, but in moderation due to sugar content. Berries, apples, and melons are good options.'
      },
      {
        question: 'What foods are toxic to birds?',
        answer: 'Avocado, chocolate, caffeine, salt, onions, and garlic are toxic to birds.'
      },
      {
        question: 'How often should I feed my bird?',
        answer: 'Provide fresh food daily, with pellets available at all times.'
      },
      {
        question: 'Do birds need supplements?',
        answer: 'Birds on balanced pellet diets typically don\'t need supplements unless recommended by an avian vet.'
      },
      {
        question: 'How do I switch my bird to pellets?',
        answer: 'Transition gradually over several weeks, mixing pellets with current food and slowly increasing the ratio.'
      }
    ],
    keywords: ['bird feeding', 'bird nutrition', 'what to feed birds', 'pet bird diet'],
    publishedAt: '2026-04-11'
  },
  {
    id: 'parrot-nutrition',
    title: 'Parrot Nutrition: Feeding Your Parrot for Optimal Health',
    description: 'Comprehensive nutrition guide for parrots of all sizes and species.',
    category: 'birds',
    content: `Parrots require diverse, nutrient-rich diets to thrive in captivity. A quality pellet should comprise 60-70% of their diet, supplemented with fresh vegetables, fruits, and occasional nuts. Large parrots like macaws and cockatoos need more nuts and seeds than smaller species. Offer dark leafy greens daily - kale, spinach, and chard are excellent. Colorful vegetables provide important vitamins and antioxidants. Fruits should be limited to 10-15% of diet due to sugar. Parrots enjoy foraging, so present food in interesting ways. Avoid all-seed diets, which lead to malnutrition and obesity. Never feed avocado, chocolate, caffeine, or high-salt foods. Provide clean, fresh water daily. Some parrots benefit from sprouted seeds and grains. Monitor weight regularly and adjust portions accordingly. Consult an avian veterinarian for species-specific dietary recommendations.`,
    faqs: [
      {
        question: 'What is the best diet for parrots?',
        answer: '60-70% quality pellets, 20-30% vegetables, 10-15% fruits, with occasional nuts and seeds.'
      },
      {
        question: 'Can parrots eat only seeds?',
        answer: 'No, all-seed diets lead to malnutrition and health problems.'
      },
      {
        question: 'What vegetables are best for parrots?',
        answer: 'Dark leafy greens, carrots, peppers, broccoli, and sweet potatoes are excellent.'
      },
      {
        question: 'How much fruit should parrots eat?',
        answer: 'Limit fruits to 10-15% of diet due to sugar content.'
      },
      {
        question: 'Can parrots eat nuts?',
        answer: 'Yes, nuts are healthy in moderation, especially for larger parrot species.'
      },
      {
        question: 'What foods are dangerous for parrots?',
        answer: 'Avocado, chocolate, caffeine, salt, onions, garlic, and alcohol are toxic.'
      },
      {
        question: 'Do parrots need vitamin supplements?',
        answer: 'Parrots on balanced diets typically don\'t need supplements unless advised by an avian vet.'
      },
      {
        question: 'How can I encourage my parrot to eat vegetables?',
        answer: 'Offer variety, present creatively, eat vegetables yourself, and be patient during transitions.'
      }
    ],
    keywords: ['parrot feeding', 'parrot diet', 'parrot nutrition', 'what to feed parrots'],
    publishedAt: '2026-04-12'
  },
  {
    id: 'canary-finch-feeding',
    title: 'Canary and Finch Feeding Guide',
    description: 'Proper nutrition and feeding practices for canaries and finches.',
    category: 'birds',
    content: `Canaries and finches have specific dietary needs that differ from larger birds. A quality finch or canary seed mix should form the base of their diet, supplemented with fresh greens and occasional fruits. These small birds have high metabolisms and need constant access to food. Offer dark leafy greens like romaine, kale, and dandelion greens several times weekly. Small amounts of grated vegetables like carrots and broccoli provide variety. Fruits should be minimal due to high sugar content. Provide cuttlebone or mineral block for calcium. Fresh water must be available at all times. During breeding season, offer egg food to support reproduction. Avoid avocado, chocolate, and salty foods. Clean food and water dishes daily to prevent bacterial growth. Monitor food consumption - decreased eating can indicate illness. These active birds burn calories quickly, so ensure adequate nutrition.`,
    faqs: [
      {
        question: 'What do canaries and finches eat?',
        answer: 'Quality seed mix, fresh greens, occasional vegetables and fruits, plus cuttlebone for calcium.'
      },
      {
        question: 'Can canaries eat only seeds?',
        answer: 'Seeds should be the base, but supplement with greens and vegetables for complete nutrition.'
      },
      {
        question: 'What greens can I feed finches?',
        answer: 'Romaine lettuce, kale, spinach, and dandelion greens are excellent choices.'
      },
      {
        question: 'Do canaries need cuttlebone?',
        answer: 'Yes, cuttlebone provides essential calcium for bone health and egg production.'
      },
      {
        question: 'How often should I feed my canary?',
        answer: 'Food should be available at all times due to their high metabolism.'
      },
      {
        question: 'Can finches eat fruit?',
        answer: 'Yes, but in very small amounts due to sugar content.'
      },
      {
        question: 'What is egg food for birds?',
        answer: 'A protein-rich supplement offered during breeding season to support reproduction.'
      },
      {
        question: 'How do I know if my finch is eating enough?',
        answer: 'Monitor activity levels, droppings, and body condition. Healthy birds are active and alert.'
      }
    ],
    keywords: ['canary feeding', 'finch diet', 'canary nutrition', 'finch food'],
    publishedAt: '2026-04-13'
  },
  {
    id: 'budgie-feeding-guide',
    title: 'Budgie Feeding Guide: Complete Nutrition for Parakeets',
    description: 'Comprehensive feeding guide for budgies (parakeets) at all life stages.',
    category: 'birds',
    content: `Budgies (parakeets) are small parrots requiring varied, nutritious diets. High-quality pellets should comprise 50-60% of their diet, with the remainder being fresh vegetables, fruits, and limited seeds. Offer dark leafy greens, carrots, peppers, and broccoli daily. Fruits like berries, apples, and melons can be given in small amounts. Millet spray is a favorite treat but should be limited due to fat content. Provide cuttlebone or mineral block for calcium. Fresh water must be available at all times. Budgies are prone to obesity, so monitor portions carefully. Avoid all-seed diets which lead to fatty liver disease. Never feed avocado, chocolate, caffeine, or salty foods. Introduce new foods gradually and persistently - budgies can be hesitant about change. Foraging opportunities keep budgies mentally stimulated. Clean food and water dishes daily.`,
    faqs: [
      {
        question: 'What should I feed my budgie?',
        answer: '50-60% pellets, fresh vegetables daily, limited fruits, and minimal seeds as treats.'
      },
      {
        question: 'Can budgies eat only seeds?',
        answer: 'No, all-seed diets lead to malnutrition and fatty liver disease.'
      },
      {
        question: 'What vegetables can budgies eat?',
        answer: 'Leafy greens, carrots, peppers, broccoli, peas, and corn are excellent choices.'
      },
      {
        question: 'Is millet good for budgies?',
        answer: 'Millet is a healthy treat but should be limited due to fat content.'
      },
      {
        question: 'How much should I feed my budgie?',
        answer: 'About 1.5-2 teaspoons of pellets daily, plus fresh vegetables and limited treats.'
      },
      {
        question: 'Can budgies eat fruit?',
        answer: 'Yes, but in small amounts due to sugar. Berries and apples are good options.'
      },
      {
        question: 'Do budgies need cuttlebone?',
        answer: 'Yes, cuttlebone provides essential calcium for bone health.'
      },
      {
        question: 'My budgie won\'t eat vegetables. What should I do?',
        answer: 'Keep offering variety, present creatively, and be patient. It can take weeks for acceptance.'
      }
    ],
    keywords: ['budgie feeding', 'parakeet diet', 'budgie nutrition', 'what to feed budgies'],
    publishedAt: '2026-04-14'
  },
  {
    id: 'cockatiel-nutrition',
    title: 'Cockatiel Nutrition: Feeding Your Cockatiel Properly',
    description: 'Complete nutrition guide for cockatiels to ensure optimal health.',
    category: 'birds',
    content: `Cockatiels require balanced, varied diets to maintain health and vitality. Quality pellets should form 60-70% of their diet, supplemented with fresh vegetables, limited fruits, and occasional seeds. Offer dark leafy greens, carrots, peppers, and squash daily. Cockatiels enjoy millet spray, but limit it to occasional treats due to fat content. Provide cuttlebone or mineral block for calcium, especially important for egg-laying females. Fresh water must be available at all times. Avoid all-seed diets which cause obesity and nutritional deficiencies. Never feed avocado, chocolate, caffeine, or high-salt foods. Cockatiels are prone to night frights and need consistent feeding schedules. Offer variety to prevent boredom and ensure complete nutrition. Monitor weight regularly - healthy adult cockatiels weigh 80-125 grams. Consult an avian veterinarian for specific dietary concerns or health issues.`,
    faqs: [
      {
        question: 'What is the best diet for cockatiels?',
        answer: '60-70% pellets, 20-30% vegetables, limited fruits, and occasional seeds as treats.'
      },
      {
        question: 'Can cockatiels eat only seeds?',
        answer: 'No, all-seed diets lead to obesity and nutritional deficiencies.'
      },
      {
        question: 'What vegetables are good for cockatiels?',
        answer: 'Dark leafy greens, carrots, peppers, broccoli, and squash are excellent.'
      },
      {
        question: 'How much millet should cockatiels eat?',
        answer: 'Millet should be an occasional treat, not a daily food, due to fat content.'
      },
      {
        question: 'Do cockatiels need cuttlebone?',
        answer: 'Yes, especially egg-laying females who need extra calcium.'
      },
      {
        question: 'Can cockatiels eat fruit?',
        answer: 'Yes, but in moderation. Berries, apples, and melons are good choices.'
      },
      {
        question: 'What foods are toxic to cockatiels?',
        answer: 'Avocado, chocolate, caffeine, salt, onions, and garlic are toxic.'
      },
      {
        question: 'How do I transition my cockatiel to pellets?',
        answer: 'Mix pellets with current food and gradually increase the ratio over several weeks.'
      }
    ],
    keywords: ['cockatiel feeding', 'cockatiel diet', 'cockatiel nutrition', 'what to feed cockatiels'],
    publishedAt: '2026-04-15'
  },
  {
    id: 'rabbit-feeding-guide',
    title: 'Rabbit Feeding Guide: Complete Nutrition for Healthy Rabbits',
    description: 'Essential feeding guide for rabbits including hay, vegetables, and pellets.',
    category: 'other-pets',
    content: `Rabbits require a specific diet centered around unlimited grass hay, which is essential for digestive and dental health. Timothy hay should be available at all times, forming 80-90% of their diet. Supplement with fresh vegetables daily - dark leafy greens like romaine, cilantro, and parsley are excellent. Offer 1-2 cups of vegetables per 6 pounds of body weight. High-quality rabbit pellets should be limited to 1/4 cup per 6 pounds daily. Treats like carrots and fruits should be minimal due to sugar content. Fresh water must be available at all times. Avoid iceberg lettuce, which has little nutritional value. Never feed rabbits cereals, crackers, or processed foods. Introduce new vegetables gradually to prevent digestive upset. Monitor droppings daily as indicators of digestive health. Rabbits have sensitive digestive systems requiring consistent, appropriate diets.`,
    faqs: [
      {
        question: 'What should I feed my rabbit?',
        answer: 'Unlimited grass hay, daily fresh vegetables, limited pellets, and minimal treats.'
      },
      {
        question: 'Why is hay important for rabbits?',
        answer: 'Hay is essential for digestive health and keeps teeth worn down properly.'
      },
      {
        question: 'What vegetables can rabbits eat?',
        answer: 'Dark leafy greens like romaine, cilantro, parsley, and kale are excellent choices.'
      },
      {
        question: 'How many pellets should I feed my rabbit?',
        answer: 'About 1/4 cup per 6 pounds of body weight daily.'
      },
      {
        question: 'Can rabbits eat carrots?',
        answer: 'Yes, but in small amounts as treats due to sugar content.'
      },
      {
        question: 'What foods are dangerous for rabbits?',
        answer: 'Iceberg lettuce, cereals, crackers, chocolate, and processed foods.'
      },
      {
        question: 'How much water do rabbits need?',
        answer: 'Fresh water should be available at all times. Rabbits drink 50-150ml per kg daily.'
      },
      {
        question: 'Can I feed my rabbit only pellets?',
        answer: 'No, hay must be the primary diet component for proper health.'
      }
    ],
    keywords: ['rabbit feeding', 'rabbit diet', 'rabbit nutrition', 'what to feed rabbits'],
    publishedAt: '2026-04-16'
  },
  {
    id: 'guinea-pig-nutrition',
    title: 'Guinea Pig Nutrition: Complete Feeding Guide',
    description: 'Comprehensive nutrition guide for guinea pigs including vitamin C requirements.',
    category: 'other-pets',
    content: `Guinea pigs have unique nutritional needs, most notably their requirement for dietary vitamin C. Like humans, guinea pigs cannot produce their own vitamin C and must obtain it from food. Unlimited grass hay should be available at all times for digestive and dental health. Offer 1 cup of fresh vegetables per guinea pig daily, focusing on vitamin C-rich options like bell peppers, kale, and parsley. High-quality guinea pig pellets fortified with vitamin C should be provided daily - about 1/8 cup per pig. Avoid rabbit pellets which lack necessary vitamin C. Fresh water must be available at all times. Limit fruits to occasional treats due to sugar. Never feed guinea pigs iceberg lettuce, potatoes, or onions. Introduce new foods gradually. Monitor weight and droppings regularly. Guinea pigs are social eaters and do best when housed with companions.`,
    faqs: [
      {
        question: 'What should I feed my guinea pig?',
        answer: 'Unlimited hay, 1 cup fresh vegetables daily, guinea pig pellets, and fresh water.'
      },
      {
        question: 'Why do guinea pigs need vitamin C?',
        answer: 'Guinea pigs cannot produce vitamin C and must get it from their diet to prevent scurvy.'
      },
      {
        question: 'What vegetables are high in vitamin C for guinea pigs?',
        answer: 'Bell peppers, kale, parsley, broccoli, and tomatoes are excellent sources.'
      },
      {
        question: 'Can I feed rabbit pellets to guinea pigs?',
        answer: 'No, rabbit pellets lack the vitamin C guinea pigs require.'
      },
      {
        question: 'How much should I feed my guinea pig?',
        answer: '1/8 cup pellets and 1 cup vegetables daily, plus unlimited hay.'
      },
      {
        question: 'Can guinea pigs eat fruit?',
        answer: 'Yes, but only as occasional treats due to sugar content.'
      },
      {
        question: 'What foods are toxic to guinea pigs?',
        answer: 'Iceberg lettuce, potatoes, onions, garlic, and chocolate are dangerous.'
      },
      {
        question: 'Do guinea pigs need vitamin C supplements?',
        answer: 'If fed proper diet with vitamin C-rich vegetables, supplements usually aren\'t necessary.'
      }
    ],
    keywords: ['guinea pig feeding', 'guinea pig diet', 'guinea pig vitamin C', 'guinea pig nutrition'],
    publishedAt: '2026-04-17'
  },
  {
    id: 'hamster-feeding-basics',
    title: 'Hamster Feeding Basics: Complete Nutrition Guide',
    description: 'Essential feeding guide for hamsters including proper diet and portions.',
    category: 'other-pets',
    content: `Hamsters are omnivores requiring varied diets for optimal health. High-quality hamster pellets or mix should form the base of their diet, providing balanced nutrition. Offer 1-2 tablespoons of pellets daily, adjusted for size and species. Supplement with small amounts of fresh vegetables like carrots, broccoli, and cucumber. Protein sources like mealworms, cooked egg, or plain chicken can be offered weekly. Hamsters enjoy hoarding food, which is natural behavior. Provide fresh water daily in a bottle or heavy bowl. Avoid citrus fruits, onions, garlic, and chocolate. Seeds and nuts are enjoyed but should be limited due to fat content. Syrian hamsters need more food than dwarf varieties. Remove fresh foods within 24 hours to prevent spoilage. Monitor weight regularly as hamsters are prone to obesity. Clean food storage areas weekly to prevent mold.`,
    faqs: [
      {
        question: 'What should I feed my hamster?',
        answer: 'Quality hamster pellets or mix, small amounts of vegetables, occasional protein, and fresh water.'
      },
      {
        question: 'How much should I feed my hamster?',
        answer: '1-2 tablespoons of pellets daily, adjusted for size and species.'
      },
      {
        question: 'Can hamsters eat vegetables?',
        answer: 'Yes, small amounts of carrots, broccoli, cucumber, and leafy greens are good.'
      },
      {
        question: 'Do hamsters need protein?',
        answer: 'Yes, offer mealworms, cooked egg, or plain chicken once or twice weekly.'
      },
      {
        question: 'Why does my hamster hoard food?',
        answer: 'Food hoarding is natural hamster behavior for storing resources.'
      },
      {
        question: 'Can hamsters eat fruit?',
        answer: 'Yes, but in very small amounts due to sugar. Avoid citrus fruits.'
      },
      {
        question: 'What foods are dangerous for hamsters?',
        answer: 'Citrus fruits, onions, garlic, chocolate, and raw beans are toxic.'
      },
      {
        question: 'Do different hamster species need different diets?',
        answer: 'Syrian hamsters need more food than dwarf varieties, but basic diet is similar.'
      }
    ],
    keywords: ['hamster feeding', 'hamster diet', 'hamster nutrition', 'what to feed hamsters'],
    publishedAt: '2026-04-18'
  },
  {
    id: 'ferret-nutrition-guide',
    title: 'Ferret Nutrition Guide: Feeding Your Ferret Properly',
    description: 'Complete nutrition guide for ferrets as obligate carnivores.',
    category: 'other-pets',
    content: `Ferrets are obligate carnivores requiring high-protein, high-fat, meat-based diets. Quality ferret or kitten food with at least 32-38% protein and 15-20% fat is essential. Ferrets have short digestive tracts and fast metabolisms, requiring frequent meals. Provide food at all times or feed 2-3 times daily. Meat-based proteins should be the first ingredients - chicken, turkey, or lamb. Avoid foods with corn, wheat, or vegetables as primary ingredients. Ferrets cannot digest plant matter or fiber effectively. Raw or cooked meat can supplement commercial food. Fresh water must be available at all times in heavy bowls or bottles. Avoid dog food, which lacks necessary nutrients. Treats should be meat-based and limited. Never feed ferrets fruits, vegetables, dairy, or sugary treats. Monitor weight regularly as ferrets can become obese. Consult a ferret-experienced veterinarian for specific dietary recommendations.`,
    faqs: [
      {
        question: 'What should I feed my ferret?',
        answer: 'High-quality ferret or kitten food with 32-38% protein and 15-20% fat from meat sources.'
      },
      {
        question: 'How often should I feed my ferret?',
        answer: 'Food should be available at all times, or feed 2-3 times daily due to fast metabolism.'
      },
      {
        question: 'Can ferrets eat dog food?',
        answer: 'No, dog food lacks the high protein and fat ferrets require.'
      },
      {
        question: 'Can ferrets eat fruits and vegetables?',
        answer: 'No, ferrets cannot digest plant matter effectively and need meat-based diets.'
      },
      {
        question: 'What treats can I give my ferret?',
        answer: 'Meat-based treats only, such as cooked chicken or commercial ferret treats.'
      },
      {
        question: 'Can I feed my ferret raw meat?',
        answer: 'Yes, raw or cooked meat can supplement commercial ferret food.'
      },
      {
        question: 'Why do ferrets need high-protein food?',
        answer: 'Ferrets are obligate carnivores with short digestive tracts designed for meat-based diets.'
      },
      {
        question: 'How much should my ferret eat?',
        answer: 'Ferrets self-regulate well. Provide constant access or 1/4 to 1/2 cup daily.'
      }
    ],
    keywords: ['ferret feeding', 'ferret diet', 'ferret nutrition', 'what to feed ferrets'],
    publishedAt: '2026-04-19'
  },
  {
    id: 'reptile-feeding-basics',
    title: 'Reptile Feeding Basics: General Nutrition Guide',
    description: 'Overview of feeding requirements for common pet reptiles.',
    category: 'other-pets',
    content: `Reptile nutrition varies dramatically by species, with herbivores, carnivores, and omnivores each having unique requirements. Research your specific reptile's needs thoroughly. Herbivorous reptiles like iguanas need dark leafy greens, vegetables, and limited fruits. Carnivorous reptiles like snakes require appropriately-sized prey items. Omnivores like bearded dragons need both insects and vegetables. Temperature affects reptile digestion - ensure proper heating for your species. Many reptiles need calcium and vitamin D3 supplementation, especially those kept indoors. Provide fresh water appropriate for your species - some drink from bowls, others need misting. Feed frequency varies by species, age, and temperature. Young reptiles typically eat more frequently than adults. Never feed wild-caught insects which may carry parasites or pesticides. Monitor weight and body condition regularly. Consult a reptile veterinarian for species-specific dietary guidance.`,
    faqs: [
      {
        question: 'What do reptiles eat?',
        answer: 'It varies by species - some are herbivores, some carnivores, and some omnivores.'
      },
      {
        question: 'How often should I feed my reptile?',
        answer: 'Frequency varies by species, age, and temperature. Young reptiles typically eat more often.'
      },
      {
        question: 'Do reptiles need supplements?',
        answer: 'Many need calcium and vitamin D3, especially those kept indoors without UVB lighting.'
      },
      {
        question: 'Can I feed wild-caught insects?',
        answer: 'No, wild insects may carry parasites or pesticides. Use commercially-raised feeders.'
      },
      {
        question: 'Why won\'t my reptile eat?',
        answer: 'Common causes include incorrect temperature, stress, illness, or seasonal changes.'
      },
      {
        question: 'Do all reptiles need live food?',
        answer: 'No, herbivorous reptiles eat plants, while some carnivores accept frozen-thawed prey.'
      },
      {
        question: 'How do I know if my reptile is the right weight?',
        answer: 'Body condition varies by species. Consult care guides and veterinarians for your specific reptile.'
      },
      {
        question: 'Do reptiles need water?',
        answer: 'Yes, but how they access it varies - some drink from bowls, others need misting or soaking.'
      }
    ],
    keywords: ['reptile feeding', 'reptile diet', 'reptile nutrition', 'what to feed reptiles'],
    publishedAt: '2026-04-20'
  }
];

export function getArticlesByCategory(category: Article['category']): Article[] {
  return articles.filter(article => article.category === category);
}

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getAllArticles(): Article[] {
  return articles;
}

export function searchArticles(query: string): Article[] {
  if (!query.trim()) return [];
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return articles
    .map((article) => {
      const corpus = [
        article.title,
        article.description,
        article.content,
        article.category,
        ...article.keywords,
        ...article.faqs.map((f) => f.question + ' ' + f.answer),
      ].join(' ').toLowerCase();

      const hits = terms.filter((t) => corpus.includes(t)).length;
      return { article, hits };
    })
    .filter(({ hits }) => hits > 0)
    .sort((a, b) => b.hits - a.hits)
    .map(({ article }) => article);
}
