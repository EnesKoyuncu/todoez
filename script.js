// formu buluyoruz tanimliyoruz
const todoForm = document.querySelector(".addTodoMission");

// inputu buluyoruz tanimliyoruz
const taskInput = document.getElementById("addMission");

// listeleri buluyoruz tanimliyoruz
const todoList = document.getElementById("todoList");
const doingList = document.getElementById("doingList");
const doneList = document.getElementById("doneList");

// Ayarlar panelini ve paneli kontrol eden arayuz elemanlarini yakalar. madeByCodex
const settingsButton = document.getElementById("settingsButton");
const closeSettingsButton = document.getElementById("closeSettingsButton");
const settingsOverlay = document.getElementById("settingsOverlay");
const settingsPanel = document.getElementById("settingsPanel");
const trashDropZone = document.getElementById("trashDropZone");
const taskExtrasOverlay = document.getElementById("taskExtrasOverlay");
const taskExtrasModal = document.getElementById("taskExtrasModal");
const taskExtrasTitle = document.getElementById("taskExtrasTitle");
const closeTaskExtrasButton = document.getElementById("closeTaskExtrasButton");
const taskExtrasHome = document.getElementById("taskExtrasHome");
const taskTimerView = document.getElementById("taskTimerView");
const taskColorView = document.getElementById("taskColorView");
const taskDescriptionView = document.getElementById("taskDescriptionView");
const openTimerButton = document.getElementById("openTimerButton");
const openColorButton = document.getElementById("openColorButton");
const openDescriptionButton = document.getElementById("openDescriptionButton");
const backToExtrasButton = document.getElementById("backToExtrasButton");
const backFromColorButton = document.getElementById("backFromColorButton");
const backFromDescriptionButton = document.getElementById(
  "backFromDescriptionButton",
);
const timerForm = document.getElementById("timerForm");
const timerDaysInput = document.getElementById("timerDays");
const timerHoursInput = document.getElementById("timerHours");
const timerMinutesInput = document.getElementById("timerMinutes");
const timerDateInput = document.getElementById("timerDate");
const timerHourInput = document.getElementById("timerHour");
const timerMinuteInput = document.getElementById("timerMinute");
const clearTimerButton = document.getElementById("clearTimerButton");
const timerStatus = document.getElementById("timerStatus");
const timerModeInputs = document.querySelectorAll('input[name="timerMode"]');
const colorSwatches = document.querySelectorAll(".color-swatch");
const customTaskColorInput = document.getElementById("customTaskColor");
const clearColorButton = document.getElementById("clearColorButton");
const descriptionForm = document.getElementById("descriptionForm");
const taskDescriptionInput = document.getElementById("taskDescription");
const clearDescriptionButton = document.getElementById(
  "clearDescriptionButton",
);
const descriptionCharacterCount = document.getElementById(
  "descriptionCharacterCount",
);
const descriptionStatus = document.getElementById("descriptionStatus");
const modeInputs = document.querySelectorAll('input[name="interactionMode"]');
const focusModeToggle = document.getElementById("focusModeToggle");
const languageSettingsToggle = document.getElementById("languageSettingsToggle");
const languageSettingsContent = document.getElementById("languageSettingsContent");
const activeLanguageName = document.getElementById("activeLanguageName");
const closeLanguageDialog = document.getElementById("closeLanguageDialog");
const languageHome = document.getElementById("languageHome");
const languageSelect = document.getElementById("languageSelect");
const languageCards = document.getElementById("languageCards");
const editLanguageButton = document.getElementById("editLanguageButton");
const addLanguageButton = document.getElementById("addLanguageButton");
const addContentTextButton = document.getElementById("addContentTextButton");
const newLanguageForm = document.getElementById("newLanguageForm");
const newLanguageName = document.getElementById("newLanguageName");
const newLanguageStatus = document.getElementById("newLanguageStatus");
const translationEditor = document.getElementById("translationEditor");
const translationLanguageName = document.getElementById("translationLanguageName");
const translationProgress = document.getElementById("translationProgress");
const translationList = document.getElementById("translationList");
const translationStatus = document.getElementById("translationStatus");
const contentTextForm = document.getElementById("contentTextForm");
const contentTextKey = document.getElementById("contentTextKey");
const contentEnglishText = document.getElementById("contentEnglishText");
const contentLanguageInputs = document.getElementById("contentLanguageInputs");
const contentTextStatus = document.getElementById("contentTextStatus");

const languageStorageKey = "todoezLanguage";
const customLanguagesStorageKey = "todoezCustomLanguages";
const translationOverridesStorageKey = "todoezTranslationOverrides";
const customSourceStringsStorageKey = "todoezCustomSourceStrings";
const englishStrings = TODOEZ_TRANSLATIONS.en.strings;
let customSourceStrings = JSON.parse(
  localStorage.getItem(customSourceStringsStorageKey) || "{}",
);
Object.assign(englishStrings, customSourceStrings);
let customLanguages = JSON.parse(
  localStorage.getItem(customLanguagesStorageKey) || "{}",
);
let translationOverrides = JSON.parse(
  localStorage.getItem(translationOverridesStorageKey) || "{}",
);
let activeLanguage = localStorage.getItem(languageStorageKey) || "en";
let editedLanguageCode = null;

// The language manager is a full-screen workspace, independent from the drawer.
document.body.append(languageSettingsContent);

function getLanguages() {
  return { ...TODOEZ_TRANSLATIONS, ...customLanguages };
}

function getLanguageStrings(languageCode = activeLanguage) {
  const language = getLanguages()[languageCode] || TODOEZ_TRANSLATIONS.en;
  return {
    ...englishStrings,
    ...language.strings,
    ...(translationOverrides[languageCode] || {}),
  };
}

function translate(key, variables = {}) {
  const template = getLanguageStrings()[key] || englishStrings[key] || key;
  return Object.entries(variables).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    template,
  );
}

