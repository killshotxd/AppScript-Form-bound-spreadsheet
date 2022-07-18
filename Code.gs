function onOpen() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Start", "showSidebar")
    .addToUi();
}

function showSidebar() {
  let html = HtmlService.createTemplateFromFile("sidebar");
  let ui = html.evaluate().setTitle("Form Details");
  SpreadsheetApp.getUi().showSidebar(ui);
}

function getNumber(phoneInputValue, nameInputValue, emailInputValue) {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getActiveSheet();
  const d = new Date();
  let todayDate = d.toLocaleDateString();
  let time = d.toLocaleTimeString();

  header();

  sheet.appendRow([
    time,
    todayDate,
    phoneInputValue,
    nameInputValue,
    emailInputValue,
  ]);
  // sheet.getRange(1, 1, rows.length, 3).setValues(rows);
}

function header() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let headers = sheet.getRange("A1:E1");
  headers.setValues([["Time", "Date", "Number", "Name", "Email"]]);
  headers.setBackground("#b7e1cd");
  headers.setFontSize(12);
}
