
PRINT 'Iniciando inserción de datos en QhatuPERU...';

USE QhatuPERU;
GO

-- Limpieza de TODAS las tablas (Esto reinicia contadores IDENTITY)
TRUNCATE TABLE GUIA_DETALLE;
TRUNCATE TABLE ORDEN_DETALLE;
TRUNCATE TABLE GUIA_ENVIO;
TRUNCATE TABLE ORDEN_COMPRA;
TRUNCATE TABLE ARTICULO;
TRUNCATE TABLE LINEA;
TRUNCATE TABLE PROVEEDOR;
TRUNCATE TABLE TIENDA;
TRUNCATE TABLE TRANSPORTISTA;
GO

----------------------------------------------------------------------
-- 1. Insertar 50 Datos en TIENDA
-- CodTienda: INT, Direccion: VARCHAR(60), Distrito: VARCHAR(20), 
-- Telefono: VARCHAR(15), Fax: VARCHAR(15)
----------------------------------------------------------------------
INSERT INTO TIENDA (CodTienda, Direccion, Distrito, Telefono, Fax) VALUES
(101, 'Av. Primavera 123', 'Surco', '987123456', '01-4321111'),
(102, 'Jr. La Merced 456', 'Cercado', '998765432', '01-2525252'),
(103, 'Calle San Martín 789', 'Miraflores', '910293847', NULL),
(104, 'Av. El Sol 101', 'San Isidro', '920394857', '01-5050500'),
(105, 'Jr. Puno 202', 'Cusco', '930405968', NULL),
(106, 'Calle Arequipa 303', 'Trujillo', '940516079', '044-123456'),
(107, 'Av. Perú 404', 'Lince', '950627180', NULL),
(108, 'Jr. Callao 505', 'Callao', '960738291', '01-7070707'),
(109, 'Calle Tacna 606', 'Ica', '970849302', NULL),
(110, 'Av. Lima Norte 707', 'Comas', '980950413', '01-8080808'),
(111, 'Av. Brasil 100', 'San Borja', '987654321', '01-2233445'),
(112, 'Jr. Ucayali 200', 'Victoria', '988765432', NULL),
(113, 'Calle Junín 300', 'Chorrillos', '989876543', '01-5544332'),
(114, 'Av. Aviación 400', 'Barranco', '990987654', NULL),
(115, 'Jr. Morales D 500', 'Rímac', '991098765', '01-6655443'),
(116, 'Calle Bolognesi 600', 'Breña', '992109876', NULL),
(117, 'Av. Paseo Rep 700', 'Pueblo Lib', '993210987', '01-7766554'),
(118, 'Jr. Zepita 800', 'Independ', '994321098', NULL),
(119, 'Calle Amazonas 900', 'Ate', '995432109', '01-8877665'),
(120, 'Av. Arenales 1000', 'Jesús Mª', '996543210', NULL),
(121, 'Jr. Sáenz P 1100', 'Magdalena', '997654321', '01-9988776'),
(122, 'Calle S. Peña 1200', 'Ancón', '998765432', NULL),
(123, 'Av. Javier P 1300', 'La Molina', '999876543', '01-2211223'),
(124, 'Jr. Bolognesi 1400', 'Lurín', '910111111', NULL),
(125, 'Calle Paz S 1500', 'Sta. Anita', '911222222', '01-3322334'),
(126, 'Av. Angamos 1600', 'Miraflor 2', '912333333', NULL),
(127, 'Jr. Schell 1700', 'S. Isidro 2', '913444444', '01-4433445'),
(128, 'Calle Colón 1800', 'Surco 2', '914555555', NULL),
(129, 'Av. Conquistad 1900', 'S. Borja 2', '915666666', '01-5544556'),
(130, 'Jr. Camaná 2000', 'Lima Cent', '916777777', NULL),
(131, 'Calle Huancav 2100', 'Cercado 2', '917888888', '01-6655667'),
(132, 'Av. N. Ayllón 2200', 'V. Salvador', '918999999', NULL),
(133, 'Jr. Acobamba 2300', 'SJ Miraf', '919000000', '01-7766778'),
(134, 'Calle Guadalu 2400', 'S. Isid 3', '920111111', NULL),
(135, 'Av. Paseo R 2500', 'Surquillo', '921222222', '01-8877889'),
(136, 'Jr. A. Ugarte 2600', 'El Rímac', '922333333', NULL),
(137, 'Calle Union 2700', 'Ch. Color', '923444444', '01-9988990'),
(138, 'Av. Hipólito 2800', 'Rímac 2', '924555555', NULL),
(139, 'Jr. Quilca 2900', 'Cercado 3', '925666666', '01-2200112'),
(140, 'Calle Damaso 3000', 'Lince 2', '926777777', NULL),
(141, 'Av. Abancay 3100', 'Breña 2', '927888888', '01-3311223'),
(142, 'Jr. G. Córdova 3200', 'Ancash', '928999999', NULL),
(143, 'Calle P. Hoz 3300', 'P. Libre 2', '929000000', '01-4422334'),
(144, 'Av. Garcilaso 3400', 'Chaclacay', '930111111', NULL),
(145, 'Jr. Cusco 3500', 'Ate 2', '931222222', '01-5533445'),
(146, 'Calle Arenas 3600', 'San Bart', '932333333', NULL),
(147, 'Av. Circunv 3700', 'Pucusana', '933444444', '01-6644556'),
(148, 'Jr. Real F 3800', 'Callao 2', '934555555', NULL),
(149, 'Calle S. Peña 3900', 'Bellavista', '935666666', '01-7755667'),
(150, 'Av. Colón 4000', 'La Perla', '936777777', NULL);
GO