const staticTranslationSelectors = {
  timer: ["#taskTimerView .task-extras-eyebrow"],
  timerHelp: ["#taskTimerView .task-timer-view-header p"],
  setBy: ["#timerForm legend"],
  duration: ['label:has(input[name="timerMode"][value="duration"]) span'],
  dateTime: ['label:has(input[name="timerMode"][value="date"]) span'],
  days: ["#timerDays + *", ".timer-inputs label:nth-child(1) > span"],
  hours: [".timer-inputs label:nth-child(2) > span"],
  minutes: [".timer-inputs label:nth-child(3) > span"],
  endsAt: [".timer-date-input > span:first-child"],
  time: [".timer-time-label"],
  clear: ["#clearTimerButton"],
  startTimer: ["#timerForm button[type='submit']"],
  backgroundColor: ["#taskColorView .task-extras-eyebrow"],
  chooseColor: ["#taskColorView .task-timer-view-header p"],
  presets: ["#taskColorView .task-color-options > span"],
  customColor: [".custom-color-input > span"],
  useDefaultWhite: ["#clearColorButton"],
  description: ["#taskDescriptionView .task-extras-eyebrow"],
  descriptionHelp: ["#taskDescriptionView .task-timer-view-header p"],
  taskDescription: ["label[for='taskDescription']"],
  plainText: [".description-writing-hint"],
  remove: ["#clearDescriptionButton"],
  save: [".description-save-button"],
  addMissionLabel: ["label[for='addMission']"],
  add: ["#addMissionButton"],
  todo: [".todo-section h2"],
  doing: [".doing-section h2"],
  done: [".done-section h2"],
  dropToDelete: ["#trashDropZone span"],
};

function applyTranslations() {
  document.documentElement.lang = activeLanguage.split("-")[0];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.title = translate(element.dataset.i18nTitle);
  });
  Object.entries(staticTranslationSelectors).forEach(([key, selectors]) => {
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        const icon = element.querySelector(":scope > i");
        if (icon) {
          Array.from(element.childNodes)
            .filter((node) => node !== icon)
            .forEach((node) => node.remove());
          element.append(document.createTextNode(` ${translate(key)}`));
        } else {
          element.textContent = translate(key);
        }
      });
    });
  });
  taskDescriptionInput.placeholder = translate("descriptionPlaceholder");
  timerHourInput.setAttribute("aria-label", translate("hour"));
  timerMinuteInput.setAttribute("aria-label", translate("minute"));
  document
    .querySelector(".color-swatches")
    ?.setAttribute("aria-label", translate("presetTaskColors"));
  ["white", "blue", "yellow", "green", "pink", "darkGray"].forEach(
    (key, index) => {
      colorSwatches[index]?.setAttribute("aria-label", translate(key));
    },
  );
  document.querySelectorAll(".task-navigation-button").forEach((button) => {
    button.setAttribute("aria-label", translate("backToTaskExtras"));
    button.title = translate("backToTaskExtras");
  });
  activeLanguageName.textContent = getLanguages()[activeLanguage].languageName;
  if (activeTaskExtras) {
    taskExtrasTitle.textContent = activeTaskExtras.text;
  }
}

// Secilen gorev tasima yontemini tarayicida kalici olarak saklar. madeByCodex
const interactionModeKey = "interactionMode";
let interactionMode = localStorage.getItem(interactionModeKey) || "buttons";

// Focus efektinin kullanici tercihine gore acik veya kapali baslamasini saglar. madeByCodex
const focusModeKey = "focusModeEnabled";
let isFocusModeEnabled = localStorage.getItem(focusModeKey) !== "false";
focusModeToggle.checked = isFocusModeEnabled;
let touchDragState = null;
let activeTaskExtras = null;
let timerInterval;

for (let hour = 0; hour < 24; hour += 1) {
  timerHourInput.add(new Option(String(hour).padStart(2, "0"), hour));
}

for (let minute = 0; minute < 60; minute += 1) {
  timerMinuteInput.add(new Option(String(minute).padStart(2, "0"), minute));
}

function showTaskExtrasHome() {
  taskExtrasHome.hidden = false;
  taskTimerView.hidden = true;
  taskColorView.hidden = true;
  taskDescriptionView.hidden = true;
}

function showTaskTimerView() {
  taskExtrasHome.hidden = true;
  taskTimerView.hidden = false;
  taskColorView.hidden = true;
  taskDescriptionView.hidden = true;
  const selectedMode = document.querySelector(
    'input[name="timerMode"]:checked',
  ).value;
  (selectedMode === "date" ? timerDateInput : timerDaysInput).focus();
}

function showTaskColorView() {
  taskExtrasHome.hidden = true;
  taskTimerView.hidden = true;
  taskColorView.hidden = false;
  taskDescriptionView.hidden = true;
  customTaskColorInput.focus();
}

function updateDescriptionCharacterCount() {
  descriptionCharacterCount.textContent = `${taskDescriptionInput.value.length} / 1000`;
}

function showTaskDescriptionView() {
  taskExtrasHome.hidden = true;
  taskTimerView.hidden = true;
  taskColorView.hidden = true;
  taskDescriptionView.hidden = false;
  descriptionStatus.textContent = "";
  taskDescriptionInput.focus();
}

function getContrastTextColor(color) {
  const channels = color
    .slice(1)
    .match(/.{2}/g)
    .map((channel) => Number.parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
    );
  const luminance =
    0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];

  return luminance > 0.42 ? "#111827" : "#ffffff";
}

