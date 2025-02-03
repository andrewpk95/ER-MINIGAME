const GenerateMinigameElement = ({ Title, Desc, PlayUrl, PreviewImageUrl }) => `
<a class="minigame_item" href="${PlayUrl}" rel="noopener noreferrer" target="_blank">
    <div class="minigame_thumbnail">
        <img src="${PreviewImageUrl}" />
    </div>
    <div class="minigame_info">
        <div class="minigame_info_box">
            <strong class="minigame_title">${Title}</strong>
            <div class="minigame_description">
                <span class="minigame_text">설명: ${Desc}</span>
            </div>
        </div>
    </div>
</a>
`;

const fetchGameData = async () => {
  const response = await fetch("https://api.runelightentertainment.com/game/list/");

  return response.json();
}

const fetchMockGameData = async () => {
  return [
    {
      Title: "FLAPPY WILSON",
      Desc: "설명",
      PlayUrl: "https://er-minigame.runelightentertainment.com/FLAPPY-WILSON",
      PreviewImageUrl: "https://er-minigame.runelightentertainment.com/FLAPPY-WILSON/img/og-image.jpg"
    },
    {
      Title: "FLAPPY WILSON",
      Desc: "설명",
      PlayUrl: "https://er-minigame.runelightentertainment.com/FLAPPY-WILSON",
      PreviewImageUrl: "https://er-minigame.runelightentertainment.com/FLAPPY-WILSON/img/og-image.jpg"
    }
  ]
}

async function main() {
  const div = document.querySelector('#main');

  if (!div) {
    return;
  }
  const view = div.querySelector('.minigame_view');
  const data = await fetchMockGameData();

  data.forEach((info) => {
    view.insertAdjacentHTML('beforebegin', GenerateMinigameElement(info));
  });
}

window.addEventListener('load', main, { once: true });