SELECT * FROM TIENDA;

----------------------------------------------------------------------
-- 2. Insertar 50 Datos en LINEA
-- CodLinea: IDENTITY, NomLinea: VARCHAR(20), Descripcion: VARCHAR(40)
-- Restricción UNIQUE en NomLinea
----------------------------------------------------------------------
INSERT INTO LINEA (NomLinea, Descripcion) VALUES
('Computadoras', 'PCs Desktop para oficina'),
('Laptops', 'Computadoras portátiles'),
('Tablets', 'Tablets y dispositivos'),
('Smartphones', 'Teléfonos inteligentes'),
('Monitores', 'Pantallas de display'),
('Teclados', 'Periféricos entrada'),
('Auriculares', 'Audio y accesorios'),
('Webcams', 'Cámaras video conferencia'),
('Impresoras', 'Equipos de impresión'),
('Escáners', 'Dispositivos escaneo'),
('Cargadores', 'Cargadores y cables'),
('Power Banks', 'Baterías externas'),
('Almacenamiento', 'SSD y discos duros'),
('Memorias USB', 'Unidades flash'),
('Tarjetas Mem', 'MicroSD y SD'),
('Monitores Dig', 'Pantallas digitales'),
('Refrigeración', 'Coolers y ventiladores'),
('Fuentes Poder', 'PSU para PC'),
('Cables Conectores', 'Cables varios'),
('Fundas Protección', 'Estuches laptops'),
('Mochilas Tech', 'Mochilas especiales'),
('Stands Soportes', 'Soportes monitor'),
('Docking Station', 'Estaciones puerto'),
('Adaptadores USB', 'Hubs multipuerto'),
('Bases Refriger', 'Coolers laptops'),
('Mouse Pads', 'Alfombrillas ratón'),
('Protect Pantalla', 'Cristal templado'),
('Lentes Ópticos', 'Lentes anti fatiga'),
('Sillas Gamer', 'Sillas ergonómicas'),
('Escritorios Game', 'Mesas gaming'),
('Controladores', 'Joysticks wireless'),
('Headsets Gaming', 'Auriculares juegos'),
('Ratones Gaming', 'Mouses precisión'),
('Teclados Mecán', 'Keyboards switches'),
('Alfombrillas XL', 'Pads grandes'),
('Monit Gaming', 'Pantalas 144Hz'),
('Tarjet Gráficas', 'GPUs gaming'),
('Procesadores', 'CPUs última gen'),
('Memoria RAM', 'Módulos DDR5'),
('Placas Madre', 'Motherboards ROG'),
('Casos Gaming', 'PC cases gaming'),
('Iluminación RGB', 'Luces LED RGB'),
('Ventiladores RGB', 'Fans RGB'),
('Tubos Sleeving', 'Cables recub'),
('Pasta Térmica', 'Thermal paste'),
('Limpiadores', 'Aire comprimido'),
('Protec Antiestát', 'Pulseras antiestá'),
('Herramientas', 'Herramientas taller'),
('Manuales Garantía', 'Documentación'),
('Servicios Técnicos', 'Soporte técnico');
GO

SELECT * FROM LINEA;

