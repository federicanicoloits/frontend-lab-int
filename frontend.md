# KickOff5

Il sito Kickoffive dispone di un'homepage che mette in evidenza tutti gli elementi cruciali, tra cui le ultime news, i risultati delle partite più recenti e la classifica. Ciascuna sezione, quali news, risultati partite e classifica, offre soltanto una preview, richiedendo un clic per accedere alla pagina specifica.

Nella sezione delle news, è possibile approfondire ciascun articolo cliccandolo. Oltre ai dettagli principali, la pagina specifica propone ulteriori news correlate.

La pagina della classifica presenta informazioni complete sulle squadre, inclusi punteggi, differenza reti e partite giocate.

Nella sezione dedicata ai risultati delle partite, vengono mostrate le ultime partite della giornata. Cliccando su una partita specifica, si accede a una pagina dettagliata con informazioni come le formazioni di casa e ospiti, insieme agli highlights della partita.

## Prerequisiti

Elenco dei requisiti necessari per far funzionare il progetto.

- Node.js
- npm (Node Package Manager)
- Angular CLI (richiede come versione minima di node la 18.10)

## Installazione

1. Scarica la cartella zip di frontend da https://github.com/federicanicoloits/frontend-lab-int e aprirla.
2. Prendere il conteunto della cartella frontend e entrare dentro alla cartella.
3. Installare le dipendenze con
   npm install
4. Scaricare e fare partire il backend.
5. Fare partire il frontend con npm start.

Il progetto sarà ora accessibile all'indirizzo http://localhost:4200/

## Struttura del Progetto

Il progetto è organizzato in diverse cartelle per garantire una struttura chiara e modulare:

- COMPONENTS: Contiene i componenti riutilizzabili dell'applicazione. Questa cartella è
  ulteriormente suddivisa in:
  - SHARED: Componenti condivisi e utilizzati in più parti dell'applicazione.
  - SPECIFIC: Componenti utilizzati solo in specifiche sezioni dell'applicazione.
- MODELS: Contiene i modelli che rappresentano le risposte dati fornite dal database.
- VIEWS: Contiene le viste dell'applicazione, ovvero le diverse schermate e pagine.
- SERVICES: Questa cartella è dedicata ai servizi, inclusi quelli per le chiamate API.
- ASSETS: Contiene risorse statiche come immagini, loghi e file JSON

## Caratteristiche Frontend

L'applicativo si distingue per le seguenti caratteristiche chiave:

- Interfaccia Grafica Innovativa: L'interfaccia grafica è all'avanguardia e ottimizzata per
  l'uso su dispositivi mobili, garantendo un'esperienza utente simile a un'app nativa. Ciò
  consente agli utenti di sentirsi a proprio agio e familiari con l'ambiente.
- Ottimizzazione per il Mobile: L'interfaccia è progettata specificamente per garantire
  un'esperienza fluida e intuitiva su dispositivi mobili, riflettendo uno stile simile a un'app
  nativa.
- News Aggiornate: Il nostro obiettivo è fornire notizie costantemente aggiornate,
  mantenendo informati gli utenti su eventi recenti e rilevanti.
- Interfaccia Grafica Accattivante: Per emergere in un mercato competitivo, ci
  concentriamo sull'offrire un'interfaccia grafica accattivante che catturi l'attenzione degli
  utenti.

Ci impegniamo a creare un prodotto che non solo soddisfi le esigenze informative degli utenti ma
fornisca anche un'esperienza visiva e interattiva di alta qualità.

## Lavoro Team Front-end

Abbiamo sia lavorato in modo autonomo sia lavorato insieme sui merge o sulla risoluzione di alcuni
task.

## Licenza

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
