const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

// search
const inputSearch = document.querySelector(".search-input");

// buttons
const buttonSwip = document.querySelector(".btn-swip");
const buttonSw = document.querySelector(".btn-sw");
const buttonSwaw = document.querySelector(".btn-swaw") ;

// coincidences & counters
const countriesContainig = document.querySelector(".countries-containig");
const countriesNumber = document.querySelector(".countries-number");

const countriesStart = document.querySelector(".countries-start");
const countriesStartNumber = document.querySelector(".countries-start-number")

const counterContriesStartingEl = document.querySelector(".counter-contries-starting")
const counterContries = document.querySelector(".counter-contries");

const totalCountriesEl = document.querySelector(".total-countries");
totalCountriesEl.textContent = countries.length;

const countriesList = document.querySelector(".list-countries");
let li;

const resetStatsP = () => {
	counterContriesStartingEl.classList.add("filter");
	counterContries.classList.add("filter");
};

// add elements to DOM
countries.forEach((element) => {
	li = document.createElement("li");
	li.textContent = element;
	li.className = "countrie-order";
	li.classList.add("countrie");
	countriesList.appendChild(li);
});

function searchStartingWord() {
	if (inputSearch.classList.contains("start-word")) {
		inputSearch.classList.remove("start-word");
	} else {
		inputSearch.classList.add("start-word")
	}
}

buttonSw.addEventListener("click", () => searchStartingWord())

// order and reverse countries to A-Z or Z-A
function reverseAndOrderCountries() {
	// delete child elements li
	countriesList.innerHTML = "";
	// reverse arrays of countries
	let reverseC = countries.reverse();
	
	if (li.classList.contains("countrie-order")) {
		reverseC.forEach((element) => {
			li = document.createElement("li");
			li.textContent = element;
			li.className = "countrie-reverse";
			li.classList.add("countrie");
			countriesList.appendChild(li);
		});
	} else {
		countries.forEach((element) => {
			li = document.createElement("li");
			li.textContent = element;
			li.className = "countrie-order";
			li.classList.add("countrie");
			countriesList.appendChild(li);
		});	
	};
};

buttonSwip.addEventListener("click", () => reverseAndOrderCountries());

document.addEventListener("keyup", (e) => {


	if (e.target.matches(".search-input")) {

		if (inputSearch.classList.contains("start-word")) {

			counterContriesStartingEl.classList.remove("filter")
			counterContries.classList.add("filter");
			
			let countStartWord = 0;
			
			countriesStart.textContent = e.target.value;


			document.querySelectorAll(".countrie").forEach((countrie) => {
				
				let coincidense = countrie.textContent.toLowerCase().startsWith(e.target.value.toLowerCase());
				
				if (coincidense) {
					countrie.classList.remove("filter");
					countStartWord++;
				} else {
					countrie.classList.add("filter");
				};
			});

			countriesStartNumber.textContent = countStartWord;
				
		} else {

			counterContries.classList.remove("filter");
			counterContriesStartingEl.classList.add("filter");

			let count = 0;
			
			countriesContainig.textContent = e.target.value;

			document.querySelectorAll(".countrie").forEach((countrie) => {
				
				let coincidense = countrie.textContent.toLowerCase().includes(e.target.value.toLowerCase());
				
				if (coincidense) {
					countrie.classList.remove("filter");
					count++;
				} else {
					countrie.classList.add("filter");
				};
			});

			countriesNumber.textContent = count;
		};
	};
});