----------------------------------------------------------------------
-- 3. Insertar 50 Datos en PROVEEDOR
-- CodProveedor: IDENTITY, NomProveedor: VARCHAR(40), Representante: VARCHAR(30)
-- Direccion: VARCHAR(60), Ciudad: VARCHAR(15), Departamento: VARCHAR(15)
-- CodigoPostal: VARCHAR(15), Telefono: VARCHAR(15), Fax: VARCHAR(15)
----------------------------------------------------------------------
INSERT INTO PROVEEDOR (NomProveedor, Representante, Direccion, Ciudad, Departamento, CodigoPostal, Telefono, Fax) VALUES
('Intel LatAm', 'Juan Perez', 'Av. Intel 100', 'Lima', 'Lima', 'L01', '4567890', NULL),
('AMD Distribuidora', 'Ana Lopez', 'Calle Processor 200', 'Arequipa', 'Arequipa', 'A02', '2345678', '054-99887'),
('NVIDIA Perú', 'Carlos Vidal', 'Jr. GPU 300', 'Cusco', 'Cusco', 'C03', '6789012', NULL),
('HP Inc Perú', 'Elena Rios', 'Av. Tech 400', 'Lima', 'Lima', 'L04', '991122334', '01-445566'),
('Dell Technologies', 'Jorge Soto', 'Calle Computers', 'Arequipa', 'Arequipa', 'A05', '981234567', NULL),
('Lenovo Distribuidora', 'Luisa Paz', 'Jr. Laptops 600', 'Ica', 'Ica', 'I06', '971345678', NULL),
('Apple Distribuidor', 'Miguel Grau', 'Av. Innovation 700', 'Lima', 'Lima', 'L07', '961456789', '01-887766'),
('Asus LatAm', 'Sofia Ramos', 'Calle Components', 'Trujillo', 'La Lib', 'T08', '951567890', NULL),
('MSI Distribution', 'Daniel Vega', 'Av. Gaming 900', 'Lima', 'Lima', 'L09', '941678901', '01-997877'),
('Gigabyte Perú', 'Rocio Luna', 'Jr. Hardware 1000', 'Puno', 'Puno', 'P10', '931789012', NULL),
('Samsung Electronics', 'Pedro Ruiz', 'Av. Mobile 1100', 'Lima', 'Lima', 'L11', '920890123', '01-112233'),
('LG Electronics', 'Maria Gomez', 'Calle Displays', 'Arequipa', 'Arequipa', 'A12', '910901234', NULL),
('Sony LatAm', 'Fernando Torres', 'Jr. Entertainment', 'Cusco', 'Cusco', 'C13', '901012345', '054-234'),
('Panasonic Perú', 'Carmen Silva', 'Av. Electronics', 'Trujillo', 'La Lib', 'T14', '891123456', NULL),
('Canon Distribuidora', 'Roberto Flores', 'Calle Imaging', 'Ica', 'Ica', 'I15', '881234567', '056-345'),
('Epson Perú', 'Angelica Moreno', 'Jr. Printers 1600', 'Lima', 'Lima', 'L16', '871345678', NULL),
('Corsair Gaming', 'Luis Mendez', 'Av. Peripherals', 'Lima', 'Lima', 'L17', '861456789', '01-567890'),
('Logitech LatAm', 'Roxana Diaz', 'Calle Wireless', 'Arequipa', 'Arequipa', 'A18', '851567890', NULL),
('Razer Inc Dist', 'Gabriel Herrera', 'Jr. Gaming Gear', 'Lima', 'Lima', 'L19', '841678901', '01-678901'),
('SteelSeries Perú', 'Beatriz Vargas', 'Av. Pro Gaming', 'Cusco', 'Cusco', 'C20', '831789012', NULL),
('Kingston Technol', 'Armando Paz', 'Calle Memory 2100', 'Lima', 'Lima', 'L21', '821890123', '01-789012'),
('Crucial Distribuidor', 'Ilda Castro', 'Jr. Storage 2200', 'Arequipa', 'Arequipa', 'A22', '811901234', NULL),
('Western Digital', 'Julio Reyes', 'Av. Hard Drives', 'Trujillo', 'La Lib', 'T23', '801012345', '044-890'),
('Seagate Technol', 'Veronica Soto', 'Calle Data 2400', 'Ica', 'Ica', 'I24', '791123456', NULL),
('Toshiba Electronics', 'Enrique Gomez', 'Jr. Devices', 'Lima', 'Lima', 'L25', '781234567', '01-901234'),
('Transcend Memory', 'Doris Chavez', 'Av. Cards 2600', 'Arequipa', 'Arequipa', 'A26', '771345678', NULL),
('SanDisk Distribuidor', 'Rafael Ayala', 'Calle Flash', 'Cusco', 'Cusco', 'C27', '761456789', '066-012'),
('Qualcomm Perú', 'Silvia Rojas', 'Jr. Processors', 'Lima', 'Lima', 'L28', '751567890', NULL),
('Broadcom Distrib', 'Hector Quispe', 'Av. Networking', 'Trujillo', 'La Lib', 'T29', '741678901', '044-123'),
('Realtek LatAm', 'Nancy Valenzuela', 'Calle Chips 3000', 'Ica', 'Ica', 'I30', '731789012', NULL),
('Mediatek Distribui', 'Oscar Medina', 'Jr. Mobile Chips', 'Lima', 'Lima', 'L31', '721890123', '01-234567'),
('SK Hynix Perú', 'Claudia Romero', 'Av. Semiconduct', 'Arequipa', 'Arequipa', 'A32', '711901234', NULL),
('Micron Technology', 'Teodoro Quiroga', 'Calle DRAM 3300', 'Cusco', 'Cusco', 'C33', '701012345', '066-345'),
('Netgear Distribuidor', 'Victoria Herrera', 'Jr. Routers 3400', 'Lima', 'Lima', 'L34', '691123456', NULL),
('TP-Link Perú', 'Wilfredo Arias', 'Av. Network Dev', 'Trujillo', 'La Lib', 'T35', '681234567', '044-456'),
('Ubiquiti Networks', 'Ximena Lopez', 'Calle Wireless', 'Ica', 'Ica', 'I36', '671345678', NULL),
('D-Link Distribuidor', 'Yolanda Solis', 'Jr. Connectivity', 'Lima', 'Lima', 'L37', '661456789', '01-567890'),
('Linksys LatAm', 'Zaida Fuentes', 'Av. Networking', 'Arequipa', 'Arequipa', 'A38', '651567890', NULL),
('ASUS ROG Gaming', 'Adrian Silva', 'Calle Gaming', 'Cusco', 'Cusco', 'C39', '641678901', '066-678'),
('Acer Distribuidor', 'Blanca Ortiz', 'Jr. Computers', 'Lima', 'Lima', 'L40', '631789012', NULL),
('TUF Gaming Dist', 'Ciro Pacheco', 'Av. Pro Gaming', 'Trujillo', 'La Lib', 'T41', '621890123', '044-789'),
('Alienware Distrib', 'Daisy Molina', 'Calle High End', 'Ica', 'Ica', 'I42', '611901234', NULL),
('ROG Strix Perú', 'Ernesto Ventura', 'Jr. Ultimate Game', 'Lima', 'Lima', 'L43', '601012345', '01-890123'),
('Predator Gaming', 'Frida Acosta', 'Av. Gaming Sys', 'Arequipa', 'Arequipa', 'A44', '591123456', NULL),
('IdeaPad Pro', 'Gilberto Nunez', 'Calle Portátiles', 'Cusco', 'Cusco', 'C45', '581234567', '066-901'),
('ThinkPad Distrib', 'Helena Robles', 'Jr. Business', 'Lima', 'Lima', 'L46', '571345678', NULL),
('XPS Dell Perú', 'Ignacio Santos', 'Av. Premium Lap', 'Trujillo', 'La Lib', 'T47', '561456789', '044-012'),
('Pavilion HP', 'Jacqueline Navarro', 'Calle Consumer', 'Ica', 'Ica', 'I48', '551567890', NULL),
('Spectre HP Distrib', 'Kelvin Vargas', 'Jr. Ultrabook', 'Lima', 'Lima', 'L49', '541678901', '01-123456'),
('Envy Collection', 'Lorena Campos', 'Av. Elegant Tech', 'Arequipa', 'Arequipa', 'A50', '531789012', NULL);
GO