function getTaskFocusColor(backgroundColor) {
  const channels = backgroundColor
    .slice(1)
    .match(/.{2}/g)
    .map((channel) => Number.parseInt(channel, 16));
  const backgroundTextColor = getContrastTextColor(backgroundColor);
  const target = backgroundTextColor === "#ffffff" ? 255 : 17;
  const mixAmount = 0.48;

  return `#${channels
    .map((channel) =>
      Math.round(channel + (target - channel) * mixAmount)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}

function getContrastRatio(firstColor, secondColor) {
  const getLuminance = (color) => {
    const channels = color
      .slice(1)
      .match(/.{2}/g)
      .map((channel) => Number.parseInt(channel, 16) / 255)
      .map((channel) =>
        channel <= 0.03928
          ? channel / 12.92
          : ((channel + 0.055) / 1.055) ** 2.4,
      );

    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  };

  const firstLuminance = getLuminance(firstColor);
  const secondLuminance = getLuminance(secondColor);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

function getColorDistance(firstColor, secondColor) {
  const first = firstColor
    .slice(1)
    .match(/.{2}/g)
    .map((channel) => Number.parseInt(channel, 16));
  const second = secondColor
    .slice(1)
    .match(/.{2}/g)
    .map((channel) => Number.parseInt(channel, 16));

  return Math.hypot(
    first[0] - second[0],
    first[1] - second[1],
    first[2] - second[2],
  );
}

function getComplementaryColor(color) {
  const channels = color
    .slice(1)
    .match(/.{2}/g)
    .map((channel) => 255 - Number.parseInt(channel, 16));

  return `#${channels.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
}

function getReadableComplementaryColor(color) {
  const complementaryColor = getComplementaryColor(color);

  return getContrastRatio(complementaryColor, "#ffffff") >= 3
    ? complementaryColor
    : "#0f172a";
}

function getTaskActionColors(backgroundColor, defaultColors) {
  const colors = { ...defaultColors };

  if (!backgroundColor) {
    return { colors, adjustedAction: null };
  }

  const closestAction = Object.entries(defaultColors).reduce(
    (closest, [action, color]) => {
      const distance = getColorDistance(backgroundColor, color);
      return distance < closest.distance ? { action, distance } : closest;
    },
    { action: null, distance: Number.POSITIVE_INFINITY },
  );

  if (closestAction.distance < 105) {
    colors[closestAction.action] =
      getReadableComplementaryColor(backgroundColor);
  }

  return {
    colors,
    adjustedAction: closestAction.distance < 105 ? closestAction.action : null,
  };
}

function updateColorSelection(color) {
  colorSwatches.forEach((swatch) => {
    swatch.classList.toggle("is-selected", swatch.dataset.color === color);
  });
  customTaskColorInput.value = color;
}

function applyTaskColor(color) {
  if (!activeTaskExtras) {
    return;
  }

  const task = tasks.find(
    (currentTask) => currentTask.id === activeTaskExtras.id,
  );

  if (!task) {
    return;
  }

  if (color === "#ffffff") {
    delete task.backgroundColor;
    delete task.textColor;
  } else {
    task.backgroundColor = color;
    task.textColor = getContrastTextColor(color);
  }
  updateColorSelection(color);
  saveTasks();
  renderTasks();
}

function formatDateLocal(timestamp) {
  const date = new Date(timestamp);
  const pad = (value) => String(value).padStart(2, "0");

  return {
    date: `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

function getRemainingSeconds(task) {
  if (!task.timerEndsAt) {
    return null;
  }

  return Math.max(0, Math.ceil((task.timerEndsAt - Date.now()) / 1000));
}

function formatTimer(seconds) {
  if (seconds === null) {
    return "";
  }

  if (seconds === 0) {
    return translate("timeUp");
  }

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (seconds < 3600) {
    if (minutes === 0) {
      return `${remainingSeconds}${translate("secondShort")}`;
    }

    return `${minutes}${translate("minuteShort")} ${String(remainingSeconds).padStart(2, "0")}${translate("secondShort")}`;
  }

  return [
    days ? `${days}${translate("dayShort")}` : "",
    hours ? `${hours}${translate("hourShort")}` : "",
    minutes ? `${minutes}${translate("minuteShort")}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function updateTimerDisplays() {
  document.querySelectorAll("[data-timer-task-id]").forEach((timerElement) => {
    const task = tasks.find(
      (currentTask) =>
        String(currentTask.id) === timerElement.dataset.timerTaskId,
    );

    if (!task) {
      return;
    }

    const seconds = getRemainingSeconds(task);
    timerElement.textContent = formatTimer(seconds);
    timerElement.classList.toggle("is-expired", seconds === 0);
  });

  if (activeTaskExtras) {
    const seconds = getRemainingSeconds(activeTaskExtras);
    timerStatus.textContent =
      seconds === null
        ? translate("noTimerSet")
        : translate("remaining", { time: formatTimer(seconds) });
  }
}

function startTimerUpdates() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimerDisplays, 1000);
}

function setTimerInputMode(mode) {
  document
    .querySelector(".timer-form")
    .classList.toggle("is-date-mode", mode === "date");
}

// Focus ayari degistiginde tercihi kaydeder ve aktif odak efektini gerekirse temizler. madeByCodex
focusModeToggle.addEventListener("change", () => {
  isFocusModeEnabled = focusModeToggle.checked;
  localStorage.setItem(focusModeKey, String(isFocusModeEnabled));

  if (!isFocusModeEnabled) {
    document.body.classList.remove("task-focus-active");
    document
      .querySelectorAll(".tasks-section li.is-focused")
      .forEach((task) => {
        task.classList.remove("is-focused");
      });
  }
});

// Ayarlar panelindeki radio secimini kayitli moda gore baslatir. madeByCodex
modeInputs.forEach((input) => {
  input.checked = input.value === interactionMode;
});

// Kullanici mod degistirdiginde ayari kaydeder ve gorevleri yeni moda gore cizer. madeByCodex
modeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    interactionMode = input.value;
    localStorage.setItem(interactionModeKey, interactionMode);
    updateModeInterface();
    renderTasks();
  });
});

// Suruklenen gorevin kimligini tarayici aktarim verisine yazar. madeByCodex
function handleDragStart(e, task) {
  e.dataTransfer.setData("text/plain", String(task.id));
  e.dataTransfer.effectAllowed = "move";
  e.currentTarget.classList.add("is-dragging");
  trashDropZone.classList.add("is-visible");
  trashDropZone.setAttribute("aria-hidden", "false");
}

// Surukleme bittiginde gorevin gecici suruklenme gorunumunu kaldirir. madeByCodex
function handleDragEnd(e) {
  e.currentTarget.classList.remove("is-dragging");
  trashDropZone.classList.remove("is-visible", "is-drag-over");
  trashDropZone.setAttribute("aria-hidden", "true");
}

