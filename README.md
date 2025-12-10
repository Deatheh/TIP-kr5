<h1><b>Контрольная работа №5</b></h1>
    <h2><b>Таймер обратного отсчёта</b></h2>
    <p>
        Приложение запускается на 3000 порту
    </p>
    
    <h3><b>Index</b></h3>
    <ul>
        <li>[GET] <code>http://localhost:3000/</code> - начальная страница сайта, где можно выбрать начальное время таймера</li>
        <li>[POST] <code>http://localhost:3000/start</code> - запрос-редирект на страницу с таймером</li>
    </ul>
    
    <h3><b>Timer</b></h3>
    <ul>
        <li>[GET] <code>http://localhost:3000/timer</code> - страница с таймером. Принимает query параметр <code>second</code></li>
    </ul>