SELECT * FROM PROVEEDOR;

----------------------------------------------------------------------
-- 4. Insertar 50 Datos en TRANSPORTISTA
-- CodTransportista: INT (PRIMARY KEY), NomTransportista: VARCHAR(30)
-- Direccion: VARCHAR(60), Telefono: VARCHAR(15)
----------------------------------------------------------------------
INSERT INTO TRANSPORTISTA (CodTransportista, NomTransportista, Direccion, Telefono) VALUES
(501, 'TechLog Express', 'Av. Central 500', '900111222'),
(502, 'ElectroRutas SAC', 'Jr. Sur 800', '900333444'),
(503, 'FastTech Delivery', 'Calle Norte 100', '900555666'),
(504, 'DeviceXpress', 'Av. Este 200', '900777888'),
(505, 'TechTransport A', 'Jr. Oeste 300', '900999000'),
(506, 'CompuCourier', 'Calle Mar 400', '910111222'),
(507, 'Hardware Express', 'Av. Tierra 500', '910333444'),
(508, 'GadgetRutas SRL', 'Jr. Selva 600', '910555666'),
(509, 'ElectroDelivery', 'Calle Ciudad 700', '910777888'),
(510, 'TechLogística', 'Av. Montaña 800', '910999000'),
(511, 'ComputerShip', 'Jr. Techland 900', '911111000'),
(512, 'DigitalTransit', 'Calle Innovation', '911222111'),
(513, 'ServerXpress', 'Av. Network 1100', '911333222'),
(514, 'DataFlow Log', 'Jr. Cloud 1200', '911444333'),
(515, 'CyberTransport', 'Calle Digital 1300', '911555444'),
(516, 'TechCarrier P', 'Av. Virtual 1400', '911666555'),
(517, 'ElectroCart', 'Jr. Electronic 1500', '911777666'),
(518, 'GadgetShip G', 'Calle Global 1600', '911888777'),
(519, 'DeviceLogistics', 'Av. Smart 1700', '911999888'),
(520, 'TechFreight S', 'Jr. Solutions 1800', '912000999'),
(521, 'RapidPC Del', 'Calle Rapid 1900', '912111000'),
(522, 'ElectroSpeed', 'Av. Speed 2000', '912222111'),
(523, 'GearTransport', 'Jr. Gear 2100', '912333222'),
(524, 'ComponentsXpr', 'Calle Components', '912444333'),
(525, 'PartsDelivery', 'Av. Parts 2300', '912555444'),
(526, 'TechDistrib', 'Jr. Distribution', '912666555'),
(527, 'WarehousingT', 'Calle Warehouse', '912777666'),
(528, 'InventoryXpr', 'Av. Inventory 2600', '912888777'),
(529, 'StockDelivery', 'Jr. Stock 2700', '912999888'),
(530, 'SupplychainT', 'Calle Supply 2800', '913000999'),
(531, 'TradeRoute E', 'Av. Trade 2900', '913111000'),
(532, 'CommerceTechL', 'Jr. Commerce 3000', '913222111'),
(533, 'MarketTransp', 'Calle Market 3100', '913333222'),
(534, 'SalesDelivery', 'Av. Sales 3200', '913444333'),
(535, 'RetailXpress', 'Jr. Retail 3300', '913555444'),
(536, 'StoreLogistics', 'Calle Store 3400', '913666555'),
(537, 'ShopTransport', 'Av. Shop 3500', '913777666'),
(538, 'MallDelivery', 'Jr. Mall 3600', '913888777'),
(539, 'CenterXpress', 'Calle Center 3700', '913999888'),
(540, 'PlazaTech T', 'Av. Plaza 3800', '914000999'),
(541, 'DirectXpress', 'Jr. Direct 3900', '914111000'),
(542, 'FastTrack D', 'Calle Fast 4000', '914222111'),
(543, 'SpeedWay Log', 'Av. Speedway 4100', '914333222'),
(544, 'QuickDelivery', 'Jr. Quick 4200', '914444333'),
(545, 'InstantXpress', 'Calle Instant 4300', '914555444'),
(546, 'RealTime T', 'Av. RealTime 4400', '914666555'),
(547, 'OnTimeDeliv', 'Jr. OnTime 4500', '914777666'),
(548, 'PunctualXpr', 'Calle Punctual 4600', '914888777'),
(549, 'ReliableLog', 'Av. Reliable 4700', '914999888'),
(550, 'TrustTransp', 'Jr. Trust 4800', '915000999');
GO