// Bir gorev kolonun uzerindeyken birakma isleminin yapilabilmesini saglar. madeByCodex
function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add("is-drag-over");
  e.dataTransfer.dropEffect = "move";
}

// Birakilan gorevi hedef kolonun durumuna tasiyip listeyi yeniler. madeByCodex
function handleDrop(e, status) {
  e.preventDefault();
  e.currentTarget.classList.remove("is-drag-over");

  const taskId = Number(e.dataTransfer.getData("text/plain"));
  const task = tasks.find((currentTask) => currentTask.id === taskId);

  if (!task) {
    return;
  }

  task.status = status;
  saveTasks();
  renderTasks();
}

// Imlec kolonun disina ciktiginda hedef kolonun vurgusunu kaldirir. madeByCodex
function handleDragLeave(e) {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    e.currentTarget.classList.remove("is-drag-over");
  }
}

// Suruklenen gorev cop kutusuna geldiginde silme alanini vurgular. madeByCodex
function handleTrashDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add("is-drag-over");
  e.dataTransfer.dropEffect = "move";
}

// Cop kutusuna birakilan gorevi listeden ve localStorage'dan kaldirir. madeByCodex
function handleTrashDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove("is-drag-over");

  const taskId = Number(e.dataTransfer.getData("text/plain"));
  tasks = tasks.filter((task) => task.id !== taskId);
  saveTasks();
  renderTasks();
}

// Surukleme cop kutusundan ayrilinca gecici vurguyu kaldirir. madeByCodex
function handleTrashDragLeave(e) {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    e.currentTarget.classList.remove("is-drag-over");
  }
}

// Parmagin altindaki sectioni ilgili liste veya cop kutusu hedefiyle eslestirir. madeByCodex
function getTouchDropTarget(clientX, clientY) {
  const element = document.elementFromPoint(clientX, clientY);

  if (!element) {
    return null;
  }

  const trashTarget = element.closest("#trashDropZone");

  if (trashTarget) {
    return trashTarget;
  }

  const section = element.closest(".tasks-section section");
  return section?.querySelector("ul") || null;
}

// Dokunmatik cihazda surukleme baslangicini ve hareket esigini takip eder. madeByCodex
function handleTouchPointerDown(e, task) {
  if (
    e.pointerType === "mouse" ||
    interactionMode !== "dragdrop" ||
    e.target.closest("button")
  ) {
    return;
  }

  touchDragState = {
    task,
    element: e.currentTarget,
    pointerId: e.pointerId,
    startX: e.clientX,
    startY: e.clientY,
    isDragging: false,
  };
}

// Dokunmatik surukleme sirasinda parmak altindaki kolonu veya cop kutusunu belirler. madeByCodex
function handleTouchPointerMove(e) {
  if (!touchDragState || touchDragState.pointerId !== e.pointerId) {
    return;
  }

  const distance = Math.hypot(
    e.clientX - touchDragState.startX,
    e.clientY - touchDragState.startY,
  );

  if (!touchDragState.isDragging && distance < 8) {
    return;
  }

  e.preventDefault();

  if (!touchDragState.isDragging) {
    touchDragState.isDragging = true;
    touchDragState.element.classList.add("is-dragging");
    trashDropZone.classList.add("is-visible");
    trashDropZone.setAttribute("aria-hidden", "false");
  }

  document.querySelectorAll(".is-drag-over").forEach((element) => {
    element.classList.remove("is-drag-over");
  });

  const dropTarget = getTouchDropTarget(e.clientX, e.clientY);
  dropTarget?.classList.add("is-drag-over");
}

// Dokunmatik surukleme bittiginde gorevi secilen kolona veya cop kutusuna birakir. madeByCodex
function handleTouchPointerUp(e) {
  if (!touchDragState || touchDragState.pointerId !== e.pointerId) {
    return;
  }

  const { element, task, isDragging } = touchDragState;
  const dropTarget = getTouchDropTarget(e.clientX, e.clientY);

  if (isDragging && dropTarget) {
    if (dropTarget.id === "trashDropZone") {
      tasks = tasks.filter((currentTask) => currentTask.id !== task.id);
    } else {
      task.status = dropTarget.id.replace("List", "");
    }

    saveTasks();
    renderTasks();
  }

  element.classList.remove("is-dragging");
  document.querySelectorAll(".is-drag-over").forEach((dropZone) => {
    dropZone.classList.remove("is-drag-over");
  });
  trashDropZone.classList.remove("is-visible", "is-drag-over");
  trashDropZone.setAttribute("aria-hidden", "true");
  touchDragState = null;
}

// Dokunmatik cihazlar icin surukleme hareketlerini uygulama seviyesinde dinler. madeByCodex
document.addEventListener("pointermove", handleTouchPointerMove, {
  passive: false,
});
document.addEventListener("pointerup", handleTouchPointerUp);
document.addEventListener("pointercancel", handleTouchPointerUp);

// Uc gorev listesini kendi durumlarini kabul eden surukle-birak alanlarina donusturur. madeByCodex
todoList.addEventListener("dragover", handleDragOver);
todoList.addEventListener("dragleave", handleDragLeave);
todoList.addEventListener("drop", (e) => handleDrop(e, "todo"));
doingList.addEventListener("dragover", handleDragOver);
doingList.addEventListener("dragleave", handleDragLeave);
doingList.addEventListener("drop", (e) => handleDrop(e, "doing"));
doneList.addEventListener("dragover", handleDragOver);
doneList.addEventListener("dragleave", handleDragLeave);
doneList.addEventListener("drop", (e) => handleDrop(e, "done"));
trashDropZone.addEventListener("dragover", handleTrashDragOver);
trashDropZone.addEventListener("dragleave", handleTrashDragLeave);
trashDropZone.addEventListener("drop", handleTrashDrop);

