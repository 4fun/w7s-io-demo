const output = document.querySelector("#output");

const show = (value) => {
  output.textContent = typeof value === "string" ? value : JSON.stringify(value, null, 2);
};

const callApi = async (path) => {
  show(`Calling ${path}...`);
  const response = await fetch(path, {
    headers: {
      accept: "application/json"
    }
  });
  const text = await response.text();
  let payload = text;
  try {
    payload = JSON.parse(text);
  } catch {}
  show({
    status: response.status,
    payload
  });
};

document.querySelector("#hello").addEventListener("click", () => {
  void callApi("api/hello");
});

document.querySelector("#time").addEventListener("click", () => {
  void callApi("api/time");
});

