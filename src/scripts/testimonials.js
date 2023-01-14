import { ApiService } from './services';
import { initializeSwiper } from './swiper';
import {
  clearCache,
  readFromCache,
  writeToCache,
  generateCardTemplate,
  generateErrorMessage,
} from './utils';

const MAX_VISIBLE_CARDS = 3;
const isMobile = window.innerWidth <= 768;

const state = {
  posts: [],
  isError: false,
  errorMessage: 'Could not fetch posts',
  // loading etc...
};

const isError = () => state.isError;
const setError = (isError, message = state.errorMessage) => {
  state.isError = isError;
  state.errorMessage = message;
};
const setPosts = (posts) => {
  writeToCache('posts', posts);
  state.posts = posts;
};

const $cardsContainer = document.querySelector('[data-id="cards-container"]');
const $cardsRefetch = document.querySelector('[data-id="cards-refetch"]');

(async function () {
  if (isMobile) {
    initializeSwiper();
  }
  await fetchPosts();
  renderCards();
})();

async function fetchPosts() {
  const cachedPosts = readFromCache('posts');
  if (cachedPosts && cachedPosts.length) {
    setPosts(cachedPosts);
    return;
  }
  const { posts: postsData, isError } = await ApiService.fetchPosts(
    MAX_VISIBLE_CARDS
  );
  if (isError) {
    setError(true);
    return;
  }
  const formattedPosts = await getPostsWithUserData(postsData);
  setPosts(formattedPosts);
}

async function getPostsWithUserData(posts) {
  const formattedPosts = [];

  for (let post of posts) {
    const { user, isError } = await ApiService.fetchUser(post.userId);
    if (isError) {
      setError(true, 'Could not fetch user data');
      return formattedPosts;
    }
    formattedPosts.push({ ...post, user });
  }

  return formattedPosts;
}

function renderCards() {
  refreshCardsTemplate();

  if (isError()) {
    const $errorMessage = generateErrorMessage(state.errorMessage);
    $cardsContainer.appendChild($errorMessage);
    return;
  }

  state.posts.forEach((post, index) => {
    const $card = generateCardTemplate(post);
    $card.classList.add('swiper-slide');
    $card.dataset.index = index;

    $cardsContainer.appendChild($card);
  });
}

function refreshCardsTemplate() {
  $cardsContainer.replaceChildren();
}

function deletePost(index) {
  const updatedPosts = state.posts.filter((_post, i) => i !== +index);
  setPosts(updatedPosts);

  renderCards();
}

$cardsContainer.onclick = (event) => {
  const $cardDeleteButton = event.target.closest('[data-id="card-delete"]');
  const $card = event.target.closest('.testimonials-card');

  if (event.target === $cardDeleteButton) deletePost($card.dataset.index);
};

$cardsRefetch.onclick = async () => {
  clearCache();
  await fetchPosts();

  renderCards();
};
