
const productsDatabase = [
    {
        id: 1, 
        name: "Bblunt Intense Moisture Shampoo - 300 ml",
        price: 399,
        oldPrice: "599.00",
        image: "../Media/haircare/B-Blunt Intense Moisture Shampoo.jpg",
        description: "Seriously dry hair needs serious moisture! This shampoo is packed with Jojoba and Vitamin E to deeply hydrate your hair without weighing it down. Perfect for Indian hair types and weather."
    },
    {
        id: 2, 
        name: "Bare Anatomy Damage Repair Hair Shampoo",
        price: 449,
        oldPrice: "595.00",
        image: "../Media/haircare/Bare Anatomy Damage Repair Shampoo.jpg",
        description: "Reverse up to 3 years of hair damage! Formulated with Ceramide A2 and Peptides, this shampoo strengthens your hair fibers and prevents future breakage."
    },
    {
        id: 3,
        name: "Delhicious Amla Oil & Rosemary Oil Shampoo for Hair Growth - 250ml",
        price: 1215,
        oldPrice: "1899.00",
        image: "../Media/haircare/Delhicious Shampoo.png",
        description: "Promotes hair growth and scalp health."
    },
    {
        id: 4,
        name: "DHI Hair Growth Serum 30 ml",
        price: 1049,
        oldPrice: "1199.00",
        image: "../Media/haircare/Dhi Hair Growth Serum.jpg",
        description: "Advanced hair growth formula."
    },
    {
        id: 5,
        name: "Kerastase Paris Nutritive 8H Magic Night Serum 90ml",
        price: 6772.92,
        oldPrice: "6999.00",
        image: "../Media/haircare/Kerastase Night Serum.jpg",
        description: "Overnight nourishment for dry hair."
    },
    {
        id: 6,
        name: "L'Oreal Paris Extraordinary Oil Hair Serum Powered by Floral Oils | 30ml",
        price: 421,
        oldPrice: "499.00",
        image: "../Media/haircare/Loreal Hair Serum Oil.jpg",
        description: "Lightweight serum for shiny, frizz-free hair."
    },
    {
        id: 7,
        name: "Matrix Professional Opti Care Shampoo 200 ml",
        price: 605,
        oldPrice: "699.00",
        image: "../Media/haircare/Matrix Shampoo.jpeg",
        description: "Professional care for chemically straightened hair."
    },
    {
        id: 8,
        name: "Volcanic Minerals & 0.5% Salicylic Acid Anti-Dandruff Shampoo - 250 ml",
        price: 347,
        oldPrice: "399.00",
        image: "../Media/haircare/Plom Anti-Dandruff Shampoo.jpg",
        description: "Fights dandruff and soothes the scalp."
    },
    {
        id: 9,
        name: "7 in 1 Hair Oil",
        price: 740,
        oldPrice: "899.00",
        image: "../Media/haircare/Skinmushh Hair Oil.jpg",
        description: "Complete nourishment with 7 natural oils."
    },
    {
        id: 10,
        name: "The Earth Collective Hair Moisturizer - Hydrating Leave On Hair Serum With Goji Berries & Oats",
        price: 810,
        oldPrice: "900.00",
        image: "../Media/haircare/The Earth Collective Hair Moisturizer.png",
        description: "Hydrating leave-on formula."
    },
    {
        id: 11,
        name: "Wow Skin Science Onion Oil Ultimate Hair Care | 650 Ml",
        price: 939,
        oldPrice: "1799.00",
        image: "../Media/haircare/Wow Hair onion Conditioner.webp",
        description: "Ultimate hair care kit with onion seed oil."
    },
    {
        id: 12,
        name: "WOW Skin Science Onion Black Seed Hair Oil for Dry Damaged Hair",
        price: 499,
        oldPrice: "599.00",
        image: "../Media/haircare/Wow Hair Onion Oil Simple.webp",
        description: "Controls hair fall and promotes growth."
    },
    {
        id: 13,
        name: "Hair Fall Control Oil - 50 ml, Reducing Hair Fall, Promoting Volume and Adding Natural Shine",
        price: 562,
        oldPrice: "1049.00",
        image: "../Media/haircare/The Herbal Story Hair Oil.jpg",
        description: "Reduces hair fall and adds natural shine."
    },
    {
        id: 14,
        name: "TRESemmé Keratin Smooth Serum 100ml With Keratin Protein and Argan Oil",
        price: 334,
        oldPrice: "499.00",
        image: "../Media/haircare/Tresemme Hair Serum.jpg",
        description: "Controls frizz and adds shine with Keratin and Argan oil."
    },
    {
        id: 15,
        name: "Plum Olive & Plant Keratin Damage Repair Shampoo | Sulphate-Free",
        price: 444,
        oldPrice: "499.00",
        image: "../Media/haircare/Plum damage Repair Shampoo.jpg",
        description: "Sulphate-free damage repair."
    },
    {
        id: 16,
        name: "L'Oreal Professionnel Scalp Advanced Anti-Oiliness Shampoo",
        price: 880,
        oldPrice: "929.00",
        image: "../Media/haircare/L'Oreal Professionnel Shampoo.webp",
        description: "Deep purifying shampoo for oily scalps."
    },{
        id: 17,
        name: "Addict Shine 90% Natural Origin Refillable Lipstick",
        price: 4700,
        oldPrice: "8,700.00",
        image: "../Media/makeup/Dior Lipstick (Peach).jpg",
        description: "A hydrating, high-shine lipstick formulated with 90% natural-origin ingredients for an ultra-comfortable finish."
    },
    {
        id: 18,
        name: "FACES CANADA Magneteyes Eyeliner - Black, 3.5m",
        price: 179,
        oldPrice: "499.00",
        image: "../Media/makeup/Facescanada EyelIner.jpeg",
        description: "Intense black, waterproof, and smudge-proof eyeliner for perfectly defined eyes all day long."
    },
    {
        id: 19,
        name: "Lakmē 9 to 5 Powerplay Velvet Crème Blush",
        price: 455,
        oldPrice: "650.00",
        image: "../Media/makeup/Lakme Cream Blush.jpg",
        description: "A seamless, blendable velvet crème blush that adds a natural, long-lasting flush of color to your cheeks."
    },
    {
        id: 20,
        name: "Insight Cosmetics Cheek Tint Blush - Watermelon Popsicle",
        price: 130,
        oldPrice: "155.00",
        image: "../Media/makeup/Insight Cheek tint Blush.png",
        description: "Hydrating cheek tint enriched with avocado oil for a beautiful, intense pop of color."
    },
    {
        id: 21,
        name: "Lakme Face It Blush Flushed Pink B2 4gm",
        price: 165,
        oldPrice: "250.00",
        image: "../Media/makeup/Lakme Blush.jpeg",
        description: "A lightweight, radiant powder blush that effortlessly adds a healthy glow to your everyday look."
    },
    {
        id: 22,
        name: "Maybelline New York Lash Sensational Curvitude Washable Mascara",
        price: 2475,
        oldPrice: "2,750.00",
        image: "../Media/makeup/Maybelline Lash Mascara.jpg",
        description: "Innovative curved wand coats every single lash from root to tip for full fan effect and incredible volume."
    },
    {
        id: 23,
        name: "Revlon Powder Blush, Tickled Pink",
        price: 1175,
        oldPrice: "5,150.00",
        image: "../Media/makeup/Revlon Powdered Blush.jpg",
        description: "Silky, buildable powder blush that provides a pop of color for beautifully flushed cheeks."
    },
    {
        id: 24,
        name: "Swiss Beauty Cream It Up Blush - Natural Flush Shade 02",
        price: 239,
        oldPrice: "400.00",
        image: "../Media/makeup/Swiss Beauty Cream Blush.jpg",
        description: "Creamy blush formulated with Shea Butter for a smooth, natural flush that lasts."
    },
    {
        id: 25,
        name: "Dior Forever Skin Glow 24H Wear Radiant Foundation SPF 20",
        price: 5015,
        oldPrice: "5,700.00",
        image: "../Media/makeup/Dior Faundation.jpeg",
        description: "A clean foundation offering 24-hour wear, radiant finish, and hydration for a glowing complexion."
    },
    {
        id: 26,
        name: "RENEE Volumax Mascara Black 10ml",
        price: 385,
        oldPrice: "450.00",
        image: "../Media/makeup/Renee Mascara.jpg",
        description: "Quick dry, waterproof, and weightless formula for dramatically lifted and voluminous lashes."
    },
    {
        id: 27,
        name: "CHANEL Rouge Coco Ultra Hydrating Lip Colour",
        price: 6650,
        oldPrice: "7,599.00",
        image: "../Media/makeup/Chanel Lipstick (Pink).jpg",
        description: "The iconic CHANEL lipstick reinvented. Ultra-hydrating and long-wearing for perfectly lush lips."
    },
    {
        id: 28,
        name: "DIOR Addict 24H Hydration Plumping Gloss Lip Maxim Rose Nudo",
        price: 4300,
        oldPrice: "4,599.00",
        image: "../Media/makeup/Dior Lipstick.png",
        description: "A signature lip plumping gloss that delivers maximum volume, deep hydration, and brilliant shine."
    },
    {
        id: 29,
        name: "e.l.f. 16HR Camo Liquid Concealer",
        price: 899,
        oldPrice: "1199.00",
        image: "../Media/makeup/Elf Concealer.jpg",
        description: "Full coverage, highly pigmented matte liquid concealer that covers imperfections flawlessly for up to 16 hours."
    },
    {
        id: 30,
        name: "DIOR FOREVER SKIN GLOW FOUNDATION (30ML)--2N",
        price: 6100,
        oldPrice: "6,800.00",
        image: "../Media/makeup/Dior Faudation (Shade).png",
        description: "Luxurious, skin-caring foundation that improves complexion quality over time while providing instant, radiant coverage."
    },
    {
        id: 31,
        name: "MARS Dance Of Joy Eyeshadow Palette - 2 (13.2 g)",
        price: 269,
        oldPrice: "299.00",
        image: "../Media/makeup/MARS Eyeshadow Palette.jpg",
        description: "A versatile palette featuring highly pigmented, easily blendable shades perfect for both day and night looks."
    },
    {
        id: 32,
        name: "FACES CANADA Starry Eyes Eye Shadow Palette - Supernova",
        price: 549,
        oldPrice: "999.00",
        image: "../Media/makeup/Facescanada Starryy Eye (Eye Shadow).jpg",
        description: "A stunning mix of matte and shimmer shades to create endless show-stopping eye looks."
    },{
        id: 33,
        name: "My Glow Tinted Moisturizer",
        price: 599,
        oldPrice: "705.00",
        image: "../Media/Best Seller Section/My Glow tinted moisturizer.jpeg",
        description: "A lightweight, hydrating tinted moisturizer that gives you a flawless, natural glow."
    },
    {
        id: 34,
        name: "MAC Matte Lipstick",
        price: 899,
        oldPrice: "1299.00",
        image: "../Media/Best Seller Section/MAC LIPSTICK.jpeg",
        description: "The iconic matte lipstick that made MAC famous. Long-wearing and highly pigmented."
    },
    {
        id: 35,
        name: "L'Oreal Shampoo & Conditioner Combo",
        price: 1599,
        oldPrice: "2665.00",
        image: "../Media/Best Seller Section/Lareal Sampoo Combo.jpeg",
        description: "Complete haircare essential combo for deeply nourished, smooth, and frizz-free hair."
    },
    {
        id: 36,
        name: "Chanel Perfume",
        price: 15599.00,
        oldPrice: "15750.00",
        image: "../Media/Best Seller Section/Perfume Aesthetic.jpeg",
        description: "A luxurious and timeless fragrance that leaves a lasting, unforgettable impression."
    },{
        id: 37,
        name: "BELLAVITA Date Perfum Notes of Pink Pepper, Red Fruits Eau de Parfum - 100 ml",
        price: 950,
        oldPrice: "1,599.00",
        image: "../Media/perfume/Bellavita.jpg",
        description: "A romantic and captivating fragrance featuring notes of pink pepper and red fruits, perfect for date night."
    },
    {
        id: 38,
        name: "Miss Dior Eau de Parfum - 100ml",
        price: 13926,
        oldPrice: "15,299.00",
        image: "../Media/perfume/Miss dior.png",
        description: "An elegant, floral fragrance that celebrates the beauty of Grasse roses wrapped in fresh notes."
    },
    {
        id: 39,
        name: "Chance Eau Tendre EDP - Chanel - 100ml",
        price: 18299,
        oldPrice: "20,898.00",
        image: "../Media/perfume/Chance chanel pink.jpg",
        description: "A delicate and radiant floral-fruity fragrance that brings a whirlwind of tenderness."
    },
    {
        id: 40,
        name: "GUESS Bella Vita Paradiso Liquid Eau De Parfum",
        price: 4875,
        oldPrice: "7,198.00",
        image: "../Media/perfume/Guess bellavita.jpg",
        description: "An alluring, glamorous scent designed to transport your senses to an Italian paradise."
    },
    {
        id: 41,
        name: "Pure Elegance Pour Femme Eau De Parfum 100ml",
        price: 4500,
        oldPrice: "5,599.00",
        image: "../Media/perfume/Pure elegance.jpg",
        description: "A sophisticated blend of luxury and grace, crafted for the modern, elegant woman."
    },
    {
        id: 42,
        name: "Lin parfum fass 100ml",
        price: 950,
        oldPrice: "1,599.00",
        image: "../Media/perfume/Lin parfum fass.jpg",
        description: "A refreshing, long-lasting fragrance ideal for daily wear and keeping you fresh all day."
    },
    {
        id: 43,
        name: "Joy by Dior Eau de Parfum - 90ml",
        price: 13926,
        oldPrice: "15,000.00",
        image: "../Media/perfume/Joy dior.jpg",
        description: "An energetic and luminous perfume that captures the pure feeling of joy in a beautiful bottle."
    },
    {
        id: 44,
        name: "Your Touch (Femme) | Eau De Parfum 100ml | By Maison Alhambra",
        price: 5430,
        oldPrice: "6,000.00",
        image: "../Media/perfume/Your touch.jpg",
        description: "A rich, enchanting scent profile from Maison Alhambra that leaves a memorable trail."
    },
    {
        id: 45,
        name: "Swiss Beauty Wild Flower EDP Long-Lasting 50ml",
        price: 850,
        oldPrice: "999.00",
        image: "../Media/perfume/Swiss beauty.jpg",
        description: "A vibrant burst of wildflowers in a compact bottle, offering long-lasting freshness."
    },
    {
        id: 46,
        name: "Cashmere 100ml Perfume",
        price: 2450,
        oldPrice: "3,599.00",
        image: "../Media/perfume/Cashmere.jpg",
        description: "Warm, soft, and luxurious, this perfume wraps you up like a cozy cashmere sweater."
    },
    {
        id: 47,
        name: "Arabian Aroma Flora Perfume Long Lasting - 50 ml",
        price: 1950,
        oldPrice: "2,599.00",
        image: "../Media/perfume/Floral by AL .jpg",
        description: "An exotic and highly concentrated floral blend inspired by classic Arabian perfumery."
    },
    {
        id: 48,
        name: "Forever Edp 60ml",
        price: 9149,
        oldPrice: "10,599.00",
        image: "../Media/perfume/Forever.jpg",
        description: "A timeless, signature scent formulated to stay with you from morning till night."
    },
    {
        id: 49,
        name: "Houhe Lasting Perfume 50ml",
        price: 1650,
        oldPrice: "2,199.00",
        image: "../Media/perfume/Houhe.jpg",
        description: "A uniquely captivating aroma designed for ultimate longevity and projection."
    },
    {
        id: 50,
        name: "Le Parfum Rose Couture By Elie Saab EDT",
        price: 8000,
        oldPrice: "9,199.00",
        image: "../Media/perfume/Elie saab.jpg",
        description: "A majestic rose fragrance that blends high-fashion elegance with delicate floral notes."
    },
    {
        id: 51,
        name: "GUESS 1981 Los Angeles for Women Eau de Toilette",
        price: 6350,
        oldPrice: "7,000.00",
        image: "../Media/perfume/Guess los Angeles.jpg",
        description: "A sunkissed, adventurous scent that embodies the free-spirited vibe of Los Angeles."
    },
    {
        id: 52,
        name: "CHANEL COCO Mademoiselle Intense EDP - 200ml",
        price: 60999,
        oldPrice: "62,599.00",
        image: "../Media/perfume/images (29).jpeg",
        description: "A deep, sensual, and highly concentrated interpretation of the classic Coco Mademoiselle."
    },{
        id: 53,
        name: "Suroskie Gluta Boost Face Wash For Men & Women 100ml",
        price: 699,
        oldPrice: "1,299.00",
        image: "../Media/Skincare/Suroskie Face Wash.jpeg",
        description: "A deeply cleansing face wash enriched with Gluta Boost to brighten and clear your skin. Perfect for daily use by both men and women."
    },
    {
        id: 54,
        name: "Suroskie My Glow All-In-One Tinted Sunscreen Spf 30 Moisturizer 60 Ml Medium Shade",
        price: 649,
        oldPrice: "1,599.00",
        image: "../Media/makeup/images (24).jpeg",
        description: "Your perfect 3-in-1 solution: it moisturizes, protects with SPF 30, and gives a flawless medium-shade tint for an instant glow."
    },
    {
        id: 55,
        name: "JOVEES Herbal Papaya Face Wash (120 ml)",
        price: 1199,
        oldPrice: "2,698.00",
        image: "../Media/bodycare/IMG-20260407-WA0010.jpg",
        description: "Brighten your skin and naturally reduce pigmentation with the power of herbal papaya extracts. Gentle and highly effective."
    },
    {
        id: 56,
        name: "Ice Glow Roller – Reusable Face Massager",
        price: 699,
        oldPrice: "1,298.00",
        image: "../Media/Skincare/gwasa2.webp",
        description: "Soothe your skin, reduce puffiness, and boost your glow with this premium, reusable ice roller massager."
    },
    {
        id: 57,
        name: "Prestige Micro-Oil Rose Activated Serum - 30ml",
        price: 25999,
        oldPrice: "32,599.00",
        image: "../Media/bodycare/IMG-20260407-WA0011.jpg",
        description: "An ultra-luxurious, highly concentrated rose-activated serum designed to deeply rejuvenate and transform your skin."
    },
    {
        id: 58,
        name: "Cosmetics Swipe Right Cleansing Water 100 ml",
        price: 499,
        oldPrice: "599.00",
        image: "../Media/bodycare/IMG-20260407-WA0009.jpg",
        description: "A gentle yet powerful micellar cleansing water that wipes away stubborn makeup and impurities in a single swipe."
    },
    {
        id: 59,
        name: "Dior Capture Totale Super Potent Serum C.E.L.L. Energy 10mL",
        price: 20650,
        oldPrice: "21,599.00",
        image: "../Media/bodycare/IMG-20260407-WA0008.jpg",
        description: "Experience total age-defying results with Dior's super potent serum, formulated for maximum cell energy and youth restoration."
    },
    {
        id: 60,
        name: "Feather Touch - Multi Purpose Moisturizer (100ML)",
        price: 699,
        oldPrice: "1,499.00",
        image: "../Media/bodycare/IMG-20260407-WA0005.jpg",
        description: "A versatile miracle milk that functions as a deeply hydrating base and an incredibly smooth makeup remover for all skin types."
    },
    {
        id: 61,
        name: "Dot & Key Strawberry Dew Brightening Moisturizer (80g)",
        price: 359,
        oldPrice: "399.00",
        image: "../Media/Skincare/dot & key mostirizer.jpg",
        description: "Packed with Niacinamide and Peptides, this sweet-scented strawberry moisturizer brightens and perfectly smooths your skin texture."
    },
    {
        id: 62,
        name: "The Face Shop Rice & Ceramide Moisturizing Cream 50ml",
        price: 880,
        oldPrice: "1,040.00",
        image: "../Media/Skincare/face cream.jpg",
        description: "Enriched with rice extracts and ceramides, this cream provides intense, long-lasting hydration and a noticeably brighter complexion."
    },
    {
        id: 63,
        name: "Xiro Derma Dry Skin Cream 50g",
        price: 525,
        oldPrice: "799.00",
        image: "../Media/Skincare/dry skin xiro derma.webp",
        description: "A chemical-free, natural rescue cream specifically formulated to intensely moisturize and heal dry, flaky skin."
    },
    {
        id: 64,
        name: "Proven Honest Derma PHD Vitamin C Brightening Moisturizer",
        price: 494,
        oldPrice: "549.00",
        image: "../Media/Skincare/face.jpg",
        description: "Boosted with Q10 and Ferulic acid, this daily moisturizer provides powerful antioxidant protection while brightening your face."
    },
    {
        id: 65,
        name: "The True Therapy 10% Vitamin C Face Serum",
        price: 419,
        oldPrice: "699.00",
        image: "../Media/Skincare/vitamin c.webp",
        description: "A highly concentrated 10% Vitamin C serum that fights dark spots, evens out skin tone, and delivers a radiant glow."
    },
    {
        id: 66,
        name: "Best-selling Shimmer Spray",
        price: 3330,
        oldPrice: "4,599.00",
        image: "../Media/Skincare/iconic landon fixer .webp",
        description: "Prep, hydrate, and beautifully set your makeup with this iconic spray that leaves a flawless, luminous shimmer finish."
    },
    {
        id: 67,
        name: "Lakme Absolute Argan Oil Radiance Face Cream (50gm)",
        price: 879,
        oldPrice: "925.00",
        image: "../Media/Skincare/lakme oil gradiance.jpg",
        description: "A unique oil-in-gel formula infused with Moroccan Argan oil to deeply nourish your skin and unlock a radiant, healthy glow."
    },
    {
        id: 68,
        name: "Lotus Makeup Ecostay Finishup Makeup Fixer",
        price: 327,
        oldPrice: "445.00",
        image: "../Media/Skincare/lotus makeup fixer.webp",
        description: "Lock in your look all day long with this refreshing makeup fixer that prevents smudging and keeps your skin feeling fresh."
    },{
        id: 69,
        name: "Tree Hut Cotton Candy Shea Sugar Scrub",
        price: 1299,
        oldPrice: "3,599.00",
        image: "../Media/bodycare/IMG-20260405-WA0057.jpg",
        description: "Exfoliating sugar body scrub with Shea Butter. Enjoy the sweet scent of cotton candy while polishing away dry skin."
    },
    {
        id: 70,
        name: "Sunday Rain Pink Grapefruit & Sea Salt Body Scrub 265g",
        price: 976,
        oldPrice: "1,208.00",
        image: "../Media/bodycare/IMG-20260405-WA0065.jpg",
        description: "Revitalize your skin with this refreshing pink grapefruit and sea salt scrub, designed to buff away dead skin cells."
    },
    {
        id: 71,
        name: "Watermelon Sunscreen Body Spray SPF 40+ PA+++ - 110ml",
        price: 518,
        oldPrice: "545.00",
        image: "../Media/bodycare/dot&key sunscreen.webp",
        description: "A lightweight, easy-to-apply sunscreen body spray with the fresh scent of watermelon and broad-spectrum protection."
    },
    {
        id: 72,
        name: "mCaffeine Sweet Escape Perfume Body Lotion 300ml",
        price: 3644,
        oldPrice: "4,235.00",
        image: "../Media/bodycare/IMG-20260407-WA0007.jpg",
        description: "Deeply moisturizing body lotion enriched with Niacinamide, Cocoa Butter, and Shea Butter with an alluring sweet escape scent."
    },
    {
        id: 73,
        name: "Eden-Roc Moisturizing Lotion Hand and Body Lotion",
        price: 11617,
        oldPrice: "13,599.00",
        image: "../Media/bodycare/IMG-20260407-WA0006.jpg",
        description: "Luxurious and intensely hydrating hand and body lotion formulated to leave your skin feeling incredibly soft and supple."
    },
    {
        id: 74,
        name: "Skynfuture SymWhite 377 Brightening Body Emulsion 200ml",
        price: 2231,
        oldPrice: "3,799.00",
        image: "../Media/bodycare/IMG-20260407-WA0004.jpg",
        description: "Advanced brightening body emulsion featuring SymWhite 377 to even skin tone and deliver a radiant body glow."
    },
    {
        id: 75,
        name: "N°1 DE CHANEL Revitalising Serum (100ml)",
        price: 6975,
        oldPrice: "7,599.00",
        image: "../Media/bodycare/Chanel n01.png",
        description: "A powerful, revitalizing serum from Chanel, designed to target the early signs of aging and maintain a youthful appearance."
    },
    {
        id: 76,
        name: "Warm Vanilla Sugar Body Wash",
        price: 2099,
        oldPrice: "2,699.00",
        image: "../Media/bodycare/warm vanilla sugar .jpg",
        description: "Lather up with the comforting and cozy scent of warm vanilla sugar. Leaves skin feeling fresh and beautifully fragranced."
    },
    {
        id: 77,
        name: "Neem Herbal Soap - Antifungal & Antibacterial Soap",
        price: 219,
        oldPrice: "222.00",
        image: "../Media/bodycare/soap2.webp",
        description: "A protective herbal soap infused with neem to naturally combat skin problems and provide antibacterial defense."
    },
    {
        id: 78,
        name: "PARIS-RIVIERA Shower Gel",
        price: 7468,
        oldPrice: "8,499.00",
        image: "../Media/bodycare/IMG-20260406-WA0012.jpg",
        description: "A premium shower gel that offers a luxurious lather and an elegant, long-lasting Paris-Riviera fragrance."
    },
    {
        id: 79,
        name: "Bath and Body Works A Thousand Wishes Body Wash",
        price: 1448,
        oldPrice: "2,099.00",
        image: "../Media/bodycare/IMG-20260406-WA0009.jpg",
        description: "Warm your heart a thousand times over with this festive blend of pink prosecco, sparkling quince, and crystal peonies."
    },
    {
        id: 80,
        name: "DIOR Sauvage Shower Gel (250ml)",
        price: 5800,
        oldPrice: "5,999.00",
        image: "../Media/bodycare/IMG-20260406-WA0005.jpg",
        description: "A fresh and woody shower gel infused with the signature Dior Sauvage scent for a revitalizing morning routine."
    },
    {
        id: 81,
        name: "Peppermint Essential Body Oil 120ml",
        price: 650,
        oldPrice: "719.00",
        image: "../Media/bodycare/IMG-20260405-WA0091.jpg",
        description: "Handcrafted moisturizing body oil featuring cooling peppermint. Perfect for intense dry skin relief and massage."
    },
    {
        id: 82,
        name: "mCaffeine 5% Niacinamide & Glutathione Body Lotion 300ml",
        price: 449,
        oldPrice: "599.00",
        image: "../Media/bodycare/m caffein.webp",
        description: "Brightening and de-tanning body lotion powered by Niacinamide and Glutathione, infused with a refreshing perfume scent."
    },
    {
        id: 83,
        name: "Sunset Waves Spa Bar - Handmade Cold-Processed Soap",
        price: 415,
        oldPrice: "420.00",
        image: "../Media/bodycare/soap1.webp",
        description: "A soothing, cold-processed handmade spa bar featuring a calming blend of lavender and rose."
    },
    {
        id: 84,
        name: "SunScoop Niacinamide Sunscreen | SPF 50+ PA++++ Face & Body",
        price: 646,
        oldPrice: "998.00",
        image: "../Media/bodycare/sunscreen.webp",
        description: "Lightweight, non-greasy sunscreen offering SPF 50+ protection for face and body with absolutely no white cast."
    },{
        id: 85,
        name: "Brillare Rose Royale Gift Box | Rose Body Wash, Body Scrub, Face Wash & Face Scrub",
        price: 1650,
        oldPrice: "2,599.00",
        image: "../Media/bodycare 1/Rose-Royale-combo.webp",
        description: "The ultimate pampering package. This pack of 4 includes everything you need for a luxurious, rose-infused full body and face care routine."
    },
    {
        id: 86,
        name: "Coco Chanel & Chanel N°5 Eau De Parfum For Women",
        price: 39889,
        oldPrice: "40,299.00",
        image: "../Media/perfume/Coco Chanel +N'5 chanel.jpeg",
        description: "An iconic luxury pairing. Experience the legendary timelessness of Chanel N°5 combined with the bold elegance of Coco Chanel."
    },
    {
        id: 87,
        name: "Forever Clean Matte Foundation - 3W - 30ml(3 shades)",
        price: 15342,
        oldPrice: "15,798.00",
        image: "../Media/makeup/Dior Faundation Combo (3 Shade).jpeg",
        description: "A professional trio of Dior's best-selling matte foundations. Perfect for makeup artists or finding your exact seasonal match."
    },
    {
        id: 88,
        name: "DIOR ADDICT LIPSTICK SET",
        price: 15899,
        oldPrice: "16,198.00",
        image: "../Media/makeup/Dior Lipstick Combo.webp",
        description: "A gorgeous, high-shine lipstick set featuring Dior's most sought-after shades in a beautiful collectible package."
    },
    {
        id: 89,
        name: "FACES CANADA Magneteyes Black Eyeliner & Dramatic Volumizing Black Mascara",
        price: 450,
        oldPrice: "599.00",
        image: "../Media/makeup/Facescanada Eye Liner+Mascara COmbo.jpg",
        description: "The perfect eye-defining duo. Get intense, dramatic lashes and bold, smudge-proof lines in one affordable kit."
    },
    {
        id: 90,
        name: "EETMA JVM Matrix Opti Care Smooth Straight Complete Hair Care Combo",
        price: 2150,
        oldPrice: "2,799.00",
        image: "../Media/haircare/Matrix shampoo, conditioner, and split-end serum.jpeg",
        description: "A complete salon-style hair care routine including shampoo, conditioner, mask, and split-end serum for ultra-smooth hair."
    },
    {
        id: 91,
        name: "Luxury Perfume Trio",
        price: 1699,
        oldPrice: "1,999.00",
        image: "../Media/perfume/Swiss beauty combo.jpg",
        description: "A curated trio of exquisite fragrances, offering distinct floral, woody, and fresh scent profiles for any occasion."
    },
    {
        id: 92,
        name: "Onion Black Seed Oil Shampoo & Conditioner Treatment Set with Oil",
        price: 9969,
        oldPrice: "10,199.00",
        image: "../Media/haircare/Wow hair oil+shampoo+conditioner.jpg",
        description: "The ultimate hair rescue kit. Stimulate growth and restore shine with this powerful Onion Black Seed 3-step routine."
    },
    {
        id: 93,
        name: "Maybelline Lasting Drama Gel Eyeliner & The Blushed Nudes Palette Set",
        price: 1055,
        oldPrice: "1,599.00",
        image: "../Media/makeup/Maybelline Eye Shadow+Kajal COmbo.webp",
        description: "Create endless soft and dramatic looks with Maybelline's versatile nude eyeshadow palette and long-lasting gel eyeliner."
    },
    {
        id: 94,
        name: "LILLYAMOR HD On-the-Go Makeup Blush Stick Set Of 3",
        price: 1948,
        oldPrice: "2,599.00",
        image: "../Media/makeup/Pixi Blush Combo.jpeg",
        description: "A trio of highly pigmented, blendable blush sticks (Fleur, Juicy, Ruby) for a natural, dewy flush wherever you go."
    },
    {
        id: 95,
        name: "GLOW CAPSULE COMBO ( TRIPLE C + SPOTLESS TXA )",
        price: 1399,
        oldPrice: "3,199.00",
        image: "../Media/makeup/Suroskie Face Creams Combo.jpeg",
        description: "A powerful skincare duo combining Vitamin C and spot-reducing treatments to completely transform dull, uneven skin."
    },
    {
        id: 96,
        name: "Gluta Boost Facewash Mix & Match Combo",
        price: 1649,
        oldPrice: "3,798.00",
        image: "../Media/makeup/Suroskie Facewash+Perfume.jpg",
        description: "An invigorating mix-and-match combo featuring a brightening face wash paired perfectly with an everyday fresh fragrance."
    },
    {
        id: 97,
        name: "Suroskie Sunscreen - SPF 30 Glow Up Juice + Tinted Sunscreen SPF 30",
        price: 1299,
        oldPrice: "2,599.00",
        image: "../Media/makeup/Suroskie Moisturizer+Toner.jpeg",
        description: "Double down on your sun protection with this glowing liquid SPF and tinted moisturizer combo."
    },
    {
        id: 98,
        name: "Everdiva Set Of 2 Non-Sticky Hydrating Lip Gloss",
        price: 313,
        oldPrice: "399.00",
        image: "../Media/Skincare/EverDIva LipGloss Combo.webp",
        description: "A beautiful duo of ultra-hydrating, non-sticky lip glosses in stunning Brown Sugar and Pink Candy shades."
    },
    {
        id: 99,
        name: "MARS Matte Box Set of 3 Lipsticks for Women",
        price: 948,
        oldPrice: "1,199.00",
        image: "../Media/Skincare/lipstick combo.webp",
        description: "A carefully curated box set of 3 highly pigmented, long-lasting matte lipsticks perfect for day-to-night wear."
    },
    {
        id: 100,
        name: "Dior Addict Lip Essentials Gift Set – Glow & Maximizer Trio",
        price: 3650,
        oldPrice: "5,999.00",
        image: "../Media/makeup/dior combo2.webp",
        description: "The ultimate lip-plumping and hydrating luxury gift set from Dior, featuring their world-famous glow formulations."
    }
];


