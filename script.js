// formu buluyoruz tanimliyoruz
const todoForm = document.querySelector(".addTodoMission");

// inputu buluyoruz tanimliyoruz
const taskInput = document.getElementById("addMission");
const addMissionButton = document.getElementById("addMissionButton");
const taskImageInput = document.getElementById("taskImageInput");
const taskImagePicker = document.getElementById("taskImagePicker");
const taskImageDraft = document.getElementById("taskImageDraft");
const taskImageDraftPreview = document.getElementById("taskImageDraftPreview");
const taskImageDraftName = document.getElementById("taskImageDraftName");
const taskImageDraftMeta = document.getElementById("taskImageDraftMeta");
const removeTaskImageDraft = document.getElementById("removeTaskImageDraft");
const taskImageStatus = document.getElementById("taskImageStatus");
const taskImageDialog = document.getElementById("taskImageDialog");
const taskImageDialogTitle = document.getElementById("taskImageDialogTitle");
const taskImageDialogPreview = document.getElementById(
  "taskImageDialogPreview",
);
const closeTaskImageDialog = document.getElementById("closeTaskImageDialog");
const removeTaskImageButton = document.getElementById("removeTaskImageButton");

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
const taskImageView = document.getElementById("taskImageView");
const taskDescriptionView = document.getElementById("taskDescriptionView");
const openTimerButton = document.getElementById("openTimerButton");
const openColorButton = document.getElementById("openColorButton");
const openImageButton = document.getElementById("openImageButton");
const openDescriptionButton = document.getElementById("openDescriptionButton");
const backToExtrasButton = document.getElementById("backToExtrasButton");
const backFromColorButton = document.getElementById("backFromColorButton");
const backFromImageButton = document.getElementById("backFromImageButton");
const backFromDescriptionButton = document.getElementById(
  "backFromDescriptionButton",
);
const taskExtrasImageInput = document.getElementById("taskExtrasImageInput");
const taskExtrasImagePicker = document.getElementById("taskExtrasImagePicker");
const taskExtrasImagePreview = document.getElementById(
  "taskExtrasImagePreview",
);
const taskExtrasImageEmpty = document.getElementById("taskExtrasImageEmpty");
const replaceTaskExtrasImage = document.getElementById(
  "replaceTaskExtrasImage",
);
const removeTaskExtrasImage = document.getElementById(
  "removeTaskExtrasImage",
);
const taskExtrasImageStatus = document.getElementById("taskExtrasImageStatus");
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
const descriptionSaveButton = document.getElementById("descriptionSaveButton");
const descriptionSaveButtonLabel = document.getElementById(
  "descriptionSaveButtonLabel",
);
const descriptionTagPreview = document.getElementById("descriptionTagPreview");
const descriptionTagList = document.getElementById("descriptionTagList");
const taskSearchInput = document.getElementById("taskSearch");
const clearTaskSearchButton = document.getElementById("clearTaskSearch");
const taskSearchStatus = document.getElementById("taskSearchStatus");
const filterImportantTasksButton = document.getElementById(
  "filterImportantTasks",
);
const filterDueSoonTasksButton = document.getElementById("filterDueSoonTasks");
const importantTaskCount = document.getElementById("importantTaskCount");
const dueSoonTaskCount = document.getElementById("dueSoonTaskCount");
const modeInputs = document.querySelectorAll('input[name="interactionMode"]');
const focusModeToggle = document.getElementById("focusModeToggle");
const themeToggle = document.getElementById("themeToggle");
const themeValueLabel = document.getElementById("themeValueLabel");
const themeSettingIcon = document.getElementById("themeSettingIcon");
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
    // Proje adi ceviriden bagimsiz olarak her dilde ayni kalir.
    myTasks: "Todoez",
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
  tagHint: [".description-writing-hint"],
  remove: ["#clearDescriptionButton"],
  save: [".description-save-button-label"],
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
  updateThemeControls();
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

const themeStorageKey = "todoezTheme";
let activeTheme =
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