SELECT * FROM TRANSPORTISTA;

----------------------------------------------------------------------
-- 5. Insertar 50 Datos en ORDEN_COMPRA
-- NumOrden: INT (PRIMARY KEY), FechaOrden: DATETIME, FechaIngreso: DATETIME
----------------------------------------------------------------------
INSERT INTO ORDEN_COMPRA (NumOrden, FechaOrden, FechaIngreso) VALUES
(2025001, '2025-09-01', '2025-09-05'),
(2025002, '2025-09-10', NULL),
(2025003, '2025-09-15', '2025-09-18'),
(2025004, '2025-09-20', '2025-09-25'),
(2025005, '2025-10-01', NULL),
(2025006, '2025-10-05', '2025-10-06'),
(2025007, '2025-10-10', NULL),
(2025008, '2025-10-15', '2025-10-25'),
(2025009, '2025-10-20', '2025-10-22'),
(2025010, '2025-10-25', NULL),
(2025011, '2025-11-01', '2025-11-03'),
(2025012, '2025-11-05', NULL),
(2025013, '2025-11-10', '2025-11-12'),
(2025014, '2025-11-15', '2025-11-18'),
(2025015, '2025-11-20', NULL),
(2025016, '2025-11-25', '2025-11-26'),
(2025017, '2025-12-01', NULL),
(2025018, '2025-12-05', '2025-12-08'),
(2025019, '2025-12-08', '2025-12-09'),
(2025020, '2025-12-10', NULL),
(2025021, '2025-09-02', '2025-09-06'),
(2025022, '2025-09-12', NULL),
(2025023, '2025-09-17', '2025-09-20'),
(2025024, '2025-09-22', '2025-09-27'),
(2025025, '2025-10-02', NULL),
(2025026, '2025-10-07', '2025-10-08'),
(2025027, '2025-10-12', NULL),
(2025028, '2025-10-17', '2025-10-27'),
(2025029, '2025-10-22', '2025-10-24'),
(2025030, '2025-10-27', NULL),
(2025031, '2025-11-02', '2025-11-04'),
(2025032, '2025-11-06', NULL),
(2025033, '2025-11-11', '2025-11-13'),
(2025034, '2025-11-16', '2025-11-19'),
(2025035, '2025-11-21', NULL),
(2025036, '2025-11-26', '2025-11-27'),
(2025037, '2025-12-02', NULL),
(2025038, '2025-12-06', '2025-12-09'),
(2025039, '2025-12-09', '2025-12-10'),
(2025040, '2025-12-11', NULL),
(2025041, '2025-09-03', '2025-09-07'),
(2025042, '2025-09-13', NULL),
(2025043, '2025-09-18', '2025-09-21'),
(2025044, '2025-09-23', '2025-09-28'),
(2025045, '2025-10-03', NULL),
(2025046, '2025-10-08', '2025-10-09'),
(2025047, '2025-10-13', NULL),
(2025048, '2025-10-18', '2025-10-28'),
(2025049, '2025-10-23', '2025-10-25'),
(2025050, '2025-10-28', NULL);
GO

SELECT * FROM ORDEN_COMPRA;

