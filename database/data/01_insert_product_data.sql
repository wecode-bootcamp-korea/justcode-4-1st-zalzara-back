-- insert categories data
INSERT INTO categories(name)
VALUES
('러그'),
('가구')
;


-- insert products data
INSERT INTO products(name, category_id, description, material_id, origin_id, uid)
VALUES
('패치 디테일 주트 러그', 1, '주트 패치워크 소재의 내추럴 컬러 러그.', 1, 1, '5358/029'),
('빈티지 러그', 1, '브라운 톤 빈티지 스타일 러그..', 2, 2, '9964/029'),
('웨이브 울 러그', 1, '웨이브 텍스처 마감 울 소재 러그.', 3, 1, '2318/029'),
('플렉트 러그', 1, '플렉트 마감 주트와 면 소재가 매치된 러그.', 1, 1, '9720/029'),
('비스코스&바나나 리브즈 러그', 1, '비스코스와 바나나 잎 소재의 내추럴 컬러 러그.', 2, 1, '3316/029')
;


-- insert materials data
INSERT INTO materials(name)
VALUES
('황마'),
('비스코스'),
('모직')
;


-- insert origins data
INSERT INTO origins(name)
VALUES
('인도'),
('벨기에')
;


-- insert sizes data
INSERT INTO sizes(size)
VALUES
('60 x 120 cm'),
('150 x 200 cm'),
('160 x 230 cm'),
('200 x 300 cm'),
('300 x 400 cm');



-- insert images data
INSERT INTO images (image_url, product_id)
VALUES
('https://media.vlpt.us/images/sseul22/post/f11c3316-f0a9-490f-a0f1-c676a7d7289c/FetchDetailRug.jpg', 1),
('https://media.vlpt.us/images/sseul22/post/60b54a36-da2f-434f-aec2-6f4da3574ead/VintageRug.jpg', 2),
('https://media.vlpt.us/images/sseul22/post/ef2bd4ae-ac25-4f17-8468-49e201ba0268/WaveWoolRug.jpg', 3),
('https://media.vlpt.us/images/sseul22/post/2cf97b75-dc13-4b3b-9157-4f3b22ea46f4/FlectRug.jpg', 4),
('https://media.vlpt.us/images/sseul22/post/761f2fb3-6341-47e1-829c-8fa7b6909149/Viscose&BananaRug.jpg', 5)
;


-- insert product_size data
INSERT INTO product_size(product_id, price, size_id)
VALUES
(1,699000,3),
(2,239000,3),
(2,319000,4),
(3,339000,3),
(3,699000,4),
(3,899000,5),
(4,239000,3),
(4,319000,4),
(5,69000,1),
(5,219000,2),
(5,359000,4)
;