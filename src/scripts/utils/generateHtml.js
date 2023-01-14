export function generateCardTemplate({ title, body, user }) {
  const { firstName, image, company } = user;
  const truncatedBody = body.slice(0, 140);

  const $card = document.createElement('div');
  $card.classList.add('testimonials-card');

  const $titleNode = document.createElement('h3');
  $titleNode.classList.add('testimonials-card__title');
  $titleNode.textContent = title;

  // quote
  const $blockquoteNode = document.createElement('blockquote');
  $blockquoteNode.classList.add('testimonials-card__quote');

  const $svgNode = generateQuotesSvg();

  const $blockquoteTextNode = document.createElement('p');
  $blockquoteTextNode.textContent = truncatedBody;

  $blockquoteNode.appendChild($svgNode);
  $blockquoteNode.appendChild($blockquoteTextNode);

  // user
  const $userNode = document.createElement('div');
  $userNode.classList.add('testimonials-card__user');

  const $userImageNode = document.createElement('img');
  $userImageNode.classList.add('testimonials-card__user-img');
  $userImageNode.setAttribute('src', image);
  $userImageNode.setAttribute('alt', firstName);

  const $userInfoNode = document.createElement('div');
  $userInfoNode.classList.add('testimonials-card__user-info');

  const $userNameNode = document.createElement('div');
  $userNameNode.classList.add('testimonials-card__user-info-name');
  $userNameNode.textContent = firstName;

  const $userRoleNode = document.createElement('div');
  $userRoleNode.classList.add('testimonials-card__user-info-role');
  $userRoleNode.textContent = company.title;

  $userInfoNode.appendChild($userNameNode);
  $userInfoNode.appendChild($userRoleNode);
  $userNode.appendChild($userImageNode);
  $userNode.appendChild($userInfoNode);

  const $deleteButtonNode = document.createElement('button');
  $deleteButtonNode.classList.add('btn');
  $deleteButtonNode.classList.add('testimonials-card__btn');
  $deleteButtonNode.dataset.id = 'card-delete';
  $deleteButtonNode.textContent = 'Delete';

  $card.appendChild($titleNode);
  $card.appendChild($blockquoteNode);
  $card.appendChild($userNode);
  $card.appendChild($deleteButtonNode);

  return $card;
}

export function generateErrorMessage(message) {
  const $errorMessage = document.createElement('div');
  $errorMessage.classList.add('error-message');
  $errorMessage.textContent = message;

  return $errorMessage;
}

function generateQuotesSvg() {
  const $svgNode = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  $svgNode.classList.add('icon');
  $svgNode.setAttribute('viewBox', '0 0 21 17');
  $svgNode.setAttribute('fill', 'none');

  const $pathNode = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  $pathNode.setAttribute(
    'd',
    'M20.2037 0.503494V1.67715C18.5913 2.28393 17.3278 3.24202 16.413 4.5514C15.4983 5.84481 15.041 7.19411 15.041 8.5993C15.041 8.9027 15.0875 9.12625 15.1805 9.26996C15.2425 9.36577 15.3123 9.41367 15.3898 9.41367C15.4673 9.41367 15.5836 9.35779 15.7386 9.24601C16.2348 8.87874 16.8627 8.69511 17.6224 8.69511C18.5061 8.69511 19.289 9.07036 19.9712 9.82086C20.6534 10.5554 20.9944 11.4336 20.9944 12.4556C20.9944 13.5254 20.5991 14.4676 19.8084 15.2819C19.0332 16.0963 18.0875 16.5035 16.9712 16.5035C15.6689 16.5035 14.5448 15.9526 13.5991 14.8508C12.6534 13.749 12.1805 12.272 12.1805 10.4197C12.1805 8.26397 12.8239 6.33184 14.1107 4.62325C15.3975 2.91467 17.4286 1.54142 20.2037 0.503494ZM9.0177 0.503494V1.67715C7.4053 2.28393 6.14173 3.24202 5.227 4.5514C4.31228 5.84481 3.85491 7.19411 3.85491 8.5993C3.85491 8.9027 3.90142 9.12625 3.99445 9.26996C4.05646 9.36577 4.12623 9.41367 4.20375 9.41367C4.28127 9.41367 4.39755 9.35779 4.55259 9.24601C5.04871 8.87874 5.67662 8.69511 6.43631 8.69511C7.32003 8.69511 8.10297 9.07036 8.78514 9.82086C9.46731 10.5554 9.8084 11.4336 9.8084 12.4556C9.8084 13.5254 9.41305 14.4676 8.62235 15.2819C7.84716 16.0963 6.90142 16.5035 5.78514 16.5035C4.48282 16.5035 3.35879 15.9526 2.41305 14.8508C1.46731 13.749 0.994446 12.272 0.994446 10.4197C0.994446 8.26397 1.63786 6.33184 2.92468 4.62325C4.2115 2.91467 6.24251 1.54142 9.0177 0.503494Z'
  );
  $pathNode.setAttribute('fill', '#D7FFDA');
  $svgNode.appendChild($pathNode);

  return $svgNode;
}