----------------------------------------------------------------------
-- 6. Insertar 50 Datos en ARTICULO
-- CodArticulo: IDENTITY, CodLinea: INT FK, CodProveedor: INT FK
-- DescripcionArticulo: VARCHAR(40), Presentacion: VARCHAR(30)
-- PrecioProveedor: MONEY (>= 0), StockActual: SMALLINT, StockMinimo: SMALLINT
-- Descontinuado: BIT DEFAULT 0
----------------------------------------------------------------------
INSERT INTO ARTICULO (CodLinea, CodProveedor, DescripcionArticulo, Presentacion, PrecioProveedor, StockActual, StockMinimo, Descontinuado) VALUES
(1, 1, 'Desktop i7 16GB', 'Caja', 1200.00, 15, 5, 0),
(2, 2, 'Laptop i5 8GB 256GB', 'Caja', 850.00, 20, 8, 0),
(3, 3, 'iPad Air 64GB', 'Caja', 650.00, 12, 4, 0),
(4, 4, 'Samsung Galaxy S23', 'Caja', 750.00, 25, 10, 0),
(5, 5, 'Monitor LG 27 4K', 'Caja', 400.00, 18, 6, 0),
(6, 6, 'Teclado Mecánico RGB', 'Caja', 150.00, 45, 15, 0),
(7, 7, 'AirPods Pro', 'Caja', 280.00, 30, 10, 0),
(8, 8, 'Logitech C920 Webcam', 'Caja', 95.00, 35, 12, 0),
(9, 9, 'Impresora HP LaserJet', 'Caja', 350.00, 8, 3, 0),
(10, 10, 'Scanner ScanJet Pro', 'Caja', 200.00, 12, 4, 0),
(11, 1, 'Cable HDMI 2.1', 'Blister', 25.00, 100, 30, 0),
(12, 2, 'Cargador Rápido 65W', 'Caja', 45.00, 80, 25, 0),
(13, 3, 'Power Bank 25000mAh', 'Caja', 65.00, 55, 18, 0),
(14, 4, 'Disco Duro Externo 1TB', 'Caja', 85.00, 42, 14, 0),
(15, 5, 'Tarjeta MicroSD 256GB', 'Blister', 35.00, 120, 40, 0),
(16, 6, 'Monitor Digital 55', 'Caja', 850.00, 5, 2, 0),
(17, 7, 'Ventilador Noctua', 'Caja', 50.00, 60, 20, 0),
(18, 8, 'Fuente EVGA 850W', 'Caja', 180.00, 22, 8, 0),
(19, 9, 'Cable Cat6 20mts', 'Carrete', 30.00, 75, 25, 0),
(20, 10, 'Funda Laptop 15.6', 'Unidad', 35.00, 90, 30, 0),
(21, 1, 'Mochila Gaming', 'Unidad', 75.00, 40, 12, 0),
(22, 2, 'Stand Monitor Doble', 'Caja', 120.00, 18, 6, 0),
(23, 3, 'Docking Station USB-C', 'Caja', 250.00, 25, 8, 0),
(24, 4, 'Hub USB 7 Puertos', 'Caja', 45.00, 65, 20, 0),
(25, 5, 'Base Refriger Laptop', 'Caja', 55.00, 35, 12, 0),
(26, 6, 'Mouse Pad Grande RGB', 'Unidad', 40.00, 80, 25, 0),
(27, 7, 'Protector Pantalla', 'Blister', 20.00, 100, 35, 0),
(28, 8, 'Lentes Gaming', 'Caja', 95.00, 28, 10, 0),
(29, 9, 'Silla Gamer Ergon', 'Caja', 450.00, 10, 3, 0),
(30, 10, 'Escritorio Gaming', 'Caja', 380.00, 8, 2, 0),
(31, 1, 'Controlador Xbox', 'Caja', 65.00, 55, 18, 0),
(32, 2, 'Headset Gaming Inal', 'Caja', 180.00, 32, 11, 0),
(33, 3, 'Ratón Gaming Inal', 'Caja', 75.00, 48, 15, 0),
(34, 4, 'Teclado Mecánico G', 'Caja', 200.00, 30, 10, 0),
(35, 5, 'Alfombrilla Gaming', 'Unidad', 50.00, 70, 22, 0),
(36, 6, 'Monitor 144Hz 27', 'Caja', 380.00, 14, 5, 0),
(37, 7, 'Tarjeta RTX 4060', 'Caja', 320.00, 12, 4, 0),
(38, 8, 'Procesador Ryzen 7', 'Caja', 380.00, 10, 3, 0),
(39, 9, 'Memoria RAM 32GB', 'Caja', 160.00, 20, 6, 0),
(40, 10, 'Placa Madre ASUS ROG', 'Caja', 280.00, 8, 2, 0),
(41, 1, 'Case Gaming Tempered', 'Caja', 180.00, 18, 6, 0),
(42, 2, 'Iluminación RGB LED', 'Caja', 60.00, 75, 25, 0),
(43, 3, 'Ventilador RGB Pack', 'Caja', 90.00, 50, 16, 0),
(44, 4, 'Tubos Sleeving Color', 'Paquete', 25.00, 110, 35, 0),
(45, 5, 'Pasta Térmica Prem', 'Tubo', 20.00, 95, 30, 0),
(46, 6, 'Aire Comprimido 420', 'Lata', 15.00, 130, 40, 0),
(47, 7, 'Pulsera Antiestática', 'Unidad', 12.00, 160, 50, 0),
(48, 8, 'Kit Herramientas', 'Caja', 35.00, 70, 22, 0),
(49, 9, 'Manual Garantía Ext', 'Documento', 50.00, 200, 60, 0),
(50, 10, 'Servicio Instalación', 'Servicio', 100.00, 100, 30, 0);
GO

