const speakers = [
  {
    name: 'Sachin Tendulkar',
    profile: 'Senior Cricket Player',
    image: 'images/professor-1icon.jpg',
    description: 'Played for 30 years. Also known as God Of cricket',
  },
  {
    name: 'Amitabh Bacchan',
    profile: 'Senior Actor',
    image: 'images/professor-2icon.jpg',
    description: 'Acting for 30 years. Also known as Mellenium actor.',
  },
  {
    name: 'Rakesh Sharma',
    profile: 'Founder, ABC',
    image: 'images/professor-3icon.jpg',
    description: 'An IITian, who is passinate about career.',
  },
  {
    name: 'Simon John',
    profile: 'Senior Venture Analyst',
    image: 'images/Professor-4icon.jpg',
    description:
      'Trading for 5years now. Trades with technical. very good at trading',
  },
  {
    name: 'Nikol Kidman',
    profile: 'Chart Analyst',
    image: 'images/professor-5icon.jpg',
    description:
      'Photographer, philantropist who is working as an analyst in crypto.',
  },
  {
    name: 'Wikky Norman',
    profile: 'Senior Venture Analyst',
    image: 'images/professor-6icon.jpg',
    description:
      'She does confrences globally called SIP (Only Profit) ,Washington-DC',
  },
];

speakers.forEach((element) => {
  const speakers = document.querySelector('.grid');
  const speaker = document.createElement('div');
  speaker.innerHTML = `
    <div class="parent">
      <img src="images/chesslogo.png" class="dev-bg-tiles" alt="chess" />
      <img src="${element.image}" alt="" class="developer-image" />
    </div>
    <div class="developer-info">
      <h3 class="developer-name">${element.name}</h3>
      <p class="developer-followers">${element.profile}</p>
      <hr class="divider" />
      <p class="developer-details">
        ${element.description}
      </p>
    </div>
  </div>`;

  speakers.appendChild(speaker);
  speaker.classList.add('developer');
});
