<div align="center">
    <h1>BlitzPHP + Vue3 Application Starter</h1>
    <blockquote>Un kit de démarrage simple pour le développement d'application BlitzPHP et Vue 3.</blockquote>
</div>
<br>
<p align="center">
  <a href="https://github.com/dimtrovich/blitzphp-vue-starterkit/releases">
    <img src="https://custom-icon-badges.herokuapp.com/github/v/release/dimtrovich/blitzphp-vue-starterkit?logo=tag">
  </a>
  <a href="https://packagist.org/packages/dimtrovich/blitzphp-vue-starterkit">
    <img src="https://badges.hiptest.com:/packagist/dt/dimtrovich/blitzphp-vue-starterkit?color=%23c700ff&logo=packagist&logoColor=%23c700ff">
  </a>
  <img src="https://custom-icon-badges.herokuapp.com/packagist/l/dimtrovich/blitzphp-vue-starterkit?logo=law">
<p>

## A propos

Ce depot est un kit de demarrage pour les projets d'applications fait en Vue.Js (pour le frontend) et BlitzPHP (pour le backend).
En temps, normal, on pour faire de tel applications (api + spa), on doit avoir 2 projets distincts (un pour le frontend et un autre pour le backend). 
Certes il existe des solutions pour palier à ce problème de double application (notament Inertia) mais elle resout le problème en partie. 

## Fonctionnalités :
- 💡 **Application monopage (SPA)** ultra-rapide.
- 🔥 **Hot Module Replacement (HMR)** inclus.
- 🧩 Installation et mise à jour simplifiées.
- 🪓 Personnalisation facile.
- 🔧 **Zéro configuration** requise.
- ⭐ **Application web progressive (PWA)**.
- ✨ Et bien plus encore...

## Pré-packagé :

> **Note :** Aucun de ces plugins/frameworks n'est obligatoire. Vous pouvez les supprimer ou les remplacer à volonté.
> 
- [Vite](https://vitejs.dev/) Est utilisé comme serveur de développement et outil de construction.
- [Vue Router](https://router.vuejs.org/) est utilisé pour le routage.
- [Pinia](https://pinia.vuejs.org/) est utilisé pour la gestion des états. De plus, les données d'états peuvent être persistés grâce au plugin [pinia persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/).
- [Vue I18n](https://vue-i18n.intlify.dev/installation.html) est utilisé pour les traductions.
- [Vue Meta](https://github.com/nuxt/vue-meta) est utilisé pour la gestion des metadonnées HTML.
- [Axios](https://github.com/axios/axios) est utilisé pour effectuer des requêtes. Certains intercepteurs sont déjà définis dans src/plugins/axios.js
- [Dayjs](https://day.js.org) est utilisé pour manipuler aisement les dates
- [Bootstrap Vue Next](https://bootstrap-vue-next.github.io/bootstrap-vue-next/) est utilisé pour la mise en page avec Bootstrap 5
- [Vite Plugin PWA](https://github.com/antfu/vite-plugin-pwa) : Plugin PWA sans configuration.

## Installation :

> Vérifiez que votre serveur respecte les [exigences de CI4](http://blitz-php.byethost14.com/docs/dev/deploiement#exigeances-du-serveur).

Exécutez cette commande pour créer un projet :
```
composer create-project dimtrovich/blitzphp-vue-starterkit
```

## Configuration
- Exécutez `npm install` pour installer les dépendances.
- Lancez `npm run dev` pour servir les assets.
- Démarrez le serveur BlitzPHP : `php klinge serve` ou via un hôte virtuel.

> **IMPORTANT :**
> 
> Aucun asset n'est pré-compilé après l'installation. Exécutez `npm run dev` pour les générer ou `npm run build` pour une version optimisée.

## Personnalisation :
Ce projet utilise le package [**BlitzPHP Vite**](https://github.com/dimtrovich/blitzphp-vite). [En savoir plus](https://github.com/dimtrovich/blitzphp-vite).

## Un problème ?
N'hésitez pas à ouvrir une issue, nous corrigerons dès que possible.

## Contributions :
Toute aide est la bienvenue ! PRs acceptées avec gratitude.

## Licence
MIT License &copy; 2025 [Dimitri Sitchet Tomkeu](https://github.com/dimtrovich)