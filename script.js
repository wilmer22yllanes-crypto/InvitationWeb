function enviarWhatsApp(opcion) {

    let numero = "51997604765"; // 👈 tu número completo con 51
    let mensaje = "";

    if (opcion === "si") {
        mensaje = "Hola, confirmo que SÍ asistiré al evento 👍";
    } else {
        mensaje = "Hola, disculpa no podré asistir al evento 😢";
    }

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
}
