
# Cloud-Architektur Docker Compose Demo-Projekt

Dies ist ein einfaches Cloud-Architektur-Projekt, das zeigt, wie man eine Full-Stack-Anwendung mit Docker Compose erstellt. Das Projekt umfasst ein **Spring Boot**-Backend, ein **React**-Frontend und eine **PostgreSQL**-Datenbank. Alle Komponenten werden mit Docker containerisiert, und ein **Nginx**-Reverse-Proxy wird verwendet, um Anfragen zwischen Frontend und Backend zu routen.

## Inhaltsverzeichnis

- [Verwendete Technologien](#verwendete-technologien)
- [Projektstruktur](#projektstruktur)
- [Voraussetzungen](#voraussetzungen)
- [Installation und Ausführung des Projekts](#installation-und-ausführung-des-projekts)
- [Wie funktioniert es](#wie-funktioniert-es)
- [API-Endpunkte](#api-endpunkte)
- [Frontend-Funktionen](#frontend-funktionen)

---

## Verwendete Technologien

### Backend:
- **Java 17**: Das Backend ist in der neuesten LTS-Version von Java geschrieben.
- **Spring Boot**: Das Java-Framework wird verwendet, um die REST-API zu erstellen.
- **Maven**: Tool für die Abhängigkeitsverwaltung und den Build des Projekts.

### Frontend:
- **React 18**: Die JavaScript-Bibliothek wird verwendet, um die Benutzeroberfläche des Frontends zu erstellen.
- **CSS**: Für modernes Styling und Animationen der React-App.

### Datenbank:
- **PostgreSQL**: Die relationale Datenbank wird verwendet, um Daten zu speichern.

### Containerisierung und Proxy:
- **Docker**: Alle Dienste werden mit Docker containerisiert.
- **Docker Compose**: Wird verwendet, um mehrere Dienste zu orchestrieren (Frontend, Backend, Datenbank und Nginx).
- **Nginx**: Wird als Reverse-Proxy verwendet, um Anfragen an den richtigen Dienst (Frontend oder Backend) weiterzuleiten.

---

## Projektstruktur

Hier ist die Struktur des Projekts und die Beschreibung der einzelnen Ordner und Dateien:

```
.
├── backend                # Der Spring Boot-Backend-Dienst
│   ├── src                # Java-Quellcode für das Backend
│   ├── Dockerfile         # Dockerfile zum Erstellen des Backends
│   └── pom.xml            # Maven-Build-Datei
├── frontend               # Der React-Frontend-Dienst
│   ├── src                # React-Quellcode für das Frontend
│   ├── public             # Ordner für statische Assets
│   ├── Dockerfile         # Dockerfile zum Erstellen des Frontends
│   └── package.json       # npm-Konfigurationsdatei und Abhängigkeiten
├── db                     # Initialisierungsskript für PostgreSQL
│   └── init.sql           # SQL-Skript zur Initialisierung der Datenbank
├── nginx.conf             # Nginx-Konfigurationsdatei
├── docker-compose.yml     # Docker Compose-Konfigurationsdatei
└── README.md              # Projektdokumentation (diese Datei)
```

---

## Voraussetzungen

Bevor du das Projekt ausführst, stelle sicher, dass die folgenden Tools installiert sind:

1. **Docker**: Installiere Docker von [hier](https://docs.docker.com/get-docker/).
2. **Docker Compose**: Wird auf den meisten Plattformen mit Docker installiert. Falls nötig, installiere es [hier](https://docs.docker.com/compose/install/).
3. **Git**: Zum Klonen des Repositories. Installiere es von [hier](https://git-scm.com/).

---

## Installation und Ausführung des Projekts

### 1. Repository klonen

```bash
git clone https://github.com/dein-benutzername/cloudarchitecturedockercompose.git
cd cloudarchitecturedockercompose
```

### 2. Container erstellen und starten

Verwende Docker Compose, um alle Dienste zu erstellen und auszuführen:

```bash
docker-compose up --build
```

Dieser Befehl wird:
- Die Docker-Images für das Frontend, Backend und Nginx erstellen.
- Die Container für PostgreSQL, Frontend, Backend und Nginx starten.

### 3. Auf die Anwendung zugreifen

Sobald die Container ausgeführt werden, kannst du auf die Anwendung unter folgenden URLs zugreifen:

- **Frontend**: `http://localhost` (wird über Nginx bereitgestellt)
- **API (Backend)**: `http://localhost/api/greetings`

---

## Wie funktioniert es

### Backend (Spring Boot)
- Das Backend ist eine Spring Boot-Anwendung, die eine REST-API zum Verwalten von "Greetings" bereitstellt.
- Es verbindet sich mit einer PostgreSQL-Datenbank, um Greetings zu speichern und abzurufen.
- API-Endpunkte bieten grundlegende CRUD-Operationen.

### Frontend (React)
- Das Frontend ist eine React-Anwendung, mit der Benutzer Greetings anzeigen und hinzufügen können.
- Es kommuniziert mit dem Spring Boot-Backend über den `/api/greetings`-Endpunkt.
- Das Frontend wird in der Produktions-Docker-Umgebung von Nginx bereitgestellt.

### PostgreSQL-Datenbank
- Ein PostgreSQL-Container wird verwendet, um Greeting-Daten persistent zu speichern.
- Ein Initialisierungsskript (`init.sql`) erstellt die Datenbank und die Tabellenstruktur beim ersten Start.

### Nginx Reverse Proxy
- Nginx leitet Anfragen entweder an das Frontend oder Backend weiter, je nach URL:
    - Anfragen an `/api/*` werden an das Spring Boot-Backend weitergeleitet.
    - Anfragen an `/` werden vom React-Frontend bedient.

---

## API-Endpunkte

Hier sind die wichtigsten API-Endpunkte, die vom Backend bereitgestellt werden:

- `GET /api/greetings`: Ruft alle Greetings ab.
- `POST /api/greetings`: Fügt ein neues Greeting hinzu.

Beispiel für den Anfrage-Body für `POST /api/greetings`:
```json
{
  "message": "Hello from Docker!"
}
```

---

## Frontend-Funktionen

Die Frontend-Anwendung bietet folgende Funktionen:
- **Alle Greetings anzeigen**: Zeigt eine Liste aller Greetings an, die von der Backend-API abgerufen wurden.
- **Neues Greeting hinzufügen**: Benutzer können ein neues Greeting hinzufügen, das in der PostgreSQL-Datenbank gespeichert wird.

### Animationen & Styles:
- **Modernes UI**: Das Frontend ist mit CSS gestaltet und hat ein modernes Design.
- **Animierte Interaktionen**: Listenelemente haben Hover-Animationen, und Elemente werden mit Fade-in-Effekten geladen, um ein flüssiges Benutzererlebnis zu gewährleisten.

---


## Fehlerbehebung

Falls du auf Probleme stößt, kannst du die Logs der einzelnen Dienste überprüfen, indem du Folgendes ausführst:

```bash
docker-compose logs <dienstname>
```

Beispiel, um die Logs des Backends zu überprüfen:

```bash
docker-compose logs backend
```

Um alle Container zu stoppen:

```bash
docker-compose down
```

---

