// monmodule.js
console.log(module); // Mon module courant, il s’agit d’un objet avec quelques propri´et´es,
// la plus importante ´etant pour nous "exports"
console.log(module.exports); // Un objet vide, qui sera l’API publique de mon module
// Note: "exports" est aussi d´efini, et est un synonyme de module.exports
// Une fonction priv´ee, que seul mon module peut utiliser
function log(texte) {
console.log(texte);
}
// Une fonction publique, ou "export´ee"
exports.coucouGamin = function coucouGamin() {
log("coucou gamin");
}