// localStorage'daki kayitli taskleri aliyoruz
const savedTasks = localStorage.getItem("tasks");
let tasks = savedTasks ? JSON.parse(savedTasks) : [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveLanguageData() {
  localStorage.setItem(customLanguagesStorageKey, JSON.stringify(customLanguages));
  localStorage.setItem(
    translationOverridesStorageKey,
    JSON.stringify(translationOverrides),
  );
}

function populateLanguageSelect() {
  languageSelect.innerHTML = "";
  languageCards.innerHTML = "";
  Object.entries(getLanguages()).forEach(([code, language]) => {
    const option = new Option(language.languageName, code);
    option.selected = code === activeLanguage;
    languageSelect.add(option);

    const card = document.createElement("button");
    card.type = "button";
    card.className = "language-card";
    card.classList.toggle("is-active", code === activeLanguage);
    card.dataset.languageCode = code;
    card.setAttribute("aria-pressed", String(code === activeLanguage));
    const mark = document.createElement("span");
    mark.className = "language-card-mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = language.languageName.trim().slice(0, 2).toUpperCase();
    const copy = document.createElement("span");
    copy.className = "language-card-copy";
    const name = document.createElement("strong");
    name.textContent = language.languageName;
    const codeLabel = document.createElement("small");
    codeLabel.textContent = code.startsWith("custom-")
      ? translate("customLanguageBadge")
      : code.toUpperCase();
    copy.append(name, codeLabel);
    const check = document.createElement("span");
    check.className = "language-card-check";
    check.setAttribute("aria-hidden", "true");
    check.innerHTML = '<i class="bi bi-check-lg"></i>';
    card.append(mark, copy, check);
    card.addEventListener("click", () => setActiveLanguage(code));
    languageCards.append(card);
  });
}

function showLanguageView(view) {
  languageHome.hidden = view !== "home";
  newLanguageForm.hidden = view !== "new";
  translationEditor.hidden = view !== "editor";
  contentTextForm.hidden = view !== "content";
  newLanguageStatus.textContent = "";
  translationStatus.textContent = "";
}

function updateTranslationProgress() {
  const inputs = Array.from(translationList.querySelectorAll("input"));
  const completed = inputs.filter((input) => input.value.trim()).length;
  translationProgress.textContent = translate("translationProgress", {
    completed,
    total: inputs.length,
  });
}

function openTranslationEditor(languageCode, languageNameOverride) {
  editedLanguageCode = languageCode;
  const language = getLanguages()[languageCode];
  const values = language ? getLanguageStrings(languageCode) : {};
  translationLanguageName.textContent =
    languageNameOverride || language?.languageName || "";
  translationList.innerHTML = "";

  Object.entries(englishStrings).forEach(([key, englishText]) => {
    const row = document.createElement("label");
    row.className = "translation-row";
    const source = document.createElement("span");
    source.className = "translation-source";
    source.textContent = englishText;
    const input = document.createElement("input");
    input.type = "text";
    input.dataset.translationKey = key;
    input.value = languageCode === "en" ? englishText : values[key] || "";
    input.placeholder = englishText;
    input.setAttribute("aria-label", `${translate("translatedText")}: ${englishText}`);
    row.append(source, input);
    translationList.append(row);
  });

  showLanguageView("editor");
  updateTranslationProgress();
  translationList.querySelector("input")?.focus();
}

function setActiveLanguage(languageCode) {
  if (!getLanguages()[languageCode]) {
    languageCode = "en";
  }
  activeLanguage = languageCode;
  localStorage.setItem(languageStorageKey, activeLanguage);
  populateLanguageSelect();
  applyTranslations();
  renderTasks();
  updateTimerDisplays();
}

function openLanguageWorkspace() {
  settingsPanel.classList.remove("is-open");
  settingsOverlay.classList.remove("is-visible");
  settingsPanel.setAttribute("aria-hidden", "true");
  settingsButton.setAttribute("aria-expanded", "false");
  languageSettingsContent.hidden = false;
  document.body.classList.add("language-workspace-open");
  languageSettingsToggle.setAttribute("aria-expanded", "true");
  showLanguageView("home");
  closeLanguageDialog.focus();
}

languageSettingsToggle.addEventListener("click", () => {
  window.location.hash = "language-settings";
  openLanguageWorkspace();
});

function closeLanguageSettings() {
  languageSettingsContent.hidden = true;
  document.body.classList.remove("language-workspace-open");
  languageSettingsToggle.setAttribute("aria-expanded", "false");
  languageSettingsToggle.classList.remove("is-open");
  settingsPanel.classList.remove("has-language-dialog");
  showLanguageView("home");
}

closeLanguageDialog.addEventListener("click", () => {
  closeLanguageSettings();
  window.history.replaceState(null, "", window.location.pathname);
  setSettingsPanelOpen(true);
  languageSettingsToggle.focus();
});

languageSelect.addEventListener("change", () => {
  setActiveLanguage(languageSelect.value);
});

editLanguageButton.addEventListener("click", () => {
  openTranslationEditor(activeLanguage);
});

addLanguageButton.addEventListener("click", () => {
  showLanguageView("new");
  newLanguageName.value = "";
  newLanguageName.focus();
});

function renderContentLanguageInputs() {
  contentLanguageInputs.innerHTML = "";
  Object.entries(getLanguages())
    .filter(([code]) => code !== "en")
    .forEach(([code, language]) => {
      const label = document.createElement("label");
      label.className = "content-language-field";
      const heading = document.createElement("span");
      const name = document.createElement("strong");
      name.textContent = language.languageName;
      const codeLabel = document.createElement("small");
      codeLabel.textContent = code.startsWith("custom-")
        ? translate("customLanguageBadge")
        : code.toUpperCase();
      heading.append(name, codeLabel);
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 240;
      input.dataset.languageCode = code;
      input.placeholder = language.languageName;
      label.append(heading, input);
      contentLanguageInputs.append(label);
    });
}

addContentTextButton.addEventListener("click", () => {
  contentTextForm.reset();
  contentTextStatus.textContent = "";
  renderContentLanguageInputs();
  showLanguageView("content");
  contentTextKey.focus();
});

document.querySelectorAll("[data-language-back]").forEach((button) => {
  button.addEventListener("click", () => showLanguageView("home"));
});

newLanguageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const languageName = newLanguageName.value.trim();
  if (!languageName) {
    newLanguageStatus.textContent = translate("languageNameRequired");
    return;
  }
  openTranslationEditor(`custom-${Date.now()}`, languageName);
});

