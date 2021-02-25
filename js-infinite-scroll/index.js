import "./style.css";
import renderList from "./listRenderer";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

const onScroll = e => {
  // do something (hint: e.target.scrollingElement)
  console.dir(e.target.scrollingElement);
  const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
  if (scrollTop + clientHeight === scrollHeight) {
    fetchMore();
  }
};

document.addEventListener("scroll", onScroll);
fetchMore();
