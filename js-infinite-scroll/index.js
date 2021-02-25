import './style.css';
import renderList from './listRenderer';
// import { debounce } from "./util";

const app = document.querySelector('#app');
const fetchMoreTrigger = document.querySelector('#fetchMore');
let page = 0;

const fetchMore = async () => {
	const target = page ? fetchMoreTrigger : app;
	target.classList.add('loading');
	await renderList(page++);
	target.classList.remove('loading');
};

// const onScroll = e => {
//   // do something (hint: e.target.scrollingElement)
//   console.dir(e.target.scrollingElement);
//   const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
//   console.log(scrollTop);
//   if (scrollTop + clientHeight === scrollHeight) {
//     fetchMore();
//   }
// };

// document.addEventListener("scroll", debounce(onScroll, 300));
// fetchMore();

const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
	// console.log(entry);
	//isIntersecting: false
	//isVisible: false
	if (isIntersecting) fetchMore();
});
fetchMoreObserver.observe(fetchMoreTrigger);

fetchMore();