translationList.addEventListener("input", updateTranslationProgress);
translationEditor.addEventListener("submit", (e) => {
  e.preventDefault();
  const strings = {};
  translationList.querySelectorAll("input").forEach((input) => {
    if (input.value.trim()) {
      strings[input.dataset.translationKey] = input.value.trim();
    }
  });

  const isNewLanguage = !getLanguages()[editedLanguageCode];
  if (isNewLanguage) {
    customLanguages[editedLanguageCode] = {
      languageName: translationLanguageName.textContent,
      strings,
    };
  } else {
    translationOverrides[editedLanguageCode] = strings;
  }
  saveLanguageData();
  populateLanguageSelect();
  setActiveLanguage(editedLanguageCode);
  showLanguageView("home");
});

contentTextForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const key = contentTextKey.value.trim();
  const englishText = contentEnglishText.value.trim();

  if (!/^[a-z][a-zA-Z0-9]*$/.test(key)) {
    contentTextStatus.textContent = translate("translationKeyRequired");
    contentTextKey.focus();
    return;
  }
  if (Object.prototype.hasOwnProperty.call(englishStrings, key)) {
    contentTextStatus.textContent = translate("translationKeyExists");
    contentTextKey.focus();
    return;
  }
  if (!englishText) {
    contentTextStatus.textContent = translate("englishTextRequired");
    contentEnglishText.focus();
    return;
  }

  customSourceStrings[key] = englishText;
  englishStrings[key] = englishText;
  translationOverrides.en = {
    ...(translationOverrides.en || {}),
    [key]: englishText,
  };
  contentLanguageInputs.querySelectorAll("input").forEach((input) => {
    const languageCode = input.dataset.languageCode;
    translationOverrides[languageCode] = {
      ...(translationOverrides[languageCode] || {}),
      [key]: input.value.trim() || englishText,
    };
  });
  localStorage.setItem(
    customSourceStringsStorageKey,
    JSON.stringify(customSourceStrings),
  );
  saveLanguageData();
  applyTranslations();
  contentTextStatus.textContent = translate("contentTextSaved");
  contentTextForm.reset();
  renderContentLanguageInputs();
});

// Ayarlar panelinin gorunurlugunu ve erisilebilirlik durumunu birlikte gunceller. madeByCodex
function setSettingsPanelOpen(isOpen) {
  settingsPanel.classList.toggle("is-open", isOpen);
  settingsOverlay.classList.toggle("is-visible", isOpen);
  settingsButton.setAttribute("aria-expanded", String(isOpen));
  settingsPanel.setAttribute("aria-hidden", String(!isOpen));
  if (!isOpen) {
    closeLanguageSettings();
  }
}

function setTaskExtrasOpen(task) {
  const isOpen = Boolean(task);
  activeTaskExtras = task || null;
  taskExtrasOverlay.classList.toggle("is-open", isOpen);
  taskExtrasOverlay.setAttribute("aria-hidden", String(!isOpen));

  if (isOpen) {
    taskExtrasTitle.textContent = task.text;
    showTaskExtrasHome();
    updateColorSelection(task.backgroundColor || "#ffffff");
    taskDescriptionInput.value = task.description || "";
    updateDescriptionCharacterCount();
    descriptionStatus.textContent = "";
    const timerMode = task.timerMode || "duration";
    timerModeInputs.forEach((input) => {
      input.checked = input.value === timerMode;
    });
    setTimerInputMode(timerMode);
    timerDaysInput.value = 0;
    timerHoursInput.value = 0;
    timerMinutesInput.value = 0;
    const savedDate = task.timerEndsAt
      ? formatDateLocal(task.timerEndsAt)
      : null;
    timerDateInput.value = savedDate?.date || "";
    timerHourInput.value = savedDate?.hour ?? 0;
    timerMinuteInput.value = savedDate?.minute ?? 0;
    timerStatus.textContent =
      getRemainingSeconds(task) === null
        ? translate("noTimerSet")
        : translate("remaining", {
            time: formatTimer(getRemainingSeconds(task)),
          });
    closeTaskExtrasButton.focus();

    if (window.gsap) {
      window.gsap.fromTo(
        taskExtrasModal,
        { y: 8, scale: 0.98, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.28, ease: "power2.out" },
      );
    }
  }
}

// Secilen moda gore cop kutusunun kullanilabilirlik durumunu ayarlar. madeByCodex
function updateModeInterface() {
  const isDragDropMode = interactionMode === "dragdrop";
  trashDropZone.classList.toggle("is-enabled", isDragDropMode);
  trashDropZone.classList.remove("is-visible", "is-drag-over");
  trashDropZone.setAttribute("aria-hidden", "true");
}

// Ayarlar panelini buton, arka plan ve Escape tusuyla acip kapatir. madeByCodex
settingsButton.addEventListener("click", () => setSettingsPanelOpen(true));
closeSettingsButton.addEventListener("click", () =>
  setSettingsPanelOpen(false),
);
settingsOverlay.addEventListener("click", () => setSettingsPanelOpen(false));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setSettingsPanelOpen(false);
    setTaskExtrasOpen(null);
  }
});

