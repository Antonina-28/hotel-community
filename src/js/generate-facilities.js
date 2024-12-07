export function generateServices(services) {
    const facilitiesList = document.querySelector('.facilities__list');

    services.forEach(service => {
        const itemService = document.createElement('li');
        const iconService = document.createElement('img');
        const titleService = document.createElement('h4');

        iconService.setAttribute('class', 'facilities__icon');
        iconService.setAttribute('src', service.img);
        iconService.setAttribute('width', 40);
        iconService.setAttribute('height', 40);
        iconService.setAttribute('alt', 'Иконка предложенного сервиса.');
        titleService.textContent = service.title;
        titleService.setAttribute('class', 'facilities__subtitle');
        itemService.appendChild(iconService);
        itemService.appendChild(titleService);
        facilitiesList.appendChild(itemService);
    });
}