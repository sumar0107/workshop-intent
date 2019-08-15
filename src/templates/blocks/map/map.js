const yaMapInit = () => {
  const {ymaps} = global;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
      center: [59.935980, 30.373429],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    });


    const myPlacemarkWithContent = new ymaps.Placemark([59.935980, 30.373429], {
      hintContent: 'Мастерская Намерения',
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: './assets/img/mapsAndFlags.svg',
      // Размеры метки.
      iconImageSize: [36, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-18, -50]
    });

    myMap.geoObjects.add(myPlacemarkWithContent);
    myMap.behaviors.disable('scrollZoom')
  });
};
export default yaMapInit