closeTaskExtrasButton.addEventListener("click", () => setTaskExtrasOpen(null));
openTimerButton.addEventListener("click", showTaskTimerView);
openColorButton.addEventListener("click", showTaskColorView);
openDescriptionButton.addEventListener("click", showTaskDescriptionView);
backToExtrasButton.addEventListener("click", showTaskExtrasHome);
backFromColorButton.addEventListener("click", showTaskExtrasHome);
backFromDescriptionButton.addEventListener("click", showTaskExtrasHome);
colorSwatches.forEach((swatch) => {
  swatch.addEventListener("click", () => applyTaskColor(swatch.dataset.color));
});
customTaskColorInput.addEventListener("input", () => {
  applyTaskColor(customTaskColorInput.value);
});
clearColorButton.addEventListener("click", () => applyTaskColor("#ffffff"));
taskDescriptionInput.addEventListener("input", updateDescriptionCharacterCount);
descriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!activeTaskExtras) {
    return;
  }

  const description = taskDescriptionInput.value.trim();
  if (description) {
    activeTaskExtras.description = description;
  } else {
    delete activeTaskExtras.description;
  }

  taskDescriptionInput.value = description;
  updateDescriptionCharacterCount();
  saveTasks();
  renderTasks();
  descriptionStatus.textContent = translate(
    description ? "descriptionSaved" : "descriptionRemoved",
  );
});
clearDescriptionButton.addEventListener("click", () => {
  if (!activeTaskExtras) {
    return;
  }

  delete activeTaskExtras.description;
  taskDescriptionInput.value = "";
  updateDescriptionCharacterCount();
  saveTasks();
  renderTasks();
  descriptionStatus.textContent = translate("descriptionRemoved");
  taskDescriptionInput.focus();
});
timerModeInputs.forEach((input) => {
  input.addEventListener("change", () => setTimerInputMode(input.value));
});
timerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!activeTaskExtras) {
    return;
  }

  const selectedMode = document.querySelector(
    'input[name="timerMode"]:checked',
  ).value;

  if (selectedMode === "date") {
    const endTime = new Date(
      `${timerDateInput.value}T${String(timerHourInput.value).padStart(
        2,
        "0",
      )}:${String(timerMinuteInput.value).padStart(2, "0")}`,
    ).getTime();

    if (
      !timerDateInput.value ||
      !Number.isFinite(endTime) ||
      endTime <= Date.now()
    ) {
      timerStatus.textContent = translate("chooseFutureDate");
      return;
    }

    activeTaskExtras.timerEndsAt = endTime;
    activeTaskExtras.timerMode = selectedMode;
  } else {
    const days = Math.max(0, Number(timerDaysInput.value) || 0);
    const hours = Math.max(0, Number(timerHoursInput.value) || 0);
    const minutes = Math.max(0, Number(timerMinutesInput.value) || 0);
    const durationSeconds = days * 86400 + hours * 3600 + minutes * 60;

    if (durationSeconds === 0) {
      timerStatus.textContent = translate("addAtLeastMinute");
      return;
    }

    activeTaskExtras.timerEndsAt = Date.now() + durationSeconds * 1000;
    activeTaskExtras.timerMode = selectedMode;
  }

  saveTasks();
  renderTasks();
  updateTimerDisplays();
});

clearTimerButton.addEventListener("click", () => {
  if (!activeTaskExtras) {
    return;
  }

  delete activeTaskExtras.timerEndsAt;
  saveTasks();
  renderTasks();
  updateTimerDisplays();
});
taskExtrasOverlay.addEventListener("click", (e) => {
  if (e.target === taskExtrasOverlay) {
    setTaskExtrasOpen(null);
  }
});

