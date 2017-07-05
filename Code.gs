function createAndSendDocument() {
  // Create a new Google Doc named 'Hello, world!'
  var doc = DocumentApp.create('Hello, world!');
  // Access the body of the document, then add a paragraph.
  doc.getBody().appendParagraph('This document was created by Google Apps Script.');
  // Get the URL of the document.
  var url = doc.getUrl();
  // Get the email address of the active user - that's you.
  var email = Session.getActiveUser().getEmail();
  // Get the name of the document to use as an email subject line.
  var subject = doc.getName();
  // Append a new string to the "url" variable to use as an email body.
  var body = 'Link to your doc: ' + url;
  // Send yourself an email with a link to the document.
  GmailApp.sendEmail(email, subject, body);
}
//========================================================================
function testscriptforfileexistance() {
 checkFile2('A_plus_I.apkg', 'Tech Arch')
}

//
function checkFile2(filename,foldername){
  var folder = DriveApp.getFoldersByName(foldername);
  Logger.log(folder.hasNext());
  //Folder does not exist
  if(!folder.hasNext()){
  Logger.log("No Folder Found");
  }
  //Folder does exist
  else{
    Logger.log("Folder Found")
    var file   = folder.next().getFilesByName(filename);
    if(!file.hasNext()){
       Logger.log("No File Found");
    }
    else{
       Logger.log("File Found");
    }
  }
}
//===================================================
  
function getIDs(){
 var files = DriveApp.getFolders();
 while (files.hasNext()) {
   var file = files.next();
   Logger.log(file.getName());
   Logger.log(file.getId());
 }
  }
//=====================================================
function getonlymyfolders() {
//root folder
//Logger.log (DriveApp.getRootFolder());
//all folders
//var folders = DriveApp.getFoldersByName("CV_Archive");
  
var folders = DriveApp.getFolders();
  while (folders.hasNext()) {
   var folder = folders.next();
    var editors = folder.getEditors();
      if (1 > editors.length) {
      Logger.log(folder.getName());
      }
 //  Logger.log(viewers.getName());
 // Logger.log(viewers.getEmail());   
  }
  
  //var files = folder.getFiles();  
// while (files.hasNext()) {
 //  var file = files.next();
  // Logger.log(file.getName());
 //  }
 //  Logger.log(folder.getName());
 //  Logger.log(folder.getOwner());
}


//===============================================
function opendocbyid() {
var doc = DocumentApp.openById('17JbqmvepLpXfYl7ItFzeSnz8oclGSR1gKUH9BKzmY9Q');
Logger.log(doc.getName());
  //////////we are here
}

//===================================================
function getidoffilesinfolder()  {
var folders = DriveApp.getFoldersByName("CV_Archive");
var folder = folders.next();
var files = folder.getFiles();  
while (files.hasNext()) {
  var file = files.next();
  Logger.log(file.getName());
  Logger.log(file.getId());
 }
}
 //  Logger.log(folder.getName());
 //  Logger.log(folder.getOwner());


//===================================================
function FindEmailSentenceinDocument() {
var doc = DocumentApp.openById('17JbqmvepLpXfYl7ItFzeSnz8oclGSR1gKUH9BKzmY9Q');
////Logger.log(doc.getName());
var DataB = doc.getBody();
var docText = (DataB.getText());
  if (docText) {
    if (/task/.test(docText)) {
        Logger.log(/[^.]*@[^.]*\./.exec(docText))
        Logger.log(/@/.toString(docText)) 
    }
   }
}

//--------------------------------JS-EXERCISES----------
//===================================================
function testarraysort() {
var points = [40, 100, 1, 5, 25, 10];
  Logger.log("init=" + points);
  points.sort()
  Logger.log("sort=" + points);
  points.sort(function(a, b){
Logger.log("a=" + a);
Logger.log("b=" + b);
Logger.log("a-b=" + (a - b));
return (a-b);
  })
Logger.log("valuesort" + points);
}

//====================================================
function searchinstring(){
var str = "people do task"
//INDEXOF
if (str) {
    if (str.indexOf('task') > -1) {
        Logger.log("found")
    }
   }
//REGEX
 if (str) {
    if (/task/.test(str)) {
        Logger.log("found2")
    }
   }
}

///===============writeToActiveSheet
function writetoactivesheet(data, sheet, row, column){
  var Asheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet)
  var Acell = Asheet.getRange("a1").offset(row, column)
  Acell.setValue(data)
}
