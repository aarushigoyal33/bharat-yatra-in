
function switchPage(pageId, clickedBtn) {
    document.querySelectorAll('.app-page').forEach(page => page.classList.remove('active-page'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(pageId).classList.add('active-page');
    clickedBtn.classList.add('active');
    window.scrollTo(0,0);
}

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeBtn.textContent = '☀️ Light Mode';
        localStorage.setItem('appTheme', 'dark');
    } else {
        themeBtn.textContent = '🌙 Dark Mode';
        localStorage.setItem('appTheme', 'light');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('appTheme') === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-btn').textContent = '☀️ Light Mode';
    }
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// ================= 2. DESTINATIONS DATA =================
const destinations = [
    { name: "Varanasi", cat: "Spiritual", lat: 25.3176, lng: 82.9739, budget: 8000, img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=600", hotels: "Budget: Gostops Varanasi | Luxury: BrijRama Palace", food: "Blue Lassi, Kashi Chat Bhandar, Tamatar Chat", shopping: "Banarasi Silk Sarees, Brassware, Rudraksha beads", places: "Kashi Vishwanath, Dashashwamedh Ghat, Sarnath", taxi: "E-Rickshaws for small lanes, Boat for Ghat tours.", desc: "Varanasi is the heart of Indian spirituality. Known as the city of Lord Shiva, it offers a mystical experience like no other.", 
      itinerary: { day1: "Morning: Sunrise boat ride on Ganges. Visit Assi Ghat for yoga. Afternoon: Kashi Vishwanath Temple darshan. Evening: Attend Ganga Aarti at Dashashwamedh Ghat.", day2: "Morning: Visit Sarnath (Buddha's first sermon site). Afternoon: Explore Banaras Hindu University & Bharat Kala Bhavan Museum. Evening: Walk through narrow lanes, shop for silk sarees.", day3: "Morning: Visit Manikarnika Ghat (cremation ghat). Try famous Blue Lassi. Afternoon: Ramnagar Fort & Museum. Evening: Boat ride at sunset, departure." } },
    
    { name: "Amritsar", cat: "Spiritual", lat: 31.6340, lng: 74.8723, budget: 9000, img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600", hotels: "Budget: Sarai Stay | Luxury: Taj Swarna", food: "Amritsari Kulcha, Kesar Da Dhaba, Lassi", shopping: "Phulkari Dupattas, Juttis, Papad-Wari", places: "Golden Temple, Jallianwala Bagh, Wagah Border", taxi: "Ola/Uber, Free Temple Bus from Airport.", desc: "The Golden Temple is the soul of Amritsar. The serene sarovar and the golden architecture create an atmosphere of immense peace.",
      itinerary: { day1: "Morning: Golden Temple visit & Langar (free meal). Afternoon: Jallianwala Bagh memorial. Evening: Shopping at Hall Bazaar for Phulkari & Juttis.", day2: "Morning: Partition Museum visit. Lunch at Kesar Da Dhaba (famous kulcha). Afternoon: Gobindgarh Fort light & sound show. Evening: Wagah Border ceremony (reach by 4 PM).", day3: "Morning: Revisit Golden Temple for peaceful morning prayers. Try Amritsari Lassi. Afternoon: Visit Durgiana Temple. Evening: Departure with blessings." } },
    
    { name: "Mumbai", cat: "History", lat: 18.9220, lng: 72.8347, budget: 18000, img: "https://s1.it.atcdn.net/wp-content/uploads/2015/03/48-hours-in-Mumbai-6.jpg", hotels: "Budget: Zostel | Luxury: Taj Mahal Palace", food: "Vada Pav, Pav Bhaji, Bademiya Kebabs", shopping: "Colaba Causeway, Fashion Street, Linking Road", places: "Gateway of India, Marine Drive, Elephanta Caves", taxi: "Kaali Peeli Taxis, Local Train, Uber.", desc: "Mumbai is the 'City of Dreams'. It is a mix of colonial history at South Bombay and the glamour of Bollywood.",
      itinerary: { day1: "Morning: Gateway of India & Taj Hotel photo stop. Ferry to Elephanta Caves. Afternoon: Return & lunch at Bademiya. Evening: Marine Drive sunset walk, try Vada Pav.", day2: "Morning: Chhatrapati Shivaji Terminus (UNESCO site). Visit Crawford Market. Afternoon: Dhobi Ghat, Haji Ali Dargah. Evening: Juhu Beach, street food.", day3: "Morning: Siddhivinayak Temple. Afternoon: Shopping at Colaba Causeway & Fashion Street. Evening: Bandra-Worli Sea Link drive, departure from Mumbai." } },
    
    { name: "Jammu Kashmir", cat: "Adventure", lat: 34.0837, lng: 74.7973, budget: 25000, img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600", hotels: "Budget: Dal Houseboats | Luxury: Khyber Gulmarg", food: "Rogan Josh, Yakhni, Kahwa Tea", shopping: "Pashmina Shawls, Walnut Wood Decor, Saffron", places: "Dal Lake, Gulmarg, Pahalgam, Sonamarg", taxi: "Pre-booked Private Vans, Shikara on Lake.", desc: "Kashmir is truly Heaven on Earth. From the snow-capped peaks of Gulmarg to the serene Shikara rides on Dal Lake.",
      itinerary: { day1: "Arrive Srinagar. Check-in to Houseboat on Dal Lake. Evening: Shikara ride, visit floating gardens. Dinner with Kahwa tea.", day2: "Full day Gulmarg excursion. Gondola ride (Asia's highest cable car). Snow activities or trekking. Return to Srinagar by evening.", day3: "Day trip to Pahalgam (Valley of Shepherds). Visit Betaab Valley & Aru Valley. Horse riding optional. Return to Srinagar.", day4: "Morning: Sonamarg excursion (Meadow of Gold). Afternoon: Srinagar local sightseeing - Mughal Gardens (Nishat, Shalimar). Evening: Shopping for Pashmina & Saffron. Departure." } },
    
    { name: "Pondicherry", cat: "Beach", lat: 11.9416, lng: 79.8083, budget: 12000, img: "https://th.bing.com/th/id/OIP.uH4mM94WhpFGTzp4zbntjQHaEO?w=303&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", hotels: "Budget: Micasa Hostels | Luxury: Palais de Mahe", food: "French Croissants, Ratatouille, Seafood Thali", shopping: "Handmade Paper, Leather Goods, Auroville products", places: "Rock Beach, French Quarter, Auroville, Paradise Beach", taxi: "Cycle or Scooter Rentals (Best), Shared Autos.", desc: "Experience a slice of France in India! Pondicherry's White Town is famous for its mustard-yellow colonial buildings.",
      itinerary: { day1: "Morning: Rent a scooter. Explore French Quarter (White Town) - colorful streets & cafes. Afternoon: Rock Beach promenade walk. Evening: Sunset at Promenade Beach, French dinner.", day2: "Morning: Visit Auroville (Matrimandir meditation). Lunch at Auroville cafes. Afternoon: Paradise Beach (boat ride from Chunnambar). Evening: Shopping at local markets.", day3: "Morning: Sri Aurobindo Ashram visit. Breakfast at Baker Street. Afternoon: Serenity Beach for surfing/relaxing. Evening: Departure with French vibes in heart." } },
    
    { name: "Varkala", cat: "Beach", lat: 8.7374, lng: 76.7032, budget: 9500, img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600", hotels: "Budget: InDa Hotel | Luxury: Gateway Varkala", food: "Grilled Fish, Prawn Curry, Banana Fritters", shopping: "Hippie clothes, Shell jewelry, Spices", places: "Varkala Cliff, Papanasam Beach, Janardanaswamy Temple", taxi: "Auto Rickshaws, Bike rentals.", desc: "Varkala is famous for its dramatic red cliffs overlooking the Arabian Sea. It’s the only place in Kerala with cliffs adjacent to the sea.",
      itinerary: { day1: "Morning: Walk the stunning North Cliff, try surfing at Papanasam Beach. Evening: Dinner at a cliffside cafe.", day2: "Morning: Visit the ancient Janardanaswamy Temple. Afternoon: Explore the peaceful South Cliff. Evening: Ayurvedic massage.", day3: "Morning: Relax at Black Beach. Afternoon: Shopping for hippie clothes & shell jewelry. Departure." } },
    
    { name: "Alappuzha (Alleppey)", cat: "Beach", lat: 9.4981, lng: 76.3329, budget: 13000, img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600", hotels: "Budget: Zostel Alleppey | Luxury: Houseboat Stays", food: "Karimeen Pollichathu, Appam with Stew", shopping: "Coir products, Spices, Banana chips", places: "Alleppey Beach, Backwaters, Lighthouse", taxi: "Shikara Boats, Auto Rickshaws.", desc: "Known as the 'Venice of the East', Alappuzha is famous for its vast network of backwaters and houseboats.",
      itinerary: { day1: "Morning: Arrive Alleppey. Check-in to Houseboat. Afternoon: Cruise through backwaters, watch village life. Evening: Sunset on deck with Kerala meal.", day2: "Morning: Disembark from houseboat. Visit Alleppey Beach & Lighthouse. Afternoon: Coir factory visit. Try Karimeen Pollichathu. Evening: Shikara ride in narrow canals.", day3: "Morning: Visit Marari Beach (nearby, pristine). Afternoon: Shopping for coir products & spices. Evening: Departure from Venice of the East." } },
    
    { name: "Kovalam", cat: "Beach", lat: 8.4004, lng: 76.9787, budget: 14000, img: "https://www.tourmyindia.com/blog//wp-content/uploads/2022/06/Best-Places-to-Visit-in-Kovalam-Kerala.jpg", hotels: "Budget: Peacock Lane | Luxury: The Leela Raviz", food: "Malabar Parotta, Coconut Water, Prawn Fry", shopping: "Ayurvedic oils, Handicrafts", places: "Lighthouse Beach, Hawa Beach, Samudra Beach", taxi: "Taxis, Auto Rickshaws.", desc: "Kovalam is an internationally renowned beach with three adjacent crescent beaches.",
      itinerary: { day1: "Morning: Arrive & relax at Lighthouse Beach. Afternoon: Climb Vizhinjam Lighthouse for panoramic views. Evening: Sunset at Hawa Beach, seafood dinner.", day2: "Morning: Ayurvedic spa treatment. Afternoon: Visit Samudra Beach (less crowded). Try Malabar Parotta. Evening: Beach walk & shopping for Ayurvedic oils.", day3: "Morning: Day trip to Trivandrum - Padmanabhaswamy Temple & Museum. Afternoon: Return to Kovalam. Evening: Departure with relaxed vibes." } },
    
    { name: "Mahabalipuram", cat: "Beach", lat: 12.6269, lng: 80.1927, budget: 11000, img: "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Mahabalipuram_tv_destination_img_2_l_696_1238.jpg", hotels: "Budget: Vinodhara Guesthouse | Luxury: Radisson Blu Resort", food: "Fried Calamari, South Indian Meals", shopping: "Stone Sculptures, Sea-shell decor", places: "Shore Temple, Five Rathas, Mahabalipuram Beach", taxi: "Walkable town, Cycle rentals, Autos.", desc: "A UNESCO World Heritage site, Mahabalipuram is where history meets the sea.",
      itinerary: { day1: "Morning: Shore Temple visit (7th century marvel). Afternoon: Five Rathas (rock-cut temples). Evening: Mahabalipuram Beach sunset, seafood.", day2: "Morning: Arjuna's Penance (giant rock carving). Krishna's Butter Ball. Afternoon: Watch stone sculptors at work. Shopping for sculptures. Evening: Beach relaxation.", day3: "Morning: Visit Tiger Cave (nearby). Afternoon: Crocodile Bank (reptile zoo). Evening: Departure with ancient memories." } }
];

const extraLocs = [
    { n: "Kedarnath", c: "Spiritual", l: 30.73, ln: 79.06, b: 15000, f: "Satvik Food", d: "A holy trek to one of the highest Jyotirlingas amidst the Himalayas.", img:"https://th.bing.com/th/id/OIP.sxsd13NZSCj94rZ70LSDbgHaFU?w=252&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", itinerary: { day1: "Arrive Gaurikund. Start trek (16 km). Rest at camps. Evening: Reach Kedarnath, check-in.", day2: "Morning: Kedarnath Temple darshan (4 AM). Explore surroundings. Afternoon: Begin descent. Evening: Gaurikund.", day3: "Visit Triyuginarayan Temple. Explore Sonprayag. Departure." } },
    { n: "Jaipur", c: "History", l: 26.91, ln: 75.78, b: 12000, f: "Pyaaz Kachori", d: "The Pink City, a royal landscape of forts and palaces.", img:"https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577", itinerary: { day1: "Morning: Amber Fort (elephant ride). Afternoon: Jaigarh Fort. Evening: Hawa Mahal photo stop, Johari Bazaar shopping.", day2: "Morning: City Palace & Jantar Mantar. Afternoon: Albert Hall Museum. Evening: Chokhi Dhani for cultural dinner.", day3: "Morning: Nahargarh Fort (city view). Afternoon: Birla Mandir. Shopping for gems & textiles. Departure." } },
    { n: "Rishikesh", c: "Adventure", l: 30.08, ln: 78.26, b: 10000, f: "Beatles Cafe food", d: "The Yoga capital with the thrill of Ganga Rafting.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81yr347n3V8PCsKVd7s8xKbt19kDeKpYSJg&s", itinerary: { day1: "Morning: Arrive. Laxman Jhula & Ram Jhula walk. Afternoon: Triveni Ghat. Evening: Ganga Aarti at Parmarth Niketan.", day2: "Morning: White water rafting (16 km stretch). Afternoon: Bungee jumping or zip-lining. Evening: Beatles Ashram visit.", day3: "Morning: Yoga & meditation session. Visit Neelkanth Mahadev Temple. Afternoon: Camping by Ganga. Departure." } },
    { n: "Hampi", c: "History", l: 15.33, ln: 76.46, b: 11000, f: "South Thali", d: "A surreal landscape of ancient ruins and boulders.", img:"https://s7ap1.scene7.com/is/image/incredibleindia/a-journey-through-masthead-hero-1?qlt=82&ts=1727368343764", itinerary: { day1: "Morning: Virupaksha Temple. Afternoon: Hampi Bazaar ruins. Evening: Sunset at Hemakuta Hill.", day2: "Morning: Vittala Temple (Stone Chariot). Afternoon: Lotus Mahal & Elephant Stables. Evening: Tungabhadra River coracle ride.", day3: "Morning: Matanga Hill sunrise trek. Afternoon: Achyutaraya Temple. Departure from this ancient wonder." } },
    { n: "Leh Ladakh", c: "Adventure", l: 34.15, ln: 77.57, b: 30000, f: "Thukpa & Momos", d: "A cold desert with dramatic mountains and blue lakes.", img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d7/5d/55/caption.jpg?w=800&h=800&s=1", itinerary: { day1: "Arrive Leh. Rest (acclimatization day). Evening: Leh Palace & Shanti Stupa.", day2: "Morning: Pangong Lake excursion (5 hrs). Afternoon: Enjoy the blue lake. Evening: Return to Leh.", day3: "Morning: Nubra Valley via Khardung La (world's highest motorable road). Camel safari on sand dunes.", day4: "Morning: Magnetic Hill & Gurudwara Pathar Sahib. Afternoon: Leh Market shopping. Evening: Departure." } },
    { n: "Agra", c: "History", l: 27.17, ln: 78.00, b: 7000, f: "Agra Petha", d: "Home to the Taj Mahal, the monument of eternal love.", img:"https://images.onthegotours.com/web-images/locations/agra.jpg", itinerary: { day1: "Morning: Taj Mahal at sunrise (most magical). Afternoon: Agra Fort. Evening: Mehtab Bagh for Taj view at sunset.", day2: "Morning: Fatehpur Sikri (Mughal ghost city). Afternoon: Itmad-ud-Daulah (Baby Taj). Evening: Shopping for Petha & marble inlay work.", day3: "Morning: Akbar's Tomb at Sikandra. Departure for next destination." } },
    { n: "Puri", c: "Spiritual", l: 19.81, ln: 85.83, b: 8000, f: "Mahaprasad", d: "Sacred Jagannath Temple and vast coastal beauty.", img:"https://i0.wp.com/weekendyaari.in/wp-content/uploads/2025/05/Jagannath-Temple-Puri-%E2%80%93-Complete-Guide-.jpg?fit=720%2C480&ssl=1", itinerary: { day1: "Morning: Jagannath Temple darshan. Afternoon: Mahaprasad (temple food). Evening: Puri Beach sunset.", day2: "Morning: Konark Sun Temple (UNESCO, 35 km). Afternoon: Chandrabhaga Beach. Evening: Return to Puri, local market.", day3: "Morning: Chilika Lake day trip (flamingos & dolphins). Afternoon: Return. Evening: Departure." } },
    { n: "Haridwar", c: "Spiritual", l: 29.94, ln: 78.16, b: 6000, f: "Aloo Puri", d: "Gateway to the Gods where the Ganga Aarti is divine.", img:"https://cdn.britannica.com/43/155643-050-E9989FB0/bathing-ghat-Har-ki-pauri-Haridwar-India-Uttarakhand.jpg", itinerary: { day1: "Morning: Har Ki Pauri holy dip. Afternoon: Mansa Devi Temple (ropeway). Evening: Ganga Aarti at Har Ki Pauri (unmissable).", day2: "Morning: Chandi Devi Temple. Afternoon: Daksha Mahadev Temple. Evening: Explore Bara Bazaar for religious items.", day3: "Morning: Day trip to Rishikesh (25 km). Evening: Return to Haridwar. Departure." } },
    { n: "Goa", c: "Adventure", l: 15.29, ln: 74.12, b: 15000, f: "Seafood", d: "The ultimate party and water sports destination of India.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNMQTKJ_XycQn6uJZRY3kJI6bLLOirLxHEQ&s", itinerary: { day1: "Morning: North Goa beaches - Baga & Calangute. Afternoon: Water sports (parasailing, jet ski). Evening: Tito's Lane nightlife.", day2: "Morning: Old Goa churches (UNESCO) - Basilica of Bom Jesus. Afternoon: Panjim city walk, Fontainhas Latin Quarter. Evening: Sunset cruise on Mandovi River.", day3: "Morning: South Goa - Palolem Beach (peaceful). Afternoon: Butterfly Beach boat trip. Evening: Seafood dinner. Departure." } },
    { n: "Udaipur", c: "History", l: 24.58, ln: 73.71, b: 20000, f: "Laal Maas", d: "The City of Lakes with majestic palaces and romantic vibes.", img:"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt4cf134d7dc5ff2c0/68906f5f7adc79b45ae98a6f/iStock-2197451116-2-HEADER_MOBILE.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart", itinerary: { day1: "Morning: City Palace (largest in Rajasthan). Afternoon: Jagdish Temple. Evening: Boat ride on Lake Pichola to Jag Mandir.", day2: "Morning: Saheliyon Ki Bari gardens. Afternoon: Vintage Car Museum. Evening: Bagore Ki Haveli cultural show.", day3: "Morning: Monsoon Palace (Sajjangarh) for panoramic view. Afternoon: Shilpgram craft village. Evening: Departure from City of Lakes." } },
    { n: "Jodhpur", c: "History", l: 26.23, ln: 73.02, b: 13000, f: "Mawa Kachori", d: "The Blue City with the towering Mehrangarh Fort.", img:"https://res.cloudinary.com/kmadmin/image/upload/v1719838773/kiomoi/jodhpur_blue_city_9307.jpg", itinerary: { day1: "Morning: Mehrangarh Fort (stunning views). Afternoon: Jaswant Thada memorial. Evening: Walk through Blue City lanes.", day2: "Morning: Umaid Bhawan Palace & Museum. Afternoon: Mandore Gardens. Evening: Clock Tower market for Mawa Kachori.", day3: "Morning: Balsamand Lake. Afternoon: Shopping for Bandhani textiles & spices. Departure." } },
    { n: "Mysore", c: "History", l: 12.29, ln: 76.63, b: 10000, f: "Mysore Pak", d: "City of Palaces, famous for its grand Dasara celebration.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvYHULeCg18XIDKqba7RYugisYbD3mdn-7g&s", itinerary: { day1: "Morning: Mysore Palace (illuminated on Sundays). Afternoon: Chamundeshwari Temple on Chamundi Hill. Evening: Devaraja Market.", day2: "Morning: Brindavan Gardens (musical fountain). Afternoon: Mysore Zoo. Evening: Shopping for Mysore Silk & Sandalwood.", day3: "Morning: St. Philomena's Church. Afternoon: Jaganmohan Palace Art Gallery. Departure." } },
    { n: "Khajuraho", c: "History", l: 24.83, ln: 79.91, b: 12000, f: "Local Thali", d: "UNESCO site famous for stunning stone-carved temples.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbn0AapgR44m4mYOksWq_LV2ZOPxk47m0zg&s", itinerary: { day1: "Morning: Western Group of Temples (Kandariya Mahadeva). Afternoon: Archaeological Museum. Evening: Sound & Light Show.", day2: "Morning: Eastern Group of Temples (Jain temples). Afternoon: Southern Group. Evening: Local market.", day3: "Morning: Raneh Falls (nearby). Afternoon: Panna National Park safari. Departure." } },
    { n: "Andaman", c: "Adventure", l: 11.62, ln: 92.72, b: 40000, f: "Prawn Curry", d: "Tropical paradise with scuba diving and pristine beaches.", img:"https://travelogyindia.b-cdn.net/storage/app/upload/havelock-island-in-andaman-banner.jpg", itinerary: { day1: "Arrive Port Blair. Cellular Jail (Kala Pani) visit. Evening: Light & Sound Show.", day2: "Ferry to Havelock Island. Radhanagar Beach (Asia's best). Afternoon: Elephant Beach snorkeling.", day3: "Scuba diving at Neil Island. Afternoon: Natural Bridge. Evening: Return to Port Blair.", day4: "Morning: Corbyn's Cove Beach. Afternoon: Water sports at North Bay Island. Departure." } },
    { n: "Kasol", c: "Adventure", l: 32.00, ln: 77.31, b: 10000, f: "Israeli Food", d: "Backpacker's dream in the heart of Parvati Valley.", img: "https://i0.wp.com/www.dfordelhi.in/wp-content/uploads/2018/11/Parvati_Valley_river_kasol_HP_1440x648.jpg?ssl=1", itinerary: { day1: "Arrive Kasol. Walk along Parvati River. Evening: Israeli cafes & bonfire.", day2: "Morning: Trek to Kheerganga (12 km, hot springs). Evening: Camp under stars.", day3: "Morning: Manikaran Sahib Gurudwara (hot springs). Afternoon: Chalal village walk. Departure." } },
    { n: "Gokarna", c: "Beach", l: 14.54, ln: 74.31, b: 9000, f: "Seafood Pasta", d: "A peaceful alternative to Goa with spiritual roots.", img:"https://karnatakatourism.org/_next/image/?url=https%3A%2F%2Fweb-cms.karnatakatourism.org%2Fwp-content%2Fuploads%2F2025%2F06%2FOm-Beach-Gokarna-2.jpg&w=3840&q=75", itinerary: { day1: "Morning: Mahabaleshwar Temple. Afternoon: Om Beach (Om-shaped, stunning). Evening: Sunset at Kudle Beach.", day2: "Morning: Trek to Half Moon Beach & Paradise Beach. Afternoon: Relax & swim. Evening: Bonfire at Om Beach.", day3: "Morning: Gokarna Main Beach. Afternoon: Shopping for hippie items. Departure." } },
    { n: "Shirdi", c: "Spiritual", l: 19.76, ln: 74.47, b: 7000, f: "Prasad", d: "Home of Sai Baba, a major pilgrimage destination.", img:"https://blog.quickride.in/wp-content/uploads/cropped-Shirdi-Sai-Mandir.jpg", itinerary: { day1: "Morning: Sai Baba Temple darshan. Afternoon: Dwarkamai Mosque (Sai Baba's home). Evening: Chavadi & Gurusthan visit.", day2: "Morning: Shani Shingnapur (nearby, famous Shani temple). Afternoon: Return to Shirdi. Evening: Aarti at temple.", day3: "Morning: Wet N Joy Water Park (nearby). Afternoon: Shopping for Prasad & souvenirs. Departure." } },
    { n: "Bodh Gaya", c: "Spiritual", l: 24.69, ln: 84.99, b: 9000, f: "International dishes", d: "The place where Buddha attained enlightenment.", img: "https://tse4.mm.bing.net/th/id/OIP.TPKVQWdluEjb7Tac5RVKxQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", itinerary: { day1: "Morning: Mahabodhi Temple (UNESCO). Meditate under Bodhi Tree. Afternoon: Animesh Lochana Chaitya. Evening: Thai Monastery.", day2: "Morning: Japanese Temple & Great Buddha Statue. Afternoon: Tibetan Monastery. Evening: Sujata Kuti village.", day3: "Morning: Nalanda University ruins (90 km). Afternoon: Rajgir hot springs. Departure." } },
    { n: "Auli", c: "Adventure", l: 30.52, ln: 79.56, b: 18000, f: "Garhwali food", d: "India's best skiing slopes with 360-degree mountain views.", img:"https://c.ndtvimg.com/2026-02/to7a6lsk_travel_625x300_16_February_26.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738", itinerary: { day1: "Arrive Joshimath. Cable car to Auli. Check-in. Evening: Snow views & Garhwali dinner.", day2: "Full day skiing (beginners & advanced slopes). Afternoon: Artificial lake visit. Evening: Bonfire.", day3: "Morning: Gorson Bugyal trek (meadows). Afternoon: Chattrakund Lake. Departure." } },
    { n: "Dwarka", c: "Spiritual", l: 22.24, ln: 68.96, b: 11000, f: "Khichdi", d: "Ancient kingdom of Lord Krishna by the sea.", img: "https://www.trawell.in/images/tours/Dwarka.jpg", itinerary: { day1: "Morning: Dwarkadhish Temple darshan. Afternoon: Gomti Ghat holy dip. Evening: Sunset at Dwarka Beach.", day2: "Morning: Bet Dwarka island (boat ride, Krishna's residence). Afternoon: Nageshwar Jyotirlinga. Evening: Rukmini Devi Temple.", day3: "Morning: Gopi Talav. Afternoon: Somnath Temple (90 km). Departure." } },
    { n: "Somnath", c: "Spiritual", l: 20.88, ln: 70.40, b: 10000, f: "Gujarati Thali", d: "Magnificent Jyotirlinga temple standing on the shore.", img: "https://www.sterlingholidays.com/activities/gir/bannerimage/gir-somnath-temple-activity.jpg.imgw.1280.1280.jpeg", itinerary: { day1: "Morning: Somnath Temple darshan. Afternoon: Somnath Beach. Evening: Sound & Light Show at temple.", day2: "Morning: Gir National Park safari (Asiatic Lions). Afternoon: Return to Somnath. Evening: Triveni Sangam.", day3: "Morning: Prabhas Patan Museum. Afternoon: Bhalka Tirth. Departure." } },
    { n: "Tirupati", c: "Spiritual", l: 13.62, ln: 79.41, b: 12000, f: "Ladoo", d: "The most visited holy hill temple of Lord Venkateswara.", img: "https://5.imimg.com/data5/ANDROID/Default/2023/6/315540762/WE/WC/FG/174147/product-jpeg-1000x1000.jpg", itinerary: { day1: "Arrive Tirupati. Book darshan slot. Evening: Govindaraja Swamy Temple in town.", day2: "Morning: Tirumala Temple darshan (Venkateswara). Afternoon: Akasaganga Teertham. Evening: Receive famous Ladoo Prasad.", day3: "Morning: Sri Padmavathi Temple (Tiruchanur). Afternoon: ISKCON Tirupati. Departure." } }
];

extraLocs.forEach(loc => {
    destinations.push({
        name: loc.n, cat: loc.c, lat: loc.l, lng: loc.ln, budget: loc.b,
        img: loc.img || `https://images.unsplash.com/photo-1548013146-72479768bada?w=500&city=${loc.n}`,
        hotels: "Budget: Local Stays | Luxury: High-end Resorts",
        food: loc.f, shopping: "Local Artifacts", places: "Main Sight, Market, View Point",
        taxi: "Local Taxis and Autos available.", desc: loc.d + " Visit this place to experience the true diversity of India.",
        itinerary: loc.itinerary
    });
});

// Populate the Compare dropdowns dynamically
function populateCompareDropdowns() {
    const select1 = document.getElementById('city1-select');
    const select2 = document.getElementById('city2-select');
    
    // Sort cities alphabetically for the dropdown
    const sortedCities = [...destinations].sort((a, b) => a.name.localeCompare(b.name));
    
    let optionsHtml = '<option value="">Select a City</option>';
    sortedCities.forEach(city => {
        optionsHtml += `<option value="${city.name}">${city.name}</option>`;
    });
    
    if(select1) select1.innerHTML = optionsHtml;
    if(select2) select2.innerHTML = optionsHtml;
}
populateCompareDropdowns();

// ================= 3. RENDER & MAP LOGIC =================
let map;
const container = document.getElementById('display-container');

// A helper function to create HTML cards so we can reuse it for the Compare feature
function generateCard(city) {
    return `
        <div class="card">
            <div class="budget-badge">Avg: ₹${city.budget}</div>
            <img src="${city.img}" alt="${city.name}">
            <div class="card-body">
                <h2>${city.name}</h2>
                <div class="info-group"><strong>📍 Category:</strong> ${city.cat}</div>
                <div class="info-group"><strong>📍 Top Places:</strong> ${city.places}</div>
                <div class="info-group"><strong>🏨 Hotels:</strong> ${city.hotels}</div>
                <div class="info-group"><strong>🍽️ Must Eat:</strong> ${city.food}</div>
                <div class="action-btns">
                    <button class="btn btn-info" onclick="openInfo('${city.name}')">Read Story</button>
                    <button class="btn btn-map" onclick="openMap(${city.lat}, ${city.lng}, '${city.name}')">View Map 🗺️</button>
                </div>
            </div>
        </div>
    `;
}

function render(list) {
    if (!container) return;
    container.innerHTML = list.length > 0 ? "" : "<h2 style='grid-column:1/-1; text-align:center;'>No match found!</h2>";
    list.forEach(city => {
        container.innerHTML += generateCard(city);
    });
}

function openInfo(name) {
    const city = destinations.find(d => d.name === name);
    const dayColors = ['#27ae60', '#2980b9', '#d35400', '#8e44ad'];
    let itineraryHTML = '';
    if (city.itinerary) {
        const days = ['day1', 'day2', 'day3', 'day4'];
        const dayCards = days
            .filter(d => city.itinerary[d])
            .map((d, i) => `<div style="margin:15px 0;padding:12px;background:var(--bg-card);border-radius:8px;border-left:4px solid ${dayColors[i]};"><strong style="color:${dayColors[i]};">Day ${i+1}:</strong> ${city.itinerary[d]}</div>`)
            .join('');
        itineraryHTML = `<div style="margin-top:20px;padding:20px;background:var(--bg-primary);border-radius:10px;"><h3 style="color:var(--accent);margin-top:0;">📅 Suggested Itinerary</h3>${dayCards}</div>`;
    }
    document.getElementById('info-content').innerHTML = `
        <h2 style="color:var(--accent);">Explore ${city.name} (Budget: ₹${city.budget})</h2>
        <p style="line-height:1.8; font-size:16px;">${city.desc}</p>
        <div style="background:var(--bg-color); padding:15px; border-radius:10px; border-left:6px solid var(--blue); margin-bottom: 25px;">
            <p style="margin: 5px 0;"><strong>🛍️ Shopping:</strong> ${city.shopping}</p>
            <p style="margin: 5px 0;"><strong>🚖 Transport:</strong> ${city.taxi}</p>
        </div>
        ${itineraryHTML}
    `;
    document.getElementById('infoModal').style.display = "block";
}

function openMap(lat, lng, name) {
    document.getElementById('mapModal').style.display = "block";
    if (map) map.remove();
    map = L.map('map-element').setView([lat, lng], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([lat, lng]).addTo(map).bindPopup(name).openPopup();
    setTimeout(() => { map.invalidateSize(); }, 100);
}

function closeModal(id) { document.getElementById(id).style.display = "none"; }

// ================= 4. SEARCH, FILTERS & COMPARE =================
function filterByBudget() {
    const max = document.getElementById('budgetInput').value;
    render(max ? destinations.filter(d => d.budget <= max) : destinations);
}

function filterByInterest(cat, btn) {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(cat === 'All' ? destinations : destinations.filter(d => d.cat === cat));
}

function searchCity() {
    const val = document.getElementById('searchInput').value.toLowerCase();
    render(destinations.filter(d => d.name.toLowerCase().includes(val)));
}

function compareCities() {
    const city1Name = document.getElementById('city1-select').value;
    const city2Name = document.getElementById('city2-select').value;
    const compareContainer = document.getElementById('compare-results');
    
    if (!city1Name || !city2Name) {
        alert("Please select two cities to compare!");
        return;
    }
    if (city1Name === city2Name) {
        alert("Please select two different cities. You can't compare a city to itself!");
        return;
    }
    
    const city1 = destinations.find(d => d.name === city1Name);
    const city2 = destinations.find(d => d.name === city2Name);
    
    // Renders them side-by-side using the card generator
    compareContainer.innerHTML = generateCard(city1) + generateCard(city2);
}

// Initial Render
render(destinations);