function renderTasks() {
  document.body.classList.remove("task-focus-active");
  document
    .querySelectorAll(".tasks-section li.is-focused")
    .forEach((task) => task.classList.remove("is-focused"));

  todoList.innerHTML = "";
  doingList.innerHTML = "";
  doneList.innerHTML = "";

  tasks.forEach((task) => {
    // Gorev satirini secilen moda gore suruklenebilir yapar veya pasiflestirir. madeByCodex
    const newTask = document.createElement("li");
    const isDragDropMode = interactionMode === "dragdrop";
    newTask.draggable = isDragDropMode;
    newTask.tabIndex = 0;
    if (task.backgroundColor) {
      newTask.classList.add("has-task-color");
      newTask.style.setProperty("--task-background", task.backgroundColor);
      newTask.style.setProperty(
        "--task-text-color",
        task.textColor || getContrastTextColor(task.backgroundColor),
      );
      newTask.style.setProperty(
        "--focus-color",
        getTaskFocusColor(task.backgroundColor),
      );
    }
    let focusTimer;

    // Gorevin uzerinde kisa bir bekleme sonunda odaklanma efektini baslatir. madeByCodex
    newTask.addEventListener("pointerenter", () => {
      clearTimeout(focusTimer);

      if (interactionMode !== "buttons" || !isFocusModeEnabled) {
        return;
      }

      focusTimer = setTimeout(() => {
        if (
          !newTask.isConnected ||
          !newTask.matches(":hover") ||
          interactionMode !== "buttons" ||
          !isFocusModeEnabled
        ) {
          return;
        }

        newTask.classList.add("is-focused");
        document.body.classList.add("task-focus-active");

        if (window.gsap) {
          window.gsap.killTweensOf(newTask);
          window.gsap.fromTo(
            newTask,
            { scale: 1, opacity: 0.9 },
            {
              scale: 1.04,
              opacity: 1,
              duration: 0.55,
              ease: "power2.out",
            },
          );
        }
      }, 1200);
    });

    // Gorevden ayrilinca bekleyen zamanlayiciyi ve odak gorunumunu temizler. madeByCodex
    newTask.addEventListener("pointerleave", () => {
      clearTimeout(focusTimer);
      focusTimer = setTimeout(() => {
        if (newTask.matches(":hover")) {
          return;
        }

        newTask.classList.remove("is-focused");

        if (window.gsap) {
          window.gsap.killTweensOf(newTask);
          window.gsap.to(newTask, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            clearProps: "transform,opacity",
          });
        }

        if (!document.querySelector(".tasks-section li.is-focused")) {
          document.body.classList.remove("task-focus-active");
        }
      }, 150);
    });

    // Klavye veya ekran okuyucu kullanicisi taska geldiginde odak gorunumunu etkinlestirir. madeByCodex
    newTask.addEventListener("focus", () => {
      if (interactionMode === "buttons" && isFocusModeEnabled) {
        newTask.classList.add("is-focused");
        document.body.classList.add("task-focus-active");
      }
    });

    // Klavye odağı tasktan ayrilinca odak gorunumunu ve sayfa etkisini temizler. madeByCodex
    newTask.addEventListener("blur", () => {
      newTask.classList.remove("is-focused");

      if (!document.querySelector(".tasks-section li.is-focused")) {
        document.body.classList.remove("task-focus-active");
      }
    });

    // Dokunmatik cihazlarda gorevin kolonlar arasinda suruklenmesini saglar. madeByCodex
    newTask.addEventListener("pointerdown", (e) =>
      handleTouchPointerDown(e, task),
    );

    if (isDragDropMode) {
      newTask.addEventListener("dragstart", (e) => handleDragStart(e, task));
      newTask.addEventListener("dragend", handleDragEnd);
    }

    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task.text;

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskInfo.append(taskText);

    if (task.timerEndsAt) {
      const timerDisplay = document.createElement("span");
      timerDisplay.classList.add("task-timer");
      timerDisplay.dataset.timerTaskId = String(task.id);
      timerDisplay.setAttribute("aria-label", translate("taskTimeRemaining"));
      timerDisplay.textContent = formatTimer(getRemainingSeconds(task));
      taskInfo.append(timerDisplay);
    }

    const importanceButton = document.createElement("button");
    const taskExtrasButton = document.createElement("button");
    const isImportant = task.important === true;
    const hasDescription = Boolean(task.description?.trim());
    taskExtrasButton.type = "button";
    taskExtrasButton.classList.add("task-extras-button");
    taskExtrasButton.setAttribute(
      "aria-label",
      translate(hasDescription ? "descriptionAdded" : "openTaskExtras"),
    );
    taskExtrasButton.title = hasDescription
      ? "Task extras · Description added"
      : "Task extras";
    taskExtrasButton.innerHTML = hasDescription
      ? '<i class="bi bi-file-earmark-text-fill" aria-hidden="true"></i>'
      : '<i class="bi bi-plus-lg" aria-hidden="true"></i>';
    taskExtrasButton.title = translate(
      hasDescription ? "taskExtrasDescriptionTitle" : "taskExtrasTitle",
    );
    if (hasDescription) {
      taskExtrasButton.classList.add("has-description");
    }
    taskExtrasButton.addEventListener("click", (e) => {
      e.stopPropagation();
      setTaskExtrasOpen(task);
    });

    importanceButton.type = "button";
    importanceButton.classList.add("importance-button");
    importanceButton.setAttribute("aria-pressed", String(isImportant));
    importanceButton.setAttribute(
      "aria-label",
      translate(isImportant ? "removeImportance" : "markImportant"),
    );
    importanceButton.title = translate(
      isImportant ? "removeImportance" : "markImportant",
    );
    importanceButton.innerHTML = `<i class="bi bi-star${isImportant ? "-fill" : ""}" aria-hidden="true"></i>`;

    if (isImportant) {
      importanceButton.classList.add("is-important");
    }

    importanceButton.addEventListener("click", (e) => {
      e.stopPropagation();
      task.important = !isImportant;
      saveTasks();
      renderTasks();
    });

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");

    const actionColors = {
      todo: "#2563eb",
      doing: "#d97706",
      done: "#16a34a",
      delete: "#dc2626",
    };
    const taskActionColors = getTaskActionColors(
      task.backgroundColor,
      actionColors,
    );

    const setActionButtonColor = (button, action) => {
      const borderColor = taskActionColors.colors[action];
      button.style.setProperty("--task-action-color", borderColor);
      button.style.setProperty("--task-action-text-color", borderColor);
    };

    // To Do btn
    const todoButton = document.createElement("button");
    todoButton.textContent = translate("todo");
    todoButton.classList.add("todo-btn");
    setActionButtonColor(todoButton, "todo");

    todoButton.addEventListener("click", () => {
      task.status = "todo";
      saveTasks();
      renderTasks();
    });

    // Doing btn
    const doingButton = document.createElement("button");
    doingButton.textContent = translate("doing");
    doingButton.classList.add("doing-btn");
    setActionButtonColor(doingButton, "doing");

    doingButton.addEventListener("click", () => {
      task.status = "doing";
      saveTasks();
      renderTasks();
    });

    // Done btn
    const doneButton = document.createElement("button");
    doneButton.textContent = translate("done");
    doneButton.classList.add("done-btn");
    setActionButtonColor(doneButton, "done");

    doneButton.addEventListener("click", () => {
      task.status = "done";
      saveTasks();
      renderTasks();
    });

    // Delete btn
    const deleteButton = document.createElement("button");
    deleteButton.textContent = translate("delete");
    deleteButton.classList.add("delete-btn");
    setActionButtonColor(deleteButton, "delete");

    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    // Buton modunda durum degistirme ve silme butonlarini gorunur tutar. madeByCodex
    if (interactionMode === "buttons") {
      if (task.status === "todo") {
        taskActions.append(doingButton, doneButton);
      } else if (task.status === "doing") {
        taskActions.append(todoButton, doneButton);
      } else if (task.status === "done") {
        taskActions.append(todoButton, doingButton);
      }
      taskActions.append(deleteButton);
    }

    newTask.append(taskInfo, taskExtrasButton, importanceButton, taskActions);

    // Task'i statusune gore dogru listeye basiyoruz
    if (task.status === "todo") {
      todoList.append(newTask);
    } else if (task.status === "doing") {
      doingList.append(newTask);
    } else if (task.status === "done") {
      doneList.append(newTask);
    }
  });
}

// Sayfa yuklendiginde secili moda ait arayuz elemanlarini hazirlar. madeByCodex
if (!getLanguages()[activeLanguage]) {
  activeLanguage = "en";
}
populateLanguageSelect();
applyTranslations();
updateModeInterface();

// Sayfa acilir acilmaz localStorage'daki taskleri ekrana bas
renderTasks();
startTimerUpdates();

if (window.location.hash.startsWith("#language-settings")) {
  openLanguageWorkspace();
  if (window.location.hash === "#language-settings/content") {
    renderContentLanguageInputs();
    showLanguageView("content");
  }
}

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (!taskText) {
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    status: "todo",
    important: false,
  };

  tasks.push(task);

  saveTasks();
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
});
