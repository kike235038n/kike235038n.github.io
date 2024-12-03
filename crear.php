<?php
include 'conexion.php';

$message = ""; 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $grupo = $_POST['grupo'];
    $aciertos = $_POST['aciertos'];

    // Validación de datos
    if (!empty($nombre) && !empty($grupo) && is_numeric($aciertos)) {
        // Uso de declaraciones preparadas para evitar inyecciones SQL
        $stmt = $conn->prepare("INSERT INTO usuarios (nombre, grupo, aciertos) VALUES (?, ?, ?)");
        $stmt->bind_param("ssi", $nombre, $grupo, $aciertos);

        if ($stmt->execute()) {
            $message = "Usuario creado exitosamente";
        } else {
            $message = "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        $message = "Por favor, completa todos los campos correctamente.";
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="diseño.css">
    <title>Crear Usuario</title>
</head>
<body>
    <div class="container3">
        <div class="message"><?= $message; ?></div>
        <div class="buttons">
            <a class="btn btn-1" href="index.php">Regresar</a>
        </div>
    </div>
</body>
</html>