SELECT * FROM ARTICULO;

----------------------------------------------------------------------
-- 7. Insertar 50 Datos en ORDEN_DETALLE
-- NumOrden: INT FK, CodArticulo: INT FK
-- PrecioCompra: MONEY, CantidadSolicitada: SMALLINT, CantidadRecibida: SMALLINT
-- Estado: VARCHAR(10)
----------------------------------------------------------------------
INSERT INTO ORDEN_DETALLE (NumOrden, CodArticulo, PrecioCompra, CantidadSolicitada, CantidadRecibida, Estado) VALUES
(2025001, 1, 1200.00, 10, 10, 'Recibido'),
(2025002, 2, 850.00, 15, 0, 'Pendiente'),
(2025003, 3, 650.00, 8, 8, 'Recibido'),
(2025004, 4, 750.00, 12, 12, 'Recibido'),
(2025005, 5, 400.00, 6, 0, 'Pendiente'),
(2025006, 6, 150.00, 20, 20, 'Recibido'),
(2025007, 7, 280.00, 25, 0, 'Pendiente'),
(2025008, 8, 95.00, 30, 20, 'Parcial'),
(2025009, 9, 350.00, 5, 5, 'Recibido'),
(2025010, 10, 200.00, 8, 0, 'Pendiente'),
(2025011, 11, 25.00, 50, 50, 'Recibido'),
(2025012, 12, 45.00, 40, 0, 'Pendiente'),
(2025013, 13, 65.00, 35, 35, 'Recibido'),
(2025014, 14, 85.00, 20, 20, 'Recibido'),
(2025015, 15, 35.00, 60, 0, 'Pendiente'),
(2025016, 16, 850.00, 3, 3, 'Recibido'),
(2025017, 17, 50.00, 30, 0, 'Pendiente'),
(2025018, 18, 180.00, 12, 12, 'Recibido'),
(2025019, 19, 30.00, 40, 35, 'Parcial'),
(2025020, 20, 35.00, 50, 0, 'Pendiente'),
(2025021, 21, 75.00, 25, 25, 'Recibido'),
(2025022, 22, 120.00, 10, 0, 'Pendiente'),
(2025023, 23, 250.00, 15, 15, 'Recibido'),
(2025024, 24, 45.00, 35, 35, 'Recibido'),
(2025025, 25, 55.00, 18, 0, 'Pendiente'),
(2025026, 26, 40.00, 45, 45, 'Recibido'),
(2025027, 27, 20.00, 60, 0, 'Pendiente'),
(2025028, 28, 95.00, 15, 10, 'Parcial'),
(2025029, 29, 450.00, 6, 6, 'Recibido'),
(2025030, 30, 380.00, 4, 0, 'Pendiente'),
(2025031, 31, 65.00, 30, 30, 'Recibido'),
(2025032, 32, 180.00, 18, 0, 'Pendiente'),
(2025033, 33, 75.00, 25, 25, 'Recibido'),
(2025034, 34, 200.00, 16, 16, 'Recibido'),
(2025035, 35, 50.00, 40, 0, 'Pendiente'),
(2025036, 36, 380.00, 8, 8, 'Recibido'),
(2025037, 37, 320.00, 7, 0, 'Pendiente'),
(2025038, 38, 380.00, 5, 5, 'Recibido'),
(2025039, 39, 160.00, 12, 10, 'Parcial'),
(2025040, 40, 280.00, 4, 0, 'Pendiente'),
(2025041, 41, 180.00, 10, 10, 'Recibido'),
(2025042, 42, 60.00, 40, 0, 'Pendiente'),
(2025043, 43, 90.00, 28, 28, 'Recibido'),
(2025044, 44, 25.00, 70, 70, 'Recibido'),
(2025045, 45, 20.00, 50, 0, 'Pendiente'),
(2025046, 46, 15.00, 80, 80, 'Recibido'),
(2025047, 47, 12.00, 90, 0, 'Pendiente'),
(2025048, 48, 35.00, 40, 35, 'Parcial'),
(2025049, 49, 50.00, 100, 100, 'Recibido'),
(2025050, 50, 100.00, 50, 0, 'Pendiente');
GO

SELECT * FROM ORDEN_DETALLE;

