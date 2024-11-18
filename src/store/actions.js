function getRandomURL() {
  const randomString =
    Math.random().toString(32).slice(2, 5);

  return randomString;
}


export function add(state, action) {
  const url = action.data;
  const shortUrl = getRandomURL();

  const newItem = {
    url: url.toString(),
    shortUrl: shortUrl,
    views: 0,
  };

  // Agregar al estado y guardar en localStorage
  const updateItems = [newItem, ...state.items];
  localStorage.setItem("shortenedUrls", JSON.stringify(updateItems));

  return { items: updateItems };
}

export function load(state, action) {
  const data = localStorage.getItem("shortenedUrls");

  if (data) {
    const temp = JSON.parse(data);
    return {
      items: [...temp]
    };
  }
  // Si no hay datos, retorna el estado inicial
  return { items: [] };

}

export function addView(state, action) {
  const data = localStorage.getItem("shortenedUrls");
  if (data) {
    const items = JSON.parse(data);
    const item = items.find(i => i.shortUrl === action.data);
    item.views++;
    localStorage.setItem("shortenedUrls", JSON.stringify(items));
    return { items: [...items] };
  }
}