function updateThemeControls() {
  const isDark = activeTheme === "dark";
  themeToggle.checked = isDark;
  themeValueLabel.textContent = translate(isDark ? "darkTheme" : "lightTheme");
  themeSettingIcon.className = isDark ? "bi bi-moon-stars-fill" : "bi bi-sun";
}

function setTheme(theme, shouldPersist = true) {
  activeTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = activeTheme;
  document.documentElement.style.colorScheme = activeTheme;
  if (shouldPersist) {
    localStorage.setItem(themeStorageKey, activeTheme);
  }
  updateThemeControls();
}

const taskImageDatabaseName = "todoezAssets";
const taskImageStoreName = "taskImages";
const maxTaskImageSize = 5 * 1024 * 1024;
const supportedTaskImageTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);
let taskImageDatabasePromise;
let pendingTaskImage = null;
let pendingTaskImageUrl = "";
let activeTaskImageId = null;
let activeTaskImageDialogUrl = "";
let activeTaskExtrasImageUrl = "";
const taskImageThumbnailUrls = new Set();

function openTaskImageDatabase() {
  if (!window.indexedDB) {
    return Promise.reject(new Error("IndexedDB is not supported"));
  }

  if (!taskImageDatabasePromise) {
    taskImageDatabasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(taskImageDatabaseName, 1);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(taskImageStoreName)) {
          database.createObjectStore(taskImageStoreName, { keyPath: "taskId" });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  return taskImageDatabasePromise;
}

async function saveTaskImage(taskId, file) {
  const database = await openTaskImageDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(taskImageStoreName, "readwrite");
    transaction.objectStore(taskImageStoreName).put({
      taskId,
      blob: file,
      name: file.name,
      type: file.type,
      size: file.size,
    });
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}

async function getTaskImage(taskId) {
  const database = await openTaskImageDatabase();
  return new Promise((resolve, reject) => {
    const request = database
      .transaction(taskImageStoreName, "readonly")
      .objectStore(taskImageStoreName)
      .get(taskId);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function deleteTaskImage(taskId) {
  try {
    const database = await openTaskImageDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction(taskImageStoreName, "readwrite");
      transaction.objectStore(taskImageStoreName).delete(taskId);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  } catch (error) {
    console.error("Task image could not be removed", error);
  }
}

function formatImageSize(bytes) {
  return bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function clearTaskImageDraft() {
  if (pendingTaskImageUrl) {
    URL.revokeObjectURL(pendingTaskImageUrl);
  }
  pendingTaskImage = null;
  pendingTaskImageUrl = "";
  taskImageInput.value = "";
  taskImageDraft.hidden = true;
  taskImageDraftPreview.removeAttribute("src");
  taskImagePicker.classList.remove("has-image");
  taskImagePicker.setAttribute("aria-pressed", "false");
}

function selectTaskImage(file) {
  taskImageStatus.textContent = "";

  if (!file || !supportedTaskImageTypes.has(file.type)) {
    taskImageStatus.textContent = translate("unsupportedImage");
    return;
  }

  if (file.size > maxTaskImageSize) {
    taskImageStatus.textContent = translate("imageTooLarge");
    return;
  }

  clearTaskImageDraft();
  pendingTaskImage = file;
  pendingTaskImageUrl = URL.createObjectURL(file);
  taskImageDraftPreview.src = pendingTaskImageUrl;
  taskImageDraftName.textContent = file.name;
  taskImageDraftMeta.textContent = formatImageSize(file.size);
  taskImageDraft.hidden = false;
  taskImagePicker.classList.add("has-image");
  taskImagePicker.setAttribute("aria-pressed", "true");
}

function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  deleteTaskImage(taskId);
  saveTasks();
  renderTasks();
}

function closeTaskImageViewer() {
  if (taskImageDialog.open) {
    taskImageDialog.close();
  }
  if (activeTaskImageDialogUrl) {
    URL.revokeObjectURL(activeTaskImageDialogUrl);
  }
  activeTaskImageDialogUrl = "";
  activeTaskImageId = null;
  taskImageDialogPreview.removeAttribute("src");
}

function openTaskImageViewer(task, imageRecord) {
  closeTaskImageViewer();
  activeTaskImageId = task.id;
  activeTaskImageDialogUrl = URL.createObjectURL(imageRecord.blob);
  taskImageDialogTitle.textContent = task.text;
  taskImageDialogPreview.src = activeTaskImageDialogUrl;
  taskImageDialogPreview.alt = translate("taskImageAlt", { task: task.text });
  taskImageDialog.showModal();
  closeTaskImageDialog.focus();
}
let touchDragState = null;
let activeTaskExtras = null;
let timerInterval;
let filterImportantTasks = false;
let filterDueSoonTasks = false;
let dueSoonTaskSignature = "";
const dueSoonWindowMs = 24 * 60 * 60 * 1000;

for (let hour = 0; hour < 24; hour += 1) {
  timerHourInput.add(new Option(String(hour).padStart(2, "0"), hour));
}

for (let minute = 0; minute < 60; minute += 1) {
  timerMinuteInput.add(new Option(String(minute).padStart(2, "0"), minute));
}

function showTaskExtrasHome() {
  releaseTaskExtrasImagePreview();
  taskExtrasModal.scrollTop = 0;
  taskExtrasHome.hidden = false;
  taskTimerView.hidden = true;
  taskColorView.hidden = true;
  taskImageView.hidden = true;
  taskDescriptionView.hidden = true;
}

function showTaskTimerView() {
  taskExtrasModal.scrollTop = 0;
  taskExtrasHome.hidden = true;
  taskTimerView.hidden = false;
  taskColorView.hidden = true;
  taskImageView.hidden = true;
  taskDescriptionView.hidden = true;
  const selectedMode = document.querySelector(
    'input[name="timerMode"]:checked',
  ).value;
  (selectedMode === "date" ? timerDateInput : timerDaysInput).focus();
}

function showTaskColorView() {
  taskExtrasModal.scrollTop = 0;
  taskExtrasHome.hidden = true;
  taskTimerView.hidden = true;
  taskColorView.hidden = false;
  taskImageView.hidden = true;
  taskDescriptionView.hidden = true;
  customTaskColorInput.focus();
}

function releaseTaskExtrasImagePreview() {
  if (activeTaskExtrasImageUrl) {
    URL.revokeObjectURL(activeTaskExtrasImageUrl);
  }
  activeTaskExtrasImageUrl = "";
  taskExtrasImagePreview.removeAttribute("src");
}

async function renderTaskExtrasImage(task) {
  releaseTaskExtrasImagePreview();
  taskExtrasImagePreview.hidden = true;
  taskExtrasImageEmpty.hidden = false;
  replaceTaskExtrasImage.hidden = true;
  removeTaskExtrasImage.hidden = true;

  if (!task?.hasImage) {
    return;
  }

  try {
    const imageRecord = await getTaskImage(task.id);
    if (
      !imageRecord ||
      activeTaskExtras?.id !== task.id ||
      taskImageView.hidden
    ) {
      return;
    }
    activeTaskExtrasImageUrl = URL.createObjectURL(imageRecord.blob);
    taskExtrasImagePreview.src = activeTaskExtrasImageUrl;
    taskExtrasImagePreview.alt = translate("taskImageAlt", { task: task.text });
    taskExtrasImagePreview.hidden = false;
    taskExtrasImageEmpty.hidden = true;
    replaceTaskExtrasImage.hidden = false;
    removeTaskExtrasImage.hidden = false;
  } catch (error) {
    console.error("Task extras image could not be loaded", error);
    taskExtrasImageStatus.textContent = translate("imageLoadFailed");
  }
}

function showTaskImageView() {
  taskExtrasModal.scrollTop = 0;
  taskExtrasHome.hidden = true;
  taskTimerView.hidden = true;
  taskColorView.hidden = true;
  taskImageView.hidden = false;
  taskDescriptionView.hidden = true;
  taskExtrasImageStatus.textContent = "";
  taskExtrasImageInput.value = "";
  renderTaskExtrasImage(activeTaskExtras);
  taskExtrasImagePicker.focus();
}

// Aciklamadaki benzersiz #etiketleri Unicode karakterleri de destekleyerek cikarir.
function extractTags(text = "") {
  const tags = [];
  const seenTags = new Set();
  const tagPattern = /(^|[^\p{L}\p{N}_])#([\p{L}\p{N}_-]+)/gu;

  for (const match of text.matchAll(tagPattern)) {
    const tag = `#${match[2]}`;
    const normalizedTag = normalizeSearchValue(tag);
    if (!seenTags.has(normalizedTag)) {
      seenTags.add(normalizedTag);
      tags.push(tag);
    }
  }

  return tags;
}

function renderTagChips(container, tags) {
  container.replaceChildren();
  tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.classList.add("task-tag");
    chip.textContent = tag;
    container.append(chip);
  });
}

function updateDescriptionTagPreview() {
  const tags = extractTags(taskDescriptionInput.value);
  renderTagChips(descriptionTagList, tags);
  descriptionTagPreview.hidden = tags.length === 0;
}

function updateDescriptionCharacterCount() {
  descriptionCharacterCount.textContent = `${taskDescriptionInput.value.length} / 1000`;
  updateDescriptionTagPreview();
}

function normalizeSearchValue(value) {
  return activeLanguage === "tr"
    ? value.toLocaleLowerCase("tr")
    : value.toLocaleLowerCase();
}

// Normal kelimeleri baslik ve aciklamada, # ile baslayan sorgulari etiketlerde arar.
function taskMatchesSearch(task, query) {
  const searchTokens = query.trim().split(/\s+/u).filter(Boolean);
  if (searchTokens.length === 0) {
    return true;
  }

  const searchableText = normalizeSearchValue(
    `${task.text || ""} ${task.description || ""} ${task.imageName || ""}`,
  );
  const normalizedTags = extractTags(task.description).map(normalizeSearchValue);

  return searchTokens.every((token) => {
    const normalizedToken = normalizeSearchValue(token);
    if (normalizedToken.startsWith("#")) {
      return normalizedTags.some((tag) => tag.startsWith(normalizedToken));
    }
    return searchableText.includes(normalizedToken);
  });
}

function isTaskDueSoon(task) {
  const remainingTime = Number(task.timerEndsAt) - Date.now();
  return remainingTime > 0 && remainingTime <= dueSoonWindowMs;
}

function getDueSoonTaskSignature() {
  return tasks
    .filter(isTaskDueSoon)
    .map((task) => String(task.id))
    .sort()
    .join(",");
}

function taskMatchesQuickFilters(task) {
  return (
    (!filterImportantTasks || task.important === true) &&
    (!filterDueSoonTasks || isTaskDueSoon(task))
  );
}

function updateQuickFilterControls() {
  const importantCount = tasks.filter((task) => task.important === true).length;
  const dueSoonCount = tasks.filter(isTaskDueSoon).length;

  importantTaskCount.textContent = String(importantCount);
  dueSoonTaskCount.textContent = String(dueSoonCount);
  dueSoonTaskSignature = getDueSoonTaskSignature();
  filterImportantTasksButton.classList.toggle(
    "is-active",
    filterImportantTasks,
  );
  filterDueSoonTasksButton.classList.toggle("is-active", filterDueSoonTasks);
  filterImportantTasksButton.querySelector("i").className = filterImportantTasks
    ? "bi bi-star-fill"
    : "bi bi-star";
  filterImportantTasksButton.setAttribute(
    "aria-pressed",
    String(filterImportantTasks),
  );
  filterDueSoonTasksButton.setAttribute(
    "aria-pressed",
    String(filterDueSoonTasks),
  );
}

function updateTaskSearchStatus(visibleTaskCount) {
  const hasQuery = Boolean(taskSearchInput.value.trim());
  const hasActiveFilter = filterImportantTasks || filterDueSoonTasks;
  clearTaskSearchButton.hidden = !hasQuery;
  taskSearchStatus.textContent = hasQuery || hasActiveFilter
    ? translate(
        visibleTaskCount === 0 ? "noTasksFound" : "tasksFound",
        { count: visibleTaskCount },
      )
    : "";
}

function showTaskDescriptionView() {
  taskExtrasModal.scrollTop = 0;
  taskExtrasHome.hidden = true;
  taskTimerView.hidden = true;
  taskColorView.hidden = true;
  taskImageView.hidden = true;
  taskDescriptionView.hidden = false;
  descriptionStatus.textContent = "";
  resetDescriptionSaveFeedback();
  taskDescriptionInput.focus();
}

let descriptionSaveFeedbackTimer;

function resetDescriptionSaveFeedback() {
  window.clearTimeout(descriptionSaveFeedbackTimer);
  descriptionSaveButton.classList.remove("is-saved");
  descriptionSaveButtonLabel.textContent = translate("save");
}

function showDescriptionSaveFeedback(messageKey) {
  window.clearTimeout(descriptionSaveFeedbackTimer);
  const message = translate(messageKey);

  descriptionStatus.textContent = message;
  descriptionSaveButtonLabel.textContent = message;
  descriptionSaveButton.classList.add("is-saved");

  descriptionSaveFeedbackTimer = window.setTimeout(() => {
    descriptionSaveButton.classList.remove("is-saved");
    descriptionSaveButtonLabel.textContent = translate("save");
  }, 1800);
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

  const currentDueSoonSignature = getDueSoonTaskSignature();
  if (currentDueSoonSignature !== dueSoonTaskSignature) {
    if (filterDueSoonTasks) {
      renderTasks();
    } else {
      updateQuickFilterControls();
    }
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
    document
      .querySelectorAll(".tasks-section li.is-focused")
      .forEach((task) => {
        task.classList.remove("is-focused");
      });
  }
});

themeToggle.addEventListener("change", () => {
  setTheme(themeToggle.checked ? "dark" : "light");
});

taskImagePicker.addEventListener("click", () => taskImageInput.click());
taskImageInput.addEventListener("change", () => {
  const [file] = taskImageInput.files;
  if (file) {
    selectTaskImage(file);
  }
});
removeTaskImageDraft.addEventListener("click", () => {
  clearTaskImageDraft();
  taskImageStatus.textContent = "";
  taskInput.focus();
});

taskInput.addEventListener("paste", (event) => {
  const imageFile = Array.from(event.clipboardData?.files || []).find((file) =>
    supportedTaskImageTypes.has(file.type),
  );
  if (imageFile) {
    selectTaskImage(imageFile);
  }
});

todoForm.addEventListener("dragover", (event) => {
  const hasImage = Array.from(event.dataTransfer?.items || []).some(
    (item) => item.kind === "file" && supportedTaskImageTypes.has(item.type),
  );
  if (hasImage) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    todoForm.classList.add("is-image-drag-over");
  }
});

