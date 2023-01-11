import { redirect } from "react-router-dom";



const URL= "http://localhost:4020"


// Create Action
export const createAction = async ({request}) => {
    const formData = await request.formData();

    const newPerson = {
        name: formData.get('name'),
        image: formData.get('image'),
        title: formData.get('title'),
    }
// Send new person to our API
    await fetch(URL + '/people', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
    });
//redirect to index
    return redirect('/');
};

// Update Action
export const updateAction = async ({ request, params }) => {
    const formData = await request.formData();
    const updatedPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title"),
    };

    await fetch(URL + "/people/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPerson),
    });

    return redirect("/");
};

//Delete Action
export const deleteAction = async ({params}) => {
    await fetch(URL + '/people' + params.id, {
        method: "delete",
    });
    return redirect("/");
}