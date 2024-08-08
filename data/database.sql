DROP DATABASE IF EXISTS ControlGasto;
CREATE DATABASE ControlGasto;
USE ControlGasto;

CREATE TABLE Usuario (
    IdUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    ApPaterno VARCHAR(50) NOT NULL,
    ApMaterno VARCHAR(50),
    NumTelefono CHAR(10),
    Correo VARCHAR(50) NOT NULL,
    FechaNacimiento DATETIME,
    Usuario CHAR(20) NOT NULL,
    Contrasena VARCHAR(30) NOT NULL
);

CREATE TABLE Servicio (
    IdServicio INT PRIMARY KEY AUTO_INCREMENT,
    IdUsuario INT NOT NULL,
    Producto VARCHAR(100) NOT NULL,
    Cantidad INT NOT NULL,
    Cliente VARCHAR(50) NOT NULL,
    Estado VARCHAR(20) NOT NULL,
    Monto DECIMAL(10, 2) NOT NULL,
    FechaServicio DATETIME NOT NULL,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
);

CREATE TABLE Ingreso (
    IdIngreso INT PRIMARY KEY AUTO_INCREMENT,
    IdUsuario INT NOT NULL,
    TipoIngreso VARCHAR(50) NOT NULL,
    OrigenIngreso VARCHAR(100) NOT NULL,
    Categoria VARCHAR(30) NOT NULL,
    Monto DECIMAL(10, 2) NOT NULL,
    FechaIngreso DATETIME NOT NULL,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
);

CREATE TABLE Gasto (
    IdGasto INT PRIMARY KEY AUTO_INCREMENT,
    IdUsuario INT NOT NULL,
    Descripcion VARCHAR(100) NOT NULL,
    Categoria VARCHAR(30) NOT NULL,
    Monto DECIMAL(10, 2) NOT NULL,
    FechaTransaccion DATETIME NOT NULL,
    MetodoPago VARCHAR(50) NOT NULL,
    Comprobante VARCHAR(100),
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
);

CREATE TABLE Presupuesto (
    PresupuestoTotal INT PRIMARY KEY,
    PresupuestoActual INT NOT NULL,
    IdUsuario INT NOT NULL, -- Agregar esta columna
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
);
