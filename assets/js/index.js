'use strict';

const cardsContainer = document.getElementById('root');

const cards = responseData.map((userDataObj) => generateUserCard(userDataObj));

cardsContainer.append(...cards);

function generateUserCard(userObj) {
  const fullName =
    `${userObj.firstName} ${userObj.lastName}`.trim() ||
    CARD_CONSTANTS.userName;

  const card = createElement('li', { classNames: ['userCardWrapper'] });

  const cardArticle = createElement('article', { classNames: ['cardContainer'] });;

  const imgWrapper = createUserCardImageWrapper(userObj, fullName);

  const cardName = createElement('h2', { classNames: ['cardName'] }, fullName);

  const cardDescription = createUserCardDescription(userObj);

  const cardIconList = createElement('ul', { classNames: ['iconContainer'] });

  const cardIcons = createUserCardIcons(userObj);

  cardArticle.append(imgWrapper, cardName, cardDescription, cardIconList);

  cardIconList.append(...cardIcons);

  card.append(cardArticle);
  return card;
}

function createUserCardDescription(userObj) {
  const userCardDescription = createElement('p', { classNames: ['cardDescription'] });
  userCardDescription.textContent = userObj.description || CARD_CONSTANTS.cardDescription;
  return userCardDescription;
};

function createUserCardIcons(userObj) {
  const getUserCardIcon = userObj.contacts.map((item) => {
    const urlNames = new URL(item);
    const urlClass = SUPPORTED_SOCIAL_NETWORKS.get(urlNames.hostname);
    const userCardIcon = createElement('a', {
      classNames: ['fa-brands', urlClass, 'fa-2xl', 'icon-color'],
      attributes: {
        href: item,
      }
    })
    return userCardIcon;
  })
  return getUserCardIcon;
};

function createUserCardImageWrapper(userObj, fullName) {
  const userImgElem = createElement('img', {
    classNames: ['cardImg'],
    attributes: {
      src: userObj.profilePicture,
      alt: fullName,
      'data-id': userObj.id,
    },
    event: {
      'error': errorHandler,
      'load': loadHandler,
    }
  });

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
