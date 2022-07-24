#drop database InfoCare;
CREATE DATABASE InfoCare;
USE InfoCare;

CREATE TABLE usuarios(
	id_usuario VARCHAR (20) NOT NULL,
    password_usuario  VARCHAR (20) NOT NULL,
    nombre_usuario  VARCHAR (100) NOT NULL,
    apellido_usuario VARCHAR (100) NOT NULL,
    numero_telefonico VARCHAR (20) NOT NULL UNIQUE,
    tipo_sangre  VARCHAR (3) NOT NULL,
    cargo_usuario  VARCHAR (100) NOT NULL,
    PRIMARY KEY (id_usuario) 
);

CREATE TABLE pacientes(
	id_paciente VARCHAR(20)NOT NULL,
    nombre_paciente VARCHAR(100) NOT NULL,
    apellido_paciente VARCHAR(100) NOT NULL,
    tipo_sangre VARCHAR (3) NOT NULL,
    direccion VARCHAR (100) NOT NULL,
    diagnostico  VARCHAR (255) NOT NULL,
    alergia VARCHAR(255) NOT NULL,
    trabajo VARCHAR(100) NOT NULL,
    deporte VARCHAR(100) NOT NULL,
    antecedente_familiar VARCHAR(255) NOT NULL,
    intervencion  VARCHAR(255) NOT NULL,
    numero_telefonico VARCHAR (20) NOT NULL UNIQUE,
    medicacion VARCHAR(255) NOT NULL,
    pabellon VARCHAR(100) NOT NULL,
    numero_cama INT NOT NULL,
    PRIMARY KEY (id_paciente)
);

CREATE TABLE doctores(
	id_doctor VARCHAR(20) NOT NULL,
    area_encargada VARCHAR (100) NOT NULL,
    especialidad VARCHAR (100) NOT NULL,
    PRIMARY KEY (id_doctor),
	CONSTRAINT fk_id_doctor FOREIGN KEY (id_doctor)
    REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

CREATE TABLE medicamentos (
	id_medicamento VARCHAR(20) NOT NULL,
    nombre_medicamento VARCHAR(100) NOT NULL,
    tipo_medicamento VARCHAR(100) NOT NULL,
    numero_bodega INT NOT NULL
);

CREATE TABLE secretario (
	id_secretario VARCHAR(20) NOT NULL,
    area_encargada VARCHAR(100) NOT NULL,
	PRIMARY KEY (id_secretario),
	CONSTRAINT fk_id_secretario FOREIGN KEY (id_secretario)
    REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);
#DROP TABLE secretario;

CREATE TABLE encargado_bodega (
	id_encargado VARCHAR(20) NOT NULL,
    bodega_asignada INT NOT NULL,
	PRIMARY KEY (id_encargado),
	CONSTRAINT fk_id_encargado FOREIGN KEY (id_encargado)
    REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);
#DROP TABLE encargado_bodega;

CREATE TABLE directivo (
	id_directivo VARCHAR(20) NOT NULL,
    rango VARCHAR(100) NOT NULL,
    area_encargada VARCHAR(100) NOT NULL,
	PRIMARY KEY (id_directivo),
	CONSTRAINT fk_id_directivo FOREIGN KEY (id_directivo)
    REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);
#DROP TABLE directivo;

INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D123HQY1', 'quesillo', 'Alessandro Guadalupe', 'Garcia Espinosa', '98765432', 'O+', 'Directivo');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D123GF12', 'mantecada', 'Omar Alexis', 'Cueto Aguilar', '90827819', 'A+', 'Directivo');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D123FF21', 'holamundo', 'Ximena', 'Vilches Herrera', '82738290', 'O+', 'Directivo');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D123HYR9', 'chetos', 'Keyri Guadalupe', 'Lopez Mendez', '92817202', 'O+', 'Directivo');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D123NM34', 'chilaquiles', 'Diana ', 'Espinosa Desales', '55830192', 'O+', 'Directivo');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D213TQR1', 'fresas', 'Andres', 'Guizar Gomez', '55172839', 'O+', 'Doctor');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D213POQ1', 'clashroyal', 'Enrique David', 'Lopez Nagaya', '99827180', 'A+', 'Doctor');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D213YYQ0', 'tacos', 'Morelia', 'Espinosa Desales', '82718200', 'O+', 'Doctor');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D213AQ43', 'sandwich', 'Fabiola', 'Hernandez Hernandez', '55930228', 'O+', 'Doctor');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('D213PQ00', 'enchiladas', 'Aldo Norberto', 'Lopez Calderon', '98271902', 'A-', 'Doctor');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('A321HAQ4', 'empanadas', 'Litzy Nicolle', 'Samayoa Altuzar', '27628192', 'O+', 'Secretario');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('A321PP12', 'tlayudas', 'Marile', 'Mendoza Lopez', '98112830', 'O+', 'Secretario');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('A321VBV1', 'pozol', 'Maria Jose', 'Garcia Molano', '55163890', 'A+', 'Secretario');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('A321QW11', 'pozole', 'Frida', 'Ruiz Astorga', '99802812', 'A+', 'Secretario');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('A321WQX9', 'torta', 'Roger', 'Robles Balbuena', '99000123', 'A+', 'Secretario');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('B231QPZ1', 'jdexperto', 'Juan Diego', 'Carrasco Bazan', '55627182', 'O+', 'Encargado Bodega');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('B231XZA1', 'yomi', 'Yomara', 'Espinosa Desales', '90928381', 'O-', 'Encargado Bodega');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('B231LOQ0', 'danielrm', 'Daniel De Jesus', 'Rodriguez Miranda', '98847212', 'AB-', 'Encargado Bodega');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('B231C32S', 'onedi', 'Stefany Belen', 'Meza Sanchez', '97202833', 'B+', 'Encargado Bodega');
INSERT INTO `infocare`.`usuarios` (`id_usuario`, `password_usuario`, `nombre_usuario`, `apellido_usuario`, `numero_telefonico`, `tipo_sangre`, `cargo_usuario`) VALUES ('B231RTO9', 'ropalimpia', 'Harry', 'Edward Styles', '38283930', 'AB+', 'Encargado Bodega');

