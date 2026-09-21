# Francesco Ferro - guestbook con messaggi.json

La pagina `messaggi.html` legge l'archivio da `messaggi.json`.

## Pubblicare un nuovo messaggio ricevuto via email
1. Su GitHub apri `messaggi.json`.
2. Clicca la matita **Edit this file**.
3. Subito dopo la prima parentesi `[` inserisci:

```json
{
  "nome": "Mario Rossi",
  "data": "21/09/2026",
  "messaggio": "Un caro ricordo del Dott. Francesco Ferro."
},
```

4. Premi **Commit changes**.
5. Il sito si aggiornerà automaticamente.

Pubblica solo `nome`, `data` e `messaggio`. Non inserire l'email del mittente.

Il modulo di invio continua a mandare le richieste via Google Apps Script per la verifica manuale.
