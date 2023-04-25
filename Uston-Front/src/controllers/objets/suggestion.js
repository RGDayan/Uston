export const suggestionTemplate = {
    id: 0,
    projet_id: 0,
    titre: "Nouvelle suggestion",
    description: "",
    created_at: new Date(Date.now()).toISOString()
}

export const suggestionTemplateAvecCategorie = {
    id: 0,
    titre: "Nouveau récit utilisateur",
    description: "",
    created_at: new Date(Date.now()).toISOString(),
    projet: {
        id : 0,
        categories: []
    },
    categories: [],
    messages: [{
        id: 0,
        contenu: "",
        created_at: new Date(Date.now()).toISOString()
    }]
}