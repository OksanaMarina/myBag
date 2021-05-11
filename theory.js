function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function Done() {
    console.log('Я прошел этот урок');
}
learnJS('JavaScript', Done);
