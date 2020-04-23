var mongoose=require("mongoose");
var Product=require("./models/product.js")

var data=[
    {   
        
        name: "Himalaya Liv. 52 DS Tablet",
        image: "https://www.netmeds.com/images/product-v1/600x600/14142/liv_52_ds_tablet_60_s_0.jpg",
        price: 133,
        category: "Ayurveda",
        description: {
            about: "Himalaya Liv.52 DS is a double strength Hepatospecific formulation that contains Caper Bush (Himsra) and Chicory (Kasani) herbs. The Caper Bush contains p-methoxy benzoic acid for increasing the functional efficiency of the liver. Chicory is effective in protecting liver from alcohol toxicity. Liv 52 DS tablet is a daily health supplement that protect the hepatic parenchyma and stimulate hepatocellular regeneration to increase efficiency of the liver.",
            ingredients: "",
            benefits: "Liv.52 DS Tablet improves digestion and assimilation process, promotes appetite. It reduces damage caused to liver due to Elevated liver enzyme, jaundice, and Hepatitis A & B.",
            dosage: "Two tablet of Liv 52 DS can be consumed twice or thrice a day after meals.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {   
        
        name: "Dabur Triphala Churna",
        image: "https://www.netmeds.com/images/product-v1/600x600/413892/dabur_triphala_churna_500_gm_0.jpg",
        price: 138,
        category: "Ayurveda",
        description: {
            about: "Dabur Triphala Churna contains a combination of three well-known herbs Amla, Harad, and Bahera. These three fruits help in smooth functioning of bowel and relieve constipation.",
            ingredients: "",
            benefits: "It maintains overall health by harmonizing digestive functions and cleansing the stomach. It helps in smooth functioning of bowel and relieve constipation.",
            dosage: "Consume ½ to 1 of Dabur Triphala Churna teaspoonful (3-6g) twice a day with lukewarm water or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {   
        
        name: "Dabur Chyawanprash 1Kg",
        image: "https://www.netmeds.com/images/product-v1/600x600/313682/dabur_chyawanprash_1_kg_0.jpg",
        price: 259,
        category: "Ayurveda",
        description: {
            about: "Dabur Chyawanprash 1Kg is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity, protects the body from infections like cough & cold etc. caused by various micro-organisms and weather change. This effectively helps to restore youth and vitality and can be taken by people of all ages.",
            ingredients: "Bilya, Amla,Brahmi, Pippali, Yashtimadhu, Gokshura",
            benefits: "Strengthens the immune system and helps fight diseases, Helps in improving the process of digestion, Strengthens the body's internal defence mechanism with its anti-oxidant properties",
            dosage: "1 teaspoon to be taken twice a day- once in the morning & once at night or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Sri Sri Tattva Amla Juice",
        image: "https://www.netmeds.com/images/product-v1/600x600/824343/sri_sri_tattva_no_added_sugar_juice_amla_1000_ml_0.jpg",
        price: 180,
        category: "Ayurveda",
        description: {
            about: "Sri Sri Tattva Amla Juice is a food supplement that is unfermented indian gooseberry juice that is a power house of essential nutrients and minerals. It helps balance all the three doshas in the human body and is an excellent source of Vitamin C. All the ingredients are non synthetic in nature and is totally safe to use without any side effects.",
            ingredients: "Amla juice, Water, Citric acid",
            benefits: "It is rich in Vitamin C that helps boost immunity and metabolism of the body, Helps prevent viral and bacterial ailments, including cold and cough, It promotes longevity, enhances digestion, purifies blood",
            dosage: "Take 30 ml of Sri Sri Tattva Amla juice mixed with 100 ml water or fruit juice or have it plain or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {   
        
        name: "Patanjali Aloevera Juice 1 ltr",
        image: "https://www.netmeds.com/images/product-v1/600x600/406026/patanjali_juice_aloevera_1_ltr_0.jpg",
        price: 180,
        category: "Ayurveda",
        description: {
            about: "Patanjali Aloe Vera juice plain is well known for its soothing and healing properties. The juice gets rid of the toxins and unwanted waste of the body and strengthens the digestive system. It gives relief from indigestion, heartburn, cures constipation and also ulcer. The juice contains vitamins and minerals which boost body energy and it also helps to control body weight.",
            ingredients: "Aloevera juice, Water",
            benefits: "Aloe vera is rich source of anti-oxidants and encourages cell repair and growth. It helps to build the immune system of the body",
            dosage: "15 - 25 ml twice daily or mixing with equal quantity of water or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Dark Forest Amla Powder",
        image: "https://www.netmeds.com/images/product-v1/600x600/900929/dark_forest_amla_powder_200_gm_0_0.jpg",
        price: 98,
        category: "Ayurveda",
        description: {
            about: "Dark Forest Amla Powder contains pure powder of emblica officinalis as its ingredient.",
            ingredients: "Amla powder",
            benefits: "An excellent source of vitamin C, It acts as an excellent tonic for skin, hair and eyes, A potent antioxidant",
            dosage: "Mix 1 teaspoonful of powder in 200ml of water or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Dabur Ashwagandha Churna 100gm",
        image: "https://www.netmeds.com/images/product-v1/600x600/15895/dabur_ashwagandha_churna_100_gm_0.jpg",
        price: 113,
        category: "Ayurveda",
        description: {
            about: "Dabur Ashwagandha Churna contains is an Ayurvedic formula which helps improve stamina, energy levels as well as provides relief from weakness and stress",
            ingredients: "Ashwagandha powder",
            benefits: "Improves old age debility and immunity, Useful for Stress and fatigue and weakness",
            dosage: "Half teaspoonful twice a day with milk or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Dhootapapeshwar Brahmi Vati Suvarnayukta",
        image: "https://www.netmeds.com/images/product-v1/600x600/887421/dhootapapeshwar_brahmi_vati_suvarnayukta_tablet_10_s_0.jpg",
        price: 343,
        category: "Ayurveda",
        description: {
            about: "Dhootapapeshwar Brahmi Vati Suvarnayukta contains Suvarna Bhasma, Brahmi, Vacha, Shankhapushpi, Guduchi, and Jatamansi as active ingredients.",
            ingredients: "Suvarna Bhasma, Brahmi, Vacha, Shankhapushpi, Guduchi, Jatamansi",
            benefits: "Relieves mental stress and Fatigue with the Balya & Shamak action on Mastishka & Sanjnyavahi nadis. Enhances the capacity of sensory as well as motor organs & promotes intelligence and memory.",
            dosage: "Take 1 to 2 tab 2-3 times a day or as per Rugnavastha with Saraswatarishta, ghee, honey or milk or as directed by the Ayurvedic doctor.",
            storage: "Keep out of the reach and sight of the children.",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Sri Sri Tattva Flaxseed Oil Capsule",
        image: "https://www.netmeds.com/images/product-v1/600x600/824309/sri_sri_tattva_flaxseed_oil_veg_capsule_30_s_0.jpg",
        price: 189,
        category: "Ayurveda",
        description: {
            about: "Sri Sri Tattva Flaxseed Oil Capsule contains 500mg Flaxseed oil in a vegetarian capsule. Flaxseeds are one of the nature’s richest source of Omega 3, 6 & 9 fatty acids that are highly beneficial for the overall well-being of the body. Unlike other sources of Omega 3, 6 & 9, in this product is 100% Vegetarian.",
            ingredients: "Flaxseed oil",
            benefits: "Useful for rheumatoid arthritis and joint pain. \nHealing sprains, bruises and injuries and as an anti-inflammatory. \nKnown to contribute to the development of the brain and eyes in both youngsters and adults. \nCertain skin problems today may be due to the fact that the modern diet is lacking in \nOmega 3 essential fatty acids. As a rich source of omega 3 fatty acids, flaxseed contributes to replenishing the correct body levels of these fatty acids thereby \nprevent skin disorders that may result from a deficiency. \nSupports good cardiovascular health.",
            dosage: "As directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Himalaya Wellness Pure Herbs Ashvagandha Tablet",
        image: "https://www.netmeds.com/images/product-v1/600x600/814310/himalaya_wellness_ashvagandha_tablet_60_s_0.jpg",
        price: 143,
        category: "Ayurveda",
        description: {
            about: "Ashvagandha Tablet is pure herb extract that contains Ashvagandha (Withania somnifera). Ashvagandha rejuvenates the mind and helps to increase the immunity. Ashvagandha is also referred to as to as “Indian ginseng” as it acts as a natural stress reliever. Ashvagandha Tablet maintains a healthy balance between the nervous system, endocrine glands and immune system. It also helps in boosting up the sexual energy in men. Ashvagandha is traditionally referred to as an aphrodisiac which promotes sexual health by uplifting the mood, reducing anxiety, improving energy levels and fertility.",
            ingredients: "Ashvagandha (Withania somnifera)",
            benefits: "It acts as a natural stress reliever. Ashvagandha Tablet maintains a healthy balance between the nervous system, endocrine glands and immune system.",
            dosage: "Recommended dose is 1 tablet twice daily after meals, with water.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "GNC Bodydynamix Super Citrimax Garcinia Cambogia Caplet",
        image: "https://www.netmeds.com/images/product-v1/600x600/840639/gnc_bodydynamix_super_citrimax_garinia_cambogia_caplets_60_s_0.jpg",
        price: 349,
        category: "Ayurveda",
        description: {
            about: "GNC Bodydynamix Super Citrimax Garcinia Cambogia Caplet contains garcinia Cambogia as the main ingredient which helps in strengthening the immune system and preventing chronic illness. It is useful in maintaining good digestive health and aiding weight loss.",
            ingredients: "Garcinia Cambogia",
            benefits: "It helps in strengthening the immune system and preventing chronic illness. It is useful in maintaining good digestive health and aiding weight loss.",
            dosage: "As directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {   
        
        name: "Dabur Sat Isabgol",
        image: "https://www.netmeds.com/images/product-v1/600x600/413874/dabur_sat_isabgol_husk_200_gm_0.jpg",
        price: 152,
        category: "Ayurveda",
        description: {
            about: "Dabur Sat Isabgol Powder contains Isabgol Powder as a major ingredient and it helps in relieving constipation and treat diarrhoea. It acts as a colon cleanser and aids digestion.",
            ingredients: "Isabgol Powder",
            benefits: "It helps in relieving constipation and treat diarrhoea. It acts as a colon cleanser and aids digestion.",
            dosage: "As directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Garlic Pearls Capsule",
        image: "https://www.netmeds.com/images/product-v1/600x600/38049/garlic_pearls_capsule_100_s_0.jpg",
        price: 111,
        category: "Ayurveda",
        description: {
            about: "Garlic Pearls Capsule helps to maintain the cholesterol and triglyceride levels. It helps in controlling the high blood pressure and hardening of the arteries. It is also useful  in the treatment of prostrate, colon and rectal cancer. Being a powerful anti-oxidant , it provides effective relief in tick bites, Athlete's foot and ringworm.",
            ingredients: "Garlic Oil",
            benefits: "It helps in controlling the high blood pressure and hardening of the arteries. It is also useful  in the treatment of prostrate, colon and rectal cancer. Being a powerful anti-oxidant , it provides effective relief in tick bites, Athlete's foot and ringworm.",
            dosage: "Take 1-2 pearls after meals with a glass of water 3 times a day or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Swadeshi Giloy Vati",
        image: "https://www.netmeds.com/images/product-v1/600x600/827484/swadeshi_giloy_vati_tablet_120_s_0.jpg",
        price: 135,
        category: "Ayurveda",
        description: {
            about: "Swadeshi Giloy Vati is beneficial in fever and enhances blood formation as well as blood purification. It also treats liver disorders and improves immunity.",
            ingredients: "Giloy, Gond",
            benefits: "It is beneficial in fever and enhances blood formation as well as blood purification. It also treats liver disorders and improves immunity.",
            dosage: "As directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Organic India Turmeric Formula Veg Capsule",
        image: "https://www.netmeds.com/images/product-v1/600x600/408371/organic_india_turmeric_formula_veg_capsules_60_s_0.jpg",
        price: 251,
        category: "Ayurveda",
        description: {
            about: "Organic India Turmeric Formula Veg Capsule supports important blood and liver functions and improves digestion. It helps in inflammatory conditions, joint and muscle pain, cold and cough, indigestion, bloating, skin infections and other skin diseases.",
            ingredients: "Organic Turmeric Rhizome",
            benefits: "It supports important blood and liver functions and improves digestion. It helps in inflammatory conditions, joint and muscle pain, cold and cough, indigestion, bloating, skin infections and other skin diseases.",
            dosage: "1-2 capsules with food and water twice a day for a least 3 months or as directed by your health care provider",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Zandu Nityam Tablet",
        image: "https://www.netmeds.com/images/product-v1/600x600/805348/zandu_nityam_tablet_48_s_0.jpg",
        price: 138,
        category: "Ayurveda",
        description: {
            about: "Zandu Nityam Tablet is a unique formulation enriched with 7 powerful Ayurvedic ingredients like Castor Oil, Senna, Saunf & Triphala. It gently cleanses & soothes intestinal walls ensuring regular bowel movement without any abdominal cramps and is also effective on associated problems like gas, acidity, & flatulence. Nityam provides relief from chronic constipation and one feels light & active all day long.",
            ingredients: "Castor Oil, Senna, Saunf, Triphala",
            benefits: "It gently cleanses & soothes intestinal walls ensuring regular bowel movement without any abdominal cramps and is also effective on associated problems like gas, acidity, & flatulence.",
            dosage: "1-2 tablets to be taken with water at bed time or as advised by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Karela Pure Natural Extract 500mg Capsule",
        image: "https://www.netmeds.com/images/product-v1/600x600/828398/natures_velvet_karela_pure_extract_500_mg_capsules_60_s_0.jpg",
        price: 390,
        category: "Ayurveda",
        description: {
            about: "Karela Pure Natural Extract 500mg Capsules is a herbal health supplement that helps in regulating blood sugar level and also helps in boosting the metabolism. It not only helps in improving digestion but also helps in the purification of blood. Formulated with natural extracts of Karela (Momordia charantia), it has antioxidant properties which protect the cell from harmful effects of free radicals and reduces the risk of complications due to the instability of blood glucose level.",
            ingredients: "Karela Extracts",
            benefits: "It helps in regulating blood sugar level and also helps in boosting the metabolism. It not only helps in improving digestion but also helps in the purification of blood.",
            dosage: "Take 1 capsule twice a day or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },





    {   
        
        name: "Himalaya Liv. 52 DS Tablet",
        image: "https://www.netmeds.com/images/product-v1/600x600/14142/liv_52_ds_tablet_60_s_0.jpg",
        price: 133,
        category: "Ayurveda",
        description: {
            about: "Himalaya Liv.52 DS is a double strength Hepatospecific formulation that contains Caper Bush (Himsra) and Chicory (Kasani) herbs. The Caper Bush contains p-methoxy benzoic acid for increasing the functional efficiency of the liver. Chicory is effective in protecting liver from alcohol toxicity. Liv 52 DS tablet is a daily health supplement that protect the hepatic parenchyma and stimulate hepatocellular regeneration to increase efficiency of the liver.",
            ingredients: "",
            benefits: "Liv.52 DS Tablet improves digestion and assimilation process, promotes appetite. It reduces damage caused to liver due to Elevated liver enzyme, jaundice, and Hepatitis A & B.",
            dosage: "Two tablet of Liv 52 DS can be consumed twice or thrice a day after meals.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {   
        
        name: "Dabur Triphala Churna",
        image: "https://www.netmeds.com/images/product-v1/600x600/413892/dabur_triphala_churna_500_gm_0.jpg",
        price: 138,
        category: "Ayurveda",
        description: {
            about: "Dabur Triphala Churna contains a combination of three well-known herbs Amla, Harad, and Bahera. These three fruits help in smooth functioning of bowel and relieve constipation.",
            ingredients: "",
            benefits: "It maintains overall health by harmonizing digestive functions and cleansing the stomach. It helps in smooth functioning of bowel and relieve constipation.",
            dosage: "Consume ½ to 1 of Dabur Triphala Churna teaspoonful (3-6g) twice a day with lukewarm water or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {   
        
        name: "Dabur Chyawanprash 1Kg",
        image: "https://www.netmeds.com/images/product-v1/600x600/313682/dabur_chyawanprash_1_kg_0.jpg",
        price: 259,
        category: "Ayurveda",
        description: {
            about: "Dabur Chyawanprash 1Kg is an ayurvedic health supplement comprising 41 Ayurvedic herbs that boost the immunity, protects the body from infections like cough & cold etc. caused by various micro-organisms and weather change. This effectively helps to restore youth and vitality and can be taken by people of all ages.",
            ingredients: "Bilya, Amla,Brahmi, Pippali, Yashtimadhu, Gokshura",
            benefits: "Strengthens the immune system and helps fight diseases, Helps in improving the process of digestion, Strengthens the body's internal defence mechanism with its anti-oxidant properties",
            dosage: "1 teaspoon to be taken twice a day- once in the morning & once at night or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Sri Sri Tattva Amla Juice",
        image: "https://www.netmeds.com/images/product-v1/600x600/824343/sri_sri_tattva_no_added_sugar_juice_amla_1000_ml_0.jpg",
        price: 180,
        category: "Ayurveda",
        description: {
            about: "Sri Sri Tattva Amla Juice is a food supplement that is unfermented indian gooseberry juice that is a power house of essential nutrients and minerals. It helps balance all the three doshas in the human body and is an excellent source of Vitamin C. All the ingredients are non synthetic in nature and is totally safe to use without any side effects.",
            ingredients: "Amla juice, Water, Citric acid",
            benefits: "It is rich in Vitamin C that helps boost immunity and metabolism of the body, Helps prevent viral and bacterial ailments, including cold and cough, It promotes longevity, enhances digestion, purifies blood",
            dosage: "Take 30 ml of Sri Sri Tattva Amla juice mixed with 100 ml water or fruit juice or have it plain or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {   
        
        name: "Patanjali Aloevera Juice 1 ltr",
        image: "https://www.netmeds.com/images/product-v1/600x600/406026/patanjali_juice_aloevera_1_ltr_0.jpg",
        price: 180,
        category: "Ayurveda",
        description: {
            about: "Patanjali Aloe Vera juice plain is well known for its soothing and healing properties. The juice gets rid of the toxins and unwanted waste of the body and strengthens the digestive system. It gives relief from indigestion, heartburn, cures constipation and also ulcer. The juice contains vitamins and minerals which boost body energy and it also helps to control body weight.",
            ingredients: "Aloevera juice, Water",
            benefits: "Aloe vera is rich source of anti-oxidants and encourages cell repair and growth. It helps to build the immune system of the body",
            dosage: "15 - 25 ml twice daily or mixing with equal quantity of water or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Dark Forest Amla Powder",
        image: "https://www.netmeds.com/images/product-v1/600x600/900929/dark_forest_amla_powder_200_gm_0_0.jpg",
        price: 98,
        category: "Ayurveda",
        description: {
            about: "Dark Forest Amla Powder contains pure powder of emblica officinalis as its ingredient.",
            ingredients: "Amla powder",
            benefits: "An excellent source of vitamin C, It acts as an excellent tonic for skin, hair and eyes, A potent antioxidant",
            dosage: "Mix 1 teaspoonful of powder in 200ml of water or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Dabur Ashwagandha Churna 100gm",
        image: "https://www.netmeds.com/images/product-v1/600x600/15895/dabur_ashwagandha_churna_100_gm_0.jpg",
        price: 113,
        category: "Ayurveda",
        description: {
            about: "Dabur Ashwagandha Churna contains is an Ayurvedic formula which helps improve stamina, energy levels as well as provides relief from weakness and stress",
            ingredients: "Ashwagandha powder",
            benefits: "Improves old age debility and immunity, Useful for Stress and fatigue and weakness",
            dosage: "Half teaspoonful twice a day with milk or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Dhootapapeshwar Brahmi Vati Suvarnayukta",
        image: "https://www.netmeds.com/images/product-v1/600x600/887421/dhootapapeshwar_brahmi_vati_suvarnayukta_tablet_10_s_0.jpg",
        price: 343,
        category: "Ayurveda",
        description: {
            about: "Dhootapapeshwar Brahmi Vati Suvarnayukta contains Suvarna Bhasma, Brahmi, Vacha, Shankhapushpi, Guduchi, and Jatamansi as active ingredients.",
            ingredients: "Suvarna Bhasma, Brahmi, Vacha, Shankhapushpi, Guduchi, Jatamansi",
            benefits: "Relieves mental stress and Fatigue with the Balya & Shamak action on Mastishka & Sanjnyavahi nadis. Enhances the capacity of sensory as well as motor organs & promotes intelligence and memory.",
            dosage: "Take 1 to 2 tab 2-3 times a day or as per Rugnavastha with Saraswatarishta, ghee, honey or milk or as directed by the Ayurvedic doctor.",
            storage: "Keep out of the reach and sight of the children.",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Sri Sri Tattva Flaxseed Oil Capsule",
        image: "https://www.netmeds.com/images/product-v1/600x600/824309/sri_sri_tattva_flaxseed_oil_veg_capsule_30_s_0.jpg",
        price: 189,
        category: "Ayurveda",
        description: {
            about: "Sri Sri Tattva Flaxseed Oil Capsule contains 500mg Flaxseed oil in a vegetarian capsule. Flaxseeds are one of the nature’s richest source of Omega 3, 6 & 9 fatty acids that are highly beneficial for the overall well-being of the body. Unlike other sources of Omega 3, 6 & 9, in this product is 100% Vegetarian.",
            ingredients: "Flaxseed oil",
            benefits: "Useful for rheumatoid arthritis and joint pain. \nHealing sprains, bruises and injuries and as an anti-inflammatory. \nKnown to contribute to the development of the brain and eyes in both youngsters and adults. \nCertain skin problems today may be due to the fact that the modern diet is lacking in \nOmega 3 essential fatty acids. As a rich source of omega 3 fatty acids, flaxseed contributes to replenishing the correct body levels of these fatty acids thereby \nprevent skin disorders that may result from a deficiency. \nSupports good cardiovascular health.",
            dosage: "As directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Himalaya Wellness Pure Herbs Ashvagandha Tablet",
        image: "https://www.netmeds.com/images/product-v1/600x600/814310/himalaya_wellness_ashvagandha_tablet_60_s_0.jpg",
        price: 143,
        category: "Ayurveda",
        description: {
            about: "Ashvagandha Tablet is pure herb extract that contains Ashvagandha (Withania somnifera). Ashvagandha rejuvenates the mind and helps to increase the immunity. Ashvagandha is also referred to as to as “Indian ginseng” as it acts as a natural stress reliever. Ashvagandha Tablet maintains a healthy balance between the nervous system, endocrine glands and immune system. It also helps in boosting up the sexual energy in men. Ashvagandha is traditionally referred to as an aphrodisiac which promotes sexual health by uplifting the mood, reducing anxiety, improving energy levels and fertility.",
            ingredients: "Ashvagandha (Withania somnifera)",
            benefits: "It acts as a natural stress reliever. Ashvagandha Tablet maintains a healthy balance between the nervous system, endocrine glands and immune system.",
            dosage: "Recommended dose is 1 tablet twice daily after meals, with water.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "GNC Bodydynamix Super Citrimax Garcinia Cambogia Caplet",
        image: "https://www.netmeds.com/images/product-v1/600x600/840639/gnc_bodydynamix_super_citrimax_garinia_cambogia_caplets_60_s_0.jpg",
        price: 349,
        category: "Ayurveda",
        description: {
            about: "GNC Bodydynamix Super Citrimax Garcinia Cambogia Caplet contains garcinia Cambogia as the main ingredient which helps in strengthening the immune system and preventing chronic illness. It is useful in maintaining good digestive health and aiding weight loss.",
            ingredients: "Garcinia Cambogia",
            benefits: "It helps in strengthening the immune system and preventing chronic illness. It is useful in maintaining good digestive health and aiding weight loss.",
            dosage: "As directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {   
        
        name: "Dabur Sat Isabgol",
        image: "https://www.netmeds.com/images/product-v1/600x600/413874/dabur_sat_isabgol_husk_200_gm_0.jpg",
        price: 152,
        category: "Ayurveda",
        description: {
            about: "Dabur Sat Isabgol Powder contains Isabgol Powder as a major ingredient and it helps in relieving constipation and treat diarrhoea. It acts as a colon cleanser and aids digestion.",
            ingredients: "Isabgol Powder",
            benefits: "It helps in relieving constipation and treat diarrhoea. It acts as a colon cleanser and aids digestion.",
            dosage: "As directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Garlic Pearls Capsule",
        image: "https://www.netmeds.com/images/product-v1/600x600/38049/garlic_pearls_capsule_100_s_0.jpg",
        price: 111,
        category: "Ayurveda",
        description: {
            about: "Garlic Pearls Capsule helps to maintain the cholesterol and triglyceride levels. It helps in controlling the high blood pressure and hardening of the arteries. It is also useful  in the treatment of prostrate, colon and rectal cancer. Being a powerful anti-oxidant , it provides effective relief in tick bites, Athlete's foot and ringworm.",
            ingredients: "Garlic Oil",
            benefits: "It helps in controlling the high blood pressure and hardening of the arteries. It is also useful  in the treatment of prostrate, colon and rectal cancer. Being a powerful anti-oxidant , it provides effective relief in tick bites, Athlete's foot and ringworm.",
            dosage: "Take 1-2 pearls after meals with a glass of water 3 times a day or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Swadeshi Giloy Vati",
        image: "https://www.netmeds.com/images/product-v1/600x600/827484/swadeshi_giloy_vati_tablet_120_s_0.jpg",
        price: 135,
        category: "Ayurveda",
        description: {
            about: "Swadeshi Giloy Vati is beneficial in fever and enhances blood formation as well as blood purification. It also treats liver disorders and improves immunity.",
            ingredients: "Giloy, Gond",
            benefits: "It is beneficial in fever and enhances blood formation as well as blood purification. It also treats liver disorders and improves immunity.",
            dosage: "As directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Organic India Turmeric Formula Veg Capsule",
        image: "https://www.netmeds.com/images/product-v1/600x600/408371/organic_india_turmeric_formula_veg_capsules_60_s_0.jpg",
        price: 251,
        category: "Ayurveda",
        description: {
            about: "Organic India Turmeric Formula Veg Capsule supports important blood and liver functions and improves digestion. It helps in inflammatory conditions, joint and muscle pain, cold and cough, indigestion, bloating, skin infections and other skin diseases.",
            ingredients: "Organic Turmeric Rhizome",
            benefits: "It supports important blood and liver functions and improves digestion. It helps in inflammatory conditions, joint and muscle pain, cold and cough, indigestion, bloating, skin infections and other skin diseases.",
            dosage: "1-2 capsules with food and water twice a day for a least 3 months or as directed by your health care provider",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Zandu Nityam Tablet",
        image: "https://www.netmeds.com/images/product-v1/600x600/805348/zandu_nityam_tablet_48_s_0.jpg",
        price: 138,
        category: "Ayurveda",
        description: {
            about: "Zandu Nityam Tablet is a unique formulation enriched with 7 powerful Ayurvedic ingredients like Castor Oil, Senna, Saunf & Triphala. It gently cleanses & soothes intestinal walls ensuring regular bowel movement without any abdominal cramps and is also effective on associated problems like gas, acidity, & flatulence. Nityam provides relief from chronic constipation and one feels light & active all day long.",
            ingredients: "Castor Oil, Senna, Saunf, Triphala",
            benefits: "It gently cleanses & soothes intestinal walls ensuring regular bowel movement without any abdominal cramps and is also effective on associated problems like gas, acidity, & flatulence.",
            dosage: "1-2 tablets to be taken with water at bed time or as advised by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    },
    {
        
        name: "Karela Pure Natural Extract 500mg Capsule",
        image: "https://www.netmeds.com/images/product-v1/600x600/828398/natures_velvet_karela_pure_extract_500_mg_capsules_60_s_0.jpg",
        price: 390,
        category: "Ayurveda",
        description: {
            about: "Karela Pure Natural Extract 500mg Capsules is a herbal health supplement that helps in regulating blood sugar level and also helps in boosting the metabolism. It not only helps in improving digestion but also helps in the purification of blood. Formulated with natural extracts of Karela (Momordia charantia), it has antioxidant properties which protect the cell from harmful effects of free radicals and reduces the risk of complications due to the instability of blood glucose level.",
            ingredients: "Karela Extracts",
            benefits: "It helps in regulating blood sugar level and also helps in boosting the metabolism. It not only helps in improving digestion but also helps in the purification of blood.",
            dosage: "Take 1 capsule twice a day or as directed by the physician.",
            storage: "Store in a cool, dry & dark place and protect from direct Sunlight",
            safety: "Read the label carefully before use, do not exceed the recommended dose and keep out of the reach and sight of children."
        }
    }
    
];

function seedDb(){
    Product.remove({}, function(err){
        if(err){
            console.log("Unable to remove the product collection");
        }else{
            Product.create(data, function(err, addedProduct){
                if(err){
                    console.log("Unable to create the product collection");
                }else{
                    console.log("Successfully seeded product collection");
                }
            });
        }
    });
}


module.exports=seedDb;