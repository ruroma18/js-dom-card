'use strict';

const cardsContainer = document.getElementById('root');

const cards = responseData.map((userDataObj) => generateUserCard(userDataObj));

cardsContainer.append(...cards);

function generateUserCard(userObj) {
  const fullName =
    `${userObj.firstName} ${userObj.lastName}`.trim() ||
    CARD_CONSTANTS.userName;

  const card = createUserCardList();

  const cardArticle = createUserCardArticle();

  const imgWrapper = createUserCardImageWrapper(userObj, fullName);

  const cardName = createUserCardName(fullName);

  const cardDescription = createUserCardDescription(userObj, CARD_CONSTANTS);

  cardArticle.append(imgWrapper, cardName, cardDescription);

  card.append(cardArticle);
  return card;
}

function createUserCardList() {
  const userCardList = createElement('li', { classNames: ['userCardWrapper'] });
  return userCardList;
}

function createUserCardArticle() {
  const userCardArticle = createElement('article', { classNames: ['cardContainer'] });
  return userCardArticle;
};

function createUserCardName(fullName) {
  const userCardName = createElement('h2', { classNames: ['cardName'] });
  userCardName.textContent = fullName;
  return userCardName;
};

function createUserCardDescription(userObj, CARD_CONSTANTS) {
  const userCardDescription = createElement('p', { classNames : ['cardDescription']});
  userCardDescription.textContent = userObj.description || CARD_CONSTANTS.cardDescription;
  return userCardDescription;
}

function createUserCardImageWrapper(userObj, fullName) {
  const userImgElem = createElement('img', {
    classNames: ['cardImg'],
    attributes: {
      src: userObj.profilePicture,
      alt: fullName,
      'data-id': userObj.id,
    },
  });

  userImgElem.addEventListener('error', errorHandler);
  userImgElem.addEventListener('load', loadHandler);

  const initialsElem = createElement(
    'div',
    { classNames: ['initials'] },
    getInitials(fullName)
  );

  const imgWrapperElem = createElement(
    'div',
    {
      classNames: ['cardImgWrapper'],
      attributes: { id: `imgWrapper${userObj.id}` },
    },
    initialsElem
  );

  return imgWrapperElem;
}

function errorHandler({ target }) {
  target.remove();
}

function loadHandler({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`imgWrapper${id}`).append(target);
}
