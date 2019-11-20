--DATABASE "dinner_generator"

CREATE TABLE "difficulty" (
	"id" SERIAL PRIMARY KEY,
	"difficulty" TEXT UNIQUE NOT NULL
);

CREATE TABLE "price" (
	"id" SERIAL PRIMARY KEY,
	"price" TEXT UNIQUE NOT NULL
);

CREATE TABLE "ingredient" (
	"id" SERIAL PRIMARY KEY,
	"ingredient" TEXT UNIQUE NOT NULL
);

CREATE TABLE "category" (
	"id" SERIAL PRIMARY KEY,
	"category" TEXT UNIQUE NOT NULL
);

CREATE TABLE "dish" (
	"id" SERIAL PRIMARY KEY,
	"dish" TEXT UNIQUE NOT NULL,
	"recipe_url" TEXT,
	"image" TEXT,
	"prep_time" TEXT,
	"servings" INT,
	"difficulty_id" INT REFERENCES "difficulty"("id") ON DELETE SET NULL
);

CREATE TABLE "restaurant" (
	"id" SERIAL PRIMARY KEY,
	"restaurant" TEXT UNIQUE NOT NULL,
	"menu_url" TEXT,
	"image" TEXT,
	"address" TEXT,
	"phone_number" TEXT,
	"delivers" BOOLEAN,
	"reservation" BOOLEAN,
	"price_id" INT REFERENCES "price" ("id") ON DELETE SET NULL
);

CREATE TABLE "dish_ingredient" (
	"id" SERIAL PRIMARY KEY,
	"dish_id" INT NOT NULL REFERENCES "dish"("id") ON DELETE CASCADE,
	"ingredient_id" INT NOT NULL REFERENCES "ingredient"("id") ON DELETE CASCADE,
	"quantity" INT
);

CREATE TABLE "dish_category" (
	"id" SERIAL PRIMARY KEY,
	"dish_id" INT NOT NULL REFERENCES "dish"("id") ON DELETE CASCADE,
	"category_id" INT NOT NULL REFERENCES "category"("id") ON DELETE CASCADE
);

CREATE TABLE "restaurant_category" (
	"id" SERIAL PRIMARY KEY,
	"restaurant_id" INT NOT NULL REFERENCES "restaurant"("id") ON DELETE CASCADE,
	"category_id" INT NOT NULL REFERENCES "category"("id") ON DELETE CASCADE
);

INSERT INTO "difficulty" ("difficulty") VALUES ('Very Easy'),('Easy'),('Moderate'),('Hard'),('Very Hard');

INSERT INTO "price" ("price") VALUES ('$'),('$$'),('$$$'),('$$$$');

INSERT INTO "ingredient" ("ingredient") VALUES ('chicken'),('steak'),('ground beef'),('salmon'),('white fish'),('turkey'),('shrimp'),('tuna'),('tofu'),('egg'),('tomato'),('cucumber'),('bell pepper'),('asparagus'),('broccoli'),('green bean'),('lettuce'),('carrot'),('beans');

INSERT INTO "category" ("category") VALUES ('African'),('American'),('Chinese'),('French'),('Greek'),('Irish'),('Indian'),('Italian'),('Japanese'),('Mexican'),('Middle Eastern'),('Thai'),('Breakfast'),('Lunch'),('Dinner'),('Coffee'),('Dessert'),('Bar'),('Barbecue'),('Burgers'),('Fast Food'),('Pizza'),('Seafood'),('Steak'),('Sushi'),('Vegetarian-Friendly'),('Vegan-Friendly'),('AIP-Friendly'),('Paleo-Friendly'),('Kosher'),('Allergy-Free Menu'),('Gender-Inclusive Bathrooms'),('Mobility Accessible'),('On-Site Parking');