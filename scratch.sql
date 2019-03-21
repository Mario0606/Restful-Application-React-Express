CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    amount NUMERIC,
    price NUMERIC,
    id_providers INT,
    id_categories INT
);

CREATE TABLE providers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(2)
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

ALTER TABLE products ADD FOREIGN KEY (id_providers) REFERENCES providers(id);
ALTER TABLE products ADD FOREIGN KEY (id_categories) REFERENCES categories(id);

INSERT INTO 
    providers
VALUES
    (1,	'Ajax SA',	'Rua Presidente Castelo Branco',	'Porto Alegre',	'RS'),
    (2,	'Sansul SA',	'Av Brasil',	'Rio de Janeiro', 	'RJ'),
    (3,	'South Chairs',	'Rua do Moinho',	'Santa Maria',	'RS'),
    (4,	'Elon Electro',	'Rua Apolo',	'São Paulo', 	'SP'),
    (5,	'Mike Electro',	'Rua Pedro da Cunha',	'Curitiba',	'PR');

INSERT INTO
    categories
VALUES
    (1,	'Super Luxury'),
    (2,	'Imported'),
    (3,	'Tech'),
    (4,	'Vintage'),
    (5,	'Supreme');

INSERT INTO
    products (name, amount, price, id_providers, id_categories)
VALUES
    ('Blue Chair', 30, 300.00, 5, 5),
    ('Red Chair', 50, 2150.00, 2, 1),
    ('Disney Wardrobe', 400, 829.50, 4, 1),
    ('Blue Toaster', 20, 9.90, 3, 1),
    ('TV', 30, 3000.25, 2, 2);

SELECT
    products.name, providers.name, categories.name
FROM
    products
INNER JOIN providers ON products.id_providers = providers.id 
INNER JOIN categories ON products.id_categories = categories.id 
WHERE
    categories.name = 'Imported' AND
    providers.name = 'Sansul SA';