document.addEventListener("DOMContentLoaded", function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const product = productsDatabase.find(item => item.id === productId);

    if (product) {
        document.getElementById('template-img').src = product.image;
        document.getElementById('template-title').innerText = product.name;
        document.getElementById('template-price').innerText = product.price;
        document.getElementById('template-old-price').innerText = product.oldPrice;
        document.getElementById('template-desc').innerText = product.description;

        let cartBtn = document.getElementById('template-cart-btn');
        let buyBtn = document.getElementById('template-buy-btn');
        let wishBtn = document.getElementById('template-wishlist-btn');

        if (cartBtn) {
            cartBtn.onclick = function(event) {
                event.preventDefault(); 
                let qty = parseInt(document.getElementById('qty').value) || 1;
                addToCart(this, product.name, product.price, product.image, qty);
            };
        }
        
        if (buyBtn) {
            buyBtn.onclick = function(event) {
                event.preventDefault();
                let qty = parseInt(document.getElementById('qty').value) || 1;
                orderNow(product.name, product.price, product.image, qty);
            };
        }

        if (wishBtn) {
            let newWishBtn = wishBtn.cloneNode(true);
            wishBtn.parentNode.replaceChild(newWishBtn, wishBtn);
            
            newWishBtn.addEventListener("click", function(event) {
                event.preventDefault(); 
                
                if (typeof addToWishlist === "function") {
                    addToWishlist(product.name, product.price, product.image);
                } else {
                    console.error("addToWishlist function is not found! Is Cart.js linked properly?");
                }
            });
        }

    } else {
        document.getElementById('template-title').innerText = "Product Not Found";
        document.getElementById('template-desc').innerText = "Sorry, we could not find the product you are looking for.";
    }
});