todoForm.addEventListener("dragleave", (event) => {
  if (!todoForm.contains(event.relatedTarget)) {
    todoForm.classList.remove("is-image-drag-over");
  }
});

todoForm.addEventListener("drop", (event) => {
  todoForm.classList.remove("is-image-drag-over");
  const imageFile = Array.from(event.dataTransfer?.files || []).find((file) =>
    supportedTaskImageTypes.has(file.type),
  );
  if (imageFile) {
    event.preventDefault();
    selectTaskImage(imageFile);
  }
});

closeTaskImageDialog.addEventListener("click", closeTaskImageViewer);
taskImageDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeTaskImageViewer();
});
taskImageDialog.addEventListener("click", (event) => {
  if (event.target === taskImageDialog) {
    closeTaskImageViewer();
  }
});
removeTaskImageButton.addEventListener("click", async () => {
  const taskId = activeTaskImageId;
  if (taskId === null) {
    return;
  }

  closeTaskImageViewer();
  await deleteTaskImage(taskId);
  const task = tasks.find((item) => item.id === taskId);
  if (task) {
    delete task.hasImage;
    delete task.imageName;
    saveTasks();
    renderTasks();
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
  removeTask(taskId);
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
      removeTask(task.id);
      element.classList.remove("is-dragging");
      document.querySelectorAll(".is-drag-over").forEach((dropZone) => {
        dropZone.classList.remove("is-drag-over");
      });
      trashDropZone.classList.remove("is-visible", "is-drag-over");
      trashDropZone.setAttribute("aria-hidden", "true");
      touchDragState = null;
      return;
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
  document.body.classList.toggle("task-extras-open", isOpen);
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
  } else {
    releaseTaskExtrasImagePreview();
  }
}

// Secilen moda gore cop kutusunun kullanilabilirlik durumunu ayarlar. madeByCodex
function updateModeInterface() {
  const isDragDropMode = interactionMode === "dragdrop";
  document.body.dataset.interactionMode = interactionMode;
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
openImageButton.addEventListener("click", showTaskImageView);
openDescriptionButton.addEventListener("click", showTaskDescriptionView);
backToExtrasButton.addEventListener("click", showTaskExtrasHome);
backFromColorButton.addEventListener("click", showTaskExtrasHome);
backFromImageButton.addEventListener("click", showTaskExtrasHome);
backFromDescriptionButton.addEventListener("click", showTaskExtrasHome);

async function saveActiveTaskExtrasImage(file) {
  taskExtrasImageStatus.textContent = "";

  if (!file || !supportedTaskImageTypes.has(file.type)) {
    taskExtrasImageStatus.textContent = translate("unsupportedImage");
    return;
  }
  if (file.size > maxTaskImageSize) {
    taskExtrasImageStatus.textContent = translate("imageTooLarge");
    return;
  }
  if (!activeTaskExtras) {
    return;
  }

  const task = activeTaskExtras;
  taskExtrasImagePicker.disabled = true;
  replaceTaskExtrasImage.disabled = true;
  taskExtrasImageStatus.textContent = translate("savingImage");
  try {
    await saveTaskImage(task.id, file);
    task.hasImage = true;
    task.imageName = file.name;
    saveTasks();
    renderTasks();
    await renderTaskExtrasImage(task);
    taskExtrasImageStatus.textContent = translate("imageUpdated");
  } catch (error) {
    console.error("Task extras image could not be saved", error);
    taskExtrasImageStatus.textContent = translate("imageSaveFailed");
  } finally {
    taskExtrasImagePicker.disabled = false;
    replaceTaskExtrasImage.disabled = false;
    taskExtrasImageInput.value = "";
  }
}

taskExtrasImagePicker.addEventListener("click", () =>
  taskExtrasImageInput.click(),
);
replaceTaskExtrasImage.addEventListener("click", () =>
  taskExtrasImageInput.click(),
);
taskExtrasImageInput.addEventListener("change", () => {
  const [file] = taskExtrasImageInput.files;
  if (file) {
    saveActiveTaskExtrasImage(file);
  }
});
taskExtrasImagePicker.addEventListener("dragover", (event) => {
  const hasImage = Array.from(event.dataTransfer?.items || []).some(
    (item) => item.kind === "file" && supportedTaskImageTypes.has(item.type),
  );
  if (hasImage) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    taskExtrasImagePicker.classList.add("is-drag-over");
  }
});
taskExtrasImagePicker.addEventListener("dragleave", () => {
  taskExtrasImagePicker.classList.remove("is-drag-over");
});
taskExtrasImagePicker.addEventListener("drop", (event) => {
  taskExtrasImagePicker.classList.remove("is-drag-over");
  const imageFile = Array.from(event.dataTransfer?.files || []).find((file) =>
    supportedTaskImageTypes.has(file.type),
  );
  if (imageFile) {
    event.preventDefault();
    saveActiveTaskExtrasImage(imageFile);
  }
});
removeTaskExtrasImage.addEventListener("click", async () => {
  if (!activeTaskExtras) {
    return;
  }
  const task = activeTaskExtras;
  removeTaskExtrasImage.disabled = true;
  await deleteTaskImage(task.id);
  delete task.hasImage;
  delete task.imageName;
  saveTasks();
  renderTasks();
  await renderTaskExtrasImage(task);
  taskExtrasImageStatus.textContent = translate("imageRemoved");
  removeTaskExtrasImage.disabled = false;
});
colorSwatches.forEach((swatch) => {
  swatch.addEventListener("click", () => applyTaskColor(swatch.dataset.color));
});
customTaskColorInput.addEventListener("input", () => {
  applyTaskColor(customTaskColorInput.value);
});
clearColorButton.addEventListener("click", () => applyTaskColor("#ffffff"));
taskDescriptionInput.addEventListener("input", () => {
  updateDescriptionCharacterCount();
  descriptionStatus.textContent = "";
  resetDescriptionSaveFeedback();
});
taskSearchInput.addEventListener("input", renderTasks);
clearTaskSearchButton.addEventListener("click", () => {
  taskSearchInput.value = "";
  renderTasks();
  taskSearchInput.focus();
});
filterImportantTasksButton.addEventListener("click", () => {
  filterImportantTasks = !filterImportantTasks;
  renderTasks();
});
filterDueSoonTasksButton.addEventListener("click", () => {
  filterDueSoonTasks = !filterDueSoonTasks;
  renderTasks();
});
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
  showDescriptionSaveFeedback(
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
  taskImageThumbnailUrls.forEach((url) => URL.revokeObjectURL(url));
  taskImageThumbnailUrls.clear();
  document
    .querySelectorAll(".tasks-section li.is-focused")
    .forEach((task) => task.classList.remove("is-focused"));

  todoList.innerHTML = "";
  doingList.innerHTML = "";
  doneList.innerHTML = "";

  const filteredTasks = tasks.filter(
    (task) =>
      taskMatchesSearch(task, taskSearchInput.value) &&
      taskMatchesQuickFilters(task),
  );

  filteredTasks.forEach((task) => {
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
      }, 450);
    });

    // Gorevden ayrilinca bekleyen zamanlayiciyi ve odak gorunumunu temizler. madeByCodex
    newTask.addEventListener("pointerleave", () => {
      clearTimeout(focusTimer);
      focusTimer = setTimeout(() => {
        if (newTask.matches(":hover")) {
          return;
        }

        newTask.classList.remove("is-focused");
      }, 90);
    });

    // Klavye veya ekran okuyucu kullanicisi taska geldiginde odak gorunumunu etkinlestirir. madeByCodex
    newTask.addEventListener("focus", () => {
      if (interactionMode === "buttons" && isFocusModeEnabled) {
        newTask.classList.add("is-focused");
      }
    });

    // Klavye odagi tasktan ayrilinca yumusak odak gorunumunu temizler. madeByCodex
    newTask.addEventListener("blur", () => {
      newTask.classList.remove("is-focused");
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

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    if (task.hasImage) {
      newTask.classList.add("has-image");
      const imageButton = document.createElement("button");
      const imagePreview = document.createElement("img");
      const imageZoomIcon = document.createElement("i");
      imageButton.type = "button";
      imageButton.classList.add("task-image-thumbnail");
      imageButton.disabled = true;
      imageButton.draggable = false;
      imageButton.setAttribute(
        "aria-label",
        translate("viewTaskImage", { task: task.text }),
      );
      imagePreview.alt = "";
      imagePreview.loading = "lazy";
      imagePreview.draggable = false;
      imageZoomIcon.className = "bi bi-arrows-fullscreen";
      imageZoomIcon.setAttribute("aria-hidden", "true");
      imageButton.append(imagePreview, imageZoomIcon);
      imageButton.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      });
      taskContent.append(imageButton);

      getTaskImage(task.id)
        .then((imageRecord) => {
          if (!imageButton.isConnected) {
            return;
          }
          if (!imageRecord) {
            imageButton.remove();
            newTask.classList.remove("has-image");
            return;
          }
          const imageUrl = URL.createObjectURL(imageRecord.blob);
          taskImageThumbnailUrls.add(imageUrl);
          imagePreview.src = imageUrl;
          imageButton.disabled = false;
          imageButton.addEventListener("click", (event) => {
            event.stopPropagation();
            openTaskImageViewer(task, imageRecord);
          });
        })
        .catch((error) => {
          console.error("Task image could not be loaded", error);
        });
    }

    taskContent.append(taskInfo);

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
    let taskDescriptionButton = null;
    const isImportant = task.important === true;
    const hasDescription = Boolean(task.description?.trim());
    taskExtrasButton.type = "button";
    taskExtrasButton.classList.add("task-extras-button");
    taskExtrasButton.setAttribute("aria-label", translate("openTaskExtras"));
    taskExtrasButton.title = translate("taskExtrasTitle");
    taskExtrasButton.innerHTML =
      '<i class="bi bi-plus-lg" aria-hidden="true"></i>';
    taskExtrasButton.addEventListener("click", (e) => {
      e.stopPropagation();
      setTaskExtrasOpen(task);
    });

    if (hasDescription) {
      newTask.classList.add("has-description");
      taskDescriptionButton = document.createElement("button");
      taskDescriptionButton.type = "button";
      taskDescriptionButton.classList.add("task-description-button");
      taskDescriptionButton.setAttribute(
        "aria-label",
        translate("editDescription"),
      );
      taskDescriptionButton.innerHTML =
        '<i class="bi bi-file-earmark-text-fill" aria-hidden="true"></i>';

      const descriptionPreview = document.createElement("span");
      const previewId = `task-description-preview-${task.id}`;
      descriptionPreview.id = previewId;
      descriptionPreview.classList.add("task-description-preview");
      descriptionPreview.setAttribute("role", "tooltip");

      const previewHeading = document.createElement("span");
      previewHeading.classList.add("task-description-preview-heading");
      const previewIcon = document.createElement("i");
      previewIcon.className = "bi bi-card-text";
      previewIcon.setAttribute("aria-hidden", "true");
      const previewLabel = document.createElement("span");
      previewLabel.textContent = translate("description");
      previewHeading.append(previewIcon, previewLabel);

      const previewText = document.createElement("span");
      previewText.classList.add("task-description-preview-text");
      previewText.textContent = task.description.trim();

      const taskTags = extractTags(task.description);
      const previewTags = document.createElement("span");
      previewTags.classList.add("task-description-preview-tags", "task-tag-list");
      renderTagChips(previewTags, taskTags);
      previewTags.hidden = taskTags.length === 0;

      const previewAction = document.createElement("span");
      previewAction.classList.add("task-description-preview-action");
      const previewActionText = document.createElement("span");
      previewActionText.textContent = translate("editDescription");
      const previewActionIcon = document.createElement("i");
      previewActionIcon.className = "bi bi-arrow-right";
      previewActionIcon.setAttribute("aria-hidden", "true");
      previewAction.append(previewActionText, previewActionIcon);

      descriptionPreview.append(
        previewHeading,
        previewText,
        previewTags,
        previewAction,
      );
      taskDescriptionButton.append(descriptionPreview);
      taskDescriptionButton.setAttribute("aria-describedby", previewId);
      taskDescriptionButton.addEventListener("click", (e) => {
        e.stopPropagation();
        setTaskExtrasOpen(task);
        showTaskDescriptionView();
      });
    }

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
      removeTask(task.id);
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

    newTask.append(taskContent, taskExtrasButton);
    if (taskDescriptionButton) {
      newTask.append(taskDescriptionButton);
    }
    newTask.append(importanceButton, taskActions);

    // Task'i statusune gore dogru listeye basiyoruz
    if (task.status === "todo") {
      todoList.append(newTask);
    } else if (task.status === "doing") {
      doingList.append(newTask);
    } else if (task.status === "done") {
      doneList.append(newTask);
    }
  });

  updateQuickFilterControls();
  updateTaskSearchStatus(filteredTasks.length);
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

todoForm.addEventListener("submit", async function (e) {
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

  const taskImage = pendingTaskImage;
  if (taskImage) {
    addMissionButton.disabled = true;
    taskImagePicker.disabled = true;
    taskImageStatus.textContent = translate("savingImage");
    try {
      await saveTaskImage(task.id, taskImage);
      task.hasImage = true;
      task.imageName = taskImage.name;
    } catch (error) {
      console.error("Task image could not be saved", error);
      taskImageStatus.textContent = translate("imageSaveFailed");
      addMissionButton.disabled = false;
      taskImagePicker.disabled = false;
      return;
    }
  }

  tasks.push(task);

  saveTasks();
  renderTasks();

  taskInput.value = "";
  clearTaskImageDraft();
  taskImageStatus.textContent = "";
  addMissionButton.disabled = false;
  taskImagePicker.disabled = false;
  taskInput.focus();
});
