'use strict';

const cardsContainer = document.getElementById('root');

const cards = responseData.map((userDataObj) => generateUserCard(userDataObj));

cardsContainer.append(...cards);

function generateUserCard(userObj) {
  const fullName =
    `${userObj.firstName} ${userObj.lastName}`.trim() ||
    CARD_CONSTANTS.userName;

  const card = document.createElement('li');
  card.classList.add('userCardWrapper');

  const cardArticle = document.createElement('article');
  cardArticle.classList.add('cardContainer');

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('cardImgWrapper');

  const userImg = document.createElement('img');
  userImg.classList.add('cardImg');
  userImg.src = userObj.profilePicture;
  userImg.alt = fullName;

  const initials = document.createElement('p');
  initials.textContent = getInitials(fullName);
  initials.classList.add('initials');

  imgWrapper.append(userImg, initials);

  const cardName = document.createElement('h2');
  cardName.classList.add('cardName');
  cardName.textContent = fullName;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('cardDescription');
  cardDescription.textContent =
    userObj.description || CARD_CONSTANTS.cardDescription;

  cardArticle.append(imgWrapper, cardName, cardDescription);

  card.append(cardArticle);
  return card;
}

