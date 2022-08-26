const axios = require("axios").default;

async function AllWizards() {
  const wizards = await axios({
    url: "http://localhost:3000/wizards/all",
    method: "GET",
  });
  console.log(wizards.data);
}

async function NewWizard() {
  try {
    const wizard = await axios({
      url: "http://localhost:3000/wizards/create",
      data: { "id": 4,"name": "Remus Lupin", "knowHow": "true", "corporeal_id": "2", "createdAt": "null"},
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    return wizard;
  } catch (e) {
    console.error(e);
  }
}

async function AllPatronuses() {
  const patronuses = await axios({
    url: "http://localhost:3000/patronus/all",
    method: "GET",
  });
  console.log(patronuses.data);
}

async function NewPatronuses() {
  try{
    const patronuses = await axios({
      url: "http://localhost:3000/patronus/create",
      method: "POST",
      data: {"id": "7", "animal": "Dog"},
    });
  }
  catch(e) {console.error(e)}
}


//NewWizard();
//AllWizards();
NewPatronuses();
//AllPatronuses();