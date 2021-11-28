// console.log("JS included")

const formJI = document.getElementById('formJI');
const id = Date.now();
let namee = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

formJI.addEventListener('submit', (e) => {
    e.preventDefault();
    const InpId = id;
    const InpName = namee.value;
    const InpEmail = email.value;
    const InpSub = subject.value;
    const InpMsg = message.value;

    namee.value = ""
    email.value = ""
    subject.value = ""
    message.value = ""

    db.ref("Submissions/" + InpId).set({
        Id: InpId,
        Name: InpName,
        Email: InpEmail,
        Subject: InpSub,
        Message: InpMsg,
      });
})