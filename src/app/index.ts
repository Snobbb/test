const overlay: any = document.getElementById("overlay"),
  openButton: HTMLElement | null = document.getElementById(
    "openOverlayPopupButton"
  ),
  closeButton: HTMLElement | null = document.getElementById(
    "closeOverlayPopupButton"
  );

openButton?.addEventListener("click", () => {
  overlay.showModal();
});

closeButton?.addEventListener("click", () => {
  overlay.close();
});

overlay?.addEventListener("click", ({ currentTarget, target }) => {
  if (target === currentTarget) {
    currentTarget.close();
  }
});

alert(`Некоторые решения были заведомо сделаны костыльными способами(из рода пробелы между элементами margin-ами), в угоду pixel perfect и не идеальности фигмыы. 

На реальных проектах такие костыли бы не делал.

Также картинку добавил ипровизируя, т.к считаю, что на реальном проекте нет смысла подгружать по сути три одинаковых картинки, которые просто подогнаны под определенные разрешения, тем самым ухудшая оптимизацию сайта и замедляя его загрузку.`);
