export const recitTemplate = {
    id: 0,
    projet_id: 0,
    titre: "Nouveau récit",
    description: "",
    created_at: new Date(Date.now()).toISOString()
}

export const recitAvecCategoriesTemplate = {
    id: 0,
    titre: "Nouveau récit utilisateur",
    description: "",
    created_at: new Date(Date.now()).toISOString(),
    projet: {
        id : 0,
        categories: []
    },
    categorie: [],
    etapes: []
}