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
const modeInputs = document.querySelectorAll('input[name="interactionMode"]');
const focusModeToggle = document.getElementById("focusModeToggle");

// Secilen gorev tasima yontemini tarayicida kalici olarak saklar. madeByCodex
const interactionModeKey = "interactionMode";
let interactionMode = localStorage.getItem(interactionModeKey) || "buttons";

// Focus efektinin kullanici tercihine gore acik veya kapali baslamasini saglar. madeByCodex
const focusModeKey = "focusModeEnabled";
let isFocusModeEnabled = localStorage.getItem(focusModeKey) !== "false";
focusModeToggle.checked = isFocusModeEnabled;
let touchDragState = null;

// Focus ayari degistiginde tercihi kaydeder ve aktif odak efektini gerekirse temizler. madeByCodex
focusModeToggle.addEventListener("change", () => {
  isFocusModeEnabled = focusModeToggle.checked;
  localStorage.setItem(focusModeKey, String(isFocusModeEnabled));

  if (!isFocusModeEnabled) {
    document.body.classList.remove("task-focus-active");
    document.querySelectorAll(".tasks-section li.is-focused").forEach((task) => {
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
  if (e.pointerType === "mouse" || interactionMode !== "dragdrop" || e.target.closest("button")) {
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
document.addEventListener("pointermove", handleTouchPointerMove, { passive: false });
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

// Ayarlar panelinin gorunurlugunu ve erisilebilirlik durumunu birlikte gunceller. madeByCodex
function setSettingsPanelOpen(isOpen) {
  settingsPanel.classList.toggle("is-open", isOpen);
  settingsOverlay.classList.toggle("is-visible", isOpen);
  settingsButton.setAttribute("aria-expanded", String(isOpen));
  settingsPanel.setAttribute("aria-hidden", String(!isOpen));
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
closeSettingsButton.addEventListener("click", () => setSettingsPanelOpen(false));
settingsOverlay.addEventListener("click", () => setSettingsPanelOpen(false));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setSettingsPanelOpen(false);
  }
});

function renderTasks() {
  todoList.innerHTML = "";
  doingList.innerHTML = "";
  doneList.innerHTML = "";

  tasks.forEach((task) => {
    // Gorev satirini secilen moda gore suruklenebilir yapar veya pasiflestirir. madeByCodex
    const newTask = document.createElement("li");
    const isDragDropMode = interactionMode === "dragdrop";
    newTask.draggable = isDragDropMode;
    newTask.tabIndex = 0;
    let focusTimer;

    // Gorevin uzerinde kisa bir bekleme sonunda odaklanma efektini baslatir. madeByCodex
    newTask.addEventListener("pointerenter", () => {
      if (interactionMode !== "buttons" || !isFocusModeEnabled) {
        return;
      }

      focusTimer = setTimeout(() => {
        newTask.classList.add("is-focused");
        document.body.classList.add("task-focus-active");
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
    newTask.addEventListener("pointerdown", (e) => handleTouchPointerDown(e, task));

    if (isDragDropMode) {
      newTask.addEventListener("dragstart", (e) => handleDragStart(e, task));
      newTask.addEventListener("dragend", handleDragEnd);
    }

    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");

    // To Do btn
    const todoButton = document.createElement("button");
    todoButton.textContent = "To Do";
    todoButton.classList.add("todo-btn");

    todoButton.addEventListener("click", () => {
      task.status = "todo";
      saveTasks();
      renderTasks();
    });

    // Doing btn
    const doingButton = document.createElement("button");
    doingButton.textContent = "Doing";
    doingButton.classList.add("doing-btn");

    doingButton.addEventListener("click", () => {
      task.status = "doing";
      saveTasks();
      renderTasks();
    });

    // Done btn
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.classList.add("done-btn");

    doneButton.addEventListener("click", () => {
      task.status = "done";
      saveTasks();
      renderTasks();
    });

    // Delete btn
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

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

    newTask.append(taskText, taskActions);

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
updateModeInterface();

// Sayfa acilir acilmaz localStorage'daki taskleri ekrana bas
renderTasks();

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
  };

  tasks.push(task);

  saveTasks();
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
});
