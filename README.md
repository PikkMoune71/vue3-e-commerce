# Projet E-Commerce avec le framework VueJs

Membre : Picard Antoine

# Description du projet

Projet réalisé pendant l'élective VueJS à Ynov. Ce projet a pour but de réaliser une application e-commerce. Pour réaliser ce projet, plusieurs directives devaient être respectées :
- Vous devez créer obligatoirement un projet Vite en utilisant VueRouter et Pinia (aucune autre librairie JS n'est autorisée)
- Vous pouvez utiliser les données d'une API publique (ex: https://fakestoreapi.com) ou vos propres données
- Le site doit être responsive (adapté au mobile et au desktop)
- Vous pouvez utiliser un framework CSS (CSS uniquement, pas de Javascript)
- Vous êtes libres concernant le design (logo, icônes, ...)

De plus, voici les différents éléments qu'il fallait affichés sur notre application :

### Menu
Le menu de l'application propose d'accéder aux pages suivantes :

- Une page "Tous les produits" qui affiche tous les produits du site,
- Une page par Catégorie qui affiche les produits de la catégorie,
- Une page "Mon panier" avec le nombre de produits dans le panier (ex: Mon panier (8))
- Les liens actifs doivent être visibles.

### Pages Catalogue ("Tous les produits" et "Catégorie")
Les pages catalogue affichent une liste de produit et pour chaque produit :
- Image
- Nom
- Prix
- Note
- Lien "Ajouter" qui ajoute le produit au panier
- Lien "Détails" qui redirige vers la page du produit

Il est possible d'ordonner les produits selon :
- note décroissante (défaut)
- note croissante
- ordre alphabétique
- ordre alphabétique inversé

Il est possible de chercher un nom de produit depuis un champs de recherche.

### Page Produit
La page produit affiche :
- Image
- Nom
- Prix
- Note et nombre de votes
- Description
- Catégorie, avec un lien vers la page Catégorie
- Lien "Ajouter" qui ajoute le produit au panier

### Mon Panier
Depuis le panier, il est possible de :
- Consulter les produits ajoutés et par produit:
    - voir : image, nom, prix, quantité
    - accéder à la page produit
    - modifier la quantité (avec des boutons "+" et "-")
    - supprimer le produit
- Voir le prix total
- Payer (bouton qui réinitialise le panier)


## Lien pour visionner le projet

J'ai fait le choix du mettre en ligne le projet sur Vercel pour sa rapidité et simplicité de mise en ligne d'un petit projet comme celui-ci. [Cliquez ici pour voir mon projet](https://vue3-e-commerce.vercel.app/)

## Installation du projet
```sh
git clone https://github.com/PikkMoune71/vue3-e-commerce.git
```
#### A la racine du projet, installer les dépendances :
```sh
npm install
```

#### Lancer le projet :

```sh
npm run dev
```
