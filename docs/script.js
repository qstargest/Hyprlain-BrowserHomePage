function updateClock() {
    // Получаем текущее время в формате UTC
    const now = new Date();
    
    // Настройки для вывода времени именно в часовом поясе Казахстана (Азия/Алматы)
    const timeOptions = {
        timeZone: 'Asia/Almaty',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    // Настройки для вывода даты
    const dateOptions = {
        timeZone: 'Asia/Almaty',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    // Форматируем время и дату
    const timeString = new Intl.DateTimeFormat('ru-RU', timeOptions).format(now);
    const dateString = new Intl.DateTimeFormat('ru-RU', dateOptions).format(now);

    // Выводим на экран
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Обновляем каждую секунду
setInterval(updateClock, 1000);
updateClock();