INSERT INTO directivo VALUES ('D123HQY1', 'Director de Area', 'Neurología'), 
('D123GF12', 'Director de Area', 'Pediatria'), ('D123FF21', 'Director de Area', 'Urgencias'),
('D123HYR9', 'Director General', 'Direccion General'), ('D123NM34', 'Director de Area', 'Cardiologia');
INSERT INTO secretario VALUES ('A321HAQ4', "Urgencias"), ('A321PP12', 'Neurología'), 
('A321VBV1', 'Pediatria'), ('A321QW11', 'Cardiologia'), ('A321WQX9', 'Proctologia');
INSERT INTO doctores VALUES ('D213TQR1', "Urgencias", "Medicina General"), 
('D213POQ1', "Neurologia", "Neurologo"), ('D213YYQ0', "Cardiologia", "Cardiologo"), 
('D213AQ43', "Urgencias", "Neurologia"), ('D213PQ00', "Cardiologia", "Internista");
INSERT INTO encargado_bodega VALUES('B231QPZ1', '1'), ('B231XZA1', '2'), ('B231LOQ0', '3'),
('B231C32S', '4'), ('B231RTO9', '1');

INSERT INTO `infocare`.`pacientes` (`id_paciente`, `nombre_paciente`, `apellido_paciente`, `tipo_sangre`, `direccion`, `diagnostico`, `alergia`, `trabajo`, `deporte`, `antecedente_familiar`, `intervencion`, `numero_telefonico`, `medicacion`, `pabellon`, `numero_cama`) VALUES ('P532UYQ0', 'Niall', 'James Horan', 'O+', 'CLL CLL 18 A PONIENTE SUR 184, XAMAIPAK , TUXTLA GUTIERREZ , CHIS ', 'Dolor leve de Cabeza', 'Polvo', 'Ninguno', 'Futbol', 'Ninguno', 'Ninguna', '987362738', 'Tomar Ibuprofeno 600mg cada 12 horas durante 5 dias', 'Ninguno', '01');
INSERT INTO `infocare`.`pacientes` (`id_paciente`, `nombre_paciente`, `apellido_paciente`, `tipo_sangre`, `direccion`, `diagnostico`, `alergia`, `trabajo`, `deporte`, `antecedente_familiar`, `intervencion`, `numero_telefonico`, `medicacion`, `pabellon`, `numero_cama`) VALUES ('P532PPQ7', 'Keyko', 'Escobar Villaverde', 'A+', 'CLL PALACIO MPAL S/N, CENTRO , COMITAN , CHIS ', 'Dolor Estomaca', 'Ninguno', 'Ingeniero de Software', 'Basketball', 'Diabetes', 'Ninguna', '55432467', 'Ingerir una cucharada de Pepto-Bismol cada 12 horas por 3 dias', 'Ninguno', '89');
INSERT INTO `infocare`.`pacientes` (`id_paciente`, `nombre_paciente`, `apellido_paciente`, `tipo_sangre`, `direccion`, `diagnostico`, `alergia`, `trabajo`, `deporte`, `antecedente_familiar`, `intervencion`, `numero_telefonico`, `medicacion`, `pabellon`, `numero_cama`) VALUES ('P532RQ1E', 'Zain', 'Javadd Malik', 'B+', 'CLL ORQUIDEA 14, MARIA AUXILIADORA , SAN CRISTOBAL DE LAS CASAS , CHIS', 'Infeccion en la garganta', 'Polvo', 'Contador Publico', 'Ninguno', 'Ninguno', '2', '98273600', 'Tomar Diclofenaco 600mg cada 8 horas durante 6 dias', 'Ninguno', '07');
INSERT INTO `infocare`.`pacientes` (`id_paciente`, `nombre_paciente`, `apellido_paciente`, `tipo_sangre`, `direccion`, `diagnostico`, `alergia`, `trabajo`, `deporte`, `antecedente_familiar`, `intervencion`, `numero_telefonico`, `medicacion`, `pabellon`, `numero_cama`) VALUES ('P532QZ11', 'Ross ', 'Shor Lynch', 'O+', 'AVE 2A PONIENTE 39, CENTRO , ARRIAGA , CHIS', 'Dolor de Cuerpo', 'Ninguno', 'Abogado', 'Futbol', 'Ninguno', 'Ninguna', '92716301', 'Tomar Ibuprofeno 600 mg cada 12 horas durante 5 dias ', 'Ninguno', '0');
INSERT INTO `infocare`.`pacientes` (`id_paciente`, `nombre_paciente`, `apellido_paciente`, `tipo_sangre`, `direccion`, `diagnostico`, `alergia`, `trabajo`, `deporte`, `antecedente_familiar`, `intervencion`, `numero_telefonico`, `medicacion`, `pabellon`, `numero_cama`) VALUES ('P532VBN5', 'Doroteo', 'Arango Arambula', 'AB+', 'CLL 11 A PONIENTE NORTE 722 S/N, MOCTEZUMA , TUXTLA GUTIERREZ , CHIS', 'Cuerpo Cortado', 'Polen', 'Electricista', 'Volleyball', 'Cancer en la piel', 'Ninguna', '88736153', 'Tomar Paracetamol 600 mg cada 8 horas durante 5 dias', 'Ninguno', '0');

INSERT INTO `infocare`.`medicamentos` (`id_medicamento`, `nombre_medicamento`, `tipo_medicamento`, `numero_bodega`) VALUES ('M432AHQY', 'Ibuprofeno', 'Pastilla', '1');
INSERT INTO `infocare`.`medicamentos` (`id_medicamento`, `nombre_medicamento`, `tipo_medicamento`, `numero_bodega`) VALUES ('M432QAR1', 'Paracetamol', 'Pastilla', '2');
