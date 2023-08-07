export function handle(e, objet, fonction){
    fonction(
        {...objet, [e.target.name]: e.target.value.trim()}
    )
    console.log(objet);
}