// let countries = [
//                      {name:'Lebanon',flag:'https://cdn.pixabay.com/photo/2017/08/29/12/53/international-2693259_1280.jpg'},
//                      {name:'Qatar', flag:'https://cdn.pixabay.com/photo/2018/08/14/11/51/qatar-3605394_1280.jpg'},
//                      {name:'Gemrany',flag:'https://media.istockphoto.com/id/847675752/photo/close-up-studio-shot-of-real-german-flag.jpg?s=2048x2048&w=is&k=20&c=qSKbyA-8tfZPksMa7mQ0tr9EurNzkmahtjtVozlbIxM='}
//                     ];

let countries = [];

function handleSelection() {
    //alert('Akarama')
    let ddl_countries = document.getElementById('ddl_countries');
    let selected_country = ddl_countries.value;

    fetch(`https://restcountries.com/v3.1/name/${selected_country}`)
        .then((response) => response.json())
        .then((json) => {
            let country_info = document.getElementById('country_info');
            let capital = json[0].capital[0];
            let population = json[0].population;
            country_info.innerHTML = `${json[0].name.common}, its Captital : ${capital} with population of ${population}`;
            // printing population
        });
}

function ConsumeAPIData() {
    console.log('Before calling API');
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
        .then((response) => response.json())
        .then((json) => {
            json.forEach((element) => {
                countries.push({
                    name: element.name.common,
                    flag: element.flags.png,
                });
            });
        });
    console.log('After Calling API');
}
ConsumeAPIData();

function LoadAllCountries() {
    //alert('I will load all countries')
    // let countries = ['Lebanon','Jordan','France'];

    // Synchronous programming
    // console.log('A');
    // console.log('B');
    // console.log('C');

    // Asynchronous Programming
    // setTimeout(()=>{console.log('A');},3000);
    // console.log('B');
    // setInterval(()=>{console.log('Louay');},3000);
    // console.log('C');

    let ddl_countries = document.getElementById('ddl_countries');
    let ul_countries = document.getElementById('ul_countries');
    let div_countries = document.getElementById('div_countries');
    let div_flags = document.getElementById('div_flags');

    countries.forEach((x) => {
        // Adding Options to Drop Down List
        let option = document.createElement('option');
        option.innerHTML = x.name;
        ddl_countries.appendChild(option);

        // Adding items to the unsorted list
        // let li = document.createElement('li');
        // li.innerHTML = x.name;
        // ul_countries.appendChild(li);

        // Adding button for each country
        // let btn = document.createElement('button');
        // btn.innerHTML = x.name;
        // div_countries.appendChild(btn);

        // Adding flags / imags for each country

        let img_flag = document.createElement('img');
        img_flag.src = x.flag;
        img_flag.className = 'CountryFlag';
        img_flag.addEventListener('click',  () => {
            alert(x.name);
        });
        div_flags.appendChild(img_flag);
    });
}