----------------------------------------------------------------------
-- 8. Insertar 50 Datos en GUIA_ENVIO
-- NumGuia: INT (PK), CodTienda: INT FK, FechaSalida: DATETIME, CodTransportista: INT FK
----------------------------------------------------------------------
INSERT INTO GUIA_ENVIO (NumGuia, CodTienda, FechaSalida, CodTransportista) VALUES
(1001, 101, '2025-10-01', 501),
(1002, 102, '2025-10-02', 502),
(1003, 103, '2025-10-03', 503),
(1004, 104, '2025-10-04', 504),
(1005, 105, '2025-10-05', 505),
(1006, 106, '2025-10-06', 506),
(1007, 107, '2025-10-07', 507),
(1008, 108, '2025-10-08', 508),
(1009, 109, '2025-10-09', 509),
(1010, 110, '2025-10-10', 510),
(1011, 111, '2025-10-11', 511),
(1012, 112, '2025-10-12', 512),
(1013, 113, '2025-10-13', 513),
(1014, 114, '2025-10-14', 514),
(1015, 115, '2025-10-15', 515),
(1016, 116, '2025-10-16', 516),
(1017, 117, '2025-10-17', 517),
(1018, 118, '2025-10-18', 518),
(1019, 119, '2025-10-19', 519),
(1020, 120, '2025-10-20', 520),
(1021, 121, '2025-10-21', 521),
(1022, 122, '2025-10-22', 522),
(1023, 123, '2025-10-23', 523),
(1024, 124, '2025-10-24', 524),
(1025, 125, '2025-10-25', 525),
(1026, 126, '2025-10-26', 526),
(1027, 127, '2025-10-27', 527),
(1028, 128, '2025-10-28', 528),
(1029, 129, '2025-10-29', 529),
(1030, 130, '2025-10-30', 530),
(1031, 131, '2025-10-31', 531),
(1032, 132, '2025-11-01', 532),
(1033, 133, '2025-11-02', 533),
(1034, 134, '2025-11-03', 534),
(1035, 135, '2025-11-04', 535),
(1036, 136, '2025-11-05', 536),
(1037, 137, '2025-11-06', 537),
(1038, 138, '2025-11-07', 538),
(1039, 139, '2025-11-08', 539),
(1040, 140, '2025-11-09', 540),
(1041, 141, '2025-11-10', 541),
(1042, 142, '2025-11-11', 542),
(1043, 143, '2025-11-12', 543),
(1044, 144, '2025-11-13', 544),
(1045, 145, '2025-11-14', 545),
(1046, 146, '2025-11-15', 546),
(1047, 147, '2025-11-16', 547),
(1048, 148, '2025-11-17', 548),
(1049, 149, '2025-11-18', 549),
(1050, 150, '2025-11-19', 550);
GO

SELECT * FROM GUIA_ENVIO;

----------------------------------------------------------------------
-- 9. Insertar 50 Datos en GUIA_DETALLE
-- NumGuia: INT FK, CodArticulo: INT FK
-- PrecioVenta: MONEY, CantidadEnviada: SMALLINT
----------------------------------------------------------------------
INSERT INTO GUIA_DETALLE (NumGuia, CodArticulo, PrecioVenta, CantidadEnviada) VALUES
(1001, 1, 1450.00, 8),
(1002, 2, 1050.00, 12),
(1003, 3, 850.00, 6),
(1004, 4, 950.00, 10),
(1005, 5, 550.00, 5),
(1006, 6, 200.00, 18),
(1007, 7, 380.00, 20),
(1008, 8, 140.00, 25),
(1009, 9, 480.00, 4),
(1010, 10, 300.00, 7),
(1011, 11, 35.00, 45),
(1012, 12, 65.00, 35),
(1013, 13, 95.00, 30),
(1014, 14, 120.00, 18),
(1015, 15, 50.00, 55),
(1016, 16, 1100.00, 2),
(1017, 17, 75.00, 28),
(1018, 18, 240.00, 10),
(1019, 19, 45.00, 38),
(1020, 20, 50.00, 48),
(1021, 21, 100.00, 22),
(1022, 22, 160.00, 9),
(1023, 23, 320.00, 13),
(1024, 24, 65.00, 32),
(1025, 25, 80.00, 16),
(1026, 26, 55.00, 42),
(1027, 27, 30.00, 58),
(1028, 28, 130.00, 13),
(1029, 29, 580.00, 5),
(1030, 30, 500.00, 3),
(1031, 31, 90.00, 28),
(1032, 32, 240.00, 16),
(1033, 33, 100.00, 23),
(1034, 34, 270.00, 15),
(1035, 35, 70.00, 38),
(1036, 36, 500.00, 7),
(1037, 37, 420.00, 6),
(1038, 38, 500.00, 4),
(1039, 39, 220.00, 11),
(1040, 40, 370.00, 3),
(1041, 41, 240.00, 9),
(1042, 42, 80.00, 38),
(1043, 43, 120.00, 26),
(1044, 44, 35.00, 68),
(1045, 45, 30.00, 48),
(1046, 46, 22.00, 78),
(1047, 47, 18.00, 88),
(1048, 48, 50.00, 38),
(1049, 49, 70.00, 98),
(1050, 50, 140.00, 48);
GO

SELECT * FROM GUIA_DETALLE;