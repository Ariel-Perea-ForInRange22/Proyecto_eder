// Sistema de almacenamiento local simulado
import type { Usuario, Veterinaria, Cliente, Mascota, Producto, Cita } from './types';

// Datos iniciales
const INITIAL_DATA = {
  veterinarias: [
    {
      id: 'vet-1',
      nombre: 'Veterinaria San Francisco',
      direccion: 'Calle Principal #123',
      telefono: '555-0001'
    }
  ] as Veterinaria[],
  usuarios: [
    {
      id: 'user-1',
      username: 'admin',
      password: 'admin123',
      nombre: 'Administrador',
      telefono: '555-0100',
      rol: 'admin' as const,
      veterinariaId: 'vet-1'
    },
    {
      id: 'user-2',
      username: 'vet1',
      password: 'vet123',
      nombre: 'Dr. Juan Pérez',
      telefono: '555-0101',
      rol: 'veterinario' as const,
      veterinariaId: 'vet-1'
    },
    {
      id: 'user-3',
      username: 'cliente1',
      password: 'cliente123',
      nombre: 'María García Rodríguez',
      telefono: '555-1001',
      email: 'maria.garcia@example.com',
      rol: 'cliente' as const,
      veterinariaId: 'vet-1',
      clienteId: 'cli-1'
    }
  ] as Usuario[],
  clientes: [
    { id: 'cli-1', nombre: 'María García Rodríguez', telefono: '555-1001', email: 'maria.garcia@example.com', direccion: 'Av. Central 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-2', nombre: 'Carlos López Martínez', telefono: '555-1002', email: 'carlos.lopez@example.com', direccion: 'Calle Sur 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-3', nombre: 'Ana Fernández Silva', telefono: '555-1003', email: 'ana.fernandez@example.com', direccion: 'Av. Norte 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-4', nombre: 'Roberto Sánchez Pérez', telefono: '555-1004', email: 'roberto.sanchez@example.com', direccion: 'Calle Este 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-5', nombre: 'Laura Ramírez Torres', telefono: '555-1005', email: 'laura.ramirez@example.com', direccion: 'Av. Oeste 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-6', nombre: 'Diego Morales Castro', telefono: '555-1006', email: 'diego.morales@example.com', direccion: 'Calle Principal 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-7', nombre: 'Patricia Ruiz Flores', telefono: '555-1007', email: 'patricia.ruiz@example.com', direccion: 'Av. Libertad 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-8', nombre: 'Miguel Ángel Jiménez', telefono: '555-1008', email: 'miguel.jimenez@example.com', direccion: 'Calle 20 de Noviembre 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-9', nombre: 'Carmen Díaz Vega', telefono: '555-1009', email: 'carmen.diaz@example.com', direccion: 'Av. Reforma 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-10', nombre: 'José Luis Herrera', telefono: '555-1010', email: 'jose.herrera@example.com', direccion: 'Calle Juárez 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-11', nombre: 'Isabel González Reyes', telefono: '555-1011', email: 'isabel.gonzalez@example.com', direccion: 'Av. Insurgentes 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-12', nombre: 'Francisco Medina Cruz', telefono: '555-1012', email: 'francisco.medina@example.com', direccion: 'Calle Hidalgo 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-13', nombre: 'Sofía Romero Ortiz', telefono: '555-1013', email: 'sofia.romero@example.com', direccion: 'Av. Constitución 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-14', nombre: 'Andrés Navarro Vargas', telefono: '555-1014', email: 'andres.navarro@example.com', direccion: 'Calle Zaragoza 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-15', nombre: 'Gabriela Castro Méndez', telefono: '555-1015', email: 'gabriela.castro@example.com', direccion: 'Av. Independencia 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-16', nombre: 'Ricardo Delgado Rojas', telefono: '555-1016', email: 'ricardo.delgado@example.com', direccion: 'Calle Morelos 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-17', nombre: 'Valeria Gutiérrez Luna', telefono: '555-1017', email: 'valeria.gutierrez@example.com', direccion: 'Av. Revolución 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-18', nombre: 'Sergio Ortega Campos', telefono: '555-1018', email: 'sergio.ortega@example.com', direccion: 'Calle 5 de Mayo 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-19', nombre: 'Daniela Peña Aguilar', telefono: '555-1019', email: 'daniela.pena@example.com', direccion: 'Av. Universidad 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-20', nombre: 'Manuel Vázquez Salazar', telefono: '555-1020', email: 'manuel.vazquez@example.com', direccion: 'Calle Madero 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-21', nombre: 'Carolina Silva Paredes', telefono: '555-1021', email: 'carolina.silva@example.com', direccion: 'Av. México 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-22', nombre: 'Alejandro Ramos Núñez', telefono: '555-1022', email: 'alejandro.ramos@example.com', direccion: 'Calle Guerrero 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-23', nombre: 'Mariana Cruz Sandoval', telefono: '555-1023', email: 'mariana.cruz@example.com', direccion: 'Av. Chapultepec 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-24', nombre: 'Fernando Torres Ibarra', telefono: '555-1024', email: 'fernando.torres@example.com', direccion: 'Calle Colón 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-25', nombre: 'Adriana Flores Mendoza', telefono: '555-1025', email: 'adriana.flores@example.com', direccion: 'Av. Centenario 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-26', nombre: 'Raúl Molina Herrera', telefono: '555-1026', email: 'raul.molina@example.com', direccion: 'Calle Aldama 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-27', nombre: 'Claudia Méndez Robles', telefono: '555-1027', email: 'claudia.mendez@example.com', direccion: 'Av. Justo Sierra 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-28', nombre: 'Pablo Reyes Chávez', telefono: '555-1028', email: 'pablo.reyes@example.com', direccion: 'Calle Allende 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-29', nombre: 'Lucía Vargas Domínguez', telefono: '555-1029', email: 'lucia.vargas@example.com', direccion: 'Av. Cuauhtémoc 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-30', nombre: 'Héctor Campos Estrada', telefono: '555-1030', email: 'hector.campos@example.com', direccion: 'Calle Carranza 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-31', nombre: 'Beatriz Aguilar Santana', telefono: '555-1031', email: 'beatriz.aguilar@example.com', direccion: 'Av. Tecnológico 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-32', nombre: 'Eduardo Paredes Gil', telefono: '555-1032', email: 'eduardo.paredes@example.com', direccion: 'Calle Obregón 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-33', nombre: 'Victoria Salazar Cortés', telefono: '555-1033', email: 'victoria.salazar@example.com', direccion: 'Av. Las Américas 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-34', nombre: 'Javier Núñez Arias', telefono: '555-1034', email: 'javier.nunez@example.com', direccion: 'Calle Benito Juárez 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-35', nombre: 'Mónica Sandoval Rivera', telefono: '555-1035', email: 'monica.sandoval@example.com', direccion: 'Av. Lázaro Cárdenas 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-36', nombre: 'Guillermo Ibarra Montes', telefono: '555-1036', email: 'guillermo.ibarra@example.com', direccion: 'Calle Francisco Villa 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-37', nombre: 'Natalia Mendoza Ponce', telefono: '555-1037', email: 'natalia.mendoza@example.com', direccion: 'Av. Miguel Hidalgo 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-38', nombre: 'Alberto Robles Valencia', telefono: '555-1038', email: 'alberto.robles@example.com', direccion: 'Calle Emiliano Zapata 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-39', nombre: 'Teresa Chávez Osorio', telefono: '555-1039', email: 'teresa.chavez@example.com', direccion: 'Av. Los Insurgentes 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-40', nombre: 'Ignacio Domínguez Soto', telefono: '555-1040', email: 'ignacio.dominguez@example.com', direccion: 'Calle Venustiano Carranza 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-41', nombre: 'Rosa Estrada Maldonado', telefono: '555-1041', email: 'rosa.estrada@example.com', direccion: 'Av. Plutarco Elías Calles 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-42', nombre: 'Víctor Santana Vega', telefono: '555-1042', email: 'victor.santana@example.com', direccion: 'Calle Ignacio Zaragoza 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-43', nombre: 'Elena Gil Herrera', telefono: '555-1043', email: 'elena.gil@example.com', direccion: 'Av. Adolfo López Mateos 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-44', nombre: 'Armando Cortés Zamora', telefono: '555-1044', email: 'armando.cortes@example.com', direccion: 'Calle José María Morelos 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-45', nombre: 'Silvia Arias León', telefono: '555-1045', email: 'silvia.arias@example.com', direccion: 'Av. Manuel Ávila Camacho 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-46', nombre: 'Ernesto Rivera Cabrera', telefono: '555-1046', email: 'ernesto.rivera@example.com', direccion: 'Calle Adolfo Ruiz Cortines 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-47', nombre: 'Pilar Montes Fuentes', telefono: '555-1047', email: 'pilar.montes@example.com', direccion: 'Av. Gustavo Díaz Ordaz 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-48', nombre: 'César Ponce Suárez', telefono: '555-1048', email: 'cesar.ponce@example.com', direccion: 'Calle Luis Echeverría 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-49', nombre: 'Lorena Valencia Mejía', telefono: '555-1049', email: 'lorena.valencia@example.com', direccion: 'Av. José López Portillo 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-50', nombre: 'Rodrigo Osorio Navarro', telefono: '555-1050', email: 'rodrigo.osorio@example.com', direccion: 'Calle Miguel de la Madrid 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-51', nombre: 'Alicia Soto Guzmán', telefono: '555-1051', email: 'alicia.soto@example.com', direccion: 'Av. Carlos Salinas 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-52', nombre: 'Marco Maldonado Rivas', telefono: '555-1052', email: 'marco.maldonado@example.com', direccion: 'Calle Ernesto Zedillo 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-53', nombre: 'Irene Vega Castillo', telefono: '555-1053', email: 'irene.vega@example.com', direccion: 'Av. Vicente Fox 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-54', nombre: 'Germán Zamora Mora', telefono: '555-1054', email: 'german.zamora@example.com', direccion: 'Calle Felipe Calderón 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-55', nombre: 'Cristina León Barrios', telefono: '555-1055', email: 'cristina.leon@example.com', direccion: 'Av. Enrique Peña Nieto 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-56', nombre: 'Óscar Cabrera Rangel', telefono: '555-1056', email: 'oscar.cabrera@example.com', direccion: 'Calle Andrés López 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-57', nombre: 'Verónica Fuentes Miranda', telefono: '555-1057', email: 'veronica.fuentes@example.com', direccion: 'Av. Benito Pablo 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-58', nombre: 'Ramón Suárez Arellano', telefono: '555-1058', email: 'ramon.suarez@example.com', direccion: 'Calle Vicente Guerrero 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-59', nombre: 'Diana Mejía Escobar', telefono: '555-1059', email: 'diana.mejia@example.com', direccion: 'Av. Nicolás Bravo 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-60', nombre: 'Arturo Guzmán Solís', telefono: '555-1060', email: 'arturo.guzman@example.com', direccion: 'Calle Guadalupe Victoria 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-61', nombre: 'Cecilia Rivas Peña', telefono: '555-1061', email: 'cecilia.rivas@example.com', direccion: 'Av. Ignacio Allende 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-62', nombre: 'Bruno Castillo Prieto', telefono: '555-1062', email: 'bruno.castillo@example.com', direccion: 'Calle Juan Aldama 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-63', nombre: 'Jimena Mora Macías', telefono: '555-1063', email: 'jimena.mora@example.com', direccion: 'Av. Mariano Matamoros 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-64', nombre: 'Esteban Barrios Gómez', telefono: '555-1064', email: 'esteban.barrios@example.com', direccion: 'Calle Hermenegildo Galeana 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-65', nombre: 'Angélica Rangel Alvarado', telefono: '555-1065', email: 'angelica.rangel@example.com', direccion: 'Av. Pedro Moreno 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-66', nombre: 'Mauricio Miranda Cortés', telefono: '555-1066', email: 'mauricio.miranda@example.com', direccion: 'Calle Leona Vicario 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-67', nombre: 'Rebeca Arellano Santos', telefono: '555-1067', email: 'rebeca.arellano@example.com', direccion: 'Av. Josefa Ortiz 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-68', nombre: 'Gonzalo Escobar Delgado', telefono: '555-1068', email: 'gonzalo.escobar@example.com', direccion: 'Calle Carmen Serdán 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-69', nombre: 'Paola Solís Ramírez', telefono: '555-1069', email: 'paola.solis@example.com', direccion: 'Av. Aquiles Serdán 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-70', nombre: 'Benjamín Prieto Campos', telefono: '555-1070', email: 'benjamin.prieto@example.com', direccion: 'Calle Belisario Domínguez 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-71', nombre: 'Elvira Macías Ortega', telefono: '555-1071', email: 'elvira.macias@example.com', direccion: 'Av. Francisco I. Madero 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-72', nombre: 'Felipe Alvarado Núñez', telefono: '555-1072', email: 'felipe.alvarado@example.com', direccion: 'Calle Abraham González 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-73', nombre: 'Gloria Santos Flores', telefono: '555-1073', email: 'gloria.santos@example.com', direccion: 'Av. Pascual Orozco 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-74', nombre: 'Horacio Gómez Vargas', telefono: '555-1074', email: 'horacio.gomez@example.com', direccion: 'Calle Felipe Ángeles 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-75', nombre: 'Inés Delgado Morales', telefono: '555-1075', email: 'ines.delgado@example.com', direccion: 'Av. Álvaro Obregón 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-76', nombre: 'Jorge Cortés Ruiz', telefono: '555-1076', email: 'jorge.cortes@example.com', direccion: 'Calle Salvador Alvarado 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-77', nombre: 'Karina Ramírez Jiménez', telefono: '555-1077', email: 'karina.ramirez@example.com', direccion: 'Av. Eulalio Gutiérrez 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-78', nombre: 'Leonardo Jiménez Sánchez', telefono: '555-1078', email: 'leonardo.jimenez@example.com', direccion: 'Calle Pablo González 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-79', nombre: 'Magdalena Sánchez López', telefono: '555-1079', email: 'magdalena.sanchez@example.com', direccion: 'Av. Francisco Murguía 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-80', nombre: 'Nicolás López García', telefono: '555-1080', email: 'nicolas.lopez@example.com', direccion: 'Calle Lucio Blanco 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-81', nombre: 'Olivia García Fernández', telefono: '555-1081', email: 'olivia.garcia@example.com', direccion: 'Av. Martín Luis Guzmán 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-82', nombre: 'Pedro Fernández Rodríguez', telefono: '555-1082', email: 'pedro.fernandez@example.com', direccion: 'Calle Federico Montes 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-83', nombre: 'Queta Rodríguez Martínez', telefono: '555-1083', email: 'queta.rodriguez@example.com', direccion: 'Av. Calixto Contreras 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-84', nombre: 'Rubén Martínez Pérez', telefono: '555-1084', email: 'ruben.martinez@example.com', direccion: 'Calle Severiano Ceniceros 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-85', nombre: 'Sandra Pérez González', telefono: '555-1085', email: 'sandra.perez@example.com', direccion: 'Av. Trinidad Rodríguez 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-86', nombre: 'Tomás González Hernández', telefono: '555-1086', email: 'tomas.gonzalez@example.com', direccion: 'Calle Orestes Pereyra 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-87', nombre: 'Úrsula Hernández Díaz', telefono: '555-1087', email: 'ursula.hernandez@example.com', direccion: 'Av. Toribio Ortega 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-88', nombre: 'Vicente Díaz Ramírez', telefono: '555-1088', email: 'vicente.diaz@example.com', direccion: 'Calle Máximo Castillo 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-89', nombre: 'Wendy Ramírez Torres', telefono: '555-1089', email: 'wendy.ramirez@example.com', direccion: 'Av. Domingo Arrieta 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-90', nombre: 'Xavier Torres Morales', telefono: '555-1090', email: 'xavier.torres@example.com', direccion: 'Calle Jesús Agustín Castro 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-91', nombre: 'Yolanda Morales Castro', telefono: '555-1091', email: 'yolanda.morales@example.com', direccion: 'Av. José Isabel Robles 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-92', nombre: 'Zacarías Castro Ruiz', telefono: '555-1092', email: 'zacarias.castro@example.com', direccion: 'Calle Luis Moya 123', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-93', nombre: 'Amparo Ruiz Díaz', telefono: '555-1093', email: 'amparo.ruiz@example.com', direccion: 'Av. Pánfilo Natera 456', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-94', nombre: 'Baltasar Díaz Jiménez', telefono: '555-1094', email: 'baltasar.diaz@example.com', direccion: 'Calle Tomás Urbina 789', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-95', nombre: 'Consuelo Jiménez Herrera', telefono: '555-1095', email: 'consuelo.jimenez@example.com', direccion: 'Av. Roque González Garza 234', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-96', nombre: 'Damián Herrera Medina', telefono: '555-1096', email: 'damian.herrera@example.com', direccion: 'Calle Manuel Chao 567', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-97', nombre: 'Esmeralda Medina Romero', telefono: '555-1097', email: 'esmeralda.medina@example.com', direccion: 'Av. Raúl Madero 890', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-98', nombre: 'Fabián Romero Navarro', telefono: '555-1098', email: 'fabian.romero@example.com', direccion: 'Calle Eugenio Aguirre 345', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-99', nombre: 'Gisela Navarro Castro', telefono: '555-1099', email: 'gisela.navarro@example.com', direccion: 'Av. José Inés Salazar 678', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() },
    { id: 'cli-100', nombre: 'Humberto Castro Delgado', telefono: '555-1100', email: 'humberto.castro@example.com', direccion: 'Calle Maclovio Herrera 901', veterinariaId: 'vet-1', fechaRegistro: new Date().toISOString() }
  ] as Cliente[],
  mascotas: [
    { id: 'mas-1', nombre: 'Max', especie: 'Perro', raza: 'Labrador', edad: 3, clienteId: 'cli-1', veterinariaId: 'vet-1', observaciones: 'Vacunas al día' },
    { id: 'mas-2', nombre: 'Luna', especie: 'Gato', raza: 'Siamés', edad: 2, clienteId: 'cli-2', veterinariaId: 'vet-1', observaciones: 'Alérgica al pollo' },
    { id: 'mas-3', nombre: 'Rocky', especie: 'Perro', raza: 'Pastor Alemán', edad: 5, clienteId: 'cli-3', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-4', nombre: 'Michi', especie: 'Gato', raza: 'Persa', edad: 1, clienteId: 'cli-4', veterinariaId: 'vet-1', observaciones: 'Desparasitado' },
    { id: 'mas-5', nombre: 'Firulais', especie: 'Perro', raza: 'Chihuahua', edad: 4, clienteId: 'cli-5', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-6', nombre: 'Garfield', especie: 'Gato', raza: 'Naranja', edad: 3, clienteId: 'cli-6', veterinariaId: 'vet-1', observaciones: 'Sobrepeso, dieta' },
    { id: 'mas-7', nombre: 'Toby', especie: 'Perro', raza: 'Beagle', edad: 2, clienteId: 'cli-7', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-8', nombre: 'Nala', especie: 'Gato', raza: 'Bengalí', edad: 1, clienteId: 'cli-8', veterinariaId: 'vet-1', observaciones: 'Muy activa' },
    { id: 'mas-9', nombre: 'Zeus', especie: 'Perro', raza: 'Husky', edad: 4, clienteId: 'cli-9', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-10', nombre: 'Coco', especie: 'Ave', raza: 'Loro', edad: 10, clienteId: 'cli-10', veterinariaId: 'vet-1', observaciones: 'Habla mucho' },
    { id: 'mas-11', nombre: 'Pelusa', especie: 'Conejo', raza: 'Angora', edad: 2, clienteId: 'cli-11', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-12', nombre: 'Thor', especie: 'Perro', raza: 'Rottweiler', edad: 6, clienteId: 'cli-12', veterinariaId: 'vet-1', observaciones: 'Entrenado' },
    { id: 'mas-13', nombre: 'Simba', especie: 'Gato', raza: 'Angora', edad: 2, clienteId: 'cli-13', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-14', nombre: 'Buddy', especie: 'Perro', raza: 'Golden Retriever', edad: 3, clienteId: 'cli-14', veterinariaId: 'vet-1', observaciones: 'Muy sociable' },
    { id: 'mas-15', nombre: 'Manchas', especie: 'Gato', raza: 'Calicó', edad: 4, clienteId: 'cli-15', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-16', nombre: 'Rex', especie: 'Perro', raza: 'Boxer', edad: 5, clienteId: 'cli-16', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-17', nombre: 'Peluchín', especie: 'Hámster', raza: 'Sirio', edad: 1, clienteId: 'cli-17', veterinariaId: 'vet-1', observaciones: 'Le gusta correr' },
    { id: 'mas-18', nombre: 'Lupe', especie: 'Ave', raza: 'Canario', edad: 3, clienteId: 'cli-18', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-19', nombre: 'Negro', especie: 'Gato', raza: 'Bombay', edad: 2, clienteId: 'cli-19', veterinariaId: 'vet-1', observaciones: 'Asustadizo' },
    { id: 'mas-20', nombre: 'Duque', especie: 'Perro', raza: 'Dálmata', edad: 4, clienteId: 'cli-20', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-21', nombre: 'Pepe', especie: 'Ave', raza: 'Periquito', edad: 2, clienteId: 'cli-21', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-22', nombre: 'Rambo', especie: 'Perro', raza: 'Pitbull', edad: 3, clienteId: 'cli-22', veterinariaId: 'vet-1', observaciones: 'Muy protector' },
    { id: 'mas-23', nombre: 'Princesa', especie: 'Gato', raza: 'Ragdoll', edad: 2, clienteId: 'cli-23', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-24', nombre: 'Chiquito', especie: 'Perro', raza: 'Pug', edad: 5, clienteId: 'cli-24', veterinariaId: 'vet-1', observaciones: 'Problemas respiratorios' },
    { id: 'mas-25', nombre: 'Miau', especie: 'Gato', raza: 'Mestizo', edad: 3, clienteId: 'cli-25', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-26', nombre: 'Canela', especie: 'Perro', raza: 'Cocker Spaniel', edad: 4, clienteId: 'cli-26', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-27', nombre: 'Bigotes', especie: 'Gato', raza: 'Británico', edad: 6, clienteId: 'cli-27', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-28', nombre: 'Spike', especie: 'Reptil', raza: 'Iguana', edad: 8, clienteId: 'cli-28', veterinariaId: 'vet-1', observaciones: 'Dieta vegetariana' },
    { id: 'mas-29', nombre: 'Copito', especie: 'Conejo', raza: 'Enano', edad: 1, clienteId: 'cli-29', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-30', nombre: 'Bruno', especie: 'Perro', raza: 'Mastín', edad: 7, clienteId: 'cli-30', veterinariaId: 'vet-1', observaciones: 'Artritis leve' },
    { id: 'mas-31', nombre: 'Félix', especie: 'Gato', raza: 'Negro', edad: 3, clienteId: 'cli-31', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-32', nombre: 'Laika', especie: 'Perro', raza: 'Pastor Belga', edad: 4, clienteId: 'cli-32', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-33', nombre: 'Oreo', especie: 'Gato', raza: 'Blanco y Negro', edad: 2, clienteId: 'cli-33', veterinariaId: 'vet-1', observaciones: 'Juguetón' },
    { id: 'mas-34', nombre: 'Beethoven', especie: 'Perro', raza: 'San Bernardo', edad: 5, clienteId: 'cli-34', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-35', nombre: 'Minino', especie: 'Gato', raza: 'Gris', edad: 4, clienteId: 'cli-35', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-36', nombre: 'Chispa', especie: 'Perro', raza: 'Jack Russell', edad: 2, clienteId: 'cli-36', veterinariaId: 'vet-1', observaciones: 'Muy energético' },
    { id: 'mas-37', nombre: 'Sombra', especie: 'Gato', raza: 'Gris Oscuro', edad: 5, clienteId: 'cli-37', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-38', nombre: 'Pancho', especie: 'Perro', raza: 'Schnauzer', edad: 3, clienteId: 'cli-38', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-39', nombre: 'Bolita', especie: 'Hámster', raza: 'Ruso', edad: 1, clienteId: 'cli-39', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-40', nombre: 'Kira', especie: 'Perro', raza: 'Akita', edad: 6, clienteId: 'cli-40', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-41', nombre: 'Salem', especie: 'Gato', raza: 'Negro Azabache', edad: 3, clienteId: 'cli-41', veterinariaId: 'vet-1', observaciones: 'Independiente' },
    { id: 'mas-42', nombre: 'Pluto', especie: 'Perro', raza: 'Mestizo', edad: 4, clienteId: 'cli-42', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-43', nombre: 'Pikachu', especie: 'Hámster', raza: 'Dorado', edad: 1, clienteId: 'cli-43', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-44', nombre: 'Hércules', especie: 'Perro', raza: 'Gran Danés', edad: 5, clienteId: 'cli-44', veterinariaId: 'vet-1', observaciones: 'Gigante gentil' },
    { id: 'mas-45', nombre: 'Tito', especie: 'Ave', raza: 'Cacatúa', edad: 15, clienteId: 'cli-45', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-46', nombre: 'Peludo', especie: 'Perro', raza: 'Shih Tzu', edad: 3, clienteId: 'cli-46', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-47', nombre: 'Rubia', especie: 'Gato', raza: 'Rubio', edad: 2, clienteId: 'cli-47', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-48', nombre: 'Atila', especie: 'Perro', raza: 'Doberman', edad: 4, clienteId: 'cli-48', veterinariaId: 'vet-1', observaciones: 'Guardián' },
    { id: 'mas-49', nombre: 'Copete', especie: 'Ave', raza: 'Ninfa', edad: 5, clienteId: 'cli-49', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-50', nombre: 'Balto', especie: 'Perro', raza: 'Husky Siberiano', edad: 6, clienteId: 'cli-50', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-51', nombre: 'Kitty', especie: 'Gato', raza: 'Blanco', edad: 1, clienteId: 'cli-1', veterinariaId: 'vet-1', observaciones: 'Segunda mascota' },
    { id: 'mas-52', nombre: 'Scooby', especie: 'Perro', raza: 'Gran Danés', edad: 7, clienteId: 'cli-2', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-53', nombre: 'Lola', especie: 'Perro', raza: 'Poodle', edad: 3, clienteId: 'cli-3', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-54', nombre: 'Tom', especie: 'Gato', raza: 'Azul Ruso', edad: 4, clienteId: 'cli-4', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-55', nombre: 'Lucky', especie: 'Perro', raza: 'Terrier', edad: 5, clienteId: 'cli-5', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-56', nombre: 'Merlín', especie: 'Gato', raza: 'Carey', edad: 3, clienteId: 'cli-6', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-57', nombre: 'Tarzán', especie: 'Perro', raza: 'Bull Terrier', edad: 4, clienteId: 'cli-51', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-58', nombre: 'Nieve', especie: 'Gato', raza: 'Blanco Puro', edad: 2, clienteId: 'cli-52', veterinariaId: 'vet-1', observaciones: 'Sordo' },
    { id: 'mas-59', nombre: 'Boby', especie: 'Perro', raza: 'Mestizo', edad: 6, clienteId: 'cli-53', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-60', nombre: 'Tigre', especie: 'Gato', raza: 'Atigrado', edad: 3, clienteId: 'cli-54', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-61', nombre: 'Oso', especie: 'Perro', raza: 'Chow Chow', edad: 5, clienteId: 'cli-55', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-62', nombre: 'Charlie', especie: 'Perro', raza: 'Beagle', edad: 2, clienteId: 'cli-56', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-63', nombre: 'Misi', especie: 'Gato', raza: 'Mestizo', edad: 4, clienteId: 'cli-57', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-64', nombre: 'Danko', especie: 'Perro', raza: 'Dogo Argentino', edad: 3, clienteId: 'cli-58', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-65', nombre: 'Pelusa', especie: 'Gato', raza: 'Persa', edad: 5, clienteId: 'cli-59', veterinariaId: 'vet-1', observaciones: 'Necesita cepillado diario' },
    { id: 'mas-66', nombre: 'Rayo', especie: 'Perro', raza: 'Galgo', edad: 4, clienteId: 'cli-60', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-67', nombre: 'Moka', especie: 'Gato', raza: 'Marrón', edad: 2, clienteId: 'cli-61', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-68', nombre: 'Apolo', especie: 'Perro', raza: 'Weimaraner', edad: 6, clienteId: 'cli-62', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-69', nombre: 'Cleo', especie: 'Gato', raza: 'Esfinge', edad: 3, clienteId: 'cli-63', veterinariaId: 'vet-1', observaciones: 'Sin pelo' },
    { id: 'mas-70', nombre: 'Odin', especie: 'Perro', raza: 'Lobo Checoslovaco', edad: 5, clienteId: 'cli-64', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-71', nombre: 'Blue', especie: 'Ave', raza: 'Guacamayo', edad: 20, clienteId: 'cli-65', veterinariaId: 'vet-1', observaciones: 'Colorido' },
    { id: 'mas-72', nombre: 'Negrita', especie: 'Gato', raza: 'Negro', edad: 4, clienteId: 'cli-66', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-73', nombre: 'Tango', especie: 'Perro', raza: 'Border Collie', edad: 3, clienteId: 'cli-67', veterinariaId: 'vet-1', observaciones: 'Muy inteligente' },
    { id: 'mas-74', nombre: 'Mango', especie: 'Ave', raza: 'Agapornis', edad: 4, clienteId: 'cli-68', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-75', nombre: 'Dante', especie: 'Perro', raza: 'Xoloitzcuintle', edad: 4, clienteId: 'cli-69', veterinariaId: 'vet-1', observaciones: 'Raza mexicana' },
    { id: 'mas-76', nombre: 'Blanca', especie: 'Gato', raza: 'Blanco', edad: 2, clienteId: 'cli-70', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-77', nombre: 'Coco', especie: 'Perro', raza: 'Maltés', edad: 3, clienteId: 'cli-71', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-78', nombre: 'Jasper', especie: 'Gato', raza: 'Maine Coon', edad: 5, clienteId: 'cli-72', veterinariaId: 'vet-1', observaciones: 'Gato grande' },
    { id: 'mas-79', nombre: 'Maya', especie: 'Perro', raza: 'Chihuahua', edad: 2, clienteId: 'cli-73', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-80', nombre: 'Garras', especie: 'Gato', raza: 'Mestizo', edad: 6, clienteId: 'cli-74', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-81', nombre: 'Colmillo', especie: 'Reptil', raza: 'Pitón', edad: 5, clienteId: 'cli-75', veterinariaId: 'vet-1', observaciones: 'No venenosa' },
    { id: 'mas-82', nombre: 'Reina', especie: 'Gato', raza: 'Persa', edad: 4, clienteId: 'cli-76', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-83', nombre: 'King', especie: 'Perro', raza: 'Pastor Alemán', edad: 5, clienteId: 'cli-77', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-84', nombre: 'Manchitas', especie: 'Conejo', raza: 'Belier', edad: 2, clienteId: 'cli-78', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-85', nombre: 'Trueno', especie: 'Perro', raza: 'Bulldog Francés', edad: 3, clienteId: 'cli-79', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-86', nombre: 'Zafiro', especie: 'Ave', raza: 'Diamante Mandarín', edad: 2, clienteId: 'cli-80', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-87', nombre: 'Hachiko', especie: 'Perro', raza: 'Akita Inu', edad: 7, clienteId: 'cli-81', veterinariaId: 'vet-1', observaciones: 'Muy leal' },
    { id: 'mas-88', nombre: 'Pompón', especie: 'Gato', raza: 'Angora Turco', edad: 3, clienteId: 'cli-82', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-89', nombre: 'Flash', especie: 'Perro', raza: 'Whippet', edad: 2, clienteId: 'cli-83', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-90', nombre: 'Kiwi', especie: 'Ave', raza: 'Perico', edad: 3, clienteId: 'cli-84', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-91', nombre: 'Lobo', especie: 'Perro', raza: 'Husky', edad: 4, clienteId: 'cli-85', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-92', nombre: 'Minnie', especie: 'Gato', raza: 'Mestizo', edad: 2, clienteId: 'cli-86', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-93', nombre: 'Brutus', especie: 'Perro', raza: 'Cane Corso', edad: 5, clienteId: 'cli-87', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-94', nombre: 'Perla', especie: 'Gato', raza: 'Blanco', edad: 3, clienteId: 'cli-88', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-95', nombre: 'Rocco', especie: 'Perro', raza: 'American Bully', edad: 4, clienteId: 'cli-89', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-96', nombre: 'Caramelo', especie: 'Gato', raza: 'Naranja', edad: 2, clienteId: 'cli-90', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-97', nombre: 'Akira', especie: 'Perro', raza: 'Shiba Inu', edad: 3, clienteId: 'cli-91', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-98', nombre: 'Bigotón', especie: 'Gato', raza: 'Gris', edad: 5, clienteId: 'cli-92', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-99', nombre: 'Simón', especie: 'Perro', raza: 'Basset Hound', edad: 6, clienteId: 'cli-93', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-100', nombre: 'Zorro', especie: 'Perro', raza: 'Pomerania', edad: 2, clienteId: 'cli-94', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-101', nombre: 'Pimienta', especie: 'Gato', raza: 'Negro', edad: 4, clienteId: 'cli-95', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-102', nombre: 'Diesel', especie: 'Perro', raza: 'Bulldog Inglés', edad: 5, clienteId: 'cli-96', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-103', nombre: 'Gatúbela', especie: 'Gato', raza: 'Negro', edad: 3, clienteId: 'cli-97', veterinariaId: 'vet-1', observaciones: 'Ágil' },
    { id: 'mas-104', nombre: 'Canela', especie: 'Conejo', raza: 'Mariposa', edad: 1, clienteId: 'cli-98', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-105', nombre: 'Ninja', especie: 'Gato', raza: 'Gris Oscuro', edad: 2, clienteId: 'cli-99', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-106', nombre: 'Beethoven', especie: 'Perro', raza: 'San Bernardo', edad: 4, clienteId: 'cli-100', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-107', nombre: 'Diva', especie: 'Gato', raza: 'Persa', edad: 3, clienteId: 'cli-7', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-108', nombre: 'Bruno', especie: 'Perro', raza: 'Labrador', edad: 5, clienteId: 'cli-8', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-109', nombre: 'Ojitos', especie: 'Gato', raza: 'Azul', edad: 2, clienteId: 'cli-9', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-110', nombre: 'Capitán', especie: 'Perro', raza: 'Dálmata', edad: 4, clienteId: 'cli-10', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-111', nombre: 'Estrella', especie: 'Gato', raza: 'Blanco', edad: 1, clienteId: 'cli-11', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-112', nombre: 'Hera', especie: 'Perro', raza: 'Border Collie', edad: 3, clienteId: 'cli-12', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-113', nombre: 'Whiskers', especie: 'Gato', raza: 'Gris', edad: 4, clienteId: 'cli-13', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-114', nombre: 'Dakota', especie: 'Perro', raza: 'Husky', edad: 5, clienteId: 'cli-14', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-115', nombre: 'Menta', especie: 'Gato', raza: 'Verde Ojos', edad: 2, clienteId: 'cli-15', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-116', nombre: 'Ranger', especie: 'Perro', raza: 'Pastor Alemán', edad: 6, clienteId: 'cli-16', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-117', nombre: 'Bombón', especie: 'Gato', raza: 'Carey', edad: 3, clienteId: 'cli-17', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-118', nombre: 'Draco', especie: 'Reptil', raza: 'Dragón Barbudo', edad: 4, clienteId: 'cli-18', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-119', nombre: 'Dulce', especie: 'Conejo', raza: 'Rex', edad: 1, clienteId: 'cli-19', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-120', nombre: 'León', especie: 'Gato', raza: 'Maine Coon', edad: 5, clienteId: 'cli-20', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-121', nombre: 'Valiente', especie: 'Perro', raza: 'Rottweiler', edad: 4, clienteId: 'cli-21', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-122', nombre: 'Lunita', especie: 'Gato', raza: 'Blanco', edad: 2, clienteId: 'cli-22', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-123', nombre: 'Torito', especie: 'Perro', raza: 'Bull Terrier', edad: 3, clienteId: 'cli-23', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-124', nombre: 'Misifú', especie: 'Gato', raza: 'Atigrado', edad: 4, clienteId: 'cli-24', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-125', nombre: 'Rocko', especie: 'Perro', raza: 'Pitbull', edad: 5, clienteId: 'cli-25', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-126', nombre: 'Azúcar', especie: 'Gato', raza: 'Blanco', edad: 1, clienteId: 'cli-26', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-127', nombre: 'Loky', especie: 'Perro', raza: 'Beagle', edad: 3, clienteId: 'cli-27', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-128', nombre: 'Muñeca', especie: 'Gato', raza: 'Persa', edad: 2, clienteId: 'cli-28', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-129', nombre: 'Titán', especie: 'Perro', raza: 'Gran Danés', edad: 6, clienteId: 'cli-29', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-130', nombre: 'Iris', especie: 'Ave', raza: 'Cotorra', edad: 8, clienteId: 'cli-30', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-131', nombre: 'Fido', especie: 'Perro', raza: 'Golden Retriever', edad: 4, clienteId: 'cli-31', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-132', nombre: 'Coqueta', especie: 'Gato', raza: 'Siamés', edad: 3, clienteId: 'cli-32', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-133', nombre: 'Patas', especie: 'Perro', raza: 'Mestizo', edad: 5, clienteId: 'cli-33', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-134', nombre: 'Terciopelo', especie: 'Gato', raza: 'Negro', edad: 2, clienteId: 'cli-34', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-135', nombre: 'Duende', especie: 'Perro', raza: 'Yorkshire', edad: 3, clienteId: 'cli-35', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-136', nombre: 'Amatista', especie: 'Gato', raza: 'Lila', edad: 4, clienteId: 'cli-36', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-137', nombre: 'Ringo', especie: 'Perro', raza: 'Boxer', edad: 5, clienteId: 'cli-37', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-138', nombre: 'Esmeralda', especie: 'Ave', raza: 'Periquito', edad: 3, clienteId: 'cli-38', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-139', nombre: 'Chato', especie: 'Perro', raza: 'Pug', edad: 4, clienteId: 'cli-39', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-140', nombre: 'Esponjoso', especie: 'Conejo', raza: 'Angora', edad: 2, clienteId: 'cli-40', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-141', nombre: 'Bella', especie: 'Gato', raza: 'Calicó', edad: 3, clienteId: 'cli-41', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-142', nombre: 'Tormenta', especie: 'Perro', raza: 'Weimaraner', edad: 4, clienteId: 'cli-42', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-143', nombre: 'Nuez', especie: 'Hámster', raza: 'Enano', edad: 1, clienteId: 'cli-43', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-144', nombre: 'Ámbar', especie: 'Gato', raza: 'Naranja', edad: 2, clienteId: 'cli-44', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-145', nombre: 'Zeus', especie: 'Perro', raza: 'Mastín Napolitano', edad: 6, clienteId: 'cli-45', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-146', nombre: 'Grisáceo', especie: 'Gato', raza: 'Gris', edad: 5, clienteId: 'cli-46', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-147', nombre: 'Centella', especie: 'Perro', raza: 'Jack Russell', edad: 2, clienteId: 'cli-47', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-148', nombre: 'Copito', especie: 'Gato', raza: 'Blanco', edad: 1, clienteId: 'cli-48', veterinariaId: 'vet-1', observaciones: '' },
    { id: 'mas-149', nombre: 'Titanic', especie: 'Perro', raza: 'Terranova', edad: 7, clienteId: 'cli-49', veterinariaId: 'vet-1', observaciones: 'Le encanta nadar' },
    { id: 'mas-150', nombre: 'Esencia', especie: 'Gato', raza: 'Siamés', edad: 3, clienteId: 'cli-50', veterinariaId: 'vet-1', observaciones: '' }
  ] as Mascota[],
  productos: [
    { id: 'prod-1', nombre: 'Croquetas Premium Perro Adulto', descripcion: 'Alimento balanceado para perros adultos, rico en proteínas', precio: 450, stock: 50, categoria: 'Alimento', especiesRecomendadas: ['Perro'], veterinariaId: 'vet-1' },
    { id: 'prod-2', nombre: 'Arena para Gato', descripcion: 'Arena aglomerante con control de olores', precio: 120, stock: 80, categoria: 'Higiene', especiesRecomendadas: ['Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-3', nombre: 'Pelota de Goma', descripcion: 'Juguete resistente para morder', precio: 85, stock: 100, categoria: 'Juguetes', especiesRecomendadas: ['Perro'], veterinariaId: 'vet-1' },
    { id: 'prod-4', nombre: 'Comida Húmeda Gato', descripcion: 'Lata de 400g sabor atún', precio: 35, stock: 120, categoria: 'Alimento', especiesRecomendadas: ['Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-5', nombre: 'Shampoo Antipulgas', descripcion: 'Shampoo medicado contra pulgas y garrapatas', precio: 180, stock: 45, categoria: 'Higiene', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-6', nombre: 'Collar Antipulgas', descripcion: 'Protección por 8 meses', precio: 250, stock: 60, categoria: 'Accesorios', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-7', nombre: 'Rascador para Gato', descripcion: 'Torre rascadora con 3 niveles', precio: 680, stock: 15, categoria: 'Accesorios', especiesRecomendadas: ['Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-8', nombre: 'Correa Extensible', descripcion: 'Correa retráctil hasta 5 metros', precio: 220, stock: 35, categoria: 'Accesorios', especiesRecomendadas: ['Perro'], veterinariaId: 'vet-1' },
    { id: 'prod-9', nombre: 'Semillas para Ave', descripcion: 'Mezcla nutritiva de semillas', precio: 65, stock: 90, categoria: 'Alimento', especiesRecomendadas: ['Ave'], veterinariaId: 'vet-1' },
    { id: 'prod-10', nombre: 'Jaula para Hámster', descripcion: 'Jaula completa con accesorios', precio: 550, stock: 20, categoria: 'Accesorios', especiesRecomendadas: ['Hámster'], veterinariaId: 'vet-1' },
    { id: 'prod-11', nombre: 'Antiparasitario Interno', descripcion: 'Tabletas desparasitantes', precio: 95, stock: 75, categoria: 'Medicamentos', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-12', nombre: 'Cepillo Dental', descripcion: 'Kit de limpieza dental', precio: 140, stock: 40, categoria: 'Higiene', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-13', nombre: 'Heno para Conejo', descripcion: 'Heno fresco de alta calidad', precio: 110, stock: 55, categoria: 'Alimento', especiesRecomendadas: ['Conejo'], veterinariaId: 'vet-1' },
    { id: 'prod-14', nombre: 'Terrario Mediano', descripcion: 'Terrario de vidrio 60x40cm', precio: 890, stock: 10, categoria: 'Accesorios', especiesRecomendadas: ['Reptil'], veterinariaId: 'vet-1' },
    { id: 'prod-15', nombre: 'Lámpara UV para Reptil', descripcion: 'Lámpara de calor UVB', precio: 320, stock: 25, categoria: 'Accesorios', especiesRecomendadas: ['Reptil'], veterinariaId: 'vet-1' },
    { id: 'prod-16', nombre: 'Croquetas Cachorro', descripcion: 'Alimento para perros menores de 1 año', precio: 480, stock: 45, categoria: 'Alimento', especiesRecomendadas: ['Perro'], veterinariaId: 'vet-1' },
    { id: 'prod-17', nombre: 'Ratón de Juguete', descripcion: 'Ratón con catnip', precio: 45, stock: 150, categoria: 'Juguetes', especiesRecomendadas: ['Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-18', nombre: 'Plato Doble Inoxidable', descripcion: 'Comedero y bebedero 2 en 1', precio: 175, stock: 50, categoria: 'Accesorios', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-19', nombre: 'Golosinas Dentales', descripcion: 'Premios para limpieza dental', precio: 125, stock: 70, categoria: 'Alimento', especiesRecomendadas: ['Perro'], veterinariaId: 'vet-1' },
    { id: 'prod-20', nombre: 'Cama Ortopédica', descripcion: 'Cama con espuma viscoelástica', precio: 750, stock: 18, categoria: 'Accesorios', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-21', nombre: 'Transportadora Pequeña', descripcion: 'Transportadora plástico resistente', precio: 380, stock: 30, categoria: 'Accesorios', especiesRecomendadas: ['Gato', 'Conejo', 'Ave'], veterinariaId: 'vet-1' },
    { id: 'prod-22', nombre: 'Spray Educador', descripcion: 'Repelente para entrenamiento', precio: 165, stock: 40, categoria: 'Otro', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-23', nombre: 'Vitaminas Multifuncionales', descripcion: 'Suplemento vitamínico completo', precio: 210, stock: 55, categoria: 'Medicamentos', especiesRecomendadas: ['Perro', 'Gato', 'Ave'], veterinariaId: 'vet-1' },
    { id: 'prod-24', nombre: 'Hueso de Nylon', descripcion: 'Hueso masticable sabor carne', precio: 95, stock: 85, categoria: 'Juguetes', especiesRecomendadas: ['Perro'], veterinariaId: 'vet-1' },
    { id: 'prod-25', nombre: 'Arena Sílica Premium', descripcion: 'Arena cristalina de sílice', precio: 195, stock: 45, categoria: 'Higiene', especiesRecomendadas: ['Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-26', nombre: 'Peine Quita-pulgas', descripcion: 'Peine metálico fino', precio: 75, stock: 60, categoria: 'Higiene', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-27', nombre: 'Comedero Automático', descripcion: 'Dosificador automático programable', precio: 890, stock: 12, categoria: 'Accesorios', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-28', nombre: 'Bebedero Automático', descripcion: 'Fuente de agua con filtro', precio: 450, stock: 22, categoria: 'Accesorios', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' },
    { id: 'prod-29', nombre: 'Alimento para Pez', descripcion: 'Escamas nutritivas', precio: 55, stock: 100, categoria: 'Alimento', especiesRecomendadas: ['Otro'], veterinariaId: 'vet-1' },
    { id: 'prod-30', nombre: 'Collar con Placa', descripcion: 'Collar ajustable con placa de identificación', precio: 135, stock: 65, categoria: 'Accesorios', especiesRecomendadas: ['Perro', 'Gato'], veterinariaId: 'vet-1' }
  ] as Producto[],
  citas: [
    { id: 'cita-1', clienteId: 'cli-1', mascotaId: 'mas-1', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-25', hora: '10:00', motivo: 'Vacunación anual', estado: 'Pendiente', observaciones: '', fechaCreacion: '2026-02-19T10:00:00Z', tokenConfirmacion: 'ABC123XYZ', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-2', clienteId: 'cli-2', mascotaId: 'mas-2', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-26', hora: '11:30', motivo: 'Control general', estado: 'Confirmada', observaciones: 'Cliente confirmó por teléfono', fechaCreacion: '2026-02-18T14:00:00Z', tokenConfirmacion: 'DEF456ABC', confirmadaPor: '192.168.1.1', fechaConfirmacion: '2026-02-19T09:00:00Z' },
    { id: 'cita-3', clienteId: 'cli-3', mascotaId: 'mas-3', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-20', hora: '09:00', motivo: 'Revisión de piel', estado: 'Completada', observaciones: 'Se aplicó tratamiento tópico', fechaCreacion: '2026-02-15T10:00:00Z', tokenConfirmacion: 'GHI789DEF', confirmadaPor: '192.168.1.2', fechaConfirmacion: '2026-02-16T11:00:00Z' },
    { id: 'cita-4', clienteId: 'cli-4', mascotaId: 'mas-4', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-27', hora: '15:00', motivo: 'Desparasitación', estado: 'Pendiente', observaciones: '', fechaCreacion: '2026-02-19T11:00:00Z', tokenConfirmacion: 'JKL012GHI', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-5', clienteId: 'cli-5', mascotaId: 'mas-5', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-28', hora: '16:30', motivo: 'Corte de uñas', estado: 'Confirmada', observaciones: '', fechaCreacion: '2026-02-19T08:00:00Z', tokenConfirmacion: 'MNO345JKL', confirmadaPor: '192.168.1.3', fechaConfirmacion: '2026-02-19T12:00:00Z' },
    { id: 'cita-6', clienteId: 'cli-6', mascotaId: 'mas-6', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-01', hora: '10:30', motivo: 'Control de peso', estado: 'Pendiente', observaciones: 'Gato con sobrepeso', fechaCreacion: '2026-02-19T13:00:00Z', tokenConfirmacion: 'PQR678MNO', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-7', clienteId: 'cli-7', mascotaId: 'mas-7', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-02', hora: '14:00', motivo: 'Limpieza dental', estado: 'Pendiente', observaciones: '', fechaCreacion: '2026-02-19T14:00:00Z', tokenConfirmacion: 'STU901PQR', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-8', clienteId: 'cli-8', mascotaId: 'mas-8', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-18', hora: '11:00', motivo: 'Esterilización', estado: 'Completada', observaciones: 'Cirugía exitosa, recuperación normal', fechaCreacion: '2026-02-10T10:00:00Z', tokenConfirmacion: 'VWX234STU', confirmadaPor: '192.168.1.4', fechaConfirmacion: '2026-02-11T09:00:00Z' },
    { id: 'cita-9', clienteId: 'cli-9', mascotaId: 'mas-9', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-03', hora: '09:30', motivo: 'Vacunación rabia', estado: 'Confirmada', observaciones: '', fechaCreacion: '2026-02-19T15:00:00Z', tokenConfirmacion: 'YZA567VWX', confirmadaPor: '192.168.1.5', fechaConfirmacion: '2026-02-19T16:00:00Z' },
    { id: 'cita-10', clienteId: 'cli-10', mascotaId: 'mas-10', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-04', hora: '13:00', motivo: 'Revisión de plumas', estado: 'Pendiente', observaciones: 'Ave loro hablador', fechaCreacion: '2026-02-19T09:00:00Z', tokenConfirmacion: 'BCD890YZA', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-11', clienteId: 'cli-11', mascotaId: 'mas-11', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-21', hora: '10:00', motivo: 'Control general conejo', estado: 'Completada', observaciones: 'Estado de salud excelente', fechaCreacion: '2026-02-14T10:00:00Z', tokenConfirmacion: 'EFG123BCD', confirmadaPor: '192.168.1.6', fechaConfirmacion: '2026-02-15T10:00:00Z' },
    { id: 'cita-12', clienteId: 'cli-12', mascotaId: 'mas-12', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-05', hora: '15:30', motivo: 'Revisión post-entrenamiento', estado: 'Pendiente', observaciones: 'Perro entrenado', fechaCreacion: '2026-02-19T10:00:00Z', tokenConfirmacion: 'HIJ456EFG', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-13', clienteId: 'cli-13', mascotaId: 'mas-13', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-22', hora: '12:00', motivo: 'Aplicación de vacunas', estado: 'Cancelada', observaciones: 'Cliente canceló por viaje', fechaCreacion: '2026-02-16T10:00:00Z', tokenConfirmacion: 'KLM789HIJ', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-14', clienteId: 'cli-14', mascotaId: 'mas-14', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-06', hora: '11:00', motivo: 'Chequeo anual', estado: 'Confirmada', observaciones: 'Perro muy sociable', fechaCreacion: '2026-02-19T11:00:00Z', tokenConfirmacion: 'NOP012KLM', confirmadaPor: '192.168.1.7', fechaConfirmacion: '2026-02-19T13:00:00Z' },
    { id: 'cita-15', clienteId: 'cli-15', mascotaId: 'mas-15', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-07', hora: '14:30', motivo: 'Control dermatológico', estado: 'Pendiente', observaciones: '', fechaCreacion: '2026-02-19T12:00:00Z', tokenConfirmacion: 'QRS345NOP', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-16', clienteId: 'cli-16', mascotaId: 'mas-16', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-08', hora: '10:00', motivo: 'Vacunación múltiple', estado: 'Pendiente', observaciones: '', fechaCreacion: '2026-02-19T13:00:00Z', tokenConfirmacion: 'TUV678QRS', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-17', clienteId: 'cli-17', mascotaId: 'mas-17', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-09', hora: '16:00', motivo: 'Control hámster', estado: 'Confirmada', observaciones: 'Le gusta correr mucho', fechaCreacion: '2026-02-19T14:00:00Z', tokenConfirmacion: 'WXY901TUV', confirmadaPor: '192.168.1.8', fechaConfirmacion: '2026-02-19T15:00:00Z' },
    { id: 'cita-18', clienteId: 'cli-18', mascotaId: 'mas-18', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-23', hora: '09:00', motivo: 'Revisión de canto', estado: 'Completada', observaciones: 'Canario en buen estado', fechaCreacion: '2026-02-17T10:00:00Z', tokenConfirmacion: 'ZAB234WXY', confirmadaPor: '192.168.1.9', fechaConfirmacion: '2026-02-18T10:00:00Z' },
    { id: 'cita-19', clienteId: 'cli-19', mascotaId: 'mas-19', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-10', hora: '13:30', motivo: 'Consulta por comportamiento', estado: 'Pendiente', observaciones: 'Gato asustadizo', fechaCreacion: '2026-02-19T15:00:00Z', tokenConfirmacion: 'CDE567ZAB', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-20', clienteId: 'cli-20', mascotaId: 'mas-20', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-11', hora: '11:30', motivo: 'Vacunación completa', estado: 'Confirmada', observaciones: '', fechaCreacion: '2026-02-19T16:00:00Z', tokenConfirmacion: 'FGH890CDE', confirmadaPor: '192.168.1.10', fechaConfirmacion: '2026-02-19T17:00:00Z' },
    { id: 'cita-21', clienteId: 'cli-21', mascotaId: 'mas-21', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-12', hora: '15:00', motivo: 'Control ave', estado: 'Pendiente', observaciones: '', fechaCreacion: '2026-02-19T17:00:00Z', tokenConfirmacion: 'IJK123FGH', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-22', clienteId: 'cli-22', mascotaId: 'mas-22', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-02-24', hora: '10:30', motivo: 'Evaluación de comportamiento', estado: 'Completada', observaciones: 'Perro muy protector, bien socializado', fechaCreacion: '2026-02-18T10:00:00Z', tokenConfirmacion: 'LMN456IJK', confirmadaPor: '192.168.1.11', fechaConfirmacion: '2026-02-19T09:00:00Z' },
    { id: 'cita-23', clienteId: 'cli-23', mascotaId: 'mas-23', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-13', hora: '12:30', motivo: 'Limpieza dental', estado: 'Pendiente', observaciones: '', fechaCreacion: '2026-02-19T18:00:00Z', tokenConfirmacion: 'OPQ789LMN', confirmadaPor: undefined, fechaConfirmacion: undefined },
    { id: 'cita-24', clienteId: 'cli-24', mascotaId: 'mas-24', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-14', hora: '14:00', motivo: 'Control respiratorio', estado: 'Confirmada', observaciones: 'Pug con problemas respiratorios', fechaCreacion: '2026-02-19T19:00:00Z', tokenConfirmacion: 'RST012OPQ', confirmadaPor: '192.168.1.12', fechaConfirmacion: '2026-02-19T20:00:00Z' },
    { id: 'cita-25', clienteId: 'cli-25', mascotaId: 'mas-25', veterinarioId: 'user-2', veterinariaId: 'vet-1', fecha: '2026-03-15', hora: '09:00', motivo: 'Vacunación', estado: 'Pendiente', observaciones: '', fechaCreacion: '2026-02-19T08:00:00Z', tokenConfirmacion: 'UVW345RST', confirmadaPor: undefined, fechaConfirmacion: undefined }
  ] as Cita[]
};

class Storage {
  private getKey(key: string): string {
    return `vet_system_${key}`;
  }

  init() {
    if (typeof window === 'undefined') return;
    
    if (!localStorage.getItem(this.getKey('initialized'))) {
      localStorage.setItem(this.getKey('veterinarias'), JSON.stringify(INITIAL_DATA.veterinarias));
      localStorage.setItem(this.getKey('usuarios'), JSON.stringify(INITIAL_DATA.usuarios));
      localStorage.setItem(this.getKey('clientes'), JSON.stringify(INITIAL_DATA.clientes));
      localStorage.setItem(this.getKey('mascotas'), JSON.stringify(INITIAL_DATA.mascotas));
      localStorage.setItem(this.getKey('productos'), JSON.stringify(INITIAL_DATA.productos));
      localStorage.setItem(this.getKey('citas'), JSON.stringify(INITIAL_DATA.citas));
      localStorage.setItem(this.getKey('initialized'), 'true');
    }
  }

  // Usuarios
  getUsuarios(): Usuario[] {
    const data = localStorage.getItem(this.getKey('usuarios'));
    return data ? JSON.parse(data) : [];
  }

  saveUsuario(usuario: Usuario) {
    const usuarios = this.getUsuarios();
    usuarios.push(usuario);
    localStorage.setItem(this.getKey('usuarios'), JSON.stringify(usuarios));
  }

  // Clientes
  getClientes(veterinariaId?: string): Cliente[] {
    const data = localStorage.getItem(this.getKey('clientes'));
    const clientes = data ? JSON.parse(data) : [];
    return veterinariaId ? clientes.filter((c: Cliente) => c.veterinariaId === veterinariaId) : clientes;
  }

  saveCliente(cliente: Cliente) {
    const clientes = this.getClientes();
    clientes.push(cliente);
    localStorage.setItem(this.getKey('clientes'), JSON.stringify(clientes));
  }

  updateCliente(id: string, data: Partial<Cliente>) {
    const clientes = this.getClientes();
    const index = clientes.findIndex(c => c.id === id);
    if (index !== -1) {
      clientes[index] = { ...clientes[index], ...data };
      localStorage.setItem(this.getKey('clientes'), JSON.stringify(clientes));
    }
  }

  deleteCliente(id: string) {
    const clientes = this.getClientes();
    const filtered = clientes.filter(c => c.id !== id);
    localStorage.setItem(this.getKey('clientes'), JSON.stringify(filtered));
  }

  buscarClientes(termino: string, veterinariaId: string): Cliente[] {
    const clientes = this.getClientes(veterinariaId);
    const terminoLower = termino.toLowerCase();
    return clientes.filter(c => 
      c.nombre.toLowerCase().includes(terminoLower) || 
      c.telefono.includes(termino)
    );
  }

  // Mascotas
  getMascotas(veterinariaId?: string): Mascota[] {
    const data = localStorage.getItem(this.getKey('mascotas'));
    const mascotas = data ? JSON.parse(data) : [];
    return veterinariaId ? mascotas.filter((m: Mascota) => m.veterinariaId === veterinariaId) : mascotas;
  }

  saveMascota(mascota: Mascota) {
    const mascotas = this.getMascotas();
    mascotas.push(mascota);
    localStorage.setItem(this.getKey('mascotas'), JSON.stringify(mascotas));
  }

  updateMascota(id: string, data: Partial<Mascota>) {
    const mascotas = this.getMascotas();
    const index = mascotas.findIndex(m => m.id === id);
    if (index !== -1) {
      mascotas[index] = { ...mascotas[index], ...data };
      localStorage.setItem(this.getKey('mascotas'), JSON.stringify(mascotas));
    }
  }

  deleteMascota(id: string) {
    const mascotas = this.getMascotas();
    const filtered = mascotas.filter(m => m.id !== id);
    localStorage.setItem(this.getKey('mascotas'), JSON.stringify(filtered));
  }

  getMascotasByCliente(clienteId: string): Mascota[] {
    const mascotas = this.getMascotas();
    return mascotas.filter(m => m.clienteId === clienteId);
  }

  // Productos
  getProductos(veterinariaId?: string): Producto[] {
    const data = localStorage.getItem(this.getKey('productos'));
    const productos = data ? JSON.parse(data) : [];
    return veterinariaId ? productos.filter((p: Producto) => p.veterinariaId === veterinariaId) : productos;
  }

  saveProducto(producto: Producto) {
    const productos = this.getProductos();
    productos.push(producto);
    localStorage.setItem(this.getKey('productos'), JSON.stringify(productos));
  }

  updateProducto(id: string, data: Partial<Producto>) {
    const productos = this.getProductos();
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
      productos[index] = { ...productos[index], ...data };
      localStorage.setItem(this.getKey('productos'), JSON.stringify(productos));
    }
  }

  deleteProducto(id: string) {
    const productos = this.getProductos();
    const filtered = productos.filter(p => p.id !== id);
    localStorage.setItem(this.getKey('productos'), JSON.stringify(filtered));
  }

  buscarProductos(termino: string, veterinariaId: string): Producto[] {
    const productos = this.getProductos(veterinariaId);
    const terminoLower = termino.toLowerCase();
    return productos.filter(p => 
      p.nombre.toLowerCase().includes(terminoLower) || 
      p.descripcion.toLowerCase().includes(terminoLower) ||
      p.categoria.toLowerCase().includes(terminoLower)
    );
  }

  filtrarProductosPorEspecie(especie: string, veterinariaId: string): Producto[] {
    const productos = this.getProductos(veterinariaId);
    if (!especie) return productos;
    return productos.filter(p => 
      p.especiesRecomendadas.length === 0 || 
      p.especiesRecomendadas.includes(especie)
    );
  }

  // Citas
  getCitas(veterinariaId?: string): Cita[] {
    const data = localStorage.getItem(this.getKey('citas'));
    const citas = data ? JSON.parse(data) : [];
    return veterinariaId ? citas.filter((c: Cita) => c.veterinariaId === veterinariaId) : citas;
  }

  saveCita(cita: Cita) {
    const citas = this.getCitas();
    citas.push(cita);
    localStorage.setItem(this.getKey('citas'), JSON.stringify(citas));
  }

  updateCita(id: string, data: Partial<Cita>) {
    const citas = this.getCitas();
    const index = citas.findIndex(c => c.id === id);
    if (index !== -1) {
      citas[index] = { ...citas[index], ...data };
      localStorage.setItem(this.getKey('citas'), JSON.stringify(citas));
    }
  }

  deleteCita(id: string) {
    const citas = this.getCitas();
    const filtered = citas.filter(c => c.id !== id);
    localStorage.setItem(this.getKey('citas'), JSON.stringify(filtered));
  }

  getCitasByCliente(clienteId: string): Cita[] {
    const citas = this.getCitas();
    return citas.filter(c => c.clienteId === clienteId);
  }

  getCitasByMascota(mascotaId: string): Cita[] {
    const citas = this.getCitas();
    return citas.filter(c => c.mascotaId === mascotaId);
  }

  getCitasByFecha(fecha: string, veterinariaId: string): Cita[] {
    const citas = this.getCitas(veterinariaId);
    return citas.filter(c => c.fecha === fecha);
  }

  getCitasByVeterinario(veterinarioId: string): Cita[] {
    const citas = this.getCitas();
    return citas.filter(c => c.veterinarioId === veterinarioId);
  }
}

export const storage = new Storage();
