// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

export async function addUser(first_name, last_name, email) {
    const response = await fetch(getServerURL() + "/" + "users");
    const data = await response.json();

    const newId = data[data.length -1].id + 1

    await fetch(getServerURL() + "/" + "users", {
        method: "POST",
        body: JSON.stringify({
            id: newId,
            first_name: first_name,
            last_name: last_name,
            email: email
            }),
        headers: { "Content-Type": "application/json; charset=UTF-8" 
    }
 })
}
