# BowlingGameWithJasmine

Dans cet exercice , on va faire des tests unitaires en JavaScript en utilisant Jasmine.js
On va prendre comme exemple un jeu de Bowling. 

## Règles du jeu

Un joueur lance deux fois par tour, et il a le droit à 10 tours dans le match (donc 20 lancers au total).

Un Gutter signifie que le joueur ne touche aucunne quille.

Un Strike signifie que le joeur a touché toutes les quilles en 1 seul lancer.

Un Spare signifie que le joueur a touché toutes les quilles avec 2 lancers.

Le score d'un joeur est affiché dans un Frame (un cadre). 

Un jeu de bowling a 10 frames avant que la partie soit terminée.


## Syntaxe et fonctions de Jasmine

### Les blocs "describe" ou les Suites

Dans Jasmine, on va configurer des tests de différentes fonctionnalités en créant d'abord un bloc  describe .  describe  est tout simplement une fonction à laquelle on va passer une chaîne qui décrit la fonctionalité testée.

Exemple: 

        describe("when the user clicks the button", function() {

            // test clicking button functionality here

        });

On peut organiser nos tests en créant plusieurs suites. 

### Les Spécifications

On va utiliser une syntaxe similaire à celle des suites pour écrire les specifications (ou "specs" tout court), sauf qu'au lieu d'employer le mot  describe , on emploie it ,  également une fonction de Jasmine!

it  prend une chaîne de caractères et une fonction comme arguments. La chaîne de caractères est le titre du test, qui doit être clair et lisible. La fonction contient le test lui-même.

Exemple:

    describe("Video Player", function() {
        describe("when user clicks the button", function() {
            it("should automatically play the video", function() {
            };
        });

Les suites et les spécifications nous permettent d'avoir une structure de tests qui est organisée par fonctionnalité. 

### Les Matchers

Un matcher compare une valeur réelle avec une valeur attendue.

Voici les matchers inclus par défaut dans Jasmine:

    expect(fn).toThrow(e);
    expect(instance).toBe(instance);
    expect(mixed).toBeDefined();
    expect(mixed).toBeFalsy();
    expect(number).toBeGreaterThan(number);
    expect(number).toBeLessThan(number);
    expect(mixed).toBeNull();
    expect(mixed).toBeTruthy();
    expect(mixed).toBeUndefined();
    expect(array).toContain(member);
    expect(string).toContain(substring);
    expect(mixed).toEqual(mixed);
    expect(mixed).toMatch(pattern);


Les matchers sont assez simples à lire.
Par exemple, la ligne de code  expect(5).toBeLessThan(6); ressemble beaucoup à une phrase en anglais "I expect 5 to be less than 6."

On peut également tester un résultat négatif avec ces matchers. 
Pour tester un cas négatif, il suffit d'écrire expect(6).not.toBeLessThan(6); . 

### Before Each and After Each

Dans Jasmine,  beforeEach  et  afterEach  sont des fonctions globales qui sont appelées une fois avant ou après chaque spec dans le bloc de  describe  associé.

## Processus de Testing

### BDD - Behaviour Driven Development

La première étape dans le processus de testing, c'est de détailler les comportements qu'on attend d'une certaine fonctionnalité.

On détaille ces comportements en utilisant des mots clés BDD comme Given, When, Then, And qui veut dire (Étant donné, Quand, Alors, Et).

Ces comportements attendus vont guider le processus d'écriture du code.

### TDD - Test Driven Development

Le TDD est l'étape suivante naturelle pour fermer la boucle de BDD. On a identifié des comportements avec la BDD et maintenant on va écrire des tests pour ces comportements.
