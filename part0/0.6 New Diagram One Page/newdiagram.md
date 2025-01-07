```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user writes a note and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created (Note saved successfully)
    deactivate server

    Note right of browser: The browser fetches updated notes dynamically

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "", "date": "2025-01-06T16:33:13.167Z" }, ... ]
    deactivate server

    Note right of browser: The browser dynamically updates the notes list without reloading
