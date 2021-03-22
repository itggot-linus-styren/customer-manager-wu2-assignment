# customer-manager-wu2

## Uppgift
Skapa en applikation för att hantera kunder. Funktionalitet är CRUD (create, read, update och delete) för kunder lagrat i localStorage.

1. Acceptera uppgiften på classroom och tanka ner github repot som skapas.
2. Återskapa funktionalitet från https://github.com/itggot-linus-styren/customer-manager-wu2.
3. Lägg till följande attribut för kunder: telefonnummer, address, stad, land.
4. Gör det möjligt att ta bort en kund.
5. Gör det möjligt att redigera en existerande kund.
6. Pusha upp koden till github och verifiera att testet funkar under "pull requests".

Bonus uppgift:
- Lägg till en profil bild baserat på vilket id kunden har. Du kan använda följande som grund:
```javascript
const url = `https://avatars2.githubusercontent.com/u/${$route.params.id}?s=360`;
```
Där `$route.params.id` är en siffra som motsvarar vilken kund det är. För att lägga till en `<img>` med dynamisk src kan du använda `:src="..."`.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
1