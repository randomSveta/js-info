/* //https://javascript.info/arrow-functions-basics#rewrite-with-arrow-functions

let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask("Do you agree?",
    () => alert("You agreed."),
    () => alertalert("You canceled the execution.")
) */