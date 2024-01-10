function openOrderModal() {
    var modal = document.getElementById("orderModal");
    modal.style.display = "block";
}

function closeOrderModal() {
    var modal = document.getElementById("orderModal");
    modal.style.display = "none";
}

function submitOrderForm(event) {
    event.preventDefault();
    // Добавьте здесь логику обработки формы и отправки данных
    // Пример: получение значений полей формы
    var selectedRoute = document.getElementById("selectedRoute").value;
    var selectedGuide = document.getElementById("selectedGuide").value;
    var tourDate = document.getElementById("tourDate").value;
    var startTime = document.getElementById("startTime").value;
    var duration = document.getElementById("duration").value;
    var groupSize = document.getElementById("groupSize").value;
    // Пример: вывод данных в консоль
    console.log("Выбранный маршрут:", selectedRoute);
    console.log("Выбранный гид:", selectedGuide);
    console.log("Дата экскурсии:", tourDate);
    console.log("Время начала экскурсии:", startTime);
    console.log("Длительность экскурсии:", duration);
    console.log("Количество человек в группе:", groupSize);
}

// Добавьте здесь другие функции и логику, если необходимо
