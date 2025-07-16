const allItems={
    "Fresh Cream Cakes":{
        "Vanilla Delight":280,
        "Choco Vanilla":300,
        "Pineapple":310,
        "Black Forest":310,
        "Butter Scotch":310,
        "Irish Coffee":310,
        "Chocolate Flakes":400,
        "White Forest":400,
        "Choco Orange":370,
        "Black Current":370,
        "Strawberry":370,
        "blueberry":400,
        "Choco Moco Flakes":370,
        "Rum 'O' Risin":370,
        "Choco Scotch Marble":370,
        "Litchi":370,
        "Kivi":370,
        "Mango":370,
        "Green Apple":370,
        "Choco Premium":370,
        "Butter Scotch With Nuts":370,
        "Cranberry":400,
        "Choco Butter Scotch":400,
        "Raspberry":400,
        "Coffee Almond":400,
        "Choco Mango":400,
        "Chocolate Truffle":450,
        "Choco Blueberry":400,
        "German Blachk Forest":400,
        "German White Forest":450,
        "Chocolate Raspberry":470,
        "Choco Almond":470,
        "Choco Chip":500,
        "Chocolate Oreo":550,
        "Choco Nuts":500,
        "choco Honey Almond":550,
        "White Truffle":550,
        "Red Velvet Cake":550,
        "Rasamalai Almond":600,
        "Oreo Red Velvet Cake":600,
        "Pinato Cake":1100,
        "Choco Kitkat Cake":1100,
        "Italian Cassara (1.5kg Above)":1500,
        "Chocolate Brownie Cake (1kg Above)":1100,
        "Blue Berry Cheese Cake (1kg Above)":1100,
        "Strawberry Cheese Cake(1kg Above)":1100,
        "Chocolate Cheese Cake(1kg Above)":1200,
        "Rainbow Cake (2kg Above)":1100
     },
     "Dessert":{
        "Chocolate Brownie With Ice Cream":90,
        "Walnut Brownie With Ice cream":100,
        "Molten Chocolate Lava With Ice Cream":120,
        "Sizzling Brownie":140
     },
     "Fries&Tries":{
        "French Fries 100 gms":100,
        "Masala Fries 100 gms":110,
        "Chicken Bites 100 gms":130,
        "Chicken Nuggets 5 pcs":130,
        "Chicken Fingers 5 pcs":130,
        "Fish Fingers 4 pcs":130,
        "Chicken Popons 12 pcs":130
     },
    "Burger":{
        "Veg Burger":100,
        "Chicken Burger":120,
        "Paneer Burger":140
    },
    "Fresh Sandwich":{
        "American Fresh Veg Sandwich":120,
        "American Fresh Chicken Sandwich":140
    },
    "Sandwich Grilled":{
        "Veg Cheese Sandwich":80,
        "Egg Cheese Sandwich":90,
        "Chicken Cheese Sandwich":100,
        "Paneer Cheese Sandwich":120
    },
    "Italian Panini Sandwich(R)":{
        "Veg Cheese Panini":180,
        "Chicken Cheese Panini":220,
        "Paneer Cheese Panini":230
    },
    "Veg Pizza (R)":{
        "Cheese Pizza":160,
        "Veg Pizza":180,
        "Corn & Cheese Pizza":190,
        "Hot & Spicy Veg Pizza":190,
        "Mushroom Pizza":200,
        "Paneer Pizza":220,
        "Veg Supreme Pizza":200,
        "Paneer Supreme Pizza":240
    },
    "Non Veg Pizza(R)":{
        "Chicken Pizza":220,
        "Chicken Tika Pizza":230,
        "Chicken Supreme Pizza":240,
        "Chilli Chicken Pizza":260
    },
    "Milk Shake":{
        "Vanilla":80,
        "Strawberry":100,
        "Pineapple":100,
        "Orange":100,
        "Mango":100,
        "Kivi":100,
        "Butter Scotch":100,
        "Black Current":100,
        "Litchi":100,
        "Green Apple":100,
        "Blueberry":110,
        "Chocolate":110,
        "Cranberry":110,
        "Raspberry0":110,
        "Choco Oreo":140,
        "Choco Brownie":150,
        "Choco Dairy Milk":150
    },
    "Doughnut":{
        "Chocolate Doughnut":40,
        "Choco Filled Doughnut":50
    },
    "Veg Puff":{
        "Veg Puff":25,
        "Veg Pizza Bun":30,
        "Veg Spring Roll":30,
        "Veg Supreme":30
        
    },
    "Pastry Cake":{
        "Vanilla":40,
        "Black Forest":50,
        "Butter Scotch":50,
        "Black Forest Pudding":50,
        "Red Velvet Pudding":50,
        "White Forest":60,
        "Chocolate Truffle":80
    },
    "Dessert Cake":{
        "Lava Cake":30,
        "Ala Pudding":30,
        "Chocolate Brownie":30,
        "Walnut Brownie":35,
        "Carrot Cake":50,
        "Jam Roll":50
    },
    "Tart":{
        "Chocolate Tart":40,
        "Almond Tart":50,
        "Apple Pie Tart":50
    },
    "Non Veg Puff":{
        "Egg Puff":30,
        "Chiclken Puff":30,
        "Chicken Roll":35,
        "Chicken Pizza Bun":35,
        "Chicken Danish":35
        
    },
    // Non-Veg combo offers
    "SandWich Fresh Combo":{
        "American Fresh Chicken Sandwich + French Fries + Brownie with Ice Cream":300
    },
    "Sandwich Grilled Combo":{
        "Egg Cheese Sandwich + French Fries + Brownie with Ice Cream":230,
        "Chicken Cheese Sandwich + French Fries + Brownie with Ice Cream":260
    },
    "Burger Combo":{
        "Chicken Burger + French Fries + Brownie with Ice Cream":280
        
    },
    "Fries & Ties Combo":{
        "chicken Nuggets 5pcs +French Fries":190,
        "Chicken Fingers 5pcs + French Fries":190
    },
    "Italian Panini Combo":{
        "Chicken Cheese Panini + Vanilla Milk Shake":320
    },
    "Non Veg Pizza Combo":{
        "Chicken Tikka Pizza + Vanilla Milk Shake":290,
        "Chicken Supreme Pizza + Vanilla Milk Shake":280,
        "Chilli Chicken Pizza + Vanilla Milk Shake":300,
        "Chicken Pizza + Vanilla Milk Shake":280
    },
    // Veg combo offers
    "SandWich Fresh Combo Veg":{
        "American Fresh Veg Sandwich + French Fries + Brownie with Ice Cream":280
    },
    "Sandwich Grilled Combo Veg":{
        "Veg Cheese Sandwich + French Fries + Brownie with Ice Cream":240,
        "Paneer Cheese Sandwich + French Fries + Brownie with Ice Cream":280
    },
    "Burger Combo Veg":{
        "Veg Burger + Butter Scotch Pastry + Vanilla Milk Shake":190,
        "Paneer Burger + Black Forest Pastry + Vanilla Milk Shake":230
    },
    "Italian Panini Combo Veg":{
        "Veg Cheese Panini + Vanilla Milk Shake":220,
        "Paneer Cheese Panini + Vanilla Milk Shake":260
    },
    "Veg Pizza Combo":{
        "Cheese Pizza + Vanilla Milk Shake":200,
        "Veg Pizza + Vanilla Milk Shake":220,
        "Corn & Cheese Pizza + Vanilla Milk Shake":230,
        "Hot & Spicy Veg Pizza + Vanilla Milk Shake":230,
        "Mushroom Pizza + Vanilla Milk Shake":290,
        "Paneer Pizza + Vanilla Milk Shake":260,
        "Veg Supreme Pizza + Vanilla Milk Shake":240,
        "Paneer Supreme Pizza + Vanilla Milk Shake":280
    }

}
