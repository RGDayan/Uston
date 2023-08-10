export const getListeProjets = store => next => async () => {
    let listProjets = []

    await fetch(process.env.REACT_APP_URL_API + "/projets")
        .then((res) => {
            return res.json();
        })
        .then((res) => listProjets = res)

    let action = {
        type: "projet/setListeProjets",
        payload: listProjets
    }

    return next